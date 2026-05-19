import { useMemo, useState } from 'react';
import { CATEGORIES, galleryArt } from '../data/galleryArt';
import { site } from '../data/siteContent';
import './Gallery.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return galleryArt;
    return galleryArt.filter((art) => art.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="page-main">
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">{site.tagline}</p>
          <h1>Gallery</h1>
          <p className="page-hero__lead">
            A selection of original work by {site.artist} — abstract pieces, portraits,
            landscapes, and custom wall art. Browse by category below.
          </p>
        </div>
      </header>

      <section className="section gallery-section">
        <div className="container container--wide">
          <div className="gallery-filters" role="tablist" aria-label="Filter by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`gallery-filter ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="gallery-filter__count">
                    {galleryArt.filter((a) => a.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <p className="gallery-result-count">
            Showing <strong>{filtered.length}</strong>
            {' '}
            piece{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` (${activeCategory})` : ''}
          </p>

          <ul className="gallery-masonry">
            {filtered.map((art) => (
              <li key={art.id} className="gallery-item">
                <figure className="gallery-card">
                  <div
                    className={`gallery-card__image-wrap gallery-card__image-wrap--${art.orientation}`}
                  >
                    <img
                      src={art.image}
                      alt={art.title}
                      loading="lazy"
                      width={art.orientation === 'landscape' ? 960 : 720}
                      height={art.orientation === 'landscape' ? 640 : 960}
                    />
                  </div>
                  <figcaption className="gallery-card__caption">
                    <span className="gallery-card__category">{art.category}</span>
                    <h2 className="gallery-card__title">{art.title}</h2>
                    <span className="gallery-card__artist">{art.artist}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
