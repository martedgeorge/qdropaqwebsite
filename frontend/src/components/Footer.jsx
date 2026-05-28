import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      style={{ background: "#13202C", color: "#D9D8D2", marginTop: "6rem" }}
    >
      <div className="container-quiet py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div
              style={{
                fontFamily: "Newsreader, Georgia, serif",
                fontSize: "1.55rem",
                color: "#F1ECDF",
                letterSpacing: "0.01em",
              }}
            >
              QDROPAQ
            </div>
            <p style={{ color: "#A9B0B7", marginTop: "1rem", maxWidth: 420, fontSize: "0.95rem" }}>
              Pension valuations and Qualified Domestic Relations Orders prepared with
              three decades of actuarial and procedural experience.
            </p>
            <div style={{ marginTop: "1.5rem", fontSize: "0.88rem", color: "#8A929B" }}>
              <div>1657 The Fairway #169</div>
              <div>Jenkintown, PA 19046</div>
              <div style={{ marginTop: "0.6rem" }}>
                <a href="tel:2157829847" data-testid="footer-phone" style={{ color: "#D9D8D2" }}>
                  215-782-9847
                </a>
              </div>
              <div>
                <a
                  href="mailto:carol@qdropaq.com"
                  data-testid="footer-email"
                  style={{ color: "#D9D8D2" }}
                >
                  carol@qdropaq.com
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#7E868F",
                marginBottom: "1rem",
              }}
            >
              Practice
            </div>
            <ul className="space-y-2.5" style={{ fontSize: "0.93rem" }}>
              <li><Link to="/about" data-testid="footer-about" style={{ color: "#D9D8D2" }}>About</Link></li>
              <li><Link to="/our-process" data-testid="footer-process" style={{ color: "#D9D8D2" }}>Our Process</Link></li>
              <li><Link to="/unique" data-testid="footer-unique" style={{ color: "#D9D8D2" }}>What Makes Us Different</Link></li>
              <li><Link to="/who-we-are" data-testid="footer-team" style={{ color: "#D9D8D2" }}>Who We Are</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#7E868F",
                marginBottom: "1rem",
              }}
            >
              Clients
            </div>
            <ul className="space-y-2.5" style={{ fontSize: "0.93rem" }}>
              <li><Link to="/getting-started" data-testid="footer-start" style={{ color: "#D9D8D2" }}>Getting Started</Link></li>
              <li><Link to="/fees-and-forms" data-testid="footer-fees" style={{ color: "#D9D8D2" }}>Fees &amp; Forms</Link></li>
              <li><Link to="/articles/what-is-a-qdro" data-testid="footer-article" style={{ color: "#D9D8D2" }}>What is a QDRO?</Link></li>
              <li><Link to="/contact" data-testid="footer-contact" style={{ color: "#D9D8D2" }}>Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#7E868F",
                marginBottom: "1rem",
              }}
            >
              Established
            </div>
            <p style={{ fontSize: "0.88rem", color: "#A9B0B7" }}>
              Three decades of pension valuation and QDRO drafting. 40,000+ matters
              completed nationwide.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid #243140",
            color: "#7E868F",
            fontSize: "0.82rem",
          }}
        >
          <div>© {new Date().getFullYear()} QDROPAQ. All rights reserved.</div>
          <div>This website provides general information and is not legal advice.</div>
        </div>
      </div>
    </footer>
  );
}
