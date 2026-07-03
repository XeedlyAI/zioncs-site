# ZionCS Expansion Program — Post-Launch Feature Build

> Started 2026-07-03. Three parallel tracks the client greenlit as a single build push (launch/deploy deferred). Supersedes nothing in `ZIONCS_BUILD_PLAN.md` — this is additive work layered on the completed Wave 1–13 site.

This program does **not** follow the one-wave-one-session cadence. It's a deliberate multi-track build. Each track has its own gate artifact and its own fan-out phase.

---

## Track A — Core 30 → Core 60 (content depth)

Double the site's targeted-page footprint from 30 → 60. The blog specifically grows 14 → 30 articles (the client's intuition that "there should be 30+ articles" becomes true by design, not by accident).

**Composition of the 30 new entries** (see `ZIONCS_CORE_60_MAP.md`):
- **16 new blog articles** — balanced across the 4 silos, each with role coverage, Utah-climate differentiation where possible.
- **10 Tier-2 city pages** — Provo, Orem, Ogden, Lehi, Draper, Park City, Layton, Bountiful, West Jordan, Herriman (the parked list in `ZIONCS_BUILD_PLAN.md`).
- **4 service-page keyword formalizations** — sport courts, RV pads, splash pads, sidewalks/curbing (pages already built beyond Core 30; now get map entries + keyword targeting + cross-links).

**Phases**
- A1 — **Gate:** `ZIONCS_CORE_60_MAP.md` keyword map (this turn). ← reviewable
- A2 — Blog article fan-out: 16 articles authored to the `PostMeta` + `<Prose>` pattern, registered in `src/data/posts.ts`. Parallelized across subagents, 2–3 articles each, then a cross-link reconciliation pass.
- A3 — 10 Tier-2 city pages via the existing `LocationPageTemplate`.
- A4 — 4 service map formalizations + cross-link refresh + sitemap update.

**Done when:** 30 blog articles + 5 → 15 location pages live, `npm run build` clean, sitemap regenerated, internal-link integrity 100%.

---

## Track B — Meta social sync pipeline (build now, flip later)

Replace the hand-curated `src/data/social-posts.ts` with an automatic Meta Graph API pull — **built fully now, kept dark behind a feature flag** until the client finishes Meta Business verification + connects the IG Business account.

**Architecture** (dependency-light, build-safe, mirrors the booking-store pattern):
- `src/lib/social/graph.ts` — Meta Graph API adapter (IG media + FB Page feed, long-lived token refresh).
- `src/lib/social/normalize.ts` — Graph payload → `SocialPost` normalizer.
- `src/lib/social/store.ts` — `getSocialStore()` abstraction: **static-file fallback** (default) + Supabase-REST-backed impl (no new npm dep — uses `fetch`).
- `src/lib/social/config.ts` — `SOCIAL_SYNC_ENABLED` flag + env reads.
- `src/app/api/cron/social-sync/route.ts` — daily cron; returns early + inert when the flag is off.
- `supabase/migrations/0001_social_posts.sql` — schema (file only; applied when client provisions Supabase).
- `.env.local.example` — documents every new env var.
- `vercel.json` — adds the daily social-sync cron.

**The flip (one-time, when client is ready):** set `SOCIAL_SYNC_ENABLED=true` + the Meta/Supabase env vars → cron populates the store → homepage reads synced posts, static file becomes the fallback. No code change.

**Client-side prerequisites (documented, not our blocker):** IG account must be Business/Creator + linked to the FB Page (`id=61573114690934`); Meta app with Business Verification + App Review for `instagram_basic`/`pages_read_engagement`; a Supabase project.

**Done when:** all modules build clean, cron is registered + inert, static feed still renders unchanged, flip path documented in the client handoff.

---

## Track C — Video + image project galleries (5 surfaces)

Add mixed video/image media to the project system and weave it across the site. Mock all media now via the `video-generation` (Veo) + `image-generation` (Nano Banana) skills; swap real Zion footage later with zero layout change.

**Foundation:** one host-agnostic media model (`src/types/media.ts`) powering every surface. `ProjectMedia` = ordered array of `{ type: image|video, role, src, poster, alt, ... }`. `Project` gains `media?: ProjectMedia[]`; existing single `image` stays as the fallback/first item.

**The 5 surfaces**
1. **Project detail** — full media reel (swipeable, keyboard nav) + before/after slider + timeline-scrubbed pour clip.
2. **Homepage** — "Latest from the field" strip mixing project clips + social video; one flagship pour timelapse in hero rotation.
3. **Service pages** — one relevant in-view loop in the spec area (e.g. stamping on the stamped page).
4. **Gallery** — add a video/photo filter chip alongside the category chips; hover-to-play cards.
5. **Blog** — inline `<MediaEmbed>` clips in articles (e.g. freeze-thaw spall detail).

**Shared components:** `MediaReel`, `BeforeAfterSlider`, `HoverPlayCard`, `TimelapseScrubber`, `MediaEmbed`, `MediaLightbox`. All honor `prefers-reduced-motion`, poster-first, IntersectionObserver autoplay.

**Hosting:** mocks live in `public/videos/` (short silent loops) for now; model is host-agnostic so real footage moves to Mux/Cloudflare Stream later by swapping `src`.

**Phases**
- C1 — media data model + `projects.ts` extension (foundation).
- C2 — shared media components.
- C3 — generate mock media (Veo clips + Nano Banana stills) per flagship project.
- C4 — wire the 5 surfaces.

**Done when:** all 5 surfaces render mock media, `prefers-reduced-motion` respected, build clean, real-media swap documented.

---

## Execution order

1. **A1** (Core 60 map) + **C1** (media model) — foundations, this push.
2. **Track B** — build to completion (self-contained, "flip later").
3. **C2 → C3 → C4** — components, mock generation, surface wiring.
4. **A2 → A3 → A4** — article/city fan-out (highest token cost; parallelized).

Each track lands its own commit(s) + a session doc under `docs/sessions/`.

## Status — 2026-07-03

| Phase | Status |
|---|---|
| A1 Core 60 map | ✅ `ZIONCS_CORE_60_MAP.md` |
| A2 16 blog articles | ✅ authored (4 parallel agents), registered in `posts.ts`, cross-links audited clean, blog = 30 |
| A3 10 Tier-2 city pages | ✅ built (agent), pillar links + sitemap updated |
| A4 4 service formalizations | ✅ cross-links added (backyard-ideas, ADA guide) |
| B Meta sync pipeline | ✅ built dark — graph/normalize/store/sync/cron + Supabase migration + env template; flip = env vars only |
| C1 media model | ✅ `src/types/media.ts` + `src/lib/media.ts` |
| C2 6 media components | ✅ VideoLoop, BeforeAfterSlider, TimelapseScrubber, MediaReel, MediaEmbed, CardMedia |
| C3 mock media | ✅ 5 Veo clips (compressed, committed) + before/after still + timelapse poster |
| C4 5 surfaces | ✅ project detail, homepage strip, stamped service, gallery chips+hover, blog embed — all browser-verified |

Incidental fix: `src/app/favicon.ico` (non-RGBA ICO) broke every dev render under Turbopack — regenerated via ImageMagick and moved to `public/favicon.ico` (bypasses the image pipeline).

Known parked items: original 3 RES articles carry a service slug in `relatedSlugs` (pre-existing, degrades gracefully); real-footage swap + Mux/Stream hosting when client media arrives; Meta flip checklist in `.env.local.example`.
