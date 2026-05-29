import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS, navTestId, mobileNavTestId } from "@/constants/navLinks";

const desktopLinkStyle = ({ isActive }) => ({
  fontSize: "0.92rem",
  color: isActive ? "var(--ink)" : "var(--ink-soft)",
  borderBottom: isActive ? "1px solid var(--bronze)" : "1px solid transparent",
  paddingBottom: 2,
  transition: "color 200ms ease, border-color 200ms ease",
});

export function DesktopNavLinks() {
  return (
    <nav className="hidden lg:flex items-center gap-7">
      {NAV_LINKS.map((l) => (
        <NavLink key={l.to} to={l.to} data-testid={navTestId(l.to)} style={desktopLinkStyle}>
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}

export function DesktopCta() {
  return (
    <div className="hidden lg:block">
      <Link to="/getting-started" data-testid="nav-cta-start" className="btn-primary">
        Begin Intake
      </Link>
    </div>
  );
}

export function MobileMenu() {
  return (
    <div
      className="lg:hidden"
      data-testid="mobile-menu"
      style={{ background: "var(--ivory)", borderTop: "1px solid var(--cream-line)" }}
    >
      <div className="container-quiet py-5 flex flex-col gap-4">
        {NAV_LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            data-testid={mobileNavTestId(l.to)}
            style={{ fontSize: "1rem", color: "var(--ink-soft)" }}
          >
            {l.label}
          </NavLink>
        ))}
        <Link
          to="/getting-started"
          data-testid="mobile-nav-cta-start"
          className="btn-primary mt-2"
        >
          Begin Intake
        </Link>
      </div>
    </div>
  );
}
