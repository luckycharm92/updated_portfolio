import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { profile } from '../data/content.js';

const links = [
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/extracurriculars', label: 'Extracurriculars' },
  { to: '/awards', label: 'Awards & Leadership' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="navbar container">
      <Link to="/" className="brand">
        <span className="brand__badge" aria-hidden="true">{profile.initials}</span>
        <span className="brand__name">{profile.name}</span>
      </Link>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      <nav id="primary-nav" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Main">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} className="nav__link">
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
