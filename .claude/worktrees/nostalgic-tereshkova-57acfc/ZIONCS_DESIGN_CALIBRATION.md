# ZionCS Design Calibration

> Phase 3 output (2026-05-04, revised). Locks color palette, typography, section system, component design language, logo treatment, and the image-generation prompts for v1 launch. Override summary lives in `ZIONCS_DELTAS.md`.

---

## The brand tension

ZionCS sits at a deliberate crossroads:

- **The construction industry baseline** is blocky, heavy, hard-edged, big-photo-of-a-burly-guy. Visit any of the 6 industry competitors in `briefs/competitive-walk-through.md` — they're all variations on this. None are sophisticated; none signal precision; none communicate that the contractor knows what's happening on a job in real time.
- **The XeedlyAI design IP** is the opposite: modern, restrained, data-infused, intelligence-driven, operator-grade. Layered surfaces, KPI tickers, live signals, code-precise typography, motion-with-discipline.

The rebuild's job is to weave these — not to land on one or the other.

**ZionCS should be the most sophisticated concrete contractor website that exists** — recognizable as a contractor (orange CTA, anthracite, project-craft photography, the tough-mascot logo), but with a data layer woven through that signals "more buttoned-up than every other Utah concrete crew." A homeowner won't consciously notice the data-infused dimension; they'll feel it. A commercial developer or enterprise procurement manager will consciously notice — and that's the differentiator that wins their contract.

**The goal is not to copy CoreHOA, Pando, Sovvrn, or Xeedly-site.** Those are sister projects with their own buyers and their own visual identities. ZionCS shares family DNA — the Intelligence Console, the KPI patterns, the EASE curve, the layered-surface logic — but in a key that's specifically *its own*: more earthy, more industrial-precise, less SaaS-electric, more "engineering drawing" than "data dashboard."

---

## Overview — locked decisions

| Decision | Lock |
|---|---|
| **Palette** | Anthracite + concrete + steel + rebar + bone + brand orange. Industrial-precise; engineering-drawing energy; not SaaS-electric. |
| **Typography** | Inter (weights 400-900) + heavy JetBrains Mono presence. Mono everywhere data appears: stats, eyebrows, breadcrumbs, file paths, KPI labels, timestamps. |
| **Section system** | Six-wash rotation including three layered-dark variants (anthracite / elevated / overlay). More dark sections than my first pass — closer to the XeedlyAI IP weighting. |
| **Background overlays** | Topographic line pattern (Wasatch elevation) on anthracite surfaces. Optional subtle 1/8" engineering grid on lighter surfaces. |
| **Logo strategy** | Full circular-emblem horizontal logo as primary mark. WY/UT/MT in the emblem is forward-looking brand vision. |
| **Photography direction** | Project-craft photography (the work, the result). For select hero/feature images: subtle data-overlay treatment (architectural drawing markers, GPS coordinates, scale indicators) — turns marketing photos into project briefings. |
| **Components — data-infused (NEW)** | Service-spec block, project timeline, service area map, climate data overlays, live indicator dots, KPI ticker with sparklines |
| **Intelligence Console** | Foregrounded as centerpiece — hero mini console + dedicated full section. Not buried mid-page. |
| **Motion** | Library default — EASE curve `[0.16, 1, 0.3, 1]`, scroll-reveal, parallax on hero. Discipline: one motion event per section reveal, never constant-motion overload. |

---

## Color palette

The palette is built around concrete itself: anthracite (cured concrete in shadow), concrete (mid-tone neutral), bone (cream from limestone aggregate), with brand orange (safety vest), steel (engineering blueprint blue), and rebar (weathered green).

### Brand colors

| Role | Hex | Use |
|---|---|---|
| **Brand orange (primary CTA)** | `#E85A19` | Primary CTA buttons, key accents, link hover, focus rings, brand highlights |
| **Brand orange hover** | `#C44A12` | Primary button hover state |
| **Brand orange muted** | `#FCEBE0` | Subtle warm wash for orange-tinted sections |

### Industrial neutrals

| Role | Hex | Use |
|---|---|---|
| **Anthracite (deep dark / foreground)** | `#1A1814` | Primary dark surface; foreground text on light backgrounds; sticks slightly warmer than pure black |
| **Anthracite elevated** | `#26221C` | Mid-layer dark surface — cards on dark sections, sub-sections of charcoal hero |
| **Anthracite overlay** | `#322D26` | Top-layer dark surface — glass cards, inset console panels, hover states |
| **Concrete (mid-tone)** | `#8A857C` | Industrial neutral — used for secondary text on light, borders on dark surfaces, structural icons |
| **Bone (page background)** | `#F4F0E8` | Page-default background — slightly more concrete-ash than pure cream |
| **Paper (light surface)** | `#FFFFFF` | Card surfaces only — small visual lift over the bone bg |
| **Sand (subtle wash)** | `#EDE8DC` | Section-background variant — slightly deeper than bone for visual rhythm |
| **Warm border** | `#E0DBCF` | Subtle dividers, card borders, input borders on light surfaces |
| **Stone (muted text)** | `#6B6760` | Secondary text on light, captions, meta |
| **Slate-warm (subtle)** | `#8C8478` | Eyebrows, deemphasized labels |

### Data accents

