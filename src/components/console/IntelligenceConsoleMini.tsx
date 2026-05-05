"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Mail, ClipboardList } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { CONSOLE_QUERIES, getConsoleQuery } from "@/data/console-queries";
import { SuggestionPills } from "./SuggestionPills";
import { ConsoleResponseRenderer } from "./ConsoleResponseRenderer";
import { dispatchConsoleQuery, scrollToConsole } from "./ConsoleEvent";
import type { ConsoleAction, ConsoleResponse } from "@/types/console";

const COMPACT_PILL_LIMIT = 4;

const ACTION_ICON: Record<ConsoleAction["type"], React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>> = {
  calendar: Calendar,
  contact_info: Mail,
  intake: ClipboardList,
  direct_chat: Mail,
};

const ACTION_ACCENT_CLASS: Record<ConsoleAction["type"], string> = {
  calendar: "border-l-steel bg-steel/10 text-steel-light",
  contact_info: "border-l-rebar bg-rebar/10 text-rebar",
  intake: "border-l-brand-orange bg-brand-orange/10 text-brand-orange",
  direct_chat: "border-l-gold bg-gold/10 text-gold",
};

/**
 * Mini-console action card. 6.1 ships the link-style version — calendar
 * opens /book/[bookingType], contact_info shows phone, intake routes to
 * /quote. Wave 6.2 replaces with the full ConsoleActions module that
 * includes the inline intake form + direct-chat input.
 */
