"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/content/testimonials";

const easeOut = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="max-w-xl text-left"
        >
          <p className="font-mono text-sm tracking-[0.18em] text-foreground/40 uppercase">
            Testimonials
          </p>
          <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What people say when we work together.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/55 sm:text-[17px]">
            A few kind words from people I&apos;ve built with — products, systems,
            and everything in between.
          </p>
        </motion.div>

        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {testimonials.map((item) => (
            <motion.li
              key={`${item.name}-${item.company}`}
              variants={cardVariants}
              className="flex flex-col rounded-2xl bg-card/80 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] ring-1 ring-foreground/5 sm:p-7"
            >
              <p className="flex-1 text-[15px] leading-relaxed text-foreground/70 sm:text-base">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={`/profiles/${item.img}`}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  className="size-10 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0 text-left">
                  <p className="truncate text-sm font-medium text-foreground">
                    {item.name}
                  </p>
                  <p className="truncate text-sm text-foreground/45">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
