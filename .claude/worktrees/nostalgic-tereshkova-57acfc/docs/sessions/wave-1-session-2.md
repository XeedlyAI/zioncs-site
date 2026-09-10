# Wave 1 Session 2 — Layout shell + header + footer + mobile menu

**Date:** 2026-05-04
**Branch:** main
**Build:** ✅ passes clean (9.7s warm compile, 0 errors, 0 warnings)

---

## Deliverables

### `src/components/layout/Header.tsx`
- Fixed-position, full-width, scroll-morph (transparent + transparent border at top → `bg-anthracite/85` + `backdrop-blur-md` + concrete border on `scrollY > 50`)
- Height shrinks `h-20 → h-14` on scroll; logo shrinks `h-11 → h-9`
- White-variant logo (`zioncs-logo-horizontal-white.png`) — works on the dark hero and on the scrolled morph state
- Desktop (≥lg): nav links (mono 11px uppercase tracking-[0.12em]) + phone link + orange "Request a Quote" CTA
- Mobile (<lg): phone icon link + hamburger trigger
- All transitions use the EASE curve

### `src/components/layout/MobileMenu.tsx`
- Right-slide drawer (85% width, max-w-sm) with anthracite/70 backdrop overlay
- Framer Motion: backdrop fade (0.22s) + drawer slide (0.32s), both EASE
- Logo at top, nav links (Inter bold, hover → brand-orange), close button
- Bottom action area: full-width orange "Request a Quote" + phone CTA + business hours
- Closes on overlay click, X button click, or any nav link click
- Proper `role="dialog"`, `aria-modal="true"`, `aria-label`

### `src/components/layout/Footer.tsx`
- Server component (no client interactivity)
- `bg-anthracite` + topo-bg-dark overlay at 0.6 opacity
- **CTA panel** at top: orange-mono eyebrow + "Let's talk about your project." headline + dual CTA (orange Request a Quote + phone)
- **4-column nav grid** (md:grid-cols-12): Brand block (col-span-4) + Services (3) + Company (3) + Service Area (2)
- Service Area column lists 6 cities + "View all →" link to state pillar
- Brand block: white logo, tagline, phone/email/address with lucide icons, business hours mono caption
- **Bottom bar**: copyright + Privacy/Terms legal links

### `src/components/layout/ContactWidget.tsx`
- Mobile-only sticky bottom-bar (`lg:hidden fixed bottom-0`) per ZIONCS_DELTAS § Persistent CTA system
- 2-column grid: ghost "Call" + filled orange "Quote"
- `env(safe-area-inset-bottom)` padding so iOS Safari home-indicator doesn't overlap
- z-40 (below header z-50, below mobile menu z-60/70)

### `src/components/layout/Layout.tsx`
- Wraps every page: `<Header /> <main pb-20 lg:pb-0> <Footer /> <ContactWidget />`
- `pb-20 lg:pb-0` on main clears the mobile contact widget on small screens

### `src/lib/nav.ts`
- `PRIMARY_NAV` — Services, Projects, About, Blog, Contact
- `FOOTER_SERVICES` — 6 top services (driveways, stamped, pool decks, patios, repair, commercial flatwork)
- `FOOTER_COMPANY` — About, Projects, Blog, plus B2B silos (Builders, Commercial, Multi-Site)
- `FOOTER_LEGAL` — Privacy, Terms

### Renames
- `header.tsx` → `Header.tsx` (PascalCase per build plan)
- `footer.tsx` → `Footer.tsx`

### Wiring
- `src/app/layout.tsx` — wraps `{children}` in `<Layout>`
- `src/app/page.tsx` — replaced design-token verification page with a clean Wave 1.2 placeholder (anthracite hero + bone section). Real homepage lands in Wave 2.1.

---

## Verification

- ✅ `npm run build` passes clean
- ✅ TypeScript compiles
- ✅ Static prerender for `/` succeeds
- ✅ All imports resolve
- ✅ Lucide icons (Menu, X, Phone, Mail, MapPin) imported correctly

## Decisions / Notes

1. **Logo variant:** Using the white logo across all states (header transparent + scrolled). The colored logo is reserved for light backgrounds (footer light variant doesn't exist — footer is anthracite). When Wave 2.2 builds light-hero pages, the header will need conditional logo swapping based on hero background; for now, the homepage hero is anthracite so white logo works throughout.

2. **Header z-index hierarchy:** Header z-50, ContactWidget z-40, MobileMenu overlay z-60, MobileMenu drawer z-70. Mobile menu wins over both header and contact widget when open.

3. **No `useReducedMotion` in MobileMenu:** Framer Motion respects `prefers-reduced-motion` automatically when the global CSS rule from `globals.css` is in effect. The CSS rule sets `animation-duration: 0.001ms !important` which Framer Motion respects.

4. **ContactWidget shown on all pages for v1:** The library standard hides it on `/` and `/contact`. ZionCS keeps it everywhere for mobile because the homepage hero scrolls away quickly and we want phone/quote always one tap away. Will revisit post-launch based on funnel data.

---

## Hand-off to Wave 2 Session 1

Wave 2.1 builds the real homepage:
- Hero (full-bleed parallax IMG-01 + topo overlay + dual CTA + KPI ribbon)
- KPI Ribbon (4-column with sparklines)
- Numbered Service Grid (11 services)
- Why ZionCS USPs (orange-tinted accent section)
- Project Gallery preview (placeholder until Wave 5)
- Process Timeline (How We Work)
- Home Intelligence Console (placeholder until Wave 6)
- Social Feed preview (placeholder until Wave 5)
- Home CTA panel

Dependencies met: Layout shell + design tokens + fonts + motion utilities + contact constants are all in place. The `page.tsx` placeholder gets replaced wholesale in Wave 2.1.

Prerequisite for Wave 2.1: IMG-01 (homepage hero photo) from Track A Session 1, OR a placeholder gradient until that image lands.
