# Wave 12 Session 2 — booking admin view + cron stubs (Google Calendar deferred)

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 44 static + 9 dynamic = 53 routes)

---

## Deliverables

### Schema — `src/data/bookings-schema.ts`
Typed `BookingRecord` matching the standards `CALENDAR-BOOKING.md` SQL schema: id, bookingType, persona, attendee fields, startISO/endISO, googleEventId/MeetLink (null in stub), status (`booked | held | no-show | cancelled | completed`), notes, reminder timestamps, followup timestamp, source, createdAt. Plus `BookingFilter` for the admin view.

### Persistence interface — `src/lib/booking/store.ts`
`BookingStore` interface with `create / list / getById / updateStatus / markReminder / markFollowup`. v1 implementation is in-memory (a module-level array). File header documents the swap path:

> Production-grade swap: replace this module with Vercel KV or a Postgres table behind the same `BookingStore` interface. The admin view and cron routes consume this interface only.

In-memory store resets on every Vercel deploy and serverless cold start. Source-of-truth records live in the `admin@zioncs.com` inbox (Resend notifications fire on every booking). The admin view is a UI convenience for in-session bookings, not the canonical record.

### `/api/booking/create` update
Calls `getBookingStore().create()` after the calendar stub runs. Captures `googleEventId` and `googleMeetLink` (null in stub mode) so the swap to real persistence + real calendar wiring is a one-line change.

### Admin view — `/admin/bookings`
- `dynamic = "force-dynamic"` so the route reads the in-memory store on each request
- `robots: noindex, nofollow` — admin shouldn't surface in search
- `PageHero` with `ZIONCS://ADMIN · INTERNAL` eyebrow
- **Stub-mode banner** at top — `card-light status-gold` with `AlertCircle` icon, explains records-reset-on-deploy + canonical-source-is-email
- `BookingsTable` rendering the records

URL is exposed but not linked from anywhere in the public site (header, footer, sitemap). Acceptable for v1 — proper auth (session cookie + role check) is documented as a post-launch wave.

### `BookingsTable` component
Client component with:
- 4 summary chips (Total / Booked / Completed / Cancelled) at top with mono labels and tabular-nums counts
- 3 filter controls: status select, type select, sort-by toggle (start vs created)
- 5-column table: Status (color-coded chip per status) / Persona (RES/BLD/COM/ENT mono code) / Attendee (name + email + phone) / When (formatted Mountain time) / Context
- Empty-state messaging when filters return no records

All tabular numbers rendered `font-mono tabular-nums` for stable column alignment.

### Cron stubs

#### `/api/cron/booking-reminders` (hourly)
Walks the store, identifies bookings 24h or 1h out that haven't had reminders sent, logs `cron_booking_reminders` event with the eligibility counts. Doesn't actually send. Activates when Google Calendar wiring lands + Resend reminder templates are written.

#### `/api/cron/booking-followups` (daily at 2pm Mountain — `0 14 * * *`)
Walks the store, identifies bookings that ended 24–72h ago without a follow-up sent, logs `cron_booking_followups` event. Doesn't actually send. Activates with Resend follow-up templates.

Both crons accept a `Bearer ${CRON_SECRET}` header for Vercel Cron auth — falls open when `CRON_SECRET` is unset for dev/preview deploys.

### `vercel.json`
Cron config:
- `/api/cron/booking-reminders` → `0 * * * *` (hourly)
- `/api/cron/booking-followups` → `0 14 * * *` (daily at 2pm UTC = ~7am Mountain)

---

## Verification

- ✅ `npm run build` passes clean — 53 total routes (44 static + 9 dynamic)
- ✅ `/admin/bookings` activates as a Dynamic route (server-rendered on each request to read fresh in-memory state)
- ✅ Both cron routes activate as Dynamic with proper authorization gate
- ✅ `BookingsTable` filter + sort logic tested locally; status chip colors match palette
- ✅ Booking flow end-to-end now writes to the store (verifiable in `/admin/bookings` for in-session bookings before deploy)

## Notes

1. **In-memory store choice:** Considered Vercel KV but it requires a paid Vercel plan + add-on provisioning that's a deploy-time decision. Considered JSON file at `src/data/bookings.json` but Vercel serverless functions have read-only filesystems for the project directory — writes wouldn't persist. In-memory + email-as-source-of-truth is the cleanest v1 fit.

2. **Status "completed" lifecycle:** No UI yet for marking bookings completed. Will add as part of the post-launch admin auth wave — the `updateStatus` interface method is in place, just not wired to a UI control yet.

3. **Cron schedules in UTC:** Vercel Cron interprets schedules in UTC. `0 14 * * *` is 2pm UTC = 7am MST / 8am MDT. Reasonable morning trigger for the day's follow-ups. Hourly reminders run at the top of every hour UTC.

4. **`CRON_SECRET` is optional but recommended:** When set, both cron routes require `Authorization: Bearer ${CRON_SECRET}`. Vercel Cron sets this header automatically when configured. When unset (dev/preview deploys), routes return 200 without auth — useful for testing the logic but should be set in production.

5. **No reminder/followup email templates yet:** The cron routes count eligible records but don't have Resend templates to send. When activated, the templates need:
   - 24h reminder: "Heads-up — your call is tomorrow"
   - 1h reminder: "Your call starts in an hour"
   - Follow-up: "Thanks for the call — here's what we discussed / next steps"
   Templates land alongside the Google Calendar wire-up in the post-launch wave.

6. **Admin view is honest about its limitations:** The stub-mode banner is prominent and explains exactly what the user is seeing. Better to set accurate expectations than to make it look like full persistence is in place.

---

## Wave 12 closeout

Booking system stubbed end-to-end. UI works, API routes work, customer + admin emails fire, in-memory persistence captures bookings for the admin view, cron stubs are wired and ready to activate.

**Activation path** (post-launch, when ZionCS team has Google Workspace emails):

1. Provision Workspace for kevin@/amy@/josh@zioncs.com
2. Set up Google Cloud service account + Calendar API + DWD
3. Replace `src/lib/booking/google-calendar.ts` with real implementation
4. Switch `BOOKING_CONFIGS` to per-founder routing
5. Replace in-memory `BookingStore` with Vercel KV or Postgres
6. Write Resend reminder + follow-up email templates
7. Set `CRON_SECRET` env var on Vercel

That's a clean checklist with no code-architecture changes — every piece behind a stable interface.

## Hand-off to Wave 13

Wave 13 (single session) ships the standard pages:
- `/about` — founder bios (Kevin / Amy / Josh), origin story, values
- `/contact` — phone, email, address, hours, embedded map, contact form
- `/privacy` — privacy policy stub
- `/terms` — terms of service stub
- Blog index pagination if 14 articles needs it

After Wave 13, the only remaining waves are SEO polish (14), Vercel deploy + redirects (15), and domain cutover (16). Internal-link integrity will be 100% — every link from anywhere on the site will resolve to a live page.
