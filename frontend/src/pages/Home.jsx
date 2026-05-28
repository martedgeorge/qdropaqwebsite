import React from "react";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Services from "@/components/sections/Services";
import PositionQuote from "@/components/sections/PositionQuote";
import Differentiators from "@/components/sections/Differentiators";
import TeamPanel from "@/components/sections/TeamPanel";
import ClosingCTA from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <main data-testid="page-home">
      <Hero />
      <StatsBar />
      <Services />
      <PositionQuote />
      <Differentiators />
      <TeamPanel />
      <ClosingCTA />
    </main>
  );
}
