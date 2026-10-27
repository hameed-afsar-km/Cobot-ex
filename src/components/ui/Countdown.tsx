"use client";

import { useEffect, useState } from "react";

import { eventConfig } from "@/config/event";
import { cn } from "@/lib/utils";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: number): TimeLeft {
  const difference = Math.max(0, target - Date.now());
  const totalSeconds = Math.floor(difference / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Mins" },
  { key: "seconds", label: "Secs" },
] as const;

export function Countdown({
  className,
  showDate = false,
}: {
  className?: string;
  showDate?: boolean;
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const target = new Date(eventConfig.date.iso).getTime();
    const update = () => setTimeLeft(getTimeLeft(target));

    update();
    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className={cn("flex flex-col items-center gap-2 sm:gap-2.5", className)}>
      {showDate && (
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] text-gold-bright font-semibold">
          {eventConfig.date.display}
        </p>
      )}

      <div
        role="timer"
        aria-label="Countdown to COBOT-EX"
        className="flex items-center gap-1.5 sm:gap-2.5"
      >
        {units.map((unit, index) => (
          <div key={unit.key} className="flex items-center gap-1.5 sm:gap-2.5">
            {index > 0 && (
              <span
                aria-hidden="true"
                className="font-mono text-sm font-bold text-crimson-bright/70 animate-pulse"
              >
                :
              </span>
            )}
            <div className="group relative flex min-w-[3.5rem] flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/60 px-2 py-1.5 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.6)] ring-1 ring-white/5 transition-all duration-300 hover:border-gold/40 hover:bg-black/75 sm:min-w-[4.5rem] sm:px-3 sm:py-2">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              <span className="font-mono text-lg font-bold leading-none tabular-nums text-paper drop-shadow-[0_2px_12px_rgba(255,250,241,0.35)] sm:text-2xl">
                {timeLeft
                  ? String(timeLeft[unit.key]).padStart(2, "0")
                  : "--"}
              </span>
              <span className="mt-1 font-mono text-[6px] uppercase tracking-[0.2em] text-gold-bright/80 sm:text-[7px]">
                {unit.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
