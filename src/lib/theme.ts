export const THEME_STORAGE_KEY = "theme";

/** id of the theme-color meta the script owns, so the toggle can find it. */
export const THEME_COLOR_ID = "theme-color-live";

export type Theme = "light" | "dark";

export const THEME_COLORS: Record<Theme, string> = {
  light: "#fafafa",
  dark: "#09090b",
};

/**
 * Injected as a blocking script before first paint so the `.dark` class is
 * already on <html> when the browser renders. Without this the page paints
 * light and then snaps to dark, which is jarring on a dark-mode device.
 *
 * It also writes an unscoped theme-color meta that takes precedence over the
 * media-scoped ones rendered by Next, so a manual override also changes the
 * browser chrome colour.
 *
 * Keep this dependency-free and synchronous.
 */
export const themeScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var id=${JSON.stringify(THEME_COLOR_ID)};var s=localStorage.getItem(k);var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var dark=s==='dark'||(s!=='light'&&d);if(dark){document.documentElement.classList.add('dark')}var m=document.getElementById(id);if(!m){m=document.createElement('meta');m.id=id;m.name='theme-color';document.head.appendChild(m)}m.content=dark?'#09090b':'#fafafa'}catch(e){}})()`;

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}
