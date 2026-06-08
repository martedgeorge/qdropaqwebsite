import { NavLink, Link, Outlet } from 'react-router-dom';
import { A } from '../data.js';

export default function Layout() {
  return (
    <>
      <header className="siteHeader">
        <Link className="brand" to="/">
          <img src={`${A}logo-2026.png`} alt="QDROPAQ" />
        </Link>

        <nav className="siteNav">
          <NavLink to="/who-we-are">Who We Are</NavLink>
          <NavLink to="/why-qdropaq">Why QDROPAQ</NavLink>
          <NavLink to="/process">Process</NavLink>
          <NavLink to="/who-we-serve">Who We Serve</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact" className="navButton">
            Contact
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footerBrand">
          <img
            src={`${A}logo-2026.png`}
            alt="QDROPAQ"
            className="footerLogo"
          />

          <p>
            Professional QDRO Preparation and Retirement Plan Valuations.
          </p>

          <p>
            Nationwide support for self-represented divorce clients,
            mediation participants, attorneys, and financial professionals.
          </p>
        </div>

        <div className="footerLinks">
          <h4>Navigation</h4>

          <Link to="/who-we-are">Who We Are</Link>
          <Link to="/why-qdropaq">Why QDROPAQ</Link>
          <Link to="/process">Process</Link>
          <Link to="/who-we-serve">Who We Serve</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footerContact">
          <h4>Contact</h4>

          <p>
            <strong>Email</strong>
            <br />
            <a href="mailto:carol@qdropaq.com">
              carol@qdropaq.com
            </a>
          </p>

          <p>
            <strong>Phone</strong>
            <br />
            <a href="tel:2157829847">
              (215) 782-9847
            </a>
          </p>
        </div>

        <div className="footerDisclaimer">
          <h4>Important Notice</h4>

          <p>
            QDROPAQ provides retirement valuation and QDRO preparation support.
            QDROPAQ is not a law firm and does not provide legal advice.
          </p>

          <p>
            © 2026 QDROPAQ. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
