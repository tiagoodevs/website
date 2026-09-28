"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { discord } from "@/content/site";
import { isLanyardResponse, lanyardUrl, type LanyardResponse } from "@/lib/lanyard";

type PresenceState = "loading" | "ready" | "error";

export type DiscordPresence = {
  data: LanyardResponse["data"] | null;
  state: PresenceState;
  refresh: () => void;
};

/**
 * Polls Lanyard for live Discord presence.
 *
 * Polling pauses while the tab is hidden and resumes (with an immediate
 * refresh) on focus, so a backgrounded tab is not making requests nobody is
 * looking at.
 */
export function useDiscordPresence(): DiscordPresence {
  const [data, setData] = useState<LanyardResponse["data"] | null>(null);
  const [state, setState] = useState<PresenceState>("loading");
  const abortRef = useRef<AbortController | null>(null);

  const load = useCallback(async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch(lanyardUrl(), {
        signal: controller.signal,
        cache: "no-store",
        headers: { accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Lanyard responded ${res.status}`);
      const json: unknown = await res.json();
      if (!isLanyardResponse(json)) throw new Error("Unexpected Lanyard payload");
      setData(json.data);
      setState("ready");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setState("error");
    }
  }, []);

  useEffect(() => {
    let timer: number | undefined;
    let cancelled = false;

    const startPolling = () => {
      if (cancelled) return;
      void load();
      timer = window.setInterval(() => {
        if (document.visibilityState === "visible") void load();
      }, discord.pollInterval);
    };

    const stopPolling = () => {
      if (timer !== undefined) window.clearInterval(timer);
      timer = undefined;
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        if (timer === undefined) startPolling();
        else void load();
      } else {
        stopPolling();
      }
    };

    startPolling();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      stopPolling();
      abortRef.current?.abort();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [load]);

  return { data, state, refresh: load };
}
