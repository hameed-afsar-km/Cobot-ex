import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Ticker } from "@/components/ui/Ticker";
import { Brochure } from "@/components/sections/Brochure";
import { Competitions } from "@/components/sections/Competitions";
import { EventDetails } from "@/components/sections/EventDetails";
import { Hero } from "@/components/sections/Hero";
import { getAssets } from "@/lib/assets";

export default function Home() {
  const assets = getAssets();

  return (
    <>
      <Navbar logoSrc={assets.logo} />
      <main id="main">
        <Hero heroSrc={assets.hero} />
        <Ticker />
        <Competitions />
        <Brochure qrSrc={assets.qr} />
        <EventDetails />
      </main>
      <Footer logoSrc={assets.logo} />
    </>
  );
}
