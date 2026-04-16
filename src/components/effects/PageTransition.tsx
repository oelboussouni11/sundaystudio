"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BARS = 6;

let appHasMounted = false;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isFirst] = useState(() => {
    if (typeof window === "undefined") return true;
    return !appHasMounted;
  });

  useEffect(() => {
    appHasMounted = true;
  }, []);

  const totalDuration = 1.1;
  const contentDelay = isFirst ? 0 : 0.62;

  return (
    <div key={pathname} className="relative">
      {!isFirst && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[90] flex"
        >
          {Array.from({ length: BARS }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "-101%" }}
              animate={{ y: ["-101%", "0%", "0%", "101%"] }}
              transition={{
                duration: totalDuration,
                times: [0, 0.4, 0.55, 1],
                delay: i * 0.05,
                ease: [0.83, 0, 0.17, 1],
              }}
              className="h-full bg-sunday-red"
              style={{ width: `${100 / BARS}%` }}
            />
          ))}
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: contentDelay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
