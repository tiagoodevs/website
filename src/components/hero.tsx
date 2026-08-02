"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "UI Engineer",
  "Product Builder",
  "Problem Solver",
  "Student",
];

const floatingEmojis = [
  { emoji: "🌸", top: "12%", left: "8%", size: "1.6rem", duration: 7, delay: 0, x: 14, rotate: 12 },
  { emoji: "✨", top: "18%", left: "78%", size: "1.25rem", duration: 6.5, delay: 0.4, x: -12, rotate: -10 },
  { emoji: "🍃", top: "28%", left: "88%", size: "1.5rem", duration: 8, delay: 0.8, x: -10, rotate: 16 },
  { emoji: "🌼", top: "68%", left: "10%", size: "1.35rem", duration: 7.5, delay: 0.2, x: 16, rotate: -14 },
  { emoji: "☁️", top: "14%", left: "42%", size: "1.7rem", duration: 9, delay: 1.1, x: 10, rotate: 6 },
  { emoji: "⭐", top: "72%", left: "82%", size: "1.2rem", duration: 6.8, delay: 0.6, x: -14, rotate: 18 },
  { emoji: "🪴", top: "58%", left: "4%", size: "1.55rem", duration: 8.2, delay: 1.4, x: 12, rotate: -8 },
  { emoji: "💫", top: "42%", left: "92%", size: "1.3rem", duration: 7.2, delay: 0.3, x: -16, rotate: 14 },
  { emoji: "🦋", top: "78%", left: "28%", size: "1.4rem", duration: 8.6, delay: 0.9, x: 18, rotate: -12 },
  { emoji: "🌙", top: "34%", left: "6%", size: "1.25rem", duration: 9.4, delay: 1.6, x: 10, rotate: 10 },
  { emoji: "🍀", top: "86%", left: "62%", size: "1.3rem", duration: 7.8, delay: 0.5, x: -12, rotate: -16 },
  { emoji: "🌻", top: "48%", left: "84%", size: "1.45rem", duration: 8.4, delay: 1.2, x: -10, rotate: 8 },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.1,
      duration: 0.55,
      ease: easeOut,
    },
  }),
};

function FloatingEmojis() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatingEmojis.map((item, i) => {
        const enterDelay = 0.25 + i * 0.07;

        return (
          <motion.span
            key={`${item.emoji}-${i}`}
            initial={{ opacity: 0, scale: 0, y: 36, rotate: -24 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 16,
              mass: 0.7,
              delay: enterDelay,
            }}
            className="absolute select-none"
            style={{
              top: item.top,
              left: item.left,
              fontSize: item.size,
            }}
          >
            <motion.span
              className="block"
              animate={{
                opacity: [0.35, 0.6, 0.35],
                y: [0, -18, 0],
                x: [0, item.x, 0],
                rotate: [0, item.rotate, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: enterDelay + 0.55,
              }}
            >
              {item.emoji}
            </motion.span>
          </motion.span>
        );
      })}
    </div>
  );
}

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <motion.span
      key={index}
      initial={{ scale: 0.92, y: 4 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 420, damping: 20 }}
      className="relative inline-flex align-bottom"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
        className="relative inline-flex h-[1.35em] items-center overflow-hidden rounded-md bg-foreground/6 px-2.5 py-0.5 ring-1 ring-foreground/4"
      >
        <motion.span
          key={`glow-${index}`}
          initial={{ opacity: 0.45, scale: 0.85 }}
          animate={{ opacity: 0, scale: 1.35 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="pointer-events-none absolute inset-0 rounded-md bg-foreground/8"
          aria-hidden
        />

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={roles[index]}
            initial={{ y: "110%", opacity: 0, filter: "blur(5px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-110%", opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="inline-block whitespace-nowrap text-foreground"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <FloatingEmojis />

      <div className="relative flex max-w-3xl flex-col items-center gap-7">
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-sans text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          <span className="text-foreground/35"><span className="text-white">👋</span>Hi, I&apos;m</span>
          <br />
          Tiago Santos
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-x-2 text-xl text-foreground/50 sm:text-2xl"
        >
          <span>a</span>
          <RotatingRole />
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-1 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-xl bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            View work
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-foreground/15 px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-foreground/35 transition-colors hover:text-foreground/60"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="block"
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
