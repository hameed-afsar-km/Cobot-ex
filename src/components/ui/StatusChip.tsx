import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type StatusChipProps = {
  children: ReactNode;
  className?: string;
  dotClassName?: string;
};

export function StatusChip({
  children,
  className,
  dotClassName,
}: StatusChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border border-current px-2.5 py-1 font-mono text-[8px] font-medium uppercase tracking-[0.18em]",
        className,
      )}
    >
      <span className="relative flex size-1.5 shrink-0" aria-hidden="true">
        <span
          className={cn(
            "absolute inline-flex size-full animate-pulse-ring rounded-full bg-current",
            dotClassName,
          )}
        />
        <span
          className={cn(
            "relative inline-flex size-1.5 rounded-full bg-current",
            dotClassName,
          )}
        />
      </span>
      {children}
    </span>
  );
}
