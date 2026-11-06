"use client";

import { useEffect, useRef, useState } from "react";

type Item = { text: string; lang?: string; dir?: "ltr" | "rtl" };

type RotatingTextProps = {
  items: Item[];
  intervalMs?: number;
  className?: string;
};

export function RotatingText({ items, intervalMs = 2600, className }: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [started, setStarted] = useState(false);
  const indexRef = useRef(0);
  const reducedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = mq.matches;
    const onChange = () => { reducedRef.current = mq.matches; };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (items.length < 2) return;
    const id = setInterval(() => {
      const current = indexRef.current;
      const next = (current + 1) % items.length;
      indexRef.current = next;
      if (!reducedRef.current) setPrevious(current);
      setStarted(true);
      setIndex(next);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  // Matches the 0.45s exit animation, with a little slack.
  useEffect(() => {
    if (previous === null) return;
    const timer = setTimeout(() => setPrevious(null), 500);
    return () => clearTimeout(timer);
  }, [previous]);

  const cur = items[index];
  const prev = previous !== null ? items[previous] : null;

  return (
    <span className={`rotator relative inline-block align-bottom ${className ?? ""}`}>
      {prev && (
        <span
          key={`out-${previous}`}
          aria-hidden
          lang={prev.lang}
          dir={prev.dir}
          className="delivr-rotate-out absolute inset-0 whitespace-nowrap"
        >
          {prev.text}
        </span>
      )}
      <span
        key={index}
        lang={cur.lang}
        dir={cur.dir}
        className={`block whitespace-nowrap ${started ? "delivr-rotate-in" : ""}`}
      >
        {cur.text}
      </span>
    </span>
  );
}