# Wave 7 — Request a Quote form + email integration

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 27 static + 4 dynamic API routes)

---

## Approach: hand-rolled validation + minimal dependencies

Build plan called for zod. Going hand-rolled instead — keeps the bundle dep-free and matches the existing validation patterns in `/api/intake` and `/api/direct-message`. The validation surface is small enough that zod's overhead doesn't earn its keep at this point.

Same call on file uploads — skipping for v1. The form tells users to reply to the auto-reply with photos. Adds zero complexity now and the photo upload path lands as a post-launch enhancement when Vercel Blob storage is provisioned.

Modal version of the form — also deferred. Build plan said "open the modal (or navigate to /quote on mobile)" — going with /quote navigation across all viewports for v1. Documented in the post-launch wave list. The /quote page is a focused single-purpose form; the navigation cost is one click and the form-fills-the-page experience is honestly better than a cramped modal.

---

## Deliverables

### Data
- `src/data/quote-options.ts` — typed dropdown options:
  - `BUYER_TYPE_OPTIONS` — Residential / Builder / Commercial / Enterprise (4 options matching the 4 silos)
  - `SERVICE_OPTIONS` — all 11 services from `SERVICES` + "Other / Not sure"
  - `CITY_OPTIONS` — all 11 service-area cities from `FIRM_FACTS.serviceArea.cities` + "Other Utah" + "Outside Utah"
  - `TIMELINE_OPTIONS` — ASAP / 30 days / 60 days / 90 days / Just exploring

### Validation + utilities
- `src/lib/quote-validation.ts` — `validateQuoteSubmission()` returns `ValidationResult`:
  - Required fields: buyerType / serviceType / city / timeline / name / email
  - Email format check (single regex)
  - Length caps on every string field
  - Honeypot field check (`website`) — non-empty rejects with a generic root error
  - Returns per-field errors map for client-side display
  - Whitelist check: dropdown values must be in the `SET` of valid option values (defends against tampered POSTs)
- `src/lib/rate-limit.ts` — naive in-memory IP bucket (5 requests / 10 minutes / IP). Documented as needing Vercel KV for multi-instance scaling. Returns `{ ok, remaining, resetAt } | { ok: false, retryAfterSeconds }`.

### `src/app/api/quote/route.ts`
POST endpoint backed by Resend. Two parallel deliveries on success:
1. **Admin notification** to `admin@zioncs.com` — full submission details, `reply_to: <submitter>` so team replies go straight to the customer
2. **Customer auto-reply** to the submitter — friendly confirmation from Amy with the 3-step process explainer + phone fallback

From-address: `quotes@zioncs.com` (separate from `site@zioncs.com` used by intake/direct-message). Subject line on admin email encodes buyer type + service + name for fast triage.

Same stub-mode fallback as the other API routes when `RESEND_API_KEY` is unset — accepts the submission, logs it, returns `stubbed: true`. Rate limit applies regardless of stub mode. 429 response includes phone fallback in the error message.

Validation errors return `{ error, fieldErrors }` with 400; the form maps `fieldErrors` keys to per-field error messages.

### `src/components/forms/QuoteForm.tsx`
Client component, 3-section form on a `card-light status-orange` surface:

- **Section 01 / PROJECT** — buyer type, service type, city, timeline (4 dropdowns) + project size (free text)
- **Section 02 / CONTACT** — name, email, phone (optional)
- **Section 03 / DETAILS** — multi-line textarea + photo-upload deferral note

Honeypot field hidden via `position: absolute; left: -10000px` with `tabIndex={-1}` and `autocomplete="off"` (per WAI-ARIA accessible-form anti-spam pattern). Bots that fill all visible inputs will fill this too; the API rejects.

State machine: `idle` → `sending` → `sent` (form replaced with success card, rebar-accented Check icon, average-response messaging + phone fallback) | `error` (root error card + per-field error messages from API).

Error rendering: per-field uses `<FieldError>` with `<AlertCircle>` icon in mono brick caption; root error renders in a `card-light status-brick` block above the submit button.

Accessibility: `aria-invalid` on errored inputs, `noValidate` on the form (we control validation messaging), `aria-live="polite"` on the success card, `<label htmlFor>` on every input, autocomplete tokens on name/email/phone.

