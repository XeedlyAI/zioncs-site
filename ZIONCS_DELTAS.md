# ZionCS — Deltas from Xeedly Standards

Project-specific overrides. Anything not documented here follows the library at `C:\Users\shadd\Documents\standards` verbatim.

> **Status:** Phase 0 scaffold. Decisions populate as they're made during intake (Phase 1) and design calibration (Phase 3 of project setup).

---

## Override matrix

| Library standard | What ZionCS overrides | Status |
|---|---|---|
| `DESIGN_SYSTEM` colors | TBD — current Webflow uses bright orange + dark navy + light gray. Refining during Phase 3. | OPEN |
| `DESIGN_SYSTEM` typography | TBD — Inter + JetBrains Mono is the family default; verify against tiger-logo character before deviating | OPEN |
| Background system | TBD — concrete texture overlay vs solid washes | OPEN |
| Photography direction | **AI-generated project-craft photography for v1** via `image-generation` skill (Gemini Nano Banana / Pro). Move away from worker-as-mascot. ZionCS will provide real project photos post-launch to swap in. | DECIDED |
| Voice calibration | Practical, direct, operator-grade. Existing brand vocabulary intact: "show up on time, keep the worksite clean, get the job done right" / "honest work, skilled hands, lasting results" / "muscle, grit, and pride." Not corporate, not folksy, not SaaS. | DECIDED |
| Service area | **Utah** primarily — Wasatch Front + St. George. Sandy, UT 84070 home base. (Note: GBP description currently mentions WY + MT — needs reconciliation; defaulting to Utah-only for v1 unless client confirms otherwise.) | DECIDED |
| Trust signals | **No license #, insurance limits, or bonding numbers displayed.** Trust comes through reviews + project work + named case studies. | DECIDED |
| Booking system | **Stubbed for v1.** UI exists but calendar integration deferred until Google Workspace emails are provisioned. Submissions go to `admin@zioncs.com` via Resend until then. Single calendar endpoint with `booking_type` metadata for persona routing. | DECIDED |
| Pricing posture | **No published pricing.** Quote-only. All conversion paths → project info form / quote request / contact. | DECIDED |
| Conversion CTAs | Primary: "Request a Quote" (project info form). Secondary: "Contact Us" (contact page) on residential pages; "Book a Discovery Call" on commercial/enterprise pages. Phone always-on in header. | DECIDED |

---

## Color overrides

TBD — to be decided in Phase 3 (design calibration). Current Webflow palette under review.

---

## Background overrides

TBD.

---

## Typography overrides

TBD. Library default (Inter + JetBrains Mono) is the starting point.

---

## Component pattern overrides

TBD. Anticipated overrides:
- **Project gallery** — new feature; not currently in `COMPONENT_PATTERNS.md`. Will be ZionCS-specific until pattern repeats on a second project.
- **Social media thread (Meta feed scroll)** — new feature; ZionCS-specific.

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

- **Kevin** (last name pending) — Owner / General Manager
- **Amy** (last name pending) — Marketing / PR / Office Manager
- **Josh** (last name pending) — Project Manager
- Webflow assets contain photos labeled `Amy pic.png` and `Josh pic.png` — usable for About page
- "Concrete Dude with team.png" is presumably Kevin or Josh — confirm at next session
- Email infrastructure: not yet on Google Workspace; using `admin@zioncs.com` as the active inbox. Workspace migration is a client task; site won't gate on it.

## Reviews

- Currently 6 Google reviews at 5.0 stars
- Display "⭐ 5.0 / 6 Reviews on Google" in hero social-proof bar (or similar)
- Plan a polite review-request flow to recent customers post-launch (Wave 9-ish) to grow the base

## Hours

- Mon-Fri 8:00 AM – 5:00 PM Mountain Time (default — confirm with client if different)
- No emergency / after-hours line
- Display: footer + LocalBusiness JSON-LD + Contact page
- "Open now" status pulls from these
