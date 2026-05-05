import { PageHero } from "./PageHero";
import type { Crumb } from "./Breadcrumbs";

interface LegalPageLayoutProps {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

/**
 * Shared layout for /privacy and /terms — narrow centered column with
 * legal-doc typography. Includes a "draft" notice block at the top so the
 * client knows these are starting drafts, not finalized counsel-reviewed
 * docs.
 */
export function LegalPageLayout({
  breadcrumbs,
  eyebrow,
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={eyebrow}
        title={title}
        lead={`Last updated ${lastUpdated}. This document was drafted as a starting point for ZionCS's website launch and should be reviewed by counsel before being treated as final.`}
      />

      <article className="bg-bone py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="zion-legal text-anthracite/85 leading-relaxed">
            {children}
            <style>{`
              .zion-legal > * + * { margin-top: 1.25rem; }
              .zion-legal h2 {
                font-size: clamp(1.5rem, 2.5vw, 1.875rem);
                font-weight: 800;
                letter-spacing: -0.02em;
                line-height: 1.2;
                color: #1A1814;
                margin-top: 2.5rem;
                margin-bottom: 0.75rem;
              }
              .zion-legal h3 {
                font-size: 1.125rem;
                font-weight: 700;
                color: #1A1814;
                margin-top: 1.75rem;
                margin-bottom: 0.5rem;
              }
              .zion-legal p { color: rgba(26, 24, 20, 0.85); line-height: 1.7; }
              .zion-legal a {
                color: #E85A19;
                font-weight: 600;
                text-underline-offset: 4px;
              }
              .zion-legal a:hover {
                color: #C44A12;
                text-decoration: underline;
              }
              .zion-legal ul,
              .zion-legal ol {
                padding-left: 0;
                list-style: none;
              }
              .zion-legal ul > li,
              .zion-legal ol > li {
                position: relative;
                padding-left: 1.5rem;
                margin-top: 0.5rem;
              }
              .zion-legal ul > li::before {
                content: "—";
                position: absolute;
                left: 0;
                top: 0;
                color: #3F6B7D;
                font-family: 'JetBrains Mono', monospace;
                font-size: 0.875rem;
                line-height: 1.7;
              }
              .zion-legal ol {
                counter-reset: legal-list;
              }
              .zion-legal ol > li {
                counter-increment: legal-list;
              }
              .zion-legal ol > li::before {
                content: counter(legal-list) ".";
                position: absolute;
                left: 0;
                top: 0;
                color: #3F6B7D;
                font-family: 'JetBrains Mono', monospace;
                font-size: 0.8125rem;
                font-weight: 600;
                line-height: 1.7;
              }
              .zion-legal strong { color: #1A1814; font-weight: 700; }
            `}</style>
          </div>
        </div>
      </article>
    </>
  );
}
