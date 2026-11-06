"use client";

import { Moon, Sun } from "./icons";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");

    root.classList.toggle("dark", next);
    root.style.colorScheme = next ? "dark" : "light";

    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be unavailable in private contexts; the theme still applies.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-btn"
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
    >
      <Moon className="h-4 w-4 dark:hidden" />
      <Sun className="hidden h-4 w-4 dark:block" />
    </button>
  );
}
