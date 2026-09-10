"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONSOLE_QUERIES, getConsoleQuery } from "@/data/console-queries";
import { SuggestionPills } from "./SuggestionPills";
import { ConsoleResponseRenderer } from "./ConsoleResponseRenderer";
import { ConsoleActions } from "./ConsoleActions";
import { CONSOLE_EVENT, type ConsoleEventDetail } from "./ConsoleEvent";
import type { ConsoleAction, ConsoleResponse } from "@/types/console";

/**
 * Full Intelligence Console — dedicated page section.
 * Listens for CONSOLE_EVENT dispatched by the mini console and replays
 * the same query here. Standalone freeform input + all 8 suggestion pills.
 */
export function IntelligenceConsole() {
  const [processing, setProcessing] = useState(false);
  const [response, setResponse] = useState<ConsoleResponse | null>(null);
  const [activeContext, setActiveContext] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const dedupeRef = useRef<string | null>(null);

  useEffect(() => {
    function handler(e: Event) {
      const detail = (e as CustomEvent<ConsoleEventDetail>).detail;
      if (!detail) return;
      // Dedupe — don't re-run the same query if the user dispatches twice
      const key = JSON.stringify(detail);
      if (dedupeRef.current === key) return;
      dedupeRef.current = key;

      if (detail.kind === "pill") {
        const q = getConsoleQuery(detail.id);
        if (!q) return;
        setActiveContext(q.label);
        setProcessing(true);
        setResponse(null);
        const delay = 600 + Math.round(Math.random() * 400);
        window.setTimeout(() => {
          setResponse(q.response);
          setProcessing(false);
        }, delay);
      } else if (detail.kind === "freeform") {
        runFreeform(detail.text);
      }
    }
    window.addEventListener(CONSOLE_EVENT, handler);
    return () => window.removeEventListener(CONSOLE_EVENT, handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function pickPill(id: string) {
    const q = getConsoleQuery(id);
    if (!q) return;
    setActiveContext(q.label);
    setProcessing(true);
    setResponse(null);
    const delay = 600 + Math.round(Math.random() * 400);
    window.setTimeout(() => {
      setResponse(q.response);
      setProcessing(false);
    }, delay);
  }

  async function runFreeform(query: string) {
    const trimmed = query.trim();
    if (!trimmed) return;
    setActiveContext(trimmed);
    setProcessing(true);
    setResponse(null);
    setInput("");
    try {
      const resp = await fetch("/api/query", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query: trimmed }),
      });
      const data = (await resp.json()) as {
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

  function clearAll() {
    setActiveContext(null);
    setResponse(null);
    setProcessing(false);
    dedupeRef.current = null;
  }

  return (
    <section
      id="console"
      className="relative bg-bg-cement text-anthracite py-24 md:py-32 overflow-hidden scroll-mt-24"
      aria-labelledby="console-full-heading"
      style={{
        // Hairline accent at the top edge — marks the warm anthracite → cool cement section transition
        boxShadow: "inset 0 1px 0 0 rgba(63, 107, 125, 0.25)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/topo-bg-light.svg)",
          backgroundSize: "cover",
          opacity: 0.5,
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-4">
            ZIONCS://CONSOLE · FULL
          </p>
          <h2
            id="console-full-heading"
            className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3"
          >
            The full console — answers, action cards, real intake.
          </h2>
          <p className="text-stone leading-relaxed">
            Ask anything. The console routes you to the right action card —
            quote intake, calendar booking, or a direct line to the team.
          </p>
        </div>

        <div
          className="rounded-xl border border-steel/30 overflow-hidden shadow-2xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(31, 38, 46, 0.85) 0%, rgba(23, 30, 37, 0.8) 100%)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-steel/20 bg-black/30">
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
              full mode
            </span>
          </div>

          <div className="p-6 md:p-8">
            {/* All 8 suggestion pills */}
            <div className="mb-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone mb-3">
                STARTERS
              </p>
              <SuggestionPills
                queries={CONSOLE_QUERIES}
                onSelect={pickPill}
                disabled={processing}
              />
            </div>

            {/* Freeform input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                runFreeform(input);
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-md border border-steel/25 bg-black/30 focus-within:border-steel-light/60 transition-colors mb-6"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Zion CS about your project…"
                disabled={processing}
                aria-label="Ask the console"
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

            {/* Active context echo */}
            {activeContext && (
              <div className="mb-4 pb-3 border-b border-steel/20">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone mb-1">
                  QUERY
                </p>
                <p className="text-sm text-bone/85">&gt; {activeContext}</p>
              </div>
            )}

            {/* Response area */}
            <div className="min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeContext ?? "empty"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.24,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <ConsoleResponseRenderer
                    response={response}
                    processing={processing}
                    renderActions={(r) => (
                      <ConsoleActions
                        response={r}
                        context={activeContext ?? undefined}
                      />
                    )}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-steel/20 font-mono text-[10px] uppercase tracking-[0.12em] text-stone">
              <span>latency: &lt;3s</span>
              <div className="flex items-center gap-3">
                {(response || processing) && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="hover:text-paper transition-colors"
                  >
                    ↻ clear
                  </button>
                )}
                <span>claude-sonnet-4 · ZionCS-tuned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
