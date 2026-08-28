import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Stack from "@/components/stack";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Workplaces from "@/components/workplaces";
import HelpLauncher from "@/components/helpbutton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HelpLauncher />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <About />
          <Stack />
          <Projects />
          <Testimonials />
          <Workplaces />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}