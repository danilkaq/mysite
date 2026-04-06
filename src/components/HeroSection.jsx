import { motion } from 'framer-motion';
import { metrics } from '../data/content';

function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-grid">
        <div className="hero-copy hero-copy--centered">
          <motion.div
            className="hero-corner-logo"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/assets/1.png" alt="ET ART" />
          </motion.div>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Прокат сценического оборудования для мероприятий
          </motion.p>

          <motion.p
            className="hero-sublead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
          >
            Свет, сцена, экраны и техническая подача, которая выглядит дорого и работает без лишнего шума.
          </motion.p>

          <motion.div
            className="hero-actions hero-actions--center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a className="button button--primary button--hero-order" href="#contacts">
              <span className="button-shine" aria-hidden="true" />
              Заказать проект
            </a>
          </motion.div>
        </div>
      </div>

      <div className="hero-metrics">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
