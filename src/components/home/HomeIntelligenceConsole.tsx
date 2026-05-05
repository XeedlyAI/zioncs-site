"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { EASE, fadeUp, scrollRevealProps } from "@/lib/motion";

/**
 * Wave 2.1 placeholder. Real Intelligence Console (mini + full + action routing)
 * lands in Wave 6. This component reserves the slot and signals the surface.
 */
const SUGGESTIONS = [
  "How fast can you start?",
  "Driveway repair near me?",
  "Commercial RFP — got bandwidth?",
  "What cities do you serve?",
];

export function HomeIntelligenceConsole() {
  return (
    <section
      id="console"
      className="relative bg-anthracite-elevated text-bone py-24 md:py-32 overflow-hidden"
      aria-labelledby="console-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/topo-bg-dark.svg)",
          backgroundSize: "cover",
          opacity: 0.5,
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-4">
            ZIONCS://INTELLIGENCE-CONSOLE
          </p>
          <h2
            id="console-heading"
            className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-4"
          >
            Ask anything about your project.
          </h2>
          <p className="text-bone/70 leading-relaxed max-w-xl mx-auto">
            Pricing-curious, scheduling-curious, materials-curious — the
            console answers in our voice and routes you to the right next
            step.
          </p>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="rounded-xl border border-concrete/20 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(50, 45, 38, 0.6) 0%, rgba(38, 34, 28, 0.6) 100%)",
            backdropFilter: "blur(8px)",
          }}
        >
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
              wave-06 · scheduled
            </span>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-start gap-3 mb-6">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-md shrink-0"
                style={{ background: "rgba(63, 107, 125, 0.18)" }}
              >
                <Sparkles size={14} className="text-steel-light" aria-hidden="true" />
              </div>
              <div className="text-bone/85 leading-relaxed">
                <p className="mb-3">
                  Pick a starter question or type your own. The console will
                  light up in Wave 6 with full action routing — quote intake,
                  discovery-call booking, or a quick contact card depending on
                  what you ask.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  disabled
                  className="font-mono text-[11px] uppercase tracking-[0.1em] px-3 py-2 rounded border border-concrete/25 text-bone/70 bg-anthracite/30 cursor-not-allowed opacity-70"
                  aria-label={`${s} (coming Wave 6)`}
                >
                  &gt; {s}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-md border border-concrete/25 bg-anthracite/30">
              <span className="text-sm text-bone/50 italic">
                Console activates Wave 6 — for now, request a quote directly.
              </span>
              <Link
                href="/quote"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange hover:text-paper transition-colors font-semibold whitespace-nowrap"
              >
                Quote
                <ArrowRight size={12} aria-hidden="true" />
              </Link>
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone mt-5 flex items-center justify-between">
              <span>latency: TBD</span>
              <span>claude-sonnet-4 · pending wire-up</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
