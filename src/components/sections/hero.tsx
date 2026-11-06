import { profile } from "@/data/portfolio";
import { RotatingText, type RotatingTextItem } from "../assets/rotating-text";
import { ArrowRight, ArrowUpRight, Clock, MapPin } from "../icons";
import { LocalTime } from "../local-time";
import { Reveal } from "../reveal";

const greetings: RotatingTextItem[] = [
  { text: "Hi!", lang: "en" },
  { text: "Olá!", lang: "pt" },
  { text: "¡Hola!", lang: "es" },
  { text: "Bonjour!", lang: "fr" },
  { text: "Hallo!", lang: "de" },
  { text: "Ciao!", lang: "it" },
  { text: "Cześć!", lang: "pl" },
  { text: "Hej!", lang: "sv" },
  { text: "Hoi!", lang: "nl" },
  { text: "Merhaba!", lang: "tr" },
  { text: "Привет!", lang: "ru" },
  { text: "Γεια σου!", lang: "el" },
  { text: "你好！", lang: "zh-Hans" },
  { text: "こんにちは！", lang: "ja" },
  { text: "안녕하세요!", lang: "ko" },
  { text: "नमस्ते!", lang: "hi" },
  { text: "مرحبا!", lang: "ar", dir: "rtl" },
  { text: "שלום!", lang: "he", dir: "rtl" },
  { text: "سلام!", lang: "fa", dir: "rtl" },
  { text: "สวัสดี!", lang: "th" },
  { text: "Xin chào!", lang: "vi" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-20rem] h-[38rem] w-[68rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(134,209,154,0.24),transparent_64%)] blur-2xl" />
        <div className="absolute right-[-12rem] top-[6rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,159,110,0.2),transparent_66%)] blur-3xl" />
        <div className="absolute bottom-0 left-[-10rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(98,96,92,0.12),transparent_70%)] blur-3xl" />
      </div>

      <div className="shell w-full">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center md:mx-0 md:items-start md:text-left">
          <Reveal>
            <div className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-[12px] font-medium text-muted backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-faint" />
              <span>Portugal</span>
              <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
              <Clock className="h-3.5 w-3.5 text-faint" />
              <LocalTime />
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="display mt-6">
              <span className="block text-[0.82em] leading-[1.05] tracking-[-0.02em] text-sage">
                <RotatingText
                  items={greetings}
                  className="text-center md:text-left"
                />
              </span>
              <span className="mt-1 block">
                I&apos;m Tiago<span className="text-sage">.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-muted md:mx-0">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={210}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
              <a href="#work" className="btn btn-primary">
                View selected work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
