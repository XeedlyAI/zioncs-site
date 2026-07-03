# Expansion Session 1 — Core 60 + Meta Sync Pipeline + Video/Media Galleries

**Date:** 2026-07-03
**Branch:** main
**Build:** ✅ passes clean (exit 0, no warnings, 85 static pages — up from 57; 30 blog posts + 13 locations prerendered, social-sync cron route registered)
**Program doc:** `ZIONCS_EXPANSION_PLAN.md` · **Keyword map:** `ZIONCS_CORE_60_MAP.md`

Three tracks the client greenlit as one build push (launch/deploy still deferred). Executed with 5 parallel content agents + inline build work.

---

## Track A — Core 30 → Core 60

Site's targeted-page footprint doubled 30 → 60.

### A2 — 16 new blog articles (blog: 14 → 30)

Authored by 4 parallel agents (one per silo) against the map, to the exact `PostMeta` + `<Prose>` pattern, registered in `src/data/posts.ts`:

- **RESIDENTIAL (6):** concrete-sealing-utah · best-time-to-pour-concrete-utah · stamped-concrete-patterns-utah · concrete-vs-pavers-vs-asphalt-driveway · how-to-maintain-a-concrete-driveway-utah · backyard-concrete-ideas-utah
- **BUILDER (3):** concrete-flatwork-scheduling-for-builders · how-to-read-a-concrete-sub-bid · concrete-tolerances-and-callbacks
- **COMMERCIAL (4):** tilt-up-vs-cast-in-place-concrete-utah · commercial-concrete-maintenance-program-utah · ada-concrete-requirements-utah · curing-concrete-in-utah-heat-and-cold
- **ENTERPRISE (3):** concrete-maintenance-budgeting-for-facility-managers · multi-site-concrete-inspection-checklist · concrete-rfp-vs-preferred-vendor

Reconciliation pass: fixed 5 `relatedSlugs` entries that pointed at service slugs (map ambiguity — resolver only accepts blog slugs); link audit over all 30 articles: **every `/blog/`, `/services/`, and other href resolves**. New articles have no heroImage (BlogThumbnail neutral-plate fallback); artifact SVGs are a post-pass.

### A3 — 10 Tier-2 city pages (locations: 3 → 13)

