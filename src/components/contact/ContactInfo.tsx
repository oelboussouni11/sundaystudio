import { Mail, Phone, MapPin } from "lucide-react";
import { socials } from "@/lib/constants";

const items = [
  { icon: Mail, label: "Email", value: "hello@sundaystudio.co" },
  { icon: Phone, label: "Phone", value: "+212 6 00 00 00 00" },
  { icon: MapPin, label: "Location", value: "Casablanca · Worldwide" },
];

export function ContactInfo() {
  return (
    <aside className="space-y-6">
      <div className="rounded-3xl border-2 border-sunday-line bg-sunday-surface p-8">
        <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl mb-6">
          Get in touch
        </h3>
        <ul className="space-y-5">
          {items.map((item) => (
            <li key={item.label} className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sunday-red/15 text-sunday-red shrink-0">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-accent)] text-sunday-text-muted">
                  {item.label}
                </p>
                <p className="text-base font-medium">{item.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border-2 border-sunday-line bg-sunday-surface p-8">
        <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl mb-4">
          Follow along
        </h3>
        <ul className="flex flex-wrap gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border-2 border-sunday-line bg-sunday-dark px-4 py-2 text-sm font-medium hover:border-sunday-red hover:text-sunday-red transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
