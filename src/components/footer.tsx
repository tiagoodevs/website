import { profile, socials } from "@/data/portfolio";
import { ArrowUpRight } from "./icons";
import { SocialIcon } from "./social-icon";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell">
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-display text-[12px] font-bold tracking-[-0.04em] text-bg">
                TS
              </span>
              <span className="font-display text-[15px] font-semibold tracking-[-0.03em]">
                Tiago Santos
              </span>
            </a>
            <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-muted">
              Full-stack developer building clear, considered products from
              Portugal.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.kind === "mail" ? undefined : "_blank"}
                rel={social.kind === "mail" ? undefined : "noreferrer"}
                aria-label={social.label}
                title={social.label}
                className="icon-btn"
              >
                <SocialIcon kind={social.kind} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none select-none overflow-hidden border-t border-line pt-6"
        >
          <p className="font-display text-[clamp(3.2rem,14vw,10.5rem)] font-bold leading-[0.72] tracking-[-0.075em] text-ink/[0.055]">
            tiagodevs
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-6 text-[11px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made in Portugal with a lot of care
            <span aria-hidden="true">🇵🇹</span>
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
