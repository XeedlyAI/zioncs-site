"use client";

import { useMemo, useState } from "react";
import type { BookingRecord } from "@/data/bookings-schema";
import type { BookingPersona, BookingTypeSlug } from "@/types/booking";

const STATUS_COLOR: Record<BookingRecord["status"], string> = {
  booked: "text-rebar bg-rebar/15",
  held: "text-gold bg-gold/15",
  "no-show": "text-brick bg-brick/15",
  cancelled: "text-stone bg-warm-border",
  completed: "text-steel bg-steel/15",
};

const PERSONA_LABEL: Record<BookingPersona, string> = {
  residential: "RES",
  builder: "BLD",
  commercial: "COM",
  enterprise: "ENT",
};

type StatusFilter = BookingRecord["status"] | "all";
type TypeFilter = BookingTypeSlug | "all";

interface BookingsTableProps {
  records: BookingRecord[];
}

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Denver",
  });
}

export function BookingsTable({ records }: BookingsTableProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [sortBy, setSortBy] = useState<"start" | "created">("start");

  const filtered = useMemo(() => {
    return records
      .filter((r) => {
        if (statusFilter !== "all" && r.status !== statusFilter) return false;
        if (typeFilter !== "all" && r.bookingType !== typeFilter) return false;
        return true;
      })
      .sort((a, b) => {
        const keyA = sortBy === "start" ? a.startISO : a.createdAt;
        const keyB = sortBy === "start" ? b.startISO : b.createdAt;
        return new Date(keyB).getTime() - new Date(keyA).getTime();
      });
  }, [records, statusFilter, typeFilter, sortBy]);

  const counts = useMemo(() => {
    return {
      total: records.length,
      booked: records.filter((r) => r.status === "booked").length,
      completed: records.filter((r) => r.status === "completed").length,
      cancelled: records.filter((r) => r.status === "cancelled").length,
    };
  }, [records]);

  return (
    <div className="space-y-5">
      {/* Summary chips */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">
        <div className="card-light p-4">
          <p className="text-slate-warm mb-1">Total</p>
          <p className="text-anthracite font-bold tabular-nums text-2xl">
            {counts.total}
          </p>
        </div>
        <div className="card-light p-4 status-rebar">
          <p className="text-rebar mb-1">Booked</p>
          <p className="text-anthracite font-bold tabular-nums text-2xl">
            {counts.booked}
          </p>
        </div>
        <div className="card-light p-4 status-steel">
          <p className="text-steel mb-1">Completed</p>
          <p className="text-anthracite font-bold tabular-nums text-2xl">
            {counts.completed}
          </p>
        </div>
        <div className="card-light p-4">
          <p className="text-stone mb-1">Cancelled</p>
          <p className="text-anthracite font-bold tabular-nums text-2xl">
            {counts.cancelled}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="card-light p-4 flex flex-wrap items-center gap-3">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm">
          FILTER
        </p>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
          className="px-3 py-1.5 text-sm bg-paper border border-warm-border rounded-md text-anthracite font-mono uppercase tracking-[0.05em]"
          aria-label="Filter by status"
        >
          <option value="all">ALL STATUSES</option>
          <option value="booked">Booked</option>
          <option value="held">Held</option>
          <option value="completed">Completed</option>
          <option value="no-show">No-show</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value as TypeFilter)}
          className="px-3 py-1.5 text-sm bg-paper border border-warm-border rounded-md text-anthracite font-mono uppercase tracking-[0.05em]"
          aria-label="Filter by booking type"
        >
          <option value="all">ALL TYPES</option>
          <option value="quote-request-residential">Residential quote</option>
          <option value="discovery-call-builder">Builder call</option>
          <option value="discovery-call-commercial">Commercial call</option>
          <option value="discovery-call-enterprise">Enterprise call</option>
        </select>
        <div className="ml-auto flex items-center gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm">
            SORT
          </p>
          <button
            type="button"
            onClick={() => setSortBy("start")}
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-[0.1em] rounded-md transition-colors ${
              sortBy === "start"
                ? "bg-anthracite text-bone"
                : "bg-paper border border-warm-border text-stone hover:text-anthracite"
            }`}
          >
            By start
          </button>
          <button
            type="button"
            onClick={() => setSortBy("created")}
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-[0.1em] rounded-md transition-colors ${
              sortBy === "created"
                ? "bg-anthracite text-bone"
                : "bg-paper border border-warm-border text-stone hover:text-anthracite"
            }`}
          >
            By created
          </button>
        </div>
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="card-light p-10 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone">
            No bookings match the current filters.
          </p>
        </div>
      ) : (
        <div className="card-light overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-warm-border bg-bg-sand-wash">
                <th className="text-left p-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-warm">
                  Status
                </th>
                <th className="text-left p-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-warm">
                  Persona
                </th>
                <th className="text-left p-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-warm">
                  Attendee
                </th>
                <th className="text-left p-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-warm">
                  When
                </th>
                <th className="text-left p-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-warm">
                  Context
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-warm-border last:border-b-0 hover:bg-bg-sand-wash/50 transition-colors"
                >
                  <td className="p-3 align-top">
                    <span
                      className={`inline-block px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] rounded ${STATUS_COLOR[r.status]}`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="p-3 align-top">
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] font-semibold text-steel">
                      {PERSONA_LABEL[r.persona]}
                    </span>
                  </td>
                  <td className="p-3 align-top">
                    <p className="font-semibold text-anthracite">
                      {r.attendeeName}
                    </p>
                    <p className="font-mono text-[11px] text-stone break-all">
                      {r.attendeeEmail}
                    </p>
                    {r.attendeePhone && (
                      <p className="font-mono text-[11px] text-stone">
                        {r.attendeePhone}
                      </p>
                    )}
                  </td>
                  <td className="p-3 align-top font-mono text-[11px] text-anthracite tabular-nums">
                    {formatDateTime(r.startISO)}
                  </td>
                  <td className="p-3 align-top text-stone text-[13px] max-w-md">
                    {r.meetingContext || (
                      <span className="text-slate-warm italic">
                        — no context —
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
