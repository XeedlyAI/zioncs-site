"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Mail,
  Phone,
  ClipboardList,
  Zap,
  Check,
} from "lucide-react";
import { CONTACT } from "@/lib/contact";
import type { ConsoleAction, ConsoleResponse } from "@/types/console";

const ACTION_ICON: Record<
  ConsoleAction["type"],
  React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>
> = {
  calendar: Calendar,
  contact_info: Mail,
  intake: ClipboardList,
  direct_chat: Zap,
};

const ACCENT: Record<
  ConsoleAction["type"],
  { border: string; iconBg: string; iconText: string; pill: string }
> = {
  calendar: {
    border: "border-l-steel",
    iconBg: "bg-steel/15",
    iconText: "text-steel-light",
    pill: "text-steel-light",
  },
  contact_info: {
    border: "border-l-rebar",
    iconBg: "bg-rebar/15",
    iconText: "text-rebar",
    pill: "text-rebar",
  },
  intake: {
    border: "border-l-brand-orange",
    iconBg: "bg-brand-orange/15",
    iconText: "text-brand-orange",
    pill: "text-brand-orange",
  },
  direct_chat: {
    border: "border-l-gold",
    iconBg: "bg-gold/15",
    iconText: "text-gold",
    pill: "text-gold",
  },
};

interface ActionCardShellProps {
  action: ConsoleAction;
  children?: React.ReactNode;
}

