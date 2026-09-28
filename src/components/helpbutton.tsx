"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Command, FileDown, Mail, X } from "lucide-react";
import { DiscordPresenceCompact } from "@/components/discord-presence";
import { sections } from "@/content/sections";
import { site } from "@/content/site";

export default function HelpLauncher() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const onClick = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
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

  const goTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — fail silently
    }
  }, []);

  return (
    <div ref={rootRef} className="fixed right-6 bottom-6 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-label="Quick actions"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="absolute right-0 bottom-16 w-[320px] rounded-2xl border border-border bg-background/95 p-3 shadow-xl backdrop-blur-xl"
          >
            <div className="scrollbar-hide mb-3 flex gap-1.5 overflow-x-auto pb-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goTo(section.id)}
                  className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:bg-card-hover hover:text-foreground"
                >
                  {section.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-2">
              <a
                href={site.resume}
                download
                className="col-span-2 flex flex-col justify-between rounded-xl border border-border bg-card p-3 transition-colors hover:bg-card-hover"
              >
                <FileDown size={18} className="text-foreground/70" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Résumé</p>
                  <p className="text-xs text-muted">Download PDF</p>
                </div>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="col-span-2 flex items-center justify-between rounded-xl border border-border bg-card p-3 text-left transition-colors hover:bg-card-hover"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="truncate text-xs text-muted">
                    {copied ? "Copied!" : "Tap to copy"}
                  </p>
                </div>
                {copied ? (
                  <Check size={16} className="shrink-0 text-foreground/70" />
                ) : (
                  <Mail size={16} className="shrink-0 text-muted" />
                )}
              </button>

              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 flex items-center rounded-xl border border-border bg-card p-3 text-xs font-medium text-foreground/80 transition-colors hover:bg-card-hover"
              >
                GitHub
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 flex items-center rounded-xl border border-border bg-card p-3 text-xs font-medium text-foreground/80 transition-colors hover:bg-card-hover"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-2 grid grid-cols-4 gap-2">
              <DiscordPresenceCompact />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.94 }}
        aria-expanded={open}
        className="flex size-12 items-center justify-center rounded-full border border-border bg-background text-foreground/90 shadow-lg"
        aria-label={open ? "Close quick actions" : "Open quick actions"}
      >
        {open ? <X size={18} /> : <Command size={18} />}
      </motion.button>
    </div>
  );
}
