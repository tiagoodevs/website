"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { toKebabCase } from "@/lib/utils";
import { aboutNotes, aboutParagraphs } from "@/content/about";
import { site } from "@/content/site";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-32 sm:py-40 lg:py-48">
      <div className="mx-auto max-w-6xl" ref={containerRef}>
        <div className="grid gap-16 md:gap-24 lg:grid-cols-[1fr_1fr] lg:gap-32 items-start">
          <div className="relative">
            <div className="relative rounded-24 overflow-hidden border border-border bg-card">
              <Image
                src={site.avatar}
                alt={site.name}
                width={500}
                height={500}
                className="w-full h-auto block rounded-24 object-cover"
                priority
              />
            </div>
            <span className="absolute -bottom-8 -left-8 inline-flex items-center gap-2 rounded-xl bg-card border border-brand/40 px-3 py-2 text-xs font-mono font-semibold text-foreground shadow-xl">
              <span className="w-2 h-2 rounded-full bg-brand" />
              Available for work
            </span>
          </div>

          <div className="space-y-6">
            <p className="section-kicker">About me</p>
            <h2 className="section-title">
              Building products that feel clear and considered.
            </h2>
            <p className="section-subtitle mt-4 font-light">
              I&apos;m a full-stack developer and multimedia student who ships modern web
              products end to end — polished interfaces, solid APIs, and reliable
              deployments.
            </p>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted font-light">
              {aboutParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {aboutNotes.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-3 py-1.5 font-mono text-xs font-semibold text-foreground hover:bg-card-hover transition-colors"
                >
                  <span aria-hidden className="text-muted font-bold">#</span>
                  {toKebabCase(item)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
