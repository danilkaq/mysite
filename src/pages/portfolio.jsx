import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6';
import { portfolioSections } from '../data/portfolio';

export default function PortfolioPage() {
  const portfolioGallery = portfolioSections.flatMap((section) => section.items);
  const [activeIndex, setActiveIndex] = useState(null);
  const swipeStart = useRef(null);

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % portfolioGallery.length);
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + portfolioGallery.length) % portfolioGallery.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, portfolioGallery.length]);

  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + portfolioGallery.length) % portfolioGallery.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % portfolioGallery.length);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    swipeStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    if (!swipeStart.current) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - swipeStart.current.x;
    const deltaY = touch.clientY - swipeStart.current.y;

    swipeStart.current = null;

    if (Math.abs(deltaX) < 44 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      showNext();
      return;
    }

    showPrevious();
  };

  return (
    <div className="app-shell portfolio-page-shell">
      <main className="portfolio-page">
        <section className="portfolio-hero">
          <div className="portfolio-hero__top">
            <a className="portfolio-back" href="/" aria-label="На главную">
              <FaArrowLeft />
              <span>Назад</span>
            </a>
          </div>

          <div className="portfolio-hero__copy">
            <h1>Галерея проектов</h1>
            <p className="portfolio-hero__lead">
              Техническое обеспечение, 3D-визуализация и брендинг в одном архиве реализованных проектов.
            </p>
          </div>
        </section>

        <div className="portfolio-sections">
          {portfolioSections.map((section) => {
            const startIndex = portfolioGallery.findIndex((item) => item.image === section.items[0]?.image);

            return (
              <section
                key={`${section.title ?? 'gallery'}-${section.items[0]?.image}`}
                className="portfolio-group"
                aria-label={section.title ?? 'Галерея проектов'}
              >
                {section.title ? (
                  <div className="portfolio-group__heading">
                    <h2>{section.title}</h2>
                  </div>
                ) : null}

                <div className="portfolio-gallery">
                  {section.items.map((item, index) => (
                    <article
                      key={item.image}
                      className="portfolio-card"
                      role="button"
                      tabIndex={0}
                      aria-label={`Открыть фото ${index + 1}`}
                      onClick={() => setActiveIndex(startIndex + index)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setActiveIndex(startIndex + index);
                        }
                      }}
                    >
                      <div className="portfolio-card__media">
                        <img src={item.image} alt={item.alt} loading="lazy" />
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {activeIndex !== null ? (
        <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-label="Просмотр фотографии">
          <button className="portfolio-lightbox__backdrop" type="button" aria-label="Закрыть" onClick={closeLightbox} />
          <button className="portfolio-lightbox__close" type="button" aria-label="Закрыть" onClick={closeLightbox}>
            <FaXmark />
          </button>
          <button
            className="portfolio-lightbox__nav portfolio-lightbox__nav--prev"
            type="button"
            aria-label="Предыдущее фото"
            onClick={showPrevious}
          >
            <FaChevronLeft />
          </button>
          <figure
            className="portfolio-lightbox__figure"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img src={portfolioGallery[activeIndex].image} alt={portfolioGallery[activeIndex].alt} />
          </figure>
          <button
            className="portfolio-lightbox__nav portfolio-lightbox__nav--next"
            type="button"
            aria-label="Следующее фото"
            onClick={showNext}
          >
            <FaChevronRight />
          </button>
        </div>
      ) : null}
    </div>
  );
}
