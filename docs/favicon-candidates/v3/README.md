# Favicon Candidates v3 — Contained Backgrounds

**Problem caught**: v2 candidates had transparent backgrounds with black arms. On
dark-theme browser tabs and dark iOS wallpapers, black silhouettes vanish — only
the orange hat would have shown. v3 fixes this with **contained backgrounds** so
the icon has its own contrast environment.

3 background-color concepts × 2 variants each = 6 candidates. All Pro + reference.

## Concepts

### Anthracite background (orange hat + cream arms) ← **CHOSEN**
Dark anthracite (#1A1814) rounded square, orange hat, bone-cream arms.
Matches the anthracite-elevated card aesthetic used throughout the site.
Reads strong on light AND dark browser tabs.

- `anthracite-bg-1.png` — dramatic flexing arms, wider footprint
- `anthracite-bg-2.png` ← **WINNER** — cleaner folded-arms, tighter composition,
  better 16×16 scaling

### Cream background (orange hat + black arms)
Bone-cream (#F5F0E6) rounded square, orange hat, black arms.
Stamp-like aesthetic. Strong on dark tabs, slightly washed on white tabs.

- `cream-bg-1.png`, `cream-bg-2.png`

### Orange background (anthracite hat + arms, color-flipped)
Bright safety-orange (#F26B1F) rounded square, anthracite hat + arms.
Maximum brand-color real estate. Bold but the orange-on-orange tab background
in some themes can clash.

- `orange-bg-1.png`, `orange-bg-2.png`

## Decision

**`anthracite-bg-2.png`** wired into:
- `src/app/favicon.ico` (16+32 multi-size)
- `src/app/icon.png` (512×512 modern)
- `src/app/apple-icon.png` (180×180 iOS home-screen)

Browser-tab visibility: ✅ light themes ✅ dark themes ✅ iOS dark wallpapers