| Role | Hex | Use |
|---|---|---|
| **Steel (data accent / blueprint blue)** | `#3F6B7D` | Data labels, secondary KPI emphasis, info chips, blueprint-style overlays. Desaturated industrial blue — engineering-drawing energy, not SaaS-electric. |
| **Steel light** | `#5C8FA3` | Hover state for steel; lighter applications |
| **Rebar (live signal / positive)** | `#7DA84F` | Live indicator dots ("Currently Available," "Crew Active"), positive state, "Project Complete" badges. Muted yellow-green echoing weathered rebar patina — reads "ready" without being SaaS-bright. |
| **Gold (caution)** | `#C49A2C` | Featured project badges, "limited spots" callouts, warning states |
| **Brick (critical, used sparingly)** | `#A84426` | Critical alerts, error states. Deeper than brand orange so it doesn't compete; used only when truly critical (rare on a marketing site). |

### Why this palette

**Sophistication without abandoning the industry.** Concrete contractors live in earthy industrial colors — pretending otherwise produces a site that feels disconnected from the work. But contractors *don't* live in cool slate or electric blue; those would feel tech-disconnected.

The palette anchors in concrete's actual color (anthracite, concrete, bone) and adds sparing data accents (steel, rebar) that signal precision without screaming "tech." Brand orange does the conversion lifting; everything else holds the room together.

### What we deliberately avoid

