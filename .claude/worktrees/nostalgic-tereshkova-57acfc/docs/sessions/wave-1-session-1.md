# Wave 1 Session 1 — Design tokens + fonts + motion + contact constants

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (66s compile, 0 errors, 0 warnings)

---

## Deliverables

### globals.css — full Tailwind v4 `@theme` block
- 12 color tokens (brand orange, industrial neutrals, data accents)
- 8 wash background tokens
- Motion easing curve
- Radius tokens
- Section background classes (`.section-anthracite`, `.section-bone`, etc.)
- Card treatments (`.card-light`, `.card-dark`)
- Status accent classes (`.status-steel`, `.status-rebar`, etc.)
- Dark scrollbar
- Reduced motion support

### Font loading
- **Inter** (400–900) via `next/font/google` → `--font-inter`
- **JetBrains Mono** (400–600) via `next/font/google` → `--font-jetbrains-mono`
- Connected to Tailwind via `@theme inline` to avoid `:root` resolution issue with next/font scoped variables
- Both fonts confirmed loading in browser (Inter at weight 800, JetBrains Mono at weight 600)

### next.config.ts
- Image optimization: WebP + AVIF formats
- Device sizes configured for responsive breakpoints

### SVG overlay assets
- `public/topo-bg-dark.svg` — Wasatch-style elevation contours (white lines, 7% opacity)
- `public/topo-bg-light.svg` — same contours in anthracite for light backgrounds (6% opacity)
- `public/engineer-grid.svg` — 1/8" grid pattern (5% opacity, tiling)

### Constants
- `src/lib/contact.ts` — phone, email, address, hours, social links
- `src/lib/firm-facts.ts` — years, projects, team, founders, service area, tagline
- `src/lib/motion.ts` — EASE curve, durations, stagger intervals, scroll-reveal variants (fadeUp, fadeUpChild, staggerContainer, fadeRight, scrollRevealProps)

### Root metadata
- `src/app/layout.tsx` — full `Metadata` export with title template, description, keywords, OpenGraph, Twitter card, robots, favicon/apple-touch-icon

### Verification page
- `src/app/page.tsx` — temporary design-system check page with all token sections:
  - Dark hero with topo-bg overlay + brand orange CTA
  - KPI ribbon with firm-facts data
  - Palette swatch grid (12 colors)
  - Sand-wash section with engineer-grid overlay + spec-block card

---

## Verification

- ✅ `npm run build` passes clean
- ✅ Inter + JetBrains Mono confirmed via browser inspection
- ✅ All CSS color variables accessible via Tailwind utilities
- ✅ SVG overlays render on dark and light surfaces
- ✅ Card treatments render correctly
- ✅ Mono eyebrow style renders at 10px, uppercase, tracking-[0.15em]

## Decisions / Notes

1. **Font wiring:** `@theme inline` needed for `--font-sans` / `--font-mono` because `@theme` (non-inline) sets variables on `:root`, but next/font scopes `--font-inter` to the body class. `@theme inline` inlines the `var()` reference into utilities, resolving at the element level where the variable exists.

2. **shadcn import removed:** The scaffold had `@import "shadcn/tailwind.css"` and oklch-based variables from shadcn init. Replaced entirely with the ZionCS design system. shadcn components (button, card, etc.) still exist in `src/components/ui/` but their styling will need updating to use ZionCS tokens in Wave 1 Session 2.

3. **Build timing:** Cold build was 66s (not the 8min warned in CLAUDE.md — likely because only 1 page exists). Will increase as pages are added.

---

## Hand-off to Session 1.2

Session 1.2 builds: Layout shell (Header + Footer + MobileMenu + ContactWidget), wrapping all pages. Dependencies met — design tokens, fonts, motion utilities, and contact constants are all in place.
