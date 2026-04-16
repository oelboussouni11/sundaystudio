"use client";

import { useLayoutEffect } from "react";

export function ThemeScript() {
  useLayoutEffect(() => {
    try {
      const t = localStorage.getItem("sunday-theme");
      if (t === "light" || t === "dark") {
        document.documentElement.setAttribute("data-theme", t);
      }
    } catch {}
  }, []);
  return null;
}
