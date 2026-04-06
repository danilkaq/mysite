import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { equipmentCards } from '../data/content';

function EquipmentSection() {
  return (
    <section className="content-section" id="equipment">
      <SectionHeading
        title="Наше оборудование"
        text="Комплекты света, звука, экранов и конструкций для событий любого масштаба."
      />

      <div className="equipment-grid">
        {equipmentCards.map((item, index) => (
          <motion.article
            key={item.title}
            className={`equipment-card glass-card ${item.tone}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div className="equipment-card__visual">
              <div className="equipment-card__mesh" />
            </div>
            <div className="equipment-card__content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default EquipmentSection;
