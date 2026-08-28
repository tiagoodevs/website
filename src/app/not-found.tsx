"use client";

import HelpLauncher from "@/components/helpbutton";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface QuoteItem {
    quote: string;
    source: string;
    randomImage: string;
}

export default function Home() {
    const [quoteData, setQuoteData] = useState<QuoteItem | null>(null);

    useEffect(() => {
        async function getQuote() {
            try {
                const res = await fetch('/api/notfound');

                const jsonRes = (await res.json()) as QuoteItem;
                setQuoteData(jsonRes);
            } catch {
                // silently fail, fallback text below will show
            }
        }

        getQuote();
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6">
            <HelpLauncher />
            <div className="flex flex-col items-start w-full max-w-xl gap-3 sm:gap-4">
                <div className="relative w-full h-40 sm:h-52 md:h-60 rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.03)] ring-1 ring-black/4">
                    <Image
                        src={quoteData?.randomImage || "/notfound/landscape-3.jpg"}
                        alt="404 illustration"
                        fill
                        sizes={'(max-width: 640px) 100vw, 576px'}
                        loading="eager"
                        className="object-cover"
                    />
                </div>
                <p className="text-base sm:text-lg md:text-xl italic font-medium text-black/70">
                    "{quoteData?.quote ?? "I hate it here so I will go to secret gardens in my mind."}" - {quoteData?.source || "Taylor Swift"}
                </p>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold">404: Not Found</h2>
                <p className="text-sm sm:text-base">
                    The page you&apos;re looking for does not exist, let&apos;s go back home.
                </p>
                <div className="mt-1 flex flex-wrap items-center justify-start gap-2 sm:gap-3 w-full">
                    <a
                        href="/"
                        className="rounded-xl bg-foreground px-5 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
                    >
                        Home
                    </a>
                    <a
                        href="/#contact"
                        className="rounded-xl border border-foreground/15 px-5 sm:px-6 py-2 sm:py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    );
}