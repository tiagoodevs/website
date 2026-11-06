"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth-scroll provider.
 *
 * Exposes the Lenis instance on the window so other components (e.g. hash-link
 * handling) can scroll programmatically. Anchor links whose `href` starts with
 * `#` are intercepted and scrolled to via Lenis so navigation keeps working
 * while smooth scroll is active.
 */
export default function SmoothScroll({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: reduceMotion ? 1 : 0.1,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !reduceMotion,
      syncTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Intercept same-page anchor links so they scroll via Lenis instead of
    // fighting the browser's native jump (which breaks with smooth scroll).
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      event.preventDefault();

      const el = document.querySelector<HTMLElement>(hash);
      if (el) {
        lenis.scrollTo(el, { offset: -80, duration: 1 });
      } else {
        lenis.scrollTo(hash, { duration: 1 });
      }
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
