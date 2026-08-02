"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { toKebabCase } from "@/lib/utils";
import { DiscordIcon, GitHubIcon } from "@/lib/icons";

type Project = {
  name: string;
  title: string;
  discord?: string;
  description: string;
  expanded?: string;
  skills: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    name: "orbit",
    title: "Orbit",
    description:
      "HR SaaS with ROBLOX group sync, Discord integration, and full backend systems.",
    expanded:
      "Includes ROBLOX Group synchronisation, database handling, and deep integrations between ROBLOX & Discord.",
    skills: ["react", "next.js", "tailwind", "supabase"],
    github: "https://github.com/planetaryorbit/orbit",
    demo: "https://demo.planetaryapp.us",
    discord: "mWqdZmEkDc"
  },
  {
    name: "monitry",
    title: "Monitry Website",
    description:
      "Monitry is an alternative to uptime monitoring services such as BetterStack, providing real-time status pages and incident management.",
    expanded:
      "Includes user authentication via better-auth, real-time uptime monitoring, status pages, and integrations such as Discord webhooks, Slack, and more. Contributed to the frontend design and UI implementation.",
    skills: [
      "react",
      "next.js",
      "tailwind",
      "pg",
      "prisma",
      "better-auth",
      "saas",
    ],
    demo: "https://beta.monitry.net/",
    discord: "UFPNjVPxgg"
  },
  {
    name: "feedbase",
    title: "Feedbase",
    description:
      "Feedbase is a open-source feedback management platform system for product teams who want to collect, and analyze user feedback in one place.",
    expanded:
      "Includes user authentication, better-auth as the framework, and integrations such as Discord webhooks, slack, etc.",
    skills: [
      "react",
      "next.js",
      "tailwind",
      "pg",
      "prisma",
      "better-auth",
      "saas",
    ],
    github: "https://github.com/breadddevv/feedbase",
    demo: "https://feedbase.breaddevv.cc",
    discord: "aYYFyfJSJC"
  },
  {
    name: "boostify",
    title: "Boostify",
    description:
      "Boostify is a Discord bot made to help people with server boosts management",
    expanded:
      "Includes Server synchronisation, database handling, automated scheduling, etc",
    skills: ["pg", "prisma", "discord.js"],
    github: "https://github.com/teamboostify/boostify",
    demo: "https://boostify.breaddevv.cc",
    discord: "NUtyKs7hA6"
  },
  {
    name: "zentyxhc",
    title: "Help Centre",
    description:
      "I've built a knowledge base for Zentyx, this included data transactions between the database and the website, as well as access control.",
    skills: ["react", "next.js", "tailwind", "supabase"],
    demo: "https://help.zentyx.net",
  },
  {
    name: "almorev3",
    title: "Almore Version 3",
    description:
      "I've coded most of Almore's version 3, this includes synchronising bans, making an entire restock system, café system, among other things.",
    expanded:
      "Key features: synchronising bans, making an entire restock system, café system.",
    skills: ["luau", "cross-integration"],
    demo: "https://www.roblox.com/pt/games/11260937769/Almore-Shopping",
    discord: "almore"
  },
  {
    name: "website",
    title: "This Website",
    description:
      "Minimal developer portfolio built with clean UI and smooth motion.",
    expanded:
      "Personal portfolio built with modern animations, responsive layouts, and clean UI design.",
    skills: ["react", "next.js", "tailwind"],
  },
];

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

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const hasExpanded = Boolean(project.expanded);

  return (
    <motion.li
      id={toKebabCase(project.name)}
      variants={cardVariants}
      className="flex flex-col rounded-2xl bg-white/80 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] ring-1 ring-black/4 sm:p-7"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>

        <div className="flex shrink-0 items-center gap-1.5">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="rounded-lg p-2 text-foreground/40 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <GitHubIcon size={18} />
            </a>
          ) : null}
          {project.discord ? (
            <a
              href={`https://discord.gg/${project.discord}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}'s Support Server`}
              className="rounded-lg p-2 text-foreground/40 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <DiscordIcon size={18} />
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} demo`}
              className="rounded-lg p-2 text-foreground/40 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <ArrowUpRight size={18} strokeWidth={1.75} />
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-3 text-[15px] leading-relaxed text-foreground/65 sm:text-base">
        {project.description}
      </p>

      <AnimatePresence initial={false}>
        {hasExpanded && open ? (
          <motion.p
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: easeOut }}
            className="overflow-hidden text-[15px] leading-relaxed text-foreground/50 sm:text-base"
          >
            <span className="mt-3 block">{project.expanded}</span>
          </motion.p>
        ) : null}
      </AnimatePresence>

      {hasExpanded ? (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="mt-3 self-start text-sm font-medium text-foreground/45 transition-colors hover:text-foreground/70"
        >
          {open ? "Show less" : "Read more"}
        </button>
      ) : null}

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-[#f5f5f7] px-2.5 py-1 text-xs font-medium text-foreground/55"
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
          <p className="font-mono text-sm tracking-[0.18em] uppercase text-foreground/40">
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
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
