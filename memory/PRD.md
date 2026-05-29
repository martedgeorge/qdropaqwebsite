# QDROPAQ — Refined Marketing Site

## Original Problem Statement
Refine the existing "Loveable" QDROPAQ preview into a more mature, trustworthy, professional version that better reflects the nature of pension valuations and QDRO drafting. Keep navigation/structure/flow; reduce headline sizes, gradients, animation, promotional energy; increase trust, credibility, whitespace, restraint. Use accurate content from qdropaq.com (30+ years, 40,000+ valuations and QDROs, flat $495 QDRO fee, Carol Owen as principal, Mark K. Altschuler as actuary).

## User Choices Captured
- Aesthetic: **Quiet modern** (warm neutrals, slate ink, restrained sans-serif, calm/editorial)
- Animation: **Very subtle** (gentle fade-ins on scroll only)
- Content: **Refined/tightened** to sound established and reassuring
- Imagery: **Professional photography** (advisors / offices)

## Architecture
- React 19 SPA via react-router-dom 7 (BrowserRouter)
- Tailwind + custom CSS variables for the warm-neutral palette
- IntersectionObserver via `useInView` custom hook
- Scroll watcher via `useScrollPast` custom hook
- Per-route SEO via `useDocumentMeta` custom hook
- API client via axios in `src/lib/api.js`
- Backend: FastAPI + Motor (async MongoDB)

## Pages Implemented
- `/` Home — hero, stats bar, services, philosophy quote, differentiators, team panel, **Primer lead-magnet**, dark closing CTA
- `/about`, `/our-process`, `/unique`, `/fees-and-forms`, `/who-we-are`, `/getting-started`, `/contact`, `/articles/what-is-a-qdro`
- All routes have route-specific `<title>` and `meta description`

## Backend Endpoints
- `GET /api/` — health string
- `POST /api/intake` — accepts `{name, email, phone?, state?, role?, matter?, notes?}`, validates EmailStr, persists to MongoDB `intakes` collection, returns 201 + Intake object
- `POST /api/primer-leads` — captures `{email, role?}` for the Plan Pre-Qualification Primer PDF, persists to `primer_leads`, **idempotent**: a repeat submission with the same email returns the same id
- `POST /api/status`, `GET /api/status` — legacy template endpoints preserved

## Recent Adds (this session)
- Wired `/getting-started` intake form to `POST /api/intake` with loading / error states
- Built `PrimerLeadMagnet` section on the home page — calm "quiet reading" panel + lead capture form bound to `POST /api/primer-leads`
- `useDocumentMeta` hook + per-route titles & descriptions for all 9 pages
- `CookieConsent` banner — dismissible, persists to `localStorage` (`qdropaq.cookieConsent='accepted'`)
- Bulk-removed unused `import React` from 41 files (React 19 + CRA 5 use automatic JSX runtime)
- Split toast reducer into per-action handlers
- Extracted reusable card primitives (`NumberedCard`, `FeatureCard`)

## Implemented Dates
- 2026-01: full refinement pass, all 9 pages, palette + type system
- 2026-01: code-quality refactor passes 2–5 (component decomposition, magic-number constants, custom hooks, cleanup)
- 2026-01: backend intake + primer-leads endpoints, lead-magnet, SEO meta, cookie consent. 100% backend + frontend tests pass.

## Backlog / Next
- P2: send the Primer PDF for real (currently captures the lead and acknowledges; PDF delivery is TBD — e.g. via SendGrid or a static URL email)
- P2: tighten CORS — backend currently uses `*` with `allow_credentials=True`, which is invalid per spec but currently latent (frontend doesn't send credentials)
- P2: real Carol Owen + Mark K. Altschuler photos (Unsplash placeholders in use)
- P3: Open Graph image and Twitter card meta

## Smart Enhancement Suggestion
The Primer lead-magnet is live and will quietly grow a list of pro se petitioners, mediators, and family-law attorneys. Next obvious step: a one-page **"What to ask your plan administrator" companion sheet** — same conversion mechanic, distinct value, builds a richer subscriber profile.