- **Pure black / pure white** — too high-contrast, too SaaS-flat
- **Cool slate (Tailwind slate-500 etc.)** — clashes with the warm earthy core
- **Electric data blue (e.g., Pando's `#38BDF8`)** — too cyberpunk; doesn't read "engineered concrete"
- **Bright neon greens for live signals** — too SaaS-dashboard; rebar `#7DA84F` reads ready/active without screaming
- **Warm cream as primary bg without grit** — would lose the industrial character; bone `#F4F0E8` has just-enough ash tone
- **Bright Webflow orange `#ED7D31`** — refined to `#E85A19`

---

## Typography

### Families

- **Inter** — weights 400/500/600/700/800/900 via `next/font/google`
- **JetBrains Mono** — weights 400/500/600 via `next/font/google`
- **No third font.** Inter heavy weights at large sizes carry enough display weight; the bold-condensed wordmark is the display character.

### Type scale

```
display       clamp(3rem, 5.5vw, 5rem)         900 (Black) — hero headlines
h1            clamp(2.25rem, 4vw, 3.25rem)     800         — page titles
h2            clamp(1.75rem, 3vw, 2.25rem)     800         — section headlines
h3            clamp(1.25rem, 2.2vw, 1.5rem)    700         — subsection headlines
h4            1.125rem                          700         — card titles
body-lg       1.125rem                          400         — lead paragraphs
body          1rem                              400         — default body
body-sm       0.875rem                          400         — secondary body
caption       0.75rem                           500         — meta text
eyebrow       0.625rem (10px)                  600 mono    — uppercase, tracking-[0.15em]
kpi-large     clamp(2rem, 3.5vw, 2.75rem)      700 mono    — stats ("9+", "200+", "10+")
kpi-small     1.25rem                           700 mono    — inline numbers in copy
breadcrumb    0.6875rem                         500 mono    — file-path-style paths (uppercase)
caption-mono  0.6875rem                         500 mono    — data captions, technical labels
```

### Use rules — operator-grade signaling via JetBrains Mono

The mono presence is what subconsciously cues "data-infused, technically precise" without being explicit. Use mono everywhere data appears:

- **Eyebrows** — every section section eyebrow (e.g., `01 / SERVICES`, `ZIONCS://INTELLIGENCE`, `STAT.LIVE`, `WAVE 03 / FOUNDATIONS`)
- **All numbers in copy** — when a number conveys credibility (years in business, project count, sq ft, days, percentages), wrap in `<span class="font-mono tabular-nums font-semibold">`
- **Breadcrumbs** — file-path style: `home / services / driveways / utah` — uppercase, mono, stone color
- **KPI labels** — under each KPI value, the label in mono uppercase tracking-wider
- **Data captions** — under data viz, charts, project timelines: mono caption-style
- **Live timestamps** — when something is "Updated 3m ago" or "Currently quoting": mono
- **Tech specs** — concrete grade, PSI rating, cure time: mono in spec-block components
- **Code-style content** — service area lat/long, project IDs, model numbers: mono

### Use rules — Inter heavy weights

- **Display, h1, h2** — Inter weight 800-900, tracking-tight, line-height tight (1.05-1.15)
- **h3, h4** — Inter weight 700, tracking-normal
- **Body** — Inter 400, line-height 1.6 for body, 1.5 for body-lg
- **CTAs** — Inter 600, tracking-tight, all caps for primary CTAs ("REQUEST A QUOTE"), title case for secondary

### Use rules — pull quotes / testimonials

Inter italic 500 at 1.125-1.25rem with generous line-height. Attribution on its own line: name in Inter 600 + city in mono caption-mono.

---

## Section background system

Six wash treatments. Three light + three dark (layered). The dark surfaces use the layered Pando-pattern but in the ZionCS earthy key.

| Wash | Background | Foreground | Use |
|---|---|---|---|
| **bone-page** | `#F4F0E8` | anthracite `#1A1814` | Default page background; default for content sections |
| **paper-card** | `#FFFFFF` | anthracite | Card surfaces only; small lift over bone-page |
| **sand-wash** | `#EDE8DC` | anthracite | Quiet sections (FAQ, secondary content) |
| **anthracite-base** | `#1A1814` | bone `#F4F0E8` + JetBrains accents | Hero, footer, KPI ribbon, deep-dark sections |
| **anthracite-elevated** | `#26221C` | bone | Cards on dark sections; mid-layer surfaces |
| **anthracite-overlay** | `#322D26` | bone | Glass cards, console panels, hover states (top layer) |

### Optional accent — orange-tinted

- **`#FDF1EA`** (orange `#E85A19` at ~6% opacity) on light backgrounds OR  
- **`#322822`** (orange tint over anthracite) on dark backgrounds  

Used **once per page max** for emphasis (e.g., the "Why Choose ZionCS" panel on homepage). Overuse kills the punch.

### Page-by-page wash plan (homepage example)

```
Hero:                      anthracite-base + topo-bg overlay
KPI ribbon:                anthracite-base (extension of hero)
Intelligence Console:      anthracite-elevated (foregrounded section)
Services intro:            bone-page
Numbered services grid:    bone-page
Service area map:          anthracite-base + topo-bg overlay
Why ZionCS (USPs):         orange-tinted (the one orange section per page)
Project gallery:           anthracite-base (showcases photography)
Process / How We Work:     bone-page (timeline data viz)
Reviews:                   sand-wash
Social feed scroll:        bone-page
FAQ:                       sand-wash
Footer CTA:                anthracite-base + orange-tinted overlay accent
Footer:                    anthracite-base
```

This shifts the wash distribution to roughly **45% dark / 45% light / 10% accent** — significantly more dark than my prior calibration's 80% light. The dark sections carry the data-infused identity; the light sections carry the warm-craft identity.

### Background overlays

**Topo-bg** (Wasatch elevation lines) on anthracite surfaces:
- Subtle line pattern at very low opacity (5-8%)
- Topographic curves at the scale of mountain elevation lines
- Matches Pando's topo treatment but uses Wasatch-specific elevation data — Utah identity anchor
- Available as `topo-bg-dark.svg` (white lines on anthracite) and `topo-bg-light.svg` (anthracite lines on bone)

**Engineering grid** (optional, on light surfaces):
- 1/8" or 1/4" grid lines at 4-6% opacity
- Used on technical content surfaces (spec blocks, climate data viz pages) to reinforce precision
- Available as `engineer-grid.svg`

Both overlays should feel barely-perceptible — texture, not pattern. Like a texture on architect's vellum, not a wallpaper.

---

## Component design language

### Numbered service grid (homepage section)

Eleven services in a 2-column desktop grid:

```
01 / DRIVEWAYS                        07 / SPORT COURTS
Concrete driveways across Utah →     Backyard courts and commercial →

02 / STAMPED & DECORATIVE             08 / RV PADS  
Patios, driveways, pool decks  →     Built for the rig you actually own →

03 / POOL DECKS                       09 / SPLASH PADS
Built by pool-deck specialists →     Backyard splash pads, Utah →

04 / PATIOS                           10 / SIDEWALKS & CURBING
Outdoor spaces built to last  →     Residential and commercial →

05 / CONCRETE REPAIR                  11 / COMMERCIAL FLATWORK
Cracks, settling, resurfacing →     Parking lots, ADA, industrial →

06 / FOUNDATIONS & FOOTINGS
Soil-prepped for Utah conditions →
```

- Each row: monospace number in steel `#3F6B7D` + service name in Inter 700 uppercase + 1-line description in Inter 400 + arrow that slides right on hover
- Hover: row background subtly tints `#FCEBE0` (orange-muted), arrow slides
- Click: navigates to service page

### Service card (used on listing pages and silo landings)

```
┌──────────────────────────────┐
│ ┌────────────────────────┐  │
│ │   [4:3 hero image]     │  │  ← optional thumbnail
│ └────────────────────────┘  │
│                              │
│ 01 / DRIVEWAYS               │  ← eyebrow: number + service (mono)
│                              │
│ Concrete Driveways in Utah  │  ← h3 title
│                              │
│ Installation, replacement,   │  ← body-sm description
│ and repair across the        │
│ Wasatch Front + St. George   │
│                              │
│ Learn more →                 │  ← anchor link
└──────────────────────────────┘
```

- Surface: `paper-card` on light backgrounds, `anthracite-elevated` on dark
- Border: 1px `warm-border` (light) or `concrete` at 20% opacity (dark)
- Padding: 1.5rem mobile, 2rem desktop
- Hover: subtle lift (`translate-y-[-2px]`), border deepens

### Service-spec block (NEW)

For service detail pages — turns "what we install" into structured technical data. Reads like a code block or engineering spec sheet.

```
┌──────────────────────────────────────────────┐
│ // SPEC // RESIDENTIAL DRIVEWAY              │  ← mono header in steel
│                                              │
│ CONCRETE          4,000 PSI · air-entrained  │  ← key/value mono pairs
│ THICKNESS         4" residential / 6" commercial
│ REINFORCEMENT     #3 rebar grid 18" o.c.    │
│ SUBGRADE          6" compacted base, prepared │
│ FINISH            Broom · float · stamped    │
│ CURE TIME         24h walkable · 7d driveable │
│ WARRANTY          Workmanship — 2 year       │
└──────────────────────────────────────────────┘
```

- Background: `anthracite-elevated` (always on dark)
- Border: 1px `concrete` at 30% opacity, with a 3px-left-border accent in `steel`
- All text: JetBrains Mono, varying weights (header 600, keys 500, values 400)
- Mobile: stacks key/value vertically
- One spec block per service detail page; sits below the hero, above the body content

### Project card with timeline (NEW)

For the project gallery — gives each project structured-data feeling, not a marketing tile.

```
┌──────────────────────────────────────────────┐
│                                              │
│       [4:3 project hero image]               │
│                                              │
├──────────────────────────────────────────────┤
│ 01 / DRIVEWAY · SANDY, UT                    │  ← eyebrow mono
│                                              │
│ Stamped Driveway with Decorative Border      │  ← h4 title
│                                              │
│ Day 1 · Demo + subgrade prep                 │  ← timeline mono
│ Day 2 · Forms, rebar, stamp template         │
│ Day 3 · Pour, finish, cure begins            │
│ Day 4 · Final cure, sealer, walkthrough      │
│                                              │
│ 1,800 SQ FT  ·  4 DAYS  ·  COMPLETE          │  ← stats mono in steel
└──────────────────────────────────────────────┘
```

- Surface: `paper-card` on bone-page, `anthracite-elevated` on dark gallery sections
- Hover: thumbnail darkens slightly; "View project →" CTA fades in
- Filterable: chip filters above gallery (All / Driveways / Sport Courts / Commercial / Enterprise)
- Layout: 3-column desktop, 2-column tablet, 1-column mobile

### Live KPI ticker (refined with sparklines)

Library standard from `DATA-INTELLIGENCE-LAYER-SKILL.md` § 1, ZionCS-keyed:

```
┌─────────────┬─────────────┬─────────────┬──────────────────────┐
│ 9+          │ 200+        │ 5.0 ⭐ / 6  │ ●  CURRENTLY QUOTING │
│ YEARS       │ PROJECTS    │ REVIEWS     │  Avg response: 2 hrs │
│ ▁▂▃▄▅▆▇    │ ▁▂▃▄▆▇█    │             │                      │
└─────────────┴─────────────┴─────────────┴──────────────────────┘
```

- Layout: 4-column flex on desktop, 2-column grid on mobile
- Values: JetBrains Mono kpi-large weight 700
- Labels: eyebrow style (uppercase, mono, stone color)
- Sparklines: 6-point trend below relevant values (years, projects)
- Live indicator: `rebar` pulsing dot before "CURRENTLY QUOTING"
- Background: `anthracite-base` (always on dark) with optional topo-bg overlay
- Sits inside the homepage hero or as a sticky band on services index pages

### Live indicator components (NEW)

Small UI elements that signal "real, present, active":

**Pulsing live dot** — `<LiveDot status="active" />`:
- 8px circle, `rebar #7DA84F` for active, `gold #C49A2C` for caution, `brick #A84426` for critical
- Pulses with `animate-pulse` (Tailwind) at 2s interval
- Used inline before any "live" data label

**Status chip** — `<Chip variant="active|busy|complete">`:
- 3px-left-border accent in semantic color (rebar / gold / brick / steel)
- Background: `paper-card` on light, `anthracite-elevated` on dark
- Text: caption-mono uppercase
- Used to tag projects, jobs, system status

**Live timestamp** — `<LiveTime ago="3m" />`:
- Caption-mono format: "UPDATED 3m AGO"
- Stone color
- Auto-updates client-side every 60s (where applicable)

### Service area map (NEW)

Utah outline with live data overlay. Replaces a static "we serve these cities" list with structured visualization.

- Vector Utah outline (SVG)
- Wasatch Front highlighted as denser-served region (subtle bone-tinted region)
- St. George marked separately (smaller cluster)
- Dot markers for served cities with hover tooltip showing city name + recent project count
- Optional pin: "Currently working at..." (pulls from project data when populated)
- Background: `anthracite-base` with topo-bg overlay
- Title: `eyebrow` style — "ZIONCS / SERVICE AREA" + caption "Wasatch Front + St. George"

### Climate data overlay components (NEW)

For Utah-climate articles ("Why Utah Concrete Cracks", "Utah Soil Conditions and Foundations"):

**Freeze-thaw cycle chart**:
- Horizontal bar/timeline showing 12 months
- Color band per month indicating typical temperature swing
- Crystals icon at freeze cycles
- Caption: "Wasatch Front · 30-yr avg · ~70 freeze-thaw cycles/year"

**Soil composition diagram**:
- Cross-section illustration of typical Utah soil profiles
- Layered visual: topsoil / clay / rocky / bedrock
- Annotations in mono caption-mono

**Frost depth diagram**:
- Vertical scale showing frost depth by region
- Annotations for proper foundation depth recommendations

These components elevate the climate articles from "blog post" to "engineering brief" — the exact differentiation no out-of-state competitor can match.

### Hero (homepage)

Full-bleed background image with parallax + overlay text, but with data-layer signaling:

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo]                                  [PHONE] [QUOTE CTA] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Hero photo: project-craft, late afternoon Utah]           │
│  + topo-bg overlay at low opacity                           │
│                                                             │
│  ZIONCS://CONCRETE-SPECIALISTS                              │  ← mono eyebrow in steel
│                                                             │
│  If It Needs To Be Flat,                                    │  ← display, bone color
│  We've Got It Covered.                                      │
│                                                             │
│  Utah's flatwork crew. Show up on time, keep the worksite   │  ← body-lg, bone
│  clean, get the job done right.                             │
│                                                             │
│  [REQUEST A QUOTE]  [Book a Discovery Call →]               │  ← orange CTA + ghost
│                                                             │
│  ●  CURRENTLY QUOTING · Average response: 2 business hours  │  ← live data row
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ [KPI ribbon: 9+ YEARS · 200+ PROJECTS · 5.0/6 · QUOTING]   │  ← below the fold
└─────────────────────────────────────────────────────────────┘
```

- Image: parallax on scroll (`background-attachment: fixed` desktop; static on mobile)
- Overlay: linear gradient `rgba(26, 24, 20, 0.75)` to `rgba(26, 24, 20, 0.50)` (anthracite)
- Plus: `topo-bg-dark.svg` overlay at 5% opacity
- CTAs: primary `brand-orange` filled, secondary ghost (bone border + bone text on dark hero)
- Live indicator row below CTAs — `rebar` pulsing dot + mono caption text

### Intelligence Console (foregrounded as centerpiece)

Per library `COMPONENT_PATTERNS.md` § 3-4. ZionCS gets prime placement:

**Hero mini console** — anchored at the bottom of the hero, on `anthracite-base` surface:
- Suggestion chips: "How fast can you start?" · "Driveway repair near me?" · "Commercial project — RFP?" · "Service area question"
- Input: "Ask Zion CS about your project..."
- Response area renders inline below
- Footer: `latency: <3s · claude-sonnet-4` (mono caption, stone color)

**Full Intelligence Console section** — dedicated page section between hero and services intro:
- Surface: `anthracite-elevated` with topo-bg-dark overlay
- All suggestion chips visible (8-12 chips, persona-spaced)
- Larger response area
- Embedded action cards (calendar / contact_info / intake) — per `COMPONENT_PATTERNS.md` § 4
- AI → action routing tuned for ZionCS:
  - Residential repair questions → intake (quote form action)
  - Commercial RFP / large project → calendar (Discovery Call)
  - Pricing-curious questions → intake (with copy: "Every project's different — request a quote and we'll give you a written number within 7 days")
  - Service area questions → contact_info (phone) + factual answer
- Voice tuned to ZionCS — operator-grade vocabulary, not SaaS, not folksy

**Persistent inline console invitation** — at strategic points (after a service description, after a case study), a single suggestion chip + "Ask the console →" link that scrolls to the full console section.

### Persistent CTA system

- **Header (sticky on scroll):** logo + phone (tap-to-call mobile) + "Request a Quote" button (right-aligned)
- **Mobile bottom bar (sticky):** phone + "Quote" — fixed-position, always visible, dismissible only on user action
- **Footer CTA panel (large):** anthracite-base + orange-tinted accent overlay; phone + email + form

### Social media feed scroll

Per ZIONCS_DELTAS, manual curation v1, horizontal scroll:

- Cards: 320px × 360px on desktop, paper-card surface, 6px rounded corners (less than typical card rounding to feel more industrial-precise)
- Each card: square Instagram image (288×288) + caption snippet (2-line clamp) + posted-on date + small "View on Instagram →" link
- Section background: `bone-page`
- Header: eyebrow `ZIONCS://INSTAGRAM` + h3 "Recently from the field"
- Scroll: `scroll-snap-x mandatory`, `snap-start` on cards
- Mobile: same horizontal scroll, single card visible
- Data source: `src/data/social-posts.ts` (manually curated)

