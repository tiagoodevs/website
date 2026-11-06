"use client";

import { useEffect, useRef, useState } from "react";

export type RotatingTextItem = {
  text: string;
  lang?: string;
  dir?: "ltr" | "rtl";
};

type RotatingTextProps = {
  items: readonly RotatingTextItem[];
  intervalMs?: number;
  className?: string;
  pauseOnHover?: boolean;
};

const EXIT_DURATION = 520;

export function RotatingText({
  items,
  intervalMs = 2600,
  className,
  pauseOnHover = true,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [hasRotated, setHasRotated] = useState(false);
  const [hovered, setHovered] = useState(false);
  const indexRef = useRef(0);
  const reducedMotion = useRef(false);

  const count = items.length;
  const safeIndex = count > 0 ? index % count : 0;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = query.matches;

    const onChange = () => {
      reducedMotion.current = query.matches;
    };

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Reset cleanly if the list of phrases changes.
  useEffect(() => {
    if (count === 0) return;

    indexRef.current = 0;
    setIndex(0);
    setPrevious(null);
  }, [count]);

  useEffect(() => {
    if (count < 2 || (pauseOnHover && hovered)) return;

    const timer = window.setInterval(() => {
      const current = indexRef.current;
      const next = (current + 1) % count;

      indexRef.current = next;
      if (!reducedMotion.current) setPrevious(current);
      setHasRotated(true);
      setIndex(next);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [count, intervalMs, pauseOnHover, hovered]);

  useEffect(() => {
    if (previous === null) return;

    const timer = window.setTimeout(() => setPrevious(null), EXIT_DURATION);
    return () => window.clearTimeout(timer);
  }, [previous]);

  if (count === 0) return null;

  const current = items[safeIndex];
  const previousItem = previous !== null ? items[previous % count] : null;

  return (
    <span
      className={`inline-grid align-bottom whitespace-nowrap ${className ?? ""}`}
      onPointerEnter={(event) => {
        if (pauseOnHover && event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(event) => {
        if (pauseOnHover && event.pointerType === "mouse") setHovered(false);
      }}
    >
      {/* Invisible copies size the wrapper to the longest phrase, so the
          surrounding text does not reflow between rotations. */}
      {items.map((item) => (
        <span
          key={item.text}
          aria-hidden="true"
          className="invisible col-start-1 row-start-1"
          lang={item.lang}
          dir={item.dir}
        >
          {item.text}
        </span>
      ))}

      {previousItem ? (
        <span
          key={`out-${previous}`}
          aria-hidden="true"
          lang={previousItem.lang}
          dir={previousItem.dir}
          className="rotating-text-out col-start-1 row-start-1"
        >
          {previousItem.text}
        </span>
      ) : null}

      <span
        key={safeIndex}
        lang={current.lang}
        dir={current.dir}
        className={`col-start-1 row-start-1 ${
          hasRotated ? "rotating-text-in" : ""
        }`}
      >
        {current.text}
      </span>
    </span>
  );
}
