"use client";

import { useState } from "react";
import Image from "next/image";
import { VideoLoop } from "./VideoLoop";
import type { MediaVideo } from "@/types/media";

interface CardMediaProps {
  /** Poster/still shown by default (also the reduced-motion fallback). */
  poster: string;
  alt: string;
  sizes: string;
  /** Optional short loop that plays on hover/focus. */
  loop?: MediaVideo;
}

/**
 * The image area of a gallery ProjectCard, upgraded with hover-to-play.
 * Static Image by default; when the project has a loop, it plays on
 * hover/focus (desktop) with a ▶ badge to signal there's video. Reduced-motion
 * users just see the poster (handled inside VideoLoop).
 */
export function CardMedia({ poster, alt, sizes, loop }: CardMediaProps) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      <Image
        src={poster}
        alt={alt}
        fill
        sizes={sizes}
        className={
          "object-cover transition-transform duration-700 group-hover:scale-105 " +
          (loop && active ? "opacity-0" : "opacity-100")
        }
      />
      {loop && (
        <div
          className={
            "absolute inset-0 transition-opacity duration-300 " +
            (active ? "opacity-100" : "opacity-0")
          }
          aria-hidden={!active}
        >
          <VideoLoop
            src={loop.src}
            poster={loop.poster}
            alt={loop.alt}
            playMode="hover"
            active={active}
          />
        </div>
      )}
      {loop && (
        <span className="absolute top-3 right-3 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-brand-orange/90 text-paper pointer-events-none">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      )}
    </div>
  );
}
