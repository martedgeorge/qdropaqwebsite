import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/about", label: "About" },
  { to: "/our-process", label: "Process" },
  { to: "/unique", label: "What Makes Us Different" },
  { to: "/fees-and-forms", label: "Fees & Forms" },
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-40"
      style={{
        background: scrolled ? "rgba(245, 240, 230, 0.92)" : "rgba(245, 240, 230, 0.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid var(--cream-line)" : "1px solid transparent",
        transition: "background-color 240ms ease, border-color 240ms ease",
      }}
    >
      <div className="container-quiet flex items-center justify-between" style={{ height: 72 }}>
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

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-${l.to.replace(/\//g, "")}`}
              style={({ isActive }) => ({
                fontSize: "0.92rem",
                color: isActive ? "var(--ink)" : "var(--ink-soft)",
                borderBottom: isActive ? "1px solid var(--bronze)" : "1px solid transparent",
                paddingBottom: 2,
                transition: "color 200ms ease, border-color 200ms ease",
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/getting-started" data-testid="nav-cta-start" className="btn-primary">
            Begin Intake
          </Link>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ color: "var(--ink)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden"
          data-testid="mobile-menu"
          style={{ background: "var(--ivory)", borderTop: "1px solid var(--cream-line)" }}
        >
          <div className="container-quiet py-5 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`mobile-nav-${l.to.replace(/\//g, "")}`}
                style={{ fontSize: "1rem", color: "var(--ink-soft)" }}
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/getting-started" data-testid="mobile-nav-cta-start" className="btn-primary mt-2">
              Begin Intake
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
