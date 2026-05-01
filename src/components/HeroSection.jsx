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

            <h1 className="landing-hero__title">
              <span className="landing-hero__title-line">Комплексное обеспечение</span>
              <span className="landing-hero__title-line">мероприятий</span>
            </h1>
          </div>

          <p className="landing-hero__body">
            Спроектируем, визуализируем в 3D, подберем оптимальное оборудование, создадим проект по брендингу и
            декору, возьмем на себя все вопросы по проектному менеджменту, смонтируем по таймингу, реализуем проект.
          </p>

          <p className="landing-hero__body-mobile">
            3D-визуализация, подбор оборудования, брендинг, декор и реализация проекта под ключ.
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