---

## Logo treatment

**Primary mark:** the full circular-emblem horizontal logo (`zioncs-logo-horizontal.png` and `zioncs-logo-horizontal-white.png` for dark surfaces). Includes the muscular character, "ZION CONCRETE SPECIALISTS" arching top, "WYOMING ★ UTAH ★ MONTANA" arching bottom, and the bold "ZION C.S." wordmark.

**Brand vision vs current reality:** the WY/UT/MT in the emblem is forward-looking — ZionCS intends to expand. Site copy + GBP description currently reflect Utah-only.

### Asset usage

- **Header / navbar:** `zioncs-logo-horizontal.png` at 40-48px height
- **Footer:** `zioncs-logo-horizontal-white.png` (white variant) on `anthracite-base`
- **Mobile menu:** `zioncs-icon.png` at 32px when space is constrained
- **Favicon:** `zioncs-icon-32.png` (already prepared)
- **Apple touch icon:** `zioncs-icon-256.png`
- **Open Graph / social:** Compose: `anthracite-base` with topo-bg + horizontal logo + tagline + Utah-only contact

### Logo on different backgrounds

- **On `bone-page` / `paper-card` / `sand-wash` (light):** colored logo (`zioncs-logo-horizontal.png`)
- **On `anthracite-base` / `anthracite-elevated`:** white variant (`zioncs-logo-horizontal-white.png`)
- **On `orange-tinted`:** colored logo (contrast still works)

