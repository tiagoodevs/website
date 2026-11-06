"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { Globe } from "lucide-react";
import { siDiscord, siGithub, siRoblox } from "simple-icons";
import IconResolve from "@/lib/icons";
import {
  currentWorkplaces,
  pastWorkplaces,
  type Workplace,
  type WorkplaceDate,
} from "@/content/workplaces";

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
      className="flex size-9 items-center justify-center rounded-xl text-muted hover:bg-brand/10 hover:text-brand transition-colors"
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
    <div className="rounded-20 border border-border bg-card p-6 hover:bg-card-hover hover:border-brand transition-all duration-300">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src={`/companies/${item.image}.png`}
            alt={item.company}
            width={36}
            height={36}
            className="shrink-0 rounded-xl opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-500 group"
          />
          <div className="min-w-0">
            <p className="text-base font-semibold text-foreground truncate">
              {item.role}
            </p>
            <p className="text-xs text-muted truncate font-light">
              @ {item.company}
            </p>
          </div>
        </div>

        <p className="shrink-0 font-mono text-xs tracking-wide whitespace-nowrap text-muted">
          {dateRange(item)}
        </p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted font-light">
        {item.description}
      </p>

      {hasLinks ? (
        <div className="mt-6 flex items-center gap-1.5 pt-4 border-t border-border/50">
          {links.website ? (
            <WorkplaceLinkIcon href={links.website} label={`${item.company} website`}>
              <Globe size={17} strokeWidth={1.75} />
            </WorkplaceLinkIcon>
          ) : null}
          {links.discord ? (
            <WorkplaceLinkIcon href={links.discord} label={`${item.company} Discord`}>
              <IconResolve size={17} icon={siDiscord} />
            </WorkplaceLinkIcon>
          ) : null}
          {links.roblox ? (
            <WorkplaceLinkIcon href={links.roblox} label={`${item.company} on Roblox`}>
              <IconResolve size={17} icon={siRoblox} />
            </WorkplaceLinkIcon>
          ) : null}
          {links.github ? (
            <WorkplaceLinkIcon href={links.github} label={`${item.company} GitHub`}>
              <IconResolve size={17} icon={siGithub} />
            </WorkplaceLinkIcon>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default function Workplaces() {
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
      id="workplaces"
      className="relative scroll-mt-24 px-6 py-32 sm:py-40 lg:py-48"
    >
      <div className="mx-auto max-w-6xl" ref={containerRef}>
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Where I&apos;ve worked and still show up.</h2>
        <p className="section-subtitle mt-4 font-light">
          Current roles first, past stops below.
        </p>

        <div className="mt-20 space-y-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {currentWorkplaces.map((item) => (
              <WorkplaceCard key={`${item.company}-${item.role}`} item={item} />
            ))}
          </div>

          {pastWorkplaces.length > 0 ? (
            <>
              <div className="mt-8 flex items-center gap-2">
                <span className="h-px w-16 bg-border" />
                <p className="section-kicker">Past</p>
              </div>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {pastWorkplaces.map((item) => (
                  <WorkplaceCard
                    key={`${item.company}-${item.role}`}
                    item={item}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
