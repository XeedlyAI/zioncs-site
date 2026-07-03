import type { PostMeta } from "@/types/post";
import { getAllPostSlugs } from "@/data/posts";

/**
 * Blog post thumbnail — a designed data-artifact in the same visual language
 * as the IntelligenceConsole and ServiceSpecBlock. Each post gets one of
 * 8 allowed artifact types (cross-section, scorecard, flowchart, numbered
 * grid, timeline, network/map, comparison bars, Gantt) — never combined.
 *
 * Spec: docs/blog-thumbnail-system.md
 *
 * Hand-built SVG at viewBox 320x240 (4:3). Renders in the post card above
 * the silo eyebrow. Falls back to a neutral plate if the slug isn't mapped.
 */

interface BlogThumbnailProps {
  meta: PostMeta;
}

const SILO_ACCENT: Record<PostMeta["siloIntent"], string> = {
  RESIDENTIAL: "#F26B1F", // brand-orange
  BUILDER: "#3F6B7D",     // steel
  COMMERCIAL: "#C4421F",  // rebar
  ENTERPRISE: "#C9A66B",  // gold
};

const SILO_LABEL: Record<PostMeta["siloIntent"], string> = {
  RESIDENTIAL: "RES",
  BUILDER: "BUILDER",
  COMMERCIAL: "COMMERCIAL",
  ENTERPRISE: "ENTERPRISE",
};

const ARTIFACT_NUMBER: Record<string, number> = {
  "how-to-choose-a-concrete-contractor-in-utah": 1,
  "why-utah-concrete-cracks": 2,
  "driveway-replacement-vs-repair": 3,
  "10-common-residential-concrete-problems": 4,
  "what-to-expect-when-you-request-a-concrete-quote": 5,
  "how-to-vet-a-concrete-subcontractor": 6,
  "concrete-sub-reliability-vs-lowest-bid": 7,
  "common-concrete-sub-failures": 8,
  "pre-pour-checklist-for-builders": 9,
  "utah-soil-conditions-commercial-foundations": 10,
  "commercial-concrete-pour-scheduling": 11,
  "evaluating-commercial-concrete-subs": 12,
  "multi-site-concrete-maintenance-programs": 13,
  "vendor-consolidation-concrete-contractor": 14,
  "concrete-sealing-utah": 15,
  "best-time-to-pour-concrete-utah": 16,
  "stamped-concrete-patterns-utah": 17,
  "concrete-vs-pavers-vs-asphalt-driveway": 18,
  "how-to-maintain-a-concrete-driveway-utah": 19,
  "backyard-concrete-ideas-utah": 20,
  "concrete-flatwork-scheduling-for-builders": 21,
  "how-to-read-a-concrete-sub-bid": 22,
  "concrete-tolerances-and-callbacks": 23,
  "tilt-up-vs-cast-in-place-concrete-utah": 24,
  "commercial-concrete-maintenance-program-utah": 25,
  "ada-concrete-requirements-utah": 26,
  "curing-concrete-in-utah-heat-and-cold": 27,
  "concrete-maintenance-budgeting-for-facility-managers": 28,
  "multi-site-concrete-inspection-checklist": 29,
  "concrete-rfp-vs-preferred-vendor": 30,
};

const TOTAL_POSTS = getAllPostSlugs().length;

// --- Styling tokens used across all artifacts ---
const C_BONE = "#F5F0E6";
const C_BONE_DIM = "rgba(245, 240, 230, 0.55)";
const C_STONE = "#A99F8B";
const C_STEEL_LIGHT = "#5C8AA0";
const FONT_MONO =
  'var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, monospace';

const LABEL_PROPS = {
  fontFamily: FONT_MONO,
  fontSize: 8,
  letterSpacing: "0.12em",
  fill: C_BONE,
  fontWeight: 600,
} as const;

const LABEL_DIM = {
  ...LABEL_PROPS,
  fill: C_STONE,
  fontWeight: 500,
} as const;

const NUM_PROPS = {
  fontFamily: FONT_MONO,
  fontSize: 9,
  fill: C_STEEL_LIGHT,
  fontWeight: 700,
} as const;

// =====================================================================
// Helper primitives
// =====================================================================

