import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`header ${menuOpen ? 'header--menu-open' : ''}`}>
      <div className="container header__bar">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <img
            src="/dhonjenartsLogo.png"
            alt=""
            className="header__logo-img"
            width={120}
            height={48}
          />
          <span className="header__logo-text">
            Dhonjen <em>Arts</em>
          </span>
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className={`header__burger ${menuOpen ? 'is-open' : ''}`} />
        </button>

        <nav
          id="main-nav"
          className={`header__nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="header__list">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `header__link ${isActive ? 'is-active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/commission"
            className="btn btn--primary header__cta"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="header__backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
