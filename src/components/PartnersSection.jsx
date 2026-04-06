import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { partners } from '../data/content';

function PartnersSection() {
  return (
    <section className="content-section" id="partners">
      <SectionHeading title="С кем сотрудничаем" />

      <div className="partners-grid">
        {partners.map((partner, index) => (
          <motion.div
            key={partner}
            className="partner-tile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {partner}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PartnersSection;
