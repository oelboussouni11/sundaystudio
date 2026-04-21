import type { Metadata } from "next";

const PORTFOLIO_URL = "https://www.omateur.com/";

export const metadata: Metadata = {
  title: "Sneak Peek",
  description:
    "A look behind the curtain. Selected work, experiments, and side projects.",
};

export default function SneakPeekPage() {
  return (
    <div className="h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full bg-sunday-dark">
      <iframe
        src={PORTFOLIO_URL}
        title="Sneak Peek · Portfolio"
        className="h-full w-full border-0"
        loading="lazy"
        allow="autoplay; fullscreen; clipboard-read; clipboard-write"
      />
    </div>
  );
}
