# Wave 4 Session 2 — Climate data viz components + 3 more RES articles (decision/magnetizer/process)

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 19 static routes incl. 5 SSG blog posts)

---

## Deliverables

### Climate data overlay components (`src/components/data/`)

All three are server-renderable, no JS, no chart library, all use the ZionCS palette.

#### `FreezeThawCycleChart.tsx`
- 12-month horizontal bar chart for the Wasatch Front
- Bar width scales to cycles per month, color intensity steps through warm-border / steel / gold / brick at thresholds 0 / 1–4 / 5–9 / 10+
- Total annual cycles surfaced in the caption (current data: 72 cycles/yr — matches the calibration's "approx 70")
- Legend strip at bottom + source caption
- Card-light + status-steel chrome, like the engineering-spec block

#### `SoilCompositionDiagram.tsx`
- Cross-section visualization of Wasatch Front alluvial soil profile
- 4 stacked layers (topsoil / clay-loam / rocky alluvium / bedrock-dense) at varying heights
- Each layer: mono label + depth range + brief description, on warm earth-tone backgrounds (sienna → charcoal gradient down)
- Caption notes generalized profile, varies by neighborhood

#### `FrostDepthDiagram.tsx`
- Bar chart of frost depth + foundation depth by Utah region
- 4 regions: St. George (mild), Salt Lake/Sandy (Wasatch Front standard), Logan/Ogden (northern Wasatch), Park City (mountain)
- Two stacked bars per region: anthracite for foundation depth, steel for frost depth — visually shows the foundation has to exceed the frost
- Numeric values rendered inside each bar in mono caption

### Updated article: `why-utah-concrete-cracks`
- Replaced the Wave 4.1 placeholder card with the real `<FreezeThawCycleChart />`
- No other content changes — placeholder was structurally identical so the swap is content-only

### 3 new RES articles

#### `driveway-replacement-vs-repair` (~1,150 words, 7 min)
Core 30 entry #13 — RESIDENTIAL silo decision-framework, commercial intent.

Author: Josh Rowberry (project manager — the right voice for a decision-framework piece).

Body covers: 4-step decision framework (identify failure pattern → check subgrade → apply decision matrix → second opinion), three failure-pattern categories (cosmetic / functional / structural), rough budget ranges by scenario, contractor-pushback red flag. 5 FAQs.

#### `10-common-residential-concrete-problems` (~1,400 words, 8 min)
Core 30 entry #14 — RESIDENTIAL silo magnetizer, informational intent.

Author: Editorial Team. Body is the actual 10-item listicle: hairline shrinkage / working cracks / wide structural cracks / map cracking / spalling / settling / heaving / crumbling joints / discoloration / pop-outs. Each item: what it looks like / what it means / when to act. Closes with a 3-question triage rule. 3 FAQs.

#### `what-to-expect-when-you-request-a-concrete-quote` (~1,300 words, 6 min)
Core 30 entry #15 — RESIDENTIAL primary, cross-references BUILDER and COMMERCIAL.

Author: Amy Carlin (front-of-house voice — the right byline for a process-transparency article).

Body covers: 5-step process (first contact → site walk → pricing factors → written quote → signed-to-scheduled), 9 itemized pricing factors (square footage, prep, mix, reinforcement, finish, access, ready-mix prices, permits, profit margin) — explicitly names profit margin instead of pretending it doesn't exist, on-brand for the "honest" voice. 4 FAQs.

This article cross-links into BUILDER and COMMERCIAL silos when those activate (Waves 8/9).

### Registry update
- `src/data/posts.ts` — registered all 3 new modules

---

## Verification

- ✅ `npm run build` passes clean — 19 static routes, 5 prerendered blog posts via SSG
- ✅ `FreezeThawCycleChart` renders inline in `why-utah-concrete-cracks` (placeholder gone)
- ✅ Article + BreadcrumbList + FAQPage JSON-LD on all 5 articles
- ✅ Lateral cross-link integrity:
  - `how-to-choose` links → `why-utah-cracks` ✓ + `10-common-problems` ✓ + `what-to-expect` ✓ + `concrete-driveways-utah` ✓
  - `why-utah-cracks` links → `driveway-replacement-vs-repair` ✓ + `10-common-problems` ✓ + `residential-concrete-repair-utah` ✓ + `concrete-driveways-utah` ✓
  - `driveway-replacement-vs-repair` links → `why-utah-cracks` ✓ + `10-common-problems` ✓ + `residential-concrete-repair-utah` ✓ + `concrete-driveways-utah` ✓
  - `10-common-problems` links → `why-utah-cracks` ✓ + `driveway-replacement-vs-repair` ✓ + `residential-concrete-repair-utah` ✓
  - `what-to-expect` links → `how-to-choose` ✓ + `/quote` (placeholder)
- ✅ All RES service pages now have live blog targets — every blog stub link from Waves 2–3 resolves
- ✅ All 5 articles fall in their reading-time bands (6/7/8/8/9 min — total ~38 min of RES silo content)

## Notes

1. **Data-overlay components are pure server-render:** No `"use client"` directive. They prerender as static HTML, no hydration cost. Important for the homepage performance budget in Wave 14.

2. **Soil profile + frost depth not yet referenced anywhere:** They were built per Wave 4.2 spec but the Utah-soil article that uses them (`utah-soil-conditions-commercial-foundations`) is a Wave 9 deliverable. Components live and ready for Wave 9 consumption.

3. **Climate data is approximate:** Cycle counts, soil layers, frost depths are reasonable engineering approximations consistent with Utah Climate Center / UGS public data. Flagged in the calibration doc and in code comments — verify against current authoritative sources before claiming as definitive in marketing copy. Visualization-grade for now.

4. **Listicle has a triage closer:** The 10-problems article ends with a 3-question triage instead of just the list. Listicles that funnel toward action perform better than listicles that just inform — the triage gives the reader something to do with the information.

5. **Quote-process article is honest about pricing:** Names profit margin (15–25%) explicitly. Most contractor sites pretend pricing is purely cost-plus; saying "yes, we make money on this" matches the brand's "honest work" anchor and disarms the suspicion most homeowners have walking into a quote.

---

## Wave 4 closeout

Five RES articles live, full residential silo blog content done:

- `how-to-choose-a-concrete-contractor-in-utah` (front-door)
- `why-utah-concrete-cracks` (Utah-climate diagnostic — competitive moat)
- `driveway-replacement-vs-repair` (decision framework)
- `10-common-residential-concrete-problems` (magnetizer)
- `what-to-expect-when-you-request-a-concrete-quote` (process; cross-silo)

Total RESIDENTIAL silo coverage: 5 service pages + 5 blog articles + state pillar + 2 location pages = **13 pages** in the silo.

Dense internal linking matrix is now active across the silo — every page links 3+ ways into other RES content, and the climate-differentiation article (`why-utah-concrete-cracks`) is positioned to capture the Utah-specific search traffic competitors can't credibly target.

## Hand-off to Wave 5

Per the build plan, Wave 5 ships the Project Gallery + Social Feed (the two custom features in the brief) on `/projects` + `/projects/[slug]` + the homepage `<SocialFeedScroll>`. Track A Session 2 is the prerequisite — it produces IMG-29 through IMG-34 (the 6 mock projects) plus pool-deck signature shot.

The homepage `ProjectGalleryPreview` and `SocialFeedPreview` placeholders from Wave 2.1 are live and ready to be replaced with real components.
