import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { packages } from '../data/content';

function PackagesSection() {
  return (
    <section className="content-section" id="packages">
      <SectionHeading title="Наборы света и звука" text="Три готовых набора под разный масштаб мероприятия." />

      <div className="packages-grid">
        {packages.map((item, index) => (
          <motion.article
            key={item.title}
            className="glass-card package-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <span className="package-price">{item.price}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default PackagesSection;
