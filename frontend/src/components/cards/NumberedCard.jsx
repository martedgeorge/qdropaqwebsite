
// A numbered tile used by Differentiators, Process, Unique. Single small primitive
// keeps every "card with a numeral + heading + paragraph" consistent.
export default function NumberedCard({ numeral, heading, body, headingSize = "1.2rem", testid }) {
  return (
    <div
      data-testid={testid}
      style={{ background: "var(--ivory)", padding: "2.2rem 1.8rem", height: "100%" }}
    >
      <div className="numeral" style={{ marginBottom: "1.2rem" }}>{numeral}</div>
      <h3
        style={{
          fontFamily: "Newsreader, Georgia, serif",
          fontSize: headingSize,
          marginBottom: "0.6rem",
          color: "var(--ink)",
        }}
      >
        {heading}
      </h3>
      <p style={{ fontSize: "0.95rem" }}>{body}</p>
    </div>
  );
}
