"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type StackCardProps = {
  children: ReactNode;
  className?: string;
  /** z-index level — higher = stacks on top. Use 10, 20, 30... */
  zIndex?: number;
};

/**
 * Makes a section behave like a sticky card that slides in over the previous section.
 * Wrap each major section in this. The section will stick to the top as you scroll
 * past it, and the NEXT card will slide up over it.
 *
 * Usage:
 *   <StackCard zIndex={10}><Hero /></StackCard>
 *   <StackCard zIndex={20}><Competitions /></StackCard>
 *   <StackCard zIndex={30}><Brochure /></StackCard>
 *
 * The parent container needs no special styles — each card manages itself.
 */
export function StackCard({ children, className, zIndex = 10 }: StackCardProps) {
  return (
    <div
      className={cn("sticky top-0", className)}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
}
