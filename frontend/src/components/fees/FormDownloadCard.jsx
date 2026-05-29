import { Download } from "lucide-react";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const CELL_STYLE = {
  background: "var(--ivory)",
  padding: "1.8rem",
  listStyle: "none",
};

const DOWNLOAD_LINK_STYLE = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  color: "var(--bronze-deep)",
  fontSize: "0.88rem",
  fontWeight: 500,
  borderBottom: "1px solid var(--cream-line)",
  paddingBottom: 2,
};

export default function FormDownloadCard({ form }) {
  const id = slug(form.label);
  return (
    <li data-testid={`form-${id}`} style={CELL_STYLE}>
      <a
        href={form.href}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`form-link-${id}`}
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
          {form.label}
        </div>
        <div style={{ fontSize: "0.9rem", color: "var(--ink-mute)", marginBottom: "0.9rem" }}>
          {form.note}
        </div>
        <div style={DOWNLOAD_LINK_STYLE}>
          <Download size={14} />
          Download fillable PDF
        </div>
      </a>
    </li>
  );
}
