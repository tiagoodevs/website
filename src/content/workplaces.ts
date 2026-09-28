export type WorkplaceLinks = {
  discord?: string;
  roblox?: string;
  github?: string;
  website?: string;
};

/**
 * Months are stored as a 1-indexed number rather than a Date so that rendering
 * never depends on the viewer's timezone or on full ICU data being available.
 */
export type WorkplaceDate = { year: number; month: number };

export type Workplace = {
  role: string;
  company: string;
  description: string;
  join: WorkplaceDate;
  leave?: WorkplaceDate;
  /** File name inside /public/companies. */
  image: string;
  brandColor: string;
  links?: WorkplaceLinks;
};

export const currentWorkplaces: Workplace[] = [
  {
    role: "Chief Operating Officer",
    company: "Paddlewheel Inc.",
    description:
      "Oversees the company's day-to-day operations, manages teams and projects, and works closely with leadership on company-wide decisions. Also contributes directly to development, infrastructure, and other technical work when needed.",
    join: { year: 2026, month: 7 },
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
    join: { year: 2026, month: 5 },
    image: "monitry",
    brandColor: "#263d6e",
    links: {
      website: "https://monitry.net",
      discord: "https://discord.gg/UFPNjVPxgg",
      github: "https://github.com/monitry-ltd",
    },
  },
];

export const pastWorkplaces: Workplace[] = [
  {
    role: "Maintainer",
    company: "Orbit",
    description:
      "Maintained and improved the Orbit HRM platform, keeping the platform up to date, accessible, and easy to use. Worked across the project on development, infrastructure, community needs, and contributor coordination, including reviewing issues and pull requests.",
    join: { year: 2026, month: 1 },
    leave: { year: 2026, month: 7 },
    image: "orbit",
    brandColor: "#ff0099",
    links: {
      website: "https://planetaryapp.us/",
      discord: "https://discord.gg/mWqdZmEkDc",
      github: "https://github.com/PlanetaryOrbit/orbit",
      roblox: "https://www.roblox.com/communities/35724790/Planetary-Orbit",
    },
  },
];
