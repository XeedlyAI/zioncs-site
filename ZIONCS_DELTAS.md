# ZionCS — Deltas from Xeedly Standards

Project-specific overrides. Anything not documented here follows the library at `C:\Users\shadd\Documents\standards` verbatim.

> **Status:** Phase 0 scaffold. Decisions populate as they're made during intake (Phase 1) and design calibration (Phase 3 of project setup).

---

## Override matrix

| Library standard | What ZionCS overrides | Status |
|---|---|---|
| `DESIGN_SYSTEM` colors | TBD — current Webflow site uses gold/orange + dark navy. Refining during Phase 3. | OPEN |
| `DESIGN_SYSTEM` typography | TBD — Inter + JetBrains Mono is the family default; verify against logo character before deviating | OPEN |
| Background system | TBD — concrete texture overlay vs solid washes | OPEN |
| Photography direction | Move away from "strong worker hard hat" theme toward project-craft photography (the work, the result, scale of jobs). The existing site overdoes the worker-as-mascot tied to logo likeness. | DECIDED |
| Voice calibration | TBD — flatwork contractor voice: practical, direct, operator-grade. Not corporate, not folksy. | OPEN |
| Service area | Utah specifically: Salt Lake Valley + Utah Valley + St. George + Davis/Weber County + Ogden, Wasatch Front | DECIDED |

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
2. **Meta social feed scroll** — pulls current posts from Facebook/Instagram, scrolls horizontally on a section of the homepage. Decision needed on: real-time API integration vs scheduled scrape vs manual curation.
3. **Standard library features:**
   - Calendar booking system (Google Calendar service-account + DWD per `skills/CALENDAR-BOOKING.md`)
   - Intelligence Console mini + full (per `COMPONENT_PATTERNS.md` § 3-4)
   - Dual CTA pattern (orange primary "Request Quote" + ghost "Book Discovery Call")
   - Core 30 SEO content engine (~30 keywords across silos, blog content engine deployment)
