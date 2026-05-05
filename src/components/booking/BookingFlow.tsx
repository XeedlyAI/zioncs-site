"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import { DatePicker } from "./DatePicker";
import { TimeSlotGrid } from "./TimeSlotGrid";
import { ContactForm, type ContactFormValues } from "./ContactForm";
import { Confirmation } from "./Confirmation";
import { EASE } from "@/lib/motion";
import type {
  AvailabilityResponse,
  AvailableSlot,
  BookingTypeConfig,
} from "@/types/booking";

type Step = "date" | "time" | "contact" | "confirmed";

interface BookingFlowProps {
  config: BookingTypeConfig;
}

export function BookingFlow({ config }: BookingFlowProps) {
  const [availability, setAvailability] =
    useState<AvailabilityResponse | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [step, setStep] = useState<Step>("date");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<AvailableSlot | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<{
    formattedTime: string;
    attendeeName: string;
    attendeeEmail: string;
  } | null>(null);

  // Fetch availability on mount
  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setLoadError(null);
      try {
        const resp = await fetch(
          `/api/booking/availability?bookingType=${encodeURIComponent(config.slug)}`,
          { cache: "no-store" }
        );
        const data = (await resp.json()) as AvailabilityResponse & {
          error?: string;
        };
        if (!resp.ok) {
          if (!cancelled) {
            setLoadError(data.error ?? "Couldn't load availability.");
            setLoading(false);
          }
          return;
        }
        if (!cancelled) {
          setAvailability(data);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setLoadError(
            "Network error — please call us directly to schedule."
          );
          setLoading(false);
        }
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [config.slug]);

  // Set of dates with available slots — used by DatePicker to enable cells
  const availableDates = useMemo(() => {
    const set = new Set<string>();
    if (!availability) return set;
    for (const [date, slots] of Object.entries(availability.slotsByDate)) {
      if (slots.length > 0) set.add(date);
    }
    return set;
  }, [availability]);

  const slotsForSelectedDate = useMemo(() => {
    if (!availability || !selectedDate) return [];
    return availability.slotsByDate[selectedDate] ?? [];
  }, [availability, selectedDate]);

  function selectDate(iso: string) {
    setSelectedDate(iso);
    setSelectedSlot(null);
    setStep("time");
  }

  function selectSlot(slot: AvailableSlot) {
    setSelectedSlot(slot);
    setStep("contact");
  }

  function backToDate() {
    setSelectedSlot(null);
    setSelectedDate(null);
    setStep("date");
  }

  function backToTime() {
    setSelectedSlot(null);
    setStep("time");
  }

  async function submitBooking(values: ContactFormValues) {
    if (!selectedSlot) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const resp = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          bookingType: config.slug,
          startISO: selectedSlot.startISO,
          attendeeName: values.name,
          attendeeEmail: values.email,
          attendeePhone: values.phone,
          meetingContext: values.context,
        }),
      });
      const data = (await resp.json()) as {
        error?: string;
        success?: boolean;
        formattedTime?: string;
      };
      if (!resp.ok || !data.success) {
        setSubmitError(data.error ?? "Booking couldn't be confirmed.");
        setSubmitting(false);
        return;
      }
      setConfirmation({
        formattedTime: data.formattedTime ?? selectedSlot.label,
        attendeeName: values.name,
        attendeeEmail: values.email,
      });
      setStep("confirmed");
      setSubmitting(false);
    } catch {
      setSubmitError("Network error — please call us to schedule.");
      setSubmitting(false);
    }
  }

  // Step indicator
  const STEPS: { key: Step; label: string }[] = [
    { key: "date", label: "Date" },
    { key: "time", label: "Time" },
    { key: "contact", label: "Contact" },
    { key: "confirmed", label: "Confirmed" },
  ];
  const currentIdx = STEPS.findIndex((s) => s.key === step);

  return (
    <div>
      {/* Step indicator */}
      <ol className="flex items-center justify-center gap-2 mb-8 font-mono text-[10px] uppercase tracking-[0.12em]">
        {STEPS.map((s, i) => {
          const done = i < currentIdx;
          const active = i === currentIdx;
          return (
            <li key={s.key} className="flex items-center gap-2">
              <div
                className={[
                  "flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors",
                  done
                    ? "bg-rebar/15 text-rebar"
                    : active
                      ? "bg-brand-orange/15 text-brand-orange font-semibold"
                      : "text-stone",
                ].join(" ")}
              >
                {done ? (
                  <Check size={11} aria-hidden />
                ) : (
                  <span className="font-bold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <span>{s.label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <span className="text-warm-border" aria-hidden>
                  ─
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {loading && (
        <div className="card-light p-8 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone">
            Loading availability…
          </p>
        </div>
      )}

      {!loading && loadError && (
        <div className="card-light status-brick p-6">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-brick mb-2">
            ERROR
          </p>
          <p className="text-stone">{loadError}</p>
        </div>
      )}

      {!loading && !loadError && availability && (
        <AnimatePresence mode="wait">
          {/* Step: pick date */}
          {step === "date" && (
            <motion.div
              key="date"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: EASE }}
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-3">
                01 / PICK A DATE
              </p>
              <DatePicker
                availableDates={availableDates}
                selected={selectedDate}
                onSelect={selectDate}
              />
              {availability.stubbed && (
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm mt-3 text-center">
                  Availability shown is illustrative — Google Calendar
                  integration activates after launch.
                </p>
              )}
            </motion.div>
          )}

          {/* Step: pick time */}
          {step === "time" && selectedDate && (
            <motion.div
              key="time"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: EASE }}
              className="space-y-4"
            >
              <button
                type="button"
                onClick={backToDate}
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-stone hover:text-anthracite transition-colors"
              >
                <ArrowLeft size={11} aria-hidden />
                Change date
              </button>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel">
                02 / PICK A TIME
              </p>
              <TimeSlotGrid
                slots={slotsForSelectedDate}
                selectedISO={selectedSlot?.startISO ?? null}
                onSelect={selectSlot}
                heading={new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              />
            </motion.div>
          )}

          {/* Step: contact form */}
          {step === "contact" && selectedSlot && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: EASE }}
              className="space-y-4"
            >
              <button
                type="button"
                onClick={backToTime}
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-stone hover:text-anthracite transition-colors"
              >
                <ArrowLeft size={11} aria-hidden />
                Change time
              </button>
              <div className="card-light status-steel p-4 mb-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm mb-1">
                  YOUR SLOT
                </p>
                <p className="text-sm font-bold text-anthracite">
                  {selectedDate &&
                    new Date(selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      timeZone: "UTC",
                    })}{" "}
                  · {selectedSlot.label} · {config.durationMinutes} min
                </p>
              </div>
              <ContactForm
                onSubmit={submitBooking}
                submitting={submitting}
                error={submitError}
                contextHint={`${config.persona === "residential" ? "Project type, dimensions, location" : "Project type, scope, scale, location, hard deadlines"}, anything else.`}
              />
            </motion.div>
          )}

          {/* Step: confirmation */}
          {step === "confirmed" && confirmation && (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: EASE }}
            >
              <Confirmation
                config={config}
                formattedTime={confirmation.formattedTime}
                attendeeName={confirmation.attendeeName}
                attendeeEmail={confirmation.attendeeEmail}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
