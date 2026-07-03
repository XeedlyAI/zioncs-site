"use client";

import { useState } from "react";
import type { MediaBeforeAfter } from "@/types/media";

interface BeforeAfterSliderProps {
  media: MediaBeforeAfter;
  className?: string;
}

/**
 * Draggable before/after comparison. The "after" image sits full-width; the
 * "before" image is clipped from the left to the slider position. A visually
 * hidden range input owns the value so it's fully keyboard-operable and
 * screen-reader labelled. 4:3 to match ProjectCard.
 */
export function BeforeAfterSlider({
  media,
  className = "",
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);

  return (
    <figure className={className}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-concrete/20 select-none bg-anthracite">
        {/* AFTER — full width underneath */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={media.afterSrc}
          alt={media.afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        {/* BEFORE — clipped from the left to `pos`% */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media.beforeSrc}
            alt=""
            className="absolute inset-0 h-full object-cover"
            style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
            draggable={false}
          />
        </div>

        {/* Corner labels */}
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-1 bg-anthracite/85 border border-concrete/30 text-bone/85 rounded pointer-events-none">
          Before
        </span>
        <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-1 bg-anthracite/85 border border-concrete/30 text-bone/85 rounded pointer-events-none">
          After
        </span>

        {/* Divider + handle */}
        <div
          className="absolute inset-y-0 w-px bg-brand-orange pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-brand-orange text-paper shadow-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
              <path d="m9 6 6 6-6 6" />
            </svg>
          </span>
        </div>

        {/* Accessible control overlaid across the whole image */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Reveal before and after: ${media.caption ?? "concrete project comparison"}`}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>
      {media.caption && (
        <figcaption className="mt-3 font-mono text-[11px] text-stone leading-relaxed">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}
