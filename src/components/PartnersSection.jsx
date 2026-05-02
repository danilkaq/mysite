import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { partners } from '../data/content';
import { cardShiftVariants, sectionContainerVariants, viewportOnce } from '../lib/motion';

function PartnersSection() {
  return (
    <section className="content-section content-section--magic content-section--partners" id="partners">
      <SectionHeading
        title={'С кем сотрудничаем'}
        text={'Бренды, компании и институции, с которыми мы работали на проектах, событиях и брендированных площадках.'}
      />

      <motion.div
        className="partners-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionContainerVariants}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            className="partner-tile magic-card magic-card--spotlight magic-card--drift"
            variants={cardShiftVariants}
            custom={index}
          >
            <span className="magic-card__beam" aria-hidden="true" />
            <img className="partner-tile__logo" src={partner.image} alt={partner.name} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default PartnersSection;
