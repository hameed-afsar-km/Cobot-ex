import {
  ArrowUpRight,
  CalendarClock,
  CalendarDays,
  MapPin,
  type LucideIcon,
} from "lucide-react";

import { HudCorners } from "@/components/ui/HudCorners";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollText } from "@/components/ui/ScrollText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusChip } from "@/components/ui/StatusChip";
import { CircuitLines } from "@/components/visuals/CircuitLines";
import { RobotMark } from "@/components/visuals/RobotMark";
import { competitions, eventConfig } from "@/config/event";
import { cn } from "@/lib/utils";

type DetailItem = {
  index: string;
  label: string;
  primary: string;
  secondary?: string;
  code: string;
  icon: LucideIcon;
  tone: "crimson" | "paper" | "gold";
};

const details: DetailItem[] = [
  {
    index: "01",
    label: eventConfig.deadline.label,
    primary: eventConfig.deadline.display,
    secondary: eventConfig.deadline.time,
    code: "DL-05",
    icon: CalendarClock,
    tone: "crimson",
  },
  {
    index: "02",
    label: eventConfig.date.label,
    primary: eventConfig.date.display,
    code: "EV-10",
    icon: CalendarDays,
    tone: "paper",
  },
  {
    index: "03",
    label: eventConfig.venue.label,
    primary: eventConfig.venue.name,
    secondary: eventConfig.venue.area,
    code: "VN-01",
    icon: MapPin,
    tone: "gold",
  },
];

const [expo, hackathon] = competitions;

export function EventDetails() {
  return (
    <section
      id="details"
      className="relative scroll-mt-20 overflow-hidden bg-sand py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-60 mask-fade-b" />
        <CircuitLines className="absolute inset-0 size-full text-crimson/10 opacity-50" />
        <div className="absolute right-0 top-0 size-[30rem] rounded-full bg-paper/50 blur-[110px]" />
        <RobotMark className="absolute -right-16 bottom-[-4rem] hidden h-[30rem] w-auto text-crimson/10 xl:block" />
      </div>

      <div className="container-page relative">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <SectionLabel index="04" tone="crimson">
                  Event details
                </SectionLabel>
                <StatusChip className="text-crimson">Mission timeline</StatusChip>
              </div>
              <ScrollText
                as="h2"
                className="mt-6 font-display text-[clamp(2.85rem,6vw,5rem)] uppercase leading-[0.88] text-ink"
                lines={[{ text: "The essentials" }]}
              />
            </div>
            <p className="max-w-xs text-[13px] leading-6 text-ink/65 md:pb-1 md:text-right">
              Mark the dates and get your team registered before the deadline.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
            <div
              aria-hidden="true"
              className="absolute inset-x-[8%] top-8 hidden h-px bg-line-bright/60 md:block"
            />
            {details.map((detail) => (
              <DetailCard key={detail.label} detail={detail} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-8 flex flex-col gap-5 border-t border-line-bright pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md font-mono text-[9px] uppercase leading-5 tracking-[0.16em] text-mist">
              Registration is open through official Google Forms. Secure your
              slot before the deadline.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
              <FormLink href={expo.url} label="Expo form" />
              <FormLink href={hackathon.url} label="Hackathon form" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DetailCard({ detail }: { detail: DetailItem }) {
  const isCrimson = detail.tone === "crimson";
  const isGold = detail.tone === "gold";

  return (
    <article
      className={cn(
        "relative flex min-h-[16.5rem] flex-col border p-6 shadow-[0_18px_45px_rgba(26,13,11,0.08)] sm:p-7",
        isCrimson && "border-crimson-deep bg-crimson text-paper",
        detail.tone === "paper" && "border-line bg-paper text-ink",
        isGold && "border-gold bg-gold-soft text-ink",
      )}
    >
      <HudCorners
        className={cn(
          isCrimson ? "text-gold-bright/60" : "text-crimson/40",
        )}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span
            className={cn(
              "font-mono text-[7px] tracking-[0.16em]",
              isCrimson ? "text-gold-bright/70" : "text-crimson/50",
            )}
          >
            {detail.index}
          </span>
          <p
            className={cn(
              "font-mono text-[9px] font-semibold uppercase tracking-[0.18em]",
              isCrimson ? "text-gold-bright" : "text-mist",
            )}
          >
            {detail.label}
          </p>
        </div>
        <span
          className={cn(
            "flex size-9 items-center justify-center border",
            isCrimson && "border-paper/25 text-gold-bright",
            detail.tone === "paper" && "border-line text-crimson",
            isGold && "border-ink/20 text-crimson",
          )}
        >
          <detail.icon
            aria-hidden="true"
            className="size-4"
            strokeWidth={1.7}
          />
        </span>
      </div>

      <p className="mt-7 font-display text-[clamp(2rem,3.4vw,2.75rem)] uppercase leading-[0.95]">
        {detail.primary}
      </p>
      {detail.secondary && (
        <p
          className={cn(
            "mt-2 font-mono text-[10px] uppercase tracking-[0.14em]",
            isCrimson ? "text-paper/70" : "text-ink/60",
          )}
        >
          {detail.secondary}
        </p>
      )}

      <div
        className={cn(
          "mt-auto flex items-center justify-between border-t pt-4",
          isCrimson ? "border-paper/20" : "border-ink/10",
        )}
      >
        <span
          className={cn(
            "font-mono text-[8px] uppercase tracking-[0.16em]",
            isCrimson ? "text-paper/55" : "text-ink/45",
          )}
        >
          COBOT-EX / {detail.code}
        </span>
        <span
          className={cn(
            "flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.14em]",
            isCrimson ? "text-gold-bright" : "text-crimson",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "size-1 animate-blink",
              isCrimson ? "bg-gold-bright" : "bg-crimson",
            )}
          />
          Locked
        </span>
      </div>
    </article>
  );
}

function FormLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-crimson transition-colors hover:text-crimson-deep"
    >
      <span className="border-b border-crimson/40 pb-0.5">{label}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
