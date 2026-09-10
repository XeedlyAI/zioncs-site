import type { ConsoleResponse } from "@/types/console";

interface ConsoleResponseRendererProps {
  response: ConsoleResponse | null;
  processing: boolean;
  /** Compact mode truncates the body to the first paragraph + 200 chars cap. */
  compact?: boolean;
  /** Optional renderer for action cards — keeps this module pure-presentational. */
  renderActions?: (response: ConsoleResponse) => React.ReactNode;
  /** Optional element rendered below body when in compact mode (e.g., "see full response →"). */
  expandSlot?: React.ReactNode;
}

function ProcessingIndicator() {
  return (
    <div className="flex items-center gap-3 py-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/zioncs-mascot.png"
        alt=""
        aria-hidden="true"
        width={28}
        height={28}
        className="w-7 h-7 rounded-full animate-bob shrink-0"
      />
      <span className="relative inline-flex w-2 h-2">
        <span className="absolute inset-0 rounded-full bg-steel-light animate-ping opacity-75" />
        <span className="relative rounded-full w-2 h-2 bg-steel-light" />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-bone/70">
        Processing query…
      </span>
    </div>
  );
}

function truncateBody(body: string, max = 200): string {
  const firstPara = body.split(/\n\n+/)[0] ?? body;
  if (firstPara.length <= max) return firstPara;
  const slice = firstPara.slice(0, max);
  // Trim back to nearest space/word boundary, then add ellipsis
  const lastSpace = slice.lastIndexOf(" ");
  const trimmed = lastSpace > 0 ? slice.slice(0, lastSpace) : slice;
  return `${trimmed}…`;
}

export function ConsoleResponseRenderer({
  response,
  processing,
  compact = false,
  renderActions,
  expandSlot,
}: ConsoleResponseRendererProps) {
  if (processing) return <ProcessingIndicator />;
  if (!response) {
    return (
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone py-3">
        Awaiting query — pick a starter or type your own.
      </p>
    );
  }

  const body = compact ? truncateBody(response.body) : response.body;
  const paragraphs = compact
    ? [body]
    : response.body.split(/\n\n+/).filter(Boolean);

  return (
    <div className="space-y-4">
      <div className="space-y-3 text-bone/85 leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i} className={compact ? "text-[14px]" : "text-base"}>
            {p}
          </p>
        ))}
      </div>

      {renderActions?.(response)}

      {compact && expandSlot}
    </div>
  );
}
