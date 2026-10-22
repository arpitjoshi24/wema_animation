
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  Lightbulb,
  Pencil,
  Scissors,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "A little idea",
    description:
      "Every animated world starts with a thought, a feeling, or a tiny spark of imagination.",
    label: "IMAGINATION",
    color: "bg-[#F7D96B]",
    icon: Lightbulb,
    rotate: "-rotate-2",
  },
  {
    number: "02",
    title: "Lines come alive",
    description:
      "Shapes, expressions, and movements help a character begin to find its personality.",
    label: "EXPLORATION",
    color: "bg-[#A9D9F5]",
    icon: Pencil,
    rotate: "rotate-1",
  },
  {
    number: "03",
    title: "A world takes shape",
    description:
      "Little details come together to create a place that feels worth exploring.",
    label: "WORLD BUILDING",
    color: "bg-[#F3A39B]",
    icon: Scissors,
    rotate: "-rotate-1",
  },
];

export default function BehindTheScenes() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="behind-the-scenes"
      className="relative scroll-mt-24 overflow-hidden bg-[#E8E5D8] px-6 py-24 md:px-10 md:py-32"
    >
      {/* Subtle notebook lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, #A7A08D 40px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Intro */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mb-14 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end"
        >
          <div>
            <span className="inline-flex -rotate-2 items-center gap-2 rounded-lg bg-[#F7D96B] px-4 py-2 text-xs font-bold tracking-wide text-[#35352F]">
              <Pencil size={15} />
              THE CREATIVE PROCESS
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[#35352F] md:text-6xl">
              Behind every world,
              <br />
              there&apos;s a little{" "}
              <span className="relative inline-block">
                wonder.
                <svg
                  viewBox="0 0 160 12"
                  className="absolute -bottom-2 left-0 h-3 w-full"
                  aria-hidden="true"
                >
                  <path
                    d="M3 7 Q40 1 80 7 T157 5"
                    fill="none"
                    stroke="#F3A39B"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#35352F]/75 md:justify-self-end">
            A small appreciation of the creative process behind
            animation—from the first spark of an idea to the details
            that make a story feel alive.
          </p>
        </motion.div>

        {/* Process cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 18 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                whileHover={
                  reduceMotion ? undefined : { y: -4, rotate: 0 }
                }
                className={`relative rounded-2xl border border-[#35352F]/15 bg-[#FFF9EF] p-6 shadow-[3px_4px_0_rgba(53,53,47,0.10)] ${step.rotate}`}
              >
                {/* Decorative tape */}
                <div
                  aria-hidden="true"
                  className={`absolute -top-2 left-8 h-5 w-16 rotate-[-4deg] opacity-80 ${step.color}`}
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                  }}
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-[#35352F]/50">
                    NOTE {step.number}
                  </span>

                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${step.color} text-[#35352F]`}
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="my-8 flex aspect-[5/3] items-center justify-center overflow-hidden rounded-xl border border-dashed border-[#35352F]/25 bg-[#E8E5D8]/50"
                >
                  {index === 0 ? (
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-[#35352F]/50">
                      <Lightbulb
                        size={48}
                        strokeWidth={1.3}
                        className="text-[#35352F]"
                      />
                      <Sparkles
                        size={20}
                        className="absolute -right-3 -top-2 text-[#F0B942]"
                      />
                    </div>
                  ) : index === 1 ? (
                    <svg viewBox="0 0 180 120" className="h-full w-full">
                      <path
                        d="M51 89 Q35 54 60 28 Q90 6 113 31 Q133 53 120 88"
                        fill="#A9D9F5"
                        fillOpacity=".55"
                        stroke="#35352F"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M57 90 Q44 54 66 32 Q91 16 109 36 Q125 55 114 85"
                        fill="none"
                        stroke="#35352F"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <circle cx="77" cy="54" r="2.5" fill="#35352F" />
                      <circle cx="99" cy="54" r="2.5" fill="#35352F" />
                      <path
                        d="M80 67 Q88 75 97 67"
                        fill="none"
                        stroke="#35352F"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M128 29l5 8 9 1 -7 6 2 9 -9 -5 -8 5 2 -9 -7 -6 9 -1Z"
                        fill="#F7D96B"
                        stroke="#35352F"
                        strokeWidth="1.5"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 180 120" className="h-full w-full">
                      <path
                        d="M0 82 Q40 38 85 78 T180 65 V120 H0Z"
                        fill="#B7D1A6"
                      />
                      <path
                        d="M0 99 Q55 64 110 94 T180 89 V120 H0Z"
                        fill="#8DB18B"
                      />
                      <circle cx="138" cy="24" r="12" fill="#F7D96B" />
                      <path
                        d="M33 28 Q25 20 17 28 Q8 38 20 45 Q30 50 41 40"
                        fill="none"
                        stroke="#35352F"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M38 30l10 -8 M40 37l12 0"
                        stroke="#35352F"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </div>

                <span className="text-[10px] font-bold tracking-[0.2em] text-[#35352F]/50">
                  {step.label}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-[#35352F]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#35352F]/70">
                  {step.description}
                </p>

                <div className="mt-6 flex justify-end">
                  <ArrowDownRight
                    size={21}
                    className="text-[#35352F]/60"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing note */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col gap-3 border-t border-[#35352F]/20 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-6 text-[#35352F]/70">
            These are illustrative concepts celebrating animation as
            a craft, not reproductions of Wema&apos;s actual workflow.
          </p>

          <a
            href="https://www.instagram.com/wema.animation/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full px-4 py-3 text-sm font-semibold text-[#35352F] transition-colors hover:bg-[#FFF9EF] sm:self-auto"
          >
            Explore Wema&apos;s work
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
