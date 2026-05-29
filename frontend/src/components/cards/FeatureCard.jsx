
// Plain "title + body" tile used inside Services and other simple grids.
export default function FeatureCard({ title, body, testid }) {
  return (
    <div
      data-testid={testid}
      style={{ background: "var(--ivory)", padding: "2rem 1.8rem", height: "100%" }}
    >
      <h3
        style={{
          fontFamily: "Newsreader, Georgia, serif",
          fontSize: "1.25rem",
          color: "var(--ink)",
          marginBottom: "0.7rem",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "0.97rem" }}>{body}</p>
    </div>
  );
}
