import type { Metadata } from "next";
import { ContactGrid } from "@/components/contact/ContactGrid";
import { Blob } from "@/components/decorative/Blob";
import { Squiggle } from "@/components/decorative/Doodle";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Scan, tap, text — whatever works. Sunday Studio is one message away.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-20 md:py-36 grain">
      <Blob
        className="top-[-120px] right-[-140px] h-[460px] w-[460px] opacity-25"
        color="#CC3E3E"
      />
      <Blob
        className="bottom-[-160px] left-[-160px] h-[460px] w-[460px] opacity-15"
        color="#E85454"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-red">
          Contact
        </p>
        <h1 className="font-[family-name:var(--font-display)] font-black text-[clamp(2.25rem,8.5vw,7rem)] leading-[0.95] tracking-tight max-w-4xl">
          Scan.{" "}
          <span className="relative inline-block text-sunday-red">
            Tap
            <Squiggle className="absolute -bottom-3 left-0 w-full" />
          </span>
          . Text us.
        </h1>
        <p className="mt-6 md:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-sunday-text/75 leading-relaxed">
          No forms. No chatbots. No &quot;your ticket has been received&quot;.
          Pick a channel below — scan the code with your camera, or just tap
          the card. We answer fast.
        </p>

        <div className="mt-14 md:mt-20">
          <ContactGrid />
        </div>

        <p className="mt-16 text-center text-xs uppercase tracking-[0.3em] font-[family-name:var(--font-accent)] text-sunday-text-muted">
          Based in Casablanca · Working worldwide
        </p>
      </div>
    </section>
  );
}