### Asset-quality follow-up

PNG raster currently. Eventually want SVG. Park as post-launch enhancement.

---

## Photography direction

### Direction (locked in DELTAS)

- **Project-craft photography** — the work, the result, the scale of jobs
- **Not worker-as-mascot** — the existing site over-uses this; move on
- **Utah-specific landscapes** when appropriate — Wasatch backdrops, red-rock for St. George scenes
- **Real-world lighting** — golden hour, overcast natural, late afternoon — not stock-photo flat lighting

### NEW: data-overlay treatment for select hero/feature images

For hero and a select set of feature images, **layer subtle UI / drawing elements over the photography**:
- GPS coordinates of project, mono caption-style ("40.5645° N · 111.8389° W")
- Scale indicator bar with mono caption ("1,800 SQ FT")
- Compass rose at corner
- Dimension callouts (architectural drawing style — light bone lines with dimension labels in mono)
- Soil layer annotations on dirt/excavation shots
- Temperature/freeze-cycle data on cold-weather shots

These elements should be **subtle** — at 60-70% opacity, in `bone` or `steel` color, never overwhelming the photo. The effect: the photo reads as "a project briefing," not "a marketing image." Differentiation from every other concrete contractor's stock-photo aesthetic.

Apply data-overlay to:
- Homepage hero
- About page hero
- Climate-article hero images (IMG-16, IMG-24)
- Service area map context image
- 3-4 project gallery images (where the project has interesting metadata to show)

