"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { toKebabCase } from "@/lib/utils";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", src: "/stack/html.png" },
      { name: "CSS", src: "/stack/css.webp" },
      { name: "JavaScript", src: "/stack/js.png" },
      { name: "TypeScript", src: "/stack/ts.svg" },
      { name: "React", src: "/stack/react.webp" },
      { name: "Next.js", src: "/stack/nextjs.png" },
      { name: "Tailwind CSS", src: "/stack/tw.jpg" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", src: "/stack/nodejs.svg" },
      { name: "Python", src: "/stack/py.jpg" },
      { name: "Docker", src: "/stack/docker.png" },
      { name: "Mongo", src: "/stack/mongo.png" },
      { name: "PHP", src: "/stack/php.svg" },
      { name: "Go", src: "/stack/golang.png" },
      { name: "Rust", src: "/stack/rust.png" },
      { name: "C", src: "/stack/c.png" },
      { name: "C++", src: "/stack/cplus.png" },
      { name: "Prisma", src: "/stack/prisma.svg" },
      { name: "better-auth", src: "/stack/betterauth.png" },
      { name: "Supabase", src: "/stack/supabase.webp" },
    ],
  },
  {
    title: "Tooling",
    items: [
      { name: "GitHub", src: "/stack/gh.png" },
      { name: "Git", src: "/stack/git.png" },
      { name: "VS Code", src: "/stack/vscode.png" },
      { name: "Obsidian", src: "/stack/obsidian.png" },
      { name: "Tailscale", src: "/stack/tailscale.png" },
      { name: "Linux", src : "/stack/archlinux.png" },
      { name: "Bash", src : "/stack/gnubash.svg" },
      { name: "pnpm", src : "/stack/pnpm.svg" },
      { name: "Windows", src: "/stack/windows.png"}
    ],
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.82 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 22,
      mass: 0.7,
    },
  },
};

export default function Stack() {
  return (
    <section id="stack" className="relative scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="max-w-xl text-left"
        >
          <p className="text-sm tracking-[0.18em] uppercase text-foreground/40 font-mono">
            Tech stack
          </p>
          <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The tools I reach for most.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/55 sm:text-[17px]">
            From interfaces to APIs and deployments — these are the things I use
            to design, build, and ship.
          </p>
        </motion.div>

        <div className="mt-9 space-y-12">
          {categories.map((category) => (
            <div key={category.title}>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, ease: easeOut }}
                className="text-sm font-medium tracking-wide text-foreground/45"
              >
                {category.title}
              </motion.h3>

              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-5 flex flex-wrap items-start gap-3 sm:gap-4"
              >
                {category.items.map((item) => (
                  <motion.li
                    key={item.name}
                    id={toKebabCase(item.name)}
                    variants={iconVariants}
                    className="group relative flex flex-col items-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 420, damping: 22 }}
                      className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl sm:h-18 sm:w-18"
                    >
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="h-9 w-9 rounded-lg object-contain grayscale transition-[filter] duration-300 group-hover:grayscale-0 sm:h-10 sm:w-10"
                      />
                    </motion.div>
                    <span className="pointer-events-none text-xs font-medium text-foreground/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      {item.name}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
