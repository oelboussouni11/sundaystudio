"use client";

import { motion } from "framer-motion";
import { Blob } from "@/components/decorative/Blob";
import { Squiggle } from "@/components/decorative/Doodle";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden grain py-28 md:py-36">
      <Blob
        className="top-[-160px] right-[-140px] h-[460px] w-[460px] opacity-25"
        color="#CC3E3E"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-red">
          Services
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-[family-name:var(--font-display)] font-black text-[clamp(3rem,9vw,8rem)] leading-[0.9] tracking-tight max-w-5xl"
        >
          What we <span className="relative inline-block text-sunday-red">
            do
            <Squiggle
              className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3"
              strokeWidth={6}
            />
          </span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-sunday-text/75 leading-relaxed"
        >
          Eight disciplines, working as one studio. Pick what you need, or let
          us build the whole universe.
        </motion.p>
      </div>
    </section>
  );
}
