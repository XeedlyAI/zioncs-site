import type { PostMeta } from "@/types/post";

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
};

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
        // {SILO_LABEL[meta.siloIntent]} // {String(number).padStart(2, "0")} OF 14
      </p>
    </div>
  );
}
