"use client";

import { DiscordIcon, GitHubIcon, RobloxIcon } from "@/lib/icons";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

type WorkplaceLinks = {
    discord?: string;
    roblox?: string;
    github?: string;
    website?: string;
};

type Workplace = {
    role: string;
    company: string;
    description: string;
    joinDate: Date;
    leaveDate?: Date;
    image: string;
    brandColor: string;
    links?: WorkplaceLinks;
};

const currentWorkplaces: Workplace[] = [
    {
        role: "COO",
        company: "Paddlewheel Inc.",
        description: "Oversees the company's day-to-day operations, manages teams and projects, and works closely with leadership on company-wide decisions. Also contributes directly to development, infrastructure, and other technical work when needed.",
        joinDate: new Date(2026, 6),
        image: "paddlewheel",
        brandColor: "#139d8e",
        links: {
            website: "https://paddlewheel.org",
            discord: "https://discord.gg/loonhost",
        },
    },
    {
        role: "Director",
        company: "Monitry Ltd.",
        description:
            "Oversees day-to-day operations, manages the team, and contributes to product and organizational decisions. Works across the company to coordinate projects and ensure the platform continues to develop effectively.",
        joinDate: new Date(2026, 4),
        image: "monitry",
        brandColor: "#263d6e",
        links: {
            website: "https://monitry.net",
            discord: "https://discord.gg/UFPNjVPxgg",
            github: "https://github.com/monitry-ltd",
        },
    },
    {
        role: "Developer",
        company: "DRS",
        description:
            "Handles development and infrastructure work for the company, including server access management, permissions, and backend systems. Also contributes Roblox scripting for gameplay features and UI systems used across the platform.",
        joinDate: new Date(2026, 7),
        image: "drs",
        brandColor: "#090b2a",
        links: {
            roblox: "https://www.roblox.com/communities/12734419/Direct-Retail-Solutions",
            discord: "https://discord.gg/drs",
            website: "https://directretailsolutions.com"
        },
    },
    {
        role: "Vice President",
        company: "Five Fries",
        description:
            "Serves as the President's second-in-command, assisting with organizational operations, overseeing departments, and carrying out initiatives delegated by the President. Also contributes directly to development and can make operational decisions when necessary.",
        joinDate: new Date(2026, 6),
        image: "fivefries",
        brandColor: "#D21033",
        links: {
            website: "https://fivefries.xyz",
            discord: "https://discord.gg/UFPNjVPxgg",
            roblox: "https://www.roblox.com/communities/470420343/Banify",
        },
    },
    {
        role: "Vice Director",
        company: "Almore Shopping",
        description:
            "Works as the Executive Director's right-hand, helping oversee the organization and its staff while contributing directly to development. Handles a wide range of development tasks and supports the Executive Director with day-to-day operations.",
        joinDate: new Date(2025, 8),
        image: "almore",
        brandColor: "#590113",
        links: {
            roblox: "https://www.roblox.com/games/11260937769",
            discord: "https://discord.gg/almore",
        },
    },
    {
        role: "Operations Executive",
        company: "Glixera Innovations",
        description:
            "Oversees the company's operations across teams, projects, and internal processes. Works with staff, manages organizational tasks, and makes operational decisions to keep the company running effectively.",
        joinDate: new Date(2025, 3),
        image: "glixera",
        brandColor: "#000000",
        links: {
            roblox: "https://www.roblox.com/communities/16047689/Glixera-Innovations",
            discord: "https://discord.gg/UYusDna986",
        },
    },
];

