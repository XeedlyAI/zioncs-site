# Wave 8 Session 1 — BUILDER silo landing + 2 articles (front-door + decision-framework)

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 30 static + 4 dynamic API routes)

---

## Deliverables

### `src/components/pages/SiloLandingTemplate.tsx`
Reusable shared template for silo landing pages. More anthracite-heavy than the pillar template per `ZIONCS_DESIGN_CALIBRATION` § wash plan (B2B credibility leans dark).

Layout:
1. **PageHero** (anthracite + topo + breadcrumbs)
2. **Builder-tier dual CTA band** — anthracite-elevated, primary "Book a Discovery Call" (steel button) + secondary "Request a Quote" (orange button). The dual CTA per `DESIGN_SYSTEM` § 5 — discovery call first because B2B sales motion is relationship-driven.
3. **Proof section** — anthracite + topo, 4 reasons-why-us cards on `card-dark status-steel` chrome, mono eyebrow + bold title + body
4. **Services in this silo** — bone, numbered grid (mono numbers in steel, hover orange-muted tint)
5. **Related articles** — sand-wash, 3-card grid linking to silo blog content
6. **FaqSection**
7. **PageCTA** — silo-specific copy + secondary CTA for the discovery call

Configurable via props — `proof[]`, `services[]`, `related[]`, `faqs[]`, primary CTA label/href, copy overrides. Wave 9 (COMMERCIAL) and Wave 10 (ENTERPRISE) reuse this template with their own data.

### `src/app/builders/page.tsx` — BUILDER silo landing
Activates the `/builders` route — referenced from header nav, footer, state pillar, services index, and the homepage `WhyZionCS` USP block. Until this wave, every link to `/builders` 404'd.

Content:
- Eyebrow: `ZIONCS://SILO · BUILDER`
- Title: "Concrete subcontractor for Utah builders."
- 4 proof items: Schedule discipline / No callbacks / Full residential scope / Builder-rate proposals
- 4 services: Driveways & Aprons, Sidewalks & Walkways, Patios, Foundations & Footings
- 3 related articles in the silo
- 5 FAQs covering spec vs custom, pricing structure, callback rate, hard deadlines, insurance/bonding
- Primary CTA: `/book/discovery-call-builder` (Wave 12 target)
- BreadcrumbList + FAQPage JSON-LD

### `src/content/blog/how-to-vet-a-concrete-subcontractor.tsx` (~1,650 words, 9 min)
Core 30 entry #17 — BUILDER silo front-door, commercial intent.

Author: Kevin (owner — highest credibility for technical contractor evaluation content).

Structure: 7-question vetting framework + 3 red flags + scoring rubric. Each question has a 1-paragraph dig-in covering what the right answer looks like vs what the wrong answer looks like. Tone is direct — written like a sub talking to a GC, not like marketing copy. 5 FAQs covering vetting timing, Google reviews vs GC references, bid count, overcommitment signals, performance bonds.

Internal links: `/blog/concrete-sub-reliability-vs-lowest-bid`, `/blog/common-concrete-sub-failures` (8.2), `/blog/pre-pour-checklist-for-builders` (8.2), `/builders`.

### `src/content/blog/concrete-sub-reliability-vs-lowest-bid.tsx` (~1,300 words, 7 min)
Core 30 entry #18 — BUILDER silo decision-framework, commercial intent.

Author: Josh (project manager — the right voice for a procurement-decision article).

Structure: where the bid gap actually comes from (5 specific cost-cutting categories: lighter mix, skipped subgrade, lighter rebar, shorter cure, unrealistic schedule), total-cost math (5-input model: bid + callback × cost + schedule slip + warranty exposure + reputation risk), when low bids are actually fine (3 conditions), 3 rules-of-thumb closer. 4 FAQs.

### Posts registry update
- `src/data/posts.ts` — registered `howToVet` and `subReliability`. Both articles now live as SSG routes.

---

## Verification

- ✅ `npm run build` passes clean — 30 static routes, 4 dynamic
- ✅ `/builders` activates — footer "For Builders" link, header indirect (via state pillar persona-routing block), homepage `HomeIntelligenceConsole` builder routing all resolve
- ✅ Both blog routes prerender as SSG via `generateStaticParams`
- ✅ Article + BreadcrumbList + FAQPage JSON-LD on both posts
- ✅ Silo landing's related-articles grid points to live targets (front-door + decision-framework live now; diagnostic + process-guide land in 8.2 — those will return 404 until then)
- ✅ Word counts hit reading-time targets: 9 min / 7 min

## Notes

1. **`SiloLandingTemplate` is content-prop-driven on purpose:** Each silo (BUILDER / COMMERCIAL / ENTERPRISE) shares the chrome but speaks to a different audience. Configuring via props rather than each silo writing its own layout means the visual identity stays consistent across silos as we ship 9 + 10. If we need to diverge for ENTERPRISE specifically (multi-site has unique elements), we layer overrides into the template props or compose ENTERPRISE without the template.

2. **Builder-tier dual CTA pattern:** Steel discovery-call button + brand-orange quote button. Steel for the "book a meeting" path, orange for the "send a written quote" path. This will appear on the COMMERCIAL and ENTERPRISE silo pages too — primary discovery-call-bookingType differs but the visual pattern stays.

3. **Article voice differentiator:** Both BUILDER articles are written in a direct, peer-to-peer voice — "you" addresses the GC, technical specifics are listed without dumbing down. The RES articles are written with a homeowner reading level in mind; BUILDER articles assume the reader knows what a callback is, what a draw schedule is, what subgrade prep means. Different audience, different voice register.

4. **Reliability-vs-lowest-bid article names the 5 cost-cut categories explicitly:** Most builder content on the web hedges — "low bidders sometimes cut corners." This article names the corners (mix, subgrade, rebar, cure, schedule) with specifics. That specificity is the differentiator for E-E-A-T scoring; Google reads concrete details as expertise signal.

5. **Both articles internally link to 8.2 articles that don't exist yet:** Acceptable interim — links activate when 8.2 ships (next session). The 8.2 articles will close the loop in both directions.

---

## Hand-off to Wave 8 Session 2

Wave 8.2 ships:
- `common-concrete-sub-failures.tsx` — diagnostic, ~1,200 words, 8 min
- `pre-pour-checklist-for-builders.tsx` — process-guide, ~1,600 words, 10 min
- Lateral cross-link refresh on the 8.1 articles to make sure they reference the new siblings (already linked, but the related-posts blocks at the bottom should pull live targets)

Dependencies met. The BUILDER silo's 4 articles + 1 landing all complete with 8.2.
