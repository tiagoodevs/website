import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { aboutNotes, aboutParagraphs, roles } from "@/content/about";
import {
  getProject,
  getProjectSlugs,
  projects,
  type ProjectLinkKey,
} from "@/content/projects";
import { sections } from "@/content/sections";
import { site } from "@/content/site";
import { stack } from "@/content/stack";
import { testimonials } from "@/content/testimonials";
import {
  currentWorkplaces,
  pastWorkplaces,
  type Workplace,
} from "@/content/workplaces";

const publicPath = (...segments: string[]) =>
  path.join(process.cwd(), "public", ...segments);

const kebab = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

describe("site config", () => {
  it("uses a single, absolute canonical url", () => {
    expect(() => new URL(site.url)).not.toThrow();
    expect(site.url).toMatch(/^https:\/\//);
  });

  it("has a valid email", () => {
    expect(site.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  });

  it("exposes the resume and avatar as real files", () => {
    expect(existsSync(publicPath(site.resume.replace(/^\//, "")))).toBe(true);
    expect(existsSync(publicPath(site.avatar.replace(/^\//, "")))).toBe(true);
  });

  it("uses https for every social link", () => {
    for (const [key, href] of Object.entries(site.socials)) {
      expect(href, key).toMatch(/^https:\/\//);
    }
  });
});

describe("projects", () => {
  it("has unique, kebab-case slugs", () => {
    const slugs = getProjectSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug, slug).toMatch(kebab);
    }
  });

  it("is non-empty and has the required fields on every entry", () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(project.title.trim(), project.slug).not.toBe("");
      expect(project.summary.trim(), project.slug).not.toBe("");
      expect(project.detail.trim(), project.slug).not.toBe("");
      expect(project.skills.length, project.slug).toBeGreaterThan(0);
    }
  });

  it("uses absolute https urls for every link", () => {
    const keys: ProjectLinkKey[] = ["github", "demo", "discord", "roblox"];
    for (const project of projects) {
      for (const key of keys) {
        const href = project.links[key];
        if (!href) continue;
        expect(href, `${project.slug}.${key}`).toMatch(/^https:\/\//);
      }
    }
  });

  it("resolves every slug to a project and returns undefined otherwise", () => {
    for (const slug of getProjectSlugs()) {
      expect(getProject(slug)?.slug, slug).toBe(slug);
    }
    expect(getProject("definitely-not-a-project")).toBeUndefined();
  });

  it("has well-formed case study sections", () => {
    for (const project of projects) {
      for (const section of project.sections ?? []) {
        expect(section.heading.trim(), project.slug).not.toBe("");
        expect(section.text.trim(), project.slug).not.toBe("");
      }
    }
  });
});

describe("referenced assets exist on disk", () => {
  it("every stack icon is present", () => {
    for (const category of stack) {
      for (const item of category.items) {
        expect(existsSync(publicPath(item.src.replace(/^\//, ""))), item.src).toBe(
          true,
        );
      }
    }
  });

  it("every testimonial avatar is present", () => {
    for (const item of testimonials) {
      const file = path.join("profiles", item.img);
      expect(existsSync(publicPath(file)), file).toBe(true);
    }
  });

  it("every company logo is present", () => {
    const all: Workplace[] = [...currentWorkplaces, ...pastWorkplaces];
    for (const item of all) {
      const file = path.join("companies", `${item.image}.png`);
      expect(existsSync(publicPath(file)), file).toBe(true);
    }
  });

  it("the 404 illustration is present", () => {
    expect(existsSync(publicPath("notfound", "ah-hi.webp"))).toBe(true);
  });
});

describe("testimonials", () => {
  it("has unique people and non-empty quotes", () => {
    const names = testimonials.map((item) => item.name);
    expect(new Set(names).size).toBe(names.length);
    for (const item of testimonials) {
      expect(item.quote.trim(), item.name).not.toBe("");
      expect(item.role.trim(), item.name).not.toBe("");
      expect(item.company.trim(), item.name).not.toBe("");
    }
  });
});

describe("workplaces", () => {
  it("has valid months and a coherent date range", () => {
    const all: Workplace[] = [...currentWorkplaces, ...pastWorkplaces];
    for (const item of all) {
      expect(item.join.month, item.company).toBeGreaterThanOrEqual(1);
      expect(item.join.month, item.company).toBeLessThanOrEqual(12);
      if (!item.leave) continue;
      expect(item.leave.month, item.company).toBeGreaterThanOrEqual(1);
      expect(item.leave.month, item.company).toBeLessThanOrEqual(12);
      const start = item.join.year * 12 + item.join.month;
      const end = item.leave.year * 12 + item.leave.month;
      expect(end, item.company).toBeGreaterThanOrEqual(start);
    }
  });

  it("keeps a current and a past section", () => {
    expect(currentWorkplaces.length).toBeGreaterThan(0);
    expect(pastWorkplaces.length).toBeGreaterThan(0);
  });

  it("uses https urls for every workplace link", () => {
    const all: Workplace[] = [...currentWorkplaces, ...pastWorkplaces];
    for (const item of all) {
      for (const href of Object.values(item.links ?? {})) {
        expect(href, item.company).toMatch(/^https:\/\//);
      }
    }
  });
});

describe("misc content", () => {
  it("has non-empty section labels with unique ids", () => {
    const ids = sections.map((section) => section.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const section of sections) {
      expect(section.label.trim(), section.id).not.toBe("");
    }
  });

  it("has non-empty hero and about copy", () => {
    expect(roles.length).toBeGreaterThan(0);
    expect(aboutNotes.length).toBeGreaterThan(0);
    expect(aboutParagraphs.length).toBeGreaterThan(0);
  });
});
