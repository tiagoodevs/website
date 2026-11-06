"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Lisbon",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function LocalTime() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()));
    update();

    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
}
