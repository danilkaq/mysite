import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import SectionHeading from './SectionHeading';
import { eventSlides } from '../data/content';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProjectsSection() {
  return (
    <section className="content-section" id="projects">
      <SectionHeading title="Наши работы" />

      <div className="events-slider-wrap">
        <button className="slider-arrow slider-arrow-prev" type="button" aria-label="Предыдущий слайд">
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
            prevEl: '.slider-arrow-prev',
            nextEl: '.slider-arrow-next',
          }}
          pagination={{ clickable: true }}
        >
          {eventSlides.map((slide, index) => (
            <SwiperSlide key={slide.title}>
              <article className="event-slide" style={{ backgroundImage: slide.accent }}>
                {index === 0 ? (
                  <div className="event-slide__image-wrap">
                    <img className="event-slide__image" src="/assets/Thetre.png" alt="Театральная сцена ET ART" />
                  </div>
                ) : null}
                {index === 2 ? (
                  <div className="event-slide__image-wrap">
                    <img className="event-slide__image" src="/assets/Baner.png" alt="Брендинг ET ART" />
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
        <button className="slider-arrow slider-arrow-next" type="button" aria-label="Следующий слайд">
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

export default ProjectsSection;
