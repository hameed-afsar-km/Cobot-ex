import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { Ticker } from "@/components/ui/Ticker";
import { Brochure } from "@/components/sections/Brochure";
import { Competitions } from "@/components/sections/Competitions";
import { Hero } from "@/components/sections/Hero";
import { getAssets } from "@/lib/assets";

export default function Home() {
  const assets = getAssets();

  return (
    <>
      <SplashScreen logoSrc={assets.logo} />
      <Navbar logoSrc={assets.logo} />

      <main id="main" className="relative w-full overflow-x-hidden">
        {/* Section 1: Hero with live background parallax & loop elements */}
        <div className="relative z-10 w-full overflow-hidden">
          <Hero heroSrc={assets.hero} mobileHeroSrc={assets.heroMobile} />
        </div>

        {/* Section 2: Continuous Ticker */}
        <div className="relative z-[15] w-full">
          <Ticker />
        </div>

        {/* Section 3: Competitions (Expo & Hackathon) — natural smooth scroll, ZERO stickiness */}
        <div className="relative z-[20] w-full">
          <Competitions />
        </div>

        {/* Section 4: Brochure */}
        <div className="relative z-[30] w-full">
          <Brochure qrSrc={assets.qr} />
        </div>
      </main>

      {/* Footer — 70vh neat minimal finish */}
      <div className="relative z-[40] w-full">
        <Footer logoSrc={assets.logo} />
      </div>
    </>
  );
}
