import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from './SectionHeading';
import { reviews } from '../data/content';
import 'swiper/css';

function ReviewsSection() {
  return (
    <section className="content-section" id="reviews">
      <SectionHeading title="Наши отзывы" text="Отзывы клиентов и партнеров о работе ET ART." />

      <Swiper
        className="reviews-slider"
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          760: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.name}>
            <article className="glass-card review-card">
              <p>{review.text}</p>
              <strong>{review.name}</strong>
              <span>{review.company}</span>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ReviewsSection;
