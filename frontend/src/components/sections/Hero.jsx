import React from "react";
import HeroContent from "@/components/sections/hero/HeroContent";
import HeroVisual from "@/components/sections/hero/HeroVisual";

export default function Hero() {
  return (
    <section style={{ paddingTop: "5.5rem", paddingBottom: "4rem" }}>
      <div className="container-quiet grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
