"use client";

import { motion } from "framer-motion";
import { siDiscord } from "simple-icons";
import IconResolve from "@/lib/icons";
import { discord, site } from "@/content/site";
import { useDiscordPresence } from "@/hooks/use-discord-presence";
import {
  avatarUrl,
  currentActivity,
  customStatus,
  STATUS_COLOR,
  STATUS_LABEL,
  type DiscordStatus,
} from "@/lib/lanyard";

const DM_URL = site.socials.discord;

function StatusDot({
  status,
  size = "size-3",
  ring = false,
}: {
  status: DiscordStatus;
  size?: string;
  ring?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={`block shrink-0 rounded-full ${size} ${
        ring ? "ring-2 ring-card" : ""
      }`}
      style={{ backgroundColor: STATUS_COLOR[status] }}
    />
  );
}

function Fallback() {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden
        className="block size-11 shrink-0 animate-pulse rounded-full bg-foreground/10"
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground">tiagodevs</p>
        <p className="text-sm text-foreground/45">Checking Discord…</p>
      </div>
    </div>
  );
}

function Unavailable() {
  return (
    <div className="flex items-center gap-3">
      <StatusDot status="offline" size="size-11" />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground">
          {discord.username}
        </p>
        <p className="text-sm text-foreground/45">
          Presence unavailable — send a DM anyway
        </p>
      </div>
    </div>
  );
}

/** Full presence card for the contact section. */
export function DiscordPresenceCard() {
  const { data, state } = useDiscordPresence();

  if (state === "loading") return <Fallback />;
  if (state === "error" || !data) return <Unavailable />;

  const user = data.discord_user;
  const status = data.discord_status;
  const custom = customStatus(data.activities);
  const activity = currentActivity(data.activities);
  const avatar = avatarUrl(user);
  const name = user.global_name || user.username;
  const guildTag = user.primary_guild?.tag;

  return (
    <div className="flex items-center gap-3">
      <span className="relative shrink-0">
        {avatar ? (
          // Served by Discord's CDN already sized and optimised; a proxy hop
          // would add latency without reducing bytes.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatar}
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="block size-11 rounded-full bg-foreground/10" />
        )}
        <span className="absolute -right-0.5 -bottom-0.5 block size-3.5 rounded-full ring-2 ring-card">
          <StatusDot status={status} size="size-full" />
        </span>
      </span>

      <div className="min-w-0 text-left">
        <p className="truncate text-sm font-semibold text-foreground">
          {name}
          {guildTag ? (
            <span className="ml-1.5 font-normal text-foreground/40">
              {guildTag}
            </span>
          ) : null}
        </p>
        <p className="flex items-center gap-1.5 truncate text-sm text-foreground/55">
          <StatusDot status={status} size="size-2" />
          {STATUS_LABEL[status]}
          {activity?.name ? (
            <span className="truncate">
              · {activity.name}
              {activity.details ? ` — ${activity.details}` : ""}
            </span>
          ) : null}
        </p>
        {custom ? (
          <p className="mt-1 line-clamp-2 text-sm text-foreground/45 italic">
            {custom}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/** Compact presence row for the quick-actions launcher. */
export function DiscordPresenceCompact() {
  const { data, state } = useDiscordPresence();
  const status = data?.discord_status ?? "offline";
  const name = data?.discord_user.global_name || data?.discord_user.username || discord.username;

  return (
    <a
      href={DM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="col-span-4 flex items-center gap-2 rounded-xl border border-border bg-card p-3 text-left transition-colors hover:bg-card-hover"
      aria-label={`Message ${name} on Discord`}
    >
      <span className="relative shrink-0">
        <span className="flex size-7 items-center justify-center rounded-full bg-[#5865F2] text-white">
          <IconResolve size={15} icon={siDiscord} />
        </span>
        <span className="absolute -right-0.5 -bottom-0.5 block size-2.5 rounded-full ring-2 ring-card">
          <StatusDot status={status} size="size-full" />
        </span>
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate text-xs font-semibold text-foreground">
          {state === "loading" ? "Discord" : name}
        </span>
        <span className="block truncate text-xs text-muted">
          {state === "loading"
            ? "Connecting…"
            : state === "error"
              ? "Status unavailable"
              : `${STATUS_LABEL[status]} — DM me`}
        </span>
      </span>
    </a>
  );
}

/** Public entry point used by the contact section. */
export default function DiscordPresence() {
  return (
    <motion.a
      href={DM_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="block w-full rounded-2xl border border-border bg-card/60 p-4 text-left transition-colors hover:border-[#5865F2]/50 hover:bg-card"
      aria-label="Message me on Discord"
    >
      <DiscordPresenceCard />
    </motion.a>
  );
}
