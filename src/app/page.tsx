import Link from "next/link";
import { CONTACT } from "@/lib/contact";
import { FIRM_FACTS } from "@/lib/firm-facts";

/**
 * Wave 1.2 placeholder homepage.
 * Real hero + sections land in Wave 2.1.
 * This stub exists so the layout shell (Header / Footer / ContactWidget) has
 * something to wrap and verify against.
 */
export default function Home() {
  return (
    <>
      {/* Hero placeholder — anthracite hero so the transparent header has the
          right contrast at the top of the page */}
      <section className="relative bg-anthracite text-bone overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/topo-bg-dark.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.6,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-28">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-5">
            ZIONCS://CONCRETE-SPECIALISTS
          </p>
          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            If It Needs To Be Flat,
            <br />
            We&rsquo;ve Got It Covered.
          </h1>
          <p className="text-lg text-bone/80 max-w-xl mb-10 leading-relaxed">
            Utah&rsquo;s flatwork crew. {FIRM_FACTS.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center px-7 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center px-7 py-3.5 border border-concrete/40 hover:border-bone/60 text-bone font-medium text-sm rounded-lg transition-colors"
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Light section so we can verify scroll-morph header behavior */}
      <section className="bg-bone py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
            WAVE 01 / SESSION 02
          </p>
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite mb-4">
            Layout Shell Live
          </h2>
          <p className="text-stone leading-relaxed">
            Header, footer, mobile menu, and the mobile contact widget are
            wired. Real homepage content arrives in Wave 2 Session 1.
          </p>
        </div>
      </section>
    </>
  );
}
