import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { packages } from '../data/content';
import { cardRevealVariants, sectionContainerVariants, viewportOnce } from '../lib/motion';

function PackagesSection() {
  return (
    <section className="content-section content-section--magic content-section--packages" id="packages">
      <SectionHeading
        title={'\u041d\u0430\u0431\u043e\u0440\u044b \u0441\u0432\u0435\u0442\u0430 \u0438 \u0437\u0432\u0443\u043a\u0430'}
        text={'\u0422\u0440\u0438 \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u043d\u0430\u0431\u043e\u0440\u0430 \u043f\u043e\u0434 \u0440\u0430\u0437\u043d\u044b\u0439 \u043c\u0430\u0441\u0448\u0442\u0430\u0431 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f.'}
      />

      <motion.div
        className="packages-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionContainerVariants}
      >
        {packages.map((item, index) => (
          <motion.article
            key={item.title}
            className="glass-card package-card magic-card magic-card--border-flow"
            variants={cardRevealVariants}
            custom={index}
          >
            <span className="magic-card__beam" aria-hidden="true" />
            <span className="package-price">{item.price}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default PackagesSection;
