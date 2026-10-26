import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: string;
  children: string;
  tone?: "crimson" | "gold" | "cream";
  inverse?: boolean;
  className?: string;
};

export function SectionLabel({
  index,
  children,
  tone = "crimson",
  inverse = false,
  className,
}: SectionLabelProps) {
  const indexColor =
    tone === "cream"
      ? "text-paper"
      : tone === "gold"
        ? "text-gold"
        : "text-crimson";

  const lineColor =
    tone === "cream"
      ? "bg-paper/70"
      : tone === "gold"
        ? "bg-gold"
        : "bg-crimson";

  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.24em]",
        inverse ? "text-paper/65" : "text-mist",
        className,
      )}
    >
      <span aria-hidden="true" className={cn("h-px w-7", lineColor)} />
      <span className={indexColor}>{index}</span>
      <span
        aria-hidden="true"
        className={inverse ? "text-paper/30" : "text-line-bright"}
      >
        /
      </span>
      <span>{children}</span>
    </div>
  );
}
