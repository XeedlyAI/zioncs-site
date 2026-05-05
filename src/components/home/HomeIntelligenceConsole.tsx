"use client";

import { motion } from "framer-motion";
import { IntelligenceConsoleMini } from "@/components/console/IntelligenceConsoleMini";
import { fadeUp, scrollRevealProps } from "@/lib/motion";

/**
 * Homepage mini console section. Renders the real IntelligenceConsoleMini
 * (Wave 6.1) — the full-section IntelligenceConsole drops in below this
 * in Wave 6.2 with the action-card form system.
 */
export function HomeIntelligenceConsole() {
  return (
    <section
      id="console-mini"
      className="relative bg-anthracite-elevated text-bone py-24 md:py-32 overflow-hidden"
      aria-labelledby="console-mini-heading"
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
            id="console-mini-heading"
            className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-4"
          >
            Ask anything about your project.
          </h2>
          <p className="text-bone/70 leading-relaxed max-w-xl mx-auto">
            Pricing-curious, scheduling-curious, materials-curious — pick
            a starter or type your own. The console answers in our voice
            and routes you to the right next step.
          </p>
        </motion.div>

        <motion.div {...scrollRevealProps} variants={fadeUp}>
          <IntelligenceConsoleMini />
        </motion.div>
      </div>
    </section>
  );
}
