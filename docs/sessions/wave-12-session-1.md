# Wave 12 Session 1 — Booking flow UI + stubbed API (Google Calendar wiring deferred)

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 44 static + 6 dynamic API routes — 4 SSG booking pages added)

---

## Stub-mode architecture

ZionCS team doesn't have Google Workspace emails yet, so booking flow is stubbed end-to-end. UI exists, API routes exist, customer + admin emails go through Resend, but no real Google Calendar event is created until DWD is set up.

Three things make stub mode work seamlessly:

1. **Mock availability generator** — `getAvailability()` in `google-calendar.ts` produces realistic-looking slot grids from the business-hours config rather than querying a real calendar. Pseudo-random skips create the appearance of "already booked" slots so the UI shows honest gaps.
2. **Email-only confirmation path** — `createBookingEvent()` returns null IDs; `/api/booking/create` skips calendar creation and just sends Resend emails (admin notification + customer confirmation).
3. **`stubbed: true` flag** — every response includes the flag so the UI can badge it ("Availability shown is illustrative") if we want, or just behave normally if we don't.

Real Google Calendar wiring is a 5-step replacement of `google-calendar.ts` that the file documents inline. No changes needed to the booking flow components, the API routes, or the BookingFlow state machine — they all keep working when calendar wiring activates.

---

## Deliverables

### Types — `src/types/booking.ts`
- `BookingTypeSlug` union (4 slugs)
- `BookingTypeConfig` with persona, duration, buffer, business hours, lead time, window
- `AvailabilityResponse`, `AvailableSlot`, `BookingSubmission`

### Config — `src/lib/booking/config.ts`
4 booking types per the brief's single-calendar architecture (vs library default per-founder routing):

| Slug | Duration | Buffer | Lead | Window |
|---|---|---|---|---|
| `quote-request-residential` | 15 min | 0 | 1 day | 21 days |
| `discovery-call-builder` | 30 min | 15 | 1 day | 30 days |
| `discovery-call-commercial` | 45 min | 15 | 1 day | 30 days |
| `discovery-call-enterprise` | 60 min | 15 | 2 days | 45 days |

Mountain timezone, Mon–Fri 8:00–17:00. Helper functions `getBookingConfig(slug)` + `getAllBookingSlugs()`.

### Stub helpers — `src/lib/booking/google-calendar.ts`
- `getAvailability(config, startDate, endDate)` — generates business-hour slot grid for the date range, with pseudo-random skips for realism
- `createBookingEvent()` — returns null IDs + `stubbed: true`
- File header documents the 5-step Google Calendar wire-up plan for the post-launch wave

### API — `/api/booking/availability` (GET)
Validates `bookingType` query param against the registered configs. Returns 404 for unknown slugs, 400 for missing param. Builds the slot window from `leadTimeDays` to `windowDays`, calls the stub helper, returns `{ bookingType, slotsByDate, generatedAt, stubbed }`.

### API — `/api/booking/create` (POST)
- Rate-limited (5 req / 10 min / IP via `checkRateLimit("booking:" + ip)`)
- Validates JSON, slug, startISO, name, email, email format
- Calls stub `createBookingEvent()` (returns nulls in v1)
- Logs structured `booking_created` JSON for Vercel observability
- **Two parallel Resend deliveries:** admin notification with full submission details (`reply_to: <attendee>`), customer confirmation in Amy's voice (`reply_to: admin@zioncs.com`)
- From-address: `bookings@zioncs.com` (separate from `quotes@` and `site@` for filtering)
- Stub fallback when `RESEND_API_KEY` unset — accepts + logs + returns success without delivery
- Returns `{ success, stubbed, message, formattedTime }` for the UI to render

### Components — `src/components/booking/`

#### `DatePicker.tsx`
Month-grid picker with prev/next month navigation (capped at 3 months forward). Past dates disabled, available dates show a rebar pulse-dot underneath. Selected date renders in brand-orange. Full keyboard + ARIA grid semantics. Mono caption legend.

#### `TimeSlotGrid.tsx`
2/3-column slot grid (responsive). Each slot is a radio button with `aria-checked`. Selected slot in brand-orange filled, unselected in sand-wash with hover border. Empty-state message when no slots.

#### `ContactForm.tsx`
Name + email + phone + meeting context. Name and email required, others optional. Email validation. Per-field disabled state during submit. Configurable `contextHint` so different booking types can suggest different details to share.

