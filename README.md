# Tiago Santos — Portfolio

A personal portfolio for Tiago Santos, built with Next.js 16, React 19, and Tailwind CSS 4.

The design pulls from three references: the restrained typography and bento layouts of Apple, the editorial minimalism of julpav.com, and the warm cream / near-black palette of revyu.eu.

## What's inside

- Bento-grid sections for about, stack, selected work, testimonials, experience, and contact.
- Light and dark themes with a no-flash bootstrap and `localStorage` persistence.
- Scroll reveals that respect `prefers-reduced-motion`.
- Responsive down to 320px, with a swipeable testimonial carousel on mobile.
- Generated Open Graph image, JSON-LD Person schema, and app icon.
- Content lives in `src/data/portfolio.ts`, so copy and links are easy to update.

## Run it

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
bun run build   # production build
bun run start   # serve the production build
bun run lint    # Biome checks
bun run format  # Biome formatting
```

## Structure

```text
src/
  app/            # layout, page, global styles, icon, OG image
  components/     # navigation, footer, icons, and section components
  data/           # portfolio content and links
```
