"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/contact";
import { fadeUp, scrollRevealProps } from "@/lib/motion";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/**
 * Wave 2.1 placeholder. Real horizontal scroll-snap feed with
 * src/data/social-posts.ts lands in Wave 5.
 */
export function SocialFeedPreview() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              ZIONCS://INSTAGRAM
            </p>
            <h2 className="text-[clamp(1.875rem,3.5vw,2.5rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-4">
              Recently from the field.
            </h2>
            <p className="text-stone leading-relaxed">
              Job-site progress, finished pours, the occasional sport-court
              striping shot. Manually curated until we wire up the Meta Graph
              feed.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CONTACT.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-warm-border hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              aria-label="Zion Concrete Specialists on Instagram"
            >
              <InstagramIcon size={16} />
              Instagram
            </a>
            <a
              href={CONTACT.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-warm-border hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              aria-label="Zion Concrete Specialists on Facebook"
            >
              <FacebookIcon size={16} />
              Facebook
            </a>
          </div>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="rounded-xl border border-warm-border bg-paper p-12 text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone mb-3">
            wave-05 · feed renders here
          </p>
          <p className="text-stone max-w-md mx-auto">
            Horizontal scroll-snap row with the last 10–15 posts lands when
            the project gallery component ships in Wave 5.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
