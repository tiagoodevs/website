import { type SimpleIcon } from "simple-icons";

export default function IconResolve({ size = 18, icon }: { size?: number; icon: SimpleIcon }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d={icon.path} />
    </svg>
  );
}