Keep clean (no overlay) for:
- Service hero images (the work speaks for itself)
- Most blog hero images (would clutter)
- Most project gallery images (timeline data already in the card chrome)

### Image-generation strategy

- **Tool:** `image-generation` skill — Gemini Nano Banana Pro for hero/feature images; Standard acceptable for variants
- **Volume:** 30-34 images for v1 launch
- **Output:** WebP for web, PNG source kept

### Negative prompts (apply to every image)

- No text, words, or labels visible in the image (overlays added separately in code, not baked into the photo)
- No people facing the camera or making eye contact
- No people in the foreground unless specifically called for (workers may appear in distance/background only)
- No 6 fingers / hand artifacts
- No brand logos on equipment, trucks, or clothing
- No obvious AI-generation artifacts (sharp lighting transitions, impossibly perfect edges, paint-like surfaces)
- No watermark or signature

---

## Image-generation prompts (34 images)

### Hero / display images

#### IMG-01 — Homepage hero (with data-overlay treatment in code)
- **Tool:** Nano Banana Pro
- **Aspect:** 16:9 (2560×1440)
- **Prompt:**
  > A wide cinematic photograph of a freshly finished concrete driveway leading toward a Utah suburban home at golden hour. The driveway has a clean, broom-finished surface with crisp control joints. Wasatch mountain range visible in distance. Warm late-afternoon side lighting casts long, soft shadows. Subtle dust haze in the air. Photographic, realistic, shot on a full-frame camera with a 35mm lens. Color grading: warm earthy tones, deep anthracite shadows. No text, no people in foreground, no AI artifacts, no watermark.
- **Code overlay:** GPS coordinates for project location, "1,800 SQ FT · 4 DAYS · STAMPED" in bottom-right corner mono

#### IMG-02 — Services hero
- **Tool:** Nano Banana Pro  
- **Aspect:** 21:9 (3440×1440)
- **Prompt:**
  > Aerial wide shot of a fresh concrete pour in progress at a Utah residential job site. Two crew members in the distance smoothing the surface with a long bull float, clean work area, equipment organized along the perimeter, no clutter. Crisp morning light, no harsh shadows. View from approximately 30 feet up. Photographic, realistic, no text, no faces visible.

#### IMG-03 — About page hero
- **Tool:** Nano Banana Pro
- **Aspect:** 16:9
- **Prompt:**
  > Close-up cinematic photograph of weathered hands troweling concrete on a Utah pool deck. Hands shown from above with the trowel mid-stroke. Warm Utah sunlight, slight glare on the wet concrete surface, water bottle and phone visible at edge of frame. Detailed texture of fresh concrete, hands worn but precise. Photographic, realistic, intimate, no text.

### Service hero images (one per service)

For each service: 16:9, 1920×1080, Pro for primary heroes / Standard acceptable for secondary uses.

**IMG-04 — Concrete driveways**
> Wide-angle photograph of a finished residential concrete driveway in a Utah neighborhood, leading from the street to a two-car garage. Surface has a fine broom finish, crisp expansion joints. Mature suburban landscaping, late afternoon light, Wasatch mountains in distance. No people, no cars on driveway, no text or signage.

**IMG-05 — Stamped & decorative concrete**
> Photograph of a stamped concrete patio with a slate texture in a charcoal/burnt-orange dyed finish. Patio extends from an upscale Utah home to a backyard. Soft warm light from one side. Outdoor furniture barely visible at edge of frame. Realistic textures, no people, no text.

**IMG-06 — Pool decks**
> Photograph of a finished pool deck around a residential swimming pool in Utah. Pool deck surface has a textured non-slip finish. Pool water is calm, late afternoon golden light reflects off the water. Wasatch mountains visible in distance. Decorative borders frame the deck. No people, no text, photographic and realistic.

**IMG-07 — Concrete patios**
> Photograph of a finished concrete patio in a Utah backyard with outdoor furniture (table, chairs) staged but no people. Twilight blue-hour lighting, warm patio lights illuminating the surface. Modern home in background. Surface is smooth, custom finish. No text, no faces, photographic.

**IMG-08 — Concrete repair**
> Photograph showing a before/after split frame of a concrete driveway repair. Left half: cracked, sunken, weathered driveway concrete. Right half: same driveway after professional repair, clean smooth surface. Utah suburban context. Realistic, no text labels, no people, photographic, dramatic lighting from late-afternoon sun.

**IMG-09 — Sport courts**
> Wide photograph of a finished concrete sport court (basketball half-court) in a backyard with hoop, lines painted. Late afternoon sun. Mountain backdrop. Court surface is freshly painted with crisp lines. No people, no text other than court markings.

