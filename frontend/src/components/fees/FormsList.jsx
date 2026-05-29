import { Link } from "react-router-dom";
import FormDownloadCard from "@/components/fees/FormDownloadCard";

export default function FormsList({ items }) {
  return (
    <>
      <ul
        className="grid grid-cols-1 md:grid-cols-2 gap-px"
        style={{ background: "var(--cream-line)" }}
      >
        {items.map((f) => (
          <FormDownloadCard key={f.label} form={f} />
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
