"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { VideoLoop } from "@/components/media/VideoLoop";
import { fadeUp, scrollRevealProps } from "@/lib/motion";

type FieldClip = {
  src: string;
  poster: string;
  alt: string;
  label: string;
  sub: string;
  href: string;
  /** Native aspect of the clip — drives the filmstrip's mixed widths. */
  aspect: "video" | "4/3";
};

/**
 * Homepage "Latest from the field" strip. Mock Veo footage now — swap `src`
 * to real jobsite clips (or hosted HLS URLs) later; layout doesn't change.
 */
const CLIPS: readonly FieldClip[] = [
  {
    src: "/videos/sandy-timelapse.mp4",
    poster: "/images/gallery/sandy-timelapse-poster.jpg",
    alt: "Pour-day timelapse of a Sandy stamped driveway",
    label: "POUR DAY · SANDY, UT",
    sub: "Forms to finished stamp in one day",
    href: "/projects/sandy-stamped-driveway",
    aspect: "video",
  },
  {
    src: "/videos/stamping-detail.mp4",
    poster: "/images/services/img-05-stamped-decorative.png",
    alt: "Close-up of stamped slate concrete texture",
    label: "STAMP DETAIL",
    sub: "Slate pattern, raking light",
    href: "/services/stamped-decorative-concrete-utah",
    aspect: "4/3",
  },
  {
    src: "/videos/draper-drone.mp4",
    poster: "/images/gallery/img-31-draper-retail-center.png",
    alt: "Drone pass over the Draper retail center flatwork",
    label: "AERIAL · DRAPER, UT",
    sub: "Retail center, phase 4",
    href: "/projects/draper-retail-center",
    aspect: "4/3",
  },
  {
    src: "/videos/sandy-loop.mp4",
    poster: "/images/gallery/img-29-sandy-stamped-driveway.png",
    alt: "Finished stamped driveway in afternoon light",
    label: "FINISHED · SANDY, UT",
    sub: "European fan, cobblestone border",
    href: "/projects/sandy-stamped-driveway",
    aspect: "video",
  },
  {
    src: "/videos/alpine-loop.mp4",
    poster: "/images/gallery/img-33-alpine-pool-deck.png",
    alt: "Water shimmer beside a stamped pool deck in Alpine",
    label: "POOL DECK · ALPINE, UT",
    sub: "The work we started with",
    href: "/projects/alpine-pool-deck-signature",
    aspect: "4/3",
  },
];

export function FieldFootageStrip() {
  return (
    <section className="relative bg-anthracite text-bone py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/topo-bg-dark.svg)",
          backgroundSize: "cover",
          opacity: 0.35,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-stone mb-4">
              ZIONCS://FIELD-FOOTAGE
            </p>
            <h2 className="text-[clamp(1.875rem,3.5vw,2.5rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-4">
              Fresh off the pour.
            </h2>
            <p className="text-bone/70 leading-relaxed">
              Pour days, stamp details, and aerial passes — straight off the
              jobsite. Videos play silently as you scroll.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 border border-concrete/40 hover:border-bone text-bone font-medium text-sm rounded-lg transition-colors shrink-0"
          >
            All projects
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

        <motion.div {...scrollRevealProps} variants={fadeUp}>
          <ul
            className="flex gap-4 overflow-x-auto scrollbar-dark snap-x snap-mandatory pb-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            role="list"
          >
            {CLIPS.map((clip) => (
              <li key={clip.src} className="snap-start shrink-0">
                <Link
                  href={clip.href}
                  className="group block h-full"
                  aria-label={`${clip.alt} — view project`}
                >
                  <div
                    className={
                      "relative h-56 md:h-64 overflow-hidden rounded-lg border border-concrete/25 bg-anthracite-elevated " +
                      (clip.aspect === "video"
                        ? "aspect-video"
                        : "aspect-[4/3]")
                    }
                  >
                    <VideoLoop
                      src={clip.src}
                      poster={clip.poster}
                      alt={clip.alt}
                      playMode="in-view"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-anthracite/70 via-transparent to-transparent pointer-events-none"
                    />
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-bone/90">
                        {clip.label}
                      </p>
                      <p className="text-bone/70 text-sm leading-snug mt-1 group-hover:text-bone transition-colors">
                        {clip.sub}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
