import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { BookingsTable } from "@/components/admin/BookingsTable";
import { getBookingStore } from "@/lib/booking/store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Bookings | Admin",
  description: "Internal admin view for ZionCS bookings.",
  robots: { index: false, follow: false },
};

export default async function AdminBookingsPage() {
  const store = getBookingStore();
  const records = await store.list();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admin" },
          { label: "Bookings" },
        ]}
        eyebrow="ZIONCS://ADMIN · INTERNAL"
        title="Bookings."
        lead="Internal admin view of every booking submitted through the site. Stub-mode v1 — records reset on deploy and serverless cold starts. Source-of-truth records are the email notifications sent to admin@zioncs.com on every booking."
      />

      <section className="bg-bone py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Stub-mode banner */}
          <div
            role="alert"
            className="card-light status-gold p-4 flex items-start gap-3"
          >
            <AlertCircle
              size={16}
              className="text-gold mt-0.5 shrink-0"
              aria-hidden
            />
            <div className="text-sm text-anthracite leading-relaxed">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-gold mb-1">
                STUB MODE
              </p>
              <p className="mb-1">
                Booking records persist in memory only — they reset on deploy
                and on serverless cold starts. Use this view for{" "}
                <strong>recent in-session bookings</strong> only.
              </p>
              <p>
                The canonical record of every submitted booking lives in the{" "}
                <code className="font-mono text-[12px]">
                  admin@zioncs.com
                </code>{" "}
                inbox. Persistent storage (Vercel KV or Postgres) is a
                post-launch swap behind the{" "}
                <code className="font-mono text-[12px]">BookingStore</code>{" "}
                interface in{" "}
                <code className="font-mono text-[12px]">
                  src/lib/booking/store.ts
                </code>
                .
              </p>
            </div>
          </div>

          <BookingsTable records={records} />
        </div>
      </section>
    </>
  );
}
