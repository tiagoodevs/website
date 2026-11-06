"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
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
    <section
      id="testimonials"
      className="relative scroll-mt-24 px-6 py-32 sm:py-40 lg:py-48"
    >
      <div className="mx-auto max-w-6xl" ref={containerRef}>
        <p className="section-kicker">Testimonials</p>
        <h2 className="section-title">What people say when we work together.</h2>
        <p className="section-subtitle mt-4 font-light">
          A few kind words from people I&apos;ve built with — products, systems,
          and everything in between.
        </p>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={`${item.name}-${item.company}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <div className="rounded-20 border border-border bg-card p-8 hover:bg-card-hover hover:border-brand transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <Image
          src={`/profiles/${item.img}`}
          alt=""
          width={36}
          height={36}
          className="size-9 shrink-0 rounded-full object-cover"
          loading="lazy"
        />
        <div className="min-w-0 text-left">
          <p className="text-sm font-semibold text-foreground truncate">
            {item.name}
          </p>
          <p className="text-xs text-muted truncate font-light">
            {item.role} · {item.company}
          </p>
        </div>
      </div>

      <p className="text-lg leading-relaxed text-foreground/80 italic font-light">
        &ldquo;{item.quote}&rdquo;
      </p>
    </div>
  );
}
