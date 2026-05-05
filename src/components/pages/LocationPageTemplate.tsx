import { PageHero } from "./PageHero";
import { FaqSection, type FaqItem } from "./FaqSection";
import { type Crumb } from "./Breadcrumbs";

interface LocationPageTemplateProps {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  faqs: FaqItem[];
  /** @deprecated — page-level CTAs were retired in favor of the universal Footer CTA. */
  ctaTitle?: string;
  /** @deprecated */
  ctaBody?: string;
  /** @deprecated */
  ctaSecondaryHref?: string;
  /** @deprecated */
  ctaSecondaryLabel?: string;
}

/**
 * Shared template for Tier 2 city / location pages.
 * Hero + body slot + FAQ. Universal close lives in the Footer.
 */
export function LocationPageTemplate({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  children,
  faqs,
}: LocationPageTemplateProps) {
  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={eyebrow}
        title={title}
        lead={lead}
      />
      {children}
      <FaqSection items={faqs} />
    </>
  );
}
