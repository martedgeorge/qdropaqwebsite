import React from "react";
import FadeIn from "@/components/FadeIn";

const STATS = [
  { id: "years", value: "30+", label: "Years of practice" },
  { id: "count", value: "40,000+", label: "Valuations & QDROs" },
  { id: "founded", value: "1995", label: "Established" },
  { id: "fee", value: "$495", label: "Flat QDRO fee" },
];

export default function StatsBar() {
  return (
    <section style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="container-quiet">
        <div className="hairline" style={{ borderTopColor: "var(--cream-line)" }} />
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
            {STATS.map((s) => (
              <div key={s.id} data-testid={`stat-${s.id}`}>
                <div
                  style={{
                    fontFamily: "Newsreader, Georgia, serif",
                    fontSize: "2rem",
                    color: "var(--ink)",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--ink-mute)",
                    marginTop: "0.6rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
        <div className="hairline" />
      </div>
    </section>
  );
}
