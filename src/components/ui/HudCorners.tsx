import { cn } from "@/lib/utils";

type HudCornersProps = {
  className?: string;
};

export function HudCorners({ className }: HudCornersProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 text-gold",
        className,
      )}
    >
      <span className="absolute left-0 top-0 size-4 border-l border-t border-current" />
      <span className="absolute right-0 top-0 size-4 border-r border-t border-current" />
      <span className="absolute bottom-0 left-0 size-4 border-b border-l border-current" />
      <span className="absolute bottom-0 right-0 size-4 border-b border-r border-current" />
    </div>
  );
}
