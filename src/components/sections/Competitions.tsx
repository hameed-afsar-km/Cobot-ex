import {
  Code2,
  Cpu,
  ListOrdered,
  Radio,
  Terminal,
  Trophy,
  type LucideIcon,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { HudCorners } from "@/components/ui/HudCorners";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollText } from "@/components/ui/ScrollText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusChip } from "@/components/ui/StatusChip";
import { CircuitLines } from "@/components/visuals/CircuitLines";
import { RobotMark } from "@/components/visuals/RobotMark";
import { competitions } from "@/config/event";

const [expo, hackathon] = competitions;

const expoTags: { label: string; icon: LucideIcon }[] = [
  { label: "Round-based", icon: ListOrdered },
  { label: "Live leaderboard", icon: Radio },
  { label: "Side quest", icon: Trophy },
];

const hackathonTags: { label: string; icon: LucideIcon; value: string }[] = [
  { label: "Mode", icon: Code2, value: "Build" },
  { label: "Link", icon: Cpu, value: "Secure" },
  { label: "Status", icon: Terminal, value: "Open" },
];

export function Competitions() {
  return (
    <>
      {/* ── Section 01: Inter-College Expo ── */}
      <section
        id="expo"
        className="relative scroll-mt-20 overflow-hidden bg-crimson py-14 sm:py-20 text-paper lg:flex lg:h-[100svh] lg:items-center lg:py-12"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-cream opacity-30" />
          <CircuitLines className="absolute inset-0 size-full text-gold-bright/20 opacity-40" />
          <div className="absolute -left-20 sm:-left-32 top-1/2 size-[18rem] sm:size-[32rem] -translate-y-1/2 rounded-full bg-gold/10 blur-[100px] sm:blur-[120px]" />
          <RobotMark className="absolute -right-10 top-14 hidden h-[34rem] w-auto text-gold/10 xl:block" />
          <span className="absolute -right-6 bottom-0 select-none font-display text-[10rem] sm:text-[18rem] lg:text-[22rem] leading-none text-outline-cream opacity-40 sm:opacity-60 pointer-events-none">
            01
          </span>
        </div>

        <div className="container-page relative grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <SectionLabel index="01" tone="gold" inverse>
                {expo.title}
              </SectionLabel>
              <StatusChip className="text-gold-bright">
                Live leaderboard
              </StatusChip>
            </div>

            <ScrollText
              as="h2"
              className="mt-5 sm:mt-6 font-display text-[clamp(2.35rem,7vw,5.5rem)] uppercase leading-[0.9] text-paper"
              lines={[
                { text: "Inter-College" },
                { text: "Expo", className: "text-gold-bright" },
              ]}
            />

            <p className="mt-4 sm:mt-6 max-w-xl text-[14px] leading-relaxed text-paper/80 sm:text-base sm:leading-8">
              {expo.description}
            </p>

            <div className="relative mt-6 sm:mt-8 grid grid-cols-1 divide-y divide-line border border-gold/60 bg-paper text-ink sm:grid-cols-3 sm:divide-x sm:divide-y-0 w-full overflow-hidden">
              <HudCorners className="text-crimson/50" />
              {expo.meta.map((item, index) => (
                <div key={item.label} className="px-4 py-3.5 sm:px-5 sm:py-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[7px] text-crimson/50">
                      0{index + 1}
                    </span>
                    <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-mist">
                      {item.label}
                    </dt>
                  </div>
                  <dd className="mt-1 text-[14px] sm:text-[15px] font-semibold text-ink sm:font-normal">{item.value}</dd>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col items-start gap-2.5 sm:flex-row sm:items-center">
              <ButtonLink href={expo.url} external variant="gold">
                {expo.cta}
              </ButtonLink>
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-paper/60">
                Official Google Form - opens in a new tab
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-paper/15 pt-4 sm:pt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/45">
              <span>Format / 01</span>
              <span>Sequence / rounds</span>
              <span className="flex items-center gap-2 text-gold-bright">
                <span
                  aria-hidden="true"
                  className="size-1 animate-blink bg-gold-bright"
                />
                Registration open
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="w-full">
            <ExpoRadar />
          </Reveal>
        </div>
      </section>

      {/* ── Section 02: Inter-College Hackathon ── */}
      <section
        id="hackathon"
        className="relative scroll-mt-20 overflow-hidden bg-gold-soft py-14 sm:py-20 text-ink lg:flex lg:h-[100svh] lg:items-center lg:py-12"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <CircuitLines className="absolute inset-0 size-full text-crimson/20 opacity-50" />
          <div className="absolute -right-20 sm:-right-32 top-1/2 size-[18rem] sm:size-[32rem] -translate-y-1/2 rounded-full bg-paper/40 blur-[90px] sm:blur-[110px]" />
          <RobotMark className="absolute -left-14 bottom-0 hidden h-[34rem] w-auto text-crimson/10 xl:block" />
          <span className="absolute -left-6 bottom-0 select-none font-display text-[10rem] sm:text-[18rem] lg:text-[22rem] leading-none text-outline-ink opacity-40 sm:opacity-70 pointer-events-none">
            02
          </span>
        </div>

        <div className="container-page relative grid items-center gap-10 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="order-2 w-full lg:order-1">
            <HackathonPhaseBoard />
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <SectionLabel index="02" tone="crimson">
                {hackathon.title}
              </SectionLabel>
              <StatusChip className="text-crimson">
                Build mode active
              </StatusChip>
            </div>

            <ScrollText
              as="h2"
              className="mt-5 sm:mt-6 font-display text-[clamp(2.35rem,7vw,5.5rem)] uppercase leading-[0.9] text-ink"
              lines={[
                { text: "Inter-College" },
                { text: "Hackathon", className: "text-crimson" },
              ]}
            />

            <p className="mt-4 sm:mt-6 max-w-xl text-[14px] leading-relaxed text-ink/70 sm:text-base sm:leading-8">
              {hackathon.description}
            </p>

            <div className="relative mt-6 sm:mt-8 border border-ink/15 bg-paper p-4 sm:p-5 shadow-[0_16px_40px_rgba(26,13,11,0.08)]">
              <HudCorners className="text-crimson/40" />
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-crimson">
                  Registration
                </p>
                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-mist">
                  Form / encrypted
                </span>
              </div>
              <p className="mt-2.5 max-w-md text-[13px] leading-relaxed text-ink/70">
                Registration for the Inter-College Hackathon is open through the
                official Google Form.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col items-start gap-2.5 sm:flex-row sm:items-center">
              <ButtonLink href={hackathon.url} external variant="crimson">
                {hackathon.cta}
              </ButtonLink>
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink/55">
                Official Google Form - opens in a new tab
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink/15 pt-4 sm:pt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/50">
              <span>Format / 02</span>
              <span>Sequence / build</span>
              <span className="flex items-center gap-2 text-crimson">
                <span
                  aria-hidden="true"
                  className="size-1 animate-blink bg-crimson"
                />
                Registration open
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ExpoRadar() {
  return (
    <div className="relative mx-auto w-full max-w-[28rem] sm:max-w-[31rem]">
      <div aria-hidden="true" className="absolute -inset-2 sm:-inset-3 border border-gold/25" />

      <div className="relative overflow-hidden border border-gold/60 bg-paper text-ink shadow-[0_28px_70px_rgba(80,4,8,0.35)]">
        <HudCorners className="text-crimson/60" />

        <div className="flex items-center justify-between border-b border-line bg-sand px-3.5 py-2.5 sm:px-4 sm:py-3">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-crimson font-semibold">
            Expo / control
          </span>
          <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-mist">
            <span
              aria-hidden="true"
              className="size-1.5 animate-blink bg-crimson"
            />
            Live
          </span>
        </div>

        <div className="relative aspect-square overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 bg-grid-fine opacity-60" />

          <div
            aria-hidden="true"
            className="absolute inset-0 animate-[spin_22s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(181,20,27,0.2)_26deg,transparent_56deg)] motion-reduce:animate-none"
          />

          <svg
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden="true"
            className="absolute inset-0 size-full text-crimson/35"
          >
            <g stroke="currentColor" strokeWidth="0.8">
              <circle cx="200" cy="200" r="62" />
              <circle cx="200" cy="200" r="108" opacity="0.7" />
              <circle cx="200" cy="200" r="154" opacity="0.4" />
              <circle cx="200" cy="200" r="192" opacity="0.2" />
              <path d="M8 200h384M200 8v384" opacity="0.25" />
            </g>
            {Array.from({ length: 32 }).map((_, index) => {
              const angle = (index * 11.25 * Math.PI) / 180;
              const outer = 192;
              const inner = index % 4 === 0 ? 178 : 186;
              return (
                <line
                  key={index}
                  x1={200 + Math.cos(angle) * inner}
                  y1={200 + Math.sin(angle) * inner}
                  x2={200 + Math.cos(angle) * outer}
                  y2={200 + Math.sin(angle) * outer}
                  stroke="currentColor"
                  strokeWidth="0.9"
                  opacity="0.8"
                />
              );
            })}
          </svg>

          <span
            aria-hidden="true"
            className="absolute left-[31%] top-[36%] size-2 animate-pulse rounded-full bg-crimson"
          />
          <span
            aria-hidden="true"
            className="absolute right-[27%] top-[57%] size-1.5 animate-pulse rounded-full bg-gold"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-[28%] left-[44%] size-1.5 animate-pulse rounded-full bg-crimson/70"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-crimson font-semibold">
              Competition 01
            </span>
            <span className="mt-1 font-display text-[3.8rem] sm:text-[4.75rem] md:text-[5.5rem] leading-none text-ink">
              EXPO
            </span>
            <span className="mt-2 border border-crimson/25 px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.2em] text-crimson/80">
              Target / acquired
            </span>
          </div>
        </div>

        <ul className="grid grid-cols-1 divide-y divide-line border-t border-line bg-sand xs:grid-cols-3 xs:divide-x xs:divide-y-0">
          {expoTags.map((tag) => (
            <li
              key={tag.label}
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-center font-mono text-[8px] uppercase tracking-[0.1em] text-ink/75"
            >
              <tag.icon
                aria-hidden="true"
                className="size-3.5 shrink-0 text-crimson"
                strokeWidth={1.7}
              />
              {tag.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-2.5 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-ink/45">
        <span>Radar / 01</span>
        <span>Scan 360&deg;</span>
        <span className="text-crimson font-semibold">Signal stable</span>
      </div>
    </div>
  );
}

const hackathonPhases = [
  { index: "01", label: "Ideate", detail: "Define the problem and form your team" },
  { index: "02", label: "Design", detail: "Architect your solution and scope" },
  { index: "03", label: "Build", detail: "Develop, test, and iterate rapidly" },
  { index: "04", label: "Present", detail: "Demo to judges and compete for the win" },
];

function HackathonPhaseBoard() {
  return (
    <div className="relative mx-auto w-full max-w-[28rem] sm:max-w-[31rem]">
      <div
        aria-hidden="true"
        className="absolute -inset-2 sm:-inset-3 border border-crimson/20"
      />

      <div className="relative overflow-hidden border border-ink/20 bg-paper text-ink shadow-[0_28px_70px_rgba(26,13,11,0.16)]">
        <HudCorners className="text-crimson/50" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-crimson-deep bg-crimson px-3.5 py-2.5 sm:px-4 sm:py-3">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <RobotMark className="h-7 sm:h-8 w-auto text-gold-bright" />
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-paper font-semibold">
              Hackathon / phases
            </span>
          </div>
          <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-paper/70">
            <span aria-hidden="true" className="size-1.5 animate-blink bg-gold-bright rounded-full" />
            Open
          </span>
        </div>

        {/* Phase nodes */}
        <div className="relative p-4 sm:p-7 md:p-8">
          <div aria-hidden="true" className="absolute inset-0 bg-grid-fine opacity-50" />

          <div className="relative flex flex-col gap-0">
            {hackathonPhases.map((phase, i) => (
              <div key={phase.index} className="flex items-stretch gap-3 sm:gap-4">
                {/* Left: node + connector */}
                <div className="flex flex-col items-center">
                  <div className="relative z-10 flex size-7 sm:size-8 shrink-0 items-center justify-center border border-crimson/40 bg-paper">
                    <span className="font-mono text-[8px] font-bold text-crimson">{phase.index}</span>
                  </div>
                  {i < hackathonPhases.length - 1 && (
                    <div className="w-px flex-1 bg-crimson/20 my-1" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-4 sm:pb-5">
                  <p className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-crimson">
                    {phase.label}
                  </p>
                  <p className="mt-0.5 text-[11px] sm:text-[12px] leading-relaxed text-ink/70">{phase.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <span className="mt-2 sm:mt-4 block font-display text-[3.8rem] sm:text-[4.5rem] md:text-[5.5rem] leading-none text-outline-crimson">
            HACK
          </span>
        </div>

        {/* Footer stats */}
        <div className="grid grid-cols-3 divide-x divide-line border-t border-line bg-sand">
          {hackathonTags.map((tag) => (
            <div key={tag.label} className="px-2.5 py-2.5 sm:px-3 sm:py-3 text-center">
              <p className="flex items-center justify-center gap-1 font-mono text-[7px] uppercase tracking-[0.12em] text-mist">
                <tag.icon
                  aria-hidden="true"
                  className="size-3 text-crimson shrink-0"
                  strokeWidth={1.7}
                />
                <span className="truncate">{tag.label}</span>
              </p>
              <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-ink/75 font-semibold">
                {tag.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2.5 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-ink/45">
        <span>Phase board / 02</span>
        <span>Build. Solve. Compete.</span>
        <span className="flex items-center gap-1.5 text-crimson font-semibold">
          <span
            aria-hidden="true"
            className="size-1 animate-blink bg-crimson"
          />
          Registration open
        </span>
      </div>
    </div>
  );
}
