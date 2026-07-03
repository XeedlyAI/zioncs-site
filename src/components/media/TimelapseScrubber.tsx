"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { MediaVideo } from "@/types/media";

interface TimelapseScrubberProps {
  media: MediaVideo;
  className?: string;
}

function fmt(t: number): string {
  if (!isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/**
 * A pour timelapse with phase markers pinned to the scrub track — clicking a
 * marker seeks to that jobsite stage (Day 1 demo, Day 2 pour, …). Custom,
 * minimal transport that matches the engineered aesthetic rather than the
 * native browser chrome. Reduced-motion users get the poster + a note.
 */
export function TimelapseScrubber({
  media,
  className = "",
}: TimelapseScrubberProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(media.durationSec ?? 0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onTime = () => setCurrent(el.currentTime);
    const onMeta = () => setDuration(el.duration || media.durationSec || 0);
    const onEnd = () => setPlaying(false);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onEnd);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("ended", onEnd);
    };
  }, [media.durationSec]);

  function toggle() {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(() => {});
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  }

  function seek(t: number) {
    const el = ref.current;
    if (!el) return;
    el.currentTime = t;
    setCurrent(t);
  }

  const pct = duration > 0 ? (current / duration) * 100 : 0;
  const activeMarker = [...(media.markers ?? [])]
    .filter((m) => m.t <= current + 0.01)
    .sort((a, b) => b.t - a.t)[0];

  if (reduced) {
    return (
      <figure className={className}>
        <div className="relative aspect-video overflow-hidden rounded-lg border border-concrete/20 bg-anthracite">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={media.poster} alt={media.alt} className="w-full h-full object-cover" />
        </div>
        <figcaption className="mt-3 font-mono text-[11px] text-stone">
          Pour timelapse — motion reduced per your system setting.
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={className}>
      <div className="relative aspect-video overflow-hidden rounded-lg border border-concrete/20 bg-anthracite">
        <video
          ref={ref}
          className="w-full h-full object-cover"
          poster={media.poster}
          muted
          playsInline
          preload="metadata"
          onClick={toggle}
          aria-label={media.alt}
        >
          <source src={media.src} type="video/mp4" />
        </video>

        {/* Center play affordance when paused */}
        {!playing && (
          <button
            type="button"
            onClick={toggle}
            aria-label="Play pour timelapse"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/90 text-paper group-hover:bg-brand-orange transition-colors">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}

        {/* Active phase label */}
        {activeMarker && (
          <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-1 bg-anthracite/85 border border-concrete/30 text-bone/85 rounded pointer-events-none">
            {activeMarker.label}
          </span>
        )}
      </div>

      {/* Scrub track with phase markers */}
      <div className="mt-3">
        <div className="relative h-8 flex items-center">
          {/* base track */}
          <div className="absolute inset-x-0 h-1 rounded-full bg-concrete/25" />
          {/* progress */}
          <div
            className="absolute left-0 h-1 rounded-full bg-brand-orange"
            style={{ width: `${pct}%` }}
          />
          {/* markers */}
          {(media.markers ?? []).map((m) => {
            const left = duration > 0 ? (m.t / duration) * 100 : 0;
            return (
              <button
                key={m.t}
                type="button"
                onClick={() => seek(m.t)}
                aria-label={`Seek to ${m.label}`}
                title={m.label}
                className="absolute -translate-x-1/2 w-3 h-3 rounded-full border-2 border-bone bg-anthracite hover:bg-brand-orange transition-colors"
                style={{ left: `${left}%` }}
              />
            );
          })}
          {/* seek input */}
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.05}
            value={current}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label="Scrub timelapse"
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between mt-1 font-mono text-[10px] text-stone tabular-nums">
          <button type="button" onClick={toggle} className="uppercase tracking-[0.12em] hover:text-brand-orange transition-colors">
            {playing ? "Pause" : "Play"}
          </button>
          <span>
            {fmt(current)} / {fmt(duration)}
          </span>
        </div>
      </div>
    </figure>
  );
}
