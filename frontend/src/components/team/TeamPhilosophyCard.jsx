import { Link } from "react-router-dom";

export default function TeamPhilosophyCard() {
  return (
    <div className="card-paper" style={{ padding: "2.4rem" }}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <div className="eyebrow" style={{ marginBottom: "0.8rem" }}>A quiet philosophy</div>
          <h3 className="display-md" style={{ marginBottom: "0.9rem" }}>
            “We answer the phone. We read every document. We send back plain English.”
          </h3>
          <p>
            That has been the operating standard for three decades. It does not
            scale to a high-volume practice — and that is the point.
          </p>
        </div>
        <div className="md:col-span-4">
          <Link to="/contact" data-testid="team-cta-contact" className="btn-primary">
            Speak with Carol
          </Link>
        </div>
      </div>
    </div>
  );
}
