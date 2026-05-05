import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Layout } from "@/components/layout/Layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zioncs.com"),
  title: {
    default: "Zion Concrete Specialists — Utah Flatwork Contractor",
    template: "%s — Zion Concrete Specialists",
  },
  description:
    "Utah's trusted concrete flatwork contractor serving the Wasatch Front and St. George. Driveways, patios, pool decks, commercial flatwork, and more. Show up on time, keep the worksite clean, get the job done right.",
  keywords: [
    "concrete contractor Utah",
    "concrete driveway Utah",
    "flatwork contractor",
    "stamped concrete Utah",
    "pool deck Utah",
    "commercial concrete Utah",
    "Wasatch Front concrete",
    "Sandy Utah concrete",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Zion Concrete Specialists",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [{ url: "/brand/zioncs-icon-32.png" }],
    apple: [{ url: "/brand/zioncs-icon-256.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
