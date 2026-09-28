import { discord } from "@/content/site";

export type DiscordStatus = "online" | "idle" | "dnd" | "offline";

export type LanyardActivity = {
  type: number;
  name?: string;
  state?: string | null;
  details?: string | null;
  created_at?: number;
  timestamps?: { start?: number; end?: number };
};

export type LanyardUser = {
  id: string;
  username: string;
  global_name?: string | null;
  avatar?: string | null;
  discriminator?: string;
  primary_guild?: { id: string; tag: string } | null;
};

export type LanyardResponse = {
  success: boolean;
  data: {
    discord_user: LanyardUser;
    discord_status: DiscordStatus;
    activities: LanyardActivity[];
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
  };
};

/** Discord's own status palette, so the dot matches what users see in-app. */
export const STATUS_COLOR: Record<DiscordStatus, string> = {
  online: "#23a55a",
  idle: "#f0b232",
  dnd: "#f23f43",
  offline: "#80848e",
};

export const STATUS_LABEL: Record<DiscordStatus, string> = {
  online: "Online",
  idle: "Idle",
  dnd: "Do not disturb",
  offline: "Offline",
};

export function avatarUrl(user: LanyardUser, size = 160): string | null {
  if (!user.avatar) return null;
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=${size}`;
}

/** Activity type 4 is a custom status message; 0 is a "Playing…" presence. */
export function customStatus(activities: LanyardActivity[]): string | null {
  const custom = activities.find((a) => a.type === 4);
  return custom?.state?.trim() || null;
}

export function currentActivity(
  activities: LanyardActivity[],
): LanyardActivity | null {
  return (
    activities.find((a) => a.type === 0 || a.type === 3) ??
    activities.find((a) => a.type === 2) ??
    activities.find((a) => a.type !== 4) ??
    null
  );
}

export function isLanyardResponse(value: unknown): value is LanyardResponse {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Partial<LanyardResponse>;
  return (
    candidate.success === true &&
    typeof candidate.data?.discord_user?.id === "string" &&
    typeof candidate.data?.discord_status === "string" &&
    Array.isArray(candidate.data?.activities)
  );
}

export function lanyardUrl(): string {
  return discord.lanyardUrl;
}
