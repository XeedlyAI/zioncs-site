/* eslint-disable @next/next/no-img-element */

export type SpecRow = {
  key: string;
  value: string;
};

interface ServiceSpecBlockProps {
  title: string;
  specs: SpecRow[];
  /** Optional caption rendered below the spec rows in mono caption style */
  footnote?: string;
}

/**
 * Engineering-spec card per ZIONCS_DESIGN_CALIBRATION § Component design language.
 * Reads like a code block / spec sheet. Anthracite-elevated surface with
 * 3px-left-border in steel. Medallion stamp in the top-right reads as a
 * "ZionCS-verified" warranty seal — adds brand presence without competing.
 */
export function ServiceSpecBlock({
  title,
  specs,
  footnote,
}: ServiceSpecBlockProps) {
  return (
    <aside
      className="card-dark p-6 md:p-7 status-steel font-mono relative"
      aria-label="Service specifications"
    >
      {/* Warranty/verification stamp — top-right corner */}
      <img
        src="/brand/zioncs-mascot.png"
        alt=""
        aria-hidden="true"
        width={170}
        height={170}
        className="absolute top-4 right-4 w-12 h-12 opacity-90 pointer-events-none"
      />
      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-5 pr-14">
        // SPEC // {title}
      </p>
      <dl className="space-y-3">
        {specs.map((row) => (
          <div
            key={row.key}
            className="grid grid-cols-[7.5rem_1fr] sm:grid-cols-[8rem_1fr] gap-3 items-baseline border-b border-concrete/15 pb-2 last:border-b-0 last:pb-0"
          >
            <dt className="text-[11px] uppercase tracking-[0.12em] font-semibold text-stone">
              {row.key}
            </dt>
            <dd className="text-[13px] text-bone leading-snug break-words">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
      {footnote && (
        <p className="text-[10px] uppercase tracking-[0.12em] text-stone mt-5 pt-4 border-t border-concrete/15">
          {footnote}
        </p>
      )}
    </aside>
  );
}
