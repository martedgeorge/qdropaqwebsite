import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Services from "@/components/sections/Services";
import PositionQuote from "@/components/sections/PositionQuote";
import Differentiators from "@/components/sections/Differentiators";
import TeamPanel from "@/components/sections/TeamPanel";
import PrimerLeadMagnet from "@/components/sections/PrimerLeadMagnet";
import ClosingCTA from "@/components/sections/ClosingCTA";
import useDocumentMeta from "@/hooks/useDocumentMeta";

export default function Home() {
  useDocumentMeta();
  return (
    <main data-testid="page-home">
      <Hero />
      <StatsBar />
      <Services />
      <PositionQuote />
      <Differentiators />
      <TeamPanel />
      <PrimerLeadMagnet />
      <ClosingCTA />
    </main>
  );
}
