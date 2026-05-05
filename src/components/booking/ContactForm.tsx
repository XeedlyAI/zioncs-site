"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  context: string;
};

interface ContactFormProps {
  defaultValues?: Partial<ContactFormValues>;
  onSubmit: (values: ContactFormValues) => Promise<void> | void;
  submitting?: boolean;
  error?: string | null;
  /** Optional contextual blurb describing what info is helpful. */
  contextHint?: string;
}

const INPUT_CLASS =
  "w-full px-4 py-3 text-sm bg-paper border border-warm-border rounded-md text-anthracite placeholder:text-stone focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-colors disabled:opacity-50";

const LABEL_CLASS =
  "block font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-2";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({
  defaultValues = {},
  onSubmit,
  submitting = false,
  error = null,
  contextHint,
}: ContactFormProps) {
  const [name, setName] = useState(defaultValues.name ?? "");
  const [email, setEmail] = useState(defaultValues.email ?? "");
  const [phone, setPhone] = useState(defaultValues.phone ?? "");
  const [context, setContext] = useState(defaultValues.context ?? "");
  const [localError, setLocalError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setLocalError(null);
    if (!name.trim()) {
      setLocalError("Name is required.");
      return;
    }
    if (!email.trim() || !EMAIL_RE.test(email.trim())) {
      setLocalError("Valid email is required.");
      return;
    }
    onSubmit({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      context: context.trim(),
    });
  }

  const displayError = error ?? localError;

  return (
    <form onSubmit={handleSubmit} className="card-light p-6 md:p-7 space-y-4" noValidate>
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-2">
        03 / CONTACT INFO
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="bk-name" className={LABEL_CLASS}>
            Name <span className="text-brand-orange">*</span>
          </label>
          <input
            id="bk-name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={submitting}
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="bk-email" className={LABEL_CLASS}>
            Email <span className="text-brand-orange">*</span>
          </label>
          <input
            id="bk-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div>
        <label htmlFor="bk-phone" className={LABEL_CLASS}>
          Phone <span className="text-stone">(optional — faster than email)</span>
        </label>
        <input
          id="bk-phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={submitting}
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="bk-context" className={LABEL_CLASS}>
          What should we know before the call?{" "}
          <span className="text-stone">(optional)</span>
        </label>
        <textarea
          id="bk-context"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          disabled={submitting}
          rows={4}
          className={`${INPUT_CLASS} resize-none`}
          placeholder={
            contextHint ??
            "Project type, dimensions, location, hard deadlines, anything else."
          }
        />
      </div>

      {displayError && (
        <p
          role="alert"
          className="font-mono text-[10px] uppercase tracking-[0.12em] text-brick flex items-center gap-1.5"
        >
          <AlertCircle size={11} aria-hidden />
          {displayError}
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-warm-border">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm">
          We don&rsquo;t share your info. Submission goes only to the ZionCS
          team.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center px-7 py-3 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Booking…" : "Confirm booking"}
        </button>
      </div>
    </form>
  );
}
