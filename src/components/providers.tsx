"use client";

import { MotionConfig } from "framer-motion";

/**
 * `reducedMotion="user"` makes every Framer Motion transform/layout animation
 * respect prefers-reduced-motion while still allowing opacity fades.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
