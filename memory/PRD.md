# QDROPAQ — Refined Marketing Site & Lead Pipeline

## Original Problem Statement
Refine the existing "Loveable" QDROPAQ preview into a more mature, trustworthy, professional version that reflects the nature of pension valuations and QDRO drafting (30+ years; 40,000+ valuations & QDROs; flat $495 fee; Carol Owen principal; Mark K. Altschuler actuary).

## Architecture
- React 19 SPA via react-router-dom 7
- Tailwind + custom CSS variables (warm ivory / slate / bronze palette)
- IntersectionObserver via `useInView` hook; scroll watcher via `useScrollPast`; per-route SEO via `useDocumentMeta`
- API client (axios) in `src/lib/api.js`
- Backend: FastAPI + Motor (async MongoDB)
- Resend transactional email integration (graceful no-op when no API key)
- Token-gated admin dashboard

## Public Pages
`/`, `/about`, `/our-process`, `/unique`, `/fees-and-forms`, `/who-we-are`, `/getting-started`, `/contact`, `/articles/what-is-a-qdro`

## Operator Pages
`/admin` — token-gated dashboard with three tabs: Intakes, Primer leads, Companion leads. Token stored in sessionStorage.

## Backend Endpoints
**Public**
- `GET /api/` — health
- `POST /api/intake` — client intake form
- `POST /api/primer-leads` — Plan Pre-Qualification Primer lead-magnet (idempotent by email)
- `POST /api/companion-leads` — "What to ask your plan administrator" companion sheet (idempotent by email)

**Admin (Bearer ADMIN_TOKEN)**
- `GET /api/admin/me` — token check
- `GET /api/admin/intakes` — list all intakes (newest first)
- `GET /api/admin/primer-leads` — list all primer signups
- `GET /api/admin/companion-leads` — list all companion signups

## Email Service (`/app/backend/email_service.py`)
Three calm, brand-matched HTML templates fired non-blocking via `asyncio.to_thread`:
- Intake → firm notification (with Reply-To set to client)
- Intake → client acknowledgement
- Primer subscriber → PDF download link (BCC firm)
- Companion subscriber → PDF download link (BCC firm)

All send failures are caught and logged; the API endpoints always return 201 on successful persistence.

## SEO
- `useDocumentMeta` hook sets `<title>`, meta description, full Open Graph block (`og:title`, `og:description`, `og:type`, `og:image`, `og:site_name`, `og:url`), Twitter card meta (`summary_large_image`), and canonical URL per route
- `public/index.html` has sensible site-wide defaults

## Cookie Consent
Dismissible banner stored in localStorage (`qdropaq.cookieConsent='accepted'`)

## Forms On Site
Real QDROPAQ fillable request PDFs surfaced on `/fees-and-forms`:
- QDRO Fillable Request Form
- Pension Valuation Fillable Request Form

## Env Vars (`/app/backend/.env`)
- `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS` — required
- `RESEND_API_KEY`, `SENDER_EMAIL`, `FIRM_EMAIL` — email delivery
- `PRIMER_PDF_URL`, `COMPANION_PDF_URL` — lead-magnet PDF links (optional)
- `PUBLIC_SITE_URL` — used in primer footer
- `ADMIN_TOKEN` — operator console access

## Implemented Dates
- 2026-01: refinement pass, all 9 public pages, palette + type system
- 2026-01: code-quality decomposition passes 2–6
- 2026-01: backend intake + primer-leads endpoints, lead-magnet, SEO meta, cookie consent — 100% test pass
- 2026-01: Resend email integration (graceful), real QDROPAQ PDFs wired
- 2026-01: admin console, companion lead-magnet, OG + Twitter card meta

## Backlog
- Provide `RESEND_API_KEY` to activate live email sending
- Provide final Primer + Companion PDF URLs when ready
- DNS records to verify qdropaq.com as a Resend sending domain (SPF, DKIM x2, DMARC)
- Real Carol Owen + Mark K. Altschuler photographs (Unsplash placeholders in use)

## Smart Next Enhancement
Once the two PDFs are in the wild, the highest-leverage move is a **monthly "Carol's Notes" email** to the combined list — one short, plainly written piece on a real-world QDRO question. Builds trust, keeps the list warm, and turns a static referral list into a soft pipeline.
