import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContactWidget } from "./ContactWidget";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Site shell — wraps every page.
 * - Header: fixed, scroll-morph (transparent → anthracite)
 * - Main: pb-20 lg:pb-0 to clear the mobile ContactWidget on small screens
 * - Footer: anthracite + topo-bg + CTA panel + nav columns
 * - ContactWidget: mobile-only sticky bottom bar
 */
export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">{children}</main>
      <Footer />
      <ContactWidget />
    </>
  );
}
