# Expansion Session 2 — Visual Fill: Thumbnails, Heroes, Data-Viz, OG Images

**Date:** 2026-07-03 (same day as Session 1; user flagged the visual gaps on the staging deploy)
**Branch:** main
**Build:** (see commit — gate run before commit)

The Core 60 articles shipped text-first in Session 1. This session fills every visual gap found in the audit.

## The audit that drove it

| Gap | Fix |
|---|---|
| 16 new blog thumbnails = blank plate + broken `00 OF 14` counter | 16 hand-built data-artifact SVGs (agent) + `ARTIFACT_NUMBER` 15–30 + dynamic `OF {total}` from `getAllPostSlugs().length` |
| 16 new articles had no hero image | 16 Nano Banana heroes (`img-40`–`img-55`, .jpg), QA'd, wired into every meta |
| New articles text-only inside | 3 new data-viz components + 1 reuse + 2 photo embeds (below) |
| **No `og:image` on ANY blog post** (pre-existing, all 30) | `openGraph.images` + Article JSON-LD `image` from `heroImage` in `blog/[slug]/page.tsx` |
| City pages text-hero | By design (template has no image slot); left as-is, noted as optional upgrade |
| About founder headshots | Still parked for client photos |

## New data-viz components (`src/components/data/`)

- **`PourWindowChart`** — 12-month Utah pour-conditions calendar (prime/workable/hot/cold bands) → `best-time-to-pour-concrete-utah`
- **`AdaRampSpec`** — SVG ramp cross-section (1:12, ≥60″ landings, ≤30″ rise, 2% cross-slope callout) → `ada-concrete-requirements-utah`
- **`MaterialComparisonChart`** — concrete/pavers/asphalt scored across lifespan, freeze-thaw, maintenance, upfront cost → `concrete-vs-pavers-vs-asphalt-driveway`
- **`FreezeThawCycleChart`** (existing, reused) → `curing-concrete-in-utah-heat-and-cold` ("punished twice" section)
- **Photo `MediaEmbed`s** — Draper sport court still → `backyard-concrete-ideas-utah`; multi-site dumpster pad still → `multi-site-concrete-inspection-checklist`

All server-renderable, no JS, matching the FreezeThawCycleChart conventions (card-light figure, mono eyebrow, legend footer, practice-based-data disclaimers).

## Verification

- tsc clean ×2 (after components, after agent's thumbnail work)
- Browser: blog index shows artifact thumbnails with `// RES // 20 OF 30`-style counters; ADA article confirmed hero loaded + ramp SVG rendered + `og:image` + Article JSON-LD `image` both emitting the hero URL
- Hero QA by inspection: ADA ramp w/ detectable warning, ashlar-meets-cobble overhead, tilt-up crane lift w/ Wasatch backdrop, half-blanketed curing slab — all on-brief
- `npm run build` gate before commit

## Notes

- Heroes are .jpg (the Interactions API emits JPEG); paths follow `/images/blog/img-4X…jpg`
- The generation script logged "API emits JPEG only — writing .jpg" — the `--output .png` flag is advisory there
- One hero (ADA) contains legible "COMMERCIAL ENTRANCE" door signage — sensible text, kept
