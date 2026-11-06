export type SocialKind =
  | "github"
  | "discord"
  | "linkedin"
  | "mail"
  | "site"
  | "roblox";

export type SocialLink = {
  label: string;
  href: string;
  kind: SocialKind;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  links: SocialLink[];
  glyph: string;
  accent: string;
  accentAlt: string;
  size: "wide" | "half" | "third" | "full";
};

export type StackItem = {
  name: string;
  short: string;
  color: string;
};

export type StackGroup = {
  title: string;
  caption: string;
  items: StackItem[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
  initials: string;
  accent: string;
  links: SocialLink[];
};

export const profile = {
  name: "Tiago Santos",
  handle: "tiagodevs",
  role: "Full-stack developer",
  location: "Portugal",
  email: "hello@breaddevv.cc",
  discord: "https://discord.com/users/901562525294927932",
  github: "https://github.com/tiagoodevs",
  linkedin: "https://www.linkedin.com/in/tiago-santos-b72b463ba/",
  tagline: "Building products that feel clear and considered.",
  intro:
    "I'm a full-stack developer and multimedia student who ships modern web products end to end — polished interfaces, solid APIs, and reliable deployments. I like working where product design and engineering meet.",
  availability: "Open to interesting side projects",
  currently: [
    {
      role: "Chief Operating Officer",
      company: "Paddlewheel Inc.",
      href: "https://paddlewheel.org",
    },
    {
      role: "Director",
      company: "Monitry Ltd.",
      href: "https://monitry.net",
    },
  ],
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: profile.github, kind: "github" },
  { label: "Discord", href: profile.discord, kind: "discord" },
  { label: "LinkedIn", href: profile.linkedin, kind: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, kind: "mail" },
];

