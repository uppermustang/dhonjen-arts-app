import { Link } from 'react-router-dom';
import {
  aboutBio,
  aboutHighlights,
  aboutImages,
  quotes,
  services,
  site,
} from '../data/siteContent';
import './About.css';

const serviceImages = {
  'Wall Art': aboutImages.mural,
  'Art Class': aboutImages.teaching,
  Personalized: aboutImages.painting,
};

export default function About() {
  const bioParagraphs = aboutBio.trim().split('\n\n');

  return (
    <div className="page-main about-page">
      {/* Intro — portrait + identity */}
      <section className="about-intro">
        <div className="container about-intro__grid">
          <div className="about-intro__visual">
            <div className="about-intro__frame">
              <img
                src={aboutImages.portrait}
                alt={site.artist}
                className="about-intro__portrait"
                loading="eager"
              />
              <span className="about-intro__badge">{site.origin} → New York</span>
            </div>
            <div className="about-intro__accent" aria-hidden="true" />
          </div>
          <div className="about-intro__text">
            <p className="eyebrow">{site.tagline}</p>
            <h1 className="about-intro__title">Hi, I am {site.artist}</h1>
            <p className="about-intro__location">Based in {site.location}</p>
            <p className="about-intro__lead">{site.intro}</p>
            <div className="about-intro__actions">
              <Link to="/gallery" className="btn btn--primary">
                View my work
              </Link>
              <Link to="/commission" className="btn btn--outline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="about-highlights" aria-label="Career highlights">
        <div className="container about-highlights__grid">
          {aboutHighlights.map((item) => (
            <div key={item.label} className="about-highlight">
              <span className="about-highlight__value">{item.value}</span>
              <span className="about-highlight__label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bio + image collage */}
      <section className="section section--alt">
        <div className="container about-bio">
          <div className="about-bio__gallery">
            <figure className="about-bio__figure about-bio__figure--tall">
              <img src={aboutImages.studio} alt="Paintings and artwork" loading="lazy" />
            </figure>
            <figure className="about-bio__figure about-bio__figure--wide">
              <img src={aboutImages.painting} alt="Colorful abstract painting detail" loading="lazy" />
            </figure>
            <figure className="about-bio__figure about-bio__figure--accent">
              <img src={aboutImages.teaching} alt="Art class in session" loading="lazy" />
            </figure>
            <div className="about-bio__graphic" aria-hidden="true">
              <span className="about-bio__brush" />
              <p>Colorful · Vivid · Optimistic</p>
            </div>
          </div>
          <div className="about-bio__content">
            <h2 className="section-title">Few words about me</h2>
            {bioParagraphs.map((block, idx) => (
              <p key={idx} className="about-bio__p">
                {block}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Services with images */}
      <section className="section about-services-section">
        <div className="container">
          <p className="eyebrow">What I do</p>
          <h2 className="section-title">Wall art, teaching &amp; personalized work</h2>
          <div className="about-services">
            {services.map((s, i) => (
              <article key={s.title} className="about-service-card">
                <div className="about-service-card__image-wrap">
                  <img
                    src={serviceImages[s.title]}
                    alt={`${s.title} — Dhonjen Arts`}
                    loading="lazy"
                  />
                  <span className="about-service-card__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="about-service-card__body">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes with visual backdrop */}
      <section className="section section--alt about-quotes-section">
        <div className="container about-quotes">
          <div className="about-quotes__visual" aria-hidden="true">
            <img src={aboutImages.mural} alt="" />
            <div className="about-quotes__overlay" />
          </div>
          <div className="about-quotes__content">
            <blockquote className="quote-block">
              <p>&ldquo;{quotes[0].text}&rdquo;</p>
              <footer>— {quotes[0].author}</footer>
            </blockquote>
            <div className="quotes-row">
              {quotes.slice(1).map((q) => (
                <blockquote key={q.text} className="quote-block quote-block--small">
                  <p>&ldquo;{q.text}&rdquo;</p>
                  <footer>— {q.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
