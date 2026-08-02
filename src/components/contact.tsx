"use client";

import { DiscordIcon } from "@/lib/icons";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const EMAIL = "hello@breaddevv.cc";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="relative overflow-hidden rounded-3xl bg-[#f7f6f3] px-8 py-16 text-center shadow-[0_1px_2px_rgba(0,0,0,0.03)] ring-1 ring-black/5 sm:px-12 sm:py-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(29, 29, 31, 0.055) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(29, 29, 31, 0.055) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(247,246,243,0.55)_0%,transparent_70%)]"
          />

          <div className="relative mx-auto max-w-lg">
            <p className="font-mono text-sm tracking-[0.18em] uppercase text-foreground/40">
              Contact
            </p>
            <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Got a project in mind?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/55 sm:text-[17px]">
              I&apos;m currently working full-time, but I&apos;m always happy to
              chat about interesting ideas, collaborations, or side projects.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                <Mail size={16} strokeWidth={1.75} />
                Say hello
              </a>
              <a
                href="https://github.com/breadddevv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-white/50 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-foreground/25 hover:bg-white/80"
              >
                GitHub
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </a>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://discord.com/users/901562525294927932"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-transparent px-15 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80 [background:linear-gradient(to_bottom,#5865F2,#8a94fd)_padding-box,linear-gradient(to_bottom,#97a0fc,#8a94fd)_border-box]"
              >
                <DiscordIcon size={20} />
                Shoot me a DM!
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
