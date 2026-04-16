"use client";

import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import { MessageCircle, Mail, Music2, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

type IconType = (props: { className?: string }) => React.ReactElement;

const InstagramIcon: IconType = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon: IconType = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LucideWrap = (
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
): IconType =>
  function Wrapped({ className }) {
    return <Icon className={className} strokeWidth={2} />;
  };

type ContactChannel = {
  label: string;
  handle: string;
  url: string;
  icon: IconType;
  cta: string;
  rotate: number;
};

const channels: ContactChannel[] = [
  {
    label: "WhatsApp",
    handle: "+212 6 00 00 00 00",
    url: "https://wa.me/212600000000",
    icon: LucideWrap(MessageCircle),
    cta: "Tap to chat",
    rotate: -2,
  },
  {
    label: "Instagram",
    handle: "@sundaystudio",
    url: "https://instagram.com/sundaystudio",
    icon: InstagramIcon,
    cta: "See the feed",
    rotate: 1.5,
  },
  {
    label: "Email",
    handle: "hello@sundaystudio.co",
    url: "mailto:hello@sundaystudio.co",
    icon: LucideWrap(Mail),
    cta: "Old school, still works",
    rotate: -1.5,
  },
  {
    label: "Book a call",
    handle: "20 min discovery",
    url: "https://cal.com/sundaystudio",
    icon: LucideWrap(CalendarDays),
    cta: "Pick a Sunday slot",
    rotate: 2,
  },
  {
    label: "TikTok",
    handle: "@sundaystudio",
    url: "https://tiktok.com/@sundaystudio",
    icon: LucideWrap(Music2),
    cta: "Behind the scenes",
    rotate: 1,
  },
  {
    label: "LinkedIn",
    handle: "Sunday Studio",
    url: "https://linkedin.com/company/sunday-studio",
    icon: LinkedinIcon,
    cta: "The boring one",
    rotate: -1,
  },
];

export function ContactGrid() {
  return (
    <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {channels.map((c, i) => {
        const Icon = c.icon;
        return (
          <motion.a
            key={c.label}
            href={c.url}
            target={c.url.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: c.rotate }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              delay: i * 0.08,
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
            whileHover={{ rotate: 0, scale: 1.03, y: -4 }}
            className={cn(
              "group relative block rounded-3xl border border-sunday-line bg-sunday-surface p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)] transition-colors hover:border-sunday-red"
            )}
          >
            <div className="flex items-start justify-between mb-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sunday-red/15 text-sunday-red">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-text-muted">
                0{i + 1}
              </span>
            </div>

            <div className="rounded-2xl bg-white p-4 mb-5 border border-sunday-line">
              <QRCode
                value={c.url}
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                fgColor="#CC3E3E"
                bgColor="#FFFFFF"
                level="M"
              />
            </div>

            <div className="space-y-1">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl leading-tight">
                {c.label}
              </h3>
              <p className="text-sm text-sunday-text-muted break-all">
                {c.handle}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between pt-4 border-t border-sunday-line">
              <span className="text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-accent)] text-sunday-text-muted group-hover:text-sunday-red transition-colors">
                {c.cta}
              </span>
              <span className="text-sunday-red opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                →
              </span>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
