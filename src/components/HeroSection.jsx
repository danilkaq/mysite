function HeroSection() {
  return (
    <section className="landing-hero" id="hero">
      <div className="landing-hero__inner">
        <div className="landing-hero__content">
          <div className="landing-hero__lockup">
            <div className="landing-hero__brand">
              <img src="/assets/1.png" alt="ET ART" />
            </div>

            <div className="landing-hero__divider" aria-hidden="true" />

            <h1 className="landing-hero__title">КОМПЛЕКСНОЕ ТЕХНИЧЕСКОЕ ОБЕСПЕЧЕНИЕ МЕРОПРИЯТИЙ</h1>
          </div>

          <p className="landing-hero__body">
            Техническое обеспечение мероприятий: от проектирования до полной реализации под ключ.
          </p>

          <p className="landing-hero__tagline">ВАШЕ СПОКОЙСТВИЕ - НАША РАБОТА</p>

          <div className="landing-hero__actions">
            <a className="landing-button landing-button--hero" href="#contacts">
              Заказать проект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
