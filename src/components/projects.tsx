"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { ArrowUpRight } from "lucide-react";
import { siDiscord, siGithub, siRoblox } from "simple-icons";
import IconResolve from "@/lib/icons";
import { projects, type Project, type ProjectLinkKey } from "@/content/projects";

const linkMeta: Record<
  ProjectLinkKey,
  { label: (title: string) => string; icon: React.ReactNode }
> = {
  github: {
    label: (title) => `${title} on GitHub`,
    icon: <IconResolve size={18} icon={siGithub} />,
  },
  discord: {
    label: (title) => `${title}&apos;s Discord server`,
    icon: <IconResolve size={18} icon={siDiscord} />,
  },
  roblox: {
    label: (title) => `${title} on Roblox`,
    icon: <IconResolve size={18} icon={siRoblox} />,
  },
  demo: {
    label: (title) => `${title} live demo`,
    icon: <ArrowUpRight size={18} strokeWidth={1.75} />,
  },
};

const linkOrder: ProjectLinkKey[] = ["github", "demo", "discord", "roblox"];

export default function Projects() {
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
      id="projects"
      className="relative scroll-mt-24 px-6 py-32 sm:py-40 lg:py-48"
    >
      <div className="mx-auto max-w-6xl" ref={containerRef}>
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Things I&apos;ve built and shipped.</h2>
        <p className="section-subtitle mt-4 font-light">
          SaaS products, open-source tools, bots, and systems — from idea to
          production.
        </p>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={i < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured,
}: Readonly<{
  project: Project;
  featured: boolean;
}>) {
  const router = useRouter();
  const hasDetail = Boolean(project.detail && project.detail !== project.summary);

  function handleClick() {
    router.push(`/projects/${project.slug}`);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  }

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`Open ${project.title} project`}
      className={`group rounded-20 border border-border bg-card hover:bg-card-hover hover:border-brand transition-all duration-300 cursor-pointer ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <Link
          href={`/projects/${project.slug}`}
          onClick={(e) => e.stopPropagation()}
          className="text-foreground"
        >
          <h3 className={`font-sans font-semibold tracking-tight ${featured ? "text-xl" : "text-lg"}`}>
            {project.title}
          </h3>
        </Link>

        <div className="flex shrink-0 items-center gap-1.5">
          {linkOrder.map((key) => {
            const href = project.links[key];
            if (!href) return null;
            return (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkMeta[key].label(project.title)}
                className="rounded-lg p-2 text-foreground/40 hover:bg-foreground/5 hover:text-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {linkMeta[key].icon}
              </a>
            );
          })}
        </div>
      </div>

      <p className={`text-sm leading-relaxed text-muted mb-6 font-light line-clamp-${featured ? 4 : 3}`}>
        {project.summary}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-card px-3 py-0.5 text-xs font-medium text-muted hover:bg-card-hover transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>

      {hasDetail ? (
        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-muted group-hover:text-brand transition-colors">
          Read case study
          <ArrowUpRight size={14} strokeWidth={1.75} />
        </div>
      ) : null}
    </div>
  );
}
