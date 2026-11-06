"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { type Testimonial, testimonials } from "@/data/portfolio";
import { ArrowLeft, ArrowRight, Pause, Play, Quote } from "../icons";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

const AUTO_ADVANCE_MS = 10_000;
const TIMER_RADIUS = 18;
const TIMER_CIRCUMFERENCE = 2 * Math.PI * TIMER_RADIUS;

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function HighlightedQuote({ testimonial }: { testimonial: Testimonial }) {
  const { quote, highlights, accent } = testimonial;

  if (!highlights?.length) return <>{quote}</>;

  const patterns = [...highlights]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp);
  const matcher = new RegExp(`(${patterns.join("|")})`, "gi");
  const phrases = new Set(highlights.map((phrase) => phrase.toLowerCase()));
  let offset = 0;

  return (
    <>
      {quote.split(matcher).map((part) => {
        const key = `${offset}-${part.length}`;
        offset += part.length;

        if (!phrases.has(part.toLowerCase())) return part;

        return (
          <mark
            key={key}
            className="rounded-[0.22em] px-[0.1em] font-semibold text-ink [box-decoration-break:clone]"
            style={{
              backgroundColor: `color-mix(in srgb, ${accent} 20%, transparent)`,
            }}
          >
            {part}
          </mark>
        );
      })}
    </>
  );
}

export function Testimonials() {
  const total = testimonials.length;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);

    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const next = () => {
    setDirection(1);
    setActive((current) => (current + 1) % total);
  };

  const prev = () => {
    setDirection(-1);
    setActive((current) => (current - 1 + total) % total);
  };

  const goTo = (target: number) => {
    const normalized = ((target % total) + total) % total;
    if (normalized === active) return;

    setDirection(normalized > active ? 1 : -1);
    setActive(normalized);
  };

  const testimonial = testimonials[active];
  const accent = `color-mix(in srgb, ${testimonial.accent} 72%, var(--ink))`;
  const timerRunning = !paused && !hovered && !reducedMotion;

  return (
    <section id="testimonials" className="scroll-mt-28 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Kind words"
          title={
            <>
              What people say
              <br />
              <span className="text-muted font-light">
                when we work together.
              </span>
            </>
          }
          description="A few kind words from people I've built with — products, systems, and everything in between."
          action={
            <span className="chip">
              <span className="status-dot" />
              {total} recommendations
            </span>
          }
        />

        <Reveal>
          <section
            aria-roledescription="carousel"
            aria-label="Testimonials"
            className="mt-10"
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setHovered(true);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") setHovered(false);
            }}
          >
            <p className="sr-only" aria-live="polite">
              Testimonial {active + 1} of {total}, from {testimonial.name}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-line pb-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tabular-nums tracking-[0.14em] text-faint">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-1">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => goTo(index)}
                      aria-label={`Show testimonial from ${item.name}`}
                      aria-current={active === index ? "true" : undefined}
                      className="group flex h-6 items-center"
                    >
                      <span
                        aria-hidden="true"
                        style={
                          active === index
                            ? { backgroundColor: accent }
                            : undefined
                        }
                        className={`block h-1.5 rounded-full transition-all duration-300 ${
                          active === index
                            ? "w-6"
                            : "w-1.5 bg-line-strong group-hover:bg-faint"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {reducedMotion ? null : (
                  <button
                    type="button"
                    onClick={() => setPaused((value) => !value)}
                    aria-label={
                      paused
                        ? "Resume testimonial autoplay"
                        : "Pause testimonial autoplay"
                    }
                    className="relative flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-ink"
                  >
                    <svg
                      viewBox="0 0 40 40"
                      aria-hidden="true"
                      className="absolute inset-0 h-10 w-10 -rotate-90"
                    >
                      <circle
                        cx="20"
                        cy="20"
                        r={TIMER_RADIUS}
                        fill="none"
                        stroke="var(--line)"
                        strokeWidth="1.5"
                      />
                      <circle
                        key={active}
                        cx="20"
                        cy="20"
                        r={TIMER_RADIUS}
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray={TIMER_CIRCUMFERENCE}
                        className="testimonial-timer"
                        style={{
                          stroke: accent,
                          animationDuration: `${AUTO_ADVANCE_MS}ms`,
                          animationPlayState: timerRunning
                            ? "running"
                            : "paused",
                        }}
                        onAnimationEnd={next}
                      />
                    </svg>
                    {paused ? (
                      <Play className="h-3.5 w-3.5" />
                    ) : (
                      <Pause className="h-3.5 w-3.5" />
                    )}
                  </button>
                )}

                <span
                  aria-hidden="true"
                  className="mx-1 h-4 w-px bg-line-strong"
                />

                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="icon-btn"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="icon-btn"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <figure
                key={active}
                className={
                  direction === 1
                    ? "testimonial-spin-next"
                    : "testimonial-spin-prev"
                }
              >
                <Quote className="h-8 w-8" style={{ color: accent }} />
                <blockquote className="mt-5 max-w-5xl text-pretty font-display text-[clamp(1.15rem,2.6vw,2.15rem)] font-medium leading-[1.45] tracking-[-0.035em] sm:leading-[1.4]">
                  &ldquo;
                  <HighlightedQuote testimonial={testimonial} />
                  &rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span
                    className="avatar-tint flex h-12 w-12 flex-none items-center justify-center rounded-full font-mono text-[11px] font-medium"
                    style={{ "--a": testimonial.accent } as CSSProperties}
                  >
                    {testimonial.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[13.5px] font-semibold tracking-[-0.01em]">
                      {testimonial.name}
                    </p>
                    <p className="truncate text-[11.5px] text-faint">
                      {testimonial.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </Reveal>
      </div>
    </section>
  );
}
