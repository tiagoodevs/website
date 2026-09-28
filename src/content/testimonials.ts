export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  /** File name inside /public/profiles. */
  img: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Brennan Peters",
    role: "Owner",
    company: "Orbit",
    quote:
      "Working with Tiago was an incredible experience. He consistently demonstrated an open mind and a strong willingness to learn more. Tiago approaches challenges with curiosity and professionalism, and he is always looking for ways to grow and improve. I would highly recommend him to any team looking for someone dedicated, adaptable, and eager to develop new skills.",
    img: "petes.png",
  },
  {
    name: "Alex",
    role: "Executive Director",
    company: "Almore Shopping",
    quote:
      "Tiago demonstrated strong development skills during his time at Almore Shopping. He built several systems for our Version 3 update and quickly proved himself as a reliable and professional developer. Due to his contributions and dedication, he progressed from the development team to Development Director, then Executive Assistant, and eventually Vice Director.",
    img: "alex.png",
  },
  {
    name: "Cuba Eastern",
    role: "Executive Officer",
    company: "Freshly Shopping UK",
    quote:
      "Tiago is a proactive and reliable developer who consistently met deadlines, while always being up for a new challenge. He was always willing to step in and support the team whenever it was needed, making him a valuable asset to our projects.",
    img: "cuba.webp",
  },
  {
    name: "Olliebobsg",
    role: "Founder",
    company: "Neon Stores UK",
    quote:
      "Tiago is a hard-working, knowledgeable and kind developer he has proven and shown this to me by working alongside and for me, as far as I know he can do everything I have asked him to do and is always ready and up for a new challenge.",
    img: "olliebob.png",
  },
  {
    name: "2MillionGunGuy",
    role: "Director",
    company: "Monitry",
    quote:
      "Tiago has admirable skills and experience in the UI/UX field. As our Frontend Developer on Coffee Systems, he consistently impressed me with his ability to turn complex ideas into clean, user-friendly interfaces. His design intuition, attention to detail, and execution truly elevated the project.",
    img: "2million.png",
  },
  {
    name: "Lory342",
    role: "Founder",
    company: "Lory's Shopping Center",
    quote:
      "Tiago has shown his capabilities as a developer in Lory's shopping. I am impressed that Tiago always has something new to show to the team, and it is always there to help, whether when there's a problem in the game, or a problem in the team.",
    img: "lory.png",
  },
  {
    name: "KokoGamerPL",
    role: "Executive Director",
    company: "Koko's Store",
    quote:
      "Tiago knows JavaScript, Lua, HTML and has great knowledge of many programming languages. I am glad that Tiago always helps me when I ask some questions and need help. Tiago is always respectful, professional and friendly.",
    img: "koko.png",
  },
  {
    name: "Vortex",
    role: "President",
    company: "Five Fries",
    quote:
      "I've had the pleasure of working with Tiago on several occasions, and I can confidently say he's one of the most talented and dependable people I've worked with. His expertise in coding, design, and problem-solving is impressive, and he approaches every challenge with professionalism, creativity, and attention to detail. Beyond his technical abilities, Tiago is an excellent collaborator who genuinely cares about delivering high-quality work. If you're looking for someone who can turn ideas into exceptional results, Tiago is the person to trust.",
    img: "vortex.png",
  },
];
