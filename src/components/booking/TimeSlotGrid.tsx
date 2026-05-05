"use client";

import type { AvailableSlot } from "@/types/booking";

interface TimeSlotGridProps {
  slots: AvailableSlot[];
  selectedISO: string | null;
  onSelect: (slot: AvailableSlot) => void;
  /** Heading shown above the grid — e.g. selected date readable. */
  heading: string;
}

export function TimeSlotGrid({
  slots,
  selectedISO,
  onSelect,
  heading,
}: TimeSlotGridProps) {
  return (
    <div className="card-light p-5 md:p-6">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-1">
        TIME · MOUNTAIN
      </p>
      <h3 className="text-sm font-bold text-anthracite mb-4">{heading}</h3>

      {slots.length === 0 ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone py-3">
          No slots available — pick another day.
        </p>
      ) : (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-2"
          role="radiogroup"
          aria-label="Available time slots"
        >
          {slots.map((slot) => {
            const isSelected = slot.startISO === selectedISO;
            return (
              <button
                key={slot.startISO}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => onSelect(slot)}
                className={[
                  "px-3 py-2.5 rounded-md font-mono text-[12px] tabular-nums uppercase tracking-[0.08em] transition-colors border",
                  isSelected
                    ? "bg-brand-orange border-brand-orange text-paper font-bold"
                    : "bg-bg-sand-wash border-warm-border text-anthracite hover:border-anthracite",
                ].join(" ")}
              >
                {slot.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
