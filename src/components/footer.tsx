import { siDiscord, siGithub } from "simple-icons";
import IconResolve, { LinkedInIcon } from "@/lib/icons";
import { site } from "@/content/site";

const socials = [
  { href: site.socials.github, label: "GitHub", icon: siGithub },
  { href: site.socials.linkedin, label: "LinkedIn", icon: null },
  { href: site.socials.discord, label: "Discord", icon: siDiscord },
];

export default function Footer() {
  return (
    <footer className="px-6 pt-28 pb-20 border-t border-white/10">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-between gap-10 text-center text-sm text-muted sm:flex-row sm:text-left">
        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground">{site.shortName}</span>
          <span className="text-xs">· {new Date().getFullYear()}</span>
        </div>

        <ul className="flex items-center gap-1">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on ${social.label}`}
                className="flex size-8 items-center justify-center rounded-lg transition-colors hover:bg-card hover:text-foreground"
              >
                {social.icon ? (
                  <IconResolve size={16} icon={social.icon} />
                ) : (
                  <LinkedInIcon size={16} />
                )}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs font-light">
          Made in <span className="text-foreground">🇵🇹</span> with{" "}
          <span className="text-muted" aria-label="love">
            &lt;3
          </span>
        </p>
      </div>
    </footer>
  );
}
