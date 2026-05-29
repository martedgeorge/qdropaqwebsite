import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_HEIGHT, NAV_ICON_SIZE, SCROLL_SHADOW_THRESHOLD } from "@/constants/ui";
import BrandMark from "@/components/nav/BrandMark";
import { DesktopNavLinks, DesktopCta, MobileMenu } from "@/components/nav/NavLinks";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_SHADOW_THRESHOLD);
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
      <div className="container-quiet flex items-center justify-between" style={{ height: NAV_HEIGHT }}>
        <BrandMark />
        <DesktopNavLinks />
        <DesktopCta />
        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ color: "var(--ink)" }}
        >
          {open ? <X size={NAV_ICON_SIZE} /> : <Menu size={NAV_ICON_SIZE} />}
        </button>
      </div>

      {open && <MobileMenu />}
    </header>
  );
}
