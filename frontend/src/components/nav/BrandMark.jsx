import React from "react";
import { Link } from "react-router-dom";

export default function BrandMark() {
  return (
    <Link to="/" data-testid="brand-mark" className="flex items-center gap-3">
      <span
        style={{
          fontFamily: "Newsreader, Georgia, serif",
          fontSize: "1.45rem",
          fontWeight: 500,
          letterSpacing: "0.01em",
          color: "var(--ink)",
        }}
      >
        QDROPAQ
      </span>
      <span
        className="hidden sm:inline-block"
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
          borderLeft: "1px solid var(--cream-line)",
          paddingLeft: "0.9rem",
        }}
      >
        Est. 1995
      </span>
    </Link>
  );
}
