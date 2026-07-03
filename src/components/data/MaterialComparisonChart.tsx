/**
 * Driveway material comparison — concrete vs pavers vs asphalt across the
 * four dimensions Utah homeowners actually weigh. Server-renderable, no JS.
 * Scores are relative (1–5) and practice-based, labeled as such.
 */

type Material = "CONCRETE" | "PAVERS" | "ASPHALT";

type Dimension = {
  label: string;
  note: string;
  /** Relative 1–5 score per material (higher = better). */
  scores: Record<Material, number>;
};

const DIMENSIONS: readonly Dimension[] = [
  {
    label: "LIFESPAN",
    note: "Properly installed, Utah climate",
    scores: { CONCRETE: 5, PAVERS: 4, ASPHALT: 2 },
  },
  {
    label: "FREEZE-THAW",
    note: "Winter performance w/ correct spec",
    scores: { CONCRETE: 4, PAVERS: 5, ASPHALT: 3 },
  },
  {
    label: "LOW MAINTENANCE",
    note: "Less recurring work = higher score",
    scores: { CONCRETE: 4, PAVERS: 2, ASPHALT: 1 },
  },
  {
    label: "UPFRONT COST",
    note: "Cheaper install = higher score",
    scores: { CONCRETE: 3, PAVERS: 1, ASPHALT: 5 },
  },
];

const MATERIAL_STYLE: Record<Material, string> = {
  CONCRETE: "bg-rebar",
  PAVERS: "bg-steel",
  ASPHALT: "bg-gold",
};

export function MaterialComparisonChart() {
  return (
    <figure className="card-light p-6 md:p-7 status-steel my-8">
      <figcaption className="mb-5">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-2">
          DATA · DRIVEWAY MATERIALS · RELATIVE
        </p>
        <p className="text-base font-bold text-anthracite leading-snug">
          Concrete vs pavers vs asphalt — the four axes that decide it
        </p>
      </figcaption>

      <div className="space-y-5">
        {DIMENSIONS.map((d) => (
          <div key={d.label}>
            <div className="flex items-baseline justify-between gap-3 mb-1.5">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-anthracite">
                {d.label}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-slate-warm truncate">
                {d.note}
              </span>
            </div>
            <ul className="space-y-1.5" role="list">
              {(Object.keys(d.scores) as Material[]).map((m) => (
                <li
                  key={m}
                  className="grid grid-cols-[4.5rem_1fr_1.5rem] items-center gap-3"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-stone">
                    {m}
                  </span>
                  <div
                    className="h-2.5 bg-warm-border/40 rounded-sm overflow-hidden"
                    role="img"
                    aria-label={`${d.label.toLowerCase()} — ${m.toLowerCase()}: ${d.scores[m]} of 5`}
                  >
                    <div
                      className={`h-full ${MATERIAL_STYLE[m]}`}
                      style={{ width: `${(d.scores[m] / 5) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-[11px] tabular-nums text-anthracite text-right">
                    {d.scores[m]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-warm-border font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm">
        Relative 1–5 · install quality moves every number · our honest read
      </div>
    </figure>
  );
}
