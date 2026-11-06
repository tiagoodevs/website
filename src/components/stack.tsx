"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { stack } from "@/content/stack";

export default function Stack() {
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
    <section id="stack" className="relative scroll-mt-24 px-6 py-32 sm:py-40 lg:py-48">
      <div className="mx-auto max-w-6xl" ref={containerRef}>
        <p className="section-kicker">Stack</p>
        <h2 className="section-title">The tools I use to build.</h2>
        <p className="section-subtitle mt-4 font-light">
          From interfaces to APIs and deployments — here&apos;s what I reach for.
        </p>

        <div className="mt-20 space-y-16">
          {stack.map((category) => (
            <div key={category.title} className="relative">
              <div className="absolute -top-4 left-0">
                <h3 className="text-sm font-medium tracking-wide text-muted uppercase">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl p-5 bg-card border border-border hover:bg-card-hover hover:border-brand transition-all duration-300 group"
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={44}
                      height={44}
                      loading="lazy"
                      className="h-10 w-10 object-contain grayscale group-hover:grayscale-0 transition duration-500"
                    />
                    <span className="text-xs font-medium text-muted uppercase tracking-wider leading-none group-hover:text-brand">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
