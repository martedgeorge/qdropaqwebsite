import React from "react";
import FooterBrand from "@/components/footer/FooterBrand";
import { FooterColumn, FooterEstablishedBlurb } from "@/components/footer/FooterColumn";
import FooterBottomBar from "@/components/footer/FooterBottomBar";

const PRACTICE_LINKS = [
  { to: "/about", label: "About", testid: "footer-about" },
  { to: "/our-process", label: "Our Process", testid: "footer-process" },
  { to: "/unique", label: "What Makes Us Different", testid: "footer-unique" },
  { to: "/who-we-are", label: "Who We Are", testid: "footer-team" },
];

const CLIENT_LINKS = [
  { to: "/getting-started", label: "Getting Started", testid: "footer-start" },
  { to: "/fees-and-forms", label: "Fees & Forms", testid: "footer-fees" },
  { to: "/articles/what-is-a-qdro", label: "What is a QDRO?", testid: "footer-article" },
  { to: "/contact", label: "Contact", testid: "footer-contact" },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      style={{ background: "#13202C", color: "#D9D8D2", marginTop: "6rem" }}
    >
      <div className="container-quiet py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5"><FooterBrand /></div>
          <div className="md:col-span-3"><FooterColumn heading="Practice" links={PRACTICE_LINKS} /></div>
          <div className="md:col-span-2"><FooterColumn heading="Clients" links={CLIENT_LINKS} /></div>
          <div className="md:col-span-2"><FooterEstablishedBlurb /></div>
        </div>
        <FooterBottomBar />
      </div>
    </footer>
  );
}
