import { siDiscord, siGithub, siRoblox } from "simple-icons";

export function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d={siGithub.path} />
    </svg>
  );
}

export function DiscordIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d={siDiscord.path} />
    </svg>
  );
}

export function RobloxIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d={siRoblox.path} />
    </svg>
  );
}