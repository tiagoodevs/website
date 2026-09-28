"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { siDiscord, siGithub, siRoblox } from "simple-icons";
import IconResolve from "@/lib/icons";
import {
  currentWorkplaces,
  pastWorkplaces,
  type Workplace,
  type WorkplaceDate,
} from "@/content/workplaces";

const easeOut = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
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

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

function formatDate({ year, month }: WorkplaceDate): string {
  return `${MONTHS[month - 1] ?? ""} ${year}`.trim();
}

function dateRange(item: Workplace): string {
  if (!item.leave) return `Since ${formatDate(item.join)}`;
  return `${formatDate(item.join)} – ${formatDate(item.leave)}`;
}

function WorkplaceLinkIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={(e) => e.stopPropagation()}
      className="flex size-8 items-center justify-center rounded-lg text-foreground/40 transition-all duration-300 hover:scale-110 hover:bg-foreground/5 group-hover:text-white group-hover:hover:bg-white/15"
    >
      {children}
    </a>
  );
}

function WorkplaceCard({ item }: { item: Workplace }) {
  const links = item.links ?? {};
  const hasLinks = Boolean(
    links.discord || links.roblox || links.github || links.website,
  );

  return (
    <motion.li
      variants={cardVariants}
      style={{ "--brand": item.brandColor } as React.CSSProperties}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card/80 p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] ring-1 ring-foreground/5 transition-colors duration-300 hover:bg-(--brand) sm:p-6"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src={`/companies/${item.image}.png`}
            alt={item.company}
            width={36}
            height={36}
            className="shrink-0 opacity-30 invert transition-all duration-300 group-hover:opacity-100 group-hover:invert-0 dark:opacity-70 dark:invert-0"
          />
          <p className="text-xl text-foreground transition-colors duration-300 group-hover:text-white">
            {item.role}{" "}
            <span className="text-foreground/50 transition-colors duration-300 group-hover:text-white/50">
              @
            </span>{" "}
            {item.company}
          </p>
        </div>

        <p className="shrink-0 pt-0 font-mono text-xs tracking-wide whitespace-nowrap text-foreground/35 transition-colors duration-300 sm:pl-4 group-hover:text-white/55">
          {dateRange(item)}
        </p>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-foreground/55 transition-colors duration-300 group-hover:text-white/75">
        {item.description}
      </p>

      {hasLinks ? (
        <div className="-ml-2 mt-4 flex items-center gap-1 border-t border-foreground/10 pt-3 transition-colors duration-300 group-hover:border-white/15">
          {links.website ? (
            <WorkplaceLinkIcon href={links.website} label={`${item.company} website`}>
              <Globe size={16} strokeWidth={1.75} />
            </WorkplaceLinkIcon>
          ) : null}
          {links.discord ? (
            <WorkplaceLinkIcon href={links.discord} label={`${item.company} Discord`}>
              <IconResolve size={16} icon={siDiscord} />
            </WorkplaceLinkIcon>
          ) : null}
          {links.roblox ? (
            <WorkplaceLinkIcon href={links.roblox} label={`${item.company} on Roblox`}>
              <IconResolve size={16} icon={siRoblox} />
            </WorkplaceLinkIcon>
          ) : null}
          {links.github ? (
            <WorkplaceLinkIcon href={links.github} label={`${item.company} GitHub`}>
              <IconResolve size={16} icon={siGithub} />
            </WorkplaceLinkIcon>
          ) : null}
        </div>
      ) : null}
    </motion.li>
  );
}

export default function Workplaces() {
  return (
    <section
      id="workplaces"
      className="relative scroll-mt-20 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="max-w-xl text-left"
        >
          <p className="font-mono text-sm tracking-[0.18em] text-foreground/40 uppercase">
            Experience
          </p>
          <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Where I&apos;ve worked and where I still show up.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/55 sm:text-[17px]">
            Current roles first, past stops below.
          </p>
        </motion.div>

        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-4 sm:gap-5"
        >
          {currentWorkplaces.map((item) => (
            <WorkplaceCard key={`${item.company}-${item.role}`} item={item} />
          ))}
        </motion.ul>

        {pastWorkplaces.length > 0 ? (
          <>
            <p className="mt-14 font-mono text-xs tracking-[0.18em] text-foreground/30 uppercase">
              Past
            </p>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-5 grid gap-4 sm:gap-5"
            >
              {pastWorkplaces.map((item) => (
                <WorkplaceCard key={`${item.company}-${item.role}`} item={item} />
              ))}
            </motion.ul>
          </>
        ) : null}
      </div>
    </section>
  );
}
