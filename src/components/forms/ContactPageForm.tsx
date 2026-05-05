"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { EASE } from "@/lib/motion";

type FormState = "idle" | "sending" | "sent" | "error";

const INPUT_CLASS =
  "w-full px-4 py-3 text-sm bg-paper border border-warm-border rounded-md text-anthracite placeholder:text-stone focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-colors disabled:opacity-50";

const LABEL_CLASS =
  "block font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-2";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Slim contact-page form. Posts to /api/intake (same endpoint as the
 * Intelligence Console intake action card) with a "contact-page" context
 * tag so the team can tell apart the entry path. Simpler than QuoteForm
 * — no service / city / size / timeline dropdowns since this is for
 * non-quote inquiries.
 */
export function ContactPageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "sending") return;
    setError(null);

    if (website) {
      // Honeypot triggered — silently succeed without sending
      setState("sent");
      return;
    }
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!email.trim() || !EMAIL_RE.test(email.trim())) {
      setError("Valid email is required.");
      return;
    }

    setState("sending");
    try {
      const resp = await fetch("/api/intake", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          context: "contact-page",
        }),
      });
      const data = (await resp.json()) as { error?: string };
      if (!resp.ok) {
        setState("error");
        setError(
          data.error ?? `Couldn't send — try calling ${CONTACT.phone}.`
        );
        return;
      }
      setState("sent");
    } catch {
      setState("error");
      setError(
        `Network error — call ${CONTACT.phone} if this keeps failing.`
      );
    }
  }

  if (state === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="card-light p-8 status-rebar text-center"
        role="status"
        aria-live="polite"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rebar/15 text-rebar mb-5">
          <Check size={22} aria-hidden />
        </div>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-rebar mb-3">
          MESSAGE SENT
        </p>
        <h3 className="text-2xl font-extrabold tracking-tight text-anthracite mb-3">
          Got it — talk soon.
        </h3>
        <p className="text-stone leading-relaxed max-w-md mx-auto">
          We&rsquo;ll respond within 2 business hours during normal
          office hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-light p-6 md:p-7 status-orange space-y-4"
      noValidate
    >
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-2">
        SEND A MESSAGE
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cp-name" className={LABEL_CLASS}>
            Name <span className="text-brand-orange">*</span>
          </label>
          <input
            id="cp-name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={state === "sending"}
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="cp-email" className={LABEL_CLASS}>
            Email <span className="text-brand-orange">*</span>
          </label>
          <input
            id="cp-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={state === "sending"}
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cp-phone" className={LABEL_CLASS}>
          Phone <span className="text-stone">(optional — faster than email)</span>
        </label>
        <input
          id="cp-phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={state === "sending"}
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="cp-message" className={LABEL_CLASS}>
          What&rsquo;s on your mind?{" "}
          <span className="text-stone">(optional)</span>
        </label>
        <textarea
          id="cp-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={state === "sending"}
          rows={5}
          placeholder="If you're after a written quote, the quote form has dropdowns to capture project specifics. This form's for everything else."
          className={`${INPUT_CLASS} resize-none`}
        />
      </div>

      {/* Honeypot — visually hidden */}
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
        <label htmlFor="cp-website">Website (leave blank)</label>
        <input
          id="cp-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {error && (
        <p
          role="alert"
          className="font-mono text-[10px] uppercase tracking-[0.12em] text-brick flex items-center gap-1.5"
        >
          <AlertCircle size={11} aria-hidden />
          {error}
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-warm-border">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm">
          We don&rsquo;t share your info. Goes only to the ZionCS
          team.
        </p>
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center justify-center px-7 py-3 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
