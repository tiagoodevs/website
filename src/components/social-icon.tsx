import type { SocialKind } from "@/data/portfolio";
import { Discord, Gamepad, GitHub, Globe, LinkedIn, Mail } from "./icons";

type SocialIconProps = {
  kind: SocialKind;
  className?: string;
};

export function SocialIcon({ kind, className }: SocialIconProps) {
  const props = { className, "aria-hidden": true as const };

  switch (kind) {
    case "github":
      return <GitHub {...props} />;
    case "discord":
      return <Discord {...props} />;
    case "linkedin":
      return <LinkedIn {...props} />;
    case "mail":
      return <Mail {...props} />;
    case "roblox":
      return <Gamepad {...props} />;
    default:
      return <Globe {...props} />;
  }
}
