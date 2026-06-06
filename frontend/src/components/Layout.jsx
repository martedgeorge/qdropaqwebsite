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
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact" className="navButton">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div>
          <strong>QDROPAQ</strong>
          <p>We value the future ®</p>
        </div>
        <div className="footerLinks">
          <Link to="/who-we-are">Who We Are</Link>
          <Link to="/process">Process</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </>
  );
}
