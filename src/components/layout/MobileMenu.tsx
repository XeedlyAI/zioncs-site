"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { PRIMARY_NAV } from "@/lib/nav";
import { EASE } from "@/lib/motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="fixed inset-0 z-[60] bg-anthracite/70 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: EASE }}
            className="fixed top-0 right-0 z-[70] h-full w-[85%] max-w-sm bg-anthracite text-bone shadow-2xl md:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-concrete/20">
              <Link href="/" onClick={onClose} className="flex items-center">
                <Image
                  src="/brand/zioncs-logo-horizontal-white.png"
                  alt="Zion Concrete Specialists"
                  width={140}
                  height={40}
                  className="h-9 w-auto"
                  priority
                />
              </Link>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 -mr-2 text-bone hover:text-brand-orange transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="space-y-1">
                {PRIMARY_NAV.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block py-3 text-xl font-bold tracking-tight text-bone hover:text-brand-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="px-6 py-6 border-t border-concrete/20 space-y-3">
              <Link
                href="/quote"
                onClick={onClose}
                className="block w-full text-center px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href={CONTACT.phoneHref}
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-concrete/40 hover:border-bone text-bone font-medium text-sm rounded-lg transition-colors"
              >
                <Phone size={16} />
                {CONTACT.phone}
              </a>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone text-center pt-2">
                {CONTACT.hours.display}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
