"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "sunday-splash-seen";
const TOTAL_MS = 2000;

export function SplashScreen() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let seen: string | null = null;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY);
    } catch {}
    if (seen) return;

    setShow(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
    }, TOTAL_MS);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-sunday-dark"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Image
              src="/logo/sundaystudio.svg"
              alt="Sunday Studio"
              width={420}
              height={84}
              priority
              className="h-14 md:h-20 w-auto"
            />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-sunday-red"
          />

          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.4em] font-[family-name:var(--font-accent)] text-sunday-text-muted"
          >
            a creative studio
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
