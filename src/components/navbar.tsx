"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#workplaces" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("#about");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  const updateIndicator = useCallback(() => {
    const el = linkRefs.current.get(active);
    const nav = navRef.current;
    if (!el || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setIndicator({
      left: elRect.left - navRect.left,
      width: elRect.width,
    });
  }, [active]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.intersectionRatio > b.intersectionRatio ? -1 : 1));
        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: "-80px 0px -40% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled
          ? "border-border bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
          Tiago<span className="text-accent">.</span>
        </Link>

        <nav className="hidden sm:block">
          <div
            ref={navRef}
            className="relative flex items-center rounded-full p-1"
            style={{
              background: "rgba(0,0,0,0.04)",
              border: "1px solid var(--border)",
            }}
          >
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-card shadow-sm ring-1 ring-border/50"
              animate={{ left: `${indicator.left}px`, width: `${indicator.width}px` }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                ref={(el) => {
                  if (el) linkRefs.current.set(link.href, el);
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(link.href);
                  document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative z-10 px-4 py-1.5 text-sm font-medium transition-colors ${active === link.href ? "text-foreground" : "text-muted hover:text-foreground/70"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card-hover sm:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex size-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-card-hover sm:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl sm:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setMobileOpen(false);
                    setActive(link.href);
                    document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${active === link.href
                      ? "bg-accent/8 text-accent"
                      : "text-foreground/70 hover:bg-card-hover hover:text-foreground"
                    }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-foreground px-4 py-2.5 text-center text-sm font-semibold text-background"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
