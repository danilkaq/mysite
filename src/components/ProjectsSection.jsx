import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import SectionHeading from './SectionHeading';
import { eventSlides } from '../data/content';
import { panelRevealVariants, viewportOnce } from '../lib/motion';

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const activeSlide = eventSlides[activeIndex];

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + eventSlides.length) % eventSlides.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % eventSlides.length);
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;

    if (Math.abs(deltaX) < 44 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      handleNext();
      return;
    }

    handlePrev();
  };

  return (
    <section className="content-section content-section--magic content-section--projects" id="projects">
      <SectionHeading title={'Наши работы'} />

      <motion.div
        className="events-slider-wrap magic-frame"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={panelRevealVariants}
      >
        <div className="magic-scanline" aria-hidden="true" />

        <button
          className="slider-arrow slider-arrow-prev"
          type="button"
          aria-label={'Предыдущий слайд'}
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>

        <div className="events-slider" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <AnimatePresence mode="wait">
            <motion.article
              key={activeSlide.title}
              className="event-slide magic-slide"
              style={{ backgroundImage: activeSlide.accent }}
              initial={{ opacity: 0, x: 42, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -42, scale: 0.985 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeIndex === 0 ? (
                <div className="event-slide__image-wrap">
                  <img className="event-slide__image" src="/assets/Thetre.png" alt={'Театральная сцена ET ART'} />
                </div>
              ) : null}

              {activeIndex === 2 ? (
                <div className="event-slide__image-wrap">
                  <img className="event-slide__image" src="/assets/Baner.png" alt={'Брендинг ET ART'} />
                </div>
              ) : null}

              <div className="event-slide__glow" />
              <div className="magic-slide__shine" aria-hidden="true" />

              <motion.div
                className="event-slide__content"
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.22, delay: 0.03, ease: [0.16, 1, 0.3, 1] }}
              >
                <h4>{activeSlide.title}</h4>
                <p>{activeSlide.description}</p>
              </motion.div>
            </motion.article>
          </AnimatePresence>

          <div className="events-slider__dots" aria-label="Навигация по слайдам">
            {eventSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={`events-slider__dot${index === activeIndex ? ' is-active' : ''}`}
                aria-label={`Перейти к слайду ${index + 1}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <button
          className="slider-arrow slider-arrow-next"
          type="button"
          aria-label={'Следующий слайд'}
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </motion.div>

      <div className="section-action">
        <a className="button button--ghost button--more-photos" href="/portfolio">
          {'Больше фото'}
        </a>
      </div>
    </section>
  );
}

export default ProjectsSection;
