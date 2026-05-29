import { Link } from "react-router-dom";
import { Download } from "lucide-react";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FormsList({ items }) {
  return (
    <>
      <ul
        className="grid grid-cols-1 md:grid-cols-2 gap-px"
        style={{ background: "var(--cream-line)" }}
      >
        {items.map((f) => (
          <li
            key={f.label}
            data-testid={`form-${slug(f.label)}`}
            style={{
              background: "var(--ivory)",
              padding: "1.8rem",
              listStyle: "none",
            }}
          >
            <a
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`form-link-${slug(f.label)}`}
              style={{ display: "block" }}
            >
              <div
                style={{
                  fontFamily: "Newsreader, Georgia, serif",
                  fontSize: "1.15rem",
                  color: "var(--ink)",
                  marginBottom: "0.4rem",
                }}
              >
                {f.label}
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "var(--ink-mute)",
                  marginBottom: "0.9rem",
                }}
              >
                {f.note}
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "var(--bronze-deep)",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  borderBottom: "1px solid var(--cream-line)",
                  paddingBottom: 2,
                }}
              >
                <Download size={14} />
                Download fillable PDF
              </div>
            </a>
          </li>
        ))}
      </ul>
      <p style={{ marginTop: "1.4rem", fontSize: "0.9rem", color: "var(--ink-mute)" }}>
        Completed forms can be returned to{" "}
        <a href="mailto:carol@qdropaq.com" style={{ color: "var(--bronze-deep)" }}>
          carol@qdropaq.com
        </a>{" "}
        — or, if you would rather talk through the questions first,{" "}
        <Link to="/contact" data-testid="forms-contact-link" className="link-quiet">
          contact Carol
        </Link>
        .
      </p>
    </>
  );
}
