# ZionCS Design Calibration

> Phase 3 output (2026-05-04). Locks color palette, typography, section system, component design language, logo treatment, and the image-generation prompts for v1 launch. Full rationale; the override summary lives in `ZIONCS_DELTAS.md`.

---

## Overview — locked decisions

| Decision | Lock |
|---|---|
| **Palette** | Refined orange + warm charcoal + cream system (defined below) |
| **Typography** | Inter (with heavy weights at display sizes) + JetBrains Mono for eyebrows/stats |
| **Section system** | Five-wash rotation (cream-light, cream-warm, paper-white, charcoal-dark, accent-orange-tinted) |
| **Logo strategy** | Use the full circular-emblem horizontal logo (`zioncs-logo-horizontal.png` and white variant). The WY/UT/MT around the bottom edge is forward-looking brand vision — ZionCS intends to expand into Wyoming and Montana. Site copy and GBP description stay Utah-only for current reality. |
| **Photography direction** | Project-craft photography (the work, the result, scale of jobs); no worker-as-mascot. AI-generated v1, real-photo swap-in post-launch. |
| **Image generation** | Gemini Nano Banana Pro for hero/feature images; Standard for gallery thumbnails. ~30 images for v1. |
| **Motion** | Library default — EASE curve `[0.16, 1, 0.3, 1]`, scroll-reveal, parallax on hero. Per `MOTION_AND_INTERACTION.md`. |

---

## Logo treatment

**Use the full circular-emblem horizontal logo as the primary brand mark.** The `zioncs-logo-horizontal.png` (and `zioncs-logo-horizontal-white.png` for dark surfaces) include the full circular emblem with the muscular character, "ZION CONCRETE SPECIALISTS" arching around the top, and "WYOMING ★ UTAH ★ MONTANA" arching around the bottom — paired with the bold "ZION C.S." wordmark.

### Brand vision vs current reality

The WY/UT/MT in the emblem is **forward-looking brand vision** — ZionCS intends to expand into Wyoming and Montana. The site copy and GBP description currently reflect the **current Utah-only reality** because they don't yet do work there. When the expansion happens, copy updates without requiring a logo change.

This is a deliberate, sound design decision: the logo represents the full vision (where the brand is going), not just the current footprint. Many regional service businesses do this.

### Asset usage

- **Header / navbar:** `zioncs-logo-horizontal.png` at height 40-48px
- **Footer:** `zioncs-logo-horizontal-white.png` (white/inverted variant) on charcoal-dark surface
- **Footer compact / sidebar / mobile menu:** `zioncs-icon.png` (bare character only) at 32px when space is constrained
- **Favicon:** `zioncs-icon-32.png` (already prepared)
- **Open Graph / social:** Compose a branded OG image: dark cream wash background + horizontal logo + hero tagline + Utah-only contact info
- **Apple touch icon:** `zioncs-icon-256.png`

### Logo on different backgrounds

- **On `cream-page` / `paper-card` / `sand-wash` (light backgrounds):** Use `zioncs-logo-horizontal.png` (default colored)
- **On `charcoal-dark` (footer, hero CTA panels):** Use `zioncs-logo-horizontal-white.png`
- **On `orange-tinted` washed sections:** Use the colored logo (not white) — the contrast still works

### Asset-quality follow-up (post-launch)

Currently the logos are PNG (raster). Eventually want SVG for sharper rendering and smaller file sizes. Park as a post-launch enhancement.

---

## Color palette

### Brand colors

| Role | Hex | Use |
|---|---|---|
| **Brand orange (primary CTA)** | `#E85A19` | Primary CTA buttons, key accents, link hover, focus rings, brand highlights |
| **Brand orange hover** | `#C44A12` | Primary button hover state |
| **Brand orange muted** | `#FCEBE0` | Subtle orange wash for sections/hover backgrounds |
| **Charcoal (foreground)** | `#1F1A14` | Primary text on light backgrounds; deep navigation; dark surfaces |
| **Charcoal hover** | `#2D2620` | Hover state for charcoal-on-light buttons (ghost CTA) |

### Neutrals (warm-leaning system)

