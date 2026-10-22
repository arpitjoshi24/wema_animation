
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Heart,
 
  Sparkles,
  Star,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SupportSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="support"
      className="relative scroll-mt-24 overflow-hidden bg-[#F7D96B] px-5 pb-6 pt-20 text-[#35352F] sm:px-8 sm:pt-28"
    >
      {/* Decorative hand-drawn shapes */}
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { rotate: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-14 hidden text-[#35352F] sm:block"
      >
        <Star size={48} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { rotate: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-36 left-[7%] hidden text-[#F3A39B] sm:block"
      >
        <Sparkles size={54} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-[#35352F] bg-[#FFF5E5] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
          <Heart size={15} />
          Made with fan love
        </div>

        <h2 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
          Good things grow
          <br />
          <span className="font-serif font-medium italic">
            when we support them.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 sm:text-lg">
          Independent animation takes imagination, patience, and a whole lot
          of heart. Discover Wema Animation through their official pages and
          support their creative journey.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://linktr.ee/WemaAnimation"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#35352F] bg-[#35352F] px-7 py-4 font-bold text-[#FFF5E5] transition-transform duration-200 hover:-translate-y-1"
          >
            Support Wema
            <ArrowUpRight
              size={19}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="https://www.instagram.com/wema.animation/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#35352F] bg-[#FFF5E5] px-7 py-4 font-bold transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="text-lg font-bold" aria-hidden="true">
  @
</span>
Follow on Instagram
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <p className="mt-5 text-xs leading-5 opacity-75">
          Links open Wema Animation&apos;s official pages.
        </p>
      </motion.div>

      {/* Hand-drawn divider */}
      <div className="mx-auto mt-20 max-w-6xl border-t-2 border-dashed border-[#35352F]/40 pt-7 sm:mt-28">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <a
            href="#home"
            className="flex items-center gap-2 text-2xl font-black tracking-tight"
          >
            WEMA
            <span className="text-[#F3A39B]">
              <Sparkles size={19} />
            </span>
          </a>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-semibold"
          >
            <a href="#series" className="transition-opacity hover:opacity-60">
              The Series
            </a>
            <a
              href="#behind-the-scenes"
              className="transition-opacity hover:opacity-60"
            >
              Behind the Scenes
            </a>
            <a href="#about" className="transition-opacity hover:opacity-60">
              About Wema
            </a>
            <a
              href="https://www.instagram.com/wema.animation/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              Instagram ↗
            </a>
          </nav>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-[#35352F]/20 pt-5 text-center text-xs leading-5 opacity-75 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>Made with ♡ by a fan, for the love of animation.</p>
          <p>
            Unofficial fan project. Not affiliated with or endorsed by Wema
            Animation.
          </p>
        </div>
      </div>
    </section>
  );
}
