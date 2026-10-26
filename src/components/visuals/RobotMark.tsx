import { cn } from "@/lib/utils";

type RobotMarkProps = {
  className?: string;
};

export function RobotMark({ className }: RobotMarkProps) {
  return (
    <svg
      viewBox="0 0 240 280"
      fill="none"
      aria-hidden="true"
      className={cn("text-gold", className)}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d="M120 44V22" />
        <circle cx="120" cy="16" r="5" />
        <path d="M104 22h32" opacity="0.55" />

        <path d="M64 78 78 54h84l14 24 12 26v58l-18 34H70l-18-34V104l12-26Z" />
        <path d="M56 108h-12l-8 12v34l8 12h12" />
        <path d="M184 108h12l8 12v34l-8 12h-12" />
        <path d="M62 166h116" opacity="0.55" />

        <path d="M78 88h84l8 18-8 34H78l-8-34 8-18Z" />
        <path d="M78 110h84" opacity="0.4" />
        <path d="M78 128h84" opacity="0.4" />

        <path d="M92 184h56" />
        <path d="M98 184v12M110 184v12M122 184v12M134 184v12M146 184v12" opacity="0.5" />

        <path d="M96 202h48v16H96z" />
        <path d="M86 218h68v18" />
        <path d="M86 236h-22l-10 14v20" />
        <path d="M154 236h22l10 14v20" />
        <path d="M120 218v38" opacity="0.4" />

        <path d="M38 118v-18h10" />
        <path d="M34 138h-12" />
        <path d="M202 118v-18h-10" />
        <path d="M206 138h12" />

        <path d="M64 168 44 188v30h18" opacity="0.45" />
        <path d="M176 168l20 20v30h-18" opacity="0.45" />
      </g>

      <g className="text-crimson-bright">
        <path d="M88 105h24l-6 14H94l-6-14Z" fill="currentColor" />
        <path d="M128 105h24l-6 14h-12l-6-14Z" fill="currentColor" />
        <circle cx="120" cy="16" r="9" fill="currentColor" opacity="0.18" />
      </g>

      <g
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
        strokeLinecap="square"
      >
        <path d="M26 86h-14v26" />
        <path d="M214 86h14v26" />
        <path d="M26 198h-14v30" />
        <path d="M214 198h14v30" />
        <path d="M56 250h-12v14" />
        <path d="M184 250h12v14" />
      </g>

      <g className="text-gold-bright">
        <circle cx="26" cy="86" r="2.4" fill="currentColor" />
        <circle cx="214" cy="86" r="2.4" fill="currentColor" />
        <circle cx="26" cy="228" r="2.4" fill="currentColor" />
        <circle cx="214" cy="228" r="2.4" fill="currentColor" />
      </g>

      <g className="animate-blink text-crimson-bright">
        <circle cx="120" cy="16" r="2.2" fill="currentColor" />
      </g>
    </svg>
  );
}
