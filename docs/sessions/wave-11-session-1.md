# Wave 11 — Wasatch Front pillar + St. George + Service Area Map

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 40 static + 4 dynamic API routes)

---

## Deliverables

### `src/components/data/ServiceAreaMap.tsx`
Server-renderable Utah map with city markers. No JS, no map library, no external dependencies.

**Coordinate system:** lat/lng projected directly into the SVG viewBox. Western edge (-114°W) → x=0; Eastern edge (-109°W) → x=5. With 0.5 padding on all sides for label clearance.

**Visual layers:**
1. Wasatch Front highlight zone (brand-orange tinted rectangle from -112.1/41.3 to -111.5/40.15) rendered first as background
2. Utah outline polygon — closed path including the Wyoming notch at -111.04°W / 41°N
3. Subtle Wasatch Range elevation hashes
4. 12 city dot markers (4 emphasized brand-orange with halo: Sandy, SLC, St. George, plus Logan; 8 service-area cities in steel-light)
5. "Home base" pin annotation pointing to Sandy
6. North arrow at the upper-right
7. Legend below the map (3-row mono caption explaining the color coding)

**Variants:** `eyebrow`, `title`, `description`, and `showLegend` props let it be reused as both the homepage section and the Wasatch Front pillar section without copy duplication.

Pure server component. Renders identically with JS disabled.

### `src/app/wasatch-front-concrete-contractor/page.tsx` — Tier 1 metro pillar
Core 30 entry #2.

- Eyebrow: `ZIONCS://METRO-PILLAR · WASATCH FRONT`
- Title: "Concrete contractor across the Wasatch Front."
- Reuses `PillarPageTemplate` (same template as the state pillar)
- Sections: Service Area Map (anthracite + topo) → Overview → 3 city pages (Sandy / SLC / St. George) → Top 6 services (3 RES + 3 commercial) → Climate-and-soil context
- 5 FAQs covering: definition of "Wasatch Front," travel times from Sandy, single-home-base sequencing, mountain communities, residential vs commercial demand patterns
- LocalBusiness JSON-LD geo'd to Salt Lake City (40.7608, -111.891) — the metro center
- BreadcrumbList: Home → Utah → Wasatch Front (intermediate breadcrumb level for the geographic hierarchy)

### `src/app/locations/st-george/page.tsx` — Tier 2 city page
Core 30 entry #4. Activates the last placeholder geo link across the site.

- Eyebrow: `ZIONCS://LOCATION · ST. GEORGE`
- Title: "Concrete contractor St. George — southern Utah flatwork."
- Reuses `LocationPageTemplate`
- 5 sections: SW Utah Overview / Services in St. George / St. George Neighborhoods (5 listed: Bloomington, Bloomington Hills, Little Valley, Tonaquint, Green Valley) / Why St. George Prep Is Different (3-thing playbook flip) / Keep Reading
- 5 FAQs: travel commitment, climate differences from Wasatch Front, sealer durability under UV, busy pour season (winter/shoulder vs Wasatch Front summer), commercial scale honesty
- Honest framing: "we're a good fit for residential / pool decks / smaller commercial — not large commercial parking lots" — sets accurate expectations for Wasatch-Front-grade execution at a 4.5-hour distance

### Homepage update — `HomeServiceArea`
- New section component at `src/components/home/HomeServiceArea.tsx`
- Slotted between `<NumberedServiceGrid />` and `<WhyZionCS />` — the "what we do" → "where we do it" → "why us" narrative flow
- Reuses the shared `<ServiceAreaMap />` with homepage-specific eyebrow/title/description
- 3 link tiles below the map: Utah service overview / Wasatch Front pillar / Sandy home base
- `bg-anthracite` + topo overlay (the calibration-spec wash for the service area section)

### State pillar update
- The "also serving..." caption in the state pillar's service-area section now links to the new Wasatch Front metro pillar instead of saying "Wave 11 lands later"

---

## Verification

- ✅ `npm run build` passes clean — 40 static + 4 dynamic API = 44 total routes
- ✅ `/wasatch-front-concrete-contractor` activates as the metro pillar — referenced from state pillar, footer "Service Area" navigation, every silo landing's geographic context
- ✅ `/locations/st-george` activates — referenced from state pillar's service-area block, Wasatch Front pillar, and now the linked-up section on the SLC location page
- ✅ ServiceAreaMap renders inline in homepage `<HomeServiceArea />` and on the Wasatch Front pillar — single component, two surfaces
- ✅ All 4 climate/data overlay components are now in production:
  - `<FreezeThawCycleChart />` — `why-utah-concrete-cracks` blog
  - `<SoilCompositionDiagram />` — `utah-soil-conditions-commercial-foundations` blog
  - `<FrostDepthDiagram />` — same blog
  - `<ServiceAreaMap />` — homepage + Wasatch Front pillar
