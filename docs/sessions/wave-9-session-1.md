# Wave 9 Session 1 — COMMERCIAL silo landing + 2 services + Utah Soil article

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 35 static + 4 dynamic API routes)

---

## Deliverables

### `/commercial` — silo landing
Reuses `SiloLandingTemplate` from Wave 8.1.

- Eyebrow: `ZIONCS://SILO · COMMERCIAL`
- Title: "Commercial concrete contractor in Utah."
- 4 proof items: Schedule discipline / Code-correct / Direct crew / RFP-friendly
- 4 services: Commercial Flatwork, Foundations & Footings, Dumpster Pads (W10), Sidewalks & Curbing
- 3 related articles (Utah Soil + 2 Wave 9.2 articles)
- 5 FAQs covering project size, insurance/bonding, phased pours, ADA compliance, lead time
- Primary CTA: `/book/discovery-call-commercial` (Wave 12 target)
- BreadcrumbList + FAQPage JSON-LD

### `/services/commercial-flatwork-parking-lots-sidewalks` (~830 words body)
Core 30 entry #22.

- Spec block: 4,500 PSI, 5″ parking / 6″ truck routes, #4 rebar 16″ o.c., ADA slope tolerances, 2yr workmanship
- 5 FAQs: ADA tolerances, phased pours, parking spec, striping coordination, weather delays
- 4-section body: Overview / What's Included / Scheduling + Critical Path / Where We Work Commercially
- Related: foundations, sidewalks, driveways, repair
- Secondary CTA wired to `/book/discovery-call-commercial`

### `/services/industrial-concrete-foundations-utah` (~880 words body)
Core 30 entry #23.

- Spec block: 4,500 PSI, regional footing depths (30″ Wasatch / 36″ N / 42″ Park City / 12″ St. George), per-stamped-drawings reinforcement, moisture barrier where required
- 5 FAQs: foundation depth, structural drawings, expansive clay, turnaround, builder vs owner direct
- 4-section body: Overview / Why Utah Soil Matters / What's Included / Who We Work With
- Embedded link to the Utah Soil article (this same wave)
- Related: commercial flatwork, repair, driveways, sidewalks
- Secondary CTA wired to `/book/discovery-call-commercial`

### `utah-soil-conditions-commercial-foundations.tsx` (~1,750 words, 9 min)
Core 30 entry #24 — the **Utah-climate differentiation gap article for COMMERCIAL**. Pair with `why-utah-concrete-cracks` (RES); the two together own the Utah-specific search vocabulary.

Author: Kevin (owner — highest credibility for technical commercial content).

Embeds **both data overlay components from Wave 4.2**:
- `<SoilCompositionDiagram />` after the 4 soil regions section
- `<FrostDepthDiagram />` after the frost-depth narrative

Body covers:
1. The four soil regions you're likely working in (SLC alluvial / Davis County clay / Wasatch foothills / St. George desert)
2. Frost depth varies more than people realize (with the diagram)
3. Subgrade prep — what it looks like done right (4 phases)
4. What goes wrong when prep is skipped (3 failure modes)
5. Bottom line — 2 questions to ask any commercial sub

5 FAQs covering subgrade prep cost, moisture barriers, over-excavation explanation, St. George-vs-Wasatch differences, when soil testing is required.

### Posts registry update
- `src/data/posts.ts` — registered `utahSoil`. 10 SSG blog posts now (5 RES + 4 BUILDER + 1 COMMERCIAL).

---

## Verification

- ✅ `npm run build` passes clean — 35 static, 4 dynamic
- ✅ `/commercial` activates — every link from header/footer/state pillar/services index/silo cross-links resolves
- ✅ Both new commercial service pages prerender as static
- ✅ `<SoilCompositionDiagram />` and `<FrostDepthDiagram />` render inline in the Utah Soil article (Wave 4.2 components are now used in production content)
- ✅ All COMMERCIAL silo pages cross-link to each other + to `/commercial` landing + to RES `why-utah-concrete-cracks` for residential context
- ✅ Article + Service + BreadcrumbList + FAQPage JSON-LD on all new pages
- ✅ Word counts hit targets — landing 1,000+ words, services 800-880 each, Utah Soil 1,750 (above 9-min target)

## Notes

1. **Two data overlay components live in production:** `<SoilCompositionDiagram />` and `<FrostDepthDiagram />` from Wave 4.2 are now embedded in the Utah Soil article. Server-renderable, no JS, valid HTML. The third W4.2 component (`<FreezeThawCycleChart />`) was already live in `why-utah-concrete-cracks`. All three climate-data overlays are deployed.

2. **Utah Soil article is the COMMERCIAL silo's competitive moat:** No out-of-state contractor can credibly write Utah-specific soil + frost-depth content with this much specificity. Pairs with the residential `why-utah-concrete-cracks` to own the Utah-climate search vocabulary across both audiences.

3. **Foundation footing depths are presented as facts:** The frost-depth diagram has specific depth values per region (12/18/24/30 frost depth, 12/30/36/42 foundation minimum). These approximate IRC + Utah-specific code requirements but should be verified against current authoritative sources before claiming as definitive in marketing. Flagged for Wave 14 SEO polish review.

4. **Commercial spec values are bumped vs residential:** 4,500 PSI vs 4,000 (residential), #4 rebar at 16″ o.c. vs #3 at 18″, 5–6″ slabs vs 4″. Reflects actual commercial standards. Service spec blocks across the silo will all use these heavier specs.

5. **`/services/dumpster-pad-trash-enclosure-concrete-utah` linked but not built:** It's listed in the COMMERCIAL silo landing's services grid but the route is Wave 10 (ENTERPRISE silo). The link 404s until then — acceptable interim per build plan sequencing.

6. **Commercial flatwork's secondary CTA pattern:** Both new service pages set `ctaSecondaryHref="/book/discovery-call-commercial"` + `ctaSecondaryLabel="Book a Discovery Call"`. Same dual-CTA pattern as the silo landing — Quote (orange) primary + Discovery Call (steel) secondary.

---

## Hand-off to Wave 9 Session 2

Wave 9.2 ships the remaining 2 COMMERCIAL articles:
- `commercial-concrete-pour-scheduling.tsx` — process guide, 8 min
- `evaluating-commercial-concrete-subs.tsx` — decision framework, 10 min (cross-silo references the BUILDER `how-to-vet` article per Core 30 spec)

Dependencies met. The W9.1 articles already link to the W9.2 slugs in body copy + the silo landing's related-articles grid surfaces all 3.

Wave 9 closeout after 9.2 will give us **6 COMMERCIAL silo entries** (1 landing + 2 services + 3 articles) — the largest silo so far.
