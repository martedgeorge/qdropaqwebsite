"""QDROPAQ backend API tests — covers /api/, /api/intake, /api/primer-leads."""

import os
import uuid
import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback: read from frontend/.env (preview URL is the only externally-routable one)
    from pathlib import Path
    env_path = Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip()
                break

BASE_URL = (BASE_URL or "").rstrip("/")
API = f"{BASE_URL}/api"

MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "test_database")


@pytest.fixture(scope="module")
def mongo_db():
    cli = MongoClient(MONGO_URL)
    yield cli[DB_NAME]
    cli.close()


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ───────────────────────── /api/ health ─────────────────────────
class TestRoot:
    def test_root_status_string(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200, r.text
        data = r.json()
        assert "message" in data
        assert "QDROPAQ" in data["message"]


# ───────────────────────── /api/intake ─────────────────────────
class TestIntake:
    def test_intake_valid_full_payload_persists(self, api_client, mongo_db):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_User_{unique}",
            "email": f"test_intake_{unique}@example.com",
            "phone": "215-555-1212",
            "state": "PA",
            "role": "Attorney",
            "matter": "QDRO drafting",
            "notes": "TEST_ intake regression note",
        }
        r = api_client.post(f"{API}/intake", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        # All submitted fields should echo back
        for k, v in payload.items():
            assert data[k] == v, f"field {k} mismatch: {data.get(k)} != {v}"
        assert isinstance(data.get("id"), str) and data["id"]
        assert isinstance(data.get("submitted_at"), str) and data["submitted_at"]

        # Mongo persistence check
        doc = mongo_db.intakes.find_one({"id": data["id"]}, {"_id": 0})
        assert doc is not None, "Intake not persisted in `intakes` collection"
        assert doc["email"] == payload["email"]
        assert doc["name"] == payload["name"]

    def test_intake_minimal_payload(self, api_client):
        unique = uuid.uuid4().hex[:8]
        payload = {"name": f"TEST_Min_{unique}", "email": f"min_{unique}@example.com"}
        r = api_client.post(f"{API}/intake", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]

    def test_intake_invalid_email_returns_422(self, api_client):
        r = api_client.post(
            f"{API}/intake",
            json={"name": "TEST_BadEmail", "email": "not-an-email"},
        )
        assert r.status_code == 422, r.text
        body = r.json()
        assert "detail" in body and isinstance(body["detail"], list)

    def test_intake_missing_name_returns_422(self, api_client):
        r = api_client.post(f"{API}/intake", json={"email": "noname@example.com"})
        assert r.status_code == 422, r.text
        body = r.json()
        assert "detail" in body and isinstance(body["detail"], list)


# ───────────────────────── /api/primer-leads ─────────────────────────
class TestPrimerLeads:
    def test_primer_valid_returns_201(self, api_client, mongo_db):
        unique = uuid.uuid4().hex[:8]
        email = f"primer_{unique}@example.com"
        r = api_client.post(f"{API}/primer-leads", json={"email": email, "role": "Attorney"})
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["email"] == email
        assert data["role"] == "Attorney"
        assert isinstance(data.get("id"), str) and data["id"]
        assert isinstance(data.get("requested_at"), str) and data["requested_at"]

        # Persistence
        doc = mongo_db.primer_leads.find_one({"id": data["id"]}, {"_id": 0})
        assert doc is not None
        assert doc["email"] == email

    def test_primer_idempotent_returns_same_id(self, api_client):
        unique = uuid.uuid4().hex[:8]
        email = f"primer_dup_{unique}@example.com"
        first = api_client.post(f"{API}/primer-leads", json={"email": email})
        assert first.status_code == 201, first.text
        first_id = first.json()["id"]

        # Second call with same email must return identical id (de-dup)
        second = api_client.post(
            f"{API}/primer-leads", json={"email": email, "role": "Mediator"}
        )
        # Note: response status_code on dedup is still 201 per route decorator
        assert second.status_code == 201, second.text
        second_id = second.json()["id"]
        assert first_id == second_id, (
            f"primer-leads not idempotent: first id={first_id} second id={second_id}"
        )

    def test_primer_invalid_email_returns_422(self, api_client):
        r = api_client.post(f"{API}/primer-leads", json={"email": "nope"})
        assert r.status_code == 422, r.text
        body = r.json()
        assert "detail" in body and isinstance(body["detail"], list)
