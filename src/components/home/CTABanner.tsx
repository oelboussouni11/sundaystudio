"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Blob } from "@/components/decorative/Blob";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sunday-red via-sunday-red to-sunday-red-dark py-28 md:py-36">
      <Blob
        className="top-[-120px] right-[-100px] h-[420px] w-[420px] opacity-20"
        color="#FFFFFF"
      />
      <Blob
        className="bottom-[-140px] left-[-120px] h-[380px] w-[380px] opacity-15"
        color="#FFFFFF"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-display)] font-black text-[clamp(2.5rem,9vw,8rem)] leading-[0.9] tracking-tighter text-white"
        >
          LET&apos;S BUILD
          <br />
          <span className="inline-block -rotate-2">SOMETHING</span>{" "}
          <span className="inline-block rotate-1">THAT MOVES.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <Button href="/contact" size="lg" variant="secondary">
            Start a project →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
