/** Anchors for the single-page sections, in nav order. */
export const sections = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "workplaces", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export type Section = (typeof sections)[number];
