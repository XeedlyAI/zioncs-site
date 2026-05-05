# ZionCS Build Plan

> Phase 4 output (2026-05-04). Sequences the build into atomic, single-session waves with explicit dependencies, deliverables, and verification criteria.

---

## Executive summary

**Total waves:** 16 (Track B: build) + parallel Track A (image generation, ~3 sessions)
**Estimated total sessions:** 25-30
**Estimated calendar time** (assuming 2-3 sessions/week): 8-12 weeks
**Output:** Production-ready Next.js 16 marketing site with 30 SEO-optimized pages, custom booking system, AI Intelligence Console, project gallery with timeline data, social feed, and full data-infused design system

### Build philosophy

- **One wave = one focused session** unless explicitly noted as multi-session
- **Explicit stop between waves** (per `CLAUDE.md` § Commit Prefix Convention) — never chain
- **Verify with `npm run build` before any commit** — Next 16 cold builds are ~8 min
- **Each session ends with:** a single commit (with `[feat|fix|setup|content|docs] Wave N Session M — short description`), session summary at `/docs/sessions/wave-{N}-session-{M}.md`, and explicit hand-off to next session
- **Track A (image generation) runs in parallel** with Track B starting after Wave 1, gated only by needing the design system locked

### What's already complete (Phase 0-3)

- ✅ Repo initialized with Next.js 16 scaffold + library imports
- ✅ Brief, personas, competitive walk-through, Core 30 map, design calibration locked
- ✅ Logo assets in `/public/brand/`
- ✅ Webflow content + screenshots extracted to `_inbox/`
- ✅ DELTAS file documents all project-specific overrides
- ✅ GitHub remote at `XeedlyAI/zioncs-site` tracking `main`

### What's pending (this plan)

- Build everything else.

---

## Track A — Image Generation (parallel, 3 sessions)

Runs concurrent with Track B. Starts after Wave 1 (design system locked, palette established for any data-overlay color choices). Should complete by end of Wave 6 so all content waves have their imagery.

### Track A — Session 1 — Hero + RES priority images
**Trigger:** After Wave 1 complete
**Deliverables:**
- IMG-01 Homepage hero (Pro)
- IMG-02 Services hero (Pro)
- IMG-03 About page hero (Pro)
- IMG-04 Concrete driveways (Pro)
- IMG-15-19 RES blog heroes (5 articles) (Standard OK)
- Save to `/public/images/hero/`, `/public/images/services/`, `/public/images/blog/`
**Verification:** All images render at correct aspect ratios; check for AI artifacts; confirm no text/faces violations
**Notes:** Use `image-generation` skill (Gemini Nano Banana Pro for hero, Standard for blog). Prompts in `ZIONCS_DESIGN_CALIBRATION.md` § Image-generation prompts.

### Track A — Session 2 — Remaining service heroes + gallery
**Trigger:** After Track A Session 1
**Deliverables:**
- IMG-05-14 Remaining service heroes (10 images, mostly Pro)
- IMG-29-34 Project gallery (6 mock projects)
**Verification:** Same as Session 1; verify gallery images cover all 4 personas (Residential, Builder, Commercial, Enterprise) plus pool deck and sport court signature shots

### Track A — Session 3 — B2B blog heroes + spares
**Trigger:** Before Wave 9 (BUILDER silo) starts
**Deliverables:**
- IMG-20-28 BUILDER + COMMERCIAL + ENTERPRISE blog heroes (9 images, Standard OK)
- 2-3 spare images for variants/swaps
**Verification:** All 30+ images present in `/public/images/`, organized by directory

---

## Track B — Build Waves (sequential)

### Wave 1 — Foundation: Config, Design System, Layout Shell
**Sessions:** 2
**Goal:** Lay the groundwork everything else builds on.

