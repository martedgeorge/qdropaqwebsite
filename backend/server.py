from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import re
from pathlib import Path
from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import List, Dict, Any, Optional
import uuid
from datetime import datetime, timezone

from email_service import send_intake_emails, send_primer_email


ROOT_DIR: Path = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url: str = os.environ['MONGO_URL']
client: AsyncIOMotorClient = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app: FastAPI = FastAPI()
api_router: APIRouter = APIRouter(prefix="/api")


# ───────────────────────── Models ─────────────────────────
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class IntakeCreate(BaseModel):
    """Intake submission from the Getting Started form."""
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    state: Optional[str] = Field(default=None, max_length=80)
    role: Optional[str] = Field(default=None, max_length=80)
    matter: Optional[str] = Field(default=None, max_length=200)
    notes: Optional[str] = Field(default=None, max_length=5000)


class Intake(IntakeCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    submitted_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class PrimerLeadCreate(BaseModel):
    """Lead-magnet sign-up for the Plan Pre-Qualification Primer PDF."""
    email: EmailStr
    role: Optional[str] = Field(default=None, max_length=80)


class PrimerLead(PrimerLeadCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    requested_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ───────────────────────── Helpers ─────────────────────────
def _to_doc(model: BaseModel) -> Dict[str, Any]:
    """Convert a pydantic model to a Mongo-storable dict (ISO timestamps)."""
    doc = model.model_dump()
    for k, v in doc.items():
        if isinstance(v, datetime):
            doc[k] = v.isoformat()
    return doc


# ───────────────────────── Routes ─────────────────────────
@api_router.get("/")
async def root() -> Dict[str, str]:
    return {"message": "QDROPAQ API is online."}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(payload: StatusCheckCreate) -> StatusCheck:
    obj = StatusCheck(**payload.model_dump())
    await db.status_checks.insert_one(_to_doc(obj))
    return obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks() -> List[Dict[str, Any]]:
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.post("/intake", response_model=Intake, status_code=201)
async def submit_intake(payload: IntakeCreate) -> Intake:
    """Receive a new client intake. Stored in `intakes` collection."""
    obj = Intake(**payload.model_dump())
    await db.intakes.insert_one(_to_doc(obj))
    logger.info("Intake received: %s (%s)", obj.email, obj.id)
    # Best-effort email; never blocks the persistence path.
    try:
        await send_intake_emails(_to_doc(obj))
    except Exception as exc:  # noqa: BLE001
        logger.error("Intake email dispatch failed for %s: %s", obj.id, exc)
    return obj


@api_router.post("/primer-leads", response_model=PrimerLead, status_code=201)
async def request_primer(payload: PrimerLeadCreate) -> PrimerLead:
    """Request the Plan Pre-Qualification Primer PDF — captures email + optional role."""
    # Light de-dup: if the same email already requested, don't create a second row
    # AND don't re-send the email.
    existing = await db.primer_leads.find_one({"email": payload.email}, {"_id": 0})
    if existing:
        if isinstance(existing.get('requested_at'), str):
            existing['requested_at'] = datetime.fromisoformat(existing['requested_at'])
        return PrimerLead(**existing)
    obj = PrimerLead(**payload.model_dump())
    await db.primer_leads.insert_one(_to_doc(obj))
    logger.info("Primer lead captured: %s (%s)", obj.email, obj.id)
    try:
        await send_primer_email(_to_doc(obj))
    except Exception as exc:  # noqa: BLE001
        logger.error("Primer email dispatch failed for %s: %s", obj.id, exc)
    return obj


# Validation error → 422 by default; convert pydantic errors to a quieter shape
@app.exception_handler(ValueError)
async def value_error_handler(_req, exc: ValueError):
    raise HTTPException(status_code=400, detail=str(exc))


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger: logging.Logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client() -> None:
    client.close()


# Silence unused-import warnings for re/uuid which may be useful for future endpoints
_ = (re, uuid)
