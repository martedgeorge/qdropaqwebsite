import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

export function IntakeSuccess() {
  return (
    <FadeIn>
      <div className="card-paper" style={{ padding: "2.6rem" }} data-testid="intake-success">
        <div className="eyebrow" style={{ marginBottom: "0.8rem" }}>Received</div>
        <h2 className="display-md" style={{ marginBottom: "0.9rem" }}>
          Thank you. We will read every word.
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Carol will respond within one business day with next steps, any
          follow-up questions, and a quote for the work — in plain English.
        </p>
        <Link to="/" className="link-quiet">Return home →</Link>
      </div>
    </FadeIn>
  );
}

export function IntakeContactAside() {
  return (
    <FadeIn delay={80}>
      <div className="card-paper" style={{ padding: "1.8rem" }}>
        <div className="eyebrow" style={{ marginBottom: "0.8rem" }}>
          Or speak with us directly
        </div>
        <div
          style={{
            fontFamily: "Newsreader, Georgia, serif",
            fontSize: "1.25rem",
            color: "var(--ink)",
            marginBottom: "0.4rem",
          }}
        >
          Carol Owen
        </div>
        <div style={{ fontSize: "0.92rem", color: "var(--ink-mute)" }}>
          Principal · QDRO Specialist
        </div>
        <div
          style={{
            borderTop: "1px solid var(--cream-line)",
            marginTop: "1.2rem",
            paddingTop: "1.2rem",
            fontSize: "0.95rem",
          }}
        >
          <a
            href="tel:2157829847"
            data-testid="start-phone"
            style={{ display: "block", color: "var(--ink)", marginBottom: "0.4rem" }}
          >
            215-782-9847
          </a>
          <a href="mailto:carol@qdropaq.com" data-testid="start-email" style={{ color: "var(--ink)" }}>
            carol@qdropaq.com
          </a>
        </div>
        <p style={{ marginTop: "1.4rem", fontSize: "0.9rem" }}>
          No phone trees. No paralegal triage. You will speak with the specialist
          who would handle your matter.
        </p>
      </div>
    </FadeIn>
  );
}
