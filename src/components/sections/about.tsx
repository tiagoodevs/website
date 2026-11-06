import { principles, profile, stats } from "@/data/portfolio";
import { ArrowUpRight, Clock, Sparkle } from "../icons";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

const offTheClock = ["music lover", "out with friends", "me + coding = <3"];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              A developer&apos;s eye.
              <br />
              <span className="text-muted">A product brain.</span>
            </>
          }
          description="I like working where product design and engineering meet — close enough to the details to care, close enough to the outcome to ship."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          <Reveal className="sm:col-span-2 lg:col-span-4">
            <div className="card h-full p-6 sm:p-8">
              <p className="max-w-xl font-display text-[clamp(1.35rem,2.4vw,1.9rem)] font-medium leading-[1.2] tracking-[-0.04em]">
                Building products that feel clear and considered — polished
                interfaces, solid APIs, and deployments that don&apos;t get in
                the way.
              </p>
              <div className="mt-6 grid gap-4 text-[14px] leading-relaxed text-muted sm:grid-cols-2">
                <p>
                  I&apos;m currently working full-time, and outside of that I
                  keep building personal projects and exploring new ideas. I
                  care about the small decisions that make a product feel
                  obvious to use.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m usually listening to music
                  or going out with friends. I&apos;m always up for a
                  conversation about an interesting idea.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-1.5">
                {offTheClock.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={80}>
            <div className="card flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Currently</span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-sage">
                  <span className="status-dot" />
                  active
                </span>
              </div>

              <div className="mt-6 flex flex-col divide-y divide-line">
                {profile.currently.map((role) => (
                  <a
                    key={role.company}
                    href={role.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-3 py-4 first:pt-0 last:pb-0"
                  >
                    <span>
                      <span className="block text-[13px] font-semibold tracking-[-0.01em]">
                        {role.role}
                      </span>
                      <span className="mt-0.5 block text-[12px] text-muted">
                        {role.company}
                      </span>
                    </span>
                    <ArrowUpRight className="mt-1 h-4 w-4 flex-none text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <div className="rounded-2xl border border-line bg-surface-2 p-4">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-sage">
                    <Sparkle className="h-3.5 w-3.5" />
                    {profile.availability}
                  </div>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-muted">
                    Full-time, with room for the right collaboration.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="sm:col-span-2 lg:col-span-3" delay={120}>
            <div className="card h-full p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="eyebrow">How I work</span>
                <span className="font-mono text-[10px] text-faint">03</span>
              </div>
              <div className="mt-5 flex flex-col divide-y divide-line">
                {principles.map((principle) => (
                  <div
                    key={principle.number}
                    className="grid grid-cols-[2rem_1fr] gap-3 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="font-mono text-[10px] text-faint">
                      {principle.number}
                    </span>
                    <div>
                      <h3 className="text-[13.5px] font-semibold tracking-[-0.01em]">
                        {principle.title}
                      </h3>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-muted">
                        {principle.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="sm:col-span-2 lg:col-span-3" delay={160}>
            <div className="card flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Snapshot</span>
                <Clock className="h-4 w-4 text-faint" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-[clamp(1.9rem,4vw,2.6rem)] font-semibold leading-none tracking-[-0.06em]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[11px] leading-snug text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <p className="border-t border-line pt-4 text-[12px] leading-relaxed text-muted">
                  A small snapshot of the work so far. The list keeps growing —
                  quietly, and usually after hours.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
