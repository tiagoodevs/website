"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Brennan Peters",
    role: "Owner",
    company: "Orbit",
    quote:
      "Working with Tiago was an incredible experience. He consistently demonstrated an open mind and a strong willingness to learn more. Tiago approaches challenges with curiosity and professionalism, and he is always looking for ways to grow and improve. I would highly recommend him to any team looking for someone dedicated, adaptable, and eager to develop new skills.",
  },
  {
    name: "Alex",
    role: "Executive Director",
    company: "Almore Shopping",
    quote:
      "Tiago demonstrated strong development skills during his time at Almore Shopping. He built several systems for our Version 3 update and quickly proved himself as a reliable and professional developer. Due to his contributions and dedication, he progressed from the development team to Development Director, then Executive Assistant, and eventually Vice Director.",
  },
  {
    name: "Cuba Eastern",
    role: "Executive Officer",
    company: "Freshly Shopping UK",
    quote:
      "Tiago is a proactive and reliable developer who consistently met deadlines, while always being up for a new challenge. He was always willing to step in and support the team whenever it was needed, making him a valuable asset to our projects.",
  },
  {
    name: "Olliebobsg",
    role: "Founder",
    company: "Neon Stores UK",
    quote:
      "Tiago is a hard-working, knowledgeable and kind developer he has proven and shown this to me by working alongside and for me, as far as I know he can do everything I have asked him to do and is always ready and up for a new challenge.",
  },
  {
    name: "2MillionGunGuy",
    role: "Director",
    company: "Monitry",
    quote:
      "Tiago has admirable skills and experience in the UI/UX field. As our Frontend Developer on Coffee Systems, he consistently impressed me with his ability to turn complex ideas into clean, user-friendly interfaces. His design intuition, attention to detail, and execution truly elevated the project.",
  },
  {
    name: "Lory342",
    role: "Founder",
    company: "Lory's Shopping Center",
    quote:
      "Tiago has shown his capabilities as a developer in Lory's shopping. I am impressed that Tiago always has something new to show to the team, and it is always there to help, whether when there's a problem in the game, or a problem in the team.",
  },
  {
    name: "KokoGamerPL",
    role: "Executive Director",
    company: "Koko's Store",
    quote:
      "Tiago knows JavaScript, Lua, HTML and has great knowledge of many programming languages. I am glad that Tiago always helps me when I ask some questions and need help. Tiago is always respectful, professional and friendly.",
  },
  {
    name: "Vortex",
    role: "President",
    company: "Five Fries",
    quote:
      "I've had the pleasure of working with Tiago on several occasions, and I can confidently say he's one of the most talented and dependable people I've worked with. His expertise in coding, design, and problem-solving is impressive, and he approaches every challenge with professionalism, creativity, and attention to detail. Beyond his technical abilities, Tiago is an excellent collaborator who genuinely cares about delivering high-quality work. If you're looking for someone who can turn ideas into exceptional results, Tiago is the person to trust.",
  },
];

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
          <p className="font-mono text-sm tracking-[0.18em] uppercase text-foreground/40">
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
              className="flex flex-col rounded-2xl bg-white/80 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] ring-1 ring-black/4 sm:p-7"
            >
              <p className="flex-1 text-[15px] leading-relaxed text-foreground/70 sm:text-base">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
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