function MiniActionCard({ action }: { action: ConsoleAction }) {
  const Icon = ACTION_ICON[action.type];

  if (action.type === "calendar") {
    return (
      <Link
        href={`/book/${action.bookingType}`}
        className={`block border-l-[3px] ${ACTION_ACCENT_CLASS.calendar} bg-anthracite/40 rounded p-4`}
      >
        <div className="flex items-start gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-md shrink-0 bg-steel/15">
            <Icon size={14} aria-hidden />
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
          <ArrowRight size={14} className="text-steel-light mt-1" aria-hidden="true" />
        </div>
      </Link>
    );
  }

  if (action.type === "contact_info") {
    return (
      <div
        className={`border-l-[3px] ${ACTION_ACCENT_CLASS.contact_info} bg-anthracite/40 rounded p-4`}
      >
        <div className="flex items-start gap-3 mb-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-md shrink-0 bg-rebar/15">
            <Icon size={14} aria-hidden />
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
        <div className="flex flex-wrap gap-3 ml-11">
          <a
            href={CONTACT.phoneHref}
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-rebar hover:text-paper transition-colors"
          >
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-rebar hover:text-paper transition-colors"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    );
  }

  // intake + direct_chat → both route to /quote in 6.1; 6.2 adds inline form
  return (
    <Link
      href="/quote"
      className={`block border-l-[3px] ${ACTION_ACCENT_CLASS[action.type]} bg-anthracite/40 rounded p-4`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex items-center justify-center w-8 h-8 rounded-md shrink-0 ${
            action.type === "intake" ? "bg-brand-orange/15" : "bg-gold/15"
          }`}
        >
          <Icon size={14} aria-hidden />
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
        <ArrowRight
          size={14}
          className={`mt-1 ${ACTION_ACCENT_CLASS[action.type].split(" ").pop()}`}
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}

function MiniActionsList({ response }: { response: ConsoleResponse }) {
  if (response.actions.length === 0) return null;
  return (
    <div className="space-y-2 mt-2">
      {response.actions.map((a, i) => (
        <MiniActionCard key={`${a.type}-${i}`} action={a} />
      ))}
    </div>
  );
}

interface IntelligenceConsoleMiniProps {
  /** Optional override for the suggestion pills shown in compact mode. */
  pillIds?: string[];
}

export function IntelligenceConsoleMini({
  pillIds,
}: IntelligenceConsoleMiniProps = {}) {
  const [processing, setProcessing] = useState(false);
  const [response, setResponse] = useState<ConsoleResponse | null>(null);
  const [activeQueryId, setActiveQueryId] = useState<string | null>(null);
  const [activeQueryText, setActiveQueryText] = useState<string | null>(null);
  const [input, setInput] = useState("");

  const visiblePills = pillIds
    ? CONSOLE_QUERIES.filter((q) => pillIds.includes(q.id))
    : CONSOLE_QUERIES.slice(0, COMPACT_PILL_LIMIT);

  function handlePill(id: string) {
    const q = getConsoleQuery(id);
    if (!q) return;
    setActiveQueryId(id);
    setActiveQueryText(q.label);
    setProcessing(true);
    setResponse(null);
    // simulated latency for canned responses — feels live, not snappy-fake
    const delay = 600 + Math.round(Math.random() * 400);
    window.setTimeout(() => {
      setResponse(q.response);
      setProcessing(false);
    }, delay);
  }

  async function handleFreeform(e: React.FormEvent) {
    e.preventDefault();
    const query = input.trim();
    if (!query || processing) return;
    setActiveQueryId(null);
    setActiveQueryText(query);
    setProcessing(true);
    setResponse(null);
    setInput("");
    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = (await res.json()) as {
        content?: string;
        actions?: ConsoleAction[];
      };
      setResponse({
        body: data.content ?? "Couldn't reach the model. Try again.",
        actions: data.actions ?? [],
      });
    } catch {
      setResponse({
        body: "Couldn't reach the model. Try again, or call us directly.",
        actions: [
          {
            type: "contact_info",
            label: "Call us",
            description: "We can answer faster by phone.",
          },
        ],
      });
    } finally {
      setProcessing(false);
    }
  }

  function handleSeeFullResponse() {
    if (activeQueryId) {
      dispatchConsoleQuery({ kind: "pill", id: activeQueryId });
    } else if (activeQueryText) {
      dispatchConsoleQuery({ kind: "freeform", text: activeQueryText });
    }
    scrollToConsole();
  }

  function handleClear() {
    setActiveQueryId(null);
    setActiveQueryText(null);
    setResponse(null);
    setProcessing(false);
  }

  return (
    <div
      className="rounded-xl border border-concrete/25 overflow-hidden shadow-2xl"
      style={{
        background:
          "linear-gradient(180deg, rgba(50, 45, 38, 0.7) 0%, rgba(38, 34, 28, 0.65) 100%)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-concrete/15 bg-anthracite/40">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-rebar animate-ping opacity-70" />
            <span className="relative rounded-full w-2 h-2 bg-rebar" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-bone/85">
            Intelligence Console
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone">
          zioncs://live
        </span>
      </div>

      <div className="p-5 md:p-6">
        {/* Active query echo */}
        {activeQueryText && (
          <div className="mb-4 pb-3 border-b border-concrete/15">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone mb-1">
              QUERY
            </p>
            <p className="text-sm text-bone/85">&gt; {activeQueryText}</p>
          </div>
        )}

        {/* Suggestion pills (only when no response yet) */}
        {!response && !processing && (
          <div className="mb-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone mb-3">
              QUICK STARTERS
            </p>
            <SuggestionPills
              queries={visiblePills}
              onSelect={handlePill}
              compact
              disabled={processing}
            />
          </div>
        )}

        {/* Response area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeQueryId ?? activeQueryText ?? "empty"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <ConsoleResponseRenderer
              response={response}
              processing={processing}
              compact
              renderActions={(r) => <MiniActionsList response={r} />}
              expandSlot={
                response && (
                  <button
                    type="button"
                    onClick={handleSeeFullResponse}
                    className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange hover:text-paper hover:underline transition-colors mt-3"
                  >
                    See full response in console ↓
                  </button>
                )
              }
            />
          </motion.div>
        </AnimatePresence>

        {/* Freeform input */}
        <form
          onSubmit={handleFreeform}
          className="mt-5 flex items-center gap-2 px-3 py-2 rounded-md border border-concrete/30 bg-anthracite/40 focus-within:border-steel-light/60 transition-colors"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Zion CS about your project…"
            disabled={processing}
            aria-label="Ask the Intelligence Console"
            className="flex-1 bg-transparent text-sm text-bone placeholder:text-stone outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || processing}
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange hover:text-paper font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Query →
          </button>
        </form>

        {/* Footer / clear */}
        <div className="flex items-center justify-between mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-stone">
          <span>latency: &lt;3s</span>
          <div className="flex items-center gap-3">
            {(response || processing) && (
              <button
                type="button"
                onClick={handleClear}
                className="hover:text-paper transition-colors"
              >
                ↻ clear
              </button>
            )}
            <span>claude-sonnet-4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
