# Wave 5 — Project gallery with timeline data + social feed scroll

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 26 static routes incl. 6 SSG project pages)

---

## Deliverables

### Data

#### `src/data/projects.ts`
Typed `Project` records with full timeline + spec data. 6 mock projects across all four buyer personas, each `featured: true` except the sport court (which surfaces in the gallery but not in the homepage 4-card preview).

| Slug | Category | City | Scale | Status |
|---|---|---|---|---|
| `sandy-stamped-driveway` | RESIDENTIAL | Sandy, UT | 1,800 sq ft | COMPLETE |
| `lehi-townhome-flatwork` | BUILDER | Lehi, UT | 8,000 sq ft (22 units) | COMPLETE |
| `draper-retail-center` | COMMERCIAL | Draper, UT | 12,000 sq ft | COMPLETE |
| `multi-site-dumpster-pad-rollout` | ENTERPRISE | Wasatch Front | 14 sites | IN PROGRESS |
| `alpine-pool-deck-signature` | RESIDENTIAL | Alpine, UT | 1,400 sq ft | COMPLETE |
| `draper-backyard-sport-court` | RESIDENTIAL | Draper, UT | 1,200 sq ft | COMPLETE |

Each record carries: scale, duration, year, status, scope (3-paragraph long-form), timeline (4–5 entries), specs (6–8 rows in the same shape as `ServiceSpecBlock`), and project geo coordinates. Helpers: `getAllProjects()`, `getFeaturedProjects()`, `getProjectBySlug()`, `getRelatedProjects()`.

#### `src/data/social-posts.ts`
12 mock social posts (Instagram + Facebook), all linking to the real ZionCS profile URLs. `getRecentPosts()` sorts newest-first.

### Components

#### `src/components/data/ProjectCard.tsx`
4:3 dark gradient placeholder image with category eyebrow chip + year badge. Body: service · city eyebrow + bold title + (optional) timeline excerpt + scale/duration/status row. Two variants: `full` (timeline visible) and `compact` (no timeline, for tighter grids).

#### `src/components/gallery/ProjectGallery.tsx`
Client component. Filter chips: All / Residential / Builder / Commercial / Enterprise (with live counts). Each chip is a `role="tab"` with `aria-selected`. Active filter renders a brand-orange pill; inactive ones are paper with a warm-border outline. Empty state if a category has zero matches. Grid is 1/2/3 cols.

#### `src/components/social/SocialFeedScroll.tsx`
Server-renderable horizontal scroll-snap-x component. 280–320px cards (responsive), each card: 1:1 placeholder with platform badge + caption (3-line clamp) + posted date + "View →" link. Inline SVG icons for Instagram/Facebook (lucide doesn't ship them in the installed version).

### Routes

#### `/projects` (gallery index)
- `PageHero` + `ProjectGallery` + `PageCTA`
- BreadcrumbList JSON-LD

#### `/projects/[slug]` (detail page)
Static-generated for all 6 projects via `generateStaticParams`. Layout:
- `PageHero` (anthracite + topo, breadcrumbs, eyebrow with project category, title, excerpt)
- **Project briefing band** — anthracite-elevated strip with mono `<dl>`: CITY / SCALE / DURATION / YEAR / STATUS. Reads as a project header; status colored rebar/gold per state.
- **Body section** (col-span-7) — Scope (3 paragraphs) + Timeline (numbered ordered list with mono day labels + actions)
- **Sticky spec sidebar** (col-span-5) — `ServiceSpecBlock` with project specs + project geo coordinates as the footnote
- **Related projects** — sand-wash, 3-card grid sorted by same-category-first
- **PageCTA** with city-specific copy: "Want similar work in [city]?"

`generateMetadata` builds title, description, canonical, OpenGraph for every project.

### Homepage updates

#### `ProjectGalleryPreview.tsx` (Wave 2.1 placeholder → real)
Now renders 4 featured `ProjectCard`s (compact variant) directly from `getFeaturedProjects()`. Same dark anthracite section + eyebrow + headline + "View all" link as before.

#### `SocialFeedPreview.tsx` (Wave 2.1 placeholder → real)
Now renders the real `SocialFeedScroll` with 12 posts. Header retains the Instagram + Facebook external link buttons.

---

## Verification

- ✅ `npm run build` passes clean — 26 static routes, 6 SSG project detail pages
- ✅ Project gallery filter chips work (client-rendered, no hydration errors expected)
- ✅ Each project card links to `/projects/[slug]`
- ✅ Project detail pages render scope + timeline + specs + related correctly
- ✅ Social scroll has `snap-x snap-mandatory`, `snap-start` on cards, dark-styled scrollbar
- ✅ Homepage `ProjectGalleryPreview` and `SocialFeedPreview` now render real data
- ✅ Service-area-map component still deferred to Wave 11 — homepage ordering stays the same

## Notes

1. **Featured flag drives homepage preview:** 5 of 6 projects are `featured: true`; the sport court isn't. The homepage takes the first 4 featured (Sandy driveway, Lehi townhomes, Draper retail, multi-site rollout) — exactly one per buyer category, which is the intent.

2. **Project briefing band on detail pages:** Mirrors the engineering-spec block aesthetic but in a horizontal layout — gives the page a "project briefing" feel before the scope content. Status color (rebar for COMPLETE, gold for IN PROGRESS) calls out the in-progress multi-site project.

3. **Spec sidebar reuses `ServiceSpecBlock`:** Same component as service detail pages, just with project-specific specs instead of a service template. Footnote is the project geo coordinates — supports the "data-overlay on photography" pattern from the calibration without requiring photography.

4. **Real images deferred:** All cards (project + social) use the same gradient + topo placeholder pattern as the homepage hero. When Track A Session 2 lands IMG-29 through IMG-34 + the 12 social images, swap the placeholder div for `next/image`. No layout changes required for the swap.

5. **Filter counts hide empty categories except "All":** If a buyer-type category has zero projects, its chip is hidden so the filter UI doesn't lie about coverage. ALL is always shown.

6. **Project content quality:** Each project has 3-paragraph scope, 4–5 timeline entries, 6–8 spec rows. Total project-page word counts run 250–400 — concise and specific. Reads as a project briefing rather than marketing prose.

---

## Hand-off to Wave 6

Wave 6 ships the Intelligence Console (mini + full) — Wave 6.1 is infrastructure + the hero mini console; Wave 6.2 is the full section + the action-card system + the Resend-backed intake API.

The homepage `HomeIntelligenceConsole` is currently a Wave 2.1 placeholder reserving the `#console` anchor and section. Wave 6.1 replaces that component with the real mini console.

Anthropic API key + Resend API key are required for end-to-end testing — placeholders fine for build, real values come from the client at Vercel deploy time.
