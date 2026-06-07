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
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact" className="navButton">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footerBrand">
          <strong>QDROPAQ</strong>
          <p>Professional QDRO Preparation and Retirement Plan Valuations</p>
          <p>Nationwide support for self-represented divorce clients and mediated settlements.</p>
        </div>

        <div className="footerContact">
          <p><strong>Email</strong><br /><a href="mailto:carol@qdropaq.com">carol@qdropaq.com</a></p>
          <p><strong>Phone</strong><br /><a href="tel:2157829847">(215) 782-9847</a></p>
        </div>

        <div className="footerLinks">
          <Link to="/who-we-are">Who We Are</Link>
          <Link to="/why-qdropaq">Why QDROPAQ</Link>
          <Link to="/process">Process</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footerDisclaimer">
          <p>QDROPAQ provides retirement valuation and QDRO preparation support. QDROPAQ is not a law firm and does not provide legal advice.</p>
          <p>© QDROPAQ. We value the future ®</p>
        </div>
      </footer>
    </>
  );
}
