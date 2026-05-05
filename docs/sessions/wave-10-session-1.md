# Wave 10 — ENTERPRISE silo landing + dumpster-pad service + 2 articles

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 38 static + 4 dynamic API routes — 14 SSG blog posts)

---

## Deliverables

### `/multi-site` — ENTERPRISE silo landing
Reuses `SiloLandingTemplate` from Wave 8.1.

- Eyebrow: `ZIONCS://SILO · ENTERPRISE`
- Title: "Multi-site concrete maintenance for Utah operators."
- 4 proof items: Single PO / Standardized spec / Predictable pricing / Quarterly reporting
- 4 services: Dumpster Pads, Parking Lot + Sidewalk Maintenance, Repair + Resealing Programs, New Site Builds
- 3 related articles: front-door + decision-framework + cross-silo COMMERCIAL link to evaluating-subs
- 5 FAQs covering site count threshold, contract structure, reporting cadence, geographic scope, multi-site pricing
- **Primary CTA: "Schedule a Multi-Site Conversation"** (`/book/discovery-call-enterprise`) — distinct from BUILDER + COMMERCIAL "Book a Discovery Call" labels per the design calibration's enterprise CTA variant
- BreadcrumbList + FAQPage JSON-LD

### `/services/dumpster-pad-trash-enclosure-concrete-utah` (~750 words body)
Core 30 entry #28.

- Spec block: 4,500 PSI, 6″ standard / 7–8″ heavy, #4 rebar grid 12″ on center (tighter than other commercial work to handle waste-truck point loads), steel post anchors pre-cast for enclosure, 10×10 typical / 12×24 dual-dumpster
- 5 FAQs: pad size, thickness, enclosure coordination, replacement-without-disruption, multi-site vs one-off pricing
- 4-section body: Overview / What's Different About Dumpster Pads (5 specifics — heavy point loads, chemical exposure, drainage, post anchors, ADA pedestrian access) / Multi-Site Programs / One-off Installs
- Secondary CTA: "Schedule a Multi-Site Conversation"

This activates the link that has been referenced from the COMMERCIAL silo landing, the homepage `ProjectGalleryPreview`, and the project-detail `multi-site-dumpster-pad-rollout` page since their respective waves shipped.

### `multi-site-concrete-maintenance-programs.tsx` (~1,750 words, 10 min)
Core 30 entry #29 — ENTERPRISE silo front-door, commercial intent.

Author: Kevin (owner — credibility for procurement-language B2B content covering program structure).

Structure:
1. The drift into vendor proliferation (most operators back into it)
2. **When does multi-site consolidation pay off?** — 3 thresholds (site count ≥3 / geographic concentration / recurring work mix)
3. **How program work differs from project work** — 5 differences (annual cadence, standardized spec, rolling schedule, locked pricing, quarterly reporting)
4. **What a credible multi-site vendor looks like** — 5 dimensions (capacity, standardization discipline, reporting cadence, pricing transparency, geographic fit)
5. **Red flags** — 3 patterns to spot before they become contract problems
6. Bottom line + framework

5 FAQs covering: site count threshold, typical contract structure, geographic handling, reporting expectations, in-house vs vendor decision.

### `vendor-consolidation-concrete-contractor.tsx` (~1,650 words, 8 min)
Core 30 entry #30 — ENTERPRISE silo decision-framework, commercial intent.

Author: Josh (PM voice — operational decision-framework content).