function CheckMark({ x, y, color = C_BONE }: { x: number; y: number; color?: string }) {
  return (
    <path
      d={`M ${x} ${y + 4} L ${x + 3} ${y + 7} L ${x + 8} ${y - 1}`}
      stroke={color}
      strokeWidth={1.5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function CheckBox({
  x,
  y,
  size = 9,
  checked,
  accent = C_BONE,
}: {
  x: number;
  y: number;
  size?: number;
  checked: boolean;
  accent?: string;
}) {
  return (
    <>
      <rect
        x={x}
        y={y}
        width={size}
        height={size}
        fill="none"
        stroke={C_STONE}
        strokeWidth={0.75}
        rx={1}
      />
      {checked && <CheckMark x={x + 0.5} y={y + 0.5} color={accent} />}
    </>
  );
}

function XMark({ x, y, size = 5, color = "#C4421F" }: { x: number; y: number; size?: number; color?: string }) {
  return (
    <g stroke={color} strokeWidth={1.5} strokeLinecap="round">
      <line x1={x - size} y1={y - size} x2={x + size} y2={y + size} />
      <line x1={x - size} y1={y + size} x2={x + size} y2={y - size} />
    </g>
  );
}

// =====================================================================
// 01 — How to Choose a Contractor (RES) :: vendor scorecard
// =====================================================================

function Artifact01({ accent }: { accent: string }) {
  const rows = ["LICENSED", "INSURED", "LOCAL", "WARRANTIED"];
  const cols = ["A", "B", "C"];
  const colX = [150, 200, 250];
  // Vendor C row: all checked. A: 2 of 4. B: 3 of 4.
  const grid: boolean[][] = [
    [true, true, true],   // licensed
    [false, true, true],  // insured
    [false, false, true], // local
    [true, true, true],   // warrantied
  ];
  return (
    <g>
      {/* Title */}
      <text x={20} y={62} {...LABEL_PROPS} letterSpacing="0.18em">
        VENDOR · SELECTION MATRIX
      </text>
      {/* Column headers */}
      {cols.map((c, i) => (
        <text key={c} x={colX[i]} y={88} {...LABEL_DIM} textAnchor="middle">
          VENDOR {c}
        </text>
      ))}
      {/* Highlight column C */}
      <rect
        x={colX[2] - 18}
        y={75}
        width={36}
        height={140}
        fill="none"
        stroke={accent}
        strokeWidth={1.25}
        rx={2}
      />
      {/* Rows */}
      {rows.map((row, rIdx) => {
        const y = 110 + rIdx * 26;
        return (
          <g key={row}>
            <text x={20} y={y + 3} {...LABEL_PROPS}>
              {row}
            </text>
            {cols.map((_, cIdx) => {
              const cx = colX[cIdx];
              const isChecked = grid[rIdx][cIdx];
              return (
                <CheckBox
                  key={cIdx}
                  x={cx - 5}
                  y={y - 6}
                  size={10}
                  checked={isChecked}
                  accent={cIdx === 2 ? accent : C_BONE}
                />
              );
            })}
          </g>
        );
      })}
    </g>
  );
}

// =====================================================================
// 02 — Why Utah Concrete Cracks (RES) :: freeze-thaw + cross-section
// =====================================================================

function Artifact02({ accent }: { accent: string }) {
  // Top half: sine wave crossing 32F threshold
  const path =
    "M 30 90 Q 60 60, 90 90 T 150 90 T 210 90 T 270 90 T 330 90";
  return (
    <g>
      {/* Threshold dotted line */}
      <line
        x1={20}
        y1={90}
        x2={300}
        y2={90}
        stroke={C_STONE}
        strokeWidth={0.75}
        strokeDasharray="2 3"
      />
      <text x={20} y={86} {...LABEL_DIM} fontSize={7}>
        32°F
      </text>
      {/* Sine wave */}
      <path d={path} fill="none" stroke={C_BONE} strokeWidth={1.5} />
      {/* Cycle markers */}
      {[60, 120, 180, 240].map((cx) => (
        <circle key={cx} cx={cx} cy={90} r={2} fill={accent} />
      ))}
      <text x={20} y={56} {...LABEL_PROPS}>
        FREEZE-THAW · 4 CYCLES
      </text>

      {/* Cross-section bottom half */}
      <rect x={20} y={140} width={280} height={26} fill="none" stroke={C_BONE} strokeWidth={1} />
      <text x={20} y={134} {...LABEL_DIM} fontSize={7}>
        SLAB
      </text>
      <rect x={20} y={166} width={280} height={40} fill="none" stroke={C_STONE} strokeWidth={0.75} />
      <text x={20} y={216} {...LABEL_DIM} fontSize={7}>
        SUBGRADE
      </text>
      {/* Cracks - jagged lines through slab */}
      <path
        d="M 80 140 L 82 150 L 78 160 L 81 166"
        fill="none"
        stroke={accent}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M 170 140 L 172 152 L 168 162 L 171 166 L 169 180"
        fill="none"
        stroke={accent}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M 240 140 L 243 154 L 238 166"
        fill="none"
        stroke={C_STONE}
        strokeWidth={1}
        strokeLinecap="round"
      />
    </g>
  );
}

// =====================================================================
// 03 — Driveway Replace vs Repair (RES) :: decision flowchart
// =====================================================================

function Artifact03({ accent }: { accent: string }) {
  const gold = "#C9A66B";
  return (
    <g>
      {/* Start node */}
      <rect x={110} y={56} width={100} height={22} fill="none" stroke={C_BONE} strokeWidth={1.25} rx={2} />
      <text x={160} y={70} {...LABEL_PROPS} textAnchor="middle">
        EXISTING DRIVEWAY
      </text>
      {/* Arrow down */}
      <line x1={160} y1={78} x2={160} y2={92} stroke={C_BONE} strokeWidth={1} />
      {/* Decision diamond */}
      <polygon
        points="160,92 200,118 160,144 120,118"
        fill="none"
        stroke={C_BONE}
        strokeWidth={1.25}
      />
      <text x={160} y={114} {...LABEL_PROPS} textAnchor="middle" fontSize={7}>
        &gt;30% AREA
      </text>
      <text x={160} y={124} {...LABEL_PROPS} textAnchor="middle" fontSize={7}>
        AFFECTED?
      </text>
      {/* Branches */}
      {/* NO branch -> REPAIR (gold) */}
      <line x1={120} y1={118} x2={70} y2={170} stroke={gold} strokeWidth={1.25} />
      <text x={86} y={148} {...LABEL_DIM} fontSize={7}>
        NO
      </text>
      <rect x={32} y={170} width={70} height={22} fill="none" stroke={gold} strokeWidth={1.25} rx={2} />
      <text x={67} y={184} {...LABEL_PROPS} fill={gold} textAnchor="middle">
        REPAIR
      </text>
      {/* YES branch -> REPLACE (accent) */}
      <line x1={200} y1={118} x2={250} y2={170} stroke={accent} strokeWidth={1.5} />
      <text x={232} y={148} {...LABEL_DIM} fontSize={7}>
        YES
      </text>
      <rect x={216} y={170} width={84} height={28} fill="none" stroke={accent} strokeWidth={1.5} rx={2} />
      <text x={258} y={188} {...LABEL_PROPS} fill={accent} textAnchor="middle">
        REPLACE
      </text>
    </g>
  );
}

// =====================================================================
// 04 — 10 Common Problems (RES) :: 5×2 numbered grid
// =====================================================================

function Artifact04({ accent }: { accent: string }) {
  const items = [
    "CRACKING",
    "SPALLING",
    "SCALING",
    "HEAVING",
    "PITTING",
    "DISCOLOR",
    "CURLING",
    "POPOUTS",
    "MAP-CRACK",
    "DELAM",
  ];
  const cellW = 56;
  const cellH = 64;
  const startX = 16;
  const startY = 60;
  return (
    <g>
      {items.map((label, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        const x = startX + col * cellW;
        const y = startY + row * cellH;
        const isHighlight = i === 0;
        const stroke = isHighlight ? accent : C_STONE;
        const strokeW = isHighlight ? 1.25 : 0.6;
        return (
          <g key={label}>
            <rect
              x={x}
              y={y}
              width={cellW - 6}
              height={cellH - 8}
              fill="none"
              stroke={stroke}
              strokeWidth={strokeW}
              rx={1.5}
            />
            <text x={x + 5} y={y + 11} {...NUM_PROPS} fill={isHighlight ? accent : C_STEEL_LIGHT}>
              {String(i + 1).padStart(2, "0")}
            </text>
            {/* tiny diagrammatic icon: jagged line for the highlighted, simple shapes for others */}
            <g transform={`translate(${x + 8}, ${y + 22})`}>
              {i === 0 && (
                <path
                  d="M 0 5 L 4 0 L 8 8 L 14 2 L 22 10"
                  fill="none"
                  stroke={accent}
                  strokeWidth={1.25}
                  strokeLinecap="round"
                />
              )}
              {i !== 0 && (
                <rect x={0} y={2} width={26} height={10} fill="none" stroke={C_BONE_DIM} strokeWidth={0.75} rx={1} />
              )}
            </g>
            <text
              x={x + (cellW - 6) / 2}
              y={y + cellH - 14}
              {...LABEL_DIM}
              fontSize={7}
              textAnchor="middle"
              fill={isHighlight ? C_BONE : C_STONE}
            >
              {label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

// =====================================================================
// 05 — Quote Process (RES) :: 5-node timeline
// =====================================================================

function Artifact05({ accent }: { accent: string }) {
  const nodes = [
    { label: "CONTACT", duration: "DAY 0" },
    { label: "WALK", duration: "DAY 1-3" },
    { label: "MEASURE", duration: "DAY 3-5" },
    { label: "QUOTE", duration: "DAY 7" },
    { label: "DECIDE", duration: "YOURS" },
  ];
  const xs = [40, 100, 160, 220, 280];
  const y = 130;
  return (
    <g>
      <text x={20} y={66} {...LABEL_PROPS}>
        QUOTE TIMELINE
      </text>
      {/* Connecting line */}
      <line x1={xs[0]} y1={y} x2={xs[xs.length - 1]} y2={y} stroke={C_STONE} strokeWidth={0.75} />
      {/* Nodes */}
      {nodes.map((n, i) => {
        const isAccent = i === 3; // QUOTE node accent
        const r = isAccent ? 6 : 4;
        return (
          <g key={n.label}>
            <circle
              cx={xs[i]}
              cy={y}
              r={r}
              fill={isAccent ? accent : "#26221C"}
              stroke={isAccent ? accent : C_BONE}
              strokeWidth={1.25}
            />
            <text x={xs[i]} y={y - 14} {...LABEL_PROPS} textAnchor="middle">
              {n.label}
            </text>
            <text x={xs[i]} y={y + 22} {...LABEL_DIM} fontSize={7} textAnchor="middle">
              {n.duration}
            </text>
          </g>
        );
      })}
    </g>
  );
}

// =====================================================================
// 06 — Vet Subcontractor (BUILDER) :: 7-question scorecard
// =====================================================================

function Artifact06({ accent }: { accent: string }) {
  const questions = [
    "CAPACITY",
    "CREW SIZE",
    "INSURANCE",
    "INSPECTOR FAILS",
    "MAKE-RIGHT POLICY",
    "SCHEDULE DISCIPLINE",
    "REFERENCES",
  ];
  const checked = [true, true, false, true, false, true, true];
  return (
    <g>
      {/* Title bar */}
      <rect x={20} y={50} width={280} height={18} fill={accent} fillOpacity={0.18} stroke={accent} strokeWidth={1} />
      <text x={28} y={62} {...LABEL_PROPS} fill={accent}>
        // VENDOR-VETTING · 7 QUESTIONS
      </text>
      {/* Rows */}
      {questions.map((q, i) => {
        const y = 84 + i * 18;
        return (
          <g key={q}>
            <text x={28} y={y + 8} {...NUM_PROPS}>
              {String(i + 1).padStart(2, "0")}
            </text>
            <text x={50} y={y + 8} {...LABEL_PROPS}>
              {q}
            </text>
            <CheckBox x={278} y={y} checked={checked[i]} accent={accent} />
          </g>
        );
      })}
    </g>
  );
}

// =====================================================================
// 07 — Reliability vs Lowest Bid (BUILDER) :: comparison bars
// =====================================================================

function Artifact07({ accent }: { accent: string }) {
  const rebar = "#C4421F";
  // Two columns: each has COST (steel) and RISK (rebar) bars stacked
  const baseY = 200;
  // LOWEST BID: low cost, high risk
  // RELIABILITY: higher cost, low risk
  const cols = [
    { label: "LOWEST BID", x: 80, cost: 30, risk: 100 },
    { label: "RELIABILITY", x: 220, cost: 80, risk: 20 },
  ];
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        TOTAL COST OF OWNERSHIP · COMPARISON
      </text>
      {/* Y axis */}
      <line x1={40} y1={84} x2={40} y2={baseY} stroke={C_STONE} strokeWidth={0.75} />
      <line x1={40} y1={baseY} x2={290} y2={baseY} stroke={C_STONE} strokeWidth={0.75} />
      {cols.map((c) => {
        const costY = baseY - c.cost;
        const riskY = costY - c.risk;
        return (
          <g key={c.label}>
            {/* COST bar (steel) */}
            <rect
              x={c.x - 18}
              y={costY}
              width={36}
              height={c.cost}
              fill={accent}
              fillOpacity={0.5}
              stroke={accent}
              strokeWidth={1}
            />
            <text x={c.x} y={costY + c.cost / 2 + 3} {...LABEL_DIM} fontSize={7} textAnchor="middle">
              COST
            </text>
            {/* RISK bar (rebar) */}
            <rect
              x={c.x - 18}
              y={riskY}
              width={36}
              height={c.risk}
              fill={rebar}
              fillOpacity={0.35}
              stroke={rebar}
              strokeWidth={1}
            />
            <text x={c.x} y={riskY + c.risk / 2 + 3} {...LABEL_PROPS} fontSize={7} textAnchor="middle" fill={rebar}>
              RISK
            </text>
            <text x={c.x} y={baseY + 14} {...LABEL_PROPS} textAnchor="middle">
              {c.label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

// =====================================================================
// 08 — Common Sub Failures (BUILDER) :: cross-section + X markers
// =====================================================================

function Artifact08({ accent }: { accent: string }) {
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        FAILURE-POINT MAP
      </text>
      {/* Slab */}
      <rect x={20} y={88} width={280} height={26} fill="none" stroke={C_BONE} strokeWidth={1} />
      <text x={20} y={84} {...LABEL_DIM} fontSize={7}>
        SLAB
      </text>
      {/* Subgrade */}
      <rect x={20} y={114} width={280} height={28} fill="none" stroke={C_STONE} strokeWidth={0.75} />
      <text x={300} y={130} {...LABEL_DIM} fontSize={7} textAnchor="end">
        SUBGRADE
      </text>
      {/* Rebar dots in slab */}
      {[60, 100, 140, 180, 220, 260].map((cx) => (
        <circle key={cx} cx={cx} cy={101} r={1.5} fill={C_STONE} />
      ))}
      {/* X markers at failure points with labels below */}
      {[
        { x: 60, y: 142, label: "COMPACTION" },
        { x: 120, y: 101, label: "REBAR" },
        { x: 175, y: 88, label: "JOINT" },
        { x: 225, y: 101, label: "MIX" },
        { x: 275, y: 88, label: "FINISH" },
      ].map((p) => (
        <g key={p.label}>
          <XMark x={p.x} y={p.y} size={5} color={accent} />
          <text x={p.x} y={p.y + 28} {...LABEL_DIM} fontSize={7} textAnchor="middle" fill={accent}>
            {p.label}
          </text>
        </g>
      ))}
    </g>
  );
}

// =====================================================================
// 09 — Pre-Pour Checklist (BUILDER) :: 8-item checklist
// =====================================================================

function Artifact09({ accent }: { accent: string }) {
  const items = [
    "PERMITS",
    "UTILITIES MARKED",
    "SUBGRADE COMPACTED",
    "REBAR INSPECTED",
    "FORMS PLUMB",
    "MIX TICKET CONFIRMED",
    "FINISHERS ON SITE",
    "CURE PROTECTION READY",
  ];
  const checked = [true, true, true, true, true, false, false, false];
  return (
    <g>
      {/* Title bar */}
      <rect x={20} y={50} width={280} height={18} fill={accent} fillOpacity={0.18} stroke={accent} strokeWidth={1} />
      <text x={28} y={62} {...LABEL_PROPS} fill={accent}>
        // PRE-POUR · BUILDER CHECKLIST
      </text>
      {/* Items in 2 columns */}
      {items.map((it, i) => {
        const col = i < 4 ? 0 : 1;
        const row = i % 4;
        const x = 24 + col * 142;
        const y = 88 + row * 30;
        return (
          <g key={it}>
            <CheckBox x={x} y={y} checked={checked[i]} accent={accent} />
            <text x={x + 16} y={y + 8} {...NUM_PROPS}>
              {String(i + 1).padStart(2, "0")}
            </text>
            <text x={x + 16} y={y + 18} {...LABEL_PROPS} fontSize={7}>
              {it}
            </text>
          </g>
        );
      })}
    </g>
  );
}

// =====================================================================
// 10 — Utah Soil (COMMERCIAL) :: stratigraphic cross-section
// =====================================================================

function Artifact10({ accent }: { accent: string }) {
  const layers = [
    { label: "TOPSOIL", depth: "4″", h: 18, color: C_BONE_DIM },
    { label: "BENTONITIC CLAY", depth: "12″", h: 36, color: C_STONE },
    { label: "GRAVEL / BASE", depth: "8″", h: 22, color: C_BONE_DIM },
    { label: "BEDROCK", depth: "—", h: 38, color: accent },
  ];
  let y = 80;
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        SUBSURFACE STRATIGRAPHY · WASATCH FRONT
      </text>
      {/* Soil layers */}
      {layers.map((L, i) => {
        const cur = y;
        y += L.h;
        return (
          <g key={L.label}>
            <rect
              x={20}
              y={cur}
              width={220}
              height={L.h}
              fill={L.color}
              fillOpacity={i === layers.length - 1 ? 0.25 : 0.1}
              stroke={i === layers.length - 1 ? accent : C_STONE}
              strokeWidth={i === layers.length - 1 ? 1.5 : 0.6}
            />
            <text x={28} y={cur + L.h / 2 + 3} {...LABEL_PROPS} fontSize={7}>
              {L.label}
            </text>
            <text x={232} y={cur + L.h / 2 + 3} {...LABEL_DIM} fontSize={7} textAnchor="end">
              {L.depth}
            </text>
          </g>
        );
      })}
      {/* Foundation footing penetrating layers - on right side */}
      <rect x={252} y={70} width={36} height={84} fill="none" stroke={C_BONE} strokeWidth={1.25} />
      <text x={270} y={68} {...LABEL_DIM} fontSize={7} textAnchor="middle">
        FOOTING
      </text>
      {/* Footing extends into bedrock */}
      <rect x={258} y={154} width={24} height={20} fill={accent} fillOpacity={0.3} stroke={accent} strokeWidth={1.25} />
    </g>
  );
}

// =====================================================================
// 11 — Pour Scheduling (COMMERCIAL) :: Gantt chart
// =====================================================================

function Artifact11({ accent }: { accent: string }) {
  const phases = [
    { label: "PERMITS", x: 0, w: 50 },
    { label: "SUBGRADE", x: 30, w: 60 },
    { label: "POUR", x: 75, w: 40, critical: true },
    { label: "CURE", x: 100, w: 70 },
    { label: "INSPECTION", x: 150, w: 40 },
  ];
  const baseX = 60;
  const trackW = 200;
  const norm = 200; // total scale
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        SCHEDULE · CRITICAL PATH
      </text>
      {/* Day axis */}
      <line x1={baseX} y1={78} x2={baseX + trackW} y2={78} stroke={C_STONE} strokeWidth={0.5} />
      {[0, 50, 100, 150, 200].map((d) => (
        <g key={d}>
          <line
            x1={baseX + (d / norm) * trackW}
            y1={76}
            x2={baseX + (d / norm) * trackW}
            y2={80}
            stroke={C_STONE}
            strokeWidth={0.5}
          />
          <text x={baseX + (d / norm) * trackW} y={73} {...LABEL_DIM} fontSize={6} textAnchor="middle">
            D{d / 10}
          </text>
        </g>
      ))}
      {/* Phase bars */}
      {phases.map((p, i) => {
        const y = 92 + i * 22;
        const x = baseX + (p.x / norm) * trackW;
        const w = (p.w / norm) * trackW;
        const fill = p.critical ? accent : "#3F6B7D";
        return (
          <g key={p.label}>
            <text x={baseX - 6} y={y + 11} {...LABEL_PROPS} fontSize={7} textAnchor="end">
              {p.label}
            </text>
            <rect x={x} y={y} width={w} height={14} fill={fill} fillOpacity={p.critical ? 0.7 : 0.4} stroke={fill} strokeWidth={1} rx={1} />
            {p.critical && (
              <text x={x + w + 4} y={y + 10} {...LABEL_PROPS} fontSize={6} fill={accent}>
                CRITICAL
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
}

// =====================================================================
// 12 — Evaluating Commercial Subs (COMMERCIAL) :: weighted rubric
// =====================================================================

function Artifact12({ accent }: { accent: string }) {
  const rows = [
    { label: "CAPACITY", weight: 25 },
    { label: "INSURANCE", weight: 20 },
    { label: "REFERENCES", weight: 20 },
    { label: "SAFETY", weight: 20 },
    { label: "PRICING", weight: 15 },
  ];
  return (
    <g>
      {/* Title bar */}
      <rect x={20} y={50} width={280} height={18} fill={accent} fillOpacity={0.18} stroke={accent} strokeWidth={1} />
      <text x={28} y={62} {...LABEL_PROPS} fill={accent}>
        // PROCUREMENT RUBRIC · WEIGHTED
      </text>
      {/* Rows */}
      {rows.map((r, i) => {
        const y = 88 + i * 24;
        const barW = (r.weight / 25) * 130; // max weight 25 -> 130px
        return (
          <g key={r.label}>
            <text x={28} y={y + 8} {...LABEL_PROPS}>
              {r.label}
            </text>
            <rect x={130} y={y - 1} width={130} height={11} fill="none" stroke={C_STONE} strokeWidth={0.5} />
            <rect x={130} y={y - 1} width={barW} height={11} fill={C_BONE} fillOpacity={0.65} />
            <text x={266} y={y + 8} {...LABEL_DIM} fontSize={7}>
              {r.weight}%
            </text>
          </g>
        );
      })}
    </g>
  );
}

// =====================================================================
// 13 — Multi-Site Maintenance (ENTERPRISE) :: Utah map with hub
// =====================================================================

function Artifact13({ accent }: { accent: string }) {
  // Simplified Utah outline (rough rectangle with notches)
  // Approximate scale: 320x240 viewBox; Utah box centered around (160, 140)
  const utah =
    "M 90 70 L 230 70 L 230 110 L 250 110 L 250 210 L 110 210 L 110 200 L 90 200 Z";
  // 6 dots representing rough city positions in Utah
  // Sandy hub: ~(170, 130) — center-north area
  const hub = { x: 170, y: 130, label: "SANDY · HUB" };
  const sites = [
    { x: 165, y: 110, label: "OGDEN" },
    { x: 175, y: 145, label: "PROVO" },
    { x: 200, y: 120, label: "PARK CITY" },
    { x: 130, y: 130, label: "TOOELE" },
    { x: 150, y: 175, label: "NEPHI" },
    { x: 140, y: 200, label: "ST GEORGE" },
  ];
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        MULTI-SITE PROGRAM · UTAH
      </text>
      {/* Utah outline */}
      <path d={utah} fill="none" stroke={C_STONE} strokeWidth={0.75} />
      {/* Connection lines hub -> sites */}
      {sites.map((s) => (
        <line
          key={s.label}
          x1={hub.x}
          y1={hub.y}
          x2={s.x}
          y2={s.y}
          stroke={accent}
          strokeWidth={0.5}
          strokeOpacity={0.5}
          strokeDasharray="2 2"
        />
      ))}
      {/* Site dots */}
      {sites.map((s) => (
        <circle key={s.label} cx={s.x} cy={s.y} r={2.5} fill={C_BONE} />
      ))}
      {/* Hub */}
      <circle cx={hub.x} cy={hub.y} r={6} fill={accent} />
      <circle cx={hub.x} cy={hub.y} r={10} fill="none" stroke={accent} strokeWidth={0.75} strokeOpacity={0.6} />
      <text x={hub.x + 10} y={hub.y + 3} {...LABEL_PROPS} fontSize={7} fill={accent}>
        ZIONCS HUB
      </text>
    </g>
  );
}

// =====================================================================
// 14 — Vendor Consolidation (ENTERPRISE) :: before/after network
// =====================================================================

function Artifact14({ accent }: { accent: string }) {
  return (
    <g>
      {/* Divider title */}
      <text x={20} y={62} {...LABEL_PROPS}>
        VENDOR CONSOLIDATION · BEFORE / AFTER
      </text>
      <line x1={160} y1={75} x2={160} y2={220} stroke={C_STONE} strokeWidth={0.5} strokeDasharray="2 2" />

      {/* BEFORE - left half: 5 sites each connected to a different vendor (chaotic) */}
      <text x={80} y={88} {...LABEL_DIM} fontSize={7} textAnchor="middle" fill={C_STONE}>
        BEFORE · 5 VENDORS
      </text>
      {/* Sites */}
      {[
        { x: 30, y: 110 }, { x: 70, y: 100 }, { x: 110, y: 120 },
        { x: 50, y: 150 }, { x: 100, y: 170 },
      ].map((s, i) => (
        <circle key={`bs-${i}`} cx={s.x} cy={s.y} r={2.5} fill={C_BONE} />
      ))}
      {/* Vendors */}
      {[
        { x: 30, y: 200 }, { x: 65, y: 195 }, { x: 100, y: 200 },
        { x: 130, y: 195 }, { x: 50, y: 210 },
      ].map((v, i) => (
        <g key={`bv-${i}`}>
          <rect x={v.x - 4} y={v.y - 4} width={8} height={8} fill="none" stroke={C_STONE} strokeWidth={0.6} />
        </g>
      ))}
      {/* Chaotic connections */}
      {[
        [{ x: 30, y: 110 }, { x: 65, y: 195 }],
        [{ x: 70, y: 100 }, { x: 100, y: 200 }],
        [{ x: 110, y: 120 }, { x: 30, y: 200 }],
        [{ x: 50, y: 150 }, { x: 130, y: 195 }],
        [{ x: 100, y: 170 }, { x: 50, y: 210 }],
      ].map((line, i) => (
        <line
          key={`bc-${i}`}
          x1={line[0].x}
          y1={line[0].y}
          x2={line[1].x}
          y2={line[1].y}
          stroke={C_STONE}
          strokeWidth={0.5}
          strokeOpacity={0.5}
        />
      ))}

      {/* AFTER - right half: 5 sites all connected to 1 hub */}
      <text x={240} y={88} {...LABEL_PROPS} fontSize={7} textAnchor="middle" fill={accent}>
        AFTER · 1 PARTNER
      </text>
      {/* Hub - center of right half */}
      <circle cx={240} cy={170} r={7} fill={accent} />
      <circle cx={240} cy={170} r={11} fill="none" stroke={accent} strokeWidth={0.6} strokeOpacity={0.6} />
      {/* Sites with clean radial connections */}
      {[
        { x: 200, y: 105 },
        { x: 245, y: 100 },
        { x: 290, y: 110 },
        { x: 195, y: 200 },
        { x: 290, y: 200 },
      ].map((s, i) => (
        <g key={`as-${i}`}>
          <line x1={s.x} y1={s.y} x2={240} y2={170} stroke={accent} strokeWidth={0.6} strokeOpacity={0.6} />
          <circle cx={s.x} cy={s.y} r={2.5} fill={C_BONE} />
        </g>
      ))}
      <text x={240} y={186} {...LABEL_PROPS} fontSize={6} textAnchor="middle" fill={accent}>
        ZIONCS
      </text>
    </g>
  );
}

// =====================================================================
// 15 — Concrete Sealing (RES) :: cross-section with water beads
// =====================================================================

function Artifact15({ accent }: { accent: string }) {
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        SEALED SURFACE · CROSS-SECTION
      </text>
      {/* Water beads sitting on the sealer */}
      {[90, 160, 230].map((cx) => (
        <g key={cx}>
          <path
            d={`M ${cx - 9} 108 A 9 9 0 0 1 ${cx + 9} 108`}
            fill={C_STEEL_LIGHT}
            fillOpacity={0.25}
            stroke={C_STEEL_LIGHT}
            strokeWidth={1}
          />
        </g>
      ))}
      <text x={264} y={100} {...LABEL_DIM} fontSize={7}>
        H₂O
      </text>
      {/* Sealer — thin accent layer */}
      <rect x={20} y={108} width={280} height={6} fill={accent} fillOpacity={0.45} stroke={accent} strokeWidth={1.25} />
      <text x={20} y={126} {...LABEL_PROPS} fontSize={7} fill={accent}>
        SEALER
      </text>
      {/* Surface layer */}
      <rect x={20} y={132} width={280} height={16} fill="none" stroke={C_BONE} strokeWidth={1} />
      <text x={20} y={160} {...LABEL_DIM} fontSize={7}>
        SURFACE
      </text>
      {/* Slab body */}
      <rect x={20} y={166} width={280} height={44} fill="none" stroke={C_STONE} strokeWidth={0.75} />
      <text x={20} y={222} {...LABEL_DIM} fontSize={7}>
        SLAB
      </text>
      {/* Aggregate dots in slab */}
      {[50, 95, 140, 185, 230, 275].map((cx, i) => (
        <circle key={cx} cx={cx} cy={180 + (i % 2) * 14} r={1.5} fill={C_STONE} />
      ))}
    </g>
  );
}

// =====================================================================
// 16 — Best Time to Pour (RES) :: 12-month pour-window band
// =====================================================================

function Artifact16({ accent }: { accent: string }) {
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const startX = 24;
  const cellW = 23;
  const bandY = 116;
  const bandH = 30;
  const isWindow = (i: number) => (i >= 3 && i <= 5) || i === 8 || i === 9;
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        POUR WINDOWS · 12-MONTH BAND
      </text>
      {/* Snowflake glyph — left extreme */}
      <g stroke={C_STEEL_LIGHT} strokeWidth={1} strokeLinecap="round">
        <line x1={36} y1={82} x2={36} y2={98} />
        <line x1={29} y1={86} x2={43} y2={94} />
        <line x1={29} y1={94} x2={43} y2={86} />
      </g>
      {/* Sun glyph — right extreme */}
      <g stroke="#C4421F" strokeWidth={1} strokeLinecap="round">
        <circle cx={284} cy={90} r={5} fill="none" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <line
              key={deg}
              x1={284 + Math.cos(rad) * 7}
              y1={90 + Math.sin(rad) * 7}
              x2={284 + Math.cos(rad) * 10}
              y2={90 + Math.sin(rad) * 10}
            />
          );
        })}
      </g>
      {/* Month cells */}
      {months.map((m, i) => {
        const x = startX + i * cellW;
        const win = isWindow(i);
        return (
          <g key={i}>
            <rect
              x={x}
              y={bandY}
              width={cellW - 2}
              height={bandH}
              fill={win ? accent : "none"}
              fillOpacity={win ? 0.3 : 1}
              stroke={win ? accent : C_STONE}
              strokeWidth={win ? 1.25 : 0.6}
            />
            <text
              x={x + (cellW - 2) / 2}
              y={bandY + bandH / 2 + 3}
              {...LABEL_PROPS}
              fontSize={7}
              textAnchor="middle"
              fill={win ? accent : C_STONE}
            >
              {m}
            </text>
          </g>
        );
      })}
      {/* Window labels */}
      <text x={startX + 4 * cellW - 1} y={bandY + bandH + 16} {...LABEL_PROPS} fontSize={7} fill={accent} textAnchor="middle">
        APR–JUN
      </text>
      <text x={startX + 9 * cellW - 12} y={bandY + bandH + 16} {...LABEL_PROPS} fontSize={7} fill={accent} textAnchor="middle">
        SEP–OCT
      </text>
      <text x={startX} y={bandY + bandH + 34} {...LABEL_DIM} fontSize={7}>
        FREEZE RISK
      </text>
      <text x={startX + 12 * cellW - 2} y={bandY + bandH + 34} {...LABEL_DIM} fontSize={7} textAnchor="end">
        HEAT RISK
      </text>
    </g>
  );
}

// =====================================================================
// 17 — Stamped Patterns (RES) :: 2×3 pattern swatch grid
// =====================================================================

function Artifact17({ accent }: { accent: string }) {
  const labels = ["ASHLAR", "COBBLE", "FAN", "PLANK", "HERRING", "SEAMLESS"];
  const cellW = 88;
  const cellH = 66;
  const startX = 26;
  const startY = 72;
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        STAMP PATTERN INDEX
      </text>
      {labels.map((label, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = startX + col * (cellW + 4);
        const y = startY + row * (cellH + 6);
        const isHighlight = i === 0;
        const stroke = isHighlight ? accent : C_STONE;
        const inner = isHighlight ? accent : C_BONE_DIM;
        return (
          <g key={label}>
            <rect
              x={x}
              y={y}
              width={cellW}
              height={cellH - 14}
              fill="none"
              stroke={stroke}
              strokeWidth={isHighlight ? 1.25 : 0.6}
              rx={1.5}
            />
            <g stroke={inner} strokeWidth={0.75} fill="none">
              {i === 0 && (
                // Ashlar — offset rectangles
                <>
                  <rect x={x + 8} y={y + 8} width={26} height={14} />
                  <rect x={x + 34} y={y + 8} width={40} height={14} />
                  <rect x={x + 8} y={y + 22} width={40} height={14} />
                  <rect x={x + 48} y={y + 22} width={26} height={14} />
                </>
              )}
              {i === 1 && (
                // Cobble — circles
                <>
                  {[0, 1, 2].map((cx) =>
                    [0, 1].map((cy) => (
                      <circle
                        key={`${cx}-${cy}`}
                        cx={x + 20 + cx * 22}
                        cy={y + 15 + cy * 18}
                        r={7}
                      />
                    ))
                  )}
                </>
              )}
              {i === 2 && (
                // Fan — nested arcs
                <>
                  <path d={`M ${x + 12} ${y + 40} A 30 30 0 0 1 ${x + 72} ${y + 40}`} />
                  <path d={`M ${x + 22} ${y + 40} A 20 20 0 0 1 ${x + 62} ${y + 40}`} />
                  <path d={`M ${x + 32} ${y + 40} A 10 10 0 0 1 ${x + 52} ${y + 40}`} />
                </>
              )}
              {i === 3 && (
                // Plank — horizontal lines
                <>
                  {[10, 19, 28, 37].map((dy) => (
                    <line key={dy} x1={x + 8} y1={y + dy} x2={x + 80} y2={y + dy} />
                  ))}
                </>
              )}
              {i === 4 && (
                // Herringbone — angled strokes
                <>
                  {[0, 1, 2, 3].map((k) => (
                    <g key={k}>
                      <line x1={x + 10 + k * 18} y1={y + 30} x2={x + 19 + k * 18} y2={y + 12} />
                      <line x1={x + 19 + k * 18} y1={y + 12} x2={x + 28 + k * 18} y2={y + 30} />
                    </g>
                  ))}
                </>
              )}
              {i === 5 && (
                // Seamless — sparse texture dots
                <>
                  {[
                    [14, 12], [34, 20], [56, 10], [72, 24],
                    [22, 34], [46, 38], [66, 36], [12, 26],
                  ].map(([dx, dy]) => (
                    <circle key={`${dx}-${dy}`} cx={x + dx} cy={y + dy} r={1} fill={inner} stroke="none" />
                  ))}
                </>
              )}
            </g>
            <text
              x={x + cellW / 2}
              y={y + cellH - 2}
              {...LABEL_DIM}
              fontSize={7}
              textAnchor="middle"
              fill={isHighlight ? accent : C_STONE}
            >
              {label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

// =====================================================================
// 18 — Concrete vs Pavers vs Asphalt (RES) :: lifespan comparison bars
// =====================================================================

function Artifact18({ accent }: { accent: string }) {
  const baseY = 196;
  const cols = [
    { label: "CONCRETE", x: 90, h: 110, years: "30+" },
    { label: "PAVERS", x: 175, h: 82, years: "25" },
    { label: "ASPHALT", x: 260, h: 50, years: "15" },
  ];
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        DRIVEWAY LIFESPAN · COMPARISON
      </text>
      {/* Axes */}
      <line x1={44} y1={78} x2={44} y2={baseY} stroke={C_STONE} strokeWidth={0.75} />
      <line x1={44} y1={baseY} x2={296} y2={baseY} stroke={C_STONE} strokeWidth={0.75} />
      <text x={36} y={84} {...LABEL_DIM} fontSize={7} textAnchor="end">
        YEARS
      </text>
      {/* Gridline ticks */}
      {[0, 10, 20, 30].map((yr) => (
        <g key={yr}>
          <line x1={41} y1={baseY - yr * 3.7} x2={44} y2={baseY - yr * 3.7} stroke={C_STONE} strokeWidth={0.5} />
          <text x={36} y={baseY - yr * 3.7 + 2.5} {...LABEL_DIM} fontSize={6} textAnchor="end">
            {yr}
          </text>
        </g>
      ))}
      {cols.map((c, i) => {
        const isAccent = i === 0;
        const color = isAccent ? accent : C_STONE;
        return (
          <g key={c.label}>
            <rect
              x={c.x - 22}
              y={baseY - c.h}
              width={44}
              height={c.h}
              fill={color}
              fillOpacity={isAccent ? 0.5 : 0.2}
              stroke={color}
              strokeWidth={isAccent ? 1.5 : 0.75}
            />
            <text x={c.x} y={baseY - c.h - 6} {...LABEL_PROPS} fontSize={7} textAnchor="middle" fill={isAccent ? accent : C_BONE}>
              {c.years} YR
            </text>
            <text x={c.x} y={baseY + 14} {...LABEL_PROPS} fontSize={7} textAnchor="middle" fill={isAccent ? accent : C_BONE}>
              {c.label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

// =====================================================================
// 19 — Maintain a Driveway (RES) :: 4-quadrant season wheel
// =====================================================================

function Artifact19({ accent }: { accent: string }) {
  const cx = 160;
  const cy = 142;
  const r = 56;
  const quads = [
    { label: "SPR", angle: -45 },
    { label: "SUM", angle: 45 },
    { label: "FALL", angle: 135 },
    { label: "WIN", angle: 225 },
  ];
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        MAINTENANCE CYCLE · SEASONAL
      </text>
      {/* Wheel */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={C_BONE} strokeWidth={1} />
      <circle cx={cx} cy={cy} r={3} fill={C_BONE} />
      {/* Quadrant dividers */}
      <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke={C_STONE} strokeWidth={0.6} />
      <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke={C_STONE} strokeWidth={0.6} />
      {/* SPR quadrant highlight arc (top-right) */}
      <path
        d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        stroke={accent}
        strokeWidth={2}
      />
      {/* Tick marks — 3 per quadrant */}
      {Array.from({ length: 12 }, (_, i) => {
        const rad = ((-82.5 + i * 30) * Math.PI) / 180;
        const isSpr = i < 3;
        return (
          <line
            key={i}
            x1={cx + Math.cos(rad) * (r - 6)}
            y1={cy + Math.sin(rad) * (r - 6)}
            x2={cx + Math.cos(rad) * r}
            y2={cy + Math.sin(rad) * r}
            stroke={isSpr ? accent : C_STONE}
            strokeWidth={isSpr ? 1.25 : 0.75}
          />
        );
      })}
      {/* Quadrant labels */}
      {quads.map((q) => {
        const rad = (q.angle * Math.PI) / 180;
        const lx = cx + Math.cos(rad) * (r + 18);
        const ly = cy + Math.sin(rad) * (r + 16);
        const isSpr = q.label === "SPR";
        return (
          <text
            key={q.label}
            x={lx}
            y={ly + 3}
            {...LABEL_PROPS}
            fontSize={7}
            textAnchor="middle"
            fill={isSpr ? accent : C_BONE}
          >
            {q.label}
          </text>
        );
      })}
      <text x={cx + r + 26} y={cy - r + 4} {...LABEL_DIM} fontSize={7}>
        SEAL
      </text>
    </g>
  );
}

// =====================================================================
// 20 — Backyard Ideas (RES) :: 12-cell numbered idea grid
// =====================================================================

function Artifact20({ accent }: { accent: string }) {
  const filled = [0, 5, 7, 10];
  const cellW = 70;
  const cellH = 50;
  const startX = 20;
  const startY = 68;
  return (
    <g>
      <text x={20} y={60} {...LABEL_PROPS}>
        BACKYARD IDEA MATRIX · 12
      </text>
      {Array.from({ length: 12 }, (_, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = startX + col * cellW;
        const y = startY + row * cellH;
        const isFilled = filled.includes(i);
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={cellW - 6}
              height={cellH - 6}
              fill={isFilled ? accent : "none"}
              fillOpacity={isFilled ? 0.22 : 1}
              stroke={isFilled ? accent : C_STONE}
              strokeWidth={isFilled ? 1.25 : 0.6}
              rx={1.5}
            />
            <text
              x={x + 6}
              y={y + 13}
              {...NUM_PROPS}
              fill={isFilled ? accent : C_STEEL_LIGHT}
            >
              {String(i + 1).padStart(2, "0")}
            </text>
            {/* small placeholder mark in each filled cell */}
            {isFilled && (
              <line
                x1={x + 8}
                y1={y + cellH - 16}
                x2={x + cellW - 16}
                y2={y + cellH - 16}
                stroke={accent}
                strokeWidth={1}
                strokeLinecap="round"
              />
            )}
          </g>
        );
      })}
    </g>
  );
}

// =====================================================================
// 21 — Flatwork Scheduling for Builders (BUILDER) :: mini gantt + pour line
// =====================================================================

function Artifact21({ accent }: { accent: string }) {
  const phases = [
    { label: "EXCAVATE", x: 0, w: 60 },
    { label: "FORM", x: 40, w: 70 },
    { label: "REBAR", x: 85, w: 45 },
    { label: "FINISH", x: 130, w: 60 },
  ];
  const baseX = 84;
  const trackW = 200;
  const norm = 200;
  const pourX = baseX + (130 / norm) * trackW;
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        FLATWORK SEQUENCE · LOT SCHEDULE
      </text>
      {/* Track axis */}
      <line x1={baseX} y1={80} x2={baseX + trackW} y2={80} stroke={C_STONE} strokeWidth={0.5} />
      {/* Phase bars */}
      {phases.map((p, i) => {
        const y = 94 + i * 26;
        const x = baseX + (p.x / norm) * trackW;
        const w = (p.w / norm) * trackW;
        return (
          <g key={p.label}>
            <text x={baseX - 8} y={y + 10} {...LABEL_PROPS} fontSize={7} textAnchor="end">
              {p.label}
            </text>
            <rect
              x={x}
              y={y}
              width={w}
              height={13}
              fill={C_STEEL_LIGHT}
              fillOpacity={0.35}
              stroke={C_STEEL_LIGHT}
              strokeWidth={1}
              rx={1}
            />
          </g>
        );
      })}
      {/* Vertical POUR line crossing all bars */}
      <line x1={pourX} y1={80} x2={pourX} y2={202} stroke={accent} strokeWidth={1.5} strokeDasharray="4 3" />
      <text x={pourX} y={214} {...LABEL_PROPS} fontSize={7} fill={accent} textAnchor="middle">
        POUR
      </text>
      <circle cx={pourX} cy={80} r={2.5} fill={accent} />
    </g>
  );
}

// =====================================================================
// 22 — Read a Sub Bid (BUILDER) :: document outline with flagged line item
// =====================================================================

function Artifact22({ accent }: { accent: string }) {
  const rows = [
    { label: "MOBILIZE", excl: false },
    { label: "SUBGRADE", excl: false },
    { label: "REBAR", excl: false },
    { label: "PUMP FEE", excl: true },
    { label: "FINISH", excl: false },
  ];
  const docX = 66;
  const docY = 72;
  const docW = 188;
  const docH = 140;
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        SUB BID · LINE-ITEM READ
      </text>
      {/* Document outline with folded corner */}
      <path
        d={`M ${docX} ${docY} L ${docX + docW - 16} ${docY} L ${docX + docW} ${docY + 16} L ${docX + docW} ${docY + docH} L ${docX} ${docY + docH} Z`}
        fill="none"
        stroke={C_BONE}
        strokeWidth={1}
      />
      <path
        d={`M ${docX + docW - 16} ${docY} L ${docX + docW - 16} ${docY + 16} L ${docX + docW} ${docY + 16}`}
        fill="none"
        stroke={C_BONE}
        strokeWidth={0.75}
      />
      {/* Doc header rule */}
      <line x1={docX + 12} y1={docY + 18} x2={docX + 100} y2={docY + 18} stroke={C_STONE} strokeWidth={1} />
      {/* Line-item rows */}
      {rows.map((r, i) => {
        const y = docY + 38 + i * 20;
        return (
          <g key={r.label}>
            <text x={docX + 12} y={y + 3} {...NUM_PROPS} fontSize={7}>
              {String(i + 1).padStart(2, "0")}
            </text>
            <text x={docX + 30} y={y + 3} {...LABEL_PROPS} fontSize={7} fill={r.excl ? accent : C_BONE}>
              {r.label}
            </text>
            {/* amount tick line */}
            <line
              x1={docX + 100}
              y1={y}
              x2={docX + docW - 42}
              y2={y}
              stroke={r.excl ? accent : C_STONE}
              strokeWidth={0.6}
              strokeDasharray="2 2"
            />
            {r.excl ? (
              <text x={docX + docW - 12} y={y + 3} {...LABEL_PROPS} fontSize={6} fill={accent} textAnchor="end">
                EXCL
              </text>
            ) : (
              <line x1={docX + docW - 34} y1={y} x2={docX + docW - 12} y2={y} stroke={C_BONE_DIM} strokeWidth={1} />
            )}
          </g>
        );
      })}
      {/* Flag marker on the excluded row */}
      <rect
        x={docX + 6}
        y={docY + 38 + 3 * 20 - 8}
        width={docW - 12}
        height={16}
        fill={accent}
        fillOpacity={0.12}
        stroke={accent}
        strokeWidth={1}
        rx={1}
      />
    </g>
  );
}

// =====================================================================
// 23 — Tolerances and Callbacks (BUILDER) :: straightedge gap check
// =====================================================================

function Artifact23({ accent }: { accent: string }) {
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        FLATNESS CHECK · 10-FT STRAIGHTEDGE
      </text>
      {/* Straightedge bar */}
      <rect x={40} y={116} width={240} height={7} fill={C_BONE} fillOpacity={0.85} />
      <text x={40} y={110} {...LABEL_DIM} fontSize={7}>
        STRAIGHTEDGE
      </text>
      {/* Wavy surface line beneath — dips in the middle */}
      <path
        d="M 40 123 Q 80 124, 110 132 Q 150 142, 190 130 Q 230 124, 280 123"
        fill="none"
        stroke={C_STONE}
        strokeWidth={1.25}
      />
      <text x={280} y={140} {...LABEL_DIM} fontSize={7} textAnchor="end">
        SURFACE
      </text>
      {/* Gap dimension callout at max deviation */}
      <line x1={150} y1={123} x2={150} y2={139} stroke={accent} strokeWidth={1} />
      <line x1={146} y1={123} x2={154} y2={123} stroke={accent} strokeWidth={1} />
      <line x1={146} y1={139} x2={154} y2={139} stroke={accent} strokeWidth={1} />
      <line x1={150} y1={139} x2={186} y2={168} stroke={accent} strokeWidth={0.6} strokeDasharray="2 2" />
      <text x={190} y={174} {...LABEL_PROPS} fontSize={8} fill={accent}>
        1/4″ GAP
      </text>
      <text x={190} y={186} {...LABEL_DIM} fontSize={7}>
        SPEC LIMIT
      </text>
      {/* Callback marker */}
      <XMark x={150} y={200} size={4} color={accent} />
      <text x={160} y={203} {...LABEL_DIM} fontSize={7}>
        CALLBACK ZONE
      </text>
    </g>
  );
}

// =====================================================================
// 24 — Tilt-Up vs Cast-in-Place (COMMERCIAL) :: split method diagram
// =====================================================================

function Artifact24({ accent }: { accent: string }) {
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        WALL METHOD · TILT-UP / CAST-IN-PLACE
      </text>
      {/* Divider */}
      <text x={160} y={146} {...LABEL_PROPS} fontSize={9} textAnchor="middle" fill={C_STONE}>
        VS
      </text>

      {/* LEFT — tilt-up: flat panel + arc to standing panel */}
      <line x1={24} y1={196} x2={140} y2={196} stroke={C_STONE} strokeWidth={0.75} />
      {/* Flat cast panel on ground (dashed = origin) */}
      <rect x={40} y={188} width={80} height={8} fill="none" stroke={C_STONE} strokeWidth={0.75} strokeDasharray="3 2" />
      {/* Standing panel (final position) */}
      <rect x={36} y={110} width={10} height={86} fill={accent} fillOpacity={0.3} stroke={accent} strokeWidth={1.25} />
      {/* Tilt arc arrow */}
      <path d="M 112 182 A 74 74 0 0 0 52 116" fill="none" stroke={accent} strokeWidth={1} />
      <path d="M 52 116 L 60 116 M 52 116 L 55 123" stroke={accent} strokeWidth={1} fill="none" strokeLinecap="round" />
      <text x={80} y={214} {...LABEL_PROPS} fontSize={7} textAnchor="middle" fill={accent}>
        TILT-UP
      </text>

      {/* RIGHT — cast-in-place: formwork with pour hatching */}
      <line x1={180} y1={196} x2={296} y2={196} stroke={C_STONE} strokeWidth={0.75} />
      {/* Formwork walls */}
      <rect x={222} y={104} width={32} height={92} fill="none" stroke={C_BONE} strokeWidth={1.25} />
      <line x1={216} y1={104} x2={216} y2={196} stroke={C_STONE} strokeWidth={0.75} />
      <line x1={260} y1={104} x2={260} y2={196} stroke={C_STONE} strokeWidth={0.75} />
      {/* Pour hatching inside form */}
      {[0, 1, 2, 3, 4, 5].map((k) => (
        <line
          key={k}
          x1={222}
          y1={130 + k * 12}
          x2={254}
          y2={118 + k * 12}
          stroke={C_STONE}
          strokeWidth={0.6}
        />
      ))}
      {/* Pour arrow into form */}
      <line x1={238} y1={86} x2={238} y2={100} stroke={accent} strokeWidth={1.25} />
      <path d="M 234 96 L 238 102 L 242 96" fill="none" stroke={accent} strokeWidth={1.25} strokeLinecap="round" />
      <text x={238} y={214} {...LABEL_PROPS} fontSize={7} textAnchor="middle">
        CAST-IN-PLACE
      </text>
    </g>
  );
}

// =====================================================================
// 25 — Commercial Maintenance Program (COMMERCIAL) :: annual cycle ring
// =====================================================================

function Artifact25({ accent }: { accent: string }) {
  const cx = 160;
  const cy = 144;
  const r = 52;
  const nodes = [
    { label: "INSPECT", deg: -90 },
    { label: "SEAL", deg: 30 },
    { label: "REPAIR", deg: 150 },
  ];
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        MAINTENANCE PROGRAM · ANNUAL CYCLE
      </text>
      {/* Ring */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={C_STONE} strokeWidth={0.75} />
      {/* Direction arrowhead on ring (right side, pointing down) */}
      <path
        d={`M ${cx + r - 4} ${cy - 8} L ${cx + r} ${cy} L ${cx + r + 4} ${cy - 8}`}
        fill="none"
        stroke={C_STONE}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <text x={cx} y={cy + 3} {...LABEL_DIM} fontSize={7} textAnchor="middle">
        12 MO
      </text>
      {/* Cycle nodes */}
      {nodes.map((n, i) => {
        const rad = (n.deg * Math.PI) / 180;
        const nx = cx + Math.cos(rad) * r;
        const ny = cy + Math.sin(rad) * r;
        const lx = cx + Math.cos(rad) * (r + 24);
        const ly = cy + Math.sin(rad) * (r + 20);
        const isFirst = i === 0;
        return (
          <g key={n.label}>
            <circle
              cx={nx}
              cy={ny}
              r={isFirst ? 6 : 4.5}
              fill={isFirst ? accent : "#26221C"}
              stroke={isFirst ? accent : C_BONE}
              strokeWidth={1.25}
            />
            <text
              x={lx}
              y={ly + 3}
              {...LABEL_PROPS}
              fontSize={7}
              textAnchor="middle"
              fill={isFirst ? accent : C_BONE}
            >
              {n.label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

// =====================================================================
// 26 — ADA Requirements (COMMERCIAL) :: ramp cross-section with slope callout
// =====================================================================

function Artifact26({ accent }: { accent: string }) {
  const baseY = 188;
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        ADA RAMP · SECTION
      </text>
      {/* Grade line */}
      <line x1={24} y1={baseY} x2={296} y2={baseY} stroke={C_STONE} strokeWidth={0.75} />
      {/* Ramp triangle */}
      <path
        d={`M 56 ${baseY} L 212 ${baseY - 40} L 212 ${baseY} Z`}
        fill={accent}
        fillOpacity={0.15}
        stroke={accent}
        strokeWidth={1.25}
      />
      {/* Level landing */}
      <line x1={212} y1={baseY - 40} x2={288} y2={baseY - 40} stroke={C_BONE} strokeWidth={1.5} />
      <line x1={288} y1={baseY - 40} x2={288} y2={baseY} stroke={C_STONE} strokeWidth={0.6} strokeDasharray="2 2" />
      <text x={250} y={baseY - 48} {...LABEL_PROPS} fontSize={7} textAnchor="middle">
        LANDING · LEVEL
      </text>
      {/* Slope callout */}
      <text x={120} y={baseY - 34} {...LABEL_PROPS} fontSize={8} fill={accent}>
        1:12 MAX
      </text>
      {/* Rise / run dimension ticks */}
      <line x1={212} y1={baseY - 40} x2={230} y2={baseY - 40} stroke={C_STONE} strokeWidth={0.5} strokeDasharray="2 2" />
      <line x1={224} y1={baseY - 40} x2={224} y2={baseY} stroke={C_STONE} strokeWidth={0.5} />
      <text x={230} y={baseY - 16} {...LABEL_DIM} fontSize={7}>
        RISE 1
      </text>
      <line x1={56} y1={baseY + 10} x2={212} y2={baseY + 10} stroke={C_STONE} strokeWidth={0.5} />
      <line x1={56} y1={baseY + 6} x2={56} y2={baseY + 14} stroke={C_STONE} strokeWidth={0.5} />
      <line x1={212} y1={baseY + 6} x2={212} y2={baseY + 14} stroke={C_STONE} strokeWidth={0.5} />
      <text x={134} y={baseY + 22} {...LABEL_DIM} fontSize={7} textAnchor="middle">
        RUN 12
      </text>
    </g>
  );
}

// =====================================================================
// 27 — Curing in Heat and Cold (COMMERCIAL) :: temperature scale + window
// =====================================================================

function Artifact27({ accent }: { accent: string }) {
  const scaleY = 140;
  const x0 = 32;
  const x1 = 288;
  // Scale spans 0–110°F
  const toX = (f: number) => x0 + ((f - 0) / 110) * (x1 - x0);
  const winA = toX(50);
  const winB = toX(85);
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        CURING RANGE · °F
      </text>
      {/* Scale line */}
      <line x1={x0} y1={scaleY} x2={x1} y2={scaleY} stroke={C_BONE} strokeWidth={1} />
      {/* Degree ticks */}
      {[0, 32, 50, 85, 110].map((f) => (
        <g key={f}>
          <line x1={toX(f)} y1={scaleY - 4} x2={toX(f)} y2={scaleY + 4} stroke={C_BONE} strokeWidth={0.75} />
          <text x={toX(f)} y={scaleY + 18} {...LABEL_DIM} fontSize={7} textAnchor="middle">
            {f}°
          </text>
        </g>
      ))}
      {/* Freeze hatch — left of 32 */}
      {[0, 1, 2, 3, 4].map((k) => (
        <line
          key={`fz-${k}`}
          x1={x0 + k * 12}
          y1={scaleY - 14}
          x2={x0 + 8 + k * 12}
          y2={scaleY - 4}
          stroke={C_STEEL_LIGHT}
          strokeWidth={0.75}
        />
      ))}
      <text x={x0} y={scaleY - 22} {...LABEL_DIM} fontSize={7} fill={C_STEEL_LIGHT}>
        FREEZE
      </text>
      {/* Heat hatch — right of 85 */}
      {[0, 1, 2, 3].map((k) => (
        <line
          key={`ht-${k}`}
          x1={winB + 8 + k * 12}
          y1={scaleY - 14}
          x2={winB + 16 + k * 12}
          y2={scaleY - 4}
          stroke={accent}
          strokeWidth={0.75}
          strokeOpacity={0.6}
        />
      ))}
      <text x={x1} y={scaleY - 22} {...LABEL_DIM} fontSize={7} textAnchor="end" fill={accent}>
        HEAT
      </text>
      {/* Cure window bracket 50–85 */}
      <line x1={winA} y1={scaleY - 32} x2={winB} y2={scaleY - 32} stroke={accent} strokeWidth={1.5} />
      <line x1={winA} y1={scaleY - 32} x2={winA} y2={scaleY - 24} stroke={accent} strokeWidth={1.5} />
      <line x1={winB} y1={scaleY - 32} x2={winB} y2={scaleY - 24} stroke={accent} strokeWidth={1.5} />
      <text x={(winA + winB) / 2} y={scaleY - 40} {...LABEL_PROPS} fontSize={7} fill={accent} textAnchor="middle">
        CURE WINDOW
      </text>
      {/* Window shading on scale */}
      <rect x={winA} y={scaleY - 3} width={winB - winA} height={6} fill={accent} fillOpacity={0.35} />
      {/* Season note */}
      <text x={x0} y={scaleY + 46} {...LABEL_DIM} fontSize={7}>
        BLANKETS BELOW 50°
      </text>
      <text x={x1} y={scaleY + 46} {...LABEL_DIM} fontSize={7} textAnchor="end">
        WET CURE ABOVE 85°
      </text>
    </g>
  );
}

// =====================================================================
// 28 — Maintenance Budgeting (ENTERPRISE) :: stacked-segment budget bars
// =====================================================================

function Artifact28({ accent }: { accent: string }) {
  const rows = [
    { label: "YR 1", base: 90, allow: 40, cap: 30 },
    { label: "YR 2", base: 90, allow: 55, cap: 30 },
    { label: "YR 3", base: 90, allow: 30, cap: 55 },
  ];
  const baseX = 70;
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        BUDGET MODEL · 3-YEAR
      </text>
      {rows.map((r, i) => {
        const y = 88 + i * 34;
        const xAllow = baseX + r.base;
        const xCap = xAllow + r.allow;
        return (
          <g key={r.label}>
            <text x={baseX - 8} y={y + 11} {...LABEL_PROPS} fontSize={7} textAnchor="end">
              {r.label}
            </text>
            {/* BASE segment */}
            <rect x={baseX} y={y} width={r.base} height={15} fill={C_BONE} fillOpacity={0.35} stroke={C_BONE} strokeWidth={0.75} />
            {/* ALLOW segment */}
            <rect x={xAllow} y={y} width={r.allow} height={15} fill={accent} fillOpacity={0.45} stroke={accent} strokeWidth={1} />
            {/* CAP segment — outline only */}
            <rect x={xCap} y={y} width={r.cap} height={15} fill="none" stroke={C_STONE} strokeWidth={0.75} strokeDasharray="3 2" />
          </g>
        );
      })}
      {/* Legend */}
      <g transform="translate(70, 200)">
        <rect x={0} y={-8} width={10} height={10} fill={C_BONE} fillOpacity={0.35} stroke={C_BONE} strokeWidth={0.75} />
        <text x={16} y={0} {...LABEL_DIM} fontSize={7}>
          BASE
        </text>
        <rect x={62} y={-8} width={10} height={10} fill={accent} fillOpacity={0.45} stroke={accent} strokeWidth={1} />
        <text x={78} y={0} {...LABEL_DIM} fontSize={7}>
          ALLOW
        </text>
        <rect x={132} y={-8} width={10} height={10} fill="none" stroke={C_STONE} strokeWidth={0.75} strokeDasharray="3 2" />
        <text x={148} y={0} {...LABEL_DIM} fontSize={7}>
          CAP
        </text>
      </g>
    </g>
  );
}

// =====================================================================
// 29 — Multi-Site Inspection Checklist (ENTERPRISE) :: card + site pins
// =====================================================================

function Artifact29({ accent }: { accent: string }) {
  const items = ["JOINTS", "SPALLING", "DRAINAGE", "TRIP EDGES"];
  const checked = [true, true, true, false];
  const cardX = 34;
  const cardY = 76;
  const cardW = 150;
  const cardH = 132;
  const pins = [
    { x: 236, y: 100 },
    { x: 268, y: 140 },
    { x: 242, y: 182 },
  ];
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        INSPECTION CHECKLIST · MULTI-SITE
      </text>
      {/* Checklist card */}
      <rect x={cardX} y={cardY} width={cardW} height={cardH} fill="none" stroke={C_BONE} strokeWidth={1} rx={2} />
      <line x1={cardX + 10} y1={cardY + 18} x2={cardX + 80} y2={cardY + 18} stroke={C_STONE} strokeWidth={1} />
      {items.map((it, i) => {
        const y = cardY + 34 + i * 24;
        return (
          <g key={it}>
            <CheckBox x={cardX + 10} y={y} checked={checked[i]} accent={accent} />
            <text x={cardX + 26} y={y + 8} {...LABEL_PROPS} fontSize={7}>
              {it}
            </text>
          </g>
        );
      })}
      {/* Site pins */}
      {pins.map((p, i) => (
        <g key={i}>
          <line
            x1={cardX + cardW}
            y1={cardY + cardH / 2}
            x2={p.x - 8}
            y2={p.y}
            stroke={accent}
            strokeWidth={0.5}
            strokeOpacity={0.5}
            strokeDasharray="2 2"
          />
          <circle cx={p.x} cy={p.y} r={3} fill={accent} />
          <circle cx={p.x} cy={p.y} r={6.5} fill="none" stroke={accent} strokeWidth={0.75} strokeOpacity={0.5} />
          <text x={p.x + 12} y={p.y + 3} {...LABEL_DIM} fontSize={7}>
            SITE {String(i + 1).padStart(2, "0")}
          </text>
        </g>
      ))}
    </g>
  );
}

// =====================================================================
// 30 — RFP vs Preferred Vendor (ENTERPRISE) :: fork with cost ledgers
// =====================================================================

function Artifact30({ accent }: { accent: string }) {
  const leftX = 90;
  const rightX = 230;
  const boxY = 118;
  return (
    <g>
      <text x={20} y={62} {...LABEL_PROPS}>
        PROCUREMENT PATH · FORK
      </text>
      {/* Root node */}
      <rect x={124} y={76} width={72} height={20} fill="none" stroke={C_BONE} strokeWidth={1.25} rx={2} />
      <text x={160} y={89} {...LABEL_PROPS} fontSize={7} textAnchor="middle">
        SCOPE
      </text>
      {/* Fork lines */}
      <line x1={148} y1={96} x2={leftX + 8} y2={boxY} stroke={C_STONE} strokeWidth={1} />
      <line x1={172} y1={96} x2={rightX - 8} y2={boxY} stroke={accent} strokeWidth={1.5} />
      {/* RFP box — stone */}
      <rect x={leftX - 36} y={boxY} width={80} height={22} fill="none" stroke={C_STONE} strokeWidth={1} rx={2} />
      <text x={leftX + 4} y={boxY + 14} {...LABEL_PROPS} textAnchor="middle" fill={C_STONE}>
        RFP
      </text>
      {/* VENDOR box — accent */}
      <rect x={rightX - 48} y={boxY} width={96} height={22} fill="none" stroke={accent} strokeWidth={1.5} rx={2} />
      <text x={rightX} y={boxY + 14} {...LABEL_PROPS} textAnchor="middle" fill={accent}>
        VENDOR
      </text>
      {/* Cost ledger ticks — RFP: many rows (overhead) */}
      {[0, 1, 2, 3, 4].map((k) => (
        <g key={`rfp-${k}`}>
          <line
            x1={leftX - 28}
            y1={boxY + 38 + k * 12}
            x2={leftX + 28}
            y2={boxY + 38 + k * 12}
            stroke={C_STONE}
            strokeWidth={0.75}
          />
          <line
            x1={leftX + 22}
            y1={boxY + 35 + k * 12}
            x2={leftX + 28}
            y2={boxY + 38 + k * 12}
            stroke={C_STONE}
            strokeWidth={0.5}
          />
        </g>
      ))}
      <text x={leftX} y={boxY + 38 + 5 * 12 + 4} {...LABEL_DIM} fontSize={7} textAnchor="middle">
        5 COST LINES
      </text>
      {/* Cost ledger ticks — VENDOR: 2 rows (consolidated) */}
      {[0, 1].map((k) => (
        <line
          key={`vnd-${k}`}
          x1={rightX - 28}
          y1={boxY + 38 + k * 12}
          x2={rightX + 28}
          y2={boxY + 38 + k * 12}
          stroke={accent}
          strokeWidth={1}
        />
      ))}
      <text x={rightX} y={boxY + 38 + 2 * 12 + 4} {...LABEL_PROPS} fontSize={7} textAnchor="middle" fill={accent}>
        2 COST LINES
      </text>
    </g>
  );
}

// =====================================================================
// Dispatcher
// =====================================================================

function Artifact({ slug, accent }: { slug: string; accent: string }) {
  switch (slug) {
    case "how-to-choose-a-concrete-contractor-in-utah":
      return <Artifact01 accent={accent} />;
    case "why-utah-concrete-cracks":
      return <Artifact02 accent={accent} />;
    case "driveway-replacement-vs-repair":
      return <Artifact03 accent={accent} />;
    case "10-common-residential-concrete-problems":
      return <Artifact04 accent={accent} />;
    case "what-to-expect-when-you-request-a-concrete-quote":
      return <Artifact05 accent={accent} />;
    case "how-to-vet-a-concrete-subcontractor":
      return <Artifact06 accent={accent} />;
    case "concrete-sub-reliability-vs-lowest-bid":
      return <Artifact07 accent={accent} />;
    case "common-concrete-sub-failures":
      return <Artifact08 accent={accent} />;
    case "pre-pour-checklist-for-builders":
      return <Artifact09 accent={accent} />;
    case "utah-soil-conditions-commercial-foundations":
      return <Artifact10 accent={accent} />;
    case "commercial-concrete-pour-scheduling":
      return <Artifact11 accent={accent} />;
    case "evaluating-commercial-concrete-subs":
      return <Artifact12 accent={accent} />;
    case "multi-site-concrete-maintenance-programs":
      return <Artifact13 accent={accent} />;
    case "vendor-consolidation-concrete-contractor":
      return <Artifact14 accent={accent} />;
    case "concrete-sealing-utah":
      return <Artifact15 accent={accent} />;
    case "best-time-to-pour-concrete-utah":
      return <Artifact16 accent={accent} />;
    case "stamped-concrete-patterns-utah":
      return <Artifact17 accent={accent} />;
    case "concrete-vs-pavers-vs-asphalt-driveway":
      return <Artifact18 accent={accent} />;
    case "how-to-maintain-a-concrete-driveway-utah":
      return <Artifact19 accent={accent} />;
    case "backyard-concrete-ideas-utah":
      return <Artifact20 accent={accent} />;
    case "concrete-flatwork-scheduling-for-builders":
      return <Artifact21 accent={accent} />;
    case "how-to-read-a-concrete-sub-bid":
      return <Artifact22 accent={accent} />;
    case "concrete-tolerances-and-callbacks":
      return <Artifact23 accent={accent} />;
    case "tilt-up-vs-cast-in-place-concrete-utah":
      return <Artifact24 accent={accent} />;
    case "commercial-concrete-maintenance-program-utah":
      return <Artifact25 accent={accent} />;
    case "ada-concrete-requirements-utah":
      return <Artifact26 accent={accent} />;
    case "curing-concrete-in-utah-heat-and-cold":
      return <Artifact27 accent={accent} />;
    case "concrete-maintenance-budgeting-for-facility-managers":
      return <Artifact28 accent={accent} />;
    case "multi-site-concrete-inspection-checklist":
      return <Artifact29 accent={accent} />;
    case "concrete-rfp-vs-preferred-vendor":
      return <Artifact30 accent={accent} />;
    default:
      return null;
  }
}

// =====================================================================
// Public component
// =====================================================================

export function BlogThumbnail({ meta }: BlogThumbnailProps) {
  const accent = SILO_ACCENT[meta.siloIntent];
  const number = ARTIFACT_NUMBER[meta.slug] ?? 0;
  const has = number > 0;

  return (
    <div className="relative aspect-[4/3] w-full bg-anthracite-elevated overflow-hidden border-b border-concrete/15">
      {/* Topo background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/topo-bg-dark.svg)",
          backgroundSize: "cover",
          opacity: 0.08,
        }}
      />
      {/* Artifact */}
      {has && (
        <svg
          viewBox="0 0 320 240"
          className="relative w-full h-full"
          role="img"
          aria-label={`${SILO_LABEL[meta.siloIntent]} article — data artifact thumbnail`}
        >
          <Artifact slug={meta.slug} accent={accent} />
        </svg>
      )}
      {/* Silo tag — top-left overlay */}
      <p
        className="absolute top-2.5 left-3 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] pointer-events-none"
        style={{ color: accent }}
      >
        // {SILO_LABEL[meta.siloIntent]} // {String(number).padStart(2, "0")} OF {String(TOTAL_POSTS).padStart(2, "0")}
      </p>
    </div>
  );
}