**IMG-10 — Commercial flatwork**
> Wide-angle photograph of a freshly poured commercial concrete parking lot at a Utah retail center, dusk light, lights on inside the storefront in distance. ADA-compliant accessible ramp visible. Crisp surface, parking line markings. No vehicles, no people, no text on signage.

**IMG-11 — Industrial foundations**
> Photograph of a freshly poured concrete foundation slab for a commercial building, viewed from a low angle. Steel rebar visible at edges where pour continues. Late morning light, construction equipment in distance, no workers in foreground. Industrial context, Utah landscape backdrop. Realistic, photographic, no text.

**IMG-12 — Multi-site / dumpster pads**
> Photograph of a row of three commercial concrete dumpster pads at a Utah multi-site facility. Pads are clean, freshly poured, surrounded by chain-link enclosure (out of focus). Late afternoon light. Realistic industrial-commercial setting, no people, no text, photographic.

**IMG-13 — Builders / subcontractor**
> Photograph of a residential construction site in Utah with multiple new-build homes in different stages. Concrete sidewalks and driveways have just been poured at one home in foreground. Contractor's organized work area, no clutter. No people, no text, golden hour lighting.

**IMG-14 — Process / How We Work**
> Photograph of a clean Utah residential job site at the end of a workday. Concrete recently poured and finished, equipment loaded back on the truck, work area cleaner than when crew arrived. Sun setting, warm tones, sense of completion and satisfaction. No people, no text.

### Blog hero images (14 articles)

For each: 16:9, 1920×1080, Standard quality acceptable.

**IMG-15 — How to Choose a Concrete Contractor in Utah**
> Photograph of a homeowner standing in a Utah driveway looking out at multiple contractor business cards/quotes laid out on a clipboard (no faces visible, just hands and clipboard). Concrete driveway visible in background. Mid-morning light. No text on cards, no logos.

**IMG-16 — Why Utah Concrete Cracks (with data-overlay in code)**
> Close-up photograph of a hairline crack in concrete driveway with frost crystals at the edge of the crack on a cold Utah morning. Wasatch mountains visible in soft focus background. Realistic, dramatic lighting, no text.
- **Code overlay:** Freeze-thaw cycle chart inset; "WASATCH FRONT · ~70 CYCLES/YR" caption mono

**IMG-17 — Driveway Replacement vs Repair**
> Photograph from above showing a driveway that's half cracked/old (left) and half newly replaced (right) — same driveway, two states. Realistic, photographic, no text overlays.

**IMG-18 — 10 Common Residential Concrete Problems**
> Photograph of a Utah residential concrete patio with multiple subtle visible issues: small crack, slight settling at one corner, minor surface spalling. Realistic, no people, no text.

**IMG-19 — What to Expect From a Concrete Quote**
> Photograph of a contractor's clipboard with a measuring tape laid across a partially-cracked driveway. Hand pointing at a feature with index finger. Late morning light. No face visible, no text on clipboard.