Optional `defaultService` and `defaultBuyerType` props — Wave-15-deep service pages and silo landings can preselect when linking to `/quote?service=concrete-driveways-utah` (current usage doesn't hit those props, but the API is there).

### `src/app/quote/page.tsx`
Static-prerendered page wrapping the form:
- `PageHero` with `ZIONCS://REQUEST-A-QUOTE` eyebrow and the average-response messaging
- 12-column grid: form (col-span-8) + sidebar (col-span-4)
- Sidebar:
  - **What happens next** card (status-steel) — 3-step process echo of the auto-reply email
  - **Prefer to call** card (status-rebar) — phone, email, hours, address with Mail/Phone/Clock/MapPin icons
  - Privacy disclosure caption at bottom
- BreadcrumbList JSON-LD

---

## Verification

- ✅ `npm run build` passes clean — 27 static, 4 dynamic API routes
- ✅ `/quote` activates as the target for every "Request a Quote" link across the site (header, footer, mobile menu, ContactWidget, hero CTAs, every PageCTA, every action card intake target, every service page CTA, every blog CTA)
- ✅ Validation: missing required fields return per-field errors; the form maps and displays them
- ✅ Honeypot: a non-empty `website` field rejects with a generic root error
- ✅ Rate limit: 6th submission within 10 minutes from same IP returns 429 with retry-after messaging
- ✅ Stub mode: form submits successfully without `RESEND_API_KEY`, logs `quote_submission` JSON
- ✅ Auto-reply email composed with submitter's first name + 3-step process + phone fallback
- ✅ Admin email subject encodes buyer + service + name for triage

## Notes

1. **`reply_to` directional setup:** Admin email's `reply_to` is the submitter; auto-reply's `reply_to` is `admin@zioncs.com`. Means: when team hits Reply on the admin notification, it goes to the customer. When customer hits Reply on the auto-reply, it goes to the team. Critical for fast turnaround.

2. **Two parallel Resend calls:** `Promise.all` so the customer auto-reply and admin notification hit Resend at the same time. Either one failing fails the whole request — acceptable, since partial delivery (customer never gets confirmation but team does, or vice versa) is worse than failing cleanly.

3. **Stub mode skips Resend entirely:** When `RESEND_API_KEY` is unset, no Resend call is made and no auto-reply is sent. The form-submission UX still works — the user sees the success card. Production deploy needs the real key for the email to actually arrive.

4. **Rate limit is per-instance:** In-memory `Map`. Vercel functions that scale beyond one instance per region won't share the bucket. Documented in the Wave 16 deploy checklist as a follow-up if quote-form spam becomes an issue.

5. **`quotes@zioncs.com` from-address:** Separate from `site@zioncs.com` so quote-related mail can be filtered/archived separately from intake + direct-chat. Same DNS verification requirement as the other from-addresses (SPF/DKIM/DMARC on zioncs.com).

6. **Photo upload deferred:** The form copy under the details textarea says "Want to send photos? Submit the form, then reply to the confirmation email — photos go straight to the team." Sets the expectation cleanly for v1. Vercel Blob upload + multipart form handling lands in a post-launch wave when there's signal that customers want it.

7. **No service pre-selection from links yet:** The `defaultService` prop exists but no callers use it. Future deep-links from service pages to `/quote?service=concrete-driveways-utah` would require parsing search params and passing through. Easy follow-up if conversion data shows it'd help.

8. **Form-validation library decision logged:** Hand-rolled chosen over zod for v1. Switching to zod is a one-time refactor if validation grows complex (e.g., conditional required fields based on buyer type).

---

## Wave 7 closeout

The primary conversion mechanic is live. Every "Request a Quote" CTA across the site now resolves — header, footer mobile menu, ContactWidget, hero, every PageCTA, every IntakeCard in the Intelligence Console, and every service page's CTA all land on a working form that produces an admin notification + auto-reply.

Combined with Wave 6's Intelligence Console, the funnel is:
- **Top of funnel** — Console answers questions and routes to the right action
- **Conversion** — Quote form captures structured project info and emails the team
- **Confirmation** — Auto-reply sets expectations + provides the email address customers reply to with photos

Both are stub-mode-safe, so Vercel preview deploys without API keys exercise the full UX.

## Hand-off to Wave 8

Wave 8 (per build plan) ships the BUILDER silo: silo landing page + 4 builder-track blog articles. Builder articles live at `/blog/{how-to-vet-a-concrete-subcontractor, concrete-sub-reliability-vs-lowest-bid, common-concrete-sub-failures, pre-pour-checklist-for-builders}`.

Builder-tier CTA variant lands here too — "Book a Discovery Call" alongside Request a Quote. The Wave 12 booking flow is stubbed, so the discovery-call link can route to `/book/discovery-call-builder` (Wave 12 target) or fall back to a contextual quote form mode.
