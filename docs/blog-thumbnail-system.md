# Blog Thumbnail Design System

**Status:** Proposal for review
**Author:** Wave planning, 2026-05-05
**Decision needed:** approve direction → execute as a single wave

## Why thumbnails (and why these specifically)

The blog index currently shows text-only post cards. Squishing the existing hero photos into thumbnail format would amplify their weakest characteristics (random center-crops, soft focal points). A purpose-built thumbnail system in the **data-artifact aesthetic** — the same visual language as the Intelligence Console, ServiceSpecBlock, and the inline SVG components like `FreezeThawCycleChart` and `SoilCompositionDiagram` — extends the brand instead of muddying it.

This is the same convention used by Stripe Press, Linear, Anthropic's blog, etc.: editorial surfaces use **designed visuals**, not photo crops.

---

## System spec

### Format

- **Aspect ratio:** 4:3 (1.33:1)
- **Render target:** ~640×480px display, served as inline React SVG components for crispness, theme control, and tiny payload (~1-3KB each)
- **File location:** `src/components/blog/thumbnails/Thumb{ArticleSlug}.tsx`
- **Composition:** safe area = inner 80%, content padded from edges

### Surfaces & color

| Use | Token | Hex |
|---|---|---|
| Background | `--color-anthracite-elevated` | `#26221C` |
| Topo overlay (8% opacity) | `topo-bg-dark.svg` | — |
| Primary line / structure | `--color-bone` | `#F5F0E6` |
| Muted line / inactive | `--color-stone` | `#A99F8B` |
| Numbers & captions | `--color-steel-light` | `#5C8AA0` |

### Silo accents (one per article, top-left tag color)

| Silo | Accent | Token |
|---|---|---|
| RESIDENTIAL | `#F26B1F` (brand-orange) | `--color-brand-orange` |
| BUILDER | `#3F6B7D` (steel) | `--color-steel` |
| COMMERCIAL | `#C4421F` (rebar) | `--color-rebar` |
| ENTERPRISE | `#C9A66B` (gold) | `--color-gold` |

### Typography

- **Tag** (top-left): JetBrains Mono, 10px, uppercase, 0.18em tracking, silo-accent color. Format: `// {SILO} // {N} OF 14`
- **Title** (in-artifact, when used): JetBrains Mono, 13–14px, uppercase, 0.12em tracking, bone
- **Labels** (chart axes, scorecard rows, etc.): JetBrains Mono, 9–11px, uppercase, 0.12em tracking, bone or stone depending on emphasis
- **Numbers** (steps, percentages, IDs): JetBrains Mono tabular-nums, sized for the artifact

### Allowed visual vocabulary

These are the only artifact types — keeping the vocabulary tight is what makes the set cohere:

1. **Cross-section diagram** (annotated geological/structural slice with labels)
2. **Scorecard / checklist** (numbered rows with check/X marks, weighted bars)
3. **Decision flowchart** (start node, branches, decision diamonds, terminal nodes)
4. **Numbered grid** (problem catalog or step inventory in 2×N or 3×N layout)
5. **Timeline / phase chart** (horizontal nodes connected by line, labeled below)
6. **Network/map diagram** (Utah outline OR hub-and-spoke nodes)
7. **Comparison bars** (two-column or before/after vertical bars)
8. **Gantt-style schedule** (overlapping horizontal bars with phase labels)

Each thumbnail picks ONE artifact type — never combines.

### Layout template

```
+----------------------------------+
| //RES // 02 OF 14                |  ← silo tag, top-left
|                                  |
|        [ARTIFACT VISUAL]         |  ← centered, ~75% of card height
|                                  |
|                                  |
| {OPTIONAL CAPTION LINE}    →     |  ← bottom-right: read time or article-#
+----------------------------------+
```

The thumbnail does NOT include the article title — the post card already has the title below the image. The artifact + tag is the entire thumbnail.

---

## Per-article concepts (all 14)

### RESIDENTIAL silo (5 articles)

#### 01. How to Choose a Concrete Contractor in Utah
**Role:** front-door
**Artifact:** Scorecard
**Visual:** A 4-row vendor scorecard with criteria (LICENSED · INSURED · LOCAL · WARRANTIED). Three columns labeled VENDOR A / B / C. Rows show check marks; column C has all 4 checked + a small orange highlight border. Reads as "the right choice is the most-checked column."

