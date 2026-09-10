import { PageHero } from "./PageHero";
import { FaqSection, type FaqItem } from "./FaqSection";
import { type Crumb } from "./Breadcrumbs";

interface PillarPageTemplateProps {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  faqEyebrow?: string;
  faqTitle?: string;
  faqs: FaqItem[];
  /** @deprecated — page-level CTAs were retired in favor of the universal Footer CTA. Prop kept for compat; not rendered. */
  ctaTitle?: string;
  /** @deprecated */
  ctaBody?: string;
  /** @deprecated */
  ctaSecondaryHref?: string;
  /** @deprecated */
  ctaSecondaryLabel?: string;
}

/**
 * Shared template for Tier 0 / Tier 1 pillar pages.
 * Composes the standard chrome: hero + body slot + FAQ.
 * Page-level CTA was retired — every page closes via the Footer's
 * universal CTA panel.
 */
export function PillarPageTemplate({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  children,
  faqEyebrow,
  faqTitle,
  faqs,
}: PillarPageTemplateProps) {
  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={eyebrow}
        title={title}
        lead={lead}
      />
      {children}
      <FaqSection eyebrow={faqEyebrow} title={faqTitle} items={faqs} />
    </>
  );
}
