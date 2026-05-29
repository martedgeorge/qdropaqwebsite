import { Link } from "react-router-dom";

const BY_THE_NUMBERS = [
  ["30+ years", "Practicing exclusively in pensions and QDROs"],
  ["40,000+", "Valuations and Orders completed"],
  ["Nationwide", "All 50 states; private, public, and government plans"],
  ["1:1 model", "Direct contact with your specialist"],
];

export default function ByTheNumbersCard() {
  return (
    <div className="card-paper" style={{ padding: "2rem" }}>
      <div className="eyebrow" style={{ marginBottom: "1rem" }}>By the numbers</div>
      <ul className="space-y-4">
        {BY_THE_NUMBERS.map(([k, v]) => (
          <li key={k} style={{ borderTop: "1px solid var(--cream-line)", paddingTop: "0.9rem" }}>
            <div style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.15rem", color: "var(--ink)" }}>
              {k}
            </div>
            <div style={{ fontSize: "0.92rem", color: "var(--ink-mute)", marginTop: "0.25rem" }}>
              {v}
            </div>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "1.6rem" }}>
        <Link to="/our-process" className="link-quiet" data-testid="about-cta-process">
          See how we work →
        </Link>
      </div>
    </div>
  );
}
