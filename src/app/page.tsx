import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Stack from "@/components/stack";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Workplaces from "@/components/workplaces";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HelpLauncher from "@/components/helpbutton";
import SmoothScroll from "@/components/smooth-scroll";
import YarndingsSymbols from "@/components/yarndings-symbols";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="leaf-blob leaf-blob-1" aria-hidden />
      <div className="leaf-blob leaf-blob-2" aria-hidden />
      <div className="leaf-blob leaf-blob-3" aria-hidden />
      <YarndingsSymbols count={10} />

      <SmoothScroll>
        <HelpLauncher />
        <main id="main" className="flex-1 relative">
          <Navbar />
          <Hero />
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 relative z-10">
            <About />
            <Stack />
            <Projects />
            <Testimonials />
            <Workplaces />
            <Contact />
          </div>
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}
