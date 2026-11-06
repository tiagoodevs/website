import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

const description =
  "Tiago Santos is a full-stack developer from Portugal building clear, considered web products — polished interfaces, solid APIs, and reliable deployments.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tiagodevs.net"),
  title: {
    default: "Tiago Santos — Full-Stack Developer",
    template: "%s — Tiago Santos",
  },
  description,
  applicationName: "Tiago Santos",
  authors: [{ name: "Tiago Santos", url: "https://tiagodevs.net" }],
  creator: "Tiago Santos",
  keywords: [
    "Tiago Santos",
    "tiagodevs",
    "full-stack developer",
    "product engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portugal",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Tiago Santos",
    title: "Tiago Santos — Full-Stack Developer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiago Santos — Full-Stack Developer",
    description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f3f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0f12" },
  ],
};

const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";r.classList.add("js")}catch(e){document.documentElement.classList.add("js")}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static, trusted theme bootstrap */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh font-sans">
        <a
          href="#main"
          className="sr-only rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