#### 02. Why Utah Concrete Cracks
**Role:** diagnostic
**Artifact:** Cross-section + freeze-thaw cycle chart
**Visual:** Top half — sine-wave temperature curve crossing 32°F threshold dotted line, with 4 cycle markers. Bottom half — concrete cross-section showing crack propagation with annotations (SURFACE / SUBGRADE / WATER INFILTRATION). Mono with one orange accent on a labeled crack.

#### 03. Driveway Replacement vs Repair
**Role:** decision-framework
**Artifact:** Decision flowchart
**Visual:** Start node `EXISTING DRIVEWAY` → diamond `>30% AREA AFFECTED?` → branches to `REPAIR` (gold path, smaller terminal node) and `REPLACE` (orange path, larger terminal node). Two more decision diamonds along the way. Clean mono geometry, accent colors only on terminals.

#### 04. 10 Common Residential Concrete Problems
**Role:** magnetizer
**Artifact:** Numbered grid
**Visual:** 5×2 grid of mono icons numbered 01–10 with single-word labels (CRACKING · SPALLING · SCALING · HEAVING · PITTING · DISCOLORATION · CURLING · POPOUTS · MAP-CRACKS · DELAM). Each cell is a tiny diagrammatic icon, not a literal photo. Mono throughout; a single icon (#01 CRACKING) gets an orange highlight.

#### 05. What to Expect When You Request a Quote
**Role:** process-guide
**Artifact:** Timeline
**Visual:** Horizontal 5-node timeline labeled CONTACT · WALK · MEASURE · QUOTE · DECIDE. Below each node, a duration: `DAY 0 · DAY 1-3 · DAY 3-5 · DAY 7 · YOURS`. Connecting line is mono; one node mid-timeline accented orange.

### BUILDER silo (4 articles)

#### 06. How to Vet a Concrete Subcontractor (7 Questions)
**Role:** front-door
**Artifact:** Scorecard with 7 numbered questions
**Visual:** 7 numbered rows (01–07), each row is a question label (CAPACITY · CREW SIZE · INSURANCE · INSPECTOR-FAILS · MAKE-RIGHT POLICY · SCHEDULE-DISCIPLINE · REFERENCES) with a checkbox. Some boxes empty, some checked. Title in spec-block style: `// VENDOR-VETTING · 7 QUESTIONS //`. Steel-blue accent on the title bar.

#### 07. Reliability vs Lowest Bid
**Role:** decision-framework
**Artifact:** Comparison bars
**Visual:** Two vertical bars side by side. Left bar labeled `LOWEST BID` is short on COST but tall on RISK (red rebar accent on the risk bar). Right bar labeled `RELIABILITY` is taller on COST but short on RISK (steel accent). Numerical labels at bar tops. Reads at a glance as "cheap up front, costly later."

#### 08. Common Concrete Sub Failures
**Role:** diagnostic
**Artifact:** Cross-section with failure-point annotations
**Visual:** Annotated cross-section of a residential concrete pour. Six labeled failure points marked with red `X`s and pull-out captions: SUBGRADE COMPACTION · REBAR PLACEMENT · MIX RATIO · JOINT SPACING · CURE PROTECTION · FINISH TIMING. Mono structural lines, rebar-red on the X markers and one selected pull-out.

#### 09. Pre-Pour Checklist for Builders
**Role:** process-guide
**Artifact:** Printed-checklist artifact
**Visual:** 8-item checklist styled like a printed inspection card. Each line: numbered + label + checkbox. Items: PERMITS · UTILITIES MARKED · SUBGRADE COMPACTED · REBAR INSPECTED · FORMS PLUMB · MIX TICKET CONFIRMED · FINISHERS ON SITE · CURE PROTECTION READY. First 5 checked, last 3 empty (suggesting "in progress"). Steel-blue accent on the title bar.

### COMMERCIAL silo (3 articles)

#### 10. Utah Soil Conditions and Your Commercial Foundation
**Role:** diagnostic
**Artifact:** Soil cross-section
**Visual:** Vertical stratigraphic section with labeled layers: TOPSOIL (4") · BENTONITIC CLAY (12") · GRAVEL/BASE (8") · BEDROCK. A foundation footing penetrates through topsoil into the clay/gravel interface. Labels in mono, depths tabular-nums. Rebar-red accent on the bedrock line.

#### 11. Commercial Concrete Pour Scheduling
**Role:** process-guide
**Artifact:** Gantt-style schedule
**Visual:** 5-row Gantt with overlapping horizontal bars: PERMITS · SUBGRADE · POUR · CURE · INSPECTION. Time axis at top labeled DAY 1–DAY 14. Bars in steel-blue except POUR which is rebar-red and labeled "CRITICAL PATH." Reads as "we plan around your schedule, not ours."

#### 12. Evaluating Commercial Concrete Subs
**Role:** decision-framework
**Artifact:** Weighted scorecard
**Visual:** 5 evaluation rows (CAPACITY · INSURANCE · REFERENCES · SAFETY · PRICING) with weighted bars to the right showing weights as percentages (25% / 20% / 20% / 20% / 15%). Title bar: `// PROCUREMENT RUBRIC //`. Rebar-red accent on the title bar; bars in mono.

### ENTERPRISE silo (2 articles)

#### 13. Multi-Site Concrete Maintenance Programs
**Role:** front-door
**Artifact:** Utah map with site nodes
**Visual:** Simplified Utah state outline. 6 dots representing sites (Salt Lake, Lehi, Provo, Park City, Ogden, St. George — actual placement). Faint lines connect each site to a central labeled hub: `ZIONCS HOME BASE · SANDY UT`. Gold accent on the hub. Mono on the state outline and dots.

#### 14. Vendor Consolidation
**Role:** decision-framework
**Artifact:** Before/after network diagram
**Visual:** Two side-by-side small diagrams. **Left** (BEFORE): 5 site nodes, each connected to a different vendor node — chaotic, 5 vendor nodes scattered. Label: `BEFORE · 5 VENDORS`. **Right** (AFTER): same 5 site nodes, all connected to 1 central vendor hub. Label: `AFTER · 1 PARTNER`. Gold accent on the AFTER hub. Reads at a glance.

---

## Implementation plan

1. **Approve this direction first.** I will not start coding until you confirm.
2. **Build a `BlogThumbnail` shared component** that takes `slug` and renders the right thumbnail. Encapsulates the silo tag, layout template, and topo background — so individual artifact components stay small and pure.
3. **Build all 14 artifact components in one wave.** Start with one of each silo (4 components — RES, BUILDER, COMMERCIAL, ENTERPRISE) to lock the visual language. If those look right, finish the other 10.
4. **Wire into `PostCard`.** Update the card to render `<BlogThumbnail slug={meta.slug} />` above the title. Maintain text-only fallback for any post that doesn't have a thumbnail mapped (defensive).
5. **Update the blog index page.** Cards now include the thumbnail. Adjust spacing, hover state, and grid gap if needed.
6. **Single commit, one wave.** Never partial — all 14 done together for cohesion, then ship.

## Estimated scope

- ~1 hour for the design lock (build 4 sample components — one per silo)
- ~2-3 hours for the remaining 10 artifact components
- ~30 min for `BlogThumbnail` shell + PostCard integration
- ~15 min for index page adjustments
- **Total: roughly half a day of focused work, single commit at the end**

## Risk to acknowledge

The thing that breaks this is **inconsistency across the 14**. If two thumbnails feel like they belong to different design systems, the whole set undermines the page. The design lock at step 3 is non-negotiable — we don't proceed past it until the 4 sample silo components feel like a single family.

---

## What to confirm before I start

1. **Direction approved?** (data-artifact thumbnails, hand-built SVG, no photos)
2. **Color/silo accent assignments OK?** (RES=orange, BUILDER=steel, COMMERCIAL=rebar, ENTERPRISE=gold — these match the existing site)
3. **4:3 aspect ratio OK?** Or do you want square (1:1) for a tighter card grid?
4. **Are any of the 14 specific artifact concepts wrong?** Read through the per-article list — flag any where the artifact doesn't fit the article's actual content.

Once approved, I'll execute as a single wave and ship one commit.
