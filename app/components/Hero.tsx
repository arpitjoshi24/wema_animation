
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, Asterisk } from "lucide-react";

function Cloud({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 55"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M18 44C7 44 2 37 5 28C7 20 15 17 24 19C27 5 43 1 54 12C63 6 79 11 81 24C98 18 113 26 112 37C111 46 102 48 91 48H18V44Z"
        fill="#FFF5E5"
      />
    </svg>
  );
}

function Landscape() {
  return (
    <svg
      viewBox="0 0 900 310"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-x-0 bottom-0 h-[58%] w-full"
      aria-hidden="true"
    >
      {/* Distant hills */}
      <path
        d="M0 150 Q110 55 240 140 T480 115 T710 125 T900 80 V310 H0Z"
        fill="#BCD9AC"
      />

      {/* Middle hills */}
      <path
        d="M0 210 Q160 100 310 190 T590 155 T900 175 V310 H0Z"
        fill="#91BB8C"
      />

      {/* Foreground */}
      <path
        d="M0 245 Q150 180 300 240 T590 215 T900 235 V310 H0Z"
        fill="#719D76"
      />

      {/* Little flowers */}
      <g stroke="#35352F" strokeWidth="1.5" strokeLinecap="round">
        <path d="M110 273V250 M110 262l-9 -7 M110 267l9 -8" fill="none" />
        <circle cx="110" cy="247" r="5" fill="#F3A39B" />
        <path d="M760 280V251 M760 265l-9 -8 M760 269l9 -7" fill="none" />
        <circle cx="760" cy="247" r="5" fill="#F7D96B" />
      </g>

      {/* Tiny rolling hill details */}
      <g fill="#D9E7BE">
        <ellipse cx="215" cy="249" rx="25" ry="5" />
        <ellipse cx="680" cy="253" rx="32" ry="5" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const float = (distance: number, duration: number) =>
    reduceMotion
      ? {}
      : {
          y: [0, -distance, 0],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  return (
    <section
      id="home"
      className="relative isolate min-h-[650px] overflow-hidden bg-[#A9D9F5] md:min-h-[720px]"
    >
      {/* Sun */}
      <motion.div
        animate={float(7, 5)}
        className="absolute right-[10%] top-12"
        aria-hidden="true"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#F7D96B] md:h-20 md:w-20">
          <span className="text-3xl text-[#35352F] md:text-4xl">☻</span>
          <Asterisk
            className="absolute -right-3 -top-3 text-[#F7D96B]"
            size={28}
          />
        </div>
      </motion.div>

      {/* Clouds */}
      <motion.div
        animate={float(10, 7)}
        className="absolute left-[48%] top-28 w-24 md:w-36"
        aria-hidden="true"
      >
        <Cloud />
      </motion.div>

      <motion.div
        animate={float(7, 8)}
        className="absolute right-[4%] top-[42%] w-20 md:w-28"
        aria-hidden="true"
      >
        <Cloud />
      </motion.div>

      <Landscape />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-64 pt-20 md:px-10 md:pb-72 md:pt-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#35352F]/10 bg-[#FFF5E5]/70 px-4 py-2 text-xs font-semibold tracking-wide text-[#35352F]">
            
            A FAN-MADE TRIBUTE TO INDIE ANIMATION
          </span>

          <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-tight text-[#35352F] sm:text-6xl md:text-8xl">
            Small studio.
            <br />
            <span className="relative inline-block">
              Big dreams.
              <svg
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-3 left-0 h-3 w-full"
              >
                <path
                  d="M3 8 Q75 1 150 8 T297 6"
                  fill="none"
                  stroke="#F3A39B"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-7 text-[#35352F]/80 md:text-lg md:leading-8">
            Celebrating the imagination, characters, and stories
            that make indie animation feel a little like home.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#series"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[#35352F] bg-[#F7D96B] px-6 py-3.5 font-semibold text-[#35352F] transition-transform hover:-rotate-1 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35352F]"
            >
              Explore their world
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 font-medium text-[#35352F] transition-colors hover:bg-[#FFF5E5]/50"
            >
              Meet the creators
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Friendly scroll cue */}
      <Link
        href="#series"
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-[#35352F]/75 transition-colors hover:bg-white/20"
      >
        <span>There's more to explore</span>
        <ArrowDown size={18} />
      </Link>
    </section>
  );
}
