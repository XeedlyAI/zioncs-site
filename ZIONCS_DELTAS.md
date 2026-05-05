# ZionCS — Deltas from Xeedly Standards

Project-specific overrides. Anything not documented here follows the library at `C:\Users\shadd\Documents\standards` verbatim.

> **Status:** Phase 0 scaffold. Decisions populate as they're made during intake (Phase 1) and design calibration (Phase 3 of project setup).

---

## Override matrix

| Library standard | What ZionCS overrides | Status |
|---|---|---|
| `DESIGN_SYSTEM` colors | **LOCKED** — refined orange `#E85A19` + warm charcoal `#1F1A14` + cream `#FAF8F2` system. Full palette in `ZIONCS_DESIGN_CALIBRATION.md`. | DECIDED |
| `DESIGN_SYSTEM` typography | **LOCKED** — Inter (weights 400-900) + JetBrains Mono (eyebrows, KPIs). Scale defined in calibration doc. No third font. | DECIDED |
| Background system | **LOCKED** — five-wash rotation: cream-page (default), paper-card (cards), sand-wash (quiet sections), charcoal-dark (hero/footer), orange-tinted (one section per page max). | DECIDED |
| Photography direction | **AI-generated project-craft photography for v1** via `image-generation` skill (Gemini Nano Banana / Pro). Move away from worker-as-mascot. ZionCS will provide real project photos post-launch to swap in. | DECIDED |
| Voice calibration | Practical, direct, operator-grade. Existing brand vocabulary intact: "show up on time, keep the worksite clean, get the job done right" / "honest work, skilled hands, lasting results" / "muscle, grit, and pride." Not corporate, not folksy, not SaaS. | DECIDED |
| Service area | **Utah only** for current operations and copy — Wasatch Front + St. George. Sandy, UT 84070 home base. WY/MT expansion is forward-looking brand vision (in the logo) but not yet operational. | DECIDED |
| Logo treatment | **Use full circular-emblem horizontal logo** (`zioncs-logo-horizontal.png` + white variant). The WY/UT/MT around the bottom is forward-looking brand vision — ZionCS intends to expand. Site copy stays Utah-only until the expansion happens. | DECIDED |
| Trust signals | **No license #, insurance limits, or bonding numbers displayed.** Trust comes through reviews + project work + named case studies. | DECIDED |
| Booking system | **Stubbed for v1.** UI exists but calendar integration deferred until Google Workspace emails are provisioned. Submissions go to `admin@zioncs.com` via Resend until then. Single calendar endpoint with `booking_type` metadata for persona routing. | DECIDED |
| Pricing posture | **No published pricing.** Quote-only. All conversion paths → project info form / quote request / contact. | DECIDED |
| Conversion CTAs | Primary: "Request a Quote" (project info form). Secondary: "Contact Us" (contact page) on residential pages; "Book a Discovery Call" on commercial/enterprise pages. Phone always-on in header. | DECIDED |

---

## Color overrides — LOCKED

Industrial-precise palette. Engineering-drawing energy, not SaaS-electric. Built around concrete itself: anthracite, concrete, bone — with sparing data accents (steel, rebar) for techy precision.

| Role | Hex |
|---|---|
| Brand orange (primary CTA) | `#E85A19` |
| Brand orange hover | `#C44A12` |
| Brand orange muted | `#FCEBE0` |
| Anthracite (deep dark / foreground) | `#1A1814` |
| Anthracite elevated | `#26221C` |
| Anthracite overlay | `#322D26` |
| Concrete (mid neutral) | `#8A857C` |
| Bone (page bg) | `#F4F0E8` |
| Paper (card surface) | `#FFFFFF` |
| Sand (section wash) | `#EDE8DC` |
| Warm border | `#E0DBCF` |
| Stone (muted text) | `#6B6760` |
| Slate-warm (subtle) | `#8C8478` |
| Steel (data accent) | `#3F6B7D` |
| Steel light | `#5C8FA3` |
| Rebar (live signal / positive) | `#7DA84F` |
| Gold (caution) | `#C49A2C` |
| Brick (critical) | `#A84426` |

