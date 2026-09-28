# breaddevv.cc

Personal portfolio and resume site for **Tiago Santos** — full-stack developer
and multimedia technician, based in Portugal.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS v4. Lives
at [breaddevv.cc](https://breaddevv.cc).

## Features

- **Single-page home** with scroll-spy sections: about, stack, projects,
  testimonials, experience, contact.
- **Per-project pages** at `/projects/[slug]`, statically generated with
  `generateStaticParams`, each with its own canonical URL, Open Graph tags and
  `SoftwareSourceCode` JSON-LD.
- **Live Discord presence** via [Lanyard](https://github.com/Phineas/lanyard) —
  shows online/idle/dnd/offline, custom status, and current activity. Polls
  every 60s and pauses while the tab is hidden.
- **Dark mode** driven by CSS custom properties, with a no-flash inline script
  and a toggle that respects the system preference by default.
- **Reduced motion support** — Framer Motion is configured with
  `reducedMotion="user"`, and the CSS animations are disabled via
  `prefers-reduced-motion`.
- **SEO** — generated `sitemap.xml` and `robots.txt`, canonical URLs, and
  `Person` / `WebSite` / `SoftwareSourceCode` structured data.
- **Accessible** — skip-to-content link, visible focus rings, labelled
  icon-only controls, escape-to-dismiss dialogs.

## Getting started

Requires [Bun](https://bun.sh).

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `bun run dev`       | Start the dev server                         |
| `bun run build`     | Production build                             |
| `bun run start`     | Serve the production build                   |
| `bun run lint`      | ESLint (`eslint-config-next`)                |
| `bun run typecheck` | `tsc --noEmit`                               |
| `bun run test`      | Vitest unit tests                            |
| `bun run check`     | Lint + typecheck + test + build (what CI runs) |

## Project layout

```
src/
├── app/
│   ├── layout.tsx          # root layout: fonts, metadata, JSON-LD, theme script
│   ├── page.tsx            # single-page home
│   ├── not-found.tsx       # 404
│   ├── sitemap.ts          # /sitemap.xml
│   ├── robots.ts           # /robots.txt
│   └── projects/[slug]/    # per-project detail pages
├── components/             # UI, all section components
├── content/                # ← all site copy lives here
│   ├── site.ts             # name, url, email, socials, Discord id
│   ├── projects.ts         # project list + helpers
│   ├── testimonials.ts
│   ├── stack.ts
│   ├── workplaces.ts
│   ├── about.ts            # roles, notes, paragraphs, hero emojis
│   └── sections.ts         # nav anchors
├── hooks/
│   └── use-discord-presence.ts
└── lib/
    ├── lanyard.ts          # presence types + parsing helpers
    ├── theme.ts            # theme storage key + no-flash script
    ├── icons.tsx           # simple-icons renderer + LinkedIn glyph
    └── utils.ts
```

### Editing content

Everything a visitor reads lives in `src/content/`. To add a project, append to
the `projects` array in `src/content/projects.ts`:

```ts
{
  slug: "my-project",              // unique, kebab-case
  title: "My Project",
  summary: "One line for the card.",
  detail: "The longer paragraph.",
  skills: ["next.js", "typescript"],
  links: { github: "https://github.com/...", demo: "https://..." },
  year: 2026,
  role: "Maintainer",
  status: "live",                  // live | ongoing | archived
  sections: [                      // optional case study body
    { heading: "Why I built this", text: "…" },
  ],
}
```

The route, the sitemap entry, and the card on the home page are all generated
from that. Tests fail if a slug is duplicated, a link is not an absolute HTTPS
URL, or a referenced image is missing from `public/`.

## Assets

Images live in `public/`. Stack icons render at 40px, avatars at 40px, and
company logos at 36px — keep source files small so `public/` stays around 1MB.
A test asserts that every referenced asset actually exists.

## Contact

The fastest way to reach me is Discord — the contact section shows live presence
and links straight to a DM. Email and GitHub are linked as well.
