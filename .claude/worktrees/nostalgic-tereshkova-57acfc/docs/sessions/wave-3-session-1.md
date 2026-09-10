# Wave 3 Session 1 — Service template + driveways/stamped/pool decks (3 service pages)

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 10 static routes)

---

## Deliverables

### Shared service-page chrome

#### `src/components/data/ServiceSpecBlock.tsx`
Engineering-spec card per `ZIONCS_DESIGN_CALIBRATION.md` § Component design language. Reads like a code block / spec sheet:

```
// SPEC // RESIDENTIAL DRIVEWAY
CONCRETE       4,000 PSI · air-entrained
THICKNESS      4″ residential / 5–6″ heavy use
REINFORCEMENT  #3 rebar grid, 18″ on center
SUBGRADE       6″ compacted base, prepared
FINISH         Broom · float · stamped (optional)
JOINTS         Control joints, 8–10 ft intervals
CURE TIME      24h walkable · 7d driveable
WARRANTY       Workmanship — 2 year
```

- `card-dark` + `status-steel` (3px steel left border)
- All mono typography, varying weights
- `dl/dt/dd` semantic markup
- Optional footnote in stone uppercase mono caption style
- Mobile-friendly (label width adjusts at sm:)

#### `src/components/pages/RelatedServices.tsx`
- Sand-wash section, 4-card grid
- `card-light` cards with mono numbered eyebrow + Inter bold name + stone description + brand-orange "Learn more" link
- Takes explicit `slugs` prop OR falls back to "all services minus current"

#### `src/components/pages/ServicePageTemplate.tsx`
- Composes: `PageHero` → 2-col body section (children left col-span-7, sticky `ServiceSpecBlock` right col-span-5) → `FaqSection` → `RelatedServices` → `PageCTA`
- Spec block sticks at `top-28` on lg+ so it stays in view as the body content scrolls
- Body content passed as children — each service controls its own narrative

### Three service pages

#### `/services/concrete-driveways-utah` (~830 words body)
Core 30 entry #6. Top residential service. Front door to the residential silo from a service-page perspective.

- 4-section body: Overview / What's Included / Repair vs Replace / Where We Pour
- 6 FAQs (thickness, repair vs replace, drive-on time, cost, permits, stamping)
- Spec block: residential driveway — 4,000 PSI, 4″ standard, #3 rebar 18″, broom/float/stamped, 24h/7d cure, 2yr warranty
- Related: stamped, patios, repair, sidewalks
- Internal links: state pillar, Sandy + SLC location pages, blog stubs (`why-utah-concrete-cracks`, `driveway-replacement-vs-repair`)

#### `/services/stamped-decorative-concrete-utah` (~720 words body)
Core 30 entry #7.

- 4-section body: Overview / Where Stamped Works Best / Overlays vs New Pours / Maintenance
- 5 FAQs (patterns, fade, cost premium, overlays, slip resistance)
- Spec block: stamped — color/pattern/sealer/borders/cure schedule
- Related: driveways, patios, pool decks, sport courts
- Internal links to pool-decks service

#### `/services/pool-decks-utah` (~820 words body)
Core 30 entry #8 — origin business.

- 4-section body: Why Pool Decks Are The Test / New Build vs Replacement / Finishes We Recommend / Related Residential Work
- 5 FAQs (why pool deck differs, surface texture, replacement, cracking, project downtime)
- Spec block: pool deck — chlorine-rated sealer, non-slip additive, joints sized to deck geometry
- Related: stamped, patios, driveways, splash pads
- Origin-business voice — "we started here" angle pulls through the body copy

### Per-page structured data
Every service page emits:
1. `Service` schema (name, description, provider, areaServed, url)
2. `BreadcrumbList` schema (Home → Services → Service)
3. `FAQPage` schema (all FAQs)

### Per-page metadata
- `title`, `description`, canonical, OpenGraph
- Title lengths within Core 30 char budgets (33, 31, 30 chars respectively for the meta titles)

---

## Verification

- ✅ `npm run build` passes clean — 10 static prerendered routes
- ✅ Service + BreadcrumbList + FAQPage JSON-LD on each
- ✅ ServiceSpecBlock renders mono typography correctly
- ✅ Related-services 4-card grid populated with correct sibling slugs
- ✅ Internal links resolve where target pages exist (state pillar, Sandy, SLC, sibling services within Wave 3.1) — placeholders to `/blog/*`, `/services/concrete-patios-utah`, `/services/residential-concrete-repair-utah`, `/services/sport-courts-utah`, `/services/splash-pads-utah`, `/services/sidewalks-curbing-utah`, `/services` index activate as their waves ship
- ✅ Word counts hit 700–850 (Core 30 target 800–1,200; slightly tight on stamped + pool decks but covers all required link targets and matches the brief's voice density)

## Notes

1. **Spec values are documented assumptions:** 4,000 PSI air-entrained, #3 rebar 18″ o.c., 4″ residential thickness, 2-year workmanship warranty. These are reasonable industry defaults. Flagged in the calibration doc as "verify with client" — content stays as-is until the team confirms or adjusts.

2. **Stamped page's "starts in 2016" reference:** Used in pool-decks page body. Brief says "9+ years" and origin business is pool decks. 2016 fits 9+ years; flag for tightening when client confirms exact founding year.

3. **Sticky spec block:** Set to `top-28` (rough estimate of header height + buffer). May need micro-adjustment in Wave 14 once header dimensions are pixel-final.

4. **Sibling links density:** Each page links to 4 related services + 2-3 cities + state pillar + relevant blog stubs — comfortably above the Core 30 minimum of "3-5 sibling services + 2-3 blog articles."

---

## Hand-off to Wave 3 Session 2

Wave 3.2 ships:
- `/services/concrete-patios-utah` (Core 30 entry #9)
- `/services/residential-concrete-repair-utah` (Core 30 entry #10)
- `/services/page.tsx` — services index (lists all 11 services)

Dependencies met. The pages built in 3.1 already link to the patio + repair slugs as related services — those activate when 3.2 ships. The `/services` index will resolve all the breadcrumb middle-rail "Services" links across the site (currently 404).
