
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowRight, Asterisk, Sparkles } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "A World of Wonder",
    category: "STORY WORLDS",
    description:
      "Little details, big imaginations, and places waiting to be explored.",
    theme: "blue",
    shape: "sun",
  },
  {
    id: "02",
    title: "Little Big Adventures",
    category: "CHARACTER STORIES",
    description:
      "A playful placeholder for the stories and characters we discover.",
    theme: "coral",
    shape: "star",
  },
  {
    id: "03",
    title: "Behind the Sketches",
    category: "THE CREATIVE PROCESS",
    description:
      "From rough ideas to expressive worlds, every line has a story.",
    theme: "yellow",
    shape: "flower",
  },
];

function CardArtwork({
  theme,
  shape,
}: {
  theme: string;
  shape: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative isolate flex aspect-[5/3] items-center justify-center overflow-hidden rounded-2xl ${
        theme === "blue"
          ? "bg-[#A9D9F5]"
          : theme === "coral"
            ? "bg-[#F3A39B]"
            : "bg-[#F7D96B]"
      }`}
    >
      {/* Decorative scenery */}
      <div className="absolute -right-5 -top-7 h-24 w-24 rounded-full bg-[#FFF5E5]/60" />
      <div className="absolute -bottom-12 -left-6 h-32 w-[75%] rounded-[50%] bg-[#FFF5E5]/55" />
      <div className="absolute -bottom-16 -right-8 h-36 w-[80%] rounded-[50%] bg-[#35352F]/10" />

      <motion.div
        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[38%] border-2 border-[#35352F] bg-[#FFF5E5] shadow-[4px_5px_0_#35352F]"
        whileHover={{ rotate: 6, scale: 1.04 }}
        transition={{ duration: 0.3 }}
      >
        {shape === "sun" ? (
          <Sparkles size={42} strokeWidth={1.7} className="text-[#35352F]" />
        ) : shape === "star" ? (
          <Asterisk size={48} strokeWidth={2} className="text-[#35352F]" />
        ) : (
          <svg viewBox="0 0 48 48" className="h-12 w-12">
            <g fill="#F3A39B" stroke="#35352F" strokeWidth="1.5">
              <ellipse cx="24" cy="10" rx="6" ry="9" />
              <ellipse cx="24" cy="38" rx="6" ry="9" />
              <ellipse cx="10" cy="24" rx="9" ry="6" />
              <ellipse cx="38" cy="24" rx="9" ry="6" />
            </g>
            <circle cx="24" cy="24" r="7" fill="#F7D96B" stroke="#35352F" strokeWidth="1.5" />
          </svg>
        )}
      </motion.div>

      <Asterisk className="absolute left-[13%] top-[17%] h-7 w-7 rotate-12 text-[#35352F]" />
      <span className="absolute bottom-3 right-4 rounded-full border border-[#35352F]/30 bg-[#FFF5E5]/80 px-3 py-1 text-[10px] font-semibold tracking-widest text-[#35352F]">
        A LITTLE MAGIC
      </span>
    </div>
  );
}

export default function FeaturedSeries() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="series"
      className="relative scroll-mt-24 overflow-hidden bg-[#FFF5E5] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-2xl"
        >
          <span className="inline-flex -rotate-2 items-center gap-2 rounded-full bg-[#A9D9F5] px-4 py-2 text-xs font-bold tracking-wide text-[#35352F]">
            <Asterisk size={15} />
            A LITTLE LOOK INSIDE
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#35352F] md:text-6xl">
            Worlds worth
            <br />
            getting lost in.
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-[#35352F]/75 md:text-lg">
            A celebration of imagination, expressive characters,
            and the little details that bring animated stories to life.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group rounded-3xl border border-[#35352F]/10 bg-white/60 p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <CardArtwork
                theme={project.theme}
                shape={project.shape}
              />

              <div className="px-2 pb-2 pt-6">
                <p className="text-[10px] font-bold tracking-[0.18em] text-[#35352F]/55">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#35352F]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#35352F]/70">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#35352F]/10 pt-4">
                  <span className="text-xs font-medium text-[#35352F]/50">
                    CONCEPT PLACEHOLDER
                  </span>
                  <ArrowDownRight
                    size={20}
                    className="text-[#35352F] transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col gap-4 rounded-3xl bg-[#DCEBD5] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div>
            <h3 className="text-xl font-bold text-[#35352F]">
              There&apos;s more to discover.
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#35352F]/70">
              Visit Wema&apos;s official channels for their real projects
              and latest updates.
            </p>
          </div>

          <a
            href="https://www.instagram.com/wema.animation/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-2 border-[#35352F] bg-[#FFF5E5] px-5 py-3 text-sm font-semibold text-[#35352F] transition-transform hover:-rotate-1 hover:scale-[1.02]"
          >
            Visit Wema
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
