import Navbar from "@/components/layout/Navbar";
import CrowdsourcingSection from "@/components/sections/CrowdsourcingSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import LeaderboardSection from "@/components/sections/LeaderboardSection";
import ParallaxHero from "@/components/sections/ParallaxHero";
import SecondHero from "@/components/sections/secondHero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="hero">
        <ParallaxHero />
      </div>
      <div id="hero-2">
        <SecondHero />
      </div>
      <EcosystemSection />
      <div id="mission">
        <CrowdsourcingSection />
      </div>
      <LeaderboardSection />
    </main>
  );
}
