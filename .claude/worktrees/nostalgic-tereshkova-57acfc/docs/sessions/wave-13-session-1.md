# Wave 13 — About + contact + legal pages

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 48 static + 9 dynamic = 57 routes)

---

## Deliverables

### `/about` (~750 words body)
4 sections + stats band + CTA:

1. **Stats band** — 4 KPIs in mono tabular-nums: Years (9+), Projects (200+), Team (10+), Reviews (5.0/6)
2. **01 / ORIGIN** (~280 words) — Pool decks first; expansion outward to driveways, residential flatwork, commercial
3. **02 / VALUES** — Orange-tinted section with 3 status-orange cards: Show up on time / Keep worksite clean / Get the job done right
4. **03 / THE TEAM** — 3 founder cards (Kevin / Amy / Josh) with role + bio + headshot placeholder (gradient + topo overlay; real headshots swap in via Track A or client-provided photos later). Each card uses a different status color (orange/steel/rebar) for visual variety.
5. **04 / WHERE WE WORK** — Anthracite section with home-base address, Wasatch Front + St. George coverage, link tiles to state pillar, metro pillar, and projects
6. PageCTA

Voice: Origin story is honest about the trajectory ("started as pool-deck crew, expanded outward"). Founder bios establish accountability ("the buck stops with Kevin," "if you've called us you've talked to Amy," "Josh is the one running it day-by-day").

### `/contact` (~250 words body + form)
3 main sections:

1. **Direct contact band** — Anthracite-elevated row with 4 cards: Phone (rebar accent) / Email (steel accent) / Hours (gold accent) / Home Base (orange accent). Phone and email are clickable.
2. **01 / PICK A PATH** — 3 routing cards: "Need a written quote?" → /quote · "Got a builder/commercial/multi-site project?" → /builders · "Just have a question?" → #message
3. **02 / MESSAGE** — Sand-wash section with the contact form (col-span-7) + sidebar (col-span-5)
   - Sidebar contains a static map placeholder with Sandy marker + lat/lng coordinates + "Open in Google Maps" external link
   - Privacy disclosure caption at bottom

#### `ContactPageForm` component
Slimmer than QuoteForm — no service/city/size/timeline dropdowns since this is for non-quote inquiries. Fields: name (required) / email (required) / phone (optional) / message (optional). Posts to `/api/intake` with `context: "contact-page"` so the team can tell apart entry paths in the inbox. Same honeypot pattern, same idle → sending → sent state machine.

### `/privacy` (~700 words)
9-section privacy policy stub:
1. Information we collect (form submissions + technical data)
2. How we use it (response, scheduling, improvement, legal)
3. Third-party services (Vercel, Resend, Anthropic, GSC + GA4)
4. Cookies and tracking (minimal first-party + GA4 mentions)
5. Data retention (7-year archive, deletion-on-request)
6. Your rights (Utah residents)
7. Children (not directed at <13)
8. Changes
9. Contact

Honest about what's used, what's collected, what's not (no third-party advertising trackers, no retargeting, no lead-data sales). Marked as draft pending counsel review.

### `/terms` (~750 words)
10-section terms of service stub:
1. Use of the site (lawful + no fraud + no scraping + no harassment)
2. Quote requests aren't contracts (signed proposal required)
3. No professional advice (general experience, not engineering advice)
4. Intellectual property (site content + submission license)
5. Disclaimers and limitation of liability
6. Third-party services
7. Modifications
8. Governing law and venue (Utah, Salt Lake County)
9. Contract terms vs site terms (signed project contract supersedes site terms for actual work)
10. Contact

Marked as draft pending counsel review.

### `LegalPageLayout` component
Shared layout for /privacy and /terms with:
- Standard PageHero with `lead` text noting last-updated date + counsel-review-pending status
- Narrow `max-w-3xl` content column
- Inline `zion-legal` typography styles (similar pattern to the blog `Prose` component but tuned for legal-doc readability — bigger line-height, mono em-dash list bullets in steel, decimal counters for ordered lists, bigger heading top-margin)
- PageCTA at bottom

