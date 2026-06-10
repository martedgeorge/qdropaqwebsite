import { NavLink, Link, Outlet } from 'react-router-dom';
import { A } from '../data.js';

export default function Layout() {
return (
<> <header className="siteHeader"> <Link className="brand" to="/">
<img src={`${A}logo-2026.png`} alt="QDROPAQ" /> </Link>

    <nav className="siteNav">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/overview">
        Overview
      </NavLink>

      <div className="navDropdown">
        <button>Services</button>

        <div className="dropdownMenu">
          <Link to="/services">Pension Valuations</Link>
          <Link to="/services">QDROs</Link>
          <Link to="/services">Employment Group Pension Expertise</Link>
          <Link to="/services">Expert Testimony</Link>
          <Link to="/services">Wage Loss</Link>
          <Link to="/services">Legal Language Consulting</Link>
          <Link to="/services">Stock Options</Link>
          <Link to="/services">Personalized Actuarial Consulting</Link>
          <Link to="/services">Speaker & CLE Presenter</Link>
        </div>
      </div>

      <NavLink to="/staff">
        Staff
      </NavLink>

      <div className="navDropdown">
        <button>Library</button>

        <div className="dropdownMenu">
          <Link to="/resources">Articles</Link>
          <Link to="/library">Military, Federal & Public Systems</Link>
          <Link to="/library">PAC's List</Link>
          <Link to="/library">Helpful Links</Link>
        </div>
      </div>

      <div className="navDropdown">
        <button>Fees & Forms</button>

        <div className="dropdownMenu">
          <Link to="/fees-forms">Pension Valuation Form</Link>
          <Link to="/fees-forms">QDRO Form</Link>
          <Link to="/fees-forms">Pro Se QDRO Form</Link>
        </div>
      </div>

      <NavLink
        to="/contact"
        className="navButton"
      >
        Contact Us
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

      <Link to="/">Home</Link>
      <Link to="/overview">Overview</Link>
      <Link to="/services">Services</Link>
      <Link to="/staff">Staff</Link>
      <Link to="/resources">Articles</Link>
      <Link to="/fees-forms">Fees & Forms</Link>
      <Link to="/contact">Contact Us</Link>
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

      <p>
        <strong>Address</strong>
        <br />
        1657 The Fairway #169
        <br />
        Jenkintown, PA 19046
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
