# Wave 6 Session 1 — Intelligence Console infrastructure + mini console

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (0 errors, 0 warnings, 26 static routes + 1 dynamic API route)

---

## Deliverables

### Types
- `src/types/console.ts` — `ConsoleAction` discriminated union (calendar / contact_info / intake / direct_chat), `ConsoleResponse` (body + actions), `ConsoleQuery` (id + label + response)

### DOM event wiring
- `src/components/console/ConsoleEvent.ts` — `CONSOLE_EVENT` constant (`zioncs:console-query`), `dispatchConsoleQuery()`, `scrollToConsole()`. Custom DOM events instead of React context — same pattern as the standards library.

### Pre-canned responses
- `src/data/console-queries.ts` — 8 query/response pairs covering every routing path:
  - `lead-time` → intake
  - `residential-repair` → intake
  - `commercial-rfp` → calendar (commercial)
  - `service-area` → contact_info
  - `stamped-pricing` → intake (no published pricing)
  - `pool-deck-replacement` → intake
  - `multi-site` → calendar (enterprise)
  - `builder-partnership` → calendar (builder)

### System prompt
- `src/lib/console-system-prompt.ts` — operator-grade voice anchors, full ZionCS company facts, action routing matrix. Instructs Claude to emit a trailing ```actions JSON block parsed by the API route.

### API route
- `src/app/api/query/route.ts` — POST endpoint backed by Anthropic Messages API (model `claude-sonnet-4-5` configurable via `ANTHROPIC_MODEL` env). Validates query (non-empty, ≤2,000 chars), parses out the actions JSON fence, logs `visitor_query` events to stdout. Returns `{ content, actions, query }`.
  - **Stub fallback** when `ANTHROPIC_API_KEY` is unset: routes the query through a keyword-based intent classifier (commercial / builder / enterprise / pricing / service-area) and returns a sensible action card. Lets the UI work in dev/staging without burning API credits or blocking the build.
  - Graceful 502 with phone fallback action on upstream errors.

### Components
- `src/components/console/SuggestionPills.tsx` — clickable pill row, `compact` variant for the hero mini, mono uppercase styling.
- `src/components/console/ConsoleResponseRenderer.tsx` — pure-presentational module that handles processing state (steel-light pinging dot + mono caption), empty state ("Awaiting query…"), compact body truncation (first paragraph or 200 chars at word boundary), and a `renderActions` slot so each console can plug in its own action card module.
- `src/components/console/IntelligenceConsoleMini.tsx` — hero mini console:
  - Dark glass card chrome with rebar live-dot header + `zioncs://live` mono caption
  - Suggestion pills (4 visible by default, configurable via `pillIds`)
  - Active query echo line above the response
  - `AnimatePresence mode="wait"` swap on response/processing transitions (0.22s EASE)
  - Inline link-style action cards (calendar → `/book/[bookingType]`, contact_info → tel/mailto, intake/direct_chat → `/quote`). Wave 6.2 swaps in the full `ConsoleActions` module with inline forms.
  - Freeform input with focus-within border tint, "Query →" submit, disabled when empty
  - "See full response in console ↓" button dispatches `CONSOLE_EVENT` and scrolls to `#console` (target lands in Wave 6.2)
  - "↻ clear" reset + latency caption + model footer
  - Pre-canned queries simulate 600–1000ms latency (random) so canned responses feel like real queries instead of instant dictionary lookups

### Homepage wiring
- `src/components/home/HomeIntelligenceConsole.tsx` — Wave 2.1 placeholder replaced with the real `IntelligenceConsoleMini`. Section now mounts at `id="console-mini"` (the Wave 6.2 full console will mount at `id="console"` to match the dispatched-event scroll target).

---

## Verification

- ✅ `npm run build` passes clean
- ✅ Mini console renders in homepage hero section
- ✅ Suggestion pills trigger pre-canned responses with realistic latency
- ✅ Freeform input → POST `/api/query` → Anthropic-backed response (stub fallback when key missing)
- ✅ "See full response" dispatches CONSOLE_EVENT (full console handler ships in 6.2)
- ✅ Action cards render with proper accent colors per type
- ✅ API route compiles as `ƒ /api/query` (Dynamic, server-rendered on demand)

## Notes

1. **Stub fallback is intentional:** Without `ANTHROPIC_API_KEY`, the console still works — keyword-classified responses route the user to a sensible action. Production deploy needs the real key, but dev environments and Vercel preview deploys without env vars don't 500. The `stubbed: true` flag in the response lets the client tell apart real vs stub if we ever want to badge it.

2. **Model is `claude-sonnet-4-5`:** Per the Anthropic SDK + Claude API skill conventions on this machine. Configurable via `ANTHROPIC_MODEL` env if we need to swap.

3. **Action card rendering is inline in the mini for 6.1:** The build plan has `ConsoleActions.tsx` as a 6.2 deliverable (full inline-form intake + chat). The mini's link-style cards in 6.1 are functional today — they route to the right pages. 6.2's `ConsoleActions` will replace the inline rendering and add the inline intake form + direct-chat input experience.

4. **Latency simulation for canned queries:** Set to `600 + random(400)` ms — feels live but not snappy-fake. The standards library uses the same range for the same reason.

5. **The full console section anchor target (`#console`) doesn't exist yet:** "See full response" scrolls to it but it's a 6.2 deliverable. In 6.1, clicking the link dispatches the event but the scroll target is missing — visible "noop" until 6.2 ships. Acceptable interim state.

6. **API route logs `visitor_query` events as JSON to stdout:** Picked up by Vercel logs for observability without needing a separate logging pipeline.

---

## Hand-off to Wave 6 Session 2

Wave 6.2 ships:
- `IntelligenceConsole.tsx` — full section component, mounts at `#console` so the mini's "See full response" link works
- `ConsoleActions.tsx` — full action-card module with inline intake form (name/email/phone/message → POST `/api/intake`), direct-chat input (POST `/api/direct-message`), all variants of calendar + contact_info handled inline
- `/api/intake/route.ts` and `/api/direct-message/route.ts` — Resend-backed endpoints
- ENV: `RESEND_API_KEY` (placeholder for now)
- Action routing tweaks in the system prompt as needed
- Homepage updated to add the full console section between the hero and services intro

Dependencies met. Mini console + canned queries + system prompt + API base all in place — 6.2 layers the form mechanics on top.
