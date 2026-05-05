# Wave 9 Session 2 — COMMERCIAL pour scheduling + procurement articles

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 37 static + 4 dynamic API routes — 12 SSG blog posts)

---

## Deliverables

### `src/content/blog/commercial-concrete-pour-scheduling.tsx` (~1,750 words, 8 min)
Core 30 entry #25 — COMMERCIAL silo process-guide, informational intent.

Author: Josh (PM voice — operational scheduling content lands best from project-management byline).

Structure:
1. Why concrete subs become the schedule risk (or don't)
2. **Four constraints driving the schedule** — weather windows / inspection schedules / tenant + construction access / ready-mix availability
3. **Sequencing a typical commercial project** — 9-step concrete-replacement timeline with phases mapped against weeks (-2 through +3)
4. Where projects actually slip — 3 ranked common slips
5. What to expect from a credible sub on scheduling — 4 specific tells

4 FAQs covering pour-date commitment timing, weather thresholds for reschedule, inspection-delay handling, realistic 10K sq ft pour timeline.

### `src/content/blog/evaluating-commercial-concrete-subs.tsx` (~1,700 words, 10 min)
Core 30 entry #26 — COMMERCIAL silo decision-framework, commercial intent. Cross-silo reference to BUILDER `how-to-vet-a-concrete-subcontractor` per Core 30 spec.

Author: Kevin (owner — procurement-language B2B content).

Structure:
1. **Five evaluation dimensions** — reference profile / capacity / change-order history / schedule discipline / Utah-specific competence
2. **How to weight the evaluation** — relative weighting framework
3. **What to do with the evaluation** — 4-tier decision matrix

5 FAQs covering: commercial vs residential evaluation differences, bonding-capacity gating, credible change-order rates (3–8% range named explicitly), Utah-specific experience importance, lowest-bid awards.

Internal links to BUILDER's `how-to-vet-a-concrete-subcontractor` (cross-silo), the W9.2 sibling pour-scheduling article, the W9.1 Utah Soil article, and the `/commercial` silo landing.

### Posts registry update
- `src/data/posts.ts` — registered `commercialScheduling` and `evaluatingCommercialSubs`. **12 SSG blog posts now** (5 RES + 4 BUILDER + 3 COMMERCIAL).

---

## Verification

- ✅ `npm run build` passes clean — 38 total routes (37 static + 4 dynamic API minus 3 the breakdown counts → 35 static prerendered + 12 SSG blog posts means each blog gets prerendered separately; 4 dynamic API routes for /api/query, /api/intake, /api/direct-message, /api/quote)
- ✅ Both new articles cross-link bidirectionally with W9.1 articles + COMMERCIAL silo landing
- ✅ Article + BreadcrumbList + FAQPage JSON-LD on both new posts
- ✅ COMMERCIAL silo landing's related-articles grid now resolves to all 3 live targets (Utah Soil + pour scheduling + evaluating subs)
- ✅ Cross-silo link to BUILDER `how-to-vet-a-concrete-subcontractor` resolves
- ✅ Word counts: 8 min / 10 min match Core 30 reading-time targets

## Notes

1. **Commercial procurement voice differentiator:** Both articles assume a procurement-team reader. They use specific dollar thresholds ($50K / $250K / $500K bonding gates), specific change-order rate ranges (3–8%), and procurement vocabulary ("RFP," "AHJ inspector," "bonding capacity," "structured contract"). The voice register is one step more formal than BUILDER articles and two steps more formal than RES.

2. **Scheduling article uses an explicit 9-step sequence:** Most contractor sites talk about "phased pours" abstractly. This article shows the actual week-by-week sequence for a 10,000 sq ft retail center replacement — Week -2 through Week 3, with what happens at each stage. That specificity is the differentiator for procurement readers who want to see if the sub thinks about projects the way they do.

3. **Cross-silo link to BUILDER article:** The Core 30 spec called for `evaluating-commercial-concrete-subs` to reference `how-to-vet-a-concrete-subcontractor` from the BUILDER silo. This is the cross-silo procurement-overlap link — both audiences (commercial GCs and residential builders) face the sub-evaluation problem, and the BUILDER article's framework applies. Article body internal-links to it directly.

4. **Sub-evaluation framework intentionally doesn't position ZionCS:** The article is genuine procurement content, not a marketing piece. The closing line says "see our commercial silo page" rather than rigging the evaluation criteria to favor us. E-E-A-T scoring rewards genuinely useful procurement content.

---

## Wave 9 closeout

COMMERCIAL silo complete:
- 1 silo landing page (`/commercial`)
- 2 service pages (commercial flatwork + foundations)
- 3 blog articles (Utah Soil + pour scheduling + evaluating subs)

Total COMMERCIAL silo coverage: **6 pages** — the largest silo so far. Two of the articles (Utah Soil + evaluating subs) hit competitive moats: the Utah-soil article owns the regional vocabulary that out-of-state competitors can't credibly write, and the procurement-evaluation article hits a B2B information gap most concrete contractor sites avoid.

**Cumulative silo coverage now:**
- RES (Wave 4): 5 service pages + 5 blog articles + 2 location pages + state pillar = **13 pages**
- BUILDER (Wave 8): 1 silo landing + 4 blog articles = **5 pages**
- COMMERCIAL (Wave 9): 1 silo landing + 2 service pages + 3 blog articles = **6 pages**
- Total silo'd content: **24 pages**

## Hand-off to Wave 10

Wave 10 (single session) ships ENTERPRISE silo:
- `/multi-site` silo landing per Core 30 #27
- `/services/dumpster-pad-trash-enclosure-concrete-utah` per Core 30 #28
- `multi-site-concrete-maintenance-programs.tsx` per Core 30 #29
- `vendor-consolidation-concrete-contractor.tsx` per Core 30 #30
- Enterprise CTA variant: "Schedule a Multi-Site Conversation"

Dependencies met. ENTERPRISE is the smallest silo (4 entries vs BUILDER's 5 and COMMERCIAL's 6) — all in a single session. After 10, the Core 30 silo content is complete and we move to GEO expansion (Wave 11) + booking (Wave 12) + standard pages (Wave 13) + SEO polish (Wave 14).
