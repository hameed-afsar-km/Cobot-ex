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
      <section
        id="expo"
        className="relative scroll-mt-20 overflow-hidden bg-crimson py-20 text-paper sm:py-24 lg:flex lg:h-[100svh] lg:items-center lg:py-12"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid-cream opacity-30" />
          <CircuitLines className="absolute inset-0 size-full text-gold-bright/20 opacity-40" />
          <div className="absolute -left-32 top-1/2 size-[32rem] -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
          <RobotMark className="absolute -right-10 top-14 hidden h-[34rem] w-auto text-gold/10 xl:block" />
          <span className="absolute -right-10 bottom-0 select-none font-display text-[22rem] leading-none text-outline-cream opacity-60">
            01
          </span>
        </div>

        <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
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
              className="mt-6 font-display text-[clamp(2.85rem,6.4vw,5.5rem)] uppercase leading-[0.88] text-paper"
              lines={[
                { text: "Inter-College" },
                { text: "Expo", className: "text-gold-bright" },
              ]}
            />

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-paper/80 sm:text-base sm:leading-8">
              {expo.description}
            </p>

            <div className="relative mt-8 grid grid-cols-1 divide-y divide-line border border-gold/60 bg-paper text-ink sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <HudCorners className="text-crimson/50" />
              {expo.meta.map((item, index) => (
                <div key={item.label} className="px-5 py-4 sm:py-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[7px] text-crimson/50">
                      0{index + 1}
                    </span>
                    <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-mist">
                      {item.label}
                    </dt>
                  </div>
                  <dd className="mt-1.5 text-[15px] text-ink">{item.value}</dd>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={expo.url} external variant="gold">
                {expo.cta}
              </ButtonLink>
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-paper/60">
                Official Google Form - opens in a new tab
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-paper/15 pt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/45">
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

      <section
        id="hackathon"
        className="relative scroll-mt-20 overflow-hidden bg-gold-soft py-20 text-ink sm:py-24 lg:flex lg:h-[100svh] lg:items-center lg:py-12"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <CircuitLines className="absolute inset-0 size-full text-crimson/20 opacity-50" />
          <div className="absolute -right-32 top-1/2 size-[32rem] -translate-y-1/2 rounded-full bg-paper/40 blur-[110px]" />
          <RobotMark className="absolute -left-14 bottom-0 hidden h-[34rem] w-auto text-crimson/10 xl:block" />
          <span className="absolute -left-8 bottom-0 select-none font-display text-[22rem] leading-none text-outline-ink opacity-70">
            02
          </span>
        </div>

        <div className="container-page relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="order-2 w-full lg:order-1">
            <HackathonTerminal />
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
              className="mt-6 font-display text-[clamp(2.85rem,6.4vw,5.5rem)] uppercase leading-[0.88] text-ink"
              lines={[
                { text: "Inter-College" },
                { text: "Hackathon", className: "text-crimson" },
              ]}
            />

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink/70 sm:text-base sm:leading-8">
              {hackathon.description}
            </p>

            <div className="relative mt-8 border border-ink/15 bg-paper p-5 shadow-[0_16px_40px_rgba(26,13,11,0.08)]">
              <HudCorners className="text-crimson/40" />
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-crimson">
                  Registration
                </p>
                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-mist">
                  Form / encrypted
                </span>
              </div>
              <p className="mt-3 max-w-md text-[13px] leading-6 text-ink/70">
                Registration for the Inter-College Hackathon is open through the
                official Google Form.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={hackathon.url} external variant="crimson">
                {hackathon.cta}
              </ButtonLink>
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink/55">
                Official Google Form - opens in a new tab
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/15 pt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/50">
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
    <div className="relative mx-auto w-full max-w-[31rem]">
      <div aria-hidden="true" className="absolute -inset-3 border border-gold/25" />

      <div className="relative overflow-hidden border border-gold/60 bg-paper text-ink shadow-[0_28px_70px_rgba(80,4,8,0.35)]">
        <HudCorners className="text-crimson/60" />

        <div className="flex items-center justify-between border-b border-line bg-sand px-4 py-3">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-crimson">
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

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-crimson">
              Competition 01
            </span>
            <span className="mt-2 font-display text-[4.75rem] leading-none text-ink sm:text-[5.5rem]">
              EXPO
            </span>
            <span className="mt-2 border border-crimson/25 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.2em] text-crimson/80">
              Target / acquired
            </span>
          </div>
        </div>

        <ul className="grid grid-cols-1 divide-y divide-line border-t border-line bg-sand xs:grid-cols-3 xs:divide-x xs:divide-y-0">
          {expoTags.map((tag) => (
            <li
              key={tag.label}
              className="flex items-center justify-center gap-2 px-3 py-3 text-center font-mono text-[8px] uppercase tracking-[0.1em] text-ink/75"
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

      <div className="mt-3 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-ink/45">
        <span>Radar / 01</span>
        <span>Scan 360Â°</span>
        <span className="text-crimson">Signal stable</span>
      </div>
    </div>
  );
}

function HackathonTerminal() {
  return (
    <div className="relative mx-auto w-full max-w-[31rem]">
      <div
        aria-hidden="true"
        className="absolute -inset-3 border border-crimson/20"
      />

      <div className="relative overflow-hidden border border-ink/20 bg-paper text-ink shadow-[0_28px_70px_rgba(26,13,11,0.16)]">
        <HudCorners className="text-crimson/50" />

        <div className="flex items-center justify-between border-b border-crimson-deep bg-crimson px-4 py-3">
          <div className="flex items-center gap-3">
            <RobotMark className="h-8 w-auto text-gold-bright" />
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-paper">
              Hack / boot sequence
            </span>
          </div>
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-1.5 rounded-full bg-paper/80" />
            <span className="size-1.5 rounded-full bg-gold-bright" />
            <span className="size-1.5 rounded-full bg-paper/35" />
          </span>
        </div>

        <div className="relative p-6 sm:p-8">
          <div aria-hidden="true" className="absolute inset-0 bg-grid-fine opacity-50" />

          <div className="relative font-mono text-[11px] leading-7 text-ink/70 sm:text-xs sm:leading-8">
            <p>
              <span className="text-mist/60">01</span>{" "}
              <span className="text-gold">$</span> init --team
            </p>
            <p>
              <span className="text-mist/60">02</span>{" "}
              <span className="text-gold">$</span> build()
            </p>
            <p>
              <span className="text-mist/60">03</span>{" "}
              <span className="text-gold">$</span> solve()
            </p>
            <p>
              <span className="text-mist/60">04</span>{" "}
              <span className="text-gold">$</span> compete()
            </p>
            <p className="mt-2 text-mist/70">{"// status: registration open"}</p>
            <p className="flex items-center gap-2 text-crimson">
              <span className="text-mist/60">05</span> deploy
              <span
                aria-hidden="true"
                className="inline-block size-2 animate-blink bg-crimson"
              />
            </p>
          </div>

          <span className="mt-8 block font-display text-[4.5rem] leading-none text-outline-crimson sm:text-[5.5rem]">
            HACK
          </span>
        </div>

        <div className="grid grid-cols-3 divide-x divide-line border-t border-line bg-sand">
          {hackathonTags.map((tag) => (
            <div key={tag.label} className="px-3 py-3">
              <p className="flex items-center gap-1.5 font-mono text-[7px] uppercase tracking-[0.14em] text-mist">
                <tag.icon
                  aria-hidden="true"
                  className="size-3 text-crimson"
                  strokeWidth={1.7}
                />
                {tag.label}
              </p>
              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-ink/75">
                {tag.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-ink/45">
        <span>Terminal / 02</span>
        <span>Build. Solve. Compete.</span>
        <span className="flex items-center gap-1.5 text-crimson">
          <span
            aria-hidden="true"
            className="size-1 animate-blink bg-crimson"
          />
          Link stable
        </span>
      </div>
    </div>
  );
}

