export type StackItem = {
  name: string;
  /** Path inside /public/stack. */
  src: string;
};

export type StackCategory = {
  title: string;
  items: StackItem[];
};

export const stack: StackCategory[] = [
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
      { name: "Fastify", src: "/stack/fastify.png" },
      { name: "Express JS", src: "/stack/expressjs.webp" },
      { name: "Hono", src: "/stack/hono.png" },
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
      { name: "Linux", src: "/stack/fedora.webp" },
      { name: "Bash", src: "/stack/gnubash.svg" },
      { name: "pnpm", src: "/stack/pnpm.svg" },
      { name: "bun", src: "/stack/bun.png" },
      { name: "Windows", src: "/stack/windows.png" },
    ],
  },
];
