import { Link } from 'react-router-dom';
import { site, services } from '../data/siteContent';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              Dhonjen <em>Arts</em>
            </Link>
            <p className="footer__tagline">{site.tagline}</p>
            <p className="footer__tagline">{site.intro}</p>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Explore</h3>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/commission">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Services</h3>
            <ul className="footer__links">
              {services.map((s) => (
                <li key={s.title}>
                  <Link to="/about">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Contact</h3>
            <ul className="footer__links">
              <li>{site.artist}</li>
              <li>{site.location}</li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.website} target="_blank" rel="noopener noreferrer">
                  dhonjenarts.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <p className="footer__credit">
            <a href={site.website} target="_blank" rel="noopener noreferrer">
              dhonjenarts.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
