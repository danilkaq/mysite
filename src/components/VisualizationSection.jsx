import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import SectionHeading from './SectionHeading';
import { visualizationSlides } from '../data/content';
import { panelRevealVariants, viewportOnce } from '../lib/motion';

function VisualizationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const activeSlide = visualizationSlides[activeIndex];

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + visualizationSlides.length) % visualizationSlides.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % visualizationSlides.length);
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
    <section className="content-section content-section--magic content-section--visualization" id="visualization">
      <SectionHeading title={'Визуализация'} />

      <motion.div
        className="events-slider-wrap magic-frame"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={panelRevealVariants}
      >
        <div className="magic-scanline" aria-hidden="true" />

        <button className="slider-arrow slider-arrow-prev" type="button" aria-label="Предыдущий слайд" onClick={handlePrev}>
          <FaArrowLeft />
        </button>

        <div className="events-slider" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <AnimatePresence mode="wait">
            <motion.article
              key={activeSlide.id}
              className="event-slide magic-slide"
              style={{ backgroundImage: activeSlide.accent }}
              initial={{ opacity: 0, x: 42, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -42, scale: 0.985 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeSlide.image ? (
                <div className="event-slide__image-wrap">
                  <img
                    className="event-slide__image"
                    src={activeSlide.image}
                    alt={activeSlide.alt}
                    style={{
                      '--slide-position': activeSlide.position ?? 'center center',
                      '--slide-mobile-position': activeSlide.mobilePosition ?? activeSlide.position ?? 'center center',
                    }}
                  />
                </div>
              ) : null}

              <div className="event-slide__glow" />
              <div className="magic-slide__shine" aria-hidden="true" />

              {activeSlide.showText ? (
                <motion.div
                  className="event-slide__content"
                  initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.22, delay: 0.03, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h4>{activeSlide.title}</h4>
                  {activeSlide.description ? <p>{activeSlide.description}</p> : null}
                </motion.div>
              ) : null}
            </motion.article>
          </AnimatePresence>

          <div className="events-slider__dots" aria-label="Навигация по слайдам">
            {visualizationSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`events-slider__dot${index === activeIndex ? ' is-active' : ''}`}
                aria-label={`Перейти к слайду ${index + 1}`}
                aria-pressed={index === activeIndex}
                onClick={(event) => {
                  event.currentTarget.blur();
                  setActiveIndex(index);
                }}
              />
            ))}
          </div>
        </div>

        <button className="slider-arrow slider-arrow-next" type="button" aria-label="Следующий слайд" onClick={handleNext}>
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

export default VisualizationSection;
