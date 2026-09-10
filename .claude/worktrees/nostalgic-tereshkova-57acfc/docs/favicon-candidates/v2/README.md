# Favicon Candidates v2 — Pro + Reference Image

**Tool change**: Nano Banana **Pro** (`gemini-3-pro-image-preview`) — Google's
flagship image model with materially better structural accuracy than v1's
default model. Plus the original mascot fed as `--reference` so the model
extracts elements from the actual brand asset rather than generating from text alone.

Six candidates, three concepts, two variants each. **All dramatically better
than v1.**

## Concepts

### Hat + Folded Arms (concept-A)
Distilled the mascot to two iconic elements: orange hat dome + bold black
folded muscular arms. Negative space between them works as a true icon —
the eye fills in the body.

- `hat-arms-1.png` — clean, balanced
- `hat-arms-2.png` ← **strongest single image of all 6** — refined hat with
  detail, dramatic dynamic arms

### Vest + Hat + Arms (concept-B)
Full mascot abstraction. Most brand-specific.

- `vest-hat-arms-1.png` — proper bold V/X-strap, classic high-vis vest read,
  best at large sizes (apple-icon 180×180)
- `vest-hat-arms-2.png` — vest with parallel straps (less dramatic than v1)

### Hat Only (concept-C)
Most distilled. Maximum 16×16 readability.

- `hat-only-1.png` — bold dome, clean brim
- `hat-only-2.png` — slightly more refined hat shape

## Honest assessment

| Candidate | 16×16 | 32×32 | 180×180 | Brand-specific | Pick? |
|---|---|---|---|---|---|
| hat-arms-1 | OK | Good | Good | Med | candidate |
| **hat-arms-2** | OK | **Excellent** | **Excellent** | **High** | **TOP PICK** |
| vest-hat-arms-1 | Busy | Good | **Excellent** | **Highest** | use for apple-icon |
| vest-hat-arms-2 | Busy | OK | OK | High | skip |
| **hat-only-1** | **Excellent** | Excellent | OK | Low | use for favicon.ico |
| hat-only-2 | Excellent | Excellent | OK | Low | candidate |

## Recommended path

**Two-tier rollout** for graceful complexity scaling:

| File | Size | Asset | Why |
|---|---|---|---|
| `favicon.ico` | 16+32 | **hat-only-1** | Max readability at small sizes |
| `icon.png` | 512 | **hat-arms-2** | Richer at larger sizes, mascot's signature pose distilled |
| `apple-icon.png` | 180 | **vest-hat-arms-1** | iOS home-screen has room for the full brand mark |

Or simpler one-image-fits-all: **hat-arms-2** scales from 32 up. At 16 the
arms will get muddy but the orange dome still reads.
