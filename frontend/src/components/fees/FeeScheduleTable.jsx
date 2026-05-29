
const HEADER_STYLE = {
  borderBottom: "1px solid var(--cream-line)",
  padding: "1.2rem 1.6rem",
  display: "grid",
  gridTemplateColumns: "2fr 1fr 2fr",
  gap: 16,
  fontSize: "0.78rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--ink-mute)",
};

const rowStyle = (isLast) => ({
  padding: "1.4rem 1.6rem",
  display: "grid",
  gridTemplateColumns: "2fr 1fr 2fr",
  gap: 16,
  borderBottom: isLast ? "none" : "1px solid var(--cream-line)",
  alignItems: "baseline",
});

const idFor = (svc) => `fee-row-${svc.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function FeeScheduleTable({ rows }) {
  return (
    <div className="card-paper">
      <div style={HEADER_STYLE}>
        <div>Service</div>
        <div>Fee</div>
        <div className="hidden md:block">Notes</div>
      </div>
      {rows.map((f, i) => (
        <div key={f.svc} data-testid={idFor(f.svc)} style={rowStyle(i === rows.length - 1)}>
          <div style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.05rem", color: "var(--ink)" }}>
            {f.svc}
          </div>
          <div style={{ fontFamily: "Newsreader, Georgia, serif", fontSize: "1.05rem", color: "var(--bronze-deep)" }}>
            {f.price}
          </div>
          <div className="hidden md:block" style={{ fontSize: "0.92rem", color: "var(--ink-soft)" }}>
            {f.note}
          </div>
        </div>
      ))}
    </div>
  );
}
