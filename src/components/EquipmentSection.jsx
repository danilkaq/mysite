import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { equipmentCards } from '../data/content';
import { cardRevealVariants, sectionContainerVariants, viewportOnce } from '../lib/motion';

function EquipmentSection() {
  return (
    <section className="content-section content-section--magic content-section--equipment" id="equipment">
      <SectionHeading
        title={'\u041d\u0430\u0448\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435'}
        text={
          '\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u044b \u0441\u0432\u0435\u0442\u0430, \u0437\u0432\u0443\u043a\u0430, \u044d\u043a\u0440\u0430\u043d\u043e\u0432 \u0438 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0439 \u0434\u043b\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u043b\u044e\u0431\u043e\u0433\u043e \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0430.'
        }
      />

      <motion.div
        className="equipment-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionContainerVariants}
      >
        {equipmentCards.map((item, index) => (
          <motion.article
            key={item.title}
            className={`equipment-card glass-card magic-card magic-card--spotlight magic-card--drift ${item.tone}`}
            variants={cardRevealVariants}
            custom={index}
          >
            <span className="magic-card__beam" aria-hidden="true" />
            <div className="equipment-card__visual">
              <div className="equipment-card__mesh magic-pulse-surface" />
              {item.image ? (
                <img
                  className={`equipment-card__image ${item.imageClass ?? ''}`}
                  src={item.image}
                  alt={item.title}
                />
              ) : null}
            </div>
            <div className="equipment-card__content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default EquipmentSection;
