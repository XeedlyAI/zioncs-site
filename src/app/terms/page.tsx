import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/pages/LegalPageLayout";
import { CONTACT } from "@/lib/contact";
import { breadcrumbListSchema } from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/terms";
const LAST_UPDATED = "May 4, 2026";

export const metadata: Metadata = {
  title: "Terms of Service — Zion Concrete Specialists",
  description:
    "Terms governing use of the Zion Concrete Specialists website and any related submissions.",
  alternates: { canonical: PAGE_URL },
};

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Terms of Service", url: PAGE_URL },
]);

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <LegalPageLayout
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
        eyebrow="ZIONCS://LEGAL · TERMS"
        title="Terms of service."
        lastUpdated={LAST_UPDATED}
      >
        <p>
          These terms govern your use of the Zion Concrete Specialists
          website at{" "}
          <a href="https://zioncs.com">zioncs.com</a> (&ldquo;the
          site&rdquo;) and any submissions you make through it. By using
          the site, you accept these terms. If you don&rsquo;t accept
          them, please don&rsquo;t use the site.
        </p>

        <h2>1. Use of the site</h2>
        <p>
          The site provides information about our concrete services and
          forms for submitting quote requests, contact messages, and
          booking inquiries. You agree to use the site lawfully and not
          to:
        </p>
        <ul>
          <li>Submit false, misleading, or fraudulent information</li>
          <li>
            Attempt to interfere with the site&rsquo;s normal operation
            (rate limits, security measures, etc.)
          </li>
          <li>Scrape or systematically extract content for redistribution</li>
          <li>Use the site to harass, defame, or harm others</li>
        </ul>

        <h2>2. Quote requests and submissions are not contracts</h2>
        <p>
          Submitting a quote request, contact message, or booking through
          this site does not create a contract between you and ZionCS. A
          contract for concrete services exists only after we sign a
          written proposal or agreement together. Quotes provided through
          the site are estimates valid for the period stated in the
          quote (typically 30 days).
        </p>

        <h2>3. No professional advice</h2>
        <p>
          Articles, guides, and FAQs published on this site reflect our
          general experience as a Utah concrete contractor. They&rsquo;re
          not engineering advice for specific projects. Every project has
          unique conditions; rely on your structural engineer or
          architect for project-specific guidance.
        </p>

        <h2>4. Intellectual property</h2>
        <p>
          The site&rsquo;s content (text, images, code, design) is owned
          by ZionCS or licensed to us. You may share links to public
          pages and quote brief passages with attribution. Bulk
          reproduction or redistribution requires written permission.
        </p>
        <p>
          Submissions you make through the site (quote details, project
          context, messages) remain your information. By submitting, you
          grant us a limited license to use the information internally
          for responding to your request and operating our business.
        </p>

        <h2>5. Disclaimers and limitation of liability</h2>
        <p>
          The site is provided &ldquo;as is&rdquo; without warranties of
          any kind. We don&rsquo;t guarantee uninterrupted availability,
          freedom from errors, or fitness for any particular purpose.
        </p>
        <p>
          To the maximum extent permitted by law, ZionCS isn&rsquo;t
          liable for indirect, consequential, special, or punitive
          damages arising from use of the site. Our total liability for
          any claim related to the site is limited to the amount you paid
          us, if any, in the 12 months preceding the claim.
        </p>

        <h2>6. Third-party services</h2>
        <p>
          The site uses third-party services (hosting, email delivery,
          AI for the Intelligence Console). We don&rsquo;t control those
          services and aren&rsquo;t responsible for their availability,
          performance, or terms.
        </p>

        <h2>7. Modifications</h2>
        <p>
          We may update these terms occasionally. Continued use of the
          site after we post changes means you accept the revised terms.
          Material changes will be flagged in the &ldquo;Last updated&rdquo;
          date at the top.
        </p>

        <h2>8. Governing law and venue</h2>
        <p>
          These terms are governed by Utah law without regard to its
          conflict-of-law principles. Any dispute arising from use of
          the site is subject to the exclusive jurisdiction of state and
          federal courts located in Salt Lake County, Utah.
        </p>

        <h2>9. Contract terms vs site terms</h2>
        <p>
          If you become a ZionCS customer, the written project contract
          we sign together governs that relationship. These site terms
          continue to govern your use of the website itself, but the
          project contract supersedes anything inconsistent here for the
          actual concrete work.
        </p>

        <h2>10. Contact</h2>
        <p>
          Questions about these terms, email{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call{" "}
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
        </p>
      </LegalPageLayout>
    </>
  );
}