**IMG-20 — How to Vet a Concrete Subcontractor (Builder's Guide)**
> Photograph of a residential construction site with a concrete pour in progress, viewed from a builder's perspective (some construction documents/blueprints in foreground out of focus). No faces, no text, golden hour.

**IMG-21 — Concrete Sub Reliability vs Lowest Bid**
> Photograph of two concrete driveways side by side, one well-finished and one poorly finished (slight cracking, uneven surface) — same neighborhood context. Realistic, no people, no text.

**IMG-22 — Common Concrete Sub Failures**
> Photograph of a clearly failing concrete slab at a residential property — visible cracks, slight settling, minor spalling. Realistic, no people, no text.

**IMG-23 — Pre-Pour Checklist for Builders**
> Photograph of a job site preparation: rebar grid laid out, formwork in place, ready for pour. Crisp morning light. No people in foreground, no text.

**IMG-24 — Utah Soil Conditions and Foundations (with data-overlay)**
> Aerial photograph of a Utah commercial construction site with foundation excavation visible. Wasatch mountain range in distance. Soil clearly visible — clay-heavy with rocky areas. Photographic, no people in foreground, no text.
- **Code overlay:** Soil profile cross-section diagram; mono annotations for layer types

**IMG-25 — Commercial Concrete Pour Scheduling**
> Photograph of a large commercial concrete pour in progress with multiple ready-mix trucks, pump truck visible. Late morning, busy organized site. Crew in distance only. No faces, no text, wide angle.

**IMG-26 — Evaluating Commercial Concrete Subs**
> Photograph from above of a contractor's project portfolio book / project photos laid out on a table next to a coffee cup. No text on documents, no faces, professional setting.

**IMG-27 — Multi-Site Concrete Maintenance Programs**
> Photograph showing aerial view of multiple commercial sites in Utah with concrete features visible (parking lots, dumpster pads, sidewalks). Mid-day, clean, organized, no people, no text.

**IMG-28 — Vendor Consolidation**
> Photograph of multiple contractor business cards / proposal documents on a desk being compared. Coffee, pen, calculator nearby. No faces, no text, professional desk setting.

### Project gallery images

Mock projects per personas:

**IMG-29 — Residential: Sandy stamped driveway (1,800 sq ft)**
> Photograph of a residential home in Sandy, Utah with a recently completed 1,800 sq ft stamped concrete driveway. Stamped pattern is European fan design in warm gray with subtle border. Mature landscaping, mid-afternoon, golden side lighting. Photographic, no people, no text.

**IMG-30 — Builder: Lehi townhome flatwork**
> Aerial photograph of a residential townhome development in Lehi, Utah with newly poured concrete sidewalks, driveways, and patios across multiple units. Late morning light, construction context. No people in foreground, no text or logos.

**IMG-31 — Commercial: Draper retail center**
> Wide photograph of a finished commercial retail center parking lot in Draper, Utah with concrete sidewalks, ADA-compliant ramps, parking lines freshly painted. Storefronts in background out of focus. Late afternoon, no vehicles, no people, no text on storefront signage.

**IMG-32 — Enterprise: Multi-site dumpster pad rollout**
> Wide photograph of a row of 4-6 commercial concrete dumpster pads at a Utah retail center back-of-house area. Pads are uniformly poured, clean, surrounded by metal enclosure (partially visible). Late morning, no text or branding visible on enclosures, no people.

**IMG-33 — Pool deck signature project**
> Photograph of a luxury pool deck installation in Utah with stamped, dyed concrete in warm tones. Pool water reflects pool deck and mountain backdrop. Twilight, warm pool lights illuminating. No people, no text.

**IMG-34 — Sport court (residential)**
> Photograph of a residential backyard sport court (basketball + pickleball lines) in Utah. Crisp paint, freshly finished surface. Hoop in place. Late afternoon, mountain backdrop visible. No people, no text.

---

## globals.css starter

```css
@theme {
  /* Brand */
  --color-brand-orange: #E85A19;
  --color-brand-orange-hover: #C44A12;
  --color-brand-orange-muted: #FCEBE0;

  /* Industrial neutrals */
  --color-anthracite: #1A1814;
  --color-anthracite-elevated: #26221C;
  --color-anthracite-overlay: #322D26;
  --color-concrete: #8A857C;
  --color-bone: #F4F0E8;
  --color-paper: #FFFFFF;
  --color-sand: #EDE8DC;
  --color-warm-border: #E0DBCF;
  --color-stone: #6B6760;
  --color-slate-warm: #8C8478;

  /* Data accents */
  --color-steel: #3F6B7D;
  --color-steel-light: #5C8FA3;
  --color-rebar: #7DA84F;
  --color-gold: #C49A2C;
  --color-brick: #A84426;

  /* Wash backgrounds */
  --bg-bone-page: #F4F0E8;
  --bg-paper-card: #FFFFFF;
  --bg-sand-wash: #EDE8DC;
  --bg-anthracite-base: #1A1814;
  --bg-anthracite-elevated: #26221C;
  --bg-anthracite-overlay: #322D26;
  --bg-orange-tinted-light: #FDF1EA;
  --bg-orange-tinted-dark: #322822;

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;

  /* Motion (per library) */
  --ease-curve: cubic-bezier(0.16, 1, 0.3, 1);
}
```

Tailwind v4 picks these up via `@theme`. No `tailwind.config.ts` for color customization needed.

---

## Phase 4 inputs (build wave plan)

The calibration unlocks Phase 4. Specific inputs:

1. **Wave 1 (Foundation) needs:** globals.css with locked palette, typography setup, layout shell, sticky header with logo + persistent CTA, footer, topo-bg overlay assets (`topo-bg-dark.svg`, `topo-bg-light.svg`), engineer-grid asset
2. **Image generation track:** parallel to build waves. Aim for 2-3 sessions producing 30-34 images. Output: `public/images/{hero,services,blog,gallery}/`. Add data-overlay component (`<DataOverlay coords lines etc />`) for the photos that get the architectural treatment.
3. **Wave 2 (RES core) needs:** numbered service grid, hero with parallax + topo-bg, KPI ribbon, hero mini Intelligence Console, dual CTA, live indicator components
4. **Wave 3+ (RES expansion) needs:** service-spec block component, project card with timeline, project gallery filter chips
5. **Wave 5+ (BUILDER) needs:** silo landing template variant (more anthracite-heavy treatment for B2B credibility)
6. **Wave 6 (COMMERCIAL) needs:** trust signal patterns, procurement-language messaging, climate data viz components on Utah Soil article
7. **Wave 7 (ENTERPRISE) needs:** "Schedule a Multi-Site Conversation" CTA variant, account-management language tone

---

## Open follow-ups

1. **WY/MT expansion timing** — when ZionCS actually starts operations in Wyoming and/or Montana, site copy + GBP description + Core 30 keyword strategy update. The logo is already aligned to the expanded footprint. Track expansion timing as a content-update milestone.

2. **Custom display font** — Inter at heavy weights covers the bold-contractor vibe. If post-launch the client wants more display character, candidates would be Oswald or Barlow Condensed for the `display` token only. Re-evaluate after launch.

3. **Photography refresh post-launch** — when ZionCS provides real project photos and video, swap AI-generated systematically. Maintain project-craft direction.

4. **Logo asset cleanup** — currently PNG raster. Eventually want SVG. Park as post-launch enhancement.

5. **Topo-bg asset creation** — needs `topo-bg-dark.svg` and `topo-bg-light.svg` produced. Could be Wasatch-specific elevation contours or a generalized topo pattern. Wave 1 deliverable — generated as part of foundation work, possibly with the image-generation skill or hand-authored SVG.

6. **Service-spec block content authoring** — for v1 launch, populate the spec blocks across the 11 service pages. Information sources: client spec sheets if available, otherwise reasonable industry standards (4,000 PSI residential / 4,500 commercial, etc.) — flag as "verify with client" content.