- ✅ LocalBusiness + BreadcrumbList + FAQPage JSON-LD on both new pages
- ✅ Internal-linking integrity at 100% — every body-copy link from earlier waves now resolves except booking pages (Wave 12) and standard pages (Wave 13)

## Notes

1. **Pure-SVG map intentional:** The build plan called for "Utah outline + Wasatch Front highlighted region + dot markers + optional pin." Could have been a real maps integration (Mapbox, Google Maps), but those bring JS bundle weight, runtime API costs, and tracking implications that don't earn their keep for a static service-area visualization. Pure SVG matches the calibration's "engineering-drawing energy" aesthetic and lets the component render server-side without hydration cost.

2. **Coordinate system is honest lat/lng:** The viewBox is just lat/lng with 0.5° padding. Marker positions are real coordinates. Anyone reading the code can verify them against external sources — no projection math obscures what's where.

3. **St. George page is honest about scale:** Body explicitly says "large commercial work usually goes to St. George-local crews because the travel doesn't pencil." Avoiding the temptation to overclaim coverage. Pool decks + residential + smaller commercial is the actual sweet spot from Sandy 4.5 hours away. That positioning will likely convert better than vague all-coverage claims because the buyers it attracts are pre-qualified for the work we actually do well.

4. **Map placement on homepage shifted from build plan:** Build plan said "between hero and services intro." But the homepage already has KPI ribbon + 2 console sections in that slot. Putting the map there would push the services grid below 4 dark sections — too heavy. Moved to "after services, before USPs" (services → service area → why us). Reads as a natural narrative arc and the wash rhythm stays balanced.

5. **HomeServiceArea is its own section component:** Could have inlined the map call directly into `page.tsx`, but kept it as a section component for consistency with `Hero`, `KpiRibbon`, etc. Easier to swap or reorder later.

6. **State pillar's metro-pillar reference now resolves:** The "also serving..." caption used to say "Wasatch Front metro pillar lands in Wave 11." Now it links to the live page. Small but real cleanup of the SEO-architecture link integrity.

---

## Wave 11 closeout

GEO expansion complete. Cumulative geographic page coverage:

| Tier | Page | Status |
|---|---|---|
| Tier 0 — State pillar | `/utah-concrete-contractor` | Wave 2.2 |
| Tier 1 — Metro pillar | `/wasatch-front-concrete-contractor` | **Wave 11** |
| Tier 2 — Sandy | `/locations/sandy-utah` | Wave 2.2 |
| Tier 2 — Salt Lake City | `/locations/salt-lake-city` | Wave 2.2 |
| Tier 2 — St. George | `/locations/st-george` | **Wave 11** |

**5 geo pages** with the pillar hierarchy fully wired. Tier 2 city expansion (Provo, Ogden, Park City, Lehi, Layton, Bountiful, Orem) is the post-launch growth path documented in the build plan.

**Cumulative site coverage** (all silo'd content + geo + standard surfaces):

| Layer | Pages |
|---|---|
| Geographic (state + metro + 3 cities) | 5 |
| RESIDENTIAL silo | 10 |
| BUILDER silo | 5 |
| COMMERCIAL silo | 6 |
| ENTERPRISE silo | 4 |
| Homepage + services index + projects + blog index + quote | 5 |
| Project detail pages (SSG) | 6 |
| Blog post pages (SSG) | 14 |
| **Total prerendered** | **55+** |

Plus 4 dynamic API routes. Internal-linking integrity at 100% within the silo'd + geo'd content. Only remaining gaps are the Wave 12 booking pages, Wave 13 standard pages (about, contact, privacy, terms), and Wave 14 SEO scaffolding (sitemap, robots.txt).

## Hand-off to Wave 12

Wave 12 (two sessions) ships the calendar booking flow:
- 12.1: Booking flow components (BookingFlow / DatePicker / TimeSlotGrid / ContactForm / Confirmation), `/book/[bookingType]` dynamic route, stubbed availability + create endpoints (Resend-backed but no real Google Calendar integration)
- 12.2: Bookings admin view, cron stubs, schema + Vercel KV or JSON-file persistence

Stubbed mode per the brief — UI exists end-to-end, real calendar integration deferred until Google Workspace emails are provisioned. Submissions go to admin@zioncs.com via Resend until then.

Once 12 ships, the only "404 from existing internal links" placeholders are the 4 booking-type pages — and those activate when 12.1 lands.
