import { PageHero } from "./PageHero";
import { FaqSection, type FaqItem } from "./FaqSection";
import { PageCTA } from "./PageCTA";
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
  ctaTitle?: string;
  ctaBody?: string;
  ctaSecondaryHref?: string;
  ctaSecondaryLabel?: string;
}

/**
 * Shared template for Tier 0 / Tier 1 pillar pages.
 * Composes the standard chrome: hero + body slot + FAQ + CTA.
 * Body content is passed as children so each pillar can compose its own sections.
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
  ctaTitle,
  ctaBody,
  ctaSecondaryHref,
  ctaSecondaryLabel,
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
      <PageCTA
        title={ctaTitle}
        body={ctaBody}
        secondaryHref={ctaSecondaryHref}
        secondaryLabel={ctaSecondaryLabel}
      />
    </>
  );
}
