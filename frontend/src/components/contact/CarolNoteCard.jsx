
export default function CarolNoteCard() {
  return (
    <div className="card-paper" style={{ padding: "2rem" }}>
      <div className="eyebrow" style={{ marginBottom: "0.8rem" }}>A note from Carol</div>
      <p className="serif-italic" style={{ fontSize: "1.15rem", color: "var(--ink)", lineHeight: 1.5 }}>
        “When you call, you will reach me. If I am on another line, I will return
        your call the same day. That is the standard we have kept for three
        decades, and we intend to keep keeping it.”
      </p>
      <div style={{ marginTop: "1.4rem", fontSize: "0.9rem", color: "var(--ink-mute)" }}>
        Carol Owen — Principal
      </div>
    </div>
  );
}