#### Session 1.1 — Design system + tokens
**Deliverables:**
- `npm install` + `npm run build` baseline check (note timing for future planning)
- `src/app/globals.css` — full Tailwind v4 `@theme` block per `ZIONCS_DESIGN_CALIBRATION.md` § globals.css starter
- Font loading via `next/font/google` — Inter (400-900) + JetBrains Mono (400-600) in `src/app/layout.tsx`
- `next.config.ts` reviewed (Next 16 settings, image optimization)
- `tsconfig.json` reviewed
- Topo-bg + engineer-grid SVG assets:
  - Author or generate `public/topo-bg-dark.svg` (Wasatch-style elevation lines, white at 5-8% opacity)
  - Author `public/topo-bg-light.svg` (anthracite lines)
  - Author `public/engineer-grid.svg` (1/8" grid at 4-6% opacity)
- `src/lib/contact.ts` — single source of truth for phone, email, address, hours
- `src/lib/firm-facts.ts` — single source of truth for years/projects/team count, founders, service area
- `src/lib/motion.ts` — EASE curve constant, scroll-reveal variants per `MOTION_AND_INTERACTION.md`

**Verification:**
- `npm run build` passes clean
- Empty page renders with Inter + JetBrains Mono loaded
- All CSS variables accessible (test with a quick `<div className="bg-[var(--color-anthracite)]">`)
- SVG overlays load when referenced

**Commit:** `[setup] Wave 1 Session 1 — design tokens + fonts + motion + contact constants`

#### Session 1.2 — Layout shell + header + footer
**Deliverables:**
- `src/components/layout/Layout.tsx` — wraps every page (Header + main + Footer + ContactWidget)
- `src/components/layout/Header.tsx` — sticky, scroll-morph (transparent at top, anthracite-base on scroll), logo (color variant on light, white variant on dark transition), nav, "Request a Quote" primary CTA, phone link
- `src/components/layout/Footer.tsx` — anthracite-base + topo-bg overlay; full CTA panel + nav columns + contact + logo white + copyright
- `src/components/layout/MobileMenu.tsx` — drawer-style mobile menu
- `src/components/layout/ContactWidget.tsx` — sticky bottom-bar on mobile (phone + Quote)
- Update `src/app/layout.tsx` to use the Layout shell

**Dependencies:** Session 1.1 complete, logos in `/public/brand/`

**Verification:**
- Layout renders consistently across resolutions (375px, 768px, 1440px)
- Header scroll-morph behavior works
- Mobile menu opens/closes correctly
- Phone tap-to-call works on mobile
- All CTAs navigate correctly (even if target pages are stubs)
- `npm run build` passes

**Commit:** `[feat] Wave 1 Session 2 — layout shell + header + footer + mobile menu`

---

### Wave 2 — Homepage + State Pillar + Home-Base Pages
**Sessions:** 2
**Goal:** Ship the foundation pages that the rest of the site links into.

#### Session 2.1 — Homepage
**Deliverables:**
- `src/app/page.tsx` — homepage
- Hero component: full-bleed parallax IMG-01 + topo-bg-dark overlay + display headline + subheadline + dual CTA + live indicator row + KPI ribbon
- `src/components/home/Hero.tsx`
- `src/components/home/KpiRibbon.tsx` — 4-column with sparklines (placeholder data; refined once analytics flow)
- `src/components/home/NumberedServiceGrid.tsx` — 11 services in 2-column layout
- `src/components/home/WhyZionCS.tsx` — orange-tinted USP section (one accent section per page)
- `src/components/home/ProjectGalleryPreview.tsx` — 4-card preview linking to full gallery (full gallery in Wave 6)
- `src/components/home/ProcessTimeline.tsx` — How We Work data-viz timeline (5-6 phase steps)
- `src/components/home/HomeIntelligenceConsole.tsx` — placeholder component, full implementation in Wave 7
- `src/components/home/SocialFeedPreview.tsx` — placeholder, full implementation in Wave 6
- `src/components/home/HomeCTA.tsx` — anthracite-base + orange-tinted accent footer CTA panel

**Dependencies:** Wave 1 complete, IMG-01 ready (Track A Session 1 must complete first OR use placeholder gradient until image lands)

**Verification:**
- Homepage renders end-to-end
- Hero parallax works on desktop (degrades to static on mobile)
- KPI count-up animations trigger on scroll
- All anchor links scroll correctly
- LocalBusiness + Organization JSON-LD validates
- Lighthouse: Performance 85+, Accessibility 90+, SEO 90+
- `npm run build` passes

**Commit:** `[feat] Wave 2 Session 1 — homepage with hero + KPI + numbered services + USPs + process + footer CTA`

#### Session 2.2 — State pillar + Sandy + Salt Lake City
**Deliverables:**
- `src/app/utah-concrete-contractor/page.tsx` — Tier 0 state pillar per Core 30 entry #1 (2,000-2,500 words, links to all silos + top services + city pages)
- `src/app/locations/sandy-utah/page.tsx` — home base anchor (1,000-1,200 words)
- `src/app/locations/salt-lake-city/page.tsx` — highest-volume city (1,200-1,500 words)
- `src/components/pages/PillarPageTemplate.tsx` — shared template
- `src/components/pages/LocationPageTemplate.tsx` — shared template (similar to pillar but smaller)
- LocalBusiness JSON-LD on Sandy + SLC location pages with proper geo data
- BreadcrumbList JSON-LD on all pages

**Dependencies:** Wave 1 + 2.1 complete

**Verification:**
- All 3 pages render
- Internal linking matrix correct (state pillar → metro pillar (Wave 12) — placeholder link until W12 → 3 city pages → silo landings — placeholders until later waves)
- JSON-LD validates via Google's Rich Results Test
- Meta titles/descriptions verified within length limits
- `npm run build` passes

**Commit:** `[feat] Wave 2 Session 2 — Tier 0 state pillar + Sandy + Salt Lake City location pages`

---

### Wave 3 — RES Service Pages
**Sessions:** 2
**Goal:** Ship 5 residential service pages with the service-spec block component.

#### Session 3.1 — Service template + 3 service pages
**Deliverables:**
- `src/components/pages/ServicePageTemplate.tsx` — reusable template with hero, service-spec block, body content, FAQ, internal links sidebar, related-services footer
- `src/components/data/ServiceSpecBlock.tsx` — code-block-style technical specs per `ZIONCS_DESIGN_CALIBRATION.md` § Component design language
- `src/app/services/concrete-driveways-utah/page.tsx`
- `src/app/services/stamped-decorative-concrete-utah/page.tsx`
- `src/app/services/pool-decks-utah/page.tsx`
- Service JSON-LD on each
- FAQ + FAQPage JSON-LD on each (3-6 FAQs per page)
- Internal links: each service links to 3-5 sibling services + 2-3 relevant blog articles + state pillar

**Dependencies:** Wave 2 complete; IMG-04, IMG-05, IMG-06 ready

**Verification:**
- 3 service pages live
- ServiceSpecBlock renders with mono typography correctly
- FAQs accordion-style, FAQPage schema validates
- Service schema validates
- Internal links resolve (some may be placeholders until later waves)
- Word counts hit 800-1,200 target

**Commit:** `[feat] Wave 3 Session 1 — service page template + driveways/stamped/pool decks (3 service pages)`

#### Session 3.2 — Remaining 2 service pages + service-pages index
**Deliverables:**
- `src/app/services/concrete-patios-utah/page.tsx`
- `src/app/services/residential-concrete-repair-utah/page.tsx`
- `src/app/services/page.tsx` — services index (lists all 11 services in numbered grid format, links out)

**Dependencies:** Session 3.1 complete; IMG-07, IMG-08 ready

**Verification:**
- 2 more service pages live
- Services index renders all services
- All service-page internal links now resolve
- `npm run build` passes

**Commit:** `[feat] Wave 3 Session 2 — patios + repair service pages + services index`

---

### Wave 4 — Blog Infrastructure + RES Blog Articles
**Sessions:** 2
**Goal:** Ship blog content engine + 5 RES articles.

#### Session 4.1 — Blog infrastructure + 2 articles
**Deliverables:**
- MDX setup — `@next/mdx` or `next-mdx-remote/rsc` per Next 16 best practices
- `src/components/JsonLd.tsx` — server component for emitting Article + FAQPage schema (per `corehoa-blog-engine-deployment` precedent — schema must emit from route component, not from MDX body)
- `src/lib/blog.ts` — frontmatter schema + helpers (`getAllPosts`, `getPostBySlug`, `getRelatedPosts`)
- `src/lib/authors.ts` — author metadata module (Marc Kennedy → swap to ZionCS team — Kevin Handrin / Amy Carlin / Josh Rowberry / Editorial Team)
- `src/app/blog/[slug]/page.tsx` — post template with: breadcrumbs, byline, last-reviewed date, reading time, hero image, body, FAQ section, related articles footer, "Request a Quote" CTA
- `src/app/blog/page.tsx` — blog index (paginated if needed; for v1, simple grid of 14 articles)
- `content/blog/` directory + frontmatter schema (target_keyword, secondary_keywords, silo_intent, category, article_role, intent, city_anchor, hero_image, reading_time, last_reviewed_date)
- 2 articles authored:
  - `how-to-choose-a-concrete-contractor-in-utah.mdx`
  - `why-utah-concrete-cracks.mdx` (with embedded `<FreezeThawCycleChart />` data overlay component — see Session 4.2 for component implementation, render placeholder until then)

**Dependencies:** Wave 3 complete; IMG-15, IMG-16 ready

**Verification:**
- Blog index lists 2 articles
- Both articles render with full chrome (breadcrumbs, byline, hero image, FAQ, related)
- Article + FAQPage JSON-LD validates
- Related-articles footer shows 2-3 sibling-silo articles
- `npm run build` passes

**Commit:** `[feat] Wave 4 Session 1 — blog infrastructure + 2 RES articles (front-door + diagnostic)`

#### Session 4.2 — Climate data overlay components + 3 RES articles
**Deliverables:**
- `src/components/data/FreezeThawCycleChart.tsx` — horizontal bar/timeline showing 12 months with freeze-cycle data (climate data overlay component per `ZIONCS_DESIGN_CALIBRATION.md`)
- `src/components/data/SoilCompositionDiagram.tsx` — cross-section illustration component (used in Wave 10 on Utah Soil article)
- `src/components/data/FrostDepthDiagram.tsx`
- 3 RES articles authored:
  - `driveway-replacement-vs-repair.mdx`
  - `10-common-residential-concrete-problems.mdx`
  - `what-to-expect-when-you-request-a-concrete-quote.mdx`
- Lateral cross-link refresh: update existing articles' link targets to point to newly-published siblings (per `xeedly-prompts/content/article-1-lateral-link-refresh.md` pattern)

**Dependencies:** Session 4.1 complete; IMG-17, IMG-18, IMG-19 ready

**Verification:**
- All 5 RES blog articles live
- FreezeThawCycleChart renders correctly on Why-Utah-Concrete-Cracks article
- Internal cross-linking dense and consistent
- `npm run build` passes

**Commit:** `[feat] Wave 4 Session 2 — climate data viz components + 3 more RES articles (decision/magnetizer/process)`

---

### Wave 5 — Project Gallery + Social Feed
**Sessions:** 1
**Goal:** Ship the two custom features that anchor visual proof and brand vibrancy.

**Deliverables:**
- `src/components/data/ProjectCard.tsx` — 4:3 image + eyebrow + title + timeline (Day 1/Day 2/Day 3...) + scale stats (sq ft / days / status). Per `ZIONCS_DESIGN_CALIBRATION.md` § Component design language.
- `src/components/gallery/ProjectGallery.tsx` — filterable grid (chip filters by service category)
- `src/data/projects.ts` — 5-6 mock projects across personas:
  - Sandy stamped driveway (1,800 sq ft, residential)
  - Lehi townhome flatwork (8,000 sq ft, builder)
  - Draper retail center (12,000 sq ft, commercial)
  - Multi-site dumpster pad rollout (14 sites, enterprise)
  - Pool deck signature project (residential, origin business)
  - Optional: Sport court (residential)
- `src/app/projects/page.tsx` — full project gallery page
- `src/app/projects/[slug]/page.tsx` — project detail page (when clicked from gallery)
- `src/components/social/SocialFeedScroll.tsx` — horizontal scroll component (scroll-snap-x, 320×360 cards)
- `src/data/social-posts.ts` — 10-15 mock social posts (manually curated; update post-launch)
- Update homepage `<ProjectGalleryPreview>` to render real ProjectCards (4 selected)
- Update homepage `<SocialFeedPreview>` to render real SocialFeedScroll

**Dependencies:** Wave 4 complete; IMG-29-34 ready (Track A Session 2 must complete)

**Verification:**
- Project gallery filter chips work
- Project cards render timeline data correctly
- Project detail pages render
- Social feed scrolls horizontally on mobile + desktop with scroll-snap
- `npm run build` passes

**Commit:** `[feat] Wave 5 — project gallery with timeline data + social feed scroll`

---

### Wave 6 — Intelligence Console (mini + full)
**Sessions:** 2
**Goal:** Ship the AI Intelligence Console — the centerpiece data-infused component.

#### Session 6.1 — Console infrastructure + mini console
**Deliverables:**
- `src/components/console/ConsoleResponseRenderer.tsx` — shared rendering module per `COMPONENT_PATTERNS.md` § 3
- `src/components/console/IntelligenceConsoleMini.tsx` — hero mini console (compact mode)
- `src/components/console/SuggestionPills.tsx` — clickable prompt chips
- `src/components/console/ConsoleEvent.ts` — DOM event wiring (`xeedly:console-query`)
- `src/data/console-queries.ts` — pre-canned query/response pairs for ZionCS personas
- `src/app/api/query/route.ts` — Anthropic Claude integration (Sonnet 4 default), system prompt tuned for ZionCS
- `src/lib/console-system-prompt.ts` — operator-grade voice system prompt with action routing logic per persona
- ENV: `ANTHROPIC_API_KEY` configured (placeholder for now; client adds in Vercel later)
- Update homepage `HomeIntelligenceConsole` to mount the real `IntelligenceConsoleMini`

**Dependencies:** Wave 5 complete

**Verification:**
- Mini console renders in homepage hero
- Suggestion pills trigger pre-canned responses correctly
- Freeform input → POST /api/query → response renders inline
- "See full response in console ↓" link dispatches CONSOLE_EVENT (full console added in Session 6.2)
- API key env wiring works (returns useful error if missing)
- `npm run build` passes

**Commit:** `[feat] Wave 6 Session 1 — Intelligence Console infrastructure + mini console`

#### Session 6.2 — Full console section + action system
**Deliverables:**
- `src/components/console/IntelligenceConsole.tsx` — full section component
- `src/components/console/ConsoleActions.tsx` — action card system per `COMPONENT_PATTERNS.md` § 4 (calendar, contact_info, intake action types)
- `src/app/api/intake/route.ts` — Resend integration for intake form submissions (sends to admin@zioncs.com)
- `src/app/api/direct-message/route.ts` — Resend integration for direct chat messages
- ENV: `RESEND_API_KEY` configured (placeholder; client adds in Vercel)
- Action routing logic in system prompt:
  - Residential repair questions → intake action card (quote form)
  - Commercial RFP / large project → calendar action card (Discovery Call — placeholder until Wave 12 booking system)
  - Pricing-curious questions → intake (with copy: "Every project's different — request a quote and we'll give you a written number within 7 days")
  - Service area questions → contact_info action (phone)
- Add full console section to homepage between hero and services intro

**Dependencies:** Session 6.1 complete

**Verification:**
- Full console renders correctly on homepage
- Action cards display with proper accent colors and routing
- Intake form submits successfully (test email arrives at admin@zioncs.com)
- Mini console "See full response" scrolls to and dispatches event correctly
- `npm run build` passes

**Commit:** `[feat] Wave 6 Session 2 — full Intelligence Console + action system + intake API`

---

### Wave 7 — Quote Form + Email Integration
**Sessions:** 1
**Goal:** Ship the primary conversion mechanic — Request a Quote form.

**Deliverables:**
- `src/components/forms/QuoteForm.tsx` — multi-field form: service type (dropdown), project city (dropdown of Utah cities), project size (rough estimate text), timeline (dropdown), photos (optional file upload), name, email, phone
- `src/app/quote/page.tsx` — dedicated quote page (for direct linking from CTAs)
- `src/components/forms/QuoteFormModal.tsx` — modal version of the form (for triggers from "Request a Quote" buttons across the site)
- `src/app/api/quote/route.ts` — Resend integration: emails admin@zioncs.com with all submission details + auto-reply to user with confirmation
- `src/lib/quote-validation.ts` — zod schema for form fields
- Honeypot field for spam protection
- Basic rate-limiting (in-memory or Vercel KV)
- Update all "Request a Quote" buttons across the site to open the modal (or navigate to /quote on mobile)
- Confirmation page/state: "Got it. We'll call within 2 business hours."

**Dependencies:** Wave 6 complete

**Verification:**
- Form submits correctly with all field types
- Validation works (required fields, email format, phone format)
- File upload works for optional photos
- Confirmation message displays after submission
- Email arrives at admin@zioncs.com with all details
- Auto-reply email arrives in user's inbox
- Spam protection works (honeypot test)
- `npm run build` passes

**Commit:** `[feat] Wave 7 — Request a Quote form + email integration`

---

### Wave 8 — BUILDER Silo
**Sessions:** 2
**Goal:** Ship the BUILDER silo — landing page + 4 articles. Establishes the multi-silo pattern for COMMERCIAL and ENTERPRISE.

#### Session 8.1 — BUILDER landing + 2 articles
**Deliverables:**
- `src/app/builders/page.tsx` — BUILDER silo landing page per Core 30 entry #16
- `src/components/pages/SiloLandingTemplate.tsx` — reusable silo landing template (anthracite-heavier treatment for B2B, links to all silo blog articles + service categories relevant to the persona)
- 2 BUILDER blog articles:
  - `how-to-vet-a-concrete-subcontractor.mdx`
  - `concrete-sub-reliability-vs-lowest-bid.mdx`
- Builder-tier CTA variant: "Book a Discovery Call" alongside Request a Quote
- LocalBusiness JSON-LD update (already exists but reference from BUILDER context)

**Dependencies:** Wave 7 complete; IMG-13, IMG-20, IMG-21 ready

**Verification:**
- BUILDER silo landing live
- 2 BUILDER articles published
- CTAs route correctly (Discovery Call placeholder until Wave 12 booking)
- Internal links to silo landing from articles work
- `npm run build` passes

**Commit:** `[feat] Wave 8 Session 1 — BUILDER silo landing + 2 articles (front-door + decision-framework)`

#### Session 8.2 — Remaining 2 BUILDER articles
**Deliverables:**
- `common-concrete-sub-failures.mdx`
- `pre-pour-checklist-for-builders.mdx`
- Lateral cross-link refresh on Session 8.1 articles to link to new siblings

**Dependencies:** Session 8.1 complete; IMG-22, IMG-23 ready

**Verification:** All 4 BUILDER articles live; cross-linking dense

**Commit:** `[feat] Wave 8 Session 2 — BUILDER diagnostic + process-guide articles`

---

### Wave 9 — COMMERCIAL Silo
**Sessions:** 2
**Goal:** Ship COMMERCIAL silo — 1 landing + 2 service pages + 3 articles (including the Utah Soil data-overlay article).

#### Session 9.1 — COMMERCIAL landing + service pages + soil article
**Deliverables:**
- `src/app/commercial/page.tsx` — COMMERCIAL silo landing per Core 30 entry #21
- `src/app/services/commercial-flatwork-parking-lots-sidewalks/page.tsx`
- `src/app/services/industrial-concrete-foundations-utah/page.tsx`
- `utah-soil-conditions-commercial-foundations.mdx` (with embedded `<SoilCompositionDiagram />` and `<FrostDepthDiagram />` from Wave 4 Session 2)

**Dependencies:** Wave 8 complete; IMG-10, IMG-11, IMG-24 ready

**Verification:**
- COMMERCIAL silo landing + 2 service pages + 1 article live
- Soil + frost-depth diagrams render correctly with proper data overlays
- `npm run build` passes

**Commit:** `[feat] Wave 9 Session 1 — COMMERCIAL silo landing + 2 services + Utah Soil article`

#### Session 9.2 — Remaining 2 COMMERCIAL articles
**Deliverables:**
- `commercial-concrete-pour-scheduling.mdx`
- `evaluating-commercial-concrete-subs.mdx`

**Dependencies:** Session 9.1 complete; IMG-25, IMG-26 ready

**Verification:** All COMMERCIAL silo entries live; total 6 entries

**Commit:** `[feat] Wave 9 Session 2 — COMMERCIAL pour scheduling + procurement articles`

---

### Wave 10 — ENTERPRISE Silo
**Sessions:** 1
**Goal:** Ship ENTERPRISE silo — 1 landing + 1 service + 2 articles (smallest silo).

**Deliverables:**
- `src/app/multi-site/page.tsx` — ENTERPRISE silo landing per Core 30 entry #27
- `src/app/services/dumpster-pad-trash-enclosure-concrete-utah/page.tsx`
- `multi-site-concrete-maintenance-programs.mdx`
- `vendor-consolidation-concrete-contractor.mdx`
- Enterprise CTA variant: "Schedule a Multi-Site Conversation"

**Dependencies:** Wave 9 complete; IMG-12, IMG-27, IMG-28 ready

**Verification:** All 4 ENTERPRISE entries live; CTA copy reads "multi-site" not "discovery call"

**Commit:** `[feat] Wave 10 — ENTERPRISE silo landing + dumpster-pad service + 2 articles`

---

### Wave 11 — Geo Expansion: Wasatch Front + St. George + Service Area Map
**Sessions:** 1
**Goal:** Ship Tier 1 metro pillar + St. George city page + service area map component.

**Deliverables:**
- `src/app/wasatch-front-concrete-contractor/page.tsx` — Tier 1 metro pillar per Core 30 entry #2
- `src/app/locations/st-george/page.tsx` — Tier 2 city page per Core 30 entry #4
- `src/components/data/ServiceAreaMap.tsx` — Utah outline + Wasatch Front highlighted region + dot markers for served cities + optional pin
- Add ServiceAreaMap to homepage between hero and services intro
- Update internal links: state pillar (Wave 2.2) now properly links to metro pillar; metro pillar links to all 3 city pages

**Dependencies:** Wave 10 complete

**Verification:**
- Wasatch Front pillar + St. George page live
- ServiceAreaMap renders Utah outline correctly with city markers
- Internal linking matrix updated
- `npm run build` passes

**Commit:** `[feat] Wave 11 — Wasatch Front pillar + St. George + service area map`

---

### Wave 12 — Calendar Booking System (stubbed)
**Sessions:** 2
**Goal:** Ship calendar booking flow per `skills/CALENDAR-BOOKING.md`. Stubbed mode — UI exists but no real Google Calendar integration until client provisions Workspace emails.

#### Session 12.1 — Booking flow components + API stub
**Deliverables:**
- `src/components/booking/BookingFlow.tsx` — multi-step modal/page (date picker → time slot → contact form → confirmation)
- `src/components/booking/DatePicker.tsx`
- `src/components/booking/TimeSlotGrid.tsx`
- `src/components/booking/ContactForm.tsx`
- `src/components/booking/Confirmation.tsx`
- `src/app/book/[bookingType]/page.tsx` — dynamic booking type pages
- `src/lib/booking/config.ts` — `BookingTypeConfig` per `CALENDAR-BOOKING.md` § Booking types — 4 booking types:
  - `quote-request-residential` (15 min, default to estimator)
  - `discovery-call-builder` (30 min)
  - `discovery-call-commercial` (45 min)
  - `discovery-call-enterprise` (60 min)
- `src/app/api/booking/availability/route.ts` — STUB: returns mock availability slots (Mon-Fri 8am-5pm, 30-min increments)
- `src/app/api/booking/create/route.ts` — STUB: emails admin@zioncs.com with booking details, returns success without creating real calendar event
- `src/lib/booking/google-calendar.ts` — placeholder file with TODO comment: "Wire up service-account + DWD per CALENDAR-BOOKING.md when GOOGLE_SERVICE_ACCOUNT_KEY env var configured"

**Dependencies:** Wave 11 complete

**Verification:**
- Booking flow walks user through 4 booking types correctly
- Submission triggers email to admin@zioncs.com with all booking details
- Confirmation page displays
- `npm run build` passes

**Commit:** `[feat] Wave 12 Session 1 — booking flow UI + stubbed API (Google Calendar wiring deferred)`

#### Session 12.2 — Database schema + admin booking view
**Deliverables:**
- `src/data/bookings-schema.ts` — schema definition for booking records (per `CALENDAR-BOOKING.md` § Database schema)
- For v1 simplicity: store bookings in a JSON file in `/src/data/bookings.json` (auto-create on first booking) OR use Vercel KV for proper persistence
- `src/app/admin/bookings/page.tsx` — basic list view (no auth for v1; passwordless for now, secured via obscure URL pattern; flag for proper auth in post-launch wave)
- `src/components/admin/BookingsTable.tsx` — sortable table with filters (status, booking type, date range)
- Email reminder cron stubs: `src/app/api/cron/booking-reminders/route.ts` and `booking-followups/route.ts` — return success without doing anything until calendar wiring exists
- `vercel.json` — cron configurations for the reminder routes (set to run hourly / daily)

**Dependencies:** Session 12.1 complete

**Verification:**
- Admin bookings view shows submitted bookings
- Cron stubs exist and return successfully (don't actually do anything yet)
- `npm run build` passes

**Commit:** `[feat] Wave 12 Session 2 — booking admin view + cron stubs (Google Calendar deferred)`

---

### Wave 13 — Other Core Pages (About, Contact, Privacy, Terms)
**Sessions:** 1
**Goal:** Round out the standard site pages.

**Deliverables:**
- `src/app/about/page.tsx` — About page with founder bios (Kevin / Amy / Josh), origin story (pool deck specialists), values, team photos
- `src/app/contact/page.tsx` — Contact page with phone, email, address, hours, embedded map, contact form (simpler version of the quote form)
- `src/app/privacy/page.tsx` — privacy policy stub (boilerplate; client to review/customize)
- `src/app/terms/page.tsx` — terms of service stub (boilerplate)
- `src/app/blog/page.tsx` index update — paginated if 14 articles is too dense

**Dependencies:** Wave 12 complete; IMG-03 ready

**Verification:** All standard pages live; About page hero with data-overlay + founder photos placed correctly

**Commit:** `[feat] Wave 13 — about + contact + legal pages`

---

### Wave 14 — SEO + Schema Polish
**Sessions:** 1
**Goal:** Audit and tighten everything that affects search visibility.

**Deliverables:**
- `src/app/sitemap.ts` — full sitemap with all 30 Core 30 pages + standard pages
- `src/app/robots.ts` — robots.txt
- Verify all JSON-LD on every page:
  - LocalBusiness on home + contact + location pages
  - Service on every service page
  - Article on every blog post
  - FAQPage on every page with FAQs
  - BreadcrumbList on all non-home pages
  - Organization schema on home
- Open Graph images for top 6 pages (home, services index, projects, blog index, builders/commercial/multi-site)
- Verify all meta titles ≤60 chars + meta descriptions ≤155 chars
- Canonical URLs on every page
- Internal links audit: every link in body content + nav + footer resolves
- Image alt text audit: every `<img>` has descriptive alt
- `next-sitemap` package OR manual generation (Next 16 has built-in sitemap support via `app/sitemap.ts`)
- `next.config.ts` — image domains configured for Vercel Blob (if using)

**Dependencies:** Wave 13 complete

**Verification:**
- Google Rich Results Test passes on home, 1 service page, 1 blog article
- Sitemap loads at /sitemap.xml
- Robots.txt loads
- Lighthouse SEO 95+ on homepage
- All meta lengths within limits

**Commit:** `[fix] Wave 14 — SEO + schema polish + sitemap + robots`

---

### Wave 15 — 301 Redirects + Vercel Deploy
**Sessions:** 1
**Goal:** Stage the new site at Vercel; map old Webflow URLs to new structure.

**Deliverables:**
- Vercel project setup (or GitHub Actions deploy if preferred)
- Connect zioncs.com domain in Vercel (note: don't cut over DNS yet — staging only)
- Production env vars set (placeholder ANTHROPIC_API_KEY, RESEND_API_KEY, etc. — client adds real values)
- Initial deploy to `[project].vercel.app`
- 301 redirect mapping in `next.config.ts` for old Webflow URLs:
  - `/about-us` → `/about`
  - `/services` → `/services` (kept)
  - `/projects` → `/projects` (kept)
  - `/blog` → `/blog` (kept)
  - `/contact` → `/contact` (kept)
  - `/careers` → `/about` (no careers page in v1)
  - `/pricing` → `/quote` (no pricing page; redirect to quote form)
  - `/team` → `/about`
  - `/old-home.html` → `/`
  - Service detail URLs from Webflow (e.g., `/services/concrete-driveway`) → new slugs
- Test redirects work in staging

**Dependencies:** Wave 14 complete

**Verification:**
- Site live at staging URL
- All 301 redirects work (test sample 5)
- Build succeeds in Vercel (cold ~8 min — note for future scheduling)
- No 404s on internal links

**Commit:** `[setup] Wave 15 — Vercel deploy + 301 redirect map`

---

### Wave 16 — Domain Cutover + Analytics Install + Go-Live
**Sessions:** 1
**Goal:** Cut over zioncs.com DNS, install fresh analytics, submit sitemap to GSC, hand off.

**Deliverables:**
- DNS cutover: zioncs.com → Vercel
- SSL verification (Vercel auto-provisions Let's Encrypt)
- GA4 installed (replace `NEXT_PUBLIC_GA_ID` env var)
- Google Search Console verification (DNS TXT record or HTML file)
- Submit sitemap.xml to GSC
- GBP listing — update website URL (already at zioncs.com)
- Smoke test: visit 10 pages on production, verify no 404s, no console errors
- Confirm phone tap-to-call works on actual mobile devices
- Test quote form submission end-to-end on production
- Test booking form submission end-to-end on production
- Test Intelligence Console with real Anthropic API key
- Hand-off doc for client: `docs/handoff/CLIENT_HANDOFF.md` — env var setup, how to update social posts, how to add real project photos, how to wire up Google Workspace emails for calendar later

**Dependencies:** Wave 15 complete; client provides ANTHROPIC_API_KEY + RESEND_API_KEY + GA_ID

**Verification:**
- Site loads at zioncs.com (no www-redirect issues)
- All forms work on production
- GA4 receives events
- GSC shows sitemap submitted
- Webflow site can be turned off (verify zioncs.com goes through Vercel, not Webflow)

**Commit:** `[setup] Wave 16 — domain cutover + analytics install + production go-live`

---

## Cross-wave dependencies

```
Track A (Image Generation)
  T1 ──────┐
  T2 ──────┼─────┐
  T3 ──────┼─────┼─────┐
           │     │     │
Track B (Build)  │     │
  W1 (Foundation)│     │
   ├─ W2 (Homepage + Pillar + Sandy + SLC)
   │             │     │
   ├─ W3 (RES Service Pages) ◄── needs Track A 1
   │             │     │
   ├─ W4 (Blog + RES Articles) ◄── needs Track A 1
   │             │     │
   ├─ W5 (Project Gallery + Social) ◄── needs Track A 2
   │             │     │
   ├─ W6 (Intelligence Console)
   │             │     │
   ├─ W7 (Quote Form)
   │             │     │
   ├─ W8 (BUILDER Silo) ◄── needs Track A 3
   │             │     │
   ├─ W9 (COMMERCIAL Silo) ◄── needs Track A 3
   │             │     │
   ├─ W10 (ENTERPRISE Silo) ◄── needs Track A 3
   │             │     │
   ├─ W11 (Geo Expansion + Service Area Map)
   │             │     │
   ├─ W12 (Booking Stubbed)
   │             │     │
   ├─ W13 (About + Contact + Legal)
   │             │     │
   ├─ W14 (SEO + Schema Polish)
   │             │     │
   ├─ W15 (Vercel Deploy + Redirects)
   │             │     │
   └─ W16 (Domain Cutover + Go-Live)
```

### Critical-path observations

- **Track A Session 1 must complete before Wave 3** (service pages need their hero images)
- **Track A Session 2 must complete before Wave 5** (project gallery needs project photos)
- **Track A Session 3 must complete before Wave 8** (BUILDER articles need blog hero images)
- **Wave 12 (Booking) is independent** of Wave 11; could be done earlier if needed
- **Wave 6 (Intelligence Console)** has placeholder in homepage from Wave 2 — homepage works without console; console fills in later
- **Wave 14 (SEO Polish)** can happen any time after Wave 13 once all content is live

---

## Verification gates between waves

After each wave: confirm all of these before proceeding to the next:

1. ✅ `npm run build` passes clean (no errors, warnings reviewed)
2. ✅ Lighthouse Accessibility 90+ on the wave's deliverable pages
3. ✅ All internal links from new pages resolve (no 404s — placeholders OK if explicitly noted)
4. ✅ Mobile responsive (375px / 768px / 1440px verified)
5. ✅ Session summary written at `/docs/sessions/wave-{N}-session-{M}.md`
6. ✅ Commit message follows convention: `[feat|fix|setup|content|docs] Wave N Session M — short description`
7. ✅ Pushed to GitHub `main`
8. ✅ Explicit stop — no chaining sessions

---

## Risks + open items

### Risks

1. **Next 16 cold builds are ~8 min** — plan accordingly. Don't pipe build output to `tail` (per AGENTS.md).
2. **Image generation may need re-rolls** — IMG-XX prompts may produce AI artifacts on first attempt. Budget 1.5x estimated time for Track A sessions.
3. **MDX in Next 16** — verify the chosen MDX library (`@next/mdx` vs `next-mdx-remote/rsc`) works cleanly with App Router. CoreHOA used `next-mdx-remote/rsc` v6 with a known limitation around inline JsonLd; emit JSON-LD from route components, not MDX bodies.
4. **Anthropic API key + Resend API key** — required for Wave 6 + Wave 7 testing. Client provides; if delayed, can stub with mock responses initially.
5. **Vercel cron** — only available on Pro+ plans. If client is on Hobby plan, cron stubs (Wave 12) need to wait OR use external cron service.

### Open items (non-blocking, parked for post-launch)

- Real Google Calendar integration (Wave 12 currently stubbed) — wires up once Google Workspace emails exist for Kevin / Amy / Josh
- Real project photos (currently AI-generated) — swap when ZionCS provides
- Logo SVG conversion (currently PNG raster)
- Display font exploration (currently Inter at heavy weights; Oswald or Barlow Condensed candidates)
- Tier 2 city page expansion: Provo, Ogden, Park City, Lehi, Layton, Bountiful, Orem (currently 3 city pages; expand based on traffic post-launch)
- Review-request flow (post-launch, when GA4 data available to identify recently-completed customers)
- Auth on `/admin/bookings` (currently URL-obscure; needs proper auth before broader team access)
- Meta Graph API integration for social feed (currently manual curation)
- Real climate / soil data sources for the data-overlay components (currently placeholder data; refine with verified Utah Geological Survey sources)

---

## Post-launch waves (deferred)

Beyond v1 launch, parked for future sessions:

- **Wave 17:** Real Google Calendar integration (un-stub Wave 12)
- **Wave 18:** Add Tier 2 city pages — Provo, Ogden, Park City, Lehi, Layton (5 more location pages)
- **Wave 19:** Review-request flow + Trustpilot/G2-style review aggregation
- **Wave 20:** Photo / video swap-in from real ZionCS content
- **Wave 21:** Auth on admin views + proper team account management
- **Wave 22:** GBP description refresh + service area expansion when ZionCS enters WY/MT
- **Wave 23:** Performance optimization pass based on real-traffic data
- **Wave 24:** Re-run Core 30 with GSC data accumulated over 90 days
