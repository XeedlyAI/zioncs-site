import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/pages/LegalPageLayout";
import { CONTACT } from "@/lib/contact";
import { breadcrumbListSchema } from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/privacy";
const LAST_UPDATED = "May 4, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy — Zion Concrete Specialists",
  description:
    "How Zion Concrete Specialists collects, uses, and protects information submitted through this website.",
  alternates: { canonical: PAGE_URL },
};

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Privacy Policy", url: PAGE_URL },
]);

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <LegalPageLayout
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
        eyebrow="ZIONCS://LEGAL · PRIVACY"
        title="Privacy policy."
        lastUpdated={LAST_UPDATED}
      >
        <p>
          Zion Concrete Specialists (&ldquo;ZionCS,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates this website at{" "}
          <a href="https://zioncs.com">zioncs.com</a>. This policy
          describes what we collect, how we use it, and how we protect
          it.
        </p>

        <h2>1. Information we collect</h2>
        <p>
          We collect information you provide directly through forms on
          this site:
        </p>
        <ul>
          <li>
            <strong>Quote requests</strong> — name, email, phone, project
            type, city, project size, timeline, project details
          </li>
          <li>
            <strong>Contact / message forms</strong> — name, email, phone,
            message
          </li>
          <li>
            <strong>Booking submissions</strong> — name, email, phone,
            booking type, meeting context, scheduled time
          </li>
          <li>
            <strong>Intelligence Console submissions</strong> — your
            queries, plus name + email + phone if you submit through an
            intake or direct-chat action card
          </li>
        </ul>
        <p>
          We also collect basic technical information automatically — IP
          address (used for rate-limiting and abuse prevention),
          browser/device type, and standard server logs.
        </p>

        <h2>2. How we use it</h2>
        <p>Information you submit is used to:</p>
        <ul>
          <li>Respond to quote requests, messages, and booking submissions</li>
          <li>
            Schedule site walks, written quotes, and follow-up
            communications
          </li>
          <li>Improve our services based on aggregate trends</li>
          <li>
            Comply with legal obligations (tax, insurance, contractual)
          </li>
        </ul>
        <p>
          We do not sell your information. We do not share your contact
          info with third-party marketers, lead-aggregators, or data
          brokers.
        </p>

        <h2>3. Third-party services</h2>
        <p>
          We use the following third-party services to operate the site:
        </p>
        <ul>
          <li>
            <strong>Vercel</strong> — website hosting; receives standard
            server logs and aggregate analytics
          </li>
          <li>
            <strong>Resend</strong> — outbound email delivery (quote
            confirmations, booking confirmations, intake notifications)
          </li>
          <li>
            <strong>Anthropic</strong> — Intelligence Console freeform
            queries are sent to Anthropic's Claude API for response
            generation; queries don't include your contact info unless you
            explicitly type it in
          </li>
          <li>
            <strong>Google Search Console + Google Analytics 4</strong> —
            aggregate, anonymized traffic data; no individual personally
            identifiable information
          </li>
        </ul>

        <h2>4. Cookies and tracking</h2>
        <p>
          We use minimal first-party cookies for session state. We don&rsquo;t
          run third-party advertising trackers, retargeting pixels, or
          social-media tracking. Google Analytics 4 may set cookies; you
          can opt out using browser controls or Google&rsquo;s opt-out
          tooling.
        </p>

        <h2>5. Data retention</h2>
        <p>
          Quote requests, booking submissions, and contact-form
          submissions are retained as long as we have an active or
          recently-active relationship with you. Inactive records are
          archived after 7 years per standard business retention.
        </p>
        <p>
          You can request deletion of your information at any time by
          emailing us at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>

        <h2>6. Your rights</h2>
        <p>
          Depending on your jurisdiction, you may have rights to access,
          correct, or delete information we hold about you. For Utah
          residents, contact us via the email above to exercise these
          rights.
        </p>

        <h2>7. Children</h2>
        <p>
          This site is not directed at children under 13 and we don&rsquo;t
          knowingly collect information from children.
        </p>

        <h2>8. Changes to this policy</h2>
        <p>
          We may update this policy as our practices change. The
          &ldquo;Last updated&rdquo; date at the top reflects the most
          recent revision.
        </p>

        <h2>9. Contact</h2>
        <p>
          Questions about this policy or our data practices, email{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or
          call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
        </p>
      </LegalPageLayout>
    </>
  );
}
