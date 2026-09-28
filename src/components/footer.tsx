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
    <footer className="px-6 pt-2 pb-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center text-sm text-foreground/45 sm:flex-row sm:text-left">
        <p>
          {site.name} · Copyright {new Date().getFullYear()}
        </p>

        <ul className="flex items-center gap-1">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on ${social.label}`}
                className="flex size-8 items-center justify-center rounded-lg transition-colors hover:bg-card-hover hover:text-foreground"
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

        <p>
          Made in <span className="text-foreground">🇵🇹</span> with{" "}
          <span className="text-[#bd3859]" aria-label="love">
            &lt;3
          </span>
        </p>
      </div>
    </footer>
  );
}
