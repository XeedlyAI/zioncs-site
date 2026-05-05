"use client";

import Link from "next/link";
import { Check, Calendar, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import type { BookingTypeConfig } from "@/types/booking";

interface ConfirmationProps {
  config: BookingTypeConfig;
  /** Pre-formatted timestamp string from the API response. */
  formattedTime: string;
  attendeeName: string;
  attendeeEmail: string;
}

export function Confirmation({
  config,
  formattedTime,
  attendeeName,
  attendeeEmail,
}: ConfirmationProps) {
  return (
    <div
      className="card-light p-8 md:p-10 status-rebar text-center"
      role="status"
      aria-live="polite"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rebar/15 text-rebar mb-5">
        <Check size={22} aria-hidden />
      </div>
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-rebar mb-3">
        BOOKING CONFIRMED
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-anthracite mb-3 leading-tight">
        See you on the call, {attendeeName.split(" ")[0]}.
      </h2>

      <div className="card-light status-steel p-5 max-w-sm mx-auto mt-6 mb-6 text-left">
        <div className="flex items-start gap-3 mb-3">
          <Calendar size={16} className="text-steel mt-1 shrink-0" aria-hidden />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-warm mb-1">
              {config.title} · {config.durationMinutes} min
            </p>
            <p className="text-sm font-bold text-anthracite leading-snug">
              {formattedTime}
            </p>
          </div>
        </div>
      </div>

      <p className="text-stone leading-relaxed mb-6 max-w-md mx-auto">
        Confirmation email&rsquo;s on its way to{" "}
        <span className="font-mono text-anthracite">{attendeeEmail}</span>.
        We&rsquo;ll reach out the day before to confirm.
      </p>

      <div className="flex flex-wrap justify-center gap-3 pt-4 border-t border-warm-border">
        <a
          href={CONTACT.phoneHref}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-warm-border hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
        >
          <Phone size={14} aria-hidden />
          Need to reach us? {CONTACT.phone}
        </a>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2.5 bg-anthracite hover:bg-anthracite-elevated text-bone font-semibold text-sm rounded-lg transition-colors"
        >
          Back to home
        </Link>
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm mt-6">
        To reschedule, reply to the confirmation email or call us directly.
      </p>
    </div>
  );
}
