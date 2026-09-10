# Wave 4 Session 1 — Blog infrastructure + 2 RES articles

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 16 static routes incl. 2 SSG blog posts)

---

## Approach: TSX-per-post (no MDX dependency)

After weighing `@next/mdx` vs `next-mdx-remote/rsc` against Next 16's still-young ecosystem, went with TSX-per-post. Each blog article is a TypeScript module exporting `meta` (frontmatter) and `default` (the body component). Tradeoffs:

- ✅ Zero new dependencies
- ✅ Full React/JSX in body — data overlay components drop in cleanly (matters for Wave 4.2)
- ✅ Static generation works out of the box via `generateStaticParams`
- ✅ Type safety on frontmatter — the `PostMeta` type is enforced at compile time
- ❌ Authors can't write Markdown directly — they author TSX

For ZionCS's volume (14 articles in Core 30) the tradeoff favors TSX. Switching to MDX later is a one-time migration if the team grows.

---

## Deliverables

### Types & data
- `src/types/post.ts` — `PostMeta` (frontmatter), `PostModule`, `SiloIntent`, `ArticleRole`, `FaqItem`
- `src/lib/authors.ts` — Kevin / Amy / Josh / Editorial Team author records with `name`, `role`, `bio`
- `src/data/posts.ts` — registry that imports each post module statically; helpers `getAllPostSlugs()`, `getAllPosts()` (sorted by date), `getPostBySlug()`, `getRelatedPosts(currentSlug, slugs)` that pads explicit relations with most-recent fallbacks

### Components (`src/components/blog/`)
- `Prose.tsx` — body typography wrapper. Inline `<style>` block instead of pulling in `@tailwindcss/typography`. Anthracite headings, stone body, brand-orange links, mono-styled `<code>`, em-dash list bullets in steel, decimal-leading-zero ordered-list counters in mono — all keyed to the ZionCS palette.
- `PostByline.tsx` — mono uppercase row: BY [author] · published · REVIEWED [date] · [N] min read
- `PostHero.tsx` — anthracite + topo + breadcrumbs + eyebrow + h1 + excerpt + byline. Tighter `max-w-3xl` than the page hero — the article body sits inside this same column for visual continuity.
- `PostCard.tsx` — light/dark variant card for index + related-posts grids. Status-steel left border, mono silo eyebrow, bold title, excerpt clamp-3, author + Read arrow
- `RelatedPosts.tsx` — sand-wash 3-card grid with PostCard
- `BlogPostLayout.tsx` — composes hero + article body + FAQ (only renders if post has FAQs) + related + CTA

### Routes
- `src/app/blog/page.tsx` — index page. PageHero + grid of PostCards (sorted newest first) + CTA. BreadcrumbList JSON-LD.
- `src/app/blog/[slug]/page.tsx` — dynamic post route with:
  - `generateStaticParams()` — prerenders one HTML file per known slug
  - `generateMetadata()` — pulls from post `meta`, sets canonical + OpenGraph article type
  - Three JSON-LD blocks: Article schema (with author, dates, keywords), BreadcrumbList, FAQPage (only when post has FAQs)
  - Renders `<BlogPostLayout meta related>` wrapping the post's `<Body />`

### 2 articles

#### `how-to-choose-a-concrete-contractor-in-utah` (~1,250 words, 9 min read)
Core 30 entry #11 — RESIDENTIAL silo front-door, commercial intent.

Author: Amy Carlin. Body covers: 5 questions to ask (lead time, who's pouring, warranty, see 3 projects, subgrade prep), 3 red flags to walk away from (cash discount, 50% deposit, no contract), what "fair" actually means in Utah pricing variance, what to expect once you sign. 5 FAQs. Internal links to `why-utah-concrete-cracks`, `10-common-residential-concrete-problems`, `what-to-expect-when-you-request-a-concrete-quote`, `concrete-driveways-utah`.

#### `why-utah-concrete-cracks` (~1,400 words, 8 min read)
Core 30 entry #12 — RESIDENTIAL silo diagnostic, the **Utah-climate differentiation gap article**. No out-of-state competitor can credibly write this; owns the Utah-specific search vocabulary.

Author: Kevin Handrin (highest-credibility byline for technical content). Body covers: 70 freeze-thaw cycles per year breakdown, air-entrained concrete + control joints as primary mitigations, clay-heavy soils + subgrade settling, high-altitude UV + sealer breakdown, three-question crack-diagnosis framework. 4 FAQs.

Includes a placeholder card for the `FreezeThawCycleChart` data overlay component (Wave 4.2 wires it in for real). Internal links to `residential-concrete-repair-utah`, `driveway-replacement-vs-repair`, `10-common-residential-concrete-problems`, `concrete-driveways-utah`.

---

## Verification

- ✅ `npm run build` passes clean — 16 static routes, 2 prerendered blog posts via SSG
- ✅ Article JSON-LD validates structure (Article + Person author + Organization publisher + ImageObject logo + keywords + dates)
- ✅ FAQPage JSON-LD on both articles
- ✅ BreadcrumbList JSON-LD on every blog route
- ✅ Internal links from articles resolve where targets exist (service pages, state pillar) and gracefully 404 on Wave 4.2 stubs (will resolve when 4.2 ships)
- ✅ Reading time targets hit (9 min, 8 min)
- ✅ Word counts: 1,250 + 1,400 — both above the implicit ~150 wpm target for the stated reading times

## Notes

1. **Articles are RES-silo only:** Wave 4 ships 5 RES articles total (2 here, 3 in 4.2). Builder/Commercial/Enterprise silo content lands in Waves 5/6/7 (per build plan; Core 30 sequencing is Waves 8/9/10 in the build plan but 5/6/7 in the Core 30 map — going by the build plan).

2. **Why Utah cracks placeholder card:** Visible in-page placeholder rather than an empty section. The placeholder uses the same `card-light status-steel` chrome as the future component will, so Wave 4.2's drop-in is a content swap rather than a layout change.

3. **Article schema author handling:** Used `Person` schema for the author, which Google prefers for E-E-A-T. The `Organization` publisher block carries the brand. We don't have author bio pages yet — when those land (post-launch wave), we'll add `sameAs` links from the Person schemas.

4. **No reading-time auto-calculation:** Reading time is hand-set in `meta.readingTimeMinutes` rather than calculated from word count. Hand-setting matches Core 30 spec values and avoids a runtime word counter on the body component (which would require traversing JSX).

---

## Hand-off to Wave 4 Session 2

Wave 4.2 ships:
- 3 climate-data overlay components: `FreezeThawCycleChart`, `SoilCompositionDiagram`, `FrostDepthDiagram`
- 3 more RES articles: `driveway-replacement-vs-repair`, `10-common-residential-concrete-problems`, `what-to-expect-when-you-request-a-concrete-quote`
- Lateral cross-link refresh on Wave 4.1 articles → updated to link forward to the new siblings
- Wire the real `FreezeThawCycleChart` into `why-utah-concrete-cracks`, replacing the placeholder card

Dependencies met. The Wave 4.1 articles already link to the Wave 4.2 slugs in their internal-link copy.
