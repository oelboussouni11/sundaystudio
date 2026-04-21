"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Blob } from "@/components/decorative/Blob";
import { Squiggle, Star } from "@/components/decorative/Doodle";

const scatterOffsets: Array<{ x: number; y: number; rotate: number }> = [
  { x: -90, y: -40, rotate: -10 },
  { x: 60, y: -60, rotate: 8 },
  { x: -40, y: 50, rotate: -6 },
  { x: 80, y: -30, rotate: 12 },
  { x: -70, y: 60, rotate: -14 },
  { x: 100, y: 40, rotate: 9 },
  { x: -60, y: -50, rotate: -7 },
];

function ScatterWord({
  progress,
  index,
  entryDelay,
  className,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  entryDelay: number;
  className?: string;
  children: React.ReactNode;
}) {
  const offset = scatterOffsets[index % scatterOffsets.length];
  const x = useTransform(progress, [0, 1], [0, offset.x]);
  const y = useTransform(progress, [0, 1], [0, offset.y]);
  const rotate = useTransform(progress, [0, 1], [0, offset.rotate]);
  const opacity = useTransform(progress, [0, 0.75, 1], [1, 1, 0]);

  return (
    <motion.span
      style={{ x, y, rotate, opacity }}
      className={className ?? "relative inline-block mr-[0.22em]"}
    >
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: entryDelay, duration: 0.6 }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden grain min-h-[85vh] md:min-h-[92vh] flex items-center"
    >
      <Blob
        className="top-[-200px] left-[-180px] h-[520px] w-[520px] opacity-30"
        color="#CC3E3E"
      />
      <Blob
        className="bottom-[-220px] right-[-160px] h-[480px] w-[480px] opacity-20"
        color="#E85454"
      />
      <Star className="hidden md:block absolute top-28 right-[12%] h-8 w-8 rotate-12" />
      <Star className="absolute bottom-32 left-[8%] h-6 w-6 -rotate-12 opacity-80" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 py-16 md:py-24">
        <h1 className="font-[family-name:var(--font-display)] font-black text-[clamp(2.25rem,8.5vw,7rem)] leading-[0.95] tracking-tight max-w-5xl">
          <ScatterWord progress={scrollYProgress} index={0} entryDelay={0.1}>
            We
          </ScatterWord>
          <ScatterWord progress={scrollYProgress} index={1} entryDelay={0.16}>
            don&apos;t
          </ScatterWord>
          <ScatterWord progress={scrollYProgress} index={2} entryDelay={0.22}>
            just
          </ScatterWord>
          <ScatterWord progress={scrollYProgress} index={3} entryDelay={0.32}>
            <span className="relative inline-block">
              <span className="text-sunday-red">create</span>
              <Squiggle
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3"
                strokeWidth={6}
              />
            </span>
          </ScatterWord>
          <ScatterWord progress={scrollYProgress} index={4} entryDelay={0.4}>
            content.
          </ScatterWord>
          <br />
          <ScatterWord progress={scrollYProgress} index={5} entryDelay={0.5}>
            We
          </ScatterWord>
          <ScatterWord progress={scrollYProgress} index={6} entryDelay={0.56}>
            build
          </ScatterWord>
          <ScatterWord progress={scrollYProgress} index={7} entryDelay={0.64}>
            <span className="relative inline-block">
              <span className="text-sunday-red">presence</span>.
              <Squiggle
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-[85%] h-2 sm:h-3"
                strokeWidth={6}
              />
            </span>
          </ScatterWord>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-sunday-text/75 leading-relaxed"
        >
          Content, branding, and culture, built for brands that want more than
          visibility. We make stories, experiences, and visuals that actually
          stick.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Button href="/contact" size="lg">
            Let&apos;s build something →
          </Button>
          <Button href="/services" size="lg" variant="ghost">
            See what we do
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
