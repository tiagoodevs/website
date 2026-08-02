import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ConsoleWarning } from "@/components/warning";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <meta content="#F3F3F3" data-react-helmet="true" name="theme-color" />
      <body className="min-h-full flex flex-col">
        <ConsoleWarning />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
