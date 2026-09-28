import Image from "next/image";
import Link from "next/link";
import HelpLauncher from "@/components/helpbutton";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6">
      <HelpLauncher />

      <div className="flex w-full max-w-xl flex-col items-start gap-3 sm:gap-4">
        <div className="relative h-40 w-full overflow-hidden rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.03)] ring-1 ring-foreground/5 sm:h-52 md:h-60">
          <Image
            src="/notfound/ah-hi.webp"
            alt="404 illustration"
            fill
            sizes="(max-width: 640px) 100vw, 576px"
            priority
            className="object-cover"
          />
        </div>

        <p className="text-base font-medium text-foreground/70 italic sm:text-lg md:text-xl">
          &ldquo;It&apos;s me, hi, I&apos;m the problem, it&apos;s me.&rdquo; — Taylor
          Swift
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-7xl">
          404: Not Found
        </h1>

        <p className="text-sm text-foreground/60 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back
          on track.
        </p>

        <div className="mt-1 flex w-full flex-wrap items-center justify-start gap-2 sm:gap-3">
          <Link
            href="/"
            className="rounded-xl bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80 sm:px-6 sm:py-2.5"
          >
            Home
          </Link>
          <Link
            href="/#contact"
            className="rounded-xl border border-foreground/15 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5 sm:px-6 sm:py-2.5"
          >
            Get in touch
          </Link>
          <a
            href={site.socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-foreground/15 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5 sm:px-6 sm:py-2.5"
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  );
}
