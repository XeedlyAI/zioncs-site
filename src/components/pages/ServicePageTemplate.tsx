import { PageHero } from "./PageHero";
import { FaqSection, type FaqItem } from "./FaqSection";
import { PageCTA } from "./PageCTA";
import { RelatedServices } from "./RelatedServices";
import { ServiceSpecBlock, type SpecRow } from "@/components/data/ServiceSpecBlock";
import { type Crumb } from "./Breadcrumbs";

interface ServicePageTemplateProps {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead?: string;
  spec: {
    title: string;
    rows: SpecRow[];
    footnote?: string;
  };
  /** Body content rendered between the hero block (with sidebar spec) and the FAQ. */
  children: React.ReactNode;
  faqs: FaqItem[];
  relatedSlugs: string[];
  currentSlug: string;
  ctaTitle?: string;
  ctaBody?: string;
  ctaSecondaryHref?: string;
  ctaSecondaryLabel?: string;
}

/**
 * Shared template for service detail pages.
 * Layout:
 *   - PageHero (anthracite + topo, breadcrumbs, eyebrow, h1, lead)
 *   - 2-column body section: copy on left (children), ServiceSpecBlock on right (sticky on desktop)
 *   - FAQ (sand-wash)
 *   - RelatedServices (sand-wash, 4 sibling cards)
 *   - PageCTA
 */
export function ServicePageTemplate({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  spec,
  children,
  faqs,
  relatedSlugs,
  currentSlug,
  ctaTitle,
  ctaBody,
  ctaSecondaryHref,
  ctaSecondaryLabel,
}: ServicePageTemplateProps) {
  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={eyebrow}
        title={title}
        lead={lead}
      />

      {/* Body + sticky spec sidebar */}
      <section className="bg-bone py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">{children}</div>
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <ServiceSpecBlock
                  title={spec.title}
                  specs={spec.rows}
                  footnote={spec.footnote}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} />
      <RelatedServices slugs={relatedSlugs} currentSlug={currentSlug} />
      <PageCTA
        title={ctaTitle}
        body={ctaBody}
        secondaryHref={ctaSecondaryHref}
        secondaryLabel={ctaSecondaryLabel}
      />
    </>
  );
}
