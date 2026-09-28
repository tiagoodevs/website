"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siDiscord, siGithub, siRoblox } from "simple-icons";
import IconResolve from "@/lib/icons";
import { toKebabCase } from "@/lib/utils";
import { projects, type Project, type ProjectLinkKey } from "@/content/projects";

const easeOut = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const linkMeta: Record<
  ProjectLinkKey,
  { label: (title: string) => string; icon: React.ReactNode }
> = {
  github: {
    label: (title) => `${title} on GitHub`,
    icon: <IconResolve size={18} icon={siGithub} />,
  },
  discord: {
    label: (title) => `${title}'s Discord server`,
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

const linkOrder: ProjectLinkKey[] = ["github", "discord", "roblox", "demo"];

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const hasDetail = Boolean(project.detail && project.detail !== project.summary);

  return (
    <motion.li
      id={toKebabCase(project.slug)}
      variants={cardVariants}
      className="flex flex-col rounded-2xl bg-card/80 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] ring-1 ring-foreground/5 sm:p-7"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>

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
                className="rounded-lg p-2 text-foreground/40 transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {linkMeta[key].icon}
              </a>
            );
          })}
        </div>
      </div>

      <p className="mt-3 text-[15px] leading-relaxed text-foreground/65 sm:text-base">
        {project.summary}
      </p>

      <AnimatePresence initial={false}>
        {hasDetail && open ? (
          <motion.p
            key="detail"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: easeOut }}
            className="overflow-hidden text-[15px] leading-relaxed text-foreground/50 sm:text-base"
          >
            <span className="mt-3 block">{project.detail}</span>
          </motion.p>
        ) : null}
      </AnimatePresence>

      {hasDetail ? (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="mt-3 self-start text-sm font-medium text-foreground/45 transition-colors hover:text-foreground/70"
        >
          {open ? "Show less" : "Read more"}
        </button>
      ) : null}

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-chip px-2.5 py-1 text-xs font-medium text-foreground/55"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.li>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="max-w-xl text-left"
        >
          <p className="font-mono text-sm tracking-[0.18em] text-foreground/40 uppercase">
            Projects
          </p>
          <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Things I&apos;ve built and shipped.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/55 sm:text-[17px]">
            SaaS products, open-source tools, bots, and systems — from idea to
            production.
          </p>
        </motion.div>

        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
