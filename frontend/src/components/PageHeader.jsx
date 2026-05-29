import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

export default function PageHeader({ eyebrow, title, lede, testid }) {
  return (
    <section style={{ paddingTop: "5rem", paddingBottom: "3rem" }} data-testid={testid}>
      <div className="container-quiet">
        <FadeIn>
          <div className="eyebrow" style={{ marginBottom: "1rem" }}>{eyebrow}</div>
          <h1 className="display-xl" style={{ maxWidth: "22ch", marginBottom: "1.4rem" }}>
            {title}
          </h1>
          {lede && (
            <p className="lead" style={{ maxWidth: "58ch" }}>{lede}</p>
          )}
        </FadeIn>
      </div>
      <div className="container-quiet" style={{ marginTop: "3rem" }}>
        <div className="hairline" />
      </div>
    </section>
  );
}

export function CrumbBack({ to = "/", label = "Back to home" }) {
  return (
    <div className="container-quiet" style={{ paddingTop: "2rem" }}>
      <Link to={to} className="link-quiet" data-testid="crumb-back">← {label}</Link>
    </div>
  );
}
