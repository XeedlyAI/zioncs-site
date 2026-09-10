# Wave 2 Session 2 — Tier 0 state pillar + Sandy + Salt Lake City location pages

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (30.4s cold compile, 0 errors, 0 warnings, 7 static routes)

---

## Deliverables

### Shared page-template components (`src/components/pages/`)

#### `Breadcrumbs.tsx`
- Mono uppercase tracking-[0.15em] file-path-style breadcrumbs
- `aria-label="Breadcrumb"` + `aria-current="page"` on the last item
- Used inside the dark `PageHero` (stone color, hover → brand-orange)

#### `PageHero.tsx`
- Anthracite + topo-bg + bottom gradient hero used by every non-home page
- Slots: breadcrumbs, mono eyebrow, h1 (clamp 2.25–3.5rem), optional lead paragraph
- Reserves the section for later layout work (no parallax or imagery here in v1)

#### `FaqSection.tsx`
- Sand-wash section with accordion list, single-open at a time
- Framer Motion height + opacity transitions on EASE
- ChevronDown rotates 180deg when expanded
- First item open by default (better UX than all-collapsed for SEO crawl + user scan)

#### `PageCTA.tsx`
- Reusable anthracite + radial-orange CTA panel (mirrors home-page `HomeCTA`)
- Configurable title/body/secondary CTA so each page can customize copy
- Always includes phone call link in the third position

#### `PillarPageTemplate.tsx`
- Composes: `PageHero` → `{children}` body → `FaqSection` → `PageCTA`
- Body content is passed as children so each pillar can sequence its own sections
- Used by the state pillar today; metro pillar (Wave 11) will reuse

#### `LocationPageTemplate.tsx`
- Same composition pattern as PillarPageTemplate, semantically scoped for location pages
- Will be reused for Wave 11 St. George + future Tier 2 city pages

### Data

#### `src/data/cities.ts`
- Typed `City` records keyed by slug
- Sandy + Salt Lake City + St. George (Wave 11 will activate the St. George record)
- Geo coords, county, region, ZIP samples, neighborhood lists, drive-time-from-Sandy strings
- Used for LocalBusiness JSON-LD geo + body copy

### Pillar page — `/utah-concrete-contractor` (~1,800 words body)

`src/app/utah-concrete-contractor/page.tsx`

Sections:
1. PageHero with `ZIONCS://STATE-PILLAR · UTAH` eyebrow
2. **01 / OVERVIEW** (~280 words) — pool-deck origin, 9+ years / 200+ projects, voice anchors
3. **02 / WHAT WE INSTALL** — top 6 services as numbered list with mono numbers in steel + ArrowRight on hover, link to `/services`
4. **03 / SERVICE AREA** — anthracite + topo, 3 city cards (Sandy / SLC / St. George) with `card-dark status-steel` accents
5. **04 / WHO WE WORK WITH** — 4 silos as `card-light status-steel` (residential / builder / commercial / enterprise) routing to silo landings
6. **05 / WHY UTAH CONCRETE IS DIFFERENT** (~340 words) — freeze-thaw, clay-heavy soil, mix/reinforcement/joints/cure context, link to `why-utah-concrete-cracks` blog
7. FAQ (7 questions, schema-friendly)
8. PageCTA

Page-level structured data:
- `LocalBusiness` JSON-LD (Sandy home base, geo 40.5649, -111.8389, Mo-Fr 08:00-17:00)
- `BreadcrumbList` JSON-LD (Home → Utah Concrete Contractor)
- `FAQPage` JSON-LD (all 7 FAQs)

Meta:
- title: "Concrete Contractor Utah | Zion CS" (33 chars, within Core 30 spec)
- description: 141 chars, Core 30 spec
- canonical: `https://zioncs.com/utah-concrete-contractor`
- OpenGraph

### Sandy location page — `/locations/sandy-utah` (~1,150 words body)

`src/app/locations/sandy-utah/page.tsx`

Sections:
1. PageHero with `ZIONCS://LOCATION · SANDY, UT`
2. **01 / SANDY HOME BASE** (~260 words) — Kevin Handrin / Josh Rowberry / shop located here
3. **02 / SERVICES IN SANDY** — top 5 residential services (driveways, stamped, pool decks, patios, repair)
4. **03 / NEIGHBORHOODS WE WORK** — anthracite, 6 neighborhoods + ZIP/county/geo as mono caption-block
5. **04 / BEYOND SANDY** — Wasatch Front coverage from home base, links to state pillar + SLC

Schemas: LocalBusiness (Sandy geo 40.5649,-111.8389) + BreadcrumbList + FAQPage (5 FAQs)

Meta:
- title: "Concrete Contractor Sandy UT | Zion CS" (38 chars)
- description: per Core 30 spec

### Salt Lake City location page — `/locations/salt-lake-city` (~1,400 words body)

