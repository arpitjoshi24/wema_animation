
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";

function CartoonBoy() {
  return (
    <svg
      viewBox="0 0 240 280"
      role="img"
      aria-label="Original fictional cartoon boy mascot"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background doodles */}
      <path
        d="M30 65 Q42 48 54 65 M188 45 L194 58 L208 62 L194 68 L188 82 L182 68 L168 62 L182 58 Z"
        stroke="#35352F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Neck */}
      <path
        d="M101 174 L99 204 L143 204 L139 169"
        fill="#E9AD83"
        stroke="#35352F"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Hoodie */}
      <path
        d="M94 192 Q76 195 64 216 L49 267 Q119 282 190 267 L174 215 Q163 194 144 192 L121 218 Z"
        fill="#739A83"
        stroke="#35352F"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M95 196 L120 220 L145 195"
        stroke="#35352F"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M119 220 L117 265 M126 220 L130 265"
        stroke="#35352F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M76 233 Q86 241 95 232 M148 232 Q158 241 168 232"
        stroke="#DCEBD5"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Ears */}
      <ellipse cx="76" cy="126" rx="13" ry="20" fill="#E9AD83" stroke="#35352F" strokeWidth="3" />
      <ellipse cx="164" cy="126" rx="13" ry="20" fill="#E9AD83" stroke="#35352F" strokeWidth="3" />

      {/* Face */}
      <path
        d="M75 92 Q75 62 120 63 Q165 62 165 98 L161 143 Q156 178 120 183 Q84 178 79 143 Z"
        fill="#F4C39C"
        stroke="#35352F"
        strokeWidth="3.5"
      />

      {/* Hair */}
      <path
        d="M74 111 Q61 82 79 57 Q93 37 118 45 Q141 30 159 52 Q179 65 168 104 L157 90 L151 72 Q132 88 105 77 Q94 93 74 111 Z"
        fill="#49382F"
        stroke="#35352F"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M84 73 Q100 51 120 58 M129 53 Q147 52 157 70"
        stroke="#715244"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Eyebrows */}
      <path d="M91 112 Q102 105 111 112 M132 112 Q143 105 151 112" stroke="#49382F" strokeWidth="3.5" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="102" cy="126" rx="6" ry="8" fill="#35352F" />
      <ellipse cx="141" cy="126" rx="6" ry="8" fill="#35352F" />
      <circle cx="104" cy="123" r="2" fill="white" />
      <circle cx="143" cy="123" r="2" fill="white" />

      {/* Cheeks and smile */}
      <ellipse cx="89" cy="143" rx="9" ry="5" fill="#F3A39B" opacity=".8" />
      <ellipse cx="152" cy="143" rx="9" ry="5" fill="#F3A39B" opacity=".8" />
      <path
        d="M105 146 Q120 161 136 146"
        stroke="#35352F"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Little collar detail */}
      <path d="M106 195 L120 208 L135 195" stroke="#FFF5E5" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

function CartoonGirl() {
  return (
    <svg
      viewBox="0 0 240 280"
      role="img"
      aria-label="Original fictional cartoon girl mascot"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background doodles */}
      <path
        d="M36 58 L42 72 L57 77 L42 82 L36 97 L30 82 L16 77 L30 72 Z M188 64 Q200 51 212 64 Q200 77 188 64 Z"
        stroke="#35352F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Neck */}
      <path
        d="M100 174 L99 203 L143 203 L140 170"
        fill="#E9AD83"
        stroke="#35352F"
        strokeWidth="3"
      />

      {/* Overalls */}
      <path
        d="M94 194 L72 201 Q59 204 55 226 L48 267 Q120 282 192 267 L184 226 Q180 204 164 201 L144 194 L138 222 L101 222 Z"
        fill="#F3A39B"
        stroke="#35352F"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M99 195 L101 222 L138 222 L144 195"
        fill="#F7D96B"
        stroke="#35352F"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M102 221 L99 267 M137 221 L142 267" stroke="#35352F" strokeWidth="2.5" />
      <circle cx="109" cy="209" r="3" fill="#35352F" />
      <circle cx="131" cy="209" r="3" fill="#35352F" />

      {/* Ears */}
      <ellipse cx="76" cy="126" rx="13" ry="20" fill="#E9AD83" stroke="#35352F" strokeWidth="3" />
      <ellipse cx="164" cy="126" rx="13" ry="20" fill="#E9AD83" stroke="#35352F" strokeWidth="3" />

      {/* Hair behind face */}
      <path
        d="M71 108 Q56 76 80 53 Q101 35 126 44 Q157 36 173 67 Q187 91 169 143 L157 174 L83 174 L70 144 Z"
        fill="#725044"
        stroke="#35352F"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Face */}
      <path
        d="M77 93 Q77 63 120 63 Q163 63 163 97 L160 143 Q154 177 120 182 Q86 177 80 143 Z"
        fill="#F4C39C"
        stroke="#35352F"
        strokeWidth="3.5"
      />

      {/* Fringe */}
      <path
        d="M75 107 Q64 80 85 57 Q105 39 129 49 Q154 39 168 66 Q174 81 164 102 L152 83 Q135 95 119 79 Q100 98 75 107 Z"
        fill="#725044"
        stroke="#35352F"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Side hair strands */}
      <path d="M78 106 Q75 134 89 153 M162 105 Q168 130 153 153" stroke="#96705C" strokeWidth="4" strokeLinecap="round" />

      {/* Eyebrows */}
      <path d="M91 112 Q102 106 111 112 M132 112 Q142 106 151 112" stroke="#49382F" strokeWidth="3.5" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="102" cy="126" rx="6" ry="8" fill="#35352F" />
      <ellipse cx="141" cy="126" rx="6" ry="8" fill="#35352F" />
      <circle cx="104" cy="123" r="2" fill="white" />
      <circle cx="143" cy="123" r="2" fill="white" />

      {/* Blush and smile */}
      <ellipse cx="89" cy="143" rx="9" ry="5" fill="#F3A39B" />
      <ellipse cx="152" cy="143" rx="9" ry="5" fill="#F3A39B" />
      <path
        d="M105 146 Q120 161 136 146"
        stroke="#35352F"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Hair bow */}
      <path
        d="M148 57 Q129 35 133 23 Q153 26 158 43 Q170 27 185 32 Q182 51 160 62 Z"
        fill="#F3A39B"
        stroke="#35352F"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="157" cy="52" r="5" fill="#F7D96B" stroke="#35352F" strokeWidth="2" />
    </svg>
  );
}