#### `Confirmation.tsx`
Success card with Check icon in rebar accent, formatted time, attendee name greeting, confirmation email destination, "Need to reach us?" phone fallback, and "Back to home" button. Mono caption about how to reschedule.

#### `BookingFlow.tsx`
4-step state machine: `date → time → contact → confirmed`. Top step indicator with Check icons on completed steps. Loads availability via `useEffect` on mount, computes `availableDates` Set from the response, shows availability errors gracefully. Back-step navigation. AnimatePresence wraps each step (0.24s EASE).

### Route — `/book/[bookingType]`
`generateStaticParams` prerenders one page per known booking slug (4 total). `generateMetadata` builds title/description/OG from the config. Layout:
- `PageHero` with persona-specific eyebrow
- 12-col grid: `BookingFlow` (col-span-8) + sidebar (col-span-4)
- Sidebar: "What to expect" (3-step process) + "Prefer to call" contact card

`robots: { index: false }` — booking pages aren't search-indexed; they're routed to from console actions, page CTAs, and silo landings.

---

## Verification

- ✅ `npm run build` passes clean — 4 prerendered booking pages + 2 new API routes
- ✅ All 4 booking slugs activate as routes — replaces every `/book/[slug]` placeholder link from earlier waves (Intelligence Console action cards, BUILDER + COMMERCIAL + ENTERPRISE silo landings, service-page CTAs)
- ✅ Availability response shape matches type contract; stubbed flag set
- ✅ Booking create endpoint validates fields, rate-limits per IP, handles stub mode and live Resend mode
- ✅ Date picker disables past dates and weekends correctly
- ✅ Time slot grid shows realistic gaps from the pseudo-random skip pattern
- ✅ All 4 step transitions handled with AnimatePresence
- ✅ Internal-link integrity at near-100% — only Wave 13 standard pages (about/contact/privacy/terms) remain as 404 placeholders

## Notes

1. **Single-calendar architecture vs library default:** The standards skill `CALENDAR-BOOKING.md` is built around per-founder routing (each booking type maps to a specific founder's Google Calendar). ZionCS uses single-calendar with `booking_type` metadata for downstream sales routing. Simplifies v1 substantially. When Workspace is provisioned, swap the config to per-founder.

2. **Mock slot generation pseudo-randomness:** Used a deterministic skip rule based on hour-minute + date seeds rather than `Math.random()`. Reason: server-rendered availability should be stable across requests within the same day so users don't see slots disappearing/appearing inconsistently as they navigate. The pattern looks random enough to feel real, but is reproducible.

3. **`bookings@zioncs.com` from-address:** Third site-generated mail from-address (alongside `site@` for intake/direct-message and `quotes@` for quote form). Filtering and DMARC verification on each happen at deploy time. All three need DNS verification on the zioncs.com domain — captured in the Wave 16 cutover checklist.

4. **Booking pages set `robots: noindex`:** Booking flow pages aren't search-targets — they're conversion endpoints. Indexing them clutters search results without value. Console actions and silo CTAs are the right entry points.

5. **No reschedule UI in v1:** The flow handles new bookings only. Reschedules go through email or phone. When Google Calendar wiring activates, reschedule URLs (e.g. `/book/reschedule/[token]`) become straightforward. Documented as a post-launch enhancement.

6. **Date picker timezone handling is intentionally simple:** Dates are stored and selected as UTC YYYY-MM-DD strings. Time slots use full ISO timestamps with timezone offsets. Renders use `timeZone: "America/Denver"` for display. Edge cases at DST transitions could surface; documented for Wave 14 polish if real-world testing reveals issues.

---

## Hand-off to Wave 12 Session 2

Wave 12.2 ships the admin view + persistence + cron stubs:
- `src/data/bookings-schema.ts` — schema definition
- v1 persistence: JSON file at `src/data/bookings.json` OR Vercel KV (decision in 12.2)
- `/admin/bookings` page — basic list view, no auth (URL-obscure for v1)
- `BookingsTable.tsx` — sortable + filterable
- `/api/cron/booking-reminders` and `/api/cron/booking-followups` stub routes
- `vercel.json` cron config

Dependencies met. Wave 12.1 establishes the schema needs (BookingSubmission shape) and the API routes that 12.2 will read from.
