import "./globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ConsoleWarning } from "@/components/warning";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiago's Portfolio",
  description:
    "Portfolio of Tiago Santos, a full-stack developer and multimedia technician from Portugal. Explore projects, experience, open-source work, and UI/UX design.",
  keywords: [
    "Tiago Santos",
    "Bread",
    "breaddevv",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "UI/UX",
    "Portfolio",
  ],
  authors: [{ name: "Tiago Santos" }],
  creator: "Tiago Santos",
  publisher: "Tiago Santos",
  metadataBase: new URL("https://breaddevv.cc"),
  openGraph: {
    title: "Tiago's Portfolio",
    description:
      "Explore my portfolio featuring full-stack web development, UI/UX design, open-source projects, and professional experience.",
    url: "https://breaddevv.cc",
    siteName: "Tiago's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
    {
      url: "/og.png",
      width: 1920,
      height: 1080,
      alt: "Tiago Santos Portfolio",
    },
  ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiago's Portfolio",
    description:"Full-stack developer passionate about building modern web applications and intuitive user experiences.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${mono.variable} h-full antialiased`}
    >
      <meta content="#fafafa" data-react-helmet="true" name="theme-color" />
      <body className="min-h-full">
        <ConsoleWarning />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
