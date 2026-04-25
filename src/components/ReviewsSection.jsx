import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from './SectionHeading';
import { reviews } from '../data/content';
import { cardShiftVariants, sectionContainerVariants, viewportOnce } from '../lib/motion';
import 'swiper/css';

function ReviewsSection() {
  return (
    <section className="content-section content-section--magic content-section--reviews" id="reviews">
      <SectionHeading
        title={'\u041d\u0430\u0448\u0438 \u043e\u0442\u0437\u044b\u0432\u044b'}
        text={'\u041e\u0442\u0437\u044b\u0432\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0438 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432 \u043e \u0440\u0430\u0431\u043e\u0442\u0435 ET ART.'}
      />

      <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={sectionContainerVariants}>
        <Swiper
          className="reviews-slider"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            760: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={review.name}>
              <motion.article
                className="glass-card review-card review-card--tilt magic-card magic-card--float"
                variants={cardShiftVariants}
                custom={index}
                whileHover={{ y: -10, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
                transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              >
                <span className="magic-card__beam" aria-hidden="true" />
                <p>{review.text}</p>
                <strong>{review.name}</strong>
                <span>{review.company}</span>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

export default ReviewsSection;
