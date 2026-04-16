"use client";

import { motion } from "framer-motion";
import { Blob } from "@/components/decorative/Blob";
import { Star } from "@/components/decorative/Doodle";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden grain py-28 md:py-36">
      <Blob
        className="top-[-160px] left-[-140px] h-[460px] w-[460px] opacity-25"
        color="#CC3E3E"
      />
      <Star className="absolute top-24 right-[10%] h-10 w-10 rotate-12" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-red">
          About
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-[family-name:var(--font-display)] font-black text-[clamp(2.25rem,7vw,6rem)] leading-[0.95] tracking-tight max-w-5xl"
        >
          Sunday is a creative agency built for brands that want{" "}
          <span className="text-sunday-red">more than visibility</span>.
        </motion.h1>
      </div>
    </section>
  );
}
