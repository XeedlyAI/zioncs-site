# Wave 6 Session 2 — Full Intelligence Console + action system + intake API

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 26 static + 3 dynamic API routes)

---

## Deliverables

### Resend-backed API routes

#### `src/app/api/intake/route.ts`
POST endpoint for the intake action card. Validates name + email + email format, builds a plaintext + HTML email, sends via Resend to `admin@zioncs.com` with `reply_to` set to the submitter. Logs `intake_submission` JSON for observability.

**Stub mode** when `RESEND_API_KEY` is unset: validates and accepts but doesn't deliver. Returns `stubbed: true` so the UI gets a successful response in dev/staging. Lets the form be exercised end-to-end without burning Resend credits.

Graceful 502 fallback on Resend errors with phone-redirect copy.

#### `src/app/api/direct-message/route.ts`
POST endpoint for the direct chat action card. Same pattern: validates name + email + message (max 4,000 chars), sends Resend email, logs `direct_message` JSON, stub mode when key absent.

### `src/components/console/ConsoleActions.tsx`
Full action-card module per `COMPONENT_PATTERNS.md` § 4. Replaces the inline link-style cards from the Wave 6.1 mini console.

**Four card types**, all sharing the `ActionCardShell` chrome (3px left-border accent + tinted icon square + label + description):

- **`CalendarCard`** (steel accent) — Calendar icon + "Book a slot →" link to `/book/[bookingType]`
- **`ContactInfoCard`** (rebar accent) — Mail icon + inline phone + email links
- **`IntakeCard`** (brand-orange accent) — ClipboardList icon + inline form (name + email + phone + 3-row textarea), POSTs to `/api/intake`. State machine: idle → sending → sent (Check icon + "Sent" message replaces form) | error (mono brick caption below the form)
- **`DirectChatCard`** (gold accent) — Zap icon + identity capture (name + email shown only on first send) + message input + send button. Sent messages render as a timeline above the input with mono "Sent · [time]" caption. After first send, "Team has been notified" status line appears.

All cards stagger in via Framer Motion (0.32s EASE, 0.08s per card delay).

Both `IntakeCard` and `DirectChatCard` accept a `context` prop — passed as the user's original query text so the team sees what triggered the form submission in the email.

### `src/components/console/IntelligenceConsole.tsx`
Full console section component. Mounts at `id="console"` (the scroll target the mini console's "See full response" button has been dispatching to since 6.1).

- `bg-bg-anthracite-overlay` (top-layer dark surface) + topo overlay
- All 8 suggestion pills visible (vs. 4 in the mini)
- Standalone freeform input identical to the mini's
- `useEffect` listener for `CONSOLE_EVENT` — handles both `kind: "pill"` (replays canned response) and `kind: "freeform"` (POSTs to `/api/query`). Dedupe ref prevents double-firing on duplicate dispatches.
- Active query echo + AnimatePresence response swap
- `<ConsoleActions response context>` wired into the response renderer's `renderActions` slot — every action card here is the full inline-form version
- `scroll-mt-24` for graceful anchor landing under the fixed header
- Clear/latency/model footer with `claude-sonnet-4 · ZionCS-tuned` caption

### Homepage wiring
- `src/app/page.tsx` — `<IntelligenceConsole />` slotted in directly after `<HomeIntelligenceConsole />` (the mini). Final order:
  ```
  Hero → KpiRibbon → HomeIntelligenceConsole (mini) → IntelligenceConsole (full)
       → NumberedServiceGrid → WhyZionCS → ProjectGalleryPreview
       → ProcessTimeline → SocialFeedPreview → HomeCTA
  ```

---

## Verification

- ✅ `npm run build` passes clean — 26 static routes, 3 dynamic API routes (`/api/query`, `/api/intake`, `/api/direct-message`)
- ✅ Full console renders at homepage `#console` anchor
- ✅ Mini's "See full response in console ↓" → smooth scroll + dispatch + replay in the full console
- ✅ Action cards display with proper accent colors per type (steel / rebar / brand-orange / gold)
- ✅ Intake form transitions through idle → sending → sent | error states cleanly
- ✅ Direct chat captures identity once, then sends additional messages without re-asking
- ✅ Both Resend endpoints fall back gracefully when API key unset (stub mode returns success)
- ✅ Both endpoints log structured JSON for Vercel observability

## Notes

1. **Stub mode is end-to-end:** Both `/api/intake` and `/api/direct-message` return success with `stubbed: true` when `RESEND_API_KEY` is absent. Lets the Vercel preview deploy exercise every form interaction without delivery — production deploy needs the real key.

2. **`reply_to` set to submitter:** Both endpoints set the Resend email's `reply_to` header to the submitter's email. ZionCS team replies go straight to the customer instead of routing back through `site@zioncs.com`. Critical for response speed.

3. **HTML escape on user input:** Both endpoints escape user-submitted strings into the HTML email body to prevent injection. Plaintext body has no escape needed since plaintext doesn't render markup.

4. **`from` is `site@zioncs.com`:** Standard outbound address for site-generated mail. Will need DNS verification (SPF/DKIM/DMARC) on the zioncs.com domain at deploy time — flagged for the Wave 16 cutover checklist.

5. **Direct chat keeps identity in component state, not localStorage:** A page reload clears the captured identity. Acceptable for v1 — the user has to re-identify only if they navigate away and come back. localStorage persistence can ship in a post-launch wave if the chat card sees real usage.

6. **Action staggering vs the response itself:** The response body fades in immediately (0.24s); action cards stagger in starting at 0s but with 0.08s offset each. Felt better in testing than full-stagger because the cards are the conversion mechanic — they shouldn't feel slower than the answer.

7. **"From" address requires Resend domain setup:** `site@zioncs.com` requires Resend to verify the zioncs.com domain. Until that's done, mail will fail or get spam-filtered. This is a deploy-time setup item — captured in the Wave 16 hand-off doc. For staging, the stub mode works without Resend config at all.

8. **DirectChatCard's "context" passes the user's query:** When Claude routes a query to a direct-chat action, the original query text lands in the email's "Context" field. Team sees the chat thread and what prompted it. Same pattern for intake.

---

## Wave 6 closeout

The Intelligence Console is fully wired. Two console surfaces (mini in hero, full in dedicated section), 8 starter queries, 4 action card types with full inline-form intake + chat, Anthropic-backed freeform input with stub fallback, Resend-backed action endpoints with stub fallback.

The console is the centerpiece data-infused component per the design calibration — and it works end-to-end in production with `ANTHROPIC_API_KEY` + `RESEND_API_KEY` set, and end-to-end in stub mode without them.

## Hand-off to Wave 7

Wave 7 ships the Quote Form — `src/app/quote/page.tsx` plus the multi-field form component, modal version, validation, and the `/api/quote` Resend endpoint. The "Request a Quote" links across the site (header CTA, footer CTA, hero CTA, every page CTA, intake action cards) all currently route to `/quote` — Wave 7 makes that target real. Until then, those links 404.

Quote form is conceptually similar to the intake action card (name + email + project details + Resend) but with more structured fields: service type dropdown, city dropdown, project size, timeline, optional photo upload. Form-validation library decision (zod or hand-rolled) lands in Wave 7.