function ActionCardShell({ action, children }: ActionCardShellProps) {
  const Icon = ACTION_ICON[action.type];
  const accent = ACCENT[action.type];
  return (
    <div
      className={`border-l-[3px] ${accent.border} bg-anthracite/40 rounded p-5`}
    >
      <div className="flex items-start gap-3 mb-3">
        <span
          className={`flex items-center justify-center w-9 h-9 rounded-md shrink-0 ${accent.iconBg}`}
        >
          <Icon size={16} aria-hidden />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-bone leading-snug">
            {action.label}
          </p>
          {action.description && (
            <p className="text-xs text-bone/70 mt-1 leading-relaxed">
              {action.description}
            </p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

function CalendarCard({
  action,
}: {
  action: Extract<ConsoleAction, { type: "calendar" }>;
}) {
  return (
    <ActionCardShell action={action}>
      <Link
        href={`/book/${action.bookingType}`}
        className="inline-flex items-center gap-1.5 ml-12 font-mono text-[11px] uppercase tracking-[0.12em] text-steel-light hover:text-paper font-semibold transition-colors"
      >
        Book a slot
        <ArrowRight size={12} aria-hidden="true" />
      </Link>
    </ActionCardShell>
  );
}

function ContactInfoCard({
  action,
}: {
  action: Extract<ConsoleAction, { type: "contact_info" }>;
}) {
  return (
    <ActionCardShell action={action}>
      <div className="ml-12 flex flex-wrap gap-x-4 gap-y-2">
        <a
          href={CONTACT.phoneHref}
          className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-rebar hover:text-paper transition-colors"
        >
          <Phone size={12} aria-hidden />
          {CONTACT.phone}
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-rebar hover:text-paper transition-colors"
        >
          <Mail size={12} aria-hidden />
          {CONTACT.email}
        </a>
      </div>
    </ActionCardShell>
  );
}

type FormState = "idle" | "sending" | "sent" | "error";

function IntakeCard({
  action,
  context,
}: {
  action: Extract<ConsoleAction, { type: "intake" }>;
  context?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }
    setState("sending");
    setError(null);
    try {
      const resp = await fetch("/api/intake", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, context }),
      });
      const data = (await resp.json()) as { error?: string };
      if (!resp.ok) {
        setState("error");
        setError(data.error ?? "Couldn't send. Try again or call us.");
        return;
      }
      setState("sent");
    } catch {
      setState("error");
      setError("Network error — call us directly if this keeps failing.");
    }
  }

  if (state === "sent") {
    return (
      <ActionCardShell action={action}>
        <div className="ml-12 flex items-center gap-2 text-rebar">
          <Check size={16} aria-hidden />
          <span className="text-sm font-semibold">
            Sent. We&rsquo;ll respond within 2 business hours.
          </span>
        </div>
      </ActionCardShell>
    );
  }

  return (
    <ActionCardShell action={action}>
      <form onSubmit={submit} className="ml-12 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name *"
            disabled={state === "sending"}
            className="px-3 py-2 text-sm bg-anthracite/40 border border-concrete/30 text-bone placeholder:text-stone rounded focus:outline-none focus:border-steel-light/60"
            aria-label="Your name"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email *"
            disabled={state === "sending"}
            className="px-3 py-2 text-sm bg-anthracite/40 border border-concrete/30 text-bone placeholder:text-stone rounded focus:outline-none focus:border-steel-light/60"
            aria-label="Your email"
          />
        </div>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone (optional)"
          disabled={state === "sending"}
          className="w-full px-3 py-2 text-sm bg-anthracite/40 border border-concrete/30 text-bone placeholder:text-stone rounded focus:outline-none focus:border-steel-light/60"
          aria-label="Your phone number"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Project details (size, location, timeline)"
          rows={3}
          disabled={state === "sending"}
          className="w-full px-3 py-2 text-sm bg-anthracite/40 border border-concrete/30 text-bone placeholder:text-stone rounded focus:outline-none focus:border-steel-light/60 resize-none"
          aria-label="Project details"
        />
        {error && (
          <p className="text-xs text-brick font-mono uppercase tracking-[0.1em]">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-xs uppercase tracking-tight rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === "sending" ? "Sending…" : "Send"}
        </button>
      </form>
    </ActionCardShell>
  );
}

function DirectChatCard({
  action,
  context,
}: {
  action: Extract<ConsoleAction, { type: "direct_chat" }>;
  context?: string;
}) {
  const [identity, setIdentity] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [draft, setDraft] = useState("");
  const [sent, setSent] = useState<{ text: string; at: string }[]>([]);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim()) return;

    if (!identity && (!name.trim() || !email.trim())) {
      setError("Add a name and email so we can reply.");
      return;
    }
    setError(null);
    setState("sending");

    const senderName = identity?.name ?? name;
    const senderEmail = identity?.email ?? email;

    try {
      const resp = await fetch("/api/direct-message", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          message: draft,
          senderName,
          senderEmail,
          context,
        }),
      });
      const data = (await resp.json()) as { error?: string };
      if (!resp.ok) {
        setState("error");
        setError(data.error ?? "Couldn't send. Try again or call us.");
        return;
      }
      if (!identity) setIdentity({ name: senderName, email: senderEmail });
      setSent((prev) => [
        ...prev,
        { text: draft, at: new Date().toISOString() },
      ]);
      setDraft("");
      setState("idle");
    } catch {
      setState("error");
      setError("Network error — call us directly if this keeps failing.");
    }
  }

  return (
    <ActionCardShell action={action}>
      <div className="ml-12">
        {sent.length > 0 && (
          <ul className="space-y-2 mb-4">
            {sent.map((m, i) => (
              <li
                key={i}
                className="text-sm text-bone/85 border-l-2 border-gold/40 pl-3 py-1"
              >
                <p className="leading-relaxed">{m.text}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-stone mt-1">
                  Sent ·{" "}
                  <time dateTime={m.at}>
                    {new Date(m.at).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </time>
                </p>
              </li>
            ))}
            <li className="font-mono text-[10px] uppercase tracking-[0.1em] text-rebar pt-1">
              Team has been notified — typical reply within 2 business hours.
            </li>
          </ul>
        )}

        <form onSubmit={send} className="space-y-2">
          {!identity && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name *"
                disabled={state === "sending"}
                className="px-3 py-2 text-sm bg-anthracite/40 border border-concrete/30 text-bone placeholder:text-stone rounded focus:outline-none focus:border-gold/60"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email *"
                disabled={state === "sending"}
                className="px-3 py-2 text-sm bg-anthracite/40 border border-concrete/30 text-bone placeholder:text-stone rounded focus:outline-none focus:border-gold/60"
              />
            </div>
          )}
          <div className="flex gap-2">
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your message…"
              disabled={state === "sending"}
              className="flex-1 px-3 py-2 text-sm bg-anthracite/40 border border-concrete/30 text-bone placeholder:text-stone rounded focus:outline-none focus:border-gold/60"
              aria-label="Message"
            />
            <button
              type="submit"
              disabled={!draft.trim() || state === "sending"}
              className="inline-flex items-center px-4 py-2 bg-gold hover:bg-gold/90 text-anthracite font-semibold text-xs uppercase tracking-tight rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state === "sending" ? "Sending…" : "Send →"}
            </button>
          </div>
          {error && (
            <p className="text-xs text-brick font-mono uppercase tracking-[0.1em]">
              {error}
            </p>
          )}
        </form>
      </div>
    </ActionCardShell>
  );
}

interface ConsoleActionsProps {
  response: ConsoleResponse;
  /** Context string sent to /api/intake + /api/direct-message — usually the user's query. */
  context?: string;
}

export function ConsoleActions({ response, context }: ConsoleActionsProps) {
  if (response.actions.length === 0) return null;
  return (
    <div className="space-y-3 mt-2">
      <AnimatePresence initial={false}>
        {response.actions.map((action, i) => (
          <motion.div
            key={`${action.type}-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.32,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {action.type === "calendar" && <CalendarCard action={action} />}
            {action.type === "contact_info" && (
              <ContactInfoCard action={action} />
            )}
            {action.type === "intake" && (
              <IntakeCard action={action} context={context} />
            )}
            {action.type === "direct_chat" && (
              <DirectChatCard action={action} context={context} />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
