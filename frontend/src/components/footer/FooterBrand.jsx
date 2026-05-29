import React from "react";
import { FOOTER_BLURB_MAX_WIDTH } from "@/constants/ui";

export default function FooterBrand() {
  return (
    <div>
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
      <p
        style={{
          color: "#A9B0B7",
          marginTop: "1rem",
          maxWidth: FOOTER_BLURB_MAX_WIDTH,
          fontSize: "0.95rem",
        }}
      >
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
  );
}
