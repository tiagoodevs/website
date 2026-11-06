"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { ChevronDown, Mail } from "lucide-react";
import { site } from "@/content/site";
import { RotatingText } from "@/components/assets/rotatingText";

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.from(wrapperRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative flex min-h-[90vh] flex-col items-start justify-start px-6 sm:px-8 lg:px-12 pt-28 pb-40 overflow-hidden"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-[0.24em] text-brand/80 uppercase mb-10">
          Tiago Santos
        </p>

        <h1 className="text-6xl font-bold tracking-tight text-foreground sm:text-8xl leading-[1] mb-6">
          <RotatingText
            items={[
              { text: "Hello", lang: "en" },
              { text: "你好", lang: "zh" },
              { text: "こんにちは", lang: "ja" },
              { text: "مرحبا", lang: "ar", dir: "rtl" },
            ]}
          />
          <br />
          <span className="block text-brand font-light text-[1.15rem] tracking-wide mt-3 leading-none">
            I&apos;m {site.name}.
          </span>
        </h1>

        <p className="text-lg text-muted font-light max-w-xl leading-relaxed mt-2 mb-12">
          Full-stack developer and product builder from Portugal. I design and
          ship modern web products — polished interfaces, solid APIs, and
          reliable infrastructure.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-7 py-3 text-sm font-semibold text-foreground hover:bg-card transition-colors"
          >
            Get in touch
            <ChevronDown size={16} strokeWidth={1.75} />
          </Link>

          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand px-7 py-3 text-sm font-semibold text-brand transition-all duration-300 hover:bg-brand hover:text-[#022c22]"
          >
            <Mail size={17} strokeWidth={1.75} />
            Say hello
          </a>
        </div>

        <a
          href="#about"
          className="mt-16 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand"
        >
          <span className="h-px w-8 bg-border" />
          Scroll down
        </a>
      </div>
    </section>
  );
}
