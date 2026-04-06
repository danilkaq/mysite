import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import SectionHeading from './SectionHeading';
import { visualizationSlides } from '../data/content';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function VisualizationSection() {
  return (
    <section className="content-section" id="visualization">
      <SectionHeading title="Визуализация" />

      <div className="events-slider-wrap">
        <button className="slider-arrow slider-arrow-visual-prev" type="button" aria-label="Предыдущий слайд визуализации">
          <FaArrowLeft />
        </button>
        <Swiper
          className="events-slider"
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          speed={700}
          loop
          navigation={{
            prevEl: '.slider-arrow-visual-prev',
            nextEl: '.slider-arrow-visual-next',
          }}
          pagination={{ clickable: true }}
        >
          {visualizationSlides.map((slide, index) => (
            <SwiperSlide key={slide.title}>
              <article className="event-slide event-slide--visual" style={{ backgroundImage: slide.accent }}>
                {index === 0 ? (
                  <div className="event-slide__image-wrap">
                    <img className="event-slide__image" src="/assets/stage.png" alt="Световой рисунок сцены" />
                  </div>
                ) : null}
                <div className="event-slide__glow" />
                <div className="event-slide__content">
                  <h4>{slide.title}</h4>
                  <p>{slide.description}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="slider-arrow slider-arrow-visual-next" type="button" aria-label="Следующий слайд визуализации">
          <FaArrowRight />
        </button>
      </div>

      <div className="section-action">
        <a className="button button--ghost button--more-photos" href="#contacts">
          Подробнее
        </a>
      </div>
    </section>
  );
}

export default VisualizationSection;
