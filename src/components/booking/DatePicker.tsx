"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerProps {
  /** ISO YYYY-MM-DD strings of dates with availability. */
  availableDates: Set<string>;
  /** Current selection — ISO date or null. */
  selected: string | null;
  onSelect: (isoDate: string) => void;
}

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function isoDate(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function DatePicker({
  availableDates,
  selected,
  onSelect,
}: DatePickerProps) {
  const [viewYear, setViewYear] = useState(() => new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(() => new Date().getMonth());

  // Only allow navigation forward up to 3 months
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const maxYear = today.getFullYear();
  const maxMonth = today.getMonth() + 3;
  const canGoNext =
    viewYear * 12 + viewMonth < (maxYear * 12 + maxMonth);
  const canGoPrev =
    viewYear * 12 + viewMonth > today.getFullYear() * 12 + today.getMonth();

  const grid = useMemo(() => {
    const firstOfMonth = new Date(viewYear, viewMonth, 1);
    const startWeekday = firstOfMonth.getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const cells: { date: Date | null; iso: string | null }[] = [];
    // Padding for the first row
    for (let i = 0; i < startWeekday; i++) {
      cells.push({ date: null, iso: null });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const d = new Date(viewYear, viewMonth, day);
      cells.push({ date: d, iso: isoDate(d) });
    }
    return cells;
  }, [viewYear, viewMonth]);

  function goPrev() {
    if (!canGoPrev) return;
    if (viewMonth === 0) {
      setViewYear(viewYear - 1);
      setViewMonth(11);
    } else {
      setViewMonth(viewMonth - 1);
    }
  }

  function goNext() {
    if (!canGoNext) return;
    if (viewMonth === 11) {
      setViewYear(viewYear + 1);
      setViewMonth(0);
    } else {
      setViewMonth(viewMonth + 1);
    }
  }

  return (
    <div className="card-light p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={goPrev}
          disabled={!canGoPrev}
          className="p-1.5 rounded text-stone hover:text-anthracite hover:bg-warm-border/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous month"
        >
          <ChevronLeft size={18} aria-hidden />
        </button>
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] font-semibold text-anthracite">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </p>
        <button
          type="button"
          onClick={goNext}
          disabled={!canGoNext}
          className="p-1.5 rounded text-stone hover:text-anthracite hover:bg-warm-border/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next month"
        >
          <ChevronRight size={18} aria-hidden />
        </button>
      </div>

      <div
        className="grid grid-cols-7 gap-0.5 mb-2"
        role="row"
        aria-label="Days of week"
      >
        {WEEKDAY_LABELS.map((label, i) => (
          <div
            key={i}
            className="text-center font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm py-1.5"
            role="columnheader"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5" role="grid">
        {grid.map((cell, i) => {
          if (!cell.iso || !cell.date) {
            return <div key={i} aria-hidden="true" />;
          }
          const past = cell.date < today;
          const available = !past && availableDates.has(cell.iso);
          const isSelected = cell.iso === selected;
          const day = cell.date.getDate();

          return (
            <button
              key={i}
              type="button"
              role="gridcell"
              disabled={!available}
              aria-pressed={isSelected}
              aria-label={cell.date.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
              onClick={() => available && onSelect(cell.iso!)}
              className={[
                "relative aspect-square flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                isSelected
                  ? "bg-brand-orange text-paper font-bold"
                  : available
                    ? "bg-bg-sand-wash text-anthracite hover:bg-brand-orange-muted hover:text-anthracite"
                    : "text-stone/35 cursor-not-allowed",
              ].join(" ")}
            >
              <span className="font-mono tabular-nums">{day}</span>
              {available && !isSelected && (
                <span
                  className="absolute bottom-1 w-1 h-1 rounded-full bg-rebar"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      <p className="mt-4 pt-3 border-t border-warm-border font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-rebar" />
        Available days
      </p>
    </div>
  );
}
