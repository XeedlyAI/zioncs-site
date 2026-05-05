import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { CONTACT } from "@/lib/contact";
import {
  getAllBookingSlugs,
  getBookingConfig,
} from "@/lib/booking/config";
import { breadcrumbListSchema } from "@/lib/structured-data";

interface PageProps {
  params: Promise<{ bookingType: string }>;
}

export function generateStaticParams() {
  return getAllBookingSlugs().map((slug) => ({ bookingType: slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { bookingType } = await params;
  const config = getBookingConfig(bookingType);
  if (!config) return {};
  const url = `https://zioncs.com/book/${config.slug}`;
  return {
    title: `${config.title} | Zion Concrete Specialists`,
    description: config.blurb,
    alternates: { canonical: url },
    robots: { index: false, follow: false },
    openGraph: {
      title: `${config.title} — Zion Concrete Specialists`,
      description: config.blurb,
      url,
      type: "website",
    },
  };
}

export default async function BookPage({ params }: PageProps) {
  const { bookingType } = await params;
  const config = getBookingConfig(bookingType);
  if (!config) notFound();

  const url = `https://zioncs.com/book/${config.slug}`;
  const breadcrumbsJsonLd = breadcrumbListSchema([
    { name: "Home", url: "https://zioncs.com/" },
    { name: "Book", url },
    { name: config.title, url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Book", href: "/" },
          { label: config.title },
        ]}
        eyebrow={`ZIONCS://BOOK · ${config.persona.toUpperCase()}`}
        title={config.title}
        lead={config.blurb}
      />

      <section className="bg-bone py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Booking flow */}
            <div className="lg:col-span-8">
              <BookingFlow config={config} />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-5">
              <div className="card-light p-6 status-steel">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-3">
                  ZIONCS://CALL-OVERVIEW
                </p>
                <h2 className="text-lg font-bold text-anthracite leading-snug mb-4">
                  What to expect.
                </h2>
                <ul className="space-y-3 text-sm text-stone leading-relaxed">
                  <li className="grid grid-cols-[1.5rem_1fr] gap-2">
                    <span className="font-mono text-steel font-semibold">
                      01
                    </span>
                    <span>
                      Pick a date and time that works for you. All times shown
                      in Mountain (UT).
                    </span>
                  </li>
                  <li className="grid grid-cols-[1.5rem_1fr] gap-2">
                    <span className="font-mono text-steel font-semibold">
                      02
                    </span>
                    <span>
                      Add your contact info + a quick note about the project.
                    </span>
                  </li>
                  <li className="grid grid-cols-[1.5rem_1fr] gap-2">
                    <span className="font-mono text-steel font-semibold">
                      03
                    </span>
                    <span>
                      Confirmation email lands in your inbox. We&rsquo;ll
                      reach out the day before to confirm.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card-light p-6 status-rebar">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-rebar mb-3">
                  ZIONCS://PREFER-TO-CALL
                </p>
                <h2 className="text-lg font-bold text-anthracite leading-snug mb-4">
                  Skip the booking.
                </h2>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href={CONTACT.phoneHref}
                      className="flex items-center gap-2.5 text-anthracite hover:text-brand-orange transition-colors"
                    >
                      <Phone size={14} className="shrink-0 text-rebar" aria-hidden />
                      <span className="font-mono">{CONTACT.phone}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex items-center gap-2.5 text-anthracite hover:text-brand-orange transition-colors"
                    >
                      <Mail size={14} className="shrink-0 text-rebar" aria-hidden />
                      <span className="font-mono break-all">{CONTACT.email}</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 text-anthracite/85">
                    <Clock size={14} className="shrink-0 text-rebar" aria-hidden />
                    <span>{CONTACT.hours.display}</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-anthracite/85">
                    <MapPin
                      size={14}
                      className="shrink-0 text-rebar mt-0.5"
                      aria-hidden
                    />
                    <span>{CONTACT.address.full}</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