export const principles = [
  {
    number: "01",
    title: "Clarity over cleverness",
    body: "The best interface is the one people don't have to think about. I aim for obvious, calm, and considered.",
  },
  {
    number: "02",
    title: "Ship, then refine",
    body: "Momentum matters. I like getting something real into people's hands, then tightening it with feedback.",
  },
  {
    number: "03",
    title: "Design and engineering, together",
    body: "I work across the seam between product design and implementation, so the details survive the build.",
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    caption: "Interfaces, motion, and the details people feel.",
    items: [
      { name: "HTML", short: "HT", color: "#e34f26" },
      { name: "CSS", short: "CS", color: "#1572b6" },
      { name: "JavaScript", short: "JS", color: "#e8c400" },
      { name: "TypeScript", short: "TS", color: "#3178c6" },
      { name: "React", short: "Re", color: "#149eca" },
      { name: "Next.js", short: "N", color: "#3c3c3c" },
      { name: "Tailwind CSS", short: "Tw", color: "#0ea5e9" },
    ],
  },
  {
    title: "Backend",
    caption: "APIs, data, infrastructure, and everything behind the glass.",
    items: [
      { name: "Node.js", short: "No", color: "#5fa04e" },
      { name: "Python", short: "Py", color: "#3776ab" },
      { name: "Docker", short: "Do", color: "#2496ed" },
      { name: "MongoDB", short: "Mo", color: "#47a248" },
      { name: "PHP", short: "Ph", color: "#777bb4" },
      { name: "Go", short: "Go", color: "#00add8" },
      { name: "Rust", short: "Ru", color: "#b7410e" },
      { name: "C", short: "C", color: "#5c6bc0" },
      { name: "C++", short: "C+", color: "#00599c" },
      { name: "Prisma", short: "Pr", color: "#2d3748" },
      { name: "better-auth", short: "ba", color: "#7c3aed" },
      { name: "Supabase", short: "Sb", color: "#1d9a6c" },
      { name: "Fastify", short: "Fa", color: "#3c3c3c" },
      { name: "Express", short: "Ex", color: "#3c3c3c" },
      { name: "Hono", short: "Ho", color: "#e36002" },
    ],
  },
  {
    title: "Tooling",
    caption: "The everyday setup that keeps the work moving.",
    items: [
      { name: "GitHub", short: "Gh", color: "#3c3c3c" },
      { name: "Git", short: "Gi", color: "#f05032" },
      { name: "VS Code", short: "VS", color: "#007acc" },
      { name: "Obsidian", short: "Ob", color: "#7c3aed" },
      { name: "Tailscale", short: "Ta", color: "#242424" },
      { name: "Linux", short: "Li", color: "#c9a300" },
      { name: "Bash", short: "Ba", color: "#4eaa25" },
      { name: "pnpm", short: "pn", color: "#f69220" },
      { name: "Bun", short: "Bu", color: "#c98a5e" },
      { name: "Windows", short: "Wi", color: "#0078d4" },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "orbit",
    name: "Orbit",
    category: "HR SaaS",
    tagline: "The operating system for community teams.",
    description:
      "HR SaaS with ROBLOX group sync, Discord integration, and full backend systems. Built to give growing communities real infrastructure instead of spreadsheets.",
    tags: ["React", "Next.js", "Tailwind", "Supabase"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/planetaryorbit/orbit",
        kind: "github",
      },
      {
        label: "Discord",
        href: "https://discord.gg/mWqdZmEkDc",
        kind: "discord",
      },
      { label: "Demo", href: "https://demo.planetaryapp.cloud", kind: "site" },
    ],
    glyph: "Or",
    accent: "#FF0099",
    accentAlt: "#ff5ebe",
    size: "wide",
  },
  {
    slug: "monitry",
    name: "Monitry",
    category: "Monitoring",
    tagline: "Know the moment something breaks.",
    description:
      "An alternative to uptime monitoring services such as BetterStack, providing real-time status pages and incident management.",
    tags: ["React", "Next.js", "Tailwind", "Postgres", "Prisma", "better-auth"],
    links: [
      {
        label: "Discord",
        href: "https://discord.gg/UFPNjVPxgg",
        kind: "discord",
      },
      { label: "Beta", href: "https://beta.monitry.net/", kind: "site" },
    ],
    glyph: "Mo",
    accent: "#b0450f",
    accentAlt: "#ff9f6e",
    size: "third",
  },
  {
    slug: "usercue",
    name: "Usercue",
    category: "Open source",
    tagline: "Feedback, finally in one place.",
    description:
      "An open-source feedback management platform for product teams who want to collect and analyse user feedback in one place.",
    tags: ["React", "Next.js", "Tailwind", "Postgres", "Prisma", "SaaS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Paddlewheel-inc/usercue",
        kind: "github",
      },
      {
        label: "Discord",
        href: "https://discord.gg/aYYFyfJSJC",
        kind: "discord",
      },
      { label: "Site", href: "https://usercue.app", kind: "site" },
    ],
    glyph: "Us",
    accent: "#c23a26",
    accentAlt: "#ee7d6b",
    size: "half",
  },
  {
    slug: "boostify",
    name: "Boostify",
    category: "Discord bot",
    tagline: "Server boosts without the busywork.",
    description:
      "A Discord bot made to help people with server boost management — less manual tracking, more time for the community.",
    tags: ["Postgres", "Prisma", "discord.js"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/teamboostify/boostify",
        kind: "github",
      },
      {
        label: "Discord",
        href: "https://discord.gg/NUtyKs7hA6",
        kind: "discord",
      },
      { label: "Site", href: "https://boostify.breaddevv.cc", kind: "site" },
    ],
    glyph: "Bo",
    accent: "#0f6f8f",
    accentAlt: "#7dd3fc",
    size: "half",
  },
  {
    slug: "zentyxhc",
    name: "Zentyx Help Centre",
    category: "Knowledge base",
    tagline: "Answers, access, and a clean paper trail.",
    description:
      "A knowledge base for Zentyx, including data transactions between the database and the website, as well as access control.",
    tags: ["React", "Next.js", "Tailwind", "Supabase"],
    links: [{ label: "Site", href: "https://help.zentyx.net", kind: "site" }],
    glyph: "Ze",
    accent: "#9a5b00",
    accentAlt: "#f2c14e",
    size: "third",
  },
  {
    slug: "almorev3",
    name: "Almore V3",
    category: "Game systems",
    tagline: "The quiet machinery behind a busy world.",
    description:
      "Most of Almore's version 3, including ban synchronisation, a full restock system, and a café system.",
    tags: ["Luau", "Cross-integration"],
    links: [
      { label: "Discord", href: "https://discord.gg/almore", kind: "discord" },
      {
        label: "ROBLOX",
        href: "https://www.roblox.com/pt/games/11260937769/Almore-Shopping",
        kind: "roblox",
      },
    ],
    glyph: "Al",
    accent: "#5b4b8a",
    accentAlt: "#c4b5fd",
    size: "third",
  },
  {
    slug: "pwb",
    name: "Paddlewheel Bot",
    category: "Discord bot",
    tagline: "A little utility for the whole server.",
    description:
      "A Discord bot with many functions, such as fun commands and administrative commands, built to make running a community lighter.",
    tags: ["TypeScript", "discord.js", "Bun", "Prisma"],
    links: [
      {
        label: "Discord",
        href: "https://discord.gg/loonhost",
        kind: "discord",
      },
    ],
    glyph: "Pw",
    accent: "#1e40af",
    accentAlt: "#93c5fd",
    size: "third",
  },
  {
    slug: "website",
    name: "This Website",
    category: "Portfolio",
    tagline: "Minimal, fast, and a little bit bento.",
    description:
      "A personal portfolio built with clean UI and smooth motion — designed to get out of the way and let the work speak.",
    tags: ["React", "Next.js", "Tailwind"],
    links: [{ label: "GitHub", href: profile.github, kind: "github" }],
    glyph: "TS",
    accent: "#62605c",
    accentAlt: "#c4c2bd",
    size: "full",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Tiago was an incredible experience. He consistently demonstrated an open mind and a strong willingness to learn more. Tiago approaches challenges with curiosity and professionalism, and he is always looking for ways to grow and improve. I would highly recommend him to any team looking for someone dedicated, adaptable, and eager to develop new skills.",
    name: "Brennan Peters",
    role: "Owner · Orbit",
    initials: "BP",
    accent: "#1d7a45",
  },
  {
    quote:
      "Tiago demonstrated strong development skills during his time at Almore Shopping. He built several systems for our Version 3 update and quickly proved himself as a reliable and professional developer. Due to his contributions and dedication, he progressed from the development team to Development Director, then Executive Assistant, and eventually Vice Director.",
    name: "Alex",
    role: "Executive Director · Almore Shopping",
    initials: "Al",
    accent: "#5b4b8a",
  },
  {
    quote:
      "Tiago is a proactive and reliable developer who consistently met deadlines, while always being up for a new challenge. He was always willing to step in and support the team whenever it was needed, making him a valuable asset to our projects.",
    name: "Cuba Eastern",
    role: "Executive Officer · Freshly Shopping UK",
    initials: "CE",
    accent: "#b0450f",
  },
  {
    quote:
      "Tiago is a hard-working, knowledgeable and kind developer he has proven and shown this to me by working alongside and for me, as far as I know he can do everything I have asked him to do and is always ready and up for a new challenge.",
    name: "Olliebobsg",
    role: "Founder · Neon Stores UK",
    initials: "Ob",
    accent: "#c23a26",
  },
  {
    quote:
      "Tiago has admirable skills and experience in the UI/UX field. As our Frontend Developer on Coffee Systems, he consistently impressed me with his ability to turn complex ideas into clean, user-friendly interfaces. His design intuition, attention to detail, and execution truly elevated the project.",
    name: "2MillionGunGuy",
    role: "Director · Monitry",
    initials: "2M",
    accent: "#9a5b00",
  },
  {
    quote:
      "Tiago has shown his capabilities as a developer in Lory's shopping. I am impressed that Tiago always has something new to show to the team, and it is always there to help, whether when there's a problem in the game, or a problem in the team.",
    name: "Lory342",
    role: "Founder · Lory's Shopping Center",
    initials: "L3",
    accent: "#0f6f8f",
  },
  {
    quote:
      "Tiago knows JavaScript, Lua, HTML and has great knowledge of many programming languages. I am glad that Tiago always helps me when I ask some questions and need help. Tiago is always respectful, professional and friendly.",
    name: "KokoGamerPL",
    role: "Executive Director · Koko's Store",
    initials: "KG",
    accent: "#1e40af",
  },
  {
    quote:
      "I've had the pleasure of working with Tiago on several occasions, and I can confidently say he's one of the most talented and dependable people I've worked with. His expertise in coding, design, and problem-solving is impressive, and he approaches every challenge with professionalism, creativity, and attention to detail. Beyond his technical abilities, Tiago is an excellent collaborator who genuinely cares about delivering high-quality work. If you're looking for someone who can turn ideas into exceptional results, Tiago is the person to trust.",
    name: "Vortex",
    role: "President · Five Fries",
    initials: "Vx",
    accent: "#62605c",
  },
];

