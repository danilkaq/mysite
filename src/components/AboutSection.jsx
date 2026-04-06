import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { advantages } from '../data/content';

function AboutSection() {
  return (
    <section className="content-section" id="about">
      <SectionHeading
        title="Кто мы?"
        text="Современная event-tech команда. ET ART сопровождает мероприятия под ключ: от визуальной идеи и подбора оборудования до точной реализации на площадке."
      />

      <div className="advantage-grid">
        {advantages.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              className="glass-card advantage-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <span className="icon-wrap">
                <Icon />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default AboutSection;
