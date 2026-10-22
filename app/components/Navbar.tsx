
"use client";

import { useState } from "react";
import Link from "next/link";
import { Asterisk, Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Series", href: "#series" },
  { label: "Characters", href: "#characters" },
  { label: "Behind the Scenes", href: "#behind-the-scenes" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#35352F]/10 bg-[#FFF5E5]/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8"
      >
        {/* Fan-site wordmark */}
        <Link
          href="#home"
          aria-label="Wema Animation fan site home"
          className="group flex shrink-0 items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <motion.span
            whileHover={{ rotate: 12 }}
            transition={{ duration: 0.25 }}
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F7D96B] text-[#35352F]"
          >
            <Asterisk size={25} strokeWidth={2.5} />
          </motion.span>

          <span className="leading-none">
            <span className="block text-2xl font-black tracking-tight text-[#35352F]">
              WEMA
            </span>
            <span className="mt-1 block text-[9px] font-semibold tracking-[0.2em] text-[#35352F]/65">
              ANIMATION FAN SITE
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium text-[#35352F] transition-colors hover:bg-[#F7D96B]/50 ${
                index === 0 ? "bg-[#F7D96B]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Support + mobile menu */}
        <div className="flex items-center gap-2">
          <Link
            href="#support"
            className="group hidden items-center gap-2 rounded-full bg-[#F3A39B] px-4 py-2.5 text-sm font-semibold text-[#35352F] transition-transform hover:-rotate-1 hover:scale-105 sm:flex"
          >
            <Heart size={15} className="transition-transform group-hover:scale-110" />
            Support
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#35352F]/10 text-[#35352F] transition-colors hover:bg-[#F7D96B]/50 lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-[#35352F]/10 bg-[#FFF5E5] lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#35352F] transition-colors hover:bg-[#F7D96B]/50"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="#support"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#F3A39B] px-4 py-3 text-sm font-semibold text-[#35352F]"
              >
                <Heart size={16} />
                Support the studio
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
