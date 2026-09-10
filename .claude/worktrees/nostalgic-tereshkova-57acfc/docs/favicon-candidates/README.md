# Favicon Candidates — review

Generated via Nano Banana 2 (`gemini-3.1-flash-image-preview`), 2 variants per concept.
This folder is review-only — once a concept is picked, the chosen image gets piped
through the Sharp resize pipeline and emitted as `favicon.ico` / `icon.png` /
`apple-icon.png` in `src/app/`. This folder will be deleted in cleanup.

## Concepts

### Option 1 — X-strap badge (FAILED)
Orange circle with bold black X across it (high-vis vest straps abstracted).

- `opt1-xstrap-1.png`, `opt1-xstrap-2.png`

**Verdict:** model couldn't render a clean X — interpreted "X-strap" as overlapping
chevrons creating busy multi-stripe pattern. Won't read at 16×16. Skip.

### Option 2 — Hard hat (STRONG)
Bold orange construction hard hat silhouette with black brim and accent stripe.

- `opt2-hardhat-1.png`, `opt2-hardhat-2.png` ← **variant 2 is the cleanest of all 8**

**Verdict:** universally readable, pulls the most iconic mascot element, strongest
16×16 legibility. Trade-off: generic — could be any contractor.

### Option 3 — Hat + X stack (PARTIALLY FAILED)
Circular badge with hat on top, X-strap chest below.

- `opt3-stack-1.png`, `opt3-stack-2.png`

**Verdict:** hat half is fine, X half has the same chevron problem as Option 1. Skip.

### Option 4 — Z lettermark + hat (STRONG)
Bold Z in orange on anthracite rounded square, with construction hat shape above.

- `opt4-zmark-1.png` ← **variant 1 is the winner of this set**, `opt4-zmark-2.png`

**Verdict:** uniquely ZionCS, distinctive long-term brand mark. Trade-off: more
abstract — needs visitor to learn the abstraction, less immediate "construction"
read.

## Decision pending

Picking between **Option 2 var 2 (hard hat)** and **Option 4 var 1 (Z + hat)**.

| | Option 2 (Hard Hat) | Option 4 var 1 (Z + Hat) |
|---|---|---|
| Reads as | Construction (universal) | ZionCS (specific) |
| Brand-uniqueness | Low | High |
| Client emotional | Sees mascot's hat — happy | Sees abstract Z — needs explaining |
| 16×16 legibility | Excellent | Good |
| 180×180 (Apple) | Fine | Better |
