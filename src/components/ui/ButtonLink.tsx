import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "crimson" | "gold" | "outline" | "light" | "night" | "ghost";
  size?: "md" | "lg";
  external?: boolean;
  icon?: boolean;
  className?: string;
};

const variantStyles = {
  crimson:
    "border-crimson bg-crimson text-white hover:border-crimson-bright hover:bg-crimson-bright hover:shadow-[0_12px_30px_rgba(181,20,27,0.26)] active:border-crimson-deep active:bg-crimson-deep",
  gold: "border-gold bg-gold text-ink hover:border-gold-bright hover:bg-gold-bright hover:shadow-[0_12px_30px_rgba(201,164,92,0.3)] active:border-[#b28d47] active:bg-[#b28d47]",
  outline:
    "border-ink/25 bg-transparent text-ink hover:border-crimson hover:bg-crimson/5 hover:text-crimson active:bg-crimson/10",
  light:
    "border-paper/45 bg-transparent text-paper hover:border-gold-bright hover:bg-paper/10 hover:text-gold-bright active:bg-paper/15",
  night:
    "border-ink bg-ink text-paper hover:border-crimson hover:bg-crimson active:border-crimson-deep active:bg-crimson-deep",
  ghost:
    "border-transparent bg-transparent text-ink hover:text-crimson active:text-crimson-deep",
};

const shineStyles = {
  crimson: "via-white/35",
  gold: "via-white/50",
  outline: "via-crimson/10",
  light: "via-paper/25",
  night: "via-paper/25",
  ghost: "via-crimson/10",
};

const sizeStyles = {
  md: "h-11 px-5 text-[11px]",
  lg: "h-[3.25rem] px-6 text-[11px] sm:text-xs",
};

export function ButtonLink({
  href,
  children,
  variant = "crimson",
  size = "lg",
  external = false,
  icon = false,
  className,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative isolate inline-flex select-none items-center justify-center gap-2.5 overflow-hidden border font-mono font-semibold uppercase tracking-[0.16em] transition-[background-color,border-color,color,transform,box-shadow] duration-300 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 -translate-x-full bg-gradient-to-r from-transparent to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden",
          shineStyles[variant],
        )}
      />
      <span className="relative">{children}</span>
      {(external || icon) && (
        <ArrowUpRight
          aria-hidden="true"
          className="relative size-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
          strokeWidth={2}
        />
      )}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