const pastWorkplaces: Workplace[] = [
    {
        role: "Maintainer",
        company: "Orbit",
        description: "Maintained and improved the Orbit HRM platform, keeping the platform up to date, accessible, and easy to use. Worked across the project on development, infrastructure, community needs, and contributor coordination, including reviewing issues and pull requests.",
        joinDate: new Date(2026, 0),
        leaveDate: new Date(2026, 6),
        image: "orbit",
        brandColor: "#ff0099",
        links: {
            website: "https://planetaryapp.us/",
            discord: "https://discord.gg/mWqdZmEkDc",
            github: "https://github.com/PlanetaryOrbit/orbit",
            roblox: "https://www.roblox.com/communities/35724790/Planetary-Orbit"
        },
    },
    {
        role: "Developer",
        company: "Freshly Shopping UK",
        description:
            "Worked alongside the leadership team to develop and improve systems for the community. Contributed features including an appeals center rework, ban integration, car wash system, and other gameplay and administrative systems, while also contributing suggestions for new features and improvements.",
        joinDate: new Date(2025, 10),
        leaveDate: new Date(2026, 0),
        image: "freshly",
        brandColor: "#123826",
        links: {
            roblox: "https://www.roblox.com/games/8876147780",
            discord: "https://discord.gg/freshly",
        },
    },
];

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

const monthFmt = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
});

function dateRange(item: Workplace) {
    if (!item.leaveDate) return `Since ${monthFmt.format(item.joinDate)}`;
    return `${monthFmt.format(item.joinDate)} – ${monthFmt.format(item.leaveDate)}`;
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
            className="flex size-8 items-center justify-center rounded-lg text-foreground/40 transition-all duration-300 hover:scale-110 hover:bg-black/6 group-hover:text-white group-hover:hover:bg-white/15"
        >
            {children}
        </a>
    );
}

function WorkplaceCard({ item }: { item: Workplace }) {
    const links = item.links ?? {};
    const hasLinks = links.discord || links.roblox || links.github || links.website;

    return (
        <motion.li
            variants={cardVariants}
            style={{ "--brand": item.brandColor } as React.CSSProperties}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/80 p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] ring-1 ring-black/4 transition-colors duration-300 hover:bg-(--brand) sm:p-6"
        >
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                    <img
                        src={`/companies/${item.image}.png`}
                        alt={item.company}
                        className="shrink-0 opacity-30 invert transition-all duration-300 group-hover:opacity-100 group-hover:invert-0"
                        width="36"
                    />
                    <p className="text-xl text-foreground transition-colors duration-300 group-hover:text-white">
                        {item.role}{" "}
                        <span className="text-foreground/50 transition-colors duration-300 group-hover:text-white/50">
                            @
                        </span>{" "}
                        {item.company}
                    </p>
                </div>

                <p className="shrink-0 whitespace-nowrap sm:pl-4 pt-0 sm:pt-0 font-mono text-xs tracking-wide text-foreground/35 transition-colors duration-300 group-hover:text-white/55">
                    {dateRange(item)}
                </p>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-foreground/55 transition-colors duration-300 group-hover:text-white/75">
                {item.description}
            </p>

            {hasLinks && (
                <div className="mt-4 -ml-2 flex items-center gap-1 border-t border-black/6 pt-3 transition-colors duration-300 group-hover:border-white/15">
                    {links.website && (
                        <WorkplaceLinkIcon href={links.website} label={`${item.company} website`}>
                            <Globe size={16} strokeWidth={1.75} />
                        </WorkplaceLinkIcon>
                    )}
                    {links.discord && (
                        <WorkplaceLinkIcon href={links.discord} label={`${item.company} Discord`}>
                            <DiscordIcon size={16} />
                        </WorkplaceLinkIcon>
                    )}
                    {links.roblox && (
                        <WorkplaceLinkIcon href={links.roblox} label={`${item.company} on Roblox`}>
                            <RobloxIcon size={16} />
                        </WorkplaceLinkIcon>
                    )}
                    {links.github && (
                        <WorkplaceLinkIcon href={links.github} label={`${item.company} GitHub`}>
                            <GitHubIcon size={16} />
                        </WorkplaceLinkIcon>
                    )}
                </div>
            )}
        </motion.li>
    );
}

export default function Workplaces() {
    return (
        <section id="workplaces" className="relative scroll-mt-20 px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, ease: easeOut }}
                    className="max-w-xl text-left"
                >
                    <p className="font-mono text-sm tracking-[0.18em] uppercase text-foreground/40">
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

                {pastWorkplaces.length > 0 && (
                    <>
                        <p className="mt-14 font-mono text-xs tracking-[0.18em] uppercase text-foreground/30">
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
                )}
            </div>
        </section>
    );
}