Avoid: pure black/white, cool Tailwind slates, electric data blue (Pando-keyed), bright Webflow orange `#ED7D31`, neon SaaS greens.

Full palette rationale in `ZIONCS_DESIGN_CALIBRATION.md`.

---

## Background overrides — LOCKED

Six-wash rotation, weighted toward more dark sections than my prior calibration to reflect the data-infused IP balance.

1. **`bone-page` (`#F4F0E8`)** — default page background
2. **`paper-card` (`#FFFFFF`)** — card surfaces only
3. **`sand-wash` (`#EDE8DC`)** — quiet sections (FAQ, secondary content)
4. **`anthracite-base` (`#1A1814`)** — hero, KPI ribbon, footer, deep-dark sections
5. **`anthracite-elevated` (`#26221C`)** — cards on dark sections, mid-layer surfaces
6. **`anthracite-overlay` (`#322D26`)** — glass cards, console panels, hover states

Plus optional accent: orange-tinted (`#FDF1EA` light / `#322822` dark) — one section per page max.

Background overlays:
- **`topo-bg-dark.svg` / `topo-bg-light.svg`** — Wasatch elevation lines at 5-8% opacity on anthracite/bone surfaces
- **`engineer-grid.svg`** — optional 1/8" grid at 4-6% opacity on technical content surfaces

Page-level wash plans live in the calibration doc. Wash distribution shifted to roughly **45% dark / 45% light / 10% accent**.

---

## Typography overrides — LOCKED

- **Inter** (weights 400/500/600/700/800/900) via `next/font/google`
- **JetBrains Mono** (weights 400/500) via `next/font/google`
- No third font

Type scale (clamp-based fluid sizing), eyebrow style (uppercase tracking-`[0.15em]` JetBrains Mono), and use rules in calibration doc.

---

## Component pattern overrides — LOCKED

Project-specific data-infused components beyond the library defaults. Each may eventually graduate into a library standard if the pattern repeats; for now, ZionCS-specific.

### NEW custom components (ZionCS-specific for v1)

| Component | Purpose |
|---|---|
| **Service-spec block** | Code-block-style technical spec card on each service detail page (concrete grade, PSI, thickness, reinforcement, finish, cure time, warranty). Mono typography. Looks like an engineering spec sheet. |
| **Project card with timeline** | Project gallery card with structured Day 1 / Day 2 / Day 3 timeline data + scale stats. Replaces marketing-tile aesthetic with engineering-brief feel. |
| **Service area map** | Utah outline + Wasatch Front highlighted region + dot markers for served cities + optional "currently working at..." live pin. Replaces a static "we serve these cities" list with a vector data viz. |
| **Climate data overlay components** | Freeze-thaw cycle chart, soil composition diagram, frost depth diagram. Used on Utah-climate articles to elevate them from blog post to engineering brief. |
| **Live indicator components** | Pulsing dots (`<LiveDot status="active|busy|complete" />`), status chips with 3px-left-border accent, live timestamps with auto-update |
| **Data-overlay on photography** | Subtle GPS coordinates / scale indicators / dimension callouts / soil annotations layered over select hero and feature photos. Reads as "project briefing," not "marketing image." |

### Library components used (no override)

Per `COMPONENT_PATTERNS.md`:
- Intelligence Console mini + full (foregrounded — hero placement + dedicated section)
- KPI Ticker (extended with sparklines per ZionCS)
- Console Action System (calendar / contact_info / intake / direct_chat — routed for ZionCS personas)

### Other custom components (operational features)

- **Project gallery** with filter chips by service type (driveways / sport courts / commercial / etc.)
- **Social media feed scroll** — horizontal scroll with `scroll-snap-x`, manual curation per `briefs/zioncs.md` § 7
- **Numbered service grid** — homepage layout, 11 services in 2-column grid with VCASS-inspired numbered prefix system

Detailed specs in `ZIONCS_DESIGN_CALIBRATION.md`.

---

## Voice calibration

