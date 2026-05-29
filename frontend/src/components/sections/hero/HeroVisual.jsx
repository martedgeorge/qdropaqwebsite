import React from "react";
import FadeIn from "@/components/FadeIn";
import {
  HERO_IMAGE_HEIGHT,
  HERO_BADGE_MAX_WIDTH,
  HERO_BADGE_OFFSET,
  REVEAL_VISIBLE_DELAY,
} from "@/constants/ui";

function AuthoredStandardsBadge() {
  return (
    <div
      className="card-paper"
      style={{
        position: "absolute",
        bottom: -HERO_BADGE_OFFSET,
        left: -HERO_BADGE_OFFSET,
        padding: "1.1rem 1.3rem",
        maxWidth: HERO_BADGE_MAX_WIDTH,
        boxShadow: "0 18px 40px -28px rgba(30,42,55,0.25)",
      }}
    >
      <div
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
        }}
      >
        Authored Standards
      </div>
      <div
        style={{
          fontFamily: "Newsreader, Georgia, serif",
          fontSize: "1.05rem",
          color: "var(--ink)",
          marginTop: "0.35rem",
          lineHeight: 1.35,
        }}
      >
        Benchmark works by Mark K. Altschuler, QDROPAQ Actuary.
      </div>
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className="lg:col-span-5">
      <FadeIn delay={REVEAL_VISIBLE_DELAY}>
        <div style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Professional advisors in conversation"
            data-testid="hero-image"
            style={{
              width: "100%",
              height: HERO_IMAGE_HEIGHT,
              objectFit: "cover",
              borderRadius: 3,
              filter: "saturate(0.9) contrast(0.96)",
            }}
          />
          <AuthoredStandardsBadge />
        </div>
      </FadeIn>
    </div>
  );
}
