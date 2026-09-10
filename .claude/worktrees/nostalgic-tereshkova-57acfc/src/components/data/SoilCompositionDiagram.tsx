/**
 * Cross-section illustration of typical Salt Lake / Utah Valley alluvial
 * soil profile. SVG, server-renderable. Annotations in mono caption style.
 *
 * Layers and depths approximated from generic Wasatch Front soil-survey
 * descriptions. Flagged in the calibration doc for verification against
 * UGS sources before claiming as authoritative.
 */

type Layer = {
  label: string;
  depth: string;
  description: string;
  color: string;
  textColor?: string;
};

const LAYERS: readonly Layer[] = [
  {
    label: "TOPSOIL",
    depth: "0–6 in",
    description: "Organic-rich layer · structural risk if not removed",
    color: "#5C4933",
    textColor: "#F4F0E8",
  },
  {
    label: "CLAY-LOAM",
    depth: "6–24 in",
    description: "Expansive when wet · contracts when dry · seasonal motion",
    color: "#8B6F4E",
    textColor: "#F4F0E8",
  },
  {
    label: "ROCKY ALLUVIUM",
    depth: "24–60 in",
    description: "Cobble + gravel · variable density · compaction critical",
    color: "#6B6760",
    textColor: "#F4F0E8",
  },
  {
    label: "BEDROCK / DENSE",
    depth: "60+ in",
    description: "Stable structural base · rarely reached in residential pours",
    color: "#3F3A33",
    textColor: "#F4F0E8",
  },
];

export function SoilCompositionDiagram() {
  return (
    <figure className="card-light p-6 md:p-7 status-steel my-8">
      <figcaption className="mb-5">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-2">
          DATA · WASATCH FRONT SOIL PROFILE
        </p>
        <p className="text-base font-bold text-anthracite leading-snug">
          Typical residential subgrade — cross-section
        </p>
        <p className="font-mono text-[11px] text-stone mt-1">
          Salt Lake / Utah Valley alluvial deposits · for visualization
        </p>
      </figcaption>

      <div className="rounded-md overflow-hidden border border-warm-border">
        {LAYERS.map((layer, idx) => {
          const heights = ["h-12", "h-20", "h-24", "h-16"];
          return (
            <div
              key={layer.label}
              className={`relative ${heights[idx]} flex items-center px-4 border-b border-anthracite/15 last:border-b-0`}
              style={{ background: layer.color, color: layer.textColor }}
            >
              <div className="flex-1 grid grid-cols-[7rem_5rem_1fr] gap-3 items-center">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em]">
                  {layer.label}
                </span>
                <span className="font-mono text-[10px] tabular-nums uppercase tracking-[0.1em] opacity-80">
                  {layer.depth}
                </span>
                <span className="text-[12px] sm:text-[13px] leading-snug opacity-90">
                  {layer.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm mt-4">
        Source: generalized Wasatch Front profile · varies by neighborhood
      </p>
    </figure>
  );
}
