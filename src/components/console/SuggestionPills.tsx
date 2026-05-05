import type { ConsoleQuery } from "@/types/console";

interface SuggestionPillsProps {
  queries: readonly ConsoleQuery[];
  onSelect: (id: string) => void;
  /** Compact mode shows fewer pills + tighter spacing for the hero mini console. */
  compact?: boolean;
  disabled?: boolean;
}

export function SuggestionPills({
  queries,
  onSelect,
  compact = false,
  disabled = false,
}: SuggestionPillsProps) {
  return (
    <div
      className={`flex flex-wrap ${compact ? "gap-1.5" : "gap-2"}`}
      role="list"
      aria-label="Suggested questions"
    >
      {queries.map((q) => (
        <button
          key={q.id}
          type="button"
          onClick={() => onSelect(q.id)}
          disabled={disabled}
          className={`font-mono uppercase tracking-[0.1em] rounded border bg-anthracite/30 border-concrete/25 text-bone/85 hover:text-paper hover:border-steel-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            compact
              ? "text-[10px] px-2.5 py-1.5"
              : "text-[11px] px-3 py-2"
          }`}
        >
          &gt; {q.label}
        </button>
      ))}
    </div>
  );
}
