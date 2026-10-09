export type ProjectLinkKey = "github" | "demo" | "discord" | "roblox";

export type Project = {
  /** URL segment and DOM id. Must be unique. */
  slug: string;
  title: string;
  /** One-liner used on the index cards. */
  summary: string;
  /** Longer paragraph shown on the project page and behind "Read more". */
  detail: string;
  skills: string[];
  links: Partial<Record<ProjectLinkKey, string>>;
  year?: number;
  role?: string;
  status?: "live" | "ongoing" | "archived";
  /**
   * Case study sections. Empty today — fill these in to give each project page
   * something worth ranking. Rendered as an ordered list of heading + prose.
   */
  sections?: { heading: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "orbit",
    title: "Orbit",
    summary: "HR SaaS with ROBLOX group sync, Discord integration, and full backend systems.",
    detail:
      "Includes ROBLOX Group synchronisation, database handling, and deep integrations between ROBLOX & Discord. Maintained the platform as a contributor and maintainer, working across development, infrastructure, community needs, and contributor coordination.",
    skills: ["react", "next.js", "tailwind", "supabase"],
    links: {
      github: "https://github.com/planetaryorbit/orbit",
      demo: "https://demo.planetaryapp.us",
      discord: "https://discord.gg/mWqdZmEkDc",
    },
    year: 2026,
    role: "Maintainer",
    status: "live",
  },
  {
    slug: "monitry",
    title: "Monitry",
    summary:
      "An alternative to uptime monitoring services such as BetterStack, providing real-time status pages and incident management.",
    detail:
      "Includes user authentication via better-auth, real-time uptime monitoring, status pages, and integrations such as Discord webhooks, Slack, and more. Contributed to the frontend design and UI implementation as Director.",
    skills: [
      "react",
      "next.js",
      "tailwind",
      "pg",
      "prisma",
      "better-auth",
      "saas",
    ],
    links: {
      demo: "https://beta.monitry.net/",
      discord: "https://discord.gg/UFPNjVPxgg",
    },
    year: 2026,
    role: "Director",
    status: "live",
  },
  {
    slug: "usercue",
    title: "Usercue",
    summary:
      "An open-source feedback management platform for product teams who want to collect and analyse user feedback in one place.",
    detail:
      "Includes user authentication, better-auth as the framework, and integrations such as Discord webhooks, Slack, and more.",
    skills: [
      "react",
      "next.js",
      "tailwind",
      "pg",
      "prisma",
      "better-auth",
      "saas",
    ],
    links: {
      github: "https://github.com/Paddlewheel-inc/usercue",
      demo: "https://usercue.app",
      discord: "https://discord.gg/aYYFyfJSJC",
    },
    status: "live",
  },
  {
    slug: "boostify",
    title: "Boostify",
    summary: "A Discord bot made to help people with server boost management.",
    detail:
      "Includes server synchronisation, database handling, automated scheduling, and more.",
    skills: ["pg", "prisma", "discord.js"],
    links: {
      github: "https://github.com/teamboostify/boostify",
      demo: "https://boostify.breaddevv.cc",
      discord: "https://discord.gg/NUtyKs7hA6",
    },
    status: "live",
  },
  {
    slug: "zentyxhc",
    title: "Zentyx Help Centre",
    summary:
      "A knowledge base for Zentyx, including data transactions between the database and the website, as well as access control.",
    detail:
      "Built the help centre from scratch, owning both the data layer and the access control that gates it.",
    skills: ["react", "next.js", "tailwind", "supabase"],
    links: { demo: "https://help.zentyx.net" },
    status: "live",
  },
  {
    slug: "almorev3",
    title: "Almore Version 3",
    summary:
      "Most of Almore's version 3, including ban synchronisation, a full restock system, and a café system.",
    detail:
      "Key features: synchronising bans, building an entire restock system, and a café system. Progressed from the development team to Development Director, then Executive Assistant, and eventually Vice Director.",
    skills: ["luau", "cross-integration"],
    links: {
      demo: "https://www.roblox.com/pt/games/11260937769/Almore-Shopping",
      discord: "https://discord.gg/almore",
    },
    status: "live",
  },
  {
    slug: "pwb",
    title: "Paddlewheel Discord Bot",
    summary:
      "A Discord bot with many functions, such as fun commands and administrative commands.",
    detail: "Fun and administrative command surface for the Paddlewheel community.",
    skills: ["typescript", "discord.js", "bun", "prisma"],
    links: { discord: "https://discord.gg/loonhost" },
    status: "live",
  },
  {
    slug: "website",
    title: "This Website",
    summary: "Minimal developer portfolio built with clean UI and smooth motion.",
    detail:
      "Personal portfolio built with modern animations, responsive layouts, and clean UI design.",
    skills: ["react", "next.js", "tailwind"],
    links: {},
    status: "live",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
