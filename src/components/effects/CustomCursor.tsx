"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Variant = "default" | "hover";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const dotX = useSpring(x, { damping: 22, stiffness: 650, mass: 0.2 });
  const dotY = useSpring(y, { damping: 22, stiffness: 650, mass: 0.2 });

  const ringX = useSpring(x, { damping: 18, stiffness: 180, mass: 0.6 });
  const ringY = useSpring(y, { damping: 18, stiffness: 180, mass: 0.6 });

  const [variant, setVariant] = useState<Variant>("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, input, textarea, [data-cursor='hover']"
      );
      setVariant(interactive ? "hover" : "default");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sunday-red"
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: variant === "hover" ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sunday-red"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: variant === "hover" ? 1.8 : 1,
          backgroundColor:
            variant === "hover" ? "rgba(204, 62, 62, 0.2)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
    </>
  );
}
