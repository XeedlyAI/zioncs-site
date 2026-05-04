@AGENTS.md

# Zion Concrete Specialists — Session Rules

Zion Concrete Specialists (zioncs.com) is a Utah concrete flatwork contractor serving the Wasatch Front and St. George. This site is a Next.js 16 rebuild of the existing Webflow site, using the XeedlyAI standards library. This file is the session-start contract.

The library at `C:\Users\shadd\Documents\standards` is canonical. Project-specific overrides live in `ZIONCS_DELTAS.md`.

## Before Starting Any Session

1. `git branch` — confirm you're on `main`
2. `git status` — working tree clean
3. `npm run build` — passes clean (Next 16 cold build ~8 min — redirect output to a log, don't pipe to `tail`)
4. `.env.local` closed in editor (secret-exposure hygiene — close before ANY screenshot)

## Read Order at Session Start

Read in this exact order before writing code:

**Library (always):**
1. `C:\Users\shadd\Documents\standards\CLAUDE.md` — library read order, precedence rules, cross-product invariants
2. `C:\Users\shadd\Documents\standards\standards\DESIGN_SYSTEM.md`
3. `C:\Users\shadd\Documents\standards\standards\COMPONENT_PATTERNS.md`
4. `C:\Users\shadd\Documents\standards\standards\MOTION_AND_INTERACTION.md`

**Library (public-facing surface):**
5. `C:\Users\shadd\Documents\standards\standards\ANIMATION.md`
6. `C:\Users\shadd\Documents\standards\standards\TYPOGRAPHY.md`
7. `C:\Users\shadd\Documents\standards\standards\INTERACTIVE.md`
8. `C:\Users\shadd\Documents\standards\standards\SVG-VISUALS.md`

**Library (read on demand for the task at hand):**
- `skills/SEO-ARCHITECTURE.md` — for silo design and full-site architecture
- `skills/CORE-30-CONTENT-ENGINE.md` + `skills/CORE-30-PROMPT-TEMPLATE.md` — for blog content engine
- `skills/LANDING-PAGE.md` — for any landing-page surfaces
- `skills/BUYER-PERSONA.md` — for persona work
- `skills/CALENDAR-BOOKING.md` — for the booking system
- `skills/CONTENT.md` — voice/banned-words; read before writing copy
- `skills/WEBDEV.md` — Next.js + Tailwind defaults
- `skills/DEPLOY.md` — Vercel workflow

**Project-specific (always):**
9. `ZIONCS_DELTAS.md` — project overrides (color palette, voice, etc.)
10. `briefs/zioncs.md` — the project brief (personas, services, USPs, design direction)
11. The current wave block in `ZIONCS_BUILD_PLAN.md` (once it exists)

## Project-Specific Rules

These will be populated in `ZIONCS_DELTAS.md` as design decisions are made. Cliff notes:

- **Logo:** non-negotiable, must use existing logo (asset in `_inbox/webflow-assets/` — find/extract)
- **Brand colors:** open for refinement (not yet decided)
- **Service area:** Utah — Salt Lake Valley, Utah Valley, St. George, Davis/Weber County, Ogden, Wasatch Front
- **Photography direction:** existing site overdoes "hard hat strong worker" theme tied to logo likeness — refine toward project-craft photography (the work, the result), not just worker portraits
- **Required custom features:** dynamic project gallery (photos + video), Meta social feed scroll
- **Conversion goals:** book discovery call, request quote, attract new leads

## Commit Prefix Convention

- `[feat]` — new user-visible functionality
- `[fix]` — bug fix
- `[style]` — visual / CSS-only changes
- `[refactor]` — code restructuring, no behavior change
- `[docs]` — markdown, comments, session summaries
- `[setup]` — tooling, config, planning assets
- `[content]` — production content swap-ins (real services copy, real project photos)

Every session ends with a single `[feat|fix|...] Wave N Session M — short description` commit and a session summary at `/docs/sessions/wave-{N}-session-{M}.md`. Never chain sessions — explicit stop between them.

## Secret Handling

- `.env.local` stays closed when taking screenshots
- Never commit `.env.local`, `.env.production`, or any file with `RESEND_API_KEY` / `GOOGLE_SERVICE_ACCOUNT_KEY` / `ANTHROPIC_API_KEY`
- Any credential that appeared in a screenshot gets rotated regardless of context

## Next.js 16 Operational Notes

- Build times are long on cold cache (~8 min). Warm rebuilds are ~2–3 min. Plan accordingly.
- If a build is killed mid-compile, clear `.next/lock` before retrying.
- Never pipe build output through `tail` — `tail` buffers until EOF, making a running build look hung. Redirect to a file instead.
- Next 16 warns that the "middleware" file convention is deprecated in favor of "proxy". Rename when touching that area of code.
