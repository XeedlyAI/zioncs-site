# Wave 3 Session 2 — Patios + Repair service pages + services index

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 13 static routes)

---

## Deliverables

### Two more RES service pages

#### `/services/concrete-patios-utah` (~770 words body)
Core 30 entry #9.

- 4-section body: Overview / What's Included / Patio + Adjacent Work / Finishes
- 5 FAQs (size planning, flush vs stepped, thickness, extending existing slab, stamped longevity)
- Spec block: 4,000 PSI, 4″ standard / 5″ heavy load, 1/8″ per foot drainage slope
- Related: stamped, pool decks, driveways, sport courts
- Internal links into stamped, pool-deck, driveway, sidewalk pages

#### `/services/residential-concrete-repair-utah` (~830 words body)
Core 30 entry #10.

- 3-section body: Overview / Repair Types / When Repair Isn't The Answer
- 5 FAQs (repair types, repair vs replace, longevity, decorative concrete repair, slabjacking)
- Spec block: diagnosis-first framing, repair types matrix, warranty scaled to fix type
- Related: driveways, patios, stamped, sidewalks
- Voice anchor: "honest diagnosis, real fix" — leans into the "no upsell" differentiator from the brief
- Internal links to blog stubs (`why-utah-concrete-cracks`, `10-common-residential-concrete-problems`)

### Services index — `/services`

Replaces the placeholder breadcrumb target across the entire site.

**Layout:**
1. **PageHero** with `ZIONCS://SERVICES · 11 OFFERINGS` eyebrow
2. **01 / ALL SERVICES** — full 11-service numbered grid (same component pattern as homepage `NumberedServiceGrid` but rendered server-side without animation since this is a single-purpose index)
3. **02 / BY BUYER TYPE** — 4 silo tiles (Residential / Builder / Commercial / Enterprise) for users who want to start by who they are instead of what they need
4. **03 / WHERE WE WORK** — anthracite section with state pillar + Sandy + SLC links
5. **PageCTA** — anthracite + radial-orange, single primary CTA

**Schema:** BreadcrumbList only (no Service schema since this is a directory page; individual service schemas live on each detail page).

**Meta:**
- title: "Services | Zion Concrete Specialists" (37 chars)
- canonical: `https://zioncs.com/services`

---

## Verification

- ✅ `npm run build` passes clean — 13 static routes
- ✅ Service + BreadcrumbList + FAQPage JSON-LD on each detail page
- ✅ Services index activates breadcrumb middle-rail "Services" link across all service detail pages, the state pillar, and the location pages — those used to 404
- ✅ All 5 RES service pages now live. RelatedServices grids on each one resolve to live siblings.
- ✅ Word counts: patios ~770 / repair ~830 (Core 30 target 800–1,200; both inside or just below the band, which is reasonable for the voice density)

## Decisions / Notes

1. **Repair page tone:** Leaned hard into "honest diagnosis" / "no upsell" because that's the brief's core differentiator. Repair is the easiest service to upsell dishonestly in this trade — the page openly says "we'll tell you to skip the repair when..." which is contrarian for a contractor site and on-brand for ZionCS.

2. **Patios "extend existing slab" FAQ:** Concrete in Utah commonly gets extended (small patio added to an existing one). Most contractor sites don't address it; the FAQ does and explains the doweled-rebar seam reality so customers know what to expect visually.

3. **Services index isn't a sales page:** It's a directory that routes users to the right service detail. No long body copy, no FAQs of its own — keeps the index lean and fast and lets the detail pages carry the SEO weight.

4. **Silo tile hrefs:** 3 of 4 (`/builders`, `/commercial`, `/multi-site`) won't resolve until Waves 8/9/10. Listed anyway because once those waves ship, this index becomes their canonical "from buyer type" entry. Residential silo doesn't have its own landing page in the Core 30 plan — RES uses the services index as its de-facto landing, hence the `#residential` anchor.

5. **No animation on the index:** The homepage NumberedServiceGrid has stagger entrance via Framer Motion. The services index is a server component — straight HTML, no motion. Tradeoff: lighter bundle, faster initial paint, less visual flair. Acceptable for a directory page.

---

## Wave 3 closeout

All five RES service pages now live (driveways, stamped, pool decks, patios, repair) plus the services index. The residential silo's service-page coverage is complete; the silo's blog content (Wave 4) is the remaining piece. Internal-linking integrity check:

- ✅ State pillar's "top 6 services" block — 5 of 6 resolve (driveways, stamped, pool decks, patios, repair). 6th (foundations) lands in Wave 9.
- ✅ Sandy + SLC location pages' service tiles — all 5 RES services resolve from there now.
- ✅ Each service detail page's RelatedServices grid — siblings resolve within Wave 3 scope.
- ✅ Header/footer "Services" links — resolve to the new index.
- ✅ Footer's per-service links — 5 of 6 resolve (commercial-flatwork lands in Wave 9).

## Hand-off to Wave 4 Session 1

Wave 4.1 builds blog infrastructure + 2 RES blog articles:
- MDX setup (`@next/mdx` or `next-mdx-remote/rsc` decision per Next 16 best practices)
- `JsonLd.tsx` server component for emitting Article + FAQPage schema from route components (not from MDX bodies)
- `lib/blog.ts` frontmatter schema + helpers
- `lib/authors.ts` — Marc Kennedy → ZionCS team swap (Kevin / Amy / Josh / Editorial Team)
- `/blog/[slug]/page.tsx` post template
- `/blog/page.tsx` blog index
- 2 articles authored: `how-to-choose-a-concrete-contractor-in-utah.mdx` + `why-utah-concrete-cracks.mdx`

Dependencies met: Wave 3 has linked into both of those slugs from service pages and the state pillar. They'll resolve on Wave 4.1's ship.

Track A Session 1 is the prerequisite for hero images on the blog articles (IMG-15 and IMG-16). Until Track A lands, blog articles use placeholder gradient heroes — same approach as the homepage hero in Wave 2.1.