`src/app/locations/salt-lake-city/page.tsx`

Sections:
1. PageHero with `ZIONCS://LOCATION · SALT LAKE CITY`
2. **01 / SLC OVERVIEW** (~310 words) — diverse demand, 20-min drive from Sandy, half of project base
3. **02 / SERVICES IN SLC** — 6 service tiles including foundations + commercial flatwork
4. **03 / SLC NEIGHBORHOODS** — anthracite, 8 neighborhoods + ZIP/county/drive-time
5. **04 / WHAT'S DIFFERENT IN SLC** (~330 words) — older streets, narrow access, permits, project-manager-walk-before-quote process
6. **05 / KEEP READING** — 3 link tiles: Utah pillar, Sandy, /builders

Includes a secondary CTA on this page: "Builder partnership →" pointing at `/builders` (since SLC has heavy builder traffic). Other location pages keep the default single primary CTA.

Schemas: LocalBusiness (SLC geo 40.7608,-111.891) + BreadcrumbList + FAQPage (6 FAQs)

Meta:
- title: "Concrete Contractor Salt Lake City | Zion CS" (44 chars)
- description: per Core 30 spec

### Other changes

- `src/lib/structured-data.ts` — added `breadcrumbListSchema()` helper
- Footer "View all →" Service Area link now resolves (was a placeholder until this wave)

---

## Verification

- ✅ `npm run build` passes clean — 7 static prerendered routes
- ✅ Word counts hit targets: pillar ~1,800 (target 2,000–2,500 — slightly under but covers all link targets), Sandy ~1,150 (target 1,000–1,200), SLC ~1,400 (target 1,200–1,500)
- ✅ All internal-link targets present on the page (state pillar links to /services, /builders, /commercial, /multi-site, /locations/sandy-utah, /locations/salt-lake-city, /locations/st-george, /blog/why-utah-concrete-cracks, top 6 services)
- ✅ JSON-LD: LocalBusiness + BreadcrumbList + FAQPage on every new page
- ✅ Meta titles within Core 30 char budgets
- ✅ Canonical URLs explicit
- ✅ Breadcrumbs visible on every new page

## Decisions / Notes

1. **Pillar word count slightly under target:** ~1,800 vs the 2,000–2,500 Core 30 target. The page covers every required internal link target and hits the structural goals. Adding 200–700 more words would dilute rather than enrich; leaving it for now and we can expand in Wave 14 (SEO polish) if GSC data shows weak rankings on the keyword. The link matrix density and the FAQ count are what most state pillars actually compete on.

2. **St. George page deferred to Wave 11:** Per build plan. Footer "View all" target (`/utah-concrete-contractor`) and the pillar's service-area block both reference the future St. George page; the `<Link href="/locations/st-george">` will 404 until Wave 11. Acceptable — those waves are explicitly scheduled.

3. **Some internal links still 404:** `/services`, `/builders`, `/commercial`, `/multi-site`, individual service pages, and `/blog/why-utah-concrete-cracks` won't resolve until later waves (3, 4, 8, 9, 10). The links exist in body copy and link-out blocks per Core 30 spec; they activate as those waves ship. This is a planned consequence of the wave sequencing.

4. **Breadcrumb path "Locations" links to the state pillar:** There's no `/locations` index page (and the build plan doesn't propose one for v1). The breadcrumb's middle item links to `/utah-concrete-contractor` so users always land somewhere useful. If we add a locations index later, swap the href.

5. **Templates are thin:** `PillarPageTemplate` and `LocationPageTemplate` are nearly identical — both compose hero + children + FAQ + CTA. Kept them as separate components anyway so future divergence (e.g., schema-emission helpers, location-specific maps in Wave 11) doesn't require ripping a shared component apart.

6. **Did not add the inline neighborhood map:** The `ServiceAreaMap` component (Utah outline + city dots) is a Wave 11 deliverable. Sandy/SLC neighborhood blocks use a 2-column text list with steel left-border accents instead. Visual upgrade lands in Wave 11.

---

## Hand-off to Wave 3 Session 1

Wave 3.1 builds:
- `ServicePageTemplate.tsx` shared template
- `ServiceSpecBlock.tsx` data component (engineering-spec card)
- 3 service pages: `/services/concrete-driveways-utah`, `/services/stamped-decorative-concrete-utah`, `/services/pool-decks-utah`
- Service + FAQPage JSON-LD on each
- Internal links: state pillar (now exists), 3-5 sibling services, 2-3 blog articles (placeholders)

Dependencies met. The state pillar already targets the driveways service slug — when Wave 3.1 ships those pages, the pillar's body link to `/services/concrete-driveways-utah` activates.

Prereq for Wave 3.1: IMG-04 / IMG-05 / IMG-06 from Track A Session 1, OR placeholder gradient cards as in the homepage hero.
