"use client";

import { motion } from "framer-motion";
import { EASE, fadeUp, staggerContainer, scrollRevealProps } from "@/lib/motion";

const STEPS = [
  {
    number: "01",
    label: "QUOTE",
    title: "Walkthrough + written quote",
    body: "We measure the site, talk through scope, and send a written number — usually within 7 days. No high-pressure sales call.",
    duration: "Day 0 · 7 days to quote",
  },
  {
    number: "02",
    label: "PREP",
    title: "Permits, scheduling, subgrade",
    body: "Permits where needed. Scheduling around weather. Subgrade compaction and form-setting before the pour.",
    duration: "Days 1–3",
  },
  {
    number: "03",
    label: "POUR",
    title: "Concrete day",
    body: "Reinforcement, pour, finish — broom, float, stamp, or custom. Whatever the spec calls for. Crew on site through cure.",
    duration: "Day of pour",
  },
  {
    number: "04",
    label: "FINISH",
    title: "Cure, seal, walkthrough",
    body: "Initial cure (24h walkable, 7d driveable). Sealer if specified. Final walkthrough — you sign off when you're satisfied.",
    duration: "Days 4–7",
  },
  {
    number: "05",
    label: "WARRANTY",
    title: "Workmanship covered",
    body: "Two-year workmanship warranty. If something fails on us, we come back and fix it. No paperwork rodeo.",
    duration: "24 months",
  },
];

export function ProcessTimeline() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
            ZIONCS://HOW-WE-WORK
          </p>
          <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-4">
            Five phases. No surprises.
          </h2>
          <p className="text-stone leading-relaxed">
            Every project — residential repair to multi-site rollout — runs the
            same five-phase playbook. You always know what&rsquo;s next.
          </p>
        </motion.div>

        <motion.ol
          {...scrollRevealProps}
          variants={staggerContainer}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4"
        >
          {STEPS.map((step, idx) => (
            <motion.li
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE },
                },
              }}
              className="relative"
            >
              {/* Connector line on desktop (5-col) */}
              {idx < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-5 left-full w-full h-px bg-warm-border -translate-x-2 z-0"
                />
              )}
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-anthracite text-bone font-mono text-xs font-bold tabular-nums">
                    {step.number}
                  </span>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel">
                    {step.label}
                  </span>
                </div>
                <h3 className="text-base font-bold tracking-tight text-anthracite leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-stone leading-relaxed mb-3">
                  {step.body}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm">
                  {step.duration}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
