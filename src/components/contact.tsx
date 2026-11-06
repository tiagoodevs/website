"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { ArrowUpRight, FileDown, Mail } from "lucide-react";
import { siDiscord } from "simple-icons";
import DiscordPresence from "@/components/discord-presence";
import IconResolve from "@/lib/icons";
import { site } from "@/content/site";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-32 sm:py-40 lg:py-48">
      <div className="mx-auto max-w-4xl" ref={containerRef}>
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Got a project in mind?</h2>
        <p className="section-subtitle mt-4 font-light">
          I&apos;m currently working full-time, but I&apos;m always happy to chat
          about interesting ideas, collaborations, or side projects. Discord is
          the fastest way to reach me.
        </p>

        <div className="mt-20 rounded-20 border border-border bg-card p-8 md:p-14">
          <div className="mx-auto max-w-lg text-center">
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={site.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand bg-brand px-8 py-3.5 text-sm font-semibold text-[#022c22] hover:bg-white hover:text-[#022c22] transition-colors"
              >
                <IconResolve size={20} icon={siDiscord} />
                Shoot me a DM
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition-colors"
              >
                <Mail size={17} strokeWidth={1.75} />
                Say hello
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={site.resume}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition-colors"
              >
                <FileDown size={17} strokeWidth={1.75} />
                Résumé
              </a>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition-colors"
              >
                GitHub
                <ArrowUpRight size={17} strokeWidth={1.75} />
              </a>
            </div>

            <div className="mt-14 flex justify-center">
              <div className="w-full max-w-sm text-left">
                <DiscordPresence />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
