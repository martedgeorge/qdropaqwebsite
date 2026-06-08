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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/who-we-are">Overview</NavLink>

          <div className="navDropdown">
            <button>Services</button>
            <div className="dropdownMenu">
              <Link to="/why-qdropaq">Pension Valuations</Link>
              <Link to="/process">QDROs</Link>
              <Link to="/who-we-serve">Employment Group Pension Expertise</Link>
              <Link to="/who-we-serve">Expert Testimony</Link>
              <Link to="/who-we-serve">Legal Language Consulting</Link>
              <Link to="/who-we-serve">Personalized Actuarial Consulting</Link>
            </div>
          </div>

          <NavLink to="/who-we-are">Staff</NavLink>

          <div className="navDropdown">
            <button>Library</button>
            <div className="dropdownMenu">
              <Link to="/resources">Articles</Link>
              <Link to="/faq">Div Tips</Link>
              <Link to="/who-we-are">Our Aspen Press Text Books</Link>
              <Link to="/resources">Learn About Pensions</Link>
              <Link to="/resources">Methods & Standards</Link>
            </div>
          </div>

          <div className="navDropdown">
            <button>Resources</button>
            <div className="dropdownMenu">
              <Link to="/resources">Military, Federal & Public Systems</Link>
              <Link to="/resources">PAC's List</Link>
              <Link to="/resources">Helpful Links</Link>
            </div>
          </div>

          <NavLink to="/contact" className="navButton">Contact Us</NavLink>

          <div className="navDropdown">
            <button>Fees & Forms</button>
            <div className="dropdownMenu">
              <a href="/forms/pension-valuation-form.pdf">Pension Valuation Form</a>
              <a href="/forms/qdro-form.pdf">QDRO Form</a>
              <a href="/forms/pro-se-qdro-form.pdf">Pro Se QDRO Form</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footerBrand">
          <img src={`${A}logo-2026.png`} alt="QDROPAQ" className="footerLogo" />
          <p>Professional QDRO Preparation and Retirement Plan Valuations.</p>
          <p>Nationwide support for self-represented divorce clients, mediation participants, attorneys, and financial professionals.</p>
        </div>

        <div className="footerLinks">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/who-we-are">Overview</Link>
          <Link to="/why-qdropaq">Pension Valuations</Link>
          <Link to="/process">QDROs</Link>
          <Link to="/resources">Library</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footerContact">
          <h4>Contact</h4>
          <p><strong>Email</strong><br /><a href="mailto:carol@qdropaq.com">carol@qdropaq.com</a></p>
          <p><strong>Phone</strong><br /><a href="tel:2157829847">(215) 782-9847</a></p>
        </div>

        <div className="footerDisclaimer">
          <h4>Important Notice</h4>
          <p>QDROPAQ provides retirement valuation and QDRO preparation support. QDROPAQ is not a law firm and does not provide legal advice.</p>
          <p>© 2026 QDROPAQ. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