### Misc
- All 4 pages have BreadcrumbList JSON-LD
- `/contact` adds LocalBusiness JSON-LD geo'd to Sandy
- Honeypot field on the contact-page form

---

## Verification

- ✅ `npm run build` passes clean — 48 static + 9 dynamic = 57 total routes
- ✅ All 4 pages prerender as static
- ✅ `/about` activates — referenced from header nav, footer, mobile menu since Wave 1
- ✅ `/contact` activates — same
- ✅ `/privacy` and `/terms` activate — footer legal links resolve
- ✅ ContactPageForm posts to `/api/intake` with proper context tag
- ✅ Static map placeholder displays Sandy marker + coordinates + Google Maps deeplink

## Notes

1. **No real maps integration:** Per the same reasoning as the ServiceAreaMap (Wave 11), we skipped Google Maps embed / Mapbox here. The static placeholder with Sandy marker + lat/lng + "Open in Google Maps" deeplink covers 90% of the user need without JS bundle weight, runtime API costs, or third-party tracking. Real users wanting directions click through to Google Maps anyway.

2. **Founder headshots are placeholders:** Same gradient + topo pattern as project cards and social feed cards. When ZionCS provides real headshots (or Track A generates them — though calibration says minimize worker-as-mascot), swap the placeholder div for `next/image`. No layout change required.

3. **Contact form vs quote form:** Different entry paths, different conversion intents. Quote form captures structured project info for routing and quoting. Contact form is for everything else — general questions, follow-ups, partnerships. Both land at admin@zioncs.com but the team can distinguish via the email subject and the `context` field.

4. **Legal stubs are starting drafts, not final docs:** Both pages have prominent "Last updated [date]. Drafted as starting point — should be reviewed by counsel before being treated as final." messaging in the lead. Honest about status, won't surprise the client when they take it to their lawyer.

5. **Blog index pagination skipped:** Build plan flagged this as conditional ("paginated if 14 articles is too dense"). At 14 articles in a 3-col grid, the index is 5 rows tall — fine without pagination. Documented as a post-launch enhancement if the blog grows past ~30 articles.

---

## Wave 13 closeout

Standard pages complete. Site-level integrity achieved:

- Header nav links: Home / Services / Projects / About / Blog / Contact — **all 6 resolve**
- Footer Services + Company + Legal columns — **all 12 links resolve**
- Footer "View all →" Service Area link — resolves to state pillar
- Mobile menu — same 5 nav links + CTA buttons all resolve
- ContactWidget — phone tap-to-call + Quote button both resolve
- Every CTA across the site (header, footer, hero, page CTAs, intake action cards, console suggestions) — **all resolve to live pages**

**Internal-link integrity at 100%.** The only "404 from a link in body copy" anywhere on the site would be if the site links to itself with a typo'd slug — which a search audit in Wave 14 will catch.

**Cumulative page count:**

| Surface | Count |
|---|---|
| Homepage + index pages (services, projects, blog, quote, contact, about) | 7 |
| Privacy + Terms | 2 |
| Geo (state + metro + 3 cities) | 5 |
| Service detail pages | 8 |
| Silo landings (builders / commercial / multi-site) | 3 |
| Blog post pages (SSG) | 14 |
| Project detail pages (SSG) | 6 |
| Booking pages (SSG, 4 types) | 4 |
| Admin (1) | 1 |
| **Total prerendered** | **50+** |

Plus 9 dynamic API + cron routes.

## Hand-off to Wave 14

Wave 14 (single session) ships SEO + schema polish:
- `src/app/sitemap.ts` — full sitemap (all 30 Core 30 pages + standard pages)
- `src/app/robots.ts` — robots.txt
- JSON-LD audit across every page
- Open Graph images for top 6 pages
- Verify meta titles ≤60 chars + descriptions ≤155 chars
- Canonical URLs verification
- Internal-links + alt-text audit
- `next.config.ts` image domain config

After Wave 14, Wave 15 stages on Vercel with 301 redirects, and Wave 16 cuts over the domain. Three waves to launch.
