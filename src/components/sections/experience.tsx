import type { CSSProperties } from "react";
import { experience, profile } from "@/data/portfolio";
import { ArrowUpRight, LinkedIn } from "../icons";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SocialIcon } from "../social-icon";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve worked.
              <br />
              <span className="text-muted">Where I still show up.</span>
            </>
          }
          description="Current roles first, past stops below. A mix of product, operations, and the technical work that ties it together."
          action={
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost h-10 px-4 text-[12px]"
            >
              <LinkedIn className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          }
        />

        <div className="mt-10 grid gap-3 lg:grid-cols-6">
          {experience.map((role, index) => (
            <Reveal
              key={role.company}
              className={index < 2 ? "lg:col-span-3" : "lg:col-span-6"}
              delay={index * 70}
            >
              <article className="card flex h-full flex-col p-6 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="mono-tint flex h-11 w-11 flex-none items-center justify-center rounded-2xl font-display text-[13px] font-semibold tracking-[-0.03em]"
                      style={{ "--a": role.accent } as CSSProperties}
                    >
                      {role.initials}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.1rem] font-semibold leading-tight tracking-[-0.035em]">
                        {role.role}
                      </h3>
                      <p className="mt-0.5 text-[12px] text-muted">
                        {role.company}
                      </p>
                    </div>
                  </div>
                  <span className="chip w-fit flex-none">
                    {role.current ? <span className="status-dot" /> : null}
                    {role.period}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-[13px] leading-relaxed text-muted">
                  {role.description}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-5">
                  {role.links.map((link) => (
                    <a
                      key={`${role.company}-${link.label}`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="chip transition-colors hover:border-line-strong hover:text-ink"
                    >
                      <SocialIcon kind={link.kind} className="h-3 w-3" />
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-50" />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
