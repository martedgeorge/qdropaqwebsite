import FadeIn from "@/components/FadeIn";

export default function PositionQuote() {
  return (
    <section
      style={{
        background: "var(--paper)",
        padding: "5rem 0",
        borderTop: "1px solid var(--cream-line)",
        borderBottom: "1px solid var(--cream-line)",
      }}
    >
      <div className="container-narrow text-center">
        <FadeIn>
          <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>Our position</div>
          <p
            className="serif-italic"
            style={{
              fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)",
              lineHeight: 1.45,
              color: "var(--ink)",
              maxWidth: "44ch",
              margin: "0 auto",
            }}
          >
            “A pension is often the largest asset in a marriage. It deserves
            the same care as the home — and a steadier hand than the typical
            template can provide.”
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              color: "var(--ink-mute)",
              fontSize: "0.88rem",
              letterSpacing: "0.06em",
            }}
          >
            QDROPAQ — Established 1995
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
