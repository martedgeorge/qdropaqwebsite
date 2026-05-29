
export default function ContactTile({ icon, label, value, href, hint, testid }) {
  const Inner = (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: "var(--bronze-deep)",
          marginBottom: "0.7rem",
        }}
      >
        {icon}
        <span style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
          {label}
        </span>
      </div>
      <div style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.15rem", color: "var(--ink)" }}>
        {value}
      </div>
      {hint && (
        <div style={{ fontSize: "0.88rem", color: "var(--ink-mute)", marginTop: "0.5rem" }}>
          {hint}
        </div>
      )}
    </>
  );
  return (
    <div data-testid={testid} style={{ background: "var(--ivory)", padding: "1.8rem" }}>
      {href ? <a href={href}>{Inner}</a> : Inner}
    </div>
  );
}
