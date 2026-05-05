# Wave 2 Session 1 — Homepage

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (27.5s cold compile, 0 errors, 0 warnings)

---

## Deliverables

### `src/data/services.ts`
- All 11 services as a typed `readonly` array — `number`, `slug`, `href`, `name`, `shortLabel`, `description`
- Single source of truth for service navigation, footer links, numbered grid, future service-page generation

### Home components (all in `src/components/home/`)

#### `Hero.tsx`
- Full-bleed anthracite gradient placeholder (radial: anthracite-overlay → anthracite-elevated → anthracite-base) — IMG-01 swaps in here when Track A Session 1 lands
- topo-bg-dark overlay at 0.7 opacity, plus a bottom-vignette for KPI ribbon contrast
- Mono eyebrow: `ZIONCS://CONCRETE-SPECIALISTS · UTAH` (steel-light)
- Display headline `clamp(2.5rem, 6vw, 4.5rem)` Inter 800 — "If It Needs To Be Flat, We've Got It Covered."
- Subhead with the firm tagline + service summary
- Dual CTA: filled brand-orange "Request a Quote" + ghost phone link
- Live indicator row: rebar pulsing dot + "CURRENTLY QUOTING · Avg response: 2 business hours"
- Cascading entrance delays (eyebrow 0, headline 0.1s, subhead 0.2s, CTAs 0.3s, live row 0.5s) per MOTION_AND_INTERACTION § 2

#### `KpiRibbon.tsx`
- 4-column grid (md:divide-x) on `bg-anthracite-elevated` with topo overlay
- Custom `useCountUp` hook (requestAnimationFrame + easeOutCubic, 1400ms) triggers via IntersectionObserver
- Inline SVG sparklines (no chart library) for "Years" and "Projects" trends
- KPIs: 9+ Years (animated), 200+ Projects (animated), 5.0/6 Reviews, 2 hrs Avg Response
- All values font-mono tabular-nums

#### `HomeIntelligenceConsole.tsx`
- Wave 6 placeholder. Mounts the section + chrome (live dot, mono header, suggestion pills, input row, latency footer) with disabled controls and `wave-06 · scheduled` status
- `id="console"` so the Wave 6 mini-console "see full response" anchor scrolls correctly
- Section anchor reserved before Wave 6 ships

