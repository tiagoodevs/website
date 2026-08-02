import Hero from "@/components/hero";
import About from "@/components/about";
import Stack from "@/components/stack";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Workplaces from "@/components/workplaces";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Testimonials />
      <Workplaces />
      <Contact />
      <Footer />
    </main>
  );
}
