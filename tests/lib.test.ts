import { describe, expect, it } from "vitest";
import { toKebabCase } from "@/lib/utils";
import {
  activityIcon,
  avatarUrl,
  currentActivity,
  customStatus,
  isLanyardResponse,
  STATUS_COLOR,
  STATUS_LABEL,
  type LanyardResponse,
} from "@/lib/lanyard";
import {
  isTheme,
  THEME_COLORS,
  themeScript,
  THEME_STORAGE_KEY,
} from "@/lib/theme";

describe("toKebabCase", () => {
  it("lowercases and hyphenates", () => {
    expect(toKebabCase("Better-auth")).toBe("better-auth");
    expect(toKebabCase("  Tailwind   CSS  ")).toBe("tailwind-css");
    expect(toKebabCase("me+coding=<3")).toBe("me+coding=<3");
  });
});

describe("lanyard helpers", () => {
  const payload: LanyardResponse = {
    success: true,
    data: {
      discord_user: {
        id: "901562525294927932",
        username: "tiagodevs",
        global_name: "tiago",
        avatar: "hash",
        primary_guild: { id: "1", tag: "Dlvr" },
      },
      discord_status: "dnd",
      activities: [
        { type: 4, state: "custom message", flags: 0 },
        { type: 0, name: "Code", details: "Not in a file!", flags: 1 },
      ],
      active_on_discord_web: false,
      active_on_discord_desktop: true,
      active_on_discord_mobile: true,
    },
  };

  it("builds a cdn avatar url", () => {
    expect(avatarUrl(payload.data.discord_user)).toBe(
      "https://cdn.discordapp.com/avatars/901562525294927932/hash.png?size=160",
    );
  });

  it("returns null when there is no avatar", () => {
    expect(avatarUrl({ ...payload.data.discord_user, avatar: null })).toBeNull();
    expect(avatarUrl({ ...payload.data.discord_user, avatar: undefined })).toBeNull();
  });

  it("picks out the custom status", () => {
    expect(customStatus(payload.data.activities)).toBe("custom message");
    expect(customStatus([{ type: 0, name: "Code", flags: 0 }])).toBeNull();
    expect(customStatus([{ type: 4, state: "   ", flags: 0 }])).toBeNull();
  });

  it("maps activity flags to the icon that represents them", () => {
    expect(activityIcon({ type: 3, name: "Song", flags: 48 })).toBe("music");
    expect(activityIcon({ type: 0, name: "Code", flags: 1 })).toBe("playing");
    expect(activityIcon({ type: 0, name: "Code", flags: 0 })).toBeNull();
  });

  it("prefers a playing activity over a custom status", () => {
    expect(currentActivity(payload.data.activities)?.name).toBe("Code");
    expect(currentActivity([])).toBeNull();
  });

  it("validates the response shape", () => {
    expect(isLanyardResponse(payload)).toBe(true);
    expect(isLanyardResponse(null)).toBe(false);
    expect(isLanyardResponse({ success: false })).toBe(false);
    expect(isLanyardResponse({ success: true, data: {} })).toBe(false);
  });

  it("has a colour and label for every status", () => {
    for (const status of ["online", "idle", "dnd", "offline"] as const) {
      expect(STATUS_COLOR[status], status).toMatch(/^#[0-9a-f]{6}$/i);
      expect(STATUS_LABEL[status], status).not.toBe("");
    }
  });
});

describe("theme", () => {
  it("recognises only valid stored values", () => {
    expect(isTheme("dark")).toBe(true);
    expect(isTheme("light")).toBe(true);
    expect(isTheme("sepia")).toBe(false);
    expect(isTheme(null)).toBe(false);
  });

  it("inlines the storage key so the script stays self-contained", () => {
    expect(themeScript).toContain(JSON.stringify(THEME_STORAGE_KEY));
  });

  it("injects an IIFE that does not leak globals or await anything", () => {
    expect(themeScript.startsWith("(function(){")).toBe(true);
    expect(themeScript).toContain("try{");
    expect(themeScript).not.toContain("await");
    expect(themeScript).not.toContain("import");
  });

  it("handles dark, explicit light, and system default", () => {
    expect(themeScript).toContain("s==='dark'");
    expect(themeScript).toContain("s!=='light'");
    expect(themeScript).toContain("classList.add('dark')");
  });

  it("defines a colour per theme", () => {
    expect(THEME_COLORS.light).toMatch(/^#[0-9a-f]{6}$/i);
    expect(THEME_COLORS.dark).toMatch(/^#[0-9a-f]{6}$/i);
  });
});
