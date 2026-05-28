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
- Subtle reveal via IntersectionObserver (`/src/components/FadeIn.jsx`) — opacity + 8px translate, no springs
- Font stack: **Newsreader** (editorial serif headings) + **Mulish** (restrained body)
- Palette: ivory `#F5F0E6`, paper `#FBF8F2`, deep slate ink `#1E2A37`, muted bronze `#8A6A3B`, cream hairlines

## Pages Implemented
- `/` Home — hero (smaller display sizes), credibility stats bar, services grid, philosophy quote, "what sets us apart" numbered cards, team panel, dark calm CTA
- `/about` — practice background, by-the-numbers card
- `/our-process` — six-step considered sequence (intake → plan acceptance)
- `/unique` — six differentiation points
- `/fees-and-forms` — flat $495 fee schedule + forms list
- `/who-we-are` — Carol Owen + Mark K. Altschuler profiles + philosophy card
- `/getting-started` — multi-field intake form with success state
- `/contact` — phone / email / mail / jurisdictions tiles + a Carol quote
- `/articles/what-is-a-qdro` — long-form explainer

## Shared Chrome
- `Nav` (sticky, blur background, mobile menu, active-link bronze underline)
- `Footer` (deep ink, four-column, address + phone + email from qdropaq.com)
- `PageHeader` (consistent eyebrow + display headline + lede + hairline)

## What Was Reduced
- Headline scale: H1 ≈ 38–58px (clamp), no 80px+ display
- Removed gradients entirely (solid ivory + paper + ink)
- Removed all motion except a single gentle fade-in pass
- Removed "QDROs done with care, not assembly-line speed" promotional voice → measured, advisory tone

## What Was Increased
- Whitespace (5–6rem section padding, 1180px container)
- Hairline dividers + cream borders instead of cards
- Asymmetric, left-aligned reading flow
- Quiet typography (italic serif accents, uppercase bronze eyebrows)

## Implemented Dates
- 2026-01: full refinement pass, all 9 pages built, palette + type system set up

## Backlog / Next
- P1: Wire intake form to backend `/api/intake` (currently captures and shows success state client-side only)
- P1: Add real Carol Owen + Mark K. Altschuler photographs once provided (Unsplash placeholders in use)
- P2: Add a small "Resources / Articles" index page (single article exists)
- P2: SEO meta tags per route (react-helmet) and Open Graph image
- P2: Cookie banner (qdropaq.com has one)

## Smart Enhancement Suggestion
A short PDF "Plan-Pre-Qualification Primer" gated by email could turn warm visitors into qualified intakes — and quietly build a list for the family-law attorneys and mediators who refer the largest share of QDROPAQ's work.
