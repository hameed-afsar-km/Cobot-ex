const tickerItems = [
  "Registration open",
  "Inter-College Expo",
  "Inter-College Hackathon",
  "10 November 2026",
  "Crescent Campus, Vandalur",
  "Scan for brochure",
];

export function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-paper/10 bg-night py-3.5 text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 scanlines opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-night to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-night to-transparent"
      />

      <p className="sr-only">
        Registration is open for the Inter-College Expo and Inter-College
        Hackathon on 10 November 2026 at Crescent Campus, Vandalur.
      </p>

      <div aria-hidden="true" className="flex w-max animate-ticker">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex min-w-full shrink-0 items-center justify-around"
          >
            {tickerItems.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-3 whitespace-nowrap px-5 font-mono text-[9px] uppercase tracking-[0.2em]"
              >
                <span className="size-1.5 shrink-0 bg-crimson-bright" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
