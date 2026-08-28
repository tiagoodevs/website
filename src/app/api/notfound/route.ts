import { NextResponse } from "next/server";
import fs from "fs"
import path from "path"

export interface QuoteItem {
    quote: string;
    source: string;
    note: "taylor" | "midnights" | "ttpd" | "shakespeare";
}

const noteToany: Record<string, string> = {
    "midnights": "ah",
    "ttpd": "ttpd",
    "taylor": "landscape",
    "shakespeare": "landscape"
}

const quotes: QuoteItem[] = [
    {
        quote: "I lost myself in a labyrinth with no way out.",
        source: "Labyrinth",
        note: "midnights",
    },
    {
        quote: "It's me, hi, I'm the problem, it's me.",
        source: "Anti-Hero",
        note: "midnights",
    },
    {
        quote: "I'm searchin' the aurora borealis green.",
        source: "Snow On The Beach, Taylor Swift",
        note: "midnights",
    },
    {
        quote: "I hate it here so I will go to secret gardens in my mind.",
        source: "I Hate It Here, Taylor Swift",
        note: "ttpd",
    },
    {
        quote: "You look like Taylor Swift in this light, we're loving it.",
        source: "Clara Bow, Taylor Swift",
        note: "ttpd",
    },
    {
        quote: "Old habits die screaming.",
        source: "The Black Dog, Taylor Swift",
        note: "ttpd",
    },
    {
        quote: "I think I've seen this film before, and I didn't like the ending.",
        source: "exile, Taylor Swift",
        note: "taylor",
    },
    {
        quote: "We were in the wrong place at the right time.",
        source: "Renegade, Taylor Swift",
        note: "taylor",
    },
    {
        quote: "I mapped out a route to escape, but I end up back where I started.",
        source: "Getaway Car, Taylor Swift",
        note: "taylor",
    },
    {
        quote: "I am not what I am.",
        source: "Othello, Shakespeare",
        note: "shakespeare",
    },
    {
        quote: "Though this be madness, yet there is method in 't.",
        source: "Hamlet, Shakespeare",
        note: "shakespeare",
    },
    {
        quote: "I lose myself, to find myself again.",
        source: "The Merchant of Venice, Shakespeare",
        note: "shakespeare",
    },
];



export function GET() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    const imagesFolder = fs.readdirSync(path.join(process.cwd(), "public", "notfound"))
    const designedImg = imagesFolder.filter(val => val.startsWith(noteToany[randomQuote.note]));

    const randomImage = designedImg[Math.floor(Math.random() * designedImg.length)];

    const { quote, source } = randomQuote

    const formattedResponse = {
        quote,
        source,
        randomImage: `/notfound/${randomImage}`
    }

    return NextResponse.json(formattedResponse);
}