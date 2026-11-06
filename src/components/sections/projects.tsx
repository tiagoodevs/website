import type { CSSProperties } from "react";
import { type Project, profile, projects } from "@/data/portfolio";
import { ArrowUpRight, GitHub } from "../icons";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SocialIcon } from "../social-icon";

const spans = {
  wide: "md:col-span-4",
  half: "md:col-span-3",
  third: "md:col-span-2",
  full: "md:col-span-6",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const full = project.size === "full";
  const primary = project.links[0];
  const visibleTags = project.tags.slice(0, full ? 5 : 4);
  const extraTags = project.tags.length - visibleTags.length;

  return (
    <Reveal className={spans[project.size]} delay={Math.min(index * 45, 220)}>
      <article
        className={`card card-lift group flex h-full overflow-hidden ${
          full ? "flex-col md:flex-row" : "flex-col"
        }`}
      >
        <div
          className={`project-art flex-none border-line ${
            full
              ? "h-40 border-b md:h-auto md:w-[36%] md:border-b-0 md:border-r"
              : "h-36 border-b sm:h-40"
          }`}
          style={
            {
              "--a": project.accent,
              "--b": project.accentAlt,
            } as CSSProperties
          }
        >
          <span className="project-glyph">{project.glyph}</span>
          <div className="relative flex items-start justify-between gap-3 p-4">
            <span className="chip border-line-strong bg-surface/70 backdrop-blur-sm">
              {project.category}
            </span>
            <span className="font-mono text-[10px] text-ink/35">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-[1.45rem] font-semibold leading-none tracking-[-0.045em]">
                <a
                  href={primary.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  {project.name}
                </a>
              </h3>
              <p className="mt-2 text-[12.5px] font-medium text-muted">
                {project.tagline}
              </p>
            </div>
            <ArrowUpRight className="mt-0.5 h-4 w-4 flex-none text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
          </div>

          <p className="mt-3 text-[12.5px] leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-5">
            <div className="flex flex-wrap gap-1.5">
              {visibleTags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
              {extraTags > 0 ? (
                <span className="chip text-faint">+{extraTags}</span>
              ) : null}
            </div>

            <div className="flex items-center gap-1">
              {project.links.map((link) => (
                <a
                  key={`${project.slug}-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} — ${link.label}`}
                  title={link.label}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-faint transition-colors hover:border-line-strong hover:bg-surface-2 hover:text-ink"
                >
                  <SocialIcon kind={link.kind} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" className="scroll-mt-28 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title={
            <>
              Things I&apos;ve built
              <br />
              <span className="text-muted">and shipped.</span>
            </>
          }
          description="SaaS products, open-source tools, bots, and systems — from the first sketch to something people can actually use."
          action={
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost h-10 px-4 text-[12px]"
            >
              <GitHub className="h-3.5 w-3.5" />
              More on GitHub
            </a>
          }
        />

        <div className="mt-10 grid gap-3 md:grid-cols-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
