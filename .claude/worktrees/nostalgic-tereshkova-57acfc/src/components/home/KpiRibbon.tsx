"use client";

import { useEffect, useRef, useState } from "react";

type Kpi = {
  label: string;
  value: string;
  numericTarget?: number;
  format?: (n: number) => string;
  spark?: number[];
};

const KPIS: readonly Kpi[] = [
  {
    label: "Years in business",
    value: "9+",
    numericTarget: 9,
    format: (n) => `${Math.round(n)}+`,
    spark: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    label: "Projects completed",
    value: "200+",
    numericTarget: 200,
    format: (n) => `${Math.round(n)}+`,
    spark: [10, 28, 52, 80, 112, 140, 168, 188, 200],
  },
  {
    label: "Google reviews",
    value: "5.0 / 6",
    spark: [5, 5, 5, 5, 5, 5],
  },
  {
    label: "Avg response",
    value: "2 hrs",
  },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number | undefined, duration = 1400, start: boolean) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || target === undefined || startedRef.current) return;
    startedRef.current = true;
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      setValue(target * easeOutCubic(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

function Sparkline({ values }: { values: number[] }) {
  if (values.length < 2) return null;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const w = 80;
  const h = 18;
  const step = w / (values.length - 1);
  const points = values
    .map((v, i) => `${i * step},${h - ((v - min) / range) * h}`)
    .join(" ");
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className="text-steel-light/70"
      aria-hidden="true"
    >
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

function KpiCell({ kpi, animate }: { kpi: Kpi; animate: boolean }) {
  const animated = useCountUp(kpi.numericTarget, 1400, animate);
  const display =
    kpi.numericTarget !== undefined && kpi.format
      ? kpi.format(animated)
      : kpi.value;

  return (
    <div className="px-4 py-2">
      <p className="font-mono font-bold tabular-nums text-bone text-[clamp(1.5rem,3vw,2.25rem)] leading-none mb-2">
        {display}
      </p>
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-stone mb-2">
        {kpi.label}
      </p>
      {kpi.spark && <Sparkline values={kpi.spark} />}
    </div>
  );
}

export function KpiRibbon() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "-50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-anthracite-elevated text-bone border-t border-concrete/15"
      aria-label="Key performance indicators"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/topo-bg-dark.svg)",
          backgroundSize: "cover",
          opacity: 0.35,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-concrete/15">
          {KPIS.map((kpi) => (
            <KpiCell key={kpi.label} kpi={kpi} animate={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
