import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { siDiscord, siGithub, siRoblox } from "simple-icons";
import IconResolve from "@/lib/icons";
import { getProject, getProjectSlugs, projects } from "@/content/projects";
import { site } from "@/content/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const url = `/projects/${project.slug}`;
  const description = project.detail || project.summary;

  return {
    title: project.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${project.title} · ${site.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} · ${site.name}`,
      description,
    },
  };
}

const linkMeta = {
  github: { label: "Source code", icon: siGithub, prefix: "" },
  discord: { label: "Discord server", icon: siDiscord, prefix: "" },
  roblox: { label: "Play on Roblox", icon: siRoblox, prefix: "" },
  demo: { label: "Live demo", icon: null, prefix: "" },
} as const;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const links = Object.entries(project.links).filter(
    (entry): entry is [keyof typeof linkMeta, string] => Boolean(entry[1]),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    url: `${site.url}/projects/${project.slug}`,
    description: project.detail || project.summary,
    author: { "@type": "Person", name: site.name, url: site.url },
    programmingLanguage: project.skills,
    ...(project.links.github ? { codeRepository: project.links.github } : {}),
  };

  const otherProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/50 transition-colors hover:text-foreground"
        >
          <ArrowLeft size={15} strokeWidth={1.75} />
          All projects
        </Link>

        <article className="mt-10">
          <header>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-sans text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {project.title}
              </h1>
            </div>

            <p className="mt-2 font-mono text-xs tracking-wide text-foreground/40">
              {[project.role, project.year].filter(Boolean).join(" · ")}
            </p>

            <p className="mt-6 text-lg leading-relaxed text-foreground/70 sm:text-xl">
              {project.summary}
            </p>

            {links.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {links.map(([key, href]) => {
                  const meta = linkMeta[key];
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
                    >
                      {meta.icon ? (
                        <IconResolve size={16} icon={meta.icon} />
                      ) : (
                        <ArrowUpRight size={16} strokeWidth={1.75} />
                      )}
                      {meta.label}
                    </a>
                  );
                })}
              </div>
            ) : null}
          </header>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-foreground/65 sm:text-[17px]">
            <p>{project.detail}</p>

            {project.sections?.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  {section.heading}
                </h2>
                <p className="mt-2">{section.text}</p>
              </section>
            ))}
          </div>

          {project.skills.length > 0 ? (
            <div className="mt-12">
              <h2 className="font-mono text-sm tracking-[0.18em] text-foreground/40 uppercase">
                Built with
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-chip px-3 py-1.5 text-xs font-medium text-foreground/60"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </article>

        {otherProjects.length > 0 ? (
          <aside className="mt-20 border-t border-border pt-10">
            <h2 className="font-mono text-sm tracking-[0.18em] text-foreground/40 uppercase">
              More work
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {otherProjects.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/projects/${item.slug}`}
                    className="block rounded-xl border border-border bg-card p-4 transition-colors hover:bg-card-hover"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm text-foreground/50">
                      {item.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
