import { Link } from 'react-router-dom';
import { galleryArt } from '../data/galleryArt';
import { site, services } from '../data/siteContent';
import './Home.css';

const featured = galleryArt.slice(0, 6);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&h=1080&fit=crop"
            alt=""
            aria-hidden="true"
          />
          <div className="hero__overlay" />
        </div>
        <div className="container hero__content">
          <p className="eyebrow hero__eyebrow">{site.name}</p>
          <h1 className="hero__title">
            Hi, I am {site.artist}
          </h1>
          <p className="hero__location">Based in {site.location}</p>
          <p className="hero__lead">{site.intro}</p>
          <div className="hero__actions">
            <Link to="/gallery" className="btn btn--primary">
              View Gallery
            </Link>
            <Link to="/commission" className="btn btn--outline hero__btn-outline">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">{site.tagline}</p>
          <h2 className="section-title">What I offer</h2>
          <div className="home-features">
            {services.map((service, i) => (
              <article key={service.title} className="home-feature">
                <span className="home-feature__icon">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="home-gallery-header">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="section-title">Selected works</h2>
            </div>
            <Link to="/gallery" className="btn btn--outline">
              View full gallery
            </Link>
          </div>
          <div className="home-gallery-grid">
            {featured.map((art) => (
              <Link key={art.id} to="/gallery" className="home-gallery-card">
                <img src={art.image} alt={art.title} loading="lazy" />
                <div className="home-gallery-card__info">
                  <span className="home-gallery-card__cat">{art.category}</span>
                  <h3>{art.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
