"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, X, FileDown, Mail, Check } from "lucide-react";

const sections = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#workplaces" },
  { label: "Contact", href: "#contact" },
];

type HelpLauncherProps = {
  email?: string;
  resumeUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export default function HelpLauncher({
  email = "hello@example.com",
  resumeUrl = "/resume.pdf",
  githubUrl = "https://github.com/breadddevv",
  linkedinUrl = "https://www.linkedin.com/in/tiago-santos-b72b463ba/",
}: HelpLauncherProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const goTo = useCallback((href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — fail silently
    }
  }, [email]);

  return (
    <div ref={rootRef} className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="absolute bottom-16 right-0 w-[320px] rounded-2xl border border-border bg-background/95 p-3 shadow-xl backdrop-blur-xl"
          >
            {/* quick nav strip */}
            <div className="mb-3 flex gap-1.5 overflow-x-auto pb-1">
              {sections.map((s) => (
                <button
                  key={s.href}
                  type="button"
                  onClick={() => goTo(s.href)}
                  className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:bg-card-hover hover:text-foreground"
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* bento grid */}
            <div className="grid grid-cols-4 grid-rows-2 gap-2">
              <a
                href={resumeUrl}
                download
                className="col-span-2 row-span-2 flex flex-col justify-between rounded-xl border border-border bg-card p-3 transition-colors hover:bg-card-hover"
              >
                <FileDown size={18} className="text-accent" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Resume</p>
                  <p className="text-xs text-muted">Download PDF</p>
                </div>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="col-span-2 flex items-center justify-between rounded-xl border border-border bg-card p-3 text-left transition-colors hover:bg-card-hover"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-xs text-muted">{copied ? "Copied!" : "Tap to copy"}</p>
                </div>
                {copied ? (
                  <Check size={16} className="text-accent" />
                ) : (
                  <Mail size={16} className="text-muted" />
                )}
              </button>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="col-span-1 flex flex-col items-start justify-between rounded-xl border border-border bg-card p-3 transition-colors hover:bg-card-hover"
              >
                <span className="text-xs font-medium text-foreground/80">GitHub</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="col-span-1 flex flex-col items-start justify-between rounded-xl border border-border bg-card p-3 transition-colors hover:bg-card-hover"
              >
                <span className="text-xs font-medium text-foreground/80">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.94 }}
        className="flex size-12 items-center justify-center rounded-full border border-border bg-background text-foreground/90 shadow-lg"
        aria-label={open ? "Close quick actions" : "Open quick actions"}
      >
        {open ? <X size={18} /> : <Command size={18} />}
      </motion.button>
    </div>
  );
}