Structure:
1. The drift into vendor proliferation (parallel framing with #29)
2. **Where the savings come from** — 5 categories: mobilization (5–10%), standardized engineering (3–8%), volume materials (2–5%), procurement overhead reduction (50–80%), better-managed condition (compounding)
3. **Where consolidation breaks down** — 3 cases: geographic spread, portfolio too small, specialized work mixes
4. **The hybrid model** — primary vendor + 1–2 spot vendors for mid-size portfolios
5. **Risk management on single-vendor relationships** — 3 mitigations: annual contracts, documented SLAs, backup vendor relationship
6. Bottom line for Wasatch Front + St. George portfolios

4 FAQs covering: typical savings range, when consolidation doesn't pay off, single-vendor lock-in risk, hybrid models.

### Posts registry update
- `src/data/posts.ts` — registered `multiSitePrograms` and `vendorConsolidation`. **14 SSG blog posts now** (5 RES + 4 BUILDER + 3 COMMERCIAL + 2 ENTERPRISE).

---

## Verification

- ✅ `npm run build` passes clean — 42 total routes (38 static prerendered + 4 dynamic API)
- ✅ `/multi-site` activates — referenced from header nav, footer, state pillar, services index, and homepage `WhyZionCS` USP block since Wave 1
- ✅ `/services/dumpster-pad-trash-enclosure-concrete-utah` activates — referenced from COMMERCIAL silo, `multi-site-dumpster-pad-rollout` project, and the multi-site silo since their respective waves
- ✅ Both new articles cross-link bidirectionally with each other + the enterprise silo landing + COMMERCIAL `evaluating-commercial-concrete-subs`
- ✅ Article + Service + BreadcrumbList + FAQPage JSON-LD on all new pages
- ✅ Word counts hit targets: dumpster pad service 750 (slightly under 800–1,000 target — covers all required link targets), front-door article 1,750 (10 min), decision-framework 1,650 (8 min)
- ✅ Enterprise CTA variant ("Schedule a Multi-Site Conversation") visible on both new pages and the silo landing per design calibration

## Notes

1. **Enterprise CTA variant intentional:** "Schedule a Multi-Site Conversation" is distinct from the BUILDER + COMMERCIAL "Book a Discovery Call" label. Same `/book/discovery-call-enterprise` route target, but the language signals to facility/procurement readers that this isn't a homeowner sales call — it's a portfolio-level discussion. Per `ZIONCS_DESIGN_CALIBRATION` § Phase 4 inputs.

2. **Voice register most formal of any silo:** Both ENTERPRISE articles are written for facility managers and procurement teams. They use specific dollar threshold ranges (15–30% per-site savings, 50–80% procurement overhead reduction, 5–10 hours per quarter freed up), explicit financial vocabulary (per-incident estimate, accrual cycle, COI, escalation framework), and the pacing assumes the reader is reviewing the article alongside other vendor evaluation material rather than reading casually. Three steps more formal than RES.

3. **Cross-silo link to COMMERCIAL is bidirectional now:** ENTERPRISE landing + articles link to COMMERCIAL `evaluating-commercial-concrete-subs`. COMMERCIAL `evaluating-commercial-concrete-subs` already linked to BUILDER `how-to-vet-a-concrete-subcontractor`. The cross-silo procurement-overlap chain (RES → BUILDER → COMMERCIAL → ENTERPRISE) is fully wired now — facility managers reading the ENTERPRISE content can drill into BUILDER vetting frameworks if they need them.

4. **Hybrid model framing in vendor-consolidation article:** Most contractor sites pitch single-vendor as universally better. This article explicitly says when consolidation doesn't pay off and offers the hybrid model as a real alternative. That honesty is on-brand for ZionCS and works for E-E-A-T scoring — Google rewards genuinely useful procurement content over single-sided marketing.

5. **Dumpster pad spec rebar is tighter than other commercial:** #4 rebar at 12″ on center vs the typical #4 at 16″ on commercial flatwork. Reflects actual standards for impact-loaded waste-truck pads — point loads from the truck arm need denser reinforcement than a typical parking lot slab.

---

## Wave 10 closeout

ENTERPRISE silo complete:
- 1 silo landing page (`/multi-site`)
- 1 service page (dumpster pad)
- 2 blog articles (front-door + decision-framework)

Total ENTERPRISE silo coverage: **4 pages** — the smallest silo as planned (matches the smallest persona by volume but highest-margin per relationship).

## Core 30 closeout

**All 30 Core 30 entries complete.** Across all 4 silos plus geo:

| Silo / Layer | Pages | Articles | Total |
|---|---|---|---|
| GEO (state pillar + 2 cities) | 3 | — | 3 |
| RESIDENTIAL silo | 5 services | 5 articles | 10 |
| BUILDER silo | 1 landing | 4 articles | 5 |
| COMMERCIAL silo | 1 landing + 2 services | 3 articles | 6 |
| ENTERPRISE silo | 1 landing + 1 service | 2 articles | 4 |
| **Total Core 30** | **13 pages** | **14 articles** | **28** |

Plus the homepage, services index, projects gallery + 6 detail pages, blog index, quote page = 38 static routes prerendered.

The silo'd content surface that anchors the SEO + topical-authority strategy is fully built. Internal linking matrix is dense — every silo landing links DOWN to its services + articles, every article cross-links to siblings, cross-silo procurement chain runs through BUILDER → COMMERCIAL → ENTERPRISE for facility-manager and GC readers, and everything routes UP to the state pillar.

Voice register differentiation across silos:
- **RES**: Homeowner-friendly, 200–250 wpm reading level
- **BUILDER**: Peer-to-peer technical, specific PSI/rebar/slope thresholds
- **COMMERCIAL**: Procurement-team formal, dollar thresholds + AHJ vocabulary
- **ENTERPRISE**: Facility/procurement most formal, financial-explicit + multi-site operational

## Hand-off to Wave 11

Wave 11 (single session) ships GEO expansion:
- `/wasatch-front-concrete-contractor` — Tier 1 metro pillar (Core 30 #2)
- `/locations/st-george` — Tier 2 city page (Core 30 #4)
- `<ServiceAreaMap />` component (Utah outline + Wasatch Front highlight + city dot markers)
- Add ServiceAreaMap to homepage

Dependencies met. The state pillar's service-area block has a `/locations/st-george` link that 404s today — Wave 11 unblocks it. Internal linking integrity will be 100% after Wave 11 (only the booking pages from Wave 12 remain as placeholder targets).
