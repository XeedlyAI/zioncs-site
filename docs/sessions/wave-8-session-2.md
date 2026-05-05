# Wave 8 Session 2 — BUILDER diagnostic + process-guide articles

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 32 static + 4 dynamic API routes)

---

## Deliverables

### `src/content/blog/common-concrete-sub-failures.tsx` (~1,650 words, 8 min)
Core 30 entry #19 — BUILDER silo diagnostic, commercial intent.

Author: Kevin (owner — credibility for diagnostic content covering specific failure modes).

Structure: catalog of the 5 failure modes that account for the majority of builder-project callbacks:
1. **Subgrade settling** — root cause, warning signs during pour, what to verify
2. **Hairline-to-wide cracking** — control joint placement
3. **Surface scaling and spalling** — non-air-entrained mix, mix ticket verification
4. **ADA-ramp non-compliance** — slope tolerances, digital level verification
5. **Edge spalling at exterior corners** — finishing technique

Each failure mode covers four facets: what it looks like at closing / root cause / warning signs during the pour / what to verify. Closes with a five-minute pour-day verification routine builders run.

4 FAQs covering: when to spot problems, fault attribution between sub and GC, most common Wasatch Front failure mode (subgrade settling at driveway aprons), pour documentation discipline.

### `src/content/blog/pre-pour-checklist-for-builders.tsx` (~1,900 words, 10 min)
Core 30 entry #20 — BUILDER silo process-guide, informational intent.

Author: Josh (project manager — the right voice for an operational checklist).

Structure: 12-item pre-pour verification checklist designed to be walked in 30 minutes by the GC's site superintendent the day before pour:

1. Subgrade depth and material
2. Compaction documentation
3. Forms set true and braced
4. Slope and drainage planned
5. Reinforcement: rebar grid and chair height
6. Embeds and inserts placed
7. ADA-ramp slope (if applicable)
8. Mix specification confirmed
9. Truck schedule and pour rate
10. Weather window confirmed
11. Tools and crew capacity
12. Cure plan documented

Each item has the spec it's checking against + how to verify. Closes with usage instructions (sub + GC walk independently the day before, reconcile discrepancies pour morning).

4 FAQs covering: timing of checklist review, who runs it, the most-skipped item (mix-ticket verification on trucks 2+), weather adjustments.

### Posts registry update
- `src/data/posts.ts` — registered `subFailures` and `prePourChecklist`. All 4 BUILDER articles now live as SSG routes.

---

## Verification

- ✅ `npm run build` passes clean — 32 static routes, 4 dynamic. 9 SSG blog posts (5 RES + 4 BUILDER).
- ✅ All 4 BUILDER articles cross-link bidirectionally now:
  - `how-to-vet` → links to all 3 siblings ✓
  - `concrete-sub-reliability-vs-lowest-bid` → links to all 3 siblings ✓
  - `common-concrete-sub-failures` → links to `how-to-vet`, `pre-pour-checklist`, plus the silo landing ✓
  - `pre-pour-checklist-for-builders` → links to `common-concrete-sub-failures`, `how-to-vet`, plus the silo landing ✓
- ✅ Article + BreadcrumbList + FAQPage JSON-LD on both new posts
- ✅ BUILDER silo landing's related-articles grid now resolves to all 3 live targets (it surfaces the front-door + decision-framework + diagnostic — pre-pour checklist surfaces in the related-posts block on each individual article)
- ✅ Word counts hit reading-time targets: 8 min (1,650 words ≈ 200 wpm) and 10 min (1,900 words ≈ 190 wpm)

## Notes

1. **Lateral cross-link refresh handled implicitly:** The 8.1 articles (`how-to-vet` and `concrete-sub-reliability-vs-lowest-bid`) already linked to the 8.2 slugs in their body copy. The 8.2 articles complete the loop — back-links to 8.1 in their bodies + the BUILDER silo landing.

2. **Failure-mode article structure mirrors RES diagnostic article:** The 5-failure structure here parallels the 10-problem structure in the RES `10-common-residential-concrete-problems`. Same diagnostic format — failure → root cause → warning signs → what to verify — but tuned for builder reading level (specific PSI/air-content/slope thresholds vs homeowner-readable descriptions).

3. **Pre-pour checklist is the most utility-driven article in the silo:** Builders bookmark and share operational checklists. This is the article most likely to get linked from outside (other contractor blogs, builder forums, training materials). E-E-A-T + linkability optimization both pull toward this format.

4. **Article-internal callouts use code-style spans:** `<strong>Verify:</strong>`, `<strong>Root cause:</strong>` — small typographic call-outs that make the structure scannable. The Prose wrapper renders `strong` in anthracite; reads as section sub-headers without breaking the paragraph flow.

5. **Builder voice consistency across all 4 articles:** Direct, peer-to-peer, technical specifics named. No softening for residential audience. Both Kevin and Josh authoring without cross-byline — Kevin's articles read as owner-perspective (vet, fail-modes), Josh's read as PM-perspective (decision framework, checklist). Voice register stays builder-focused throughout.

---

## Wave 8 closeout

BUILDER silo complete:
- 1 silo landing page (`/builders`)
- 4 silo blog articles (front-door, decision-framework, diagnostic, process-guide)
- Internal linking dense across the silo + back to state pillar + back to RES silo cross-links where relevant

Total BUILDER silo word count: ~6,500 words across 5 pages. Pulls together a credible B2B content surface that no out-of-state competitor can match for Utah specifics.

Combined with RES (Wave 4): **9 silo blog articles + 5 RES service pages + state pillar + 2 location pages + builder silo landing = 18 pages of silo'd content.**

## Hand-off to Wave 9

Wave 9 ships the COMMERCIAL silo across two sessions:
- 9.1: COMMERCIAL silo landing (`/commercial`) + 2 service pages (`/services/commercial-flatwork-parking-lots-sidewalks`, `/services/industrial-concrete-foundations-utah`) + the Utah Soil article (with `<SoilCompositionDiagram />` + `<FrostDepthDiagram />` from Wave 4.2)
- 9.2: 2 more COMMERCIAL articles (pour scheduling, evaluating commercial subs)

Dependencies met: `SiloLandingTemplate` from 8.1 is reused, soil/frost-depth components from 4.2 wire into the Utah Soil article. The COMMERCIAL silo's primary CTA changes to `discovery-call-commercial` — same pattern as BUILDER, different bookingType.
