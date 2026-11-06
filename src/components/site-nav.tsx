"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Close, Menu } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell">
        <nav
          aria-label="Main navigation"
          className={`glass mt-3 flex h-[3.75rem] items-center gap-2 rounded-full border pl-2 pr-2 transition-[box-shadow,border-color,background-color] duration-500 ${
            scrolled
              ? "border-line-strong shadow-[0_18px_40px_-26px_rgba(0,0,0,0.35)]"
              : "border-line"
          }`}
        >
          {/* biome-ignore lint/a11y/useValidAnchor: in-page navigation that also closes the menu */}
          <a
            href="#top"
            className="flex min-w-0 items-center gap-2.5 rounded-full py-1 pl-1 pr-2"
            aria-label="Tiago Santos — back to top"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ink font-display text-[13px] font-bold tracking-[-0.04em] text-bg">
              TS
            </span>
            <span className="hidden truncate text-[13px] font-semibold tracking-[-0.02em] text-ink sm:block">
              Tiago Santos
            </span>
          </a>

          <div className="mx-auto hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-[13px] font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-1.5 md:ml-0">
            <ThemeToggle />
            <a
              href="#contact"
              className="btn btn-primary hidden h-9 px-4 text-[12.5px] sm:inline-flex"
            >
              Say hello
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              className="icon-btn md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <Close className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`glass mt-2 overflow-hidden rounded-[1.6rem] border border-line shadow-[0_24px_60px_-32px_rgba(0,0,0,0.45)] transition-[max-height,opacity] duration-500 md:hidden ${
            open
              ? "max-h-96 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col p-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-surface-2"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 text-faint" />
              </a>
            ))}
            {/* biome-ignore lint/a11y/useValidAnchor: in-page navigation that also closes the menu */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 w-full"
            >
              Say hello
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
