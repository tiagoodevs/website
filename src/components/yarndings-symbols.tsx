"use client";

import { useEffect, useState } from "react";

const SYMBOLS = "★✦✧✩✪✫✬✭✮✯✰✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂❃";
const FPS = 10;

/** Tiny LCG so positions match between SSR and the client (no hydration mismatch). */
function seeded(pos: number) {
  let x = (pos * 1103515245 + 12345) % 2147483648;
  return () => {
    x = (x * 1103515245 + 12345) % 2147483648;
    return x / 2147483648;
  };
}

type YarndingSymbol = {
  id: number;
  char: string;
  left: number;
  top: number;
  size: string;
  delay: number;
  duration: number; // whole seconds, so steps() lands on exact frames
  speed: number; // how many symbols to advance per tick
};

export default function YarndingsSymbols({
  count = 14,
}: Readonly<{ count?: number }>) {
  const [symbols, setSymbols] = useState<YarndingSymbol[]>(() =>
    Array.from({ length: count }).map((_, i) => {
      const r = seeded(i);
      return {
        id: i,
        char: SYMBOLS[Math.floor(r() * SYMBOLS.length)],
        left: Math.round(r() * 100),
        top: Math.round(r() * 100),
        size: `${1.2 + r() * 1.5}rem`,
        delay: Math.round(r() * 8),
        duration: 6 + Math.floor(r() * 5), // 6–10s
        speed: 1 + Math.floor(r() * 3), // 1–3
      };
    })
  );

  // Stepped 10fps clock. Only the glyph swaps; positions stay put.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setSymbols((prev) =>
        prev.map((s) => ({
          ...s,
          char: SYMBOLS[(SYMBOLS.indexOf(s.char) + s.speed) % SYMBOLS.length],
        }))
      );
    }, 1000 / FPS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {symbols.map((s) => (
        <span
          key={s.id}
          className="yarndings-symbol yarndings-float absolute select-none"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: s.size,
            opacity: 0.5,
            textShadow: `0 0 14px ${getGlowColor(s.char)}`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            animationTimingFunction: `steps(${Math.round((s.duration * FPS) / 2)}, end)`,
          }}
        >
          {s.char}
        </span>
      ))}
    </div>
  );
}

function getGlowColor(char: string): string {
  const hues = ["#86efac", "#bef264", "#4ade80", "#a7f3d0"];
  return hues[char.charCodeAt(0) % hues.length];
}