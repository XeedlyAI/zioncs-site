import { CONTACT } from "@/lib/contact";
import { FIRM_FACTS } from "@/lib/firm-facts";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Dark section — anthracite-base with topo overlay */}
      <section className="relative bg-bg-anthracite-base text-bone py-24 px-6 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage: "url(/topo-bg-dark.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-4">
            ZIONCS://DESIGN-SYSTEM-CHECK
          </p>
          <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-extrabold tracking-tight leading-[1.08] mb-6">
            If It Needs To Be Flat,
            <br />
            We&apos;ve Got It Covered.
          </h1>
          <p className="text-lg text-bone/80 max-w-xl mb-8">
            {FIRM_FACTS.tagline}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="/quote"
              className="inline-flex items-center px-7 py-3 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors"
            >
              Request a Quote
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center px-7 py-3 border border-bone/20 hover:border-bone/40 text-bone font-medium text-sm rounded-lg transition-colors"
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* KPI ribbon check */}
      <section className="bg-bg-anthracite-elevated py-8 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: FIRM_FACTS.yearsInBusiness, label: "YEARS" },
            { value: FIRM_FACTS.projectsCompleted, label: "PROJECTS" },
            {
              value: `${FIRM_FACTS.googleReviews.rating} / ${FIRM_FACTS.googleReviews.count}`,
              label: "REVIEWS",
            },
            { value: FIRM_FACTS.avgResponseTime, label: "AVG RESPONSE" },
          ].map((kpi) => (
            <div key={kpi.label} className="text-center">
              <p className="font-mono text-[clamp(1.5rem,3vw,2.25rem)] font-bold tabular-nums text-bone">
                {kpi.value}
              </p>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-stone mt-1">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Light section — bone-page */}
      <section className="bg-bone py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
            01 / PALETTE CHECK
          </p>
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite mb-10">
            Design Tokens Verified
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {[
              { name: "brand-orange", bg: "bg-brand-orange" },
              { name: "anthracite", bg: "bg-anthracite" },
              { name: "anthracite-elevated", bg: "bg-anthracite-elevated" },
              { name: "concrete", bg: "bg-concrete" },
              { name: "bone", bg: "bg-bone border border-warm-border" },
              { name: "sand", bg: "bg-sand" },
              { name: "steel", bg: "bg-steel" },
              { name: "rebar", bg: "bg-rebar" },
              { name: "gold", bg: "bg-gold" },
              { name: "brick", bg: "bg-brick" },
              { name: "stone", bg: "bg-stone" },
              { name: "paper", bg: "bg-paper border border-warm-border" },
            ].map((swatch) => (
              <div key={swatch.name} className="flex flex-col items-center gap-2">
                <div className={`w-12 h-12 rounded-lg ${swatch.bg}`} />
                <span className="font-mono text-[9px] uppercase tracking-wider text-stone">
                  {swatch.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sand wash section */}
      <section className="relative bg-bg-sand-wash py-24 px-6 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/engineer-grid.svg)",
            backgroundSize: "100px 100px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
            02 / TYPOGRAPHY + GRID OVERLAY
          </p>
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite mb-6">
            Inter + JetBrains Mono
          </h2>
          <p className="text-base text-stone leading-relaxed max-w-xl mb-6">
            Body text in Inter 400. The quick brown fox jumps over the lazy dog.
            This section has the engineer-grid SVG overlay at subtle opacity.
          </p>
          <div className="card-light p-6 max-w-md">
            <p className="font-mono text-xs font-medium text-steel uppercase tracking-[0.15em] mb-2">
              // SPEC // SYSTEM CHECK
            </p>
            <div className="font-mono text-sm space-y-1 text-anthracite">
              <p>
                <span className="text-stone">FONTS</span>
                {"      "}Inter 400–900 · JetBrains Mono 400–600
              </p>
              <p>
                <span className="text-stone">PALETTE</span>
                {"    "}12 tokens locked
              </p>
              <p>
                <span className="text-stone">MOTION</span>
                {"     "}cubic-bezier(0.16, 1, 0.3, 1)
              </p>
              <p>
                <span className="text-stone">OVERLAYS</span>
                {"   "}topo-bg + engineer-grid
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="bg-bg-anthracite-base text-bone py-12 px-6 text-center">
        <p className="font-mono text-xs text-stone">
          {CONTACT.phone} · {CONTACT.email} · {CONTACT.address.full}
        </p>
        <p className="font-mono text-[10px] text-stone/60 mt-2">
          © {new Date().getFullYear()} Zion Concrete Specialists
        </p>
      </footer>
    </main>
  );
}
