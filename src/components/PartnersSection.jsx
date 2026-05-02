import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { partners } from '../data/content';
import { cardShiftVariants, sectionContainerVariants, viewportOnce } from '../lib/motion';

function PartnersSection() {
  return (
    <section className="content-section content-section--magic content-section--partners" id="partners">
      <SectionHeading title={'\u0421 \u043a\u0435\u043c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0430\u0435\u043c'} />

      <motion.div
        className="partners-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionContainerVariants}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={partner}
            className="partner-tile magic-card magic-card--spotlight magic-card--drift"
            variants={cardShiftVariants}
            custom={index}
          >
            <span className="magic-card__beam" aria-hidden="true" />
            {partner}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default PartnersSection;
