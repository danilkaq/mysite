import { motion } from 'framer-motion';
import { cardRevealVariants, headingVariants, sectionContainerVariants, viewportOnce } from '../lib/motion';

const aboutSegments = [
  {
    title: 'B2C',
    text: 'Частные мероприятия любых форматов',
    accent: 'about-segments__card--private',
  },
  {
    title: 'B2B',
    text: 'Деловые мероприятия, корпоративы, выставки, конференции',
    accent: 'about-segments__card--business',
  },
  {
    title: 'B2G',
    text: 'Официальные мероприятия, форумы, фестивали, городские праздники',
    accent: 'about-segments__card--public',
  },
];

function AboutSection() {
  return (
    <section className="content-section content-section--about" id="about">
      <motion.div
        className="section-heading section-heading--left about-heading"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={headingVariants}
      >
        <h2>Кто мы</h2>
        <p>
          Производственно-творческая компания &quot;ETART&quot; — это сплоченная команда профессионалов, имеющая за
          своей спиной многолетний опыт в сфере ивента, технического менеджмента, рекламы, дизайна, проектирования и
          производства декораций, создания брендинга.
        </p>
        <p>
          Мы работаем с частными лицами, бизнесом, ивент-агентствами и государственными структурами, в том числе через
          тендерные процедуры по 44-ФЗ и 223-ФЗ.
        </p>
        <p>
          2828685, 2828685@etart.ru. Адрес офиса и склада: 60300 Россия, Нижний Новгород, Березовская.
        </p>
      </motion.div>

      <motion.div
        className="about-segments"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionContainerVariants}
      >
        {aboutSegments.map((item, index) => (
          <motion.article
            key={item.title}
            className={`about-segments__card ${item.accent}`}
            variants={cardRevealVariants}
            custom={index}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default AboutSection;
