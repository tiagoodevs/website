import type { CSSProperties } from "react";
import { type Testimonial, testimonials } from "@/data/portfolio";
import { ArrowRight, Quote } from "../icons";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

function TestimonialCard({
  testimonial,
  className = "",
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure className={`card break-inside-avoid p-5 sm:p-6 ${className}`}>
      <Quote
        className="h-5 w-5 opacity-80"
        style={{ color: testimonial.accent }}
      />
      <blockquote className="mt-4 text-[12.5px] leading-relaxed text-muted">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span
          className="avatar-tint flex h-9 w-9 flex-none items-center justify-center rounded-full font-mono text-[10px] font-medium"
          style={{ "--a": testimonial.accent } as CSSProperties}
        >
          {testimonial.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[12.5px] font-semibold tracking-[-0.01em]">
            {testimonial.name}
          </p>
          <p className="truncate text-[11px] text-faint">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Kind words"
          title={
            <>
              What people say
              <br />
              <span className="text-muted">when we work together.</span>
            </>
          }
          description="A few kind words from people I've built with — products, systems, and everything in between."
          action={
            <span className="chip">
              <span className="status-dot" />
              {testimonials.length} recommendations
            </span>
          }
        />

        <Reveal>
          <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:hidden">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                className="w-[84vw] max-w-[22rem] flex-none snap-start"
              />
            ))}
          </div>

          <div className="mt-10 hidden columns-2 gap-3 md:block xl:columns-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                className="mb-3"
              />
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2 text-[11px] text-faint md:hidden">
            <span>Swipe for more</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
