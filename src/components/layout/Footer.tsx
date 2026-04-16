import Link from "next/link";
import { navLinks, socials, siteMetadata } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-sunday-line bg-sunday-dark">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="max-w-sm text-sm text-sunday-text-muted leading-relaxed">
              {siteMetadata.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-sunday-text-muted font-[family-name:var(--font-accent)] mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sunday-text/80 hover:text-sunday-red transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-sunday-text-muted font-[family-name:var(--font-accent)] mb-4">
              Follow
            </h3>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sunday-text/80 hover:text-sunday-red transition"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-sunday-line flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-sunday-text-muted">
            © {new Date().getFullYear()} Sunday Studio®. All rights reserved.
          </p>
          <p className="text-xs text-sunday-text-muted font-[family-name:var(--font-accent)] uppercase tracking-[0.2em]">
            Made with Sunday vibes.
          </p>
        </div>
      </div>
    </footer>
  );
}
