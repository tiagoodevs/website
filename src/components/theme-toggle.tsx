"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_COLORS, THEME_COLOR_ID, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

/**
 * The resolved theme lives on <html>, which the blocking script in the root
 * layout mutates before paint. Reading it through useSyncExternalStore keeps
 * this component in sync with that DOM state without a mount effect, and
 * without risking a hydration mismatch.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// Rendered during SSR and hydration; the class is applied before first paint,
// so any mismatch corrects itself on the first client render.
function getServerSnapshot(): Theme {
  return "light";
}

function applyTheme(next: Theme) {
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // storage unavailable (private mode) — the class change still applies
  }
  const meta = document.getElementById(THEME_COLOR_ID);
  if (meta) meta.setAttribute("content", THEME_COLORS[next]);
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`flex size-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-card-hover ${className}`}
    >
      {theme === "dark" ? (
        <Sun size={18} strokeWidth={1.75} />
      ) : (
        <Moon size={18} strokeWidth={1.75} />
      )}
    </button>
  );
}