provo · orem · ogden · lehi · draper · park-city · layton · bountiful · west-jordan · herriman — one agent, mirroring `st-george/page.tsx` exactly (LocalBusiness geo'd JSON-LD + BreadcrumbList + FAQPage, 900–1,200 words, genuinely local angles — e.g. Park City 42-inch frost depth, Lehi Traverse Mountain builder corridor, Herriman new-build backyard build-out). Each page defines a local `CITY` typed with the shared `City` type (cities.ts untouched by agents).

Wiring (done inline, not by agents): metro pillar `CITIES_TIER` 3 → 13 cards; state pillar "Also serving" names converted to real links; `sitemap.ts` LOCATION_SLUGS 3 → 13.

### A4 — 4 service formalizations

sport-courts, rv-pads, splash-pads, sidewalks-curbing (built beyond Core 30 in an earlier session) now carry Core 60 keyword membership + new cross-links into `backyard-concrete-ideas-utah` and `ada-concrete-requirements-utah`.

---

## Track B — Meta social sync pipeline (built now, flipped later)

Full Graph-API → Supabase pipeline, shipped **dark** behind `SOCIAL_SYNC_ENABLED`:

- `src/lib/social/config.ts` — env reads, defaults OFF, `isSyncOperational()`
- `src/lib/social/graph.ts` — IG media + FB Page feed adapters (fetch-only, no SDK), long-lived-token refresh helper
- `src/lib/social/normalize.ts` — Graph nodes → existing `SocialPost` shape
- `src/lib/social/store.ts` — `getSocialStore()`: static-file store (default) ⇄ Supabase-REST store; `getSyncedPosts()` always falls back to the curated feed on any error
- `src/lib/social/sync.ts` + `src/app/api/cron/social-sync/route.ts` — daily cron (vercel.json `0 12 * * *`), CRON_SECRET-authed, inert-with-diagnostics until enabled
- `supabase/migrations/0001_social_posts.sql` — table + RLS (apply when client provisions Supabase)
- `.env.local.example` — created; documents every env var incl. the flip checklist
- `SocialFeedPreview` split into server wrapper (reads through the pipeline) + `SocialFeedPreviewClient` — renders identically today

**The flip (client-side prerequisites):** IG must be a Business/Creator account linked to the FB Page (61573114690934); Meta app with Business Verification + App Review (`instagram_basic`, `pages_read_engagement`); Supabase project + migration. Then set the env vars — no code change.

---

## Track C — Video + image galleries (5 surfaces, mock media)

### Model
`src/types/media.ts` — host-agnostic `ProjectMedia` (image | video | before-after) with roles (hero/process/detail/drone/timelapse/before-after) and timelapse phase markers. `Project.media?` added; `src/lib/media.ts` accessors fall back to the legacy single `image`. Real-footage swap later = data change only (`src`/`host`), zero component changes.

### Components (`src/components/media/`)
`VideoLoop` (muted in-view/hover autoplay primitive, poster-first, `preload=none`, reduced-motion → static poster) · `BeforeAfterSlider` (range-input driven, keyboard-accessible) · `TimelapseScrubber` (custom transport, phase markers pinned to the scrub track, marker-seek) · `MediaReel` (scroll-snap thumb strip + keyboard lightbox handling all three kinds) · `MediaEmbed` (inline article/service figure) · `CardMedia` (gallery hover-to-play with ▶ badge).

### Mock media (Veo 3.1 fast + Nano Banana)
5 clips generated, QA'd frame-by-frame, compressed (`-an -crf 27 -movflags +faststart`, 0.3–2.6 MB each, committed to `public/videos/`): sandy-timelapse (8s pour, 4 phase markers) · sandy-loop · draper-drone · alpine-loop · stamping-detail. Plus `sandy-driveway-before.jpg` (image-to-image aged version of the exact hero still — same camera/scene) and a timelapse poster frame. Raw outputs in `scratch-media/` (gitignored). Gotchas hit + memorized: `allow_adult` rejected (use `allow_all`), 4:3 reference stills get pillarboxed (ffmpeg crop 960:720:160:0), ~3 concurrent generation starts max before 429.

### The 5 surfaces (all browser-verified)
1. **Project detail** — "03 / FIELD FOOTAGE" anthracite section: TimelapseScrubber + BeforeAfterSlider featured, MediaReel below. Marker-seek verified (click "Stamp + finish" → t=6.5s, phase label updates).
2. **Homepage** — `FieldFootageStrip` ("Fresh off the pour.") between ProjectGalleryPreview and ProcessTimeline; mixed-aspect filmstrip, in-view autoplay verified (only visible cards play).
3. **Stamped service page** — stamping-detail loop embedded in the 01/OVERVIEW copy.
4. **Gallery** — "With video" filter chip (counts 3) + hover-to-play cards + ▶ badges, verified.
5. **Blog** — stamping-detail embedded in `stamped-concrete-patterns-utah` ("With Real Examples" earns the title); Article/BreadcrumbList/FAQPage JSON-LD confirmed intact.

Media data populated on 3 flagship projects (sandy-stamped-driveway: 4 media items incl. before/after; draper-retail-center: drone; alpine-pool-deck-signature: loop).

---

## Incidental fix — favicon.ico broke dev rendering

Pre-existing: `src/app/favicon.ico` contained RGB (non-RGBA) PNG entries; Turbopack's strict image decoder failed → **every** dev route showed the build-error overlay. ffmpeg's ICO output also rejected ("size did not match"). Fix: regenerated via ImageMagick (`-define icon:auto-resize=16,32,48`) and moved to `public/favicon.ico`, which bypasses the image pipeline entirely. `src/app/icon.png` + `apple-icon.png` unchanged.

---

## Verification

- `npx tsc --noEmit` clean at every stage (4 checkpoints)
- Browser verification via preview server on all 5 media surfaces + blog index (30 unique articles) + gallery filter + JSON-LD types
- Internal-link audit script over all 30 articles: zero unresolved hrefs
- All 10 city routes returned 200 with valid JSON-LD (agent-verified)
- `npm run build` — see header

## Parked / follow-ups

- Original 3 RES articles have a service slug in `relatedSlugs` (pre-existing; degrades gracefully to recent-post fill)
- BlogThumbnail artifact SVGs for the 16 new articles (neutral plate renders meanwhile)
- Real footage + Mux/Cloudflare Stream swap when client media arrives (data-only change)
- Meta flip checklist lives in `.env.local.example` + cron route comments
- Social feed "Manually curated." copy auto-switches to "Straight from our feed." when sync goes live
