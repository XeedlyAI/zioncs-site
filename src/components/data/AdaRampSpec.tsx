/**
 * ADA ramp cross-section spec diagram. Inline SVG, server-renderable, no JS.
 * Shows the 1:12 running slope, 60-inch landing, and the numbers that fail
 * inspection most. Engineering-drawing aesthetic per the design system.
 */

export function AdaRampSpec() {
  return (
    <figure className="card-light p-6 md:p-7 status-steel my-8">
      <figcaption className="mb-5">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-2">
          SPEC · ADA RAMP · CROSS-SECTION
        </p>
        <p className="text-base font-bold text-anthracite leading-snug">
          The slope geometry inspectors measure
        </p>
      </figcaption>

      <svg
        viewBox="0 0 640 240"
        className="w-full h-auto"
        role="img"
        aria-label="ADA ramp cross-section: 1 to 12 maximum running slope, 30 inch maximum rise per run, 60 inch level landing at top and bottom, 2 percent maximum cross slope"
      >
        {/* ground line */}
        <line x1="20" y1="200" x2="620" y2="200" stroke="#8B857B" strokeWidth="1.5" />

        {/* lower landing */}
        <rect x="40" y="192" width="110" height="8" fill="#5B7C99" opacity="0.9" />
        <text x="95" y="220" textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize="10" fill="#57534E" letterSpacing="0.1em">
          LANDING ≥60″
        </text>

        {/* ramp run */}
        <polygon points="150,200 450,200 450,150" fill="#5B7C99" opacity="0.35" />
        <line x1="150" y1="200" x2="450" y2="150" stroke="#5B7C99" strokeWidth="3" />

        {/* slope callout */}
        <text x="290" y="160" textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize="12" fontWeight="700" fill="#26221C" letterSpacing="0.08em">
          MAX 1:12 (8.33%)
        </text>

        {/* rise dimension */}
        <line x1="458" y1="200" x2="458" y2="150" stroke="#B45309" strokeWidth="1" strokeDasharray="3 3" />
        <text x="470" y="178" fontFamily="var(--font-mono, monospace)" fontSize="10" fill="#B45309" letterSpacing="0.08em">
          RISE ≤30″
        </text>
        <text x="470" y="192" fontFamily="var(--font-mono, monospace)" fontSize="10" fill="#B45309" letterSpacing="0.08em">
          PER RUN
        </text>

        {/* upper landing */}
        <rect x="450" y="142" width="130" height="8" fill="#5B7C99" opacity="0.9" />
        <text x="515" y="132" textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize="10" fill="#57534E" letterSpacing="0.1em">
          LANDING ≥60″
        </text>

        {/* run dimension */}
        <line x1="150" y1="212" x2="450" y2="212" stroke="#8B857B" strokeWidth="1" />
        <line x1="150" y1="208" x2="150" y2="216" stroke="#8B857B" strokeWidth="1" />
        <line x1="450" y1="208" x2="450" y2="216" stroke="#8B857B" strokeWidth="1" />
        <text x="300" y="230" textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize="10" fill="#57534E" letterSpacing="0.1em">
          12″ OF RUN PER 1″ OF RISE
        </text>

        {/* cross-slope note */}
        <text x="40" y="40" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" fill="#26221C" letterSpacing="0.08em">
          CROSS-SLOPE ≤2% (1:48)
        </text>
        <text x="40" y="58" fontFamily="var(--font-mono, monospace)" fontSize="10" fill="#57534E" letterSpacing="0.06em">
          MEASURED PERPENDICULAR TO TRAVEL —
        </text>
        <text x="40" y="72" fontFamily="var(--font-mono, monospace)" fontSize="10" fill="#57534E" letterSpacing="0.06em">
          THE NUMBER THAT FAILS MOST INSPECTIONS
        </text>
      </svg>

      <div className="mt-4 pt-4 border-t border-warm-border font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm">
        General guidance · 2010 ADA Standards · verify against current plans
      </div>
    </figure>
  );
}
