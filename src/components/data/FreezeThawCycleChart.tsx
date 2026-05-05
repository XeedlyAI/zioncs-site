/**
 * Freeze-thaw cycle chart for the Wasatch Front.
 * 12-month horizontal bar chart, intensity scaled by typical freeze-thaw
 * cycles per month. Server-renderable, no JS, no chart library.
 *
 * Source approximation: 30-yr Utah Climate Center averages for the SLC
 * metro. Marked "Wasatch Front · 30-yr avg" — flagged in the calibration
 * doc as needing UGS/UCC verification before claiming as authoritative.
 */

type MonthData = {
  month: string;
  short: string;
  cycles: number;
};

const MONTHS: readonly MonthData[] = [
  { month: "January", short: "JAN", cycles: 14 },
  { month: "February", short: "FEB", cycles: 12 },
  { month: "March", short: "MAR", cycles: 11 },
  { month: "April", short: "APR", cycles: 7 },
  { month: "May", short: "MAY", cycles: 2 },
  { month: "June", short: "JUN", cycles: 0 },
  { month: "July", short: "JUL", cycles: 0 },
  { month: "August", short: "AUG", cycles: 0 },
  { month: "September", short: "SEP", cycles: 1 },
  { month: "October", short: "OCT", cycles: 5 },
  { month: "November", short: "NOV", cycles: 9 },
  { month: "December", short: "DEC", cycles: 11 },
];

const TOTAL = MONTHS.reduce((sum, m) => sum + m.cycles, 0);
const MAX = Math.max(...MONTHS.map((m) => m.cycles));

export function FreezeThawCycleChart() {
  return (
    <figure className="card-light p-6 md:p-7 status-steel my-8">
      <figcaption className="mb-5">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-2">
          DATA · WASATCH FRONT · 30-YR AVG
        </p>
        <p className="text-base font-bold text-anthracite leading-snug">
          Freeze-thaw cycles per month
        </p>
        <p className="font-mono text-[11px] text-stone mt-1">
          Approx.{" "}
          <span className="font-semibold text-anthracite tabular-nums">
            {TOTAL}
          </span>{" "}
          cycles/year · daily lows crossing 32°F
        </p>
      </figcaption>

      <ul className="space-y-2" role="list">
        {MONTHS.map((m) => {
          const pct = MAX === 0 ? 0 : (m.cycles / MAX) * 100;
          const intensity =
            m.cycles >= 10
              ? "bg-brick"
              : m.cycles >= 5
                ? "bg-gold"
                : m.cycles >= 1
                  ? "bg-steel"
                  : "bg-warm-border";
          return (
            <li
              key={m.short}
              className="grid grid-cols-[2.5rem_1fr_2rem] items-center gap-3"
            >
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-stone">
                {m.short}
              </span>
              <div
                className="h-3 bg-warm-border/40 rounded-sm overflow-hidden"
                role="img"
                aria-label={`${m.month}: ${m.cycles} freeze-thaw cycles`}
              >
                <div
                  className={`h-full ${intensity} transition-all`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="font-mono text-[11px] tabular-nums text-anthracite text-right">
                {m.cycles}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 pt-4 border-t border-warm-border flex items-center justify-between gap-4 flex-wrap font-mono text-[10px] uppercase tracking-[0.12em] text-stone">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-warm-border rounded-sm" />
            <span>0</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-steel rounded-sm" />
            <span>1–4</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-gold rounded-sm" />
            <span>5–9</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-brick rounded-sm" />
            <span>10+</span>
          </span>
        </div>
        <span className="text-slate-warm">
          Source: 30-yr SLC metro avg · for visualization
        </span>
      </div>
    </figure>
  );
}
