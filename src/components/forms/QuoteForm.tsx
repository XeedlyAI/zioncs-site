"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, AlertCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { FIRM_FACTS } from "@/lib/firm-facts";
import {
  SERVICE_OPTIONS,
  CITY_OPTIONS,
  TIMELINE_OPTIONS,
  BUYER_TYPE_OPTIONS,
} from "@/data/quote-options";
import { EASE } from "@/lib/motion";

type FormState = "idle" | "sending" | "sent" | "error";
type FieldErrors = Record<string, string>;

interface QuoteFormProps {
  /** When set, this preselects the service field. */
  defaultService?: string;
  /** When set, this preselects the buyer type. */
  defaultBuyerType?: string;
}

const SELECT_CLASS =
  "w-full appearance-none px-4 py-3 pr-10 text-sm bg-paper border border-warm-border rounded-md text-anthracite placeholder:text-stone focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-colors disabled:opacity-50";

const INPUT_CLASS =
  "w-full px-4 py-3 text-sm bg-paper border border-warm-border rounded-md text-anthracite placeholder:text-stone focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-colors disabled:opacity-50";

const LABEL_CLASS =
  "block font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-2";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-brick mt-1.5 flex items-center gap-1">
      <AlertCircle size={10} aria-hidden />
      {msg}
    </p>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  error,
  required,
  disabled,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label} {required && <span className="text-brand-orange">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          className={SELECT_CLASS}
        >
          <option value="">— Pick one —</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none"
          aria-hidden
        />
      </div>
      <FieldError msg={error} />
    </div>
  );
}

export function QuoteForm({
  defaultService,
  defaultBuyerType,
}: QuoteFormProps = {}) {
  const [buyerType, setBuyerType] = useState(defaultBuyerType ?? "");
  const [serviceType, setServiceType] = useState(defaultService ?? "");
  const [city, setCity] = useState("");
  const [size, setSize] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  /** Honeypot — field hidden from humans; bots will fill it. */
  const [website, setWebsite] = useState("");

  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [rootError, setRootError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    setErrors({});
    setRootError(null);

    try {
      const resp = await fetch("/api/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          buyerType,
          serviceType,
          city,
          size,
          timeline,
          name,
          email,
          phone,
          details,
          website,
        }),
      });
      const data = (await resp.json()) as {
        error?: string;
        fieldErrors?: FieldErrors;
      };
      if (!resp.ok) {
        setState("error");
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setRootError(data.error ?? "Submission failed.");
        return;
      }
      setState("sent");
    } catch {
      setState("error");
      setRootError(
        `Network error — call us directly at ${CONTACT.phone} if this keeps failing.`
      );
    }
  }

  if (state === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="card-light p-8 md:p-10 status-rebar text-center"
        role="status"
        aria-live="polite"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/zioncs-mascot.png"
          alt=""
          aria-hidden="true"
          width={170}
          height={170}
          className="w-20 h-20 mx-auto mb-4"
        />
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-rebar mb-3">
          QUOTE REQUEST RECEIVED · STAMPED
        </p>
        <h3 className="text-2xl font-extrabold tracking-tight text-anthracite mb-3">
          Got it — we&rsquo;ll be in touch.
        </h3>
        <p className="text-stone leading-relaxed mb-5 max-w-md mx-auto">
          Average response is {FIRM_FACTS.avgResponseTime}. Check your
          inbox for a confirmation email — reply to it with photos if
          you&rsquo;ve got them.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm">
          Need to reach us sooner? Call{" "}
          <a
            href={CONTACT.phoneHref}
            className="text-brand-orange hover:text-brand-orange-hover underline-offset-4 hover:underline"
          >
            {CONTACT.phone}
          </a>
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="card-light p-6 md:p-8 status-orange space-y-5"
      noValidate
    >
      {/* Section 1 — project */}
      <div>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-4">
          01 / PROJECT
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SelectField
            id="buyerType"
            label="Who are you?"
            value={buyerType}
            onChange={setBuyerType}
            options={BUYER_TYPE_OPTIONS}
            error={errors.buyerType}
            required
            disabled={state === "sending"}
          />
          <SelectField
            id="serviceType"
            label="What service?"
            value={serviceType}
            onChange={setServiceType}
            options={SERVICE_OPTIONS}
            error={errors.serviceType}
            required
            disabled={state === "sending"}
          />
          <SelectField
            id="city"
            label="Project city"
            value={city}
            onChange={setCity}
            options={CITY_OPTIONS}
            error={errors.city}
            required
            disabled={state === "sending"}
          />
          <SelectField
            id="timeline"
            label="Timeline"
            value={timeline}
            onChange={setTimeline}
            options={TIMELINE_OPTIONS}
            error={errors.timeline}
            required
            disabled={state === "sending"}
          />
          <div className="md:col-span-2">
            <label htmlFor="size" className={LABEL_CLASS}>
              Rough project size <span className="text-stone">(optional)</span>
            </label>
            <input
              id="size"
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              disabled={state === "sending"}
              placeholder="e.g. 1,800 sq ft driveway / 14 dumpster pads / unsure"
              className={INPUT_CLASS}
            />
          </div>
        </div>
      </div>

      {/* Section 2 — contact */}
      <div className="pt-2">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-4">
          02 / CONTACT
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={LABEL_CLASS}>
              Name <span className="text-brand-orange">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={state === "sending"}
              aria-invalid={Boolean(errors.name)}
              autoComplete="name"
              className={INPUT_CLASS}
            />
            <FieldError msg={errors.name} />
          </div>
          <div>
            <label htmlFor="email" className={LABEL_CLASS}>
              Email <span className="text-brand-orange">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={state === "sending"}
              aria-invalid={Boolean(errors.email)}
              autoComplete="email"
              className={INPUT_CLASS}
            />
            <FieldError msg={errors.email} />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="phone" className={LABEL_CLASS}>
              Phone <span className="text-stone">(optional — faster than email)</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={state === "sending"}
              autoComplete="tel"
              className={INPUT_CLASS}
            />
            <FieldError msg={errors.phone} />
          </div>
        </div>
      </div>

      {/* Section 3 — details */}
      <div className="pt-2">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-4">
          03 / DETAILS
        </p>
        <label htmlFor="details" className={LABEL_CLASS}>
          Anything we should know?{" "}
          <span className="text-stone">(optional)</span>
        </label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          disabled={state === "sending"}
          rows={5}
          placeholder="Specific finish, access constraints, hard deadline, anything else."
          className={`${INPUT_CLASS} resize-none`}
        />
        <FieldError msg={errors.details} />
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm mt-2">
          Want to send photos? Submit the form, then reply to the
          confirmation email — photos go straight to the team.
        </p>
      </div>

      {/* Honeypot — visually hidden, off the keyboard tab order */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">Website (leave blank)</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {rootError && (
        <div
          role="alert"
          className="card-light status-brick p-4 text-sm text-anthracite"
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-brick mb-1">
            ERROR
          </p>
          <p>{rootError}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-warm-border">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm">
          By submitting you agree we may contact you about your project.
          We don&rsquo;t share your info.
        </p>
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
        >
          {state === "sending" ? "Sending…" : "Send quote request"}
        </button>
      </div>

      <AnimatePresence>
        {state === "sending" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone text-center"
          >
            Submitting…
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
