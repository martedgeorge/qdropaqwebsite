export default function PrimerSuccess() {
  return (
    <div data-testid="primer-success">
      <div className="eyebrow" style={{ marginBottom: "0.8rem" }}>On its way</div>
      <h3
        style={{
          fontFamily: "Newsreader, Georgia, serif",
          fontSize: "1.45rem",
          color: "var(--ink)",
          marginBottom: "0.6rem",
        }}
      >
        Thank you — the primer is on its way.
      </h3>
      <p style={{ fontSize: "0.95rem" }}>
        We will email the PDF shortly. If you don’t see it, check your spam folder,
        then write to{" "}
        <a href="mailto:carol@qdropaq.com" style={{ color: "var(--bronze-deep)" }}>
          carol@qdropaq.com
        </a>
        .
      </p>
    </div>
  );
}