export const experience: Experience[] = [
  {
    company: "Paddlewheel Inc.",
    role: "Chief Operating Officer",
    period: "Since Jul 2026",
    current: true,
    description:
      "Oversees the company's day-to-day operations, manages teams and projects, and works closely with leadership on company-wide decisions. Also contributes directly to development, infrastructure, and other technical work when needed.",
    initials: "Pw",
    accent: "#1d7a45",
    links: [
      { label: "Website", href: "https://paddlewheel.org", kind: "site" },
      {
        label: "Discord",
        href: "https://discord.gg/loonhost",
        kind: "discord",
      },
    ],
  },
  {
    company: "Monitry Ltd.",
    role: "Director",
    period: "Since May 2026",
    current: true,
    description:
      "Oversees day-to-day operations, manages the team, and contributes to product and organizational decisions. Works across the company to coordinate projects and ensure the platform continues to develop effectively.",
    initials: "Mo",
    accent: "#b0450f",
    links: [
      { label: "Website", href: "https://monitry.net", kind: "site" },
      {
        label: "Discord",
        href: "https://discord.gg/UFPNjVPxgg",
        kind: "discord",
      },
      {
        label: "GitHub",
        href: "https://github.com/monitry-ltd",
        kind: "github",
      },
    ],
  },
  {
    company: "Orbit",
    role: "Maintainer",
    period: "Jan 2026 – Jul 2026",
    current: false,
    description:
      "Maintained and improved the Orbit HRM platform, keeping the platform up to date, accessible, and easy to use. Worked across the project on development, infrastructure, community needs, and contributor coordination, including reviewing issues and pull requests.",
    initials: "Or",
    accent: "#5b4b8a",
    links: [
      { label: "Website", href: "https://planetaryapp.us/", kind: "site" },
      {
        label: "Discord",
        href: "https://discord.gg/mWqdZmEkDc",
        kind: "discord",
      },
      {
        label: "ROBLOX",
        href: "https://www.roblox.com/communities/35724790/Planetary-Orbit",
        kind: "roblox",
      },
      {
        label: "GitHub",
        href: "https://github.com/PlanetaryOrbit/orbit",
        kind: "github",
      },
    ],
  },
];

export const companies = [
  "Paddlewheel",
  "Monitry",
  "Orbit",
  "Usercue",
  "Boostify",
  "Almore",
];

export const stats = [
  { value: String.prototype.padStart(2, testimonials.length.toString()), label: "Projects shipped" },
  { value: String.prototype.padStart(2, testimonials.length.toString()), label: "Teams and counting" },
  { value: String.prototype.padStart(2, testimonials.length.toString()), label: "Kind words" },
];
