/**
 * Utah pour-conditions calendar. 12-month band showing when standard pours,
 * hot-weather measures, and cold-weather measures apply along the Wasatch
 * Front. Server-renderable, no JS, matches FreezeThawCycleChart conventions.
 *
 * Bands are practice-based (crew scheduling reality), not climatological
 * gospel — labeled "typical Wasatch Front practice" accordingly.
 */

type PourCondition = "prime" | "workable" | "hot" | "cold";

type MonthBand = {
  month: string;
  short: string;
  condition: PourCondition;
  note: string;
};

const MONTHS: readonly MonthBand[] = [
  { month: "January", short: "JAN", condition: "cold", note: "Cold-weather measures or wait" },
  { month: "February", short: "FEB", condition: "cold", note: "Cold-weather measures or wait" },
  { month: "March", short: "MAR", condition: "workable", note: "Watch overnight freezes" },
  { month: "April", short: "APR", condition: "prime", note: "Prime window opens" },
  { month: "May", short: "MAY", condition: "prime", note: "Prime" },
  { month: "June", short: "JUN", condition: "prime", note: "Prime · watch late-month heat" },
  { month: "July", short: "JUL", condition: "hot", note: "Hot-weather measures · early starts" },
  { month: "August", short: "AUG", condition: "hot", note: "Hot-weather measures · early starts" },
  { month: "September", short: "SEP", condition: "prime", note: "Prime window returns" },
  { month: "October", short: "OCT", condition: "prime", note: "Prime · watch first freezes late" },
  { month: "November", short: "NOV", condition: "workable", note: "Shortening window · blankets on hand" },
  { month: "December", short: "DEC", condition: "cold", note: "Cold-weather measures or wait" },
];

const CONDITION_STYLE: Record<PourCondition, { chip: string; label: string }> = {
  prime: { chip: "bg-rebar", label: "PRIME" },
  workable: { chip: "bg-steel", label: "WORKABLE" },
  hot: { chip: "bg-gold", label: "HOT MEASURES" },
  cold: { chip: "bg-brick", label: "COLD MEASURES" },
};

export function PourWindowChart() {
  return (
    <figure className="card-light p-6 md:p-7 status-steel my-8">
      <figcaption className="mb-5">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-2">
          DATA · WASATCH FRONT · POUR CALENDAR
        </p>
        <p className="text-base font-bold text-anthracite leading-snug">
          When concrete pours in Utah — month by month
        </p>
        <p className="font-mono text-[11px] text-stone mt-1">
          The 50–85°F placement window drives the calendar
        </p>
      </figcaption>

      <ul className="space-y-2" role="list">
        {MONTHS.map((m) => {
          const s = CONDITION_STYLE[m.condition];
          return (
            <li
              key={m.short}
              className="grid grid-cols-[2.5rem_7rem_1fr] items-center gap-3"
            >
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-stone">
                {m.short}
              </span>
              <span
                className={`h-3 rounded-sm ${s.chip}`}
                role="img"
                aria-label={`${m.month}: ${s.label.toLowerCase()}`}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-slate-warm truncate">
                {m.note}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 pt-4 border-t border-warm-border flex items-center justify-between gap-4 flex-wrap font-mono text-[10px] uppercase tracking-[0.12em] text-stone">
        <div className="flex items-center gap-3 flex-wrap">
          {(Object.keys(CONDITION_STYLE) as PourCondition[]).map((k) => (
            <span key={k} className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-sm ${CONDITION_STYLE[k].chip}`} />
              <span>{CONDITION_STYLE[k].label}</span>
            </span>
          ))}
        </div>
        <span className="text-slate-warm">Typical Wasatch Front practice</span>
      </div>
    </figure>
  );
}
