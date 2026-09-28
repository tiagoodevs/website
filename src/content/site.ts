export const site = {
  name: "Tiago Santos",
  shortName: "Tiago",
  title: "Tiago Santos — Full-Stack Developer",
  description:
    "Portfolio of Tiago Santos, a full-stack developer and multimedia technician from Portugal. Explore projects, experience, open-source work, and UI/UX design.",
  url: "https://breaddevv.cc",
  locale: "en_US",
  email: "hello@breaddevv.cc",
  resume: "/resume.pdf",
  location: "Portugal",
  avatar: "/photo.jpg",
  socials: {
    github: "https://github.com/breadddevv",
    linkedin: "https://www.linkedin.com/in/tiago-santos-b72b463ba/",
    discord: "https://discord.com/users/901562525294927932",
  },
} as const;

/**
 * Discord user ID used for the live presence widget (via Lanyard).
 * https://api.lanyard.rest/v1/users/:id
 */
export const discord = {
  id: "901562525294927932",
  username: "tiagodevs",
  guildTag: "Dlvr",
  lanyardUrl: "https://api.lanyard.rest/v1/users/901562525294927932",
  /** Presence is polled on this cadence, in milliseconds. */
  pollInterval: 60_000,
} as const;

export type Site = typeof site;
