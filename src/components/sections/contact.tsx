import { profile, socials } from "@/data/portfolio";
import { CopyEmail } from "../copy-email";
import { ArrowUpRight, Clock, Sparkle } from "../icons";
import { Reveal } from "../reveal";
import { SocialIcon } from "../social-icon";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <div className="inverse-card card relative overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(134,209,154,0.35),transparent_66%)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 right-[-6rem] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,159,110,0.3),transparent_66%)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                  06 — Contact
                </span>
                <h2 className="mt-5 max-w-xl font-display text-[clamp(2.4rem,5.2vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
                  Got a project in mind?
                </h2>
                <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-white/60">
                  I&apos;m currently working full-time, but I&apos;m always
                  happy to chat about interesting ideas, collaborations, or side
                  projects. Discord is the fastest way to reach me.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-2.5">
                  <a
                    href={profile.discord}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light"
                  >
                    <SocialIcon kind="discord" className="h-4 w-4" />
                    Message on Discord
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <CopyEmail
                    email={profile.email}
                    className="btn btn-glass max-w-full"
                  />
                </div>

                <div className="mt-6 flex items-center gap-2 text-[11.5px] text-white/45">
                  <Sparkle className="h-3.5 w-3.5 text-[#86d19a]" />
                  {profile.availability}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                  Elsewhere
                </span>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.kind === "mail" ? undefined : "_blank"}
                    rel={social.kind === "mail" ? undefined : "noreferrer"}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <SocialIcon
                      kind={social.kind}
                      className="h-4 w-4 text-white/50 transition-colors group-hover:text-white"
                    />
                    <span className="text-[12.5px] font-medium text-white/80 transition-colors group-hover:text-white">
                      {social.label}
                    </span>
                    <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-[11.5px] text-white/45">
              <span className="flex items-center gap-2">
                <span
                  className="status-dot"
                  style={{ backgroundColor: "#86d19a" }}
                />
                Based in Portugal
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                Usually replies within a day
              </span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.14em]">
                Working worldwide
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
