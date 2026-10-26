import { cn } from "@/lib/utils";

type CircuitLinesProps = {
  className?: string;
  animated?: boolean;
};

export function CircuitLines({
  className,
  animated = true,
}: CircuitLinesProps) {
  return (
    <svg
      viewBox="0 0 1200 600"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={cn("text-gold", className)}
    >
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M0 116h176V54h164v122h182" />
        <path d="M1200 76h-154v124h-148v116H758" />
        <path d="M0 424h146v96h176V382h152" />
        <path d="M1200 504h-126V396H936v-82" />
        <path d="M584 0v82h94v74" />
        <path d="M730 600v-92h-78v-74" />
        <path d="M408 0v46h-92v98" />
        <path d="M856 600v-58h106v-92" opacity="0.6" />
        <path d="M0 264h72v-62h84" opacity="0.6" />
        <path d="M1200 248h-82v58h-94" opacity="0.6" />
      </g>

      {animated && (
        <g
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
          className="animate-dash"
          style={{ strokeDasharray: "3 14" }}
          opacity="0.85"
        >
          <path d="M0 116h176V54h164v122h182" />
          <path d="M0 424h146v96h176V382h152" />
          <path d="M1200 504h-126V396H936v-82" />
        </g>
      )}

      <g fill="currentColor">
        <circle cx="176" cy="116" r="3" />
        <circle cx="522" cy="176" r="3" />
        <circle cx="340" cy="54" r="2.5" />
        <circle cx="898" cy="76" r="3" />
        <circle cx="758" cy="316" r="3" />
        <circle cx="322" cy="424" r="2.5" />
        <circle cx="472" cy="382" r="3" />
        <circle cx="936" cy="314" r="3" />
        <circle cx="584" cy="82" r="2.5" />
        <circle cx="678" cy="156" r="3" />
        <circle cx="730" cy="508" r="2.5" />
        <circle cx="408" cy="46" r="2.5" />
      </g>
    </svg>
  );
}
