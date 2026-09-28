"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { toKebabCase } from "@/lib/utils";
import { aboutNotes, aboutParagraphs } from "@/content/about";
import { site } from "@/content/site";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.1,
      duration: 0.55,
      ease: easeOut,
    },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="relative mx-auto w-full max-w-sm md:mx-0"
        >
          <div className="rounded-full p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] ring-3 ring-brand">
            <div className="overflow-hidden rounded-full bg-foreground">
              <Image
                src={site.avatar}
                alt={`Portrait of ${site.name}`}
                width={800}
                height={800}
                sizes="(max-width: 768px) 384px, 340px"
                className="aspect-square h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-start text-left">
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-sm font-mono tracking-[0.18em] text-foreground/40 uppercase"
          >
            About me
          </motion.p>

          <motion.h2
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Building products that feel clear and considered.
          </motion.h2>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-5 space-y-4 text-base leading-relaxed text-foreground/60 sm:text-[17px]"
          >
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.ul
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {aboutNotes.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-xl bg-card/80 px-3 py-1 font-mono text-sm text-foreground/70 shadow-[0_1px_2px_rgba(0,0,0,0.03)] ring-1 ring-foreground/5"
              >
                <span aria-hidden className="text-lg font-bold">
                  #
                </span>
                {toKebabCase(item)}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
