"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EASE } from "@/lib/motion";

export type FaqItem = { question: string; answer: string };

interface FaqSectionProps {
  eyebrow?: string;
  title?: string;
  items: FaqItem[];
}

export function FaqSection({
  eyebrow = "ZIONCS://FAQ",
  title = "Common questions",
  items,
}: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bg-sand-wash py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12 text-center">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1]">
            {title}
          </h2>
        </div>

        <ul className="divide-y divide-warm-border border-t border-b border-warm-border">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left group"
                >
                  <span className="text-base md:text-lg font-bold text-anthracite leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-stone group-hover:text-brand-orange transition-all ${
                      isOpen ? "rotate-180 text-brand-orange" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-stone leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
