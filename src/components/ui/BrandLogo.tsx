import Image from "next/image";

import { eventConfig } from "@/config/event";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  src: string | null;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeStyles = {
  sm: "size-8",
  md: "size-10",
  lg: "size-14",
};

const imageSizes = {
  sm: "32px",
  md: "40px",
  lg: "56px",
};

export function BrandLogo({ src, size = "md", className }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "relative flex shrink-0 items-center justify-center",
        sizeStyles[size],
        !src && "border border-gold/30 bg-ink",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={eventConfig.assets.logo.alt}
          fill
          sizes={imageSizes[size]}
          className="object-contain"
        />
      ) : (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          className="size-[62%] text-gold"
        >
          <path
            d="M8.5 5.5H4.5v21h4M23.5 5.5h4v21h-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="square"
          />
          <circle
            cx="16"
            cy="16"
            r="4.4"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M16 7.5v3.1M16 21.4v3.1M7.5 16h3.1M21.4 16h3.1"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="square"
          />
        </svg>
      )}
    </span>
  );
}
