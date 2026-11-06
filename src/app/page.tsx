import { Footer } from "@/components/footer";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Testimonials } from "@/components/sections/testimonials";
import { SiteNav } from "@/components/site-nav";
import { StructuredData } from "@/components/structured-data";
import { profile, stackGroups } from "@/data/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.handle,
  jobTitle: "Full-Stack Developer",
  url: "https://tiagodevs.net",
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "PT",
  },
  sameAs: [profile.github, profile.linkedin, profile.discord],
  knowsAbout: stackGroups.flatMap((group) =>
    group.items.map((item) => item.name),
  ),
};

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Testimonials />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <StructuredData data={jsonLd} />
    </>
  );
}
