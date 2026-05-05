/**
 * Frost-depth diagram for Utah regions. Vertical scale showing typical
 * freeze depth by region with foundation-depth recommendation overlay.
 * SVG annotations in mono.
 */

type Region = {
  name: string;
  freezeDepth: number; // inches
  foundationDepth: number; // inches — code-recommended minimum
  notes: string;
};

const REGIONS: readonly Region[] = [
  {
    name: "St. George",
    freezeDepth: 6,
    foundationDepth: 12,
    notes: "Mild winters · code minimum 12″",
  },
  {
    name: "Salt Lake / Sandy",
    freezeDepth: 18,
    foundationDepth: 30,
    notes: "Wasatch Front standard · 30″ minimum",
  },
  {
    name: "Park City",
    freezeDepth: 30,
    foundationDepth: 42,
    notes: "Mountain region · 42″ minimum",
  },
  {
    name: "Logan / Ogden",
    freezeDepth: 24,
    foundationDepth: 36,
    notes: "Northern Wasatch · 36″ standard",
  },
];

const MAX_DEPTH = Math.max(...REGIONS.map((r) => r.foundationDepth));

export function FrostDepthDiagram() {
  return (
    <figure className="card-light p-6 md:p-7 status-steel my-8">
      <figcaption className="mb-5">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-2">
          DATA · UTAH FROST DEPTHS
        </p>
        <p className="text-base font-bold text-anthracite leading-snug">
          Frost depth and foundation depth by region
        </p>
        <p className="font-mono text-[11px] text-stone mt-1">
          Foundation depth must exceed frost depth · IRC + local code
        </p>
      </figcaption>

      <div className="space-y-5">
        {REGIONS.map((r) => {
          const freezePct = (r.freezeDepth / MAX_DEPTH) * 100;
          const foundationPct = (r.foundationDepth / MAX_DEPTH) * 100;
          return (
            <div key={r.name}>
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-anthracite">
                  {r.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-stone">
                  {r.notes}
                </span>
              </div>
              <div
                className="relative h-7 bg-bone border border-warm-border rounded-sm overflow-hidden"
                role="img"
                aria-label={`${r.name}: frost depth ${r.freezeDepth} inches, foundation depth ${r.foundationDepth} inches`}
              >
                {/* Foundation depth (deeper, visible behind frost) */}
                <div
                  className="absolute inset-y-0 left-0 bg-anthracite/85 flex items-center justify-end pr-2"
                  style={{ width: `${foundationPct}%` }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-bone tabular-nums">
                    {r.foundationDepth}″
                  </span>
                </div>
                {/* Frost depth (shallower, in front of foundation) */}
                <div
                  className="absolute inset-y-0 left-0 bg-steel flex items-center justify-end pr-2"
                  style={{ width: `${freezePct}%` }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-bone tabular-nums">
                    {r.freezeDepth}″
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 pt-4 border-t border-warm-border flex items-center gap-4 flex-wrap font-mono text-[10px] uppercase tracking-[0.12em] text-stone">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-steel rounded-sm" />
          <span>Frost depth</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-anthracite rounded-sm" />
          <span>Foundation depth (min)</span>
        </span>
      </div>
    </figure>
  );
}
