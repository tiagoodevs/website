import type { CSSProperties } from "react";
import { stackGroups } from "@/data/portfolio";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

const layout = [
  "lg:col-span-2",
  "lg:col-span-4",
  "sm:col-span-2 lg:col-span-6",
];

const tileColumns = [
  "grid-cols-2 sm:grid-cols-3 lg:grid-cols-2",
  "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
];

export function Stack() {
  const totalTools = stackGroups.reduce(
    (total, group) => total + group.items.length,
    0,
  );

  return (
    <section id="stack" className="scroll-mt-28 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Stack"
          title={
            <>
              The tools I reach for.
              <br />
              <span className="text-muted">From screen to server.</span>
            </>
          }
          description="From interfaces to APIs and deployments — these are the things I use to design, build, and ship."
          action={
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              <span className="status-dot" />
              {totalTools} tools, one workflow
            </div>
          }
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {stackGroups.map((group, groupIndex) => (
            <Reveal
              key={group.title}
              className={layout[groupIndex]}
              delay={groupIndex * 80}
            >
              <div className="card h-full p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-[-0.035em]">
                      {group.title}
                    </h3>
                    <p className="mt-1 max-w-xs text-[12px] leading-relaxed text-muted">
                      {group.caption}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-faint">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>

                <div className={`mt-5 grid gap-1.5 ${tileColumns[groupIndex]}`}>
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2.5 rounded-xl border border-line bg-surface-2/70 p-1.5 pr-2.5 transition-colors hover:border-line-strong hover:bg-surface"
                    >
                      <span
                        className="tech-tile flex h-8 w-8 flex-none items-center justify-center rounded-lg font-mono text-[10px] font-medium"
                        style={{ "--brand": item.color } as CSSProperties}
                      >
                        {item.short}
                      </span>
                      <span className="truncate text-[11.5px] font-medium tracking-[-0.01em]">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-5 max-w-xl text-[12px] leading-relaxed text-faint">
            A working toolkit, not a checklist. The right tool depends on the
            job — and I&apos;m always happy to learn the next one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