const creators = [
  {
    name: "Ewan",
    role: "Co-creator at Wema",
    description:
      "A fictional cartoon tribute to one half of Wema's creative team.",
    color: "bg-[#A9D9F5]",
    rotation: "-rotate-2",
    Character: CartoonBoy,
  },
  {
    name: "Emma",
    role: "Co-creator at Wema",
    description:
      "A fictional cartoon tribute to one half of Wema's creative team.",
    color: "bg-[#F3A39B]",
    rotation: "rotate-2",
    Character: CartoonGirl,
  },
];

export default function AboutWema() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="scroll-mt-24 overflow-hidden bg-[#FFF5E5] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          {/* Introduction */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex -rotate-2 items-center gap-2 rounded-full bg-[#F7D96B] px-4 py-2 text-xs font-bold tracking-wide text-[#35352F]">
              <Heart size={14} />
              A LITTLE APPRECIATION
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-tight text-[#35352F] md:text-6xl">
              Behind the worlds,
              <br />
              there are people.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#35352F]/75 md:text-lg">
              Wema is an independent animation project run by Ewan
              and Emma. This little fan-made corner of the internet
              celebrates their creative journey and the imagination
              that makes independent animation special.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#35352F]/65">
              The cartoon figures here are original fictional mascots,
              not portraits of the creators or official Wema characters.
              This website is an unofficial fan project and is not
              affiliated with or endorsed by Wema.
            </p>

            <a
              href="https://www.instagram.com/wema.animation/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#35352F] bg-[#F7D96B] px-6 py-3.5 text-sm font-semibold text-[#35352F] transition-transform hover:-rotate-1 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35352F]"
            >
              Visit Wema on Instagram
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* Fictional cartoon mascot cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {creators.map((creator, index) => {
              const Character = creator.Character;

              return (
                <motion.article
                  key={creator.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.12,
                  }}
                  whileHover={
                    reduceMotion ? undefined : { y: -6, rotate: 0 }
                  }
                  className={`rounded-3xl border border-[#35352F]/10 bg-white/60 p-3 shadow-sm sm:p-4 ${creator.rotation}`}
                >
                  <div
                    className={`relative aspect-[4/5] overflow-hidden rounded-2xl ${creator.color}`}
                  >
                    <motion.div
                      aria-hidden="true"
                      className="absolute inset-0"
                      animate={
                        reduceMotion ? undefined : { rotate: [0, 2, 0] }
                      }
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#FFF5E5]/50" />
                      <div className="absolute -bottom-10 -left-5 h-28 w-[130%] rounded-[50%] bg-[#35352F]/10" />
                    </motion.div>

                    <div className="absolute inset-x-0 bottom-0 top-2 flex items-end justify-center">
                      <div className="w-full max-w-[240px]">
                        <Character />
                      </div>
                    </div>

                    <span className="absolute bottom-3 left-3 rounded-full border border-[#35352F]/20 bg-[#FFF5E5]/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#35352F]">
                      Fan-made mascot
                    </span>
                  </div>

                  <div className="px-1 pb-2 pt-5">
                    <h3 className="text-xl font-black text-[#35352F] sm:text-2xl">
                      {creator.name}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-[#35352F]/60">
                      {creator.role}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-[#35352F]/75">
                      {creator.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing message */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-3xl bg-[#DCEBD5] px-6 py-10 text-center md:px-12 md:py-14"
        >
          <Sparkles
            size={28}
            className="mx-auto text-[#35352F]"
            aria-hidden="true"
          />

          <h3 className="mt-4 text-2xl font-black text-[#35352F] md:text-4xl">
            Here&apos;s to more stories.
          </h3>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#35352F]/75 md:text-base">
            A small fan-made tribute to the people who keep
            independent animation moving forward.
          </p>

          <div className="mt-5 flex justify-center gap-3" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F3A39B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F7D96B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#A9D9F5]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
