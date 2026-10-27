import { QrCode, ScanLine } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { HudCorners } from "@/components/ui/HudCorners";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollText } from "@/components/ui/ScrollText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusChip } from "@/components/ui/StatusChip";
import { CircuitLines } from "@/components/visuals/CircuitLines";
import { RobotMark } from "@/components/visuals/RobotMark";
import { eventConfig } from "@/config/event";

type BrochureProps = {
  qrSrc: string | null;
};

export function Brochure({ qrSrc }: BrochureProps) {
  return (
    <section
      id="brochure"
      className="relative scroll-mt-20 overflow-hidden border-b border-line bg-cream py-14 sm:py-20 lg:flex lg:h-[100svh] lg:items-center lg:py-12"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-70 mask-radial" />
        <CircuitLines className="absolute inset-0 size-full text-crimson/10 opacity-50" />
        <div className="absolute -left-16 sm:-left-32 top-1/2 size-[16rem] sm:size-[26rem] -translate-y-1/2 rounded-full bg-gold-soft/60 blur-[90px] sm:blur-[110px]" />
        <RobotMark className="absolute -left-16 bottom-0 hidden h-[28rem] w-auto text-crimson/10 xl:block" />
        <span className="absolute -right-4 sm:-right-8 top-8 select-none font-display text-[10rem] sm:text-[18rem] leading-none text-outline-ink opacity-40 sm:opacity-60 pointer-events-none">
          03
        </span>
      </div>

      <div className="container-page relative grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <SectionLabel index="03" tone="crimson">
              Brochure
            </SectionLabel>
            <StatusChip className="text-crimson">QR protocol ready</StatusChip>
          </div>

          <ScrollText
            as="h2"
            className="mt-5 sm:mt-6 font-display text-[clamp(2.35rem,7vw,5.5rem)] uppercase leading-[0.9] text-ink"
            lines={[
              { text: "Scan for" },
              { text: "Brochure", className: "text-crimson" },
            ]}
          />

          <p className="mt-6 max-w-lg text-[15px] leading-7 text-mist sm:text-base sm:leading-8">
            {eventConfig.brochure.description}
          </p>

          <div className="mt-8 flex items-start gap-3 border-t border-line-bright pt-6">
            <ScanLine
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-crimson"
              strokeWidth={1.7}
            />
            <p className="max-w-sm text-[13px] leading-6 text-ink/70">
              Open your phone camera, point it at the QR code, and follow the
              link to the brochure.
            </p>
          </div>

          <div className="mt-7 grid max-w-md grid-cols-3 divide-x divide-line border border-line bg-paper">
            <ScanFact label="Interface" value="Camera" />
            <ScanFact label="Link" value="Direct" />
            <ScanFact label="Status" value="Ready" />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <ButtonLink
              href={eventConfig.brochure.url}
              variant="crimson"
              size="md"
              external
            >
              Open brochure
            </ButtonLink>
            <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-mist">
              Or scan the QR code
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="w-full">
          <div className="relative mx-auto w-full max-w-[21rem] lg:ml-auto">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full border border-gold bg-gold-soft"
            />

            <div className="relative border-2 border-crimson bg-paper p-4 shadow-[0_24px_60px_rgba(26,13,11,0.14)] sm:p-5">
              <HudCorners className="text-crimson/60" />

              <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
                <div className="flex items-center gap-2.5">
                  <RobotMark className="h-7 w-auto text-crimson" />
                  <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-crimson">
                    Scan for brochure
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="size-2 animate-blink bg-gold"
                />
              </div>

              {qrSrc ? (
                <div className="relative mt-4 bg-white p-3">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={qrSrc}
                      alt={eventConfig.assets.qr.alt}
                      fill
                      sizes="(max-width: 1024px) 70vw, 300px"
                      unoptimized
                      className="object-contain"
                    />
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute left-2 top-2 size-5 border-l-2 border-t-2 border-crimson"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-2 top-2 size-5 border-r-2 border-t-2 border-crimson"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-2 size-5 border-b-2 border-l-2 border-crimson"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 right-2 size-5 border-b-2 border-r-2 border-crimson"
                  />
                </div>
              ) : (
                <div
                  role="img"
                  aria-label="Brochure QR code not yet available"
                  className="mt-4 flex aspect-square w-full flex-col items-center justify-center border border-dashed border-line-bright bg-sand/60 px-6 text-center"
                >
                  <QrCode
                    aria-hidden="true"
                    className="size-12 text-crimson/60"
                    strokeWidth={1.3}
                  />
                  <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.22em] text-mist">
                    QR code coming soon
                  </p>
                </div>
              )}

              <div className="mt-4 flex items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.16em]">
                <span className="text-mist">Scan with your phone</span>
                <span className="flex items-center gap-2 text-crimson">
                  <span
                    aria-hidden="true"
                    className="size-1.5 animate-blink bg-crimson"
                  />
                  Brochure
                </span>
              </div>
            </div>

            <span
              aria-hidden="true"
              className="absolute -left-3 -top-3 size-7 border-l-2 border-t-2 border-gold"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ScanFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-3 py-3">
      <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-mist">
        {label}
      </p>
      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-ink/75">
        {value}
      </p>
    </div>
  );
}