| Role | Hex | Use |
|---|---|---|
| **Cream (background)** | `#FAF8F2` | Page-default background. Warm off-white. Not pure white. |
| **Paper (light surface)** | `#FFFFFF` | Card surfaces, elevated panels — slight visual lift over the cream page bg |
| **Sand (subtle wash)** | `#F5F2EA` | Section backgrounds for wash-rotation; subtle warmth |
| **Warm border** | `#E8E4DA` | Subtle dividers, card borders, input borders |
| **Stone (muted text)** | `#6B6760` | Secondary text, captions, meta |
| **Slate (subtle text)** | `#8C8478` | Eyebrows, deemphasized labels |

### Semantic accents (used sparingly)

| Role | Hex | Use |
|---|---|---|
| **Forest (positive)** | `#2D7A3F` | "Project complete," availability indicators, success states |
| **Gold (caution / highlight)** | `#C49A2C` | Featured project badges, "limited spots" callouts |
| **Steel (info)** | `#4A6B8C` | Informational chips, secondary tag colors |

### Why this palette

- **Refines the existing palette without breaking continuity.** Customer recognizes the new site as "their" site (still orange, still navy-feeling, still warm).
- **Cream + warm charcoal reads more sophisticated than bright white + bright navy.** Threads the needle between residential warmth and B2B credibility.
- **Stone + slate as muted/subtle text** instead of cool slates (#94A3B8 etc.) keeps everything in a warm family — feels craft-oriented, not SaaS-cold.
- **Refined orange (#E85A19) is more burnt and sophisticated** than the bright Webflow orange (#ED7D31). Still recognizable as Zion CS orange, but reads more premium.

### Avoid

- **Pure black (#000000)** — too harsh against the warm cream system
- **Pure white (#FFFFFF) as page background** — too cold; cream `#FAF8F2` instead (white reserved for cards/surfaces)
- **Cool slates** (Tailwind's slate-500, slate-600, etc.) — clashes with the warm charcoal foreground
- **Bright Webflow orange (#ED7D31)** — replaced by refined #E85A19

---

## Typography

### Families

- **Inter** (loaded via `next/font/google`, weights 400/500/600/700/800/900)
- **JetBrains Mono** (loaded via `next/font/google`, weights 400/500)
- **No third font.** The wordmark provides display-character vibe; Inter Black at large sizes carries enough typographic weight to match.

### Type scale

Using `clamp()` for fluid typography:

| Token | Size | Weight | Use |
|---|---|---|---|
| **display** | `clamp(3rem, 5.5vw, 5rem)` | 900 (Black) | Hero headlines |
| **h1** | `clamp(2.25rem, 4vw, 3.25rem)` | 800 | Page titles |
| **h2** | `clamp(1.75rem, 3vw, 2.25rem)` | 800 | Section headlines |
| **h3** | `clamp(1.25rem, 2.2vw, 1.5rem)` | 700 | Subsection headlines |
| **h4** | `1.125rem` | 700 | Card titles, list-item titles |
| **body-lg** | `1.125rem` | 400 | Lead paragraphs, hero subheads |
| **body** | `1rem` | 400 | Default body text |
| **body-sm** | `0.875rem` | 400 | Secondary body, captions |
| **caption** | `0.75rem` | 500 | Meta text |
| **eyebrow** | `0.625rem` (10px) | 600 | Section labels (uppercase, tracking-wider, JetBrains Mono) |
| **kpi-large** | `clamp(2rem, 3.5vw, 2.75rem)` | 700, JetBrains Mono | Stats ("9+", "200+", "10+") |
| **kpi-small** | `1.25rem` | 700, JetBrains Mono | Inline numbers in copy |

### Use rules

- **Eyebrow:** uppercase, JetBrains Mono, tracking-`[0.15em]`, color `Stone (#6B6760)` or `Brand orange` for emphasis
- **Headlines (display, h1, h2):** Inter weight 800-900, tracking-tight, line-height tight (`1.05-1.15`)
- **Body:** Inter 400, line-height `1.6` for body, `1.5` for body-lg
- **Numbers in copy:** When a number conveys credibility (years in business, project count, sq ft), wrap in `<span class="font-mono tabular-nums font-semibold">`
- **Pull quotes / testimonials:** Inter italic 500, larger size (1.125-1.25rem), generous line-height

### Why Inter, not a display font?

Tested options for a display font that matches the heavy-condensed wordmark feel:
- **Anton** — too narrow, athletic-team-jersey vibe, would compete with the wordmark
- **Bebas Neue** — same issue
- **Oswald** — slightly more refined; possible but adds another loaded font
- **Barlow Condensed** — close to the wordmark but doesn't elevate the design

Decision: **Inter Black/ExtraBold at large sizes (display, h1) carries enough weight** to feel athletic/bold without introducing typographic competition with the wordmark. Easier to maintain, faster to load.

If post-launch the client wants more display character, swap a single display font (probably **Oswald** or **Barlow Condensed**) into the `display` token only. That's a one-token change.

---

## Section background system

Five wash treatments. Rotate across page sections to create rhythm:

| Wash | Background color | Foreground | Use |
|---|---|---|---|
| **cream-page** | `#FAF8F2` | charcoal `#1F1A14` | Default page background; default for content sections |
| **paper-card** | `#FFFFFF` | charcoal `#1F1A14` | Card surfaces; not section backgrounds typically |
| **sand-wash** | `#F5F2EA` | charcoal `#1F1A14` | Quiet sections (process, FAQ, secondary content) |
| **charcoal-dark** | `#1F1A14` | cream `#FAF8F2` + JetBrains accents | Hero, KPI bands, footer, occasional CTA panel |
| **orange-tinted** | `#FDF1EA` (orange `#E85A19` at ~6% opacity) | charcoal `#1F1A14` | Single section per page max — used for emphasis (e.g., "Why Choose ZionCS" on homepage). Sparingly. |

### Page-by-page wash plan (homepage example)

```
Hero:                 charcoal-dark
KPI ticker / stats:   charcoal-dark (sub-section of hero)
Services intro:       cream-page (default)
Service cards grid:   cream-page
Project gallery:      sand-wash
Why ZionCS (USPs):    orange-tinted (the one orange section per page)
Process (How We Work): cream-page
Testimonials / Reviews: sand-wash
Social media feed:    cream-page
FAQ:                  sand-wash
Footer CTA:           charcoal-dark
Footer:               charcoal-dark
```

### Why a five-wash system

- **Cream-page + sand-wash + charcoal-dark gives 80% of the rhythm** with quiet sophistication
- **Orange-tinted is the punctuation** — used once per page on the highest-priority CTA-adjacent section. Overuse kills the punch.
- **Paper-card stays for cards only** — clear visual distinction between "content surface" and "card" without shouting

---

## Component design language

### Service card (used 11x — one per service in Core 30)

Inspired by VCASS-style numbered cards:

```
┌──────────────────────────────┐
│ 01 / DRIVEWAYS               │  ← eyebrow: 01 in JetBrains Mono + service name (uppercase, tracking-wider)
│                              │
│ Concrete Driveways in Utah   │  ← h3 title
│                              │
│ New driveways, replacements, │  ← body-sm, 2-3 line description
│ and repairs across Utah.     │
│ Built to last freeze-thaw.   │
│                              │
│ Learn more →                 │  ← link with arrow, charcoal hover-orange
└──────────────────────────────┘
```

- Card surface: `paper-card #FFFFFF` on `cream-page` or `sand-wash` background
- Border: 1px `warm-border #E8E4DA`
- Padding: `1.5rem` mobile, `2rem` desktop
- Hover: subtle lift (`translate-y-[-2px]`), border deepens to `stone #6B6760`
- Optional: small icon top-right (lucide-react), 24x24, `stone` color
- Optional: thumbnail image at top (16:9 ratio) — for hero service pages

### Project card (used in gallery)

Image-driven card, 4:3 ratio:

```
┌──────────────────────────────┐
│                              │
│       [Project image]        │  ← 4:3 hero image
│                              │
├──────────────────────────────┤
│ DRIVEWAY · SANDY, UT         │  ← eyebrow: service · city
│                              │
│ Stamped Driveway with        │  ← h4 project title
│ Decorative Border            │
│                              │
│ 1,800 sq ft · 4 days         │  ← caption: scale · timeline
└──────────────────────────────┘
```

- Card surface: `paper-card`
- Image overlay on hover: subtle dark gradient from bottom, "View project →" CTA appears
- Filterable: chip filters above gallery (All / Driveways / Sport Courts / Commercial / etc.)
- Layout: 3-column desktop, 2-column tablet, 1-column mobile

### Hero (homepage)

Full-bleed background image with parallax + overlay text:

```
┌───────────────────────────────────────────┐
│  [Hero image: hero-driveway-utah-AI.jpg]  │
│                                           │
│   ZION CONCRETE SPECIALISTS               │  ← logo + wordmark, top-left
│                                           │
│                                           │
│   If It Needs To Be Flat,                 │  ← display heading, white on dark
│   We've Got It Covered.                   │
│                                           │
│   Utah's flatwork crew — show up on time, │  ← body-lg, white/cream
│   keep the worksite clean, get it right.  │
│                                           │
│   [Request a Quote] [Get in Touch]        │  ← primary orange + ghost charcoal/white
│                                           │
│   ⭐ 5.0 / 6 Google Reviews · 9+ Years   │  ← caption, social proof bar
└───────────────────────────────────────────┘
```

- Image: parallax on scroll (`background-attachment: fixed` desktop; static on mobile)
- Overlay: linear gradient from `rgba(31, 26, 20, 0.70)` to `rgba(31, 26, 20, 0.45)` (charcoal dark)
- Text: white/cream
- CTAs: primary orange filled, secondary ghost (white border + white text on dark hero)
- Phone number visible in header above hero

### Social media feed scroll

Horizontal scroll, Instagram-style cards:

```
←  [Post 1]  [Post 2]  [Post 3]  [Post 4]  [Post 5] →
```

- Cards: 280px wide × 320px tall, `paper-card` surface, 8px rounded corners
- Each card: square Instagram image (256x256) + caption snippet (2-line clamp) + posted-on date + small "View on Instagram →" link
- Section background: `cream-page`
- Scroll behavior: `scroll-snap-x mandatory`, `snap-start` on cards
- Mobile: same horizontal scroll, single card visible at a time
- Data source: `src/data/social-posts.ts` (manually curated v1 per ZIONCS_DELTAS.md)

### Persistent "Request a Quote" CTA

Always-on conversion mechanic per HappyRobot pattern:

- **Header:** sticky on scroll, `Request a Quote` button visible at all times (right-aligned)
- **Mobile:** sticky bottom CTA bar with phone number + Request a Quote — fixed-position, always visible
- **Footer:** large CTA panel with phone, email, form before the actual footer content

### Numbered service grid (homepage)

Per VCASS inspiration — 11 services in numbered grid:

```
01 — Driveways                07 — Sport Courts
02 — Stamped & Decorative     08 — RV Pads
03 — Pool Decks               09 — Splash Pads
04 — Patios                   10 — Sidewalks & Curbing
05 — Foundations & Footings   11 — Commercial Flatwork
06 — Concrete Repair
```

- Two-column desktop grid, single-column mobile
- Each row: monospace number in orange + service name in Inter 700 + "→" arrow on hover
- Hover: row background subtly tints orange-muted; arrow slides right
- Click: navigate to that service page

### KPI ticker (used on homepage hero footer + selected service pages)

Library standard from `DATA-INTELLIGENCE-LAYER-SKILL.md` § 1, adapted to ZionCS:

```
9+ YEARS  ·  200+ PROJECTS  ·  10+ TEAM  ·  WASATCH FRONT + ST. GEORGE
```

- All values: JetBrains Mono `kpi-large` weight 700
- Labels (under values): `eyebrow` style (uppercase, tracking-wider, stone color)
- Layout: flex row with vertical dividers between, equal width
- Background: `charcoal-dark` (when on hero) or `paper-card` (when standalone)
- Mobile: 2-column grid

### Intelligence Console (mini in hero, full as section)

Per library `COMPONENT_PATTERNS.md` § 3 — the AI chat assistant with prompt chips. ZionCS-specific calibration:

**Hero mini console** — bottom of hero section, below CTAs, on charcoal-dark surface:
- Suggestion chips: "Driveway replacement?", "Commercial RFP?", "How fast can you start?", "Service area?"
- Input: "Ask Zion CS about your project..."
- Response area renders below

**Full section console** — on a dedicated `cream-page` section:
- All suggestion chips visible
- Larger response area
- Embedded action cards (calendar / contact_info / intake)

**System prompt anchors:**
- Voice: operator-grade, direct, confident — not SaaS, not folksy
- Vocabulary: "concrete," "flatwork," "pour," "sub-grade," "finish," "quote" — not corporate-speak
- When asked about pricing: "We don't quote on the website — every job's different. Request a quote and we'll give you a written number within 7 days, no obligation."
- When asked about service area: "Utah only — Wasatch Front and St. George" (consistent with DELTAS)
- Action routing: high-intent (residential repair, builder inquiry) → calendar OR intake; commercial/enterprise → calendar; pricing questions → intake (quote form)

---

## Background system details

### globals.css starter values

```css
@theme {
  /* Brand colors */
  --color-brand-orange: #E85A19;
  --color-brand-orange-hover: #C44A12;
  --color-brand-orange-muted: #FCEBE0;

  /* Foreground */
  --color-charcoal: #1F1A14;
  --color-charcoal-hover: #2D2620;

  /* Neutrals (warm-leaning) */
  --color-cream: #FAF8F2;
  --color-paper: #FFFFFF;
  --color-sand: #F5F2EA;
  --color-warm-border: #E8E4DA;
  --color-stone: #6B6760;
  --color-slate: #8C8478;

  /* Semantic accents */
  --color-forest: #2D7A3F;
  --color-gold: #C49A2C;
  --color-steel: #4A6B8C;

  /* Wash backgrounds */
  --bg-cream-page: #FAF8F2;
  --bg-paper-card: #FFFFFF;
  --bg-sand-wash: #F5F2EA;
  --bg-charcoal-dark: #1F1A14;
  --bg-orange-tinted: #FDF1EA;

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
}
```

Tailwind v4 picks these up via `@theme`. No `tailwind.config.ts` for color customization needed.

---

## Photography direction + image-generation strategy

### Direction (locked in DELTAS)

- **The work, the result, the scale of jobs** — finished driveways, sport courts in use, pool decks at sunset, dumpster pads in commercial context
- **Not worker-as-mascot** — the existing site over-uses "strong worker hard hat folding arms" tied to the logo character. Move away from this.
- **Utah-specific landscapes when relevant** — Wasatch mountain backdrops, red-rock for St. George scenes
- **Real-world lighting** — golden hour, overcast natural, late afternoon. Avoid stock-photo flat lighting.

### Image-generation strategy

- **Tool:** `image-generation` skill (Gemini Nano Banana Pro for hero/feature images; Standard for gallery thumbnails and blog hero variants)
- **Reasoning:** Pro is better for compositional integrity (props, materials, scale relationships); Standard is fine for cleaner photographic content. Per the CoreHOA precedent.
- **Volume:** ~30 images for v1 launch
- **Output format:** WebP for web, with a 1-2x lossless PNG kept as source

### Negative prompts (apply to every image)

Every image-generation prompt should include these negative directives:

- No text, words, or labels visible in the image (including signs, banners, equipment branding)
- No people facing the camera or making eye contact
- No people in the foreground unless specifically called for (workers may appear in distance/background only)
- No 6 fingers / hand artifacts
- No brand logos on equipment, trucks, or clothing
- No obvious AI-generation artifacts (sharp lighting transitions, impossibly perfect edges, paint-like surfaces)
- No watermark or signature

---

## Image-generation prompts (30 images)

### Hero / display images (1-3)

#### IMG-01 — Homepage hero
- **Use:** Hero background on homepage
- **Tool:** Nano Banana Pro
- **Aspect:** 16:9 (2560×1440)
- **Prompt:**
  > A wide cinematic photograph of a freshly finished concrete driveway leading toward a Utah suburban home at golden hour. The driveway has a clean, broom-finished surface with crisp control joints. Wasatch mountain range visible in distance. Warm late-afternoon side lighting casts long, soft shadows. Subtle dust haze in the air. Photographic, realistic, shot on a full-frame camera with a 35mm lens. Color grading: warm cream tones, neutral oranges in lighting, deep charcoal shadows. No text, no people in foreground, no AI artifacts, no watermark.

#### IMG-02 — Services hero (top-of-services-page)
- **Use:** /services hero, section dividers
- **Tool:** Nano Banana Pro
- **Aspect:** 21:9 (3440×1440)
- **Prompt:**
  > Aerial wide shot of a fresh concrete pour in progress at a Utah residential job site. Two crew members in the distance smoothing the surface with a long bull float, clean work area, equipment organized along the perimeter, no clutter. Crisp morning light, no harsh shadows. View from approximately 30 feet up. Photographic, realistic, no text, no faces visible, no AI artifacts.

#### IMG-03 — About page hero
- **Use:** /about hero
- **Tool:** Nano Banana Pro
- **Aspect:** 16:9
- **Prompt:**
  > Close-up cinematic photograph of weathered hands troweling concrete on a Utah pool deck. Hands shown from above with the trowel mid-stroke. Warm Utah sunlight, slight glare on the wet concrete surface, water bottle and phone visible at edge of frame. Detailed texture of fresh concrete, hands worn but precise. Photographic, realistic, intimate, no text, no AI artifacts.

### Service hero images (4-14, one per service page)

For each service, generate one hero image (16:9, 1920×1080, Nano Banana Pro for primary, Standard acceptable for variations):

#### IMG-04 — Concrete driveways
> Wide-angle photograph of a finished residential concrete driveway in a Utah neighborhood, leading from the street to a two-car garage. Surface has a fine broom finish, crisp expansion joints. Mature suburban landscaping, late afternoon light, Wasatch mountains in distance. No people, no cars on driveway, no text or signage.

#### IMG-05 — Stamped & decorative concrete
> Photograph of a stamped concrete patio with a slate texture in a charcoal/burnt-orange dyed finish. Patio extends from an upscale Utah home to a backyard. Soft warm light from one side. Outdoor furniture barely visible at edge of frame. Realistic textures, no people, no text, no AI artifacts.

#### IMG-06 — Pool decks
> Photograph of a finished pool deck around a residential swimming pool in Utah. Pool deck surface has a textured non-slip finish. Pool water is calm, late afternoon golden light reflects off the water. Wasatch mountains visible in distance. Decorative borders frame the deck. No people, no text, photographic and realistic.

#### IMG-07 — Concrete patios
> Photograph of a finished concrete patio in a Utah backyard with outdoor furniture (table, chairs) staged but no people. Twilight blue-hour lighting, warm patio lights illuminating the surface. Modern home in background. Surface is smooth, custom finish. No text, no faces, photographic.

#### IMG-08 — Concrete repair
> Photograph showing a before/after split frame of a concrete driveway repair. Left half: cracked, sunken, weathered driveway concrete. Right half: same driveway after professional repair, clean smooth surface. Utah suburban context. Realistic, no text labels, no people, photographic, dramatic lighting from late-afternoon sun.

#### IMG-09 — Sport courts (note: not in initial Core 30 service list, but used for service-discovery imagery)
> Wide photograph of a finished concrete sport court (basketball half-court) in a backyard with hoop, lines painted. Late afternoon sun. Mountain backdrop. Court surface is freshly painted with crisp lines. No people, no text other than court markings.

#### IMG-10 — Commercial concrete
> Wide-angle photograph of a freshly poured commercial concrete parking lot at a Utah retail center, dusk light, lights on inside the storefront in distance. ADA-compliant accessible ramp visible. Crisp surface, parking line markings. No vehicles, no people, no text on signage.

#### IMG-11 — Industrial foundations
> Photograph of a freshly poured concrete foundation slab for a commercial building, viewed from a low angle. Steel rebar visible at edges where pour continues. Late morning light, construction equipment in distance, no workers in foreground. Industrial context, Utah landscape backdrop. Realistic, photographic, no text.

#### IMG-12 — Multi-site / dumpster pads
> Photograph of a row of three commercial concrete dumpster pads at a Utah multi-site facility. Pads are clean, freshly poured, surrounded by chain-link enclosure (out of focus). Late afternoon light. Realistic industrial-commercial setting, no people, no text, photographic.

#### IMG-13 — Builders / subcontractor
> Photograph of a residential construction site in Utah with multiple new-build homes in different stages. Concrete sidewalks and driveways have just been poured at one home in foreground. Contractor's organized work area, no clutter. No people, no text, golden hour lighting.

#### IMG-14 — Home page secondary feature (Process / How We Work)
> Photograph of a clean Utah residential job site at the end of a workday. Concrete recently poured and finished, equipment loaded back on the truck, work area cleaner than when crew arrived. Sun setting, warm tones, sense of completion and satisfaction. No people, no text.

### Blog hero images (15-28, 14 articles)

For each blog article, generate a 16:9 hero image (1920×1080, Standard quality acceptable):

#### IMG-15 — How to Choose a Concrete Contractor in Utah
> Photograph of a homeowner standing in a Utah driveway looking out at multiple contractor business cards/quotes laid out on a clipboard (no faces visible, just hands and clipboard). Concrete driveway visible in background. Mid-morning light. No text on cards, no logos, photographic.

#### IMG-16 — Why Utah Concrete Cracks (Climate Guide)
> Close-up photograph of a hairline crack in concrete driveway with frost crystals at the edge of the crack on a cold Utah morning. Wasatch mountains visible in soft focus background. Realistic, dramatic lighting, no text, photographic.

#### IMG-17 — Driveway Replacement vs Repair
> Photograph from above showing a driveway that's half cracked/old (left) and half newly replaced (right) — same driveway, two states. Realistic, photographic, no text overlays.

#### IMG-18 — 10 Common Residential Concrete Problems
> Photograph of a Utah residential concrete patio with multiple subtle visible issues: small crack, slight settling at one corner, minor surface spalling. Realistic, no people, no text, photographic.

#### IMG-19 — What to Expect From a Concrete Quote
> Photograph of a contractor's clipboard with a measuring tape laid across a partially-cracked driveway. Hand pointing at a feature with index finger. Late morning light. No face visible, no text on clipboard, photographic.

#### IMG-20 — How to Vet a Concrete Subcontractor (Builder's guide)
> Photograph of a residential construction site with a concrete pour in progress, viewed from a builder's perspective (some construction documents/blueprints in foreground out of focus). No faces, no text, photographic, golden hour.

#### IMG-21 — Concrete Sub Reliability vs Lowest Bid
> Photograph of two concrete driveways side by side, one well-finished and one poorly finished (slight cracking, uneven surface) — same neighborhood context. Realistic, photographic, no people, no text.

#### IMG-22 — Common Concrete Sub Failures
> Photograph of a clearly failing concrete slab at a residential property — visible cracks, slight settling, minor spalling. Realistic, photographic, no people, no text.

#### IMG-23 — Pre-Pour Checklist for Builders
> Photograph of a job site preparation: rebar grid laid out, formwork in place, ready for pour. Crisp morning light. No people in foreground, no text, photographic.

#### IMG-24 — Utah Soil Conditions and Commercial Foundations
> Aerial photograph of a Utah commercial construction site with foundation excavation visible. Wasatch mountain range in distance. Soil clearly visible — clay-heavy with rocky areas. Photographic, no people in foreground, no text.

#### IMG-25 — Commercial Concrete Pour Scheduling
> Photograph of a large commercial concrete pour in progress with multiple ready-mix trucks, pump truck visible. Late morning, busy organized site. Crew in distance only. No faces, no text, photographic, wide angle.

#### IMG-26 — Evaluating Commercial Concrete Subs (Procurement Guide)
> Photograph from above of a contractor's project portfolio book / project photos laid out on a table next to a coffee cup. No text on documents, no faces, professional setting, photographic.

#### IMG-27 — Multi-Site Concrete Maintenance Programs
> Photograph showing aerial view of multiple commercial sites in Utah with concrete features visible (parking lots, dumpster pads, sidewalks). Mid-day, clean, organized, photographic, no people, no text.

#### IMG-28 — Vendor Consolidation
> Photograph of multiple contractor business cards / proposal documents on a desk being compared. Coffee, pen, calculator nearby. No faces, no text on documents, professional desk setting, photographic.

### Project gallery images (29-30 + extras)

Mock projects per personas. 4-5 needed; generating 6 to give selection:

#### IMG-29 — Residential project: Sandy stamped driveway (1,800 sq ft)
> Photograph of a residential home in Sandy, Utah with a recently completed 1,800 sq ft stamped concrete driveway. Stamped pattern is European fan design in warm gray with subtle border. Mature landscaping, mid-afternoon, golden side lighting. Photographic, no people, no text.

#### IMG-30 — Builder project: Lehi townhome flatwork
> Aerial photograph of a residential townhome development in Lehi, Utah with newly poured concrete sidewalks, driveways, and patios across multiple units. Late morning light, construction context. Photographic, no people in foreground, no text or logos.

#### IMG-31 — Commercial: Draper retail center parking
> Wide photograph of a finished commercial retail center parking lot in Draper, Utah with concrete sidewalks, ADA-compliant ramps, parking lines freshly painted. Storefronts in background out of focus. Late afternoon, no vehicles, no people, no text on storefront signage. Photographic.

#### IMG-32 — Enterprise: Multi-site dumpster pad rollout (anonymous waste services)
> Wide photograph of a row of 4-6 commercial concrete dumpster pads at a Utah retail center back-of-house area. Pads are uniformly poured, clean, surrounded by metal enclosure (partially visible). Late morning, photographic, no text or branding visible on enclosures, no people.

#### IMG-33 — Pool deck signature project
> Photograph of a luxury pool deck installation in Utah with stamped, dyed concrete in warm tones. Pool water reflects pool deck and mountain backdrop. Twilight, warm pool lights illuminating. Photographic, no people, no text.

#### IMG-34 — Sport court (residential)
> Photograph of a residential backyard sport court (basketball + pickleball lines) in Utah. Crisp paint, freshly finished surface. Hoop in place. Late afternoon, mountain backdrop visible. Photographic, no people, no text.

### Total: 34 images for v1 (gives 4 extra to swap in or use for blog variants)

---

## Phase 4 inputs (build wave plan)

The design calibration above unlocks Phase 4. Specific inputs to the wave plan:

1. **Wave 1 (Foundation) needs:** globals.css with the locked palette, typography setup, layout shell, header with logo, footer
2. **Image generation track:** runs in parallel with build waves. Aim to generate the 34 images across 2-3 sessions using the `image-generation` skill. Output: `public/images/` organized by `hero/`, `services/`, `blog/`, `gallery/`.
3. **Wave 2 (RESIDENTIAL silo core) needs:** service card component, hero with parallax, KPI ticker, mini Intelligence Console, dual CTA pattern
4. **Wave 5 (BUILDER) and onward need:** silo landing page template that varies header treatment (charcoal-dark) vs residential pages (cream-page hero variants)
5. **Wave 6 (COMMERCIAL) needs:** trust signal patterns (logo row component), procurement-language messaging
6. **Wave 7 (ENTERPRISE) needs:** account-management language; potentially a "Schedule a Multi-Site Conversation" CTA variant

---

## Open follow-ups

These are decisions deferred to the next phase or to client follow-up:

1. **WY/MT expansion timing** — when ZionCS actually starts operations in Wyoming and/or Montana, site copy + GBP description + Core 30 keyword strategy update to match. The logo doesn't need to change at that point — it's already aligned to the expanded footprint. Track expansion timing as a content-update milestone.

2. **Custom display font** — Inter at heavy weights covers the bold-contractor vibe. If post-launch the client wants more display character, Oswald or Barlow Condensed are the candidates for the `display` token only.

3. **Photography refresh post-launch** — when ZionCS provides real project photos and video, swap AI-generated content systematically. Maintain the "project-craft" direction.

4. **Section wash variation per silo** — current plan uses the 5-wash system uniformly. Consider whether B2B silos (BUILDER/COMMERCIAL/ENTERPRISE) get a slightly more sophisticated treatment (e.g., more charcoal-dark sections for gravitas) vs RESIDENTIAL (warmer cream-heavy treatment). Test in build waves; refine in DELTAS as needed.

5. **Logo asset cleanup** — currently using `zioncs-icon.png` (raster). Eventually want SVG version. Park as asset-quality follow-up.
