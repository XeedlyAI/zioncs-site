"use client";

import { useCallback, useEffect, useState } from "react";
import type { ProjectMedia } from "@/types/media";
import { isImage, isVideo, isBeforeAfter } from "@/types/media";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

interface MediaReelProps {
  media: readonly ProjectMedia[];
  title: string;
  className?: string;
}

const ROLE_LABEL: Record<string, string> = {
  hero: "Overview",
  process: "In progress",
  detail: "Detail",
  drone: "Aerial",
  timelapse: "Timelapse",
  "before-after": "Before / After",
};

function thumbSrc(m: ProjectMedia): string {
  if (isImage(m)) return m.src;
  if (isVideo(m)) return m.poster;
  return m.afterSrc; // before-after → after still
}

function thumbAlt(m: ProjectMedia, title: string): string {
  if (isImage(m)) return m.alt;
  if (isVideo(m)) return m.alt;
  return `${title} — before and after`;
}

/**
 * Horizontal media strip (scroll-snap) + full-screen lightbox. Mixed
 * image/video/before-after in one uniform reel. Keyboard: ←/→ navigate,
 * Esc closes. Body scroll locks while open.
 */
export function MediaReel({ media, title, className = "" }: MediaReelProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const count = media.length;
  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count]
  );

  // Keyboard nav + scroll lock while the lightbox is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, go]);

  if (count === 0) return null;

  const active = media[index];

  return (
    <div className={className}>
      {/* Thumbnail strip */}
      <ul
        className="flex gap-3 overflow-x-auto scrollbar-dark snap-x snap-mandatory pb-2 -mx-1 px-1"
        role="list"
      >
        {media.map((m, i) => (
          <li key={i} className="snap-start shrink-0">
            <button
              type="button"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="group relative block w-56 aspect-[4/3] overflow-hidden rounded-lg border border-concrete/20 bg-anthracite"
              aria-label={`Open ${ROLE_LABEL[m.role] ?? "media"} — ${thumbAlt(m, title)}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbSrc(m)}
                alt={thumbAlt(m, title)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-anthracite/60 to-transparent pointer-events-none" />
              <span className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-[0.14em] px-1.5 py-0.5 bg-anthracite/85 border border-concrete/30 text-bone/85 rounded">
                {ROLE_LABEL[m.role] ?? m.role}
              </span>
              {isVideo(m) && (
                <span className="absolute top-2 right-2 flex items-center justify-center w-7 h-7 rounded-full bg-brand-orange/90 text-paper">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-anthracite/95 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} media viewer`}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 shrink-0">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-bone/70 tabular-nums">
              {index + 1} / {count} · {ROLE_LABEL[active.role] ?? active.role}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close viewer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-concrete/40 text-bone hover:bg-concrete/20 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Stage */}
          <div className="flex-1 min-h-0 flex items-center justify-center px-4 sm:px-12 pb-4">
            {isImage(active) && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            )}
            {isVideo(active) && (
              <video
                key={active.src}
                className="max-h-full max-w-full rounded-lg"
                poster={active.poster}
                controls
                autoPlay
                muted
                playsInline
                loop={active.loop}
              >
                <source src={active.src} type="video/mp4" />
              </video>
            )}
            {isBeforeAfter(active) && (
              <div className="w-full max-w-3xl">
                <BeforeAfterSlider media={active} />
              </div>
            )}
          </div>

          {/* Caption */}
          {"caption" in active && active.caption && (
            <p className="px-6 pb-3 text-center font-mono text-[11px] text-bone/70 leading-relaxed shrink-0">
              {active.caption}
            </p>
          )}

          {/* Prev / next */}
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full border border-concrete/40 text-bone hover:bg-concrete/20 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full border border-concrete/40 text-bone hover:bg-concrete/20 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