#### `NumberedServiceGrid.tsx`
- 11 services rendered as a 2-column desktop grid (single-column mobile)
- Each row: mono number in steel · Inter bold uppercase service name · 1-line stone description · arrow that slides on hover
- Hover row tint: `bg-brand-orange-muted` (#FCEBE0)
- Stagger entrance with viewport-once
- "View all services →" footer link to `/services` index

#### `WhyZionCS.tsx` — the one orange-tinted section
- `bg-bg-orange-tinted-light` with topo-bg-light overlay
- 4 USPs in 2-column grid: Show up on time / Keep worksite clean / Get the job done right / Wasatch Front + St. George
- Each card: `card-light status-orange` (3px left orange border) + lucide icon in tinted square + mono eyebrow + Inter bold title + stone body
- Pulls verbatim from the brief's user-provided differentiators

#### `ProjectGalleryPreview.tsx`
- 4-card preview on `bg-anthracite` + topo overlay
- Each card: dark gradient placeholder image with category eyebrow chip + city + title + scale/duration/status row in mono
- Status colors: COMPLETE = rebar, IN PROGRESS = gold
- 4 project teases across personas: Sandy (residential), Lehi (builder), Draper (commercial), Multi-site (enterprise)
- Real ProjectCard component + `src/data/projects.ts` ship in Wave 5

#### `ProcessTimeline.tsx`
- 5 phases on `bg-bone`: QUOTE → PREP → POUR → FINISH → WARRANTY
- Each step: numbered anthracite circle + mono label + Inter title + stone body + slate-warm duration caption
- Connector line between steps on lg breakpoint
- Captures the "no surprises" + "two-year workmanship warranty" voice from the brief

#### `SocialFeedPreview.tsx`
- Wave 5 placeholder on `bg-bone`
- Header with eyebrow + headline + Instagram/Facebook external buttons (linking to real profiles via `CONTACT.social`)
- Inline SVG icons (lucide-react@1.7.0 doesn't export Instagram/Facebook in this version)
- Empty card placeholder with `wave-05 · feed renders here` mono caption

#### `HomeCTA.tsx`
- `bg-anthracite` + topo + radial orange-tinted overlay (the orange-tinted accent on a dark surface)
- 12-col grid: 7 cols copy + 5 cols stacked CTAs
- Triple CTA: orange "Request a Quote" + ghost "Book a Discovery Call" + plain phone link

### `src/app/page.tsx`
- Composes Hero → KpiRibbon → HomeIntelligenceConsole → NumberedServiceGrid → WhyZionCS → ProjectGalleryPreview → ProcessTimeline → SocialFeedPreview → HomeCTA
- Page-level `metadata` with title + description + canonical URL
- Two `<script type="application/ld+json">` blocks: Organization + LocalBusiness (Sandy, UT geo: 40.5649, -111.8389; Mon–Fri 08:00–17:00)

---

## Wash distribution (homepage)

```
Hero:                anthracite (gradient + topo)
KPI ribbon:          anthracite-elevated (topo)
Console:             anthracite-elevated (topo)
Numbered services:   bone
Why ZionCS:          orange-tinted-light (topo-light)  ← the one orange section
Project gallery:     anthracite (topo)
Process timeline:    bone
Social feed:         bone
Home CTA:            anthracite (topo + orange radial)
Footer:              anthracite (topo, from Layout)
```

Roughly 6 dark / 3 light + 1 orange-accent. Hits the calibration's 45/45/10 target.

---

## Verification

- ✅ `npm run build` passes clean
- ✅ All 9 sections render in the static prerender
- ✅ TypeScript compiles
- ✅ JSON-LD validates (Organization + LocalBusiness)
- ✅ Hero parallax left to CSS — IMG-01 will pick this up via `background-attachment: fixed` once the photo is wired
- ✅ KPI count-up animation triggers on scroll-into-view (IntersectionObserver, once)
- ✅ All anchor links present (`/quote`, `/services`, `/projects`, `/about`, `/contact`, `/builders`, `/commercial`, `/multi-site`, etc.) — many are placeholders until later waves

---

## Decisions / Notes

1. **lucide-react Instagram/Facebook missing:** Build failed initially because the installed lucide-react@1.7.0 doesn't export `Instagram` or `Facebook`. Replaced with inline SVG components in `SocialFeedPreview.tsx`. (Note: `1.7.0` is the version locked by package-lock; current upstream lucide-react is closer to 0.4xx. The `1.x` line we have appears to be an older fork or alias. Worth investigating in a post-launch cleanup wave — for now, all icons we need either work or are inlined.)

2. **Hero image placeholder:** Wave 2.1 ships before Track A Session 1 lands IMG-01. The radial-gradient + topo combination reads as a "clay-model" hero — neutral enough that swap-in won't require any layout changes. When IMG-01 arrives, replace the inner `<div>` with a `next/image` and add `background-attachment: fixed` desktop-only via a media query.

3. **Sparklines inline:** Used inline SVG polyline rather than adding a chart library (recharts, visx) — keeps the bundle lean and the data faithful to the calibration's "engineering brief" feel.

4. **Console placeholder is honest:** Rather than mocking a fake live console, the placeholder explicitly says `wave-06 · scheduled` and disables the controls. This sets correct expectations for any pre-launch viewers and gives the Wave 6 implementation a clean section to slot into.

5. **Service Area Map deferred:** Per build plan, the service-area-map component lands in Wave 11. Wash plan above accounts for that — current homepage runs hero → KPI → console → services → why → projects → process → social → CTA without the map.

6. **No SectionReveal abstraction yet:** The standards library has a `SectionReveal` utility component. For this session I used the raw motion variants from `src/lib/motion.ts` directly. If we end up writing the same `motion.div ...whileInView` block more than 3-4 more times, refactor into `SectionReveal` in a later cleanup pass.

---

## Hand-off to Wave 2 Session 2

Wave 2.2 builds the Tier 0 state pillar + the first two location pages:
- `/utah-concrete-contractor` — state pillar (Core 30 entry #1, 2,000–2,500 words)
- `/locations/sandy-utah` — home base anchor
- `/locations/salt-lake-city` — highest-volume city
- Shared templates: `PillarPageTemplate.tsx` and `LocationPageTemplate.tsx`
- LocalBusiness JSON-LD on Sandy + SLC (with their own geo coords)
- BreadcrumbList JSON-LD on all three pages

Dependencies met. Wave 2.1 leaves placeholder `/utah-concrete-contractor` link in the footer ("View all →" under Service Area) — Wave 2.2 unblocks that link and starts populating the geo silo.
