"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "./icons";

type CopyEmailProps = {
  email: string;
  className?: string;
};

export function CopyEmail({ email, className }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timeout.current) window.clearTimeout(timeout.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timeout.current) window.clearTimeout(timeout.current);
      timeout.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={className}
      aria-label={
        copied ? "Email address copied" : `Copy email address ${email}`
      }
    >
      <span className="truncate">{copied ? "Copied to clipboard" : email}</span>
      {copied ? (
        <Check className="h-4 w-4 flex-none" />
      ) : (
        <Copy className="h-4 w-4 flex-none" />
      )}
    </button>
  );
}