TBD — to be developed alongside personas in Phase 1. Anchors:
- Flatwork contractor on the Wasatch Front
- Buyers include both residential homeowners and major commercial developers — voice must work across the range
- Differentiator anchors: "show up on time, keep the worksite clean, get the job done right"
- Avoid: SaaS vocabulary, corporate speak, AI/tech jargon (they're a contractor)

---

## Build/deploy variations

- **Stack:** Next.js 16, Tailwind v4 (per library default in `web-template`)
- **Deployment:** Vercel
- **Domain:** zioncs.com (cutover at end of project — staged at `[project].vercel.app` until then)
- **Photo + video gallery:** TBD storage decision — direct in `/public/`, Vercel Blob, or external CDN
- **Meta social feed:** TBD integration approach — Meta Graph API requires app review; alternative: scraped or RSS-feed-style mirror

---

## Required custom features (specific to this project)

1. **Dynamic project gallery** — photos AND video; filterable by service type; auto-resize and lazy-load
   - **v1 content:** AI-generated mock project content via `image-generation` skill (4-5 mock projects across personas with realistic Utah geography)
   - **Storage:** Vercel Blob for photos; Mux or Vercel Blob for video
   - **Data source:** TS file (`src/data/projects.ts`) — version-controlled, no CMS overhead. Move to Sanity later if client wants self-serve.

2. **Meta social feed scroll** — manual curation v1, hardcoded TS file
   - Facebook: https://www.facebook.com/profile.php?id=61573114690934
   - Instagram: https://www.instagram.com/zionconcretespecialists/
   - Component: `<SocialFeedScroll>` — horizontal `scroll-snap-x` row, last 10-15 posts, ISR daily revalidation
   - Phase 2+: optional Meta Graph API integration after site is live

3. **Standard library features:**
   - **Calendar booking system** (stubbed v1) — UI flow per `skills/CALENDAR-BOOKING.md`, but submissions email to `admin@zioncs.com` instead of creating calendar events. Wire up real calendar integration when Kevin/Amy/Josh have Google Workspace emails.
   - Intelligence Console mini + full (per `COMPONENT_PATTERNS.md` § 3-4)
   - Two-CTA pattern (orange "Request a Quote" primary + persona-contextual secondary)
   - Core 30 SEO content engine (~30 keywords across silos, blog content engine deployment) — minus cost-anchored articles

## Founders / Team

- **Kevin Handrin** — Owner / General Manager
- **Amy Carlin** — Marketing / PR / Office Manager
- **Josh Rowberry** — Project Manager
- Webflow assets contain photos labeled `Amy pic.png` and `Josh pic.png` — usable for About page
- "Concrete Dude with team.png" is presumably Kevin (or Josh — confirm when team photos are reviewed in detail)
- Email infrastructure: not yet on Google Workspace; using `admin@zioncs.com` as the active inbox. Workspace migration is a client task; site won't gate on it.

## GBP Description (proposed replacement — replaces current one with WY/MT removed)

Current GBP description claims "expanded services in Wyoming and Montana" — false; added aspirationally. Replace with:

> Zion Concrete Specialists is Utah's trusted concrete flatwork contractor, serving the Wasatch Front from Ogden through Salt Lake Valley to Provo and as far south as St. George. We deliver residential and commercial concrete — from small repair jobs to large-scale projects. Our expertise covers driveways, sport courts, RV pads, splash pads, dumpster pads, sidewalks, decorative finishes, stamped concrete, foundations, and concrete repairs. Based in Sandy, UT and built on a foundation of integrity, hard work, and pride in every pour. Show up on time, keep the worksite clean, get the job done right.

**Status: APPLIED 2026-05-04.** Client updated GBP description in their GBP manager. WY/MT claim removed; Utah-only service area now reflected accurately on Google.

## Reviews

- Currently 6 Google reviews at 5.0 stars
- Display "⭐ 5.0 / 6 Reviews on Google" in hero social-proof bar (or similar)
- Plan a polite review-request flow to recent customers post-launch (Wave 9-ish) to grow the base

## Hours

- Mon-Fri 8:00 AM – 5:00 PM Mountain Time (default — confirm with client if different)
- No emergency / after-hours line
- Display: footer + LocalBusiness JSON-LD + Contact page
- "Open now" status pulls from these
