import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="eyebrow">
            {index} — {eyebrow}
          </span>
          <h2 className="section-title mt-4">{title}</h2>
          {description ? (
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div className="flex-none">{action}</div> : null}
      </div>
    </Reveal>
  );
}
