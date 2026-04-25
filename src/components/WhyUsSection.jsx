import { motion } from 'framer-motion';
import { cardRevealVariants, headingVariants, sectionContainerVariants, viewportOnce } from '../lib/motion';

const whyUsCards = [
  {
    title: 'Комплексность',
    text: 'Закрываем звук, свет, видео, сцену и брендинг — один продакшн вместо десяти. Собственный парк оборудования и отвечаем за каждый прибор и специалиста.',
    accent: 'why-us-card--complex',
  },
  {
    title: 'Надёжность',
    text: 'Не срываем сроки, не пропадаем после предоплаты и ведём прозрачную смету. Каждый этап расписан по часам и ответственным лицам.',
    accent: 'why-us-card--reliable',
  },
  {
    title: 'Конфиденциальность',
    text: 'Работаем с NDA. Гарантируем полную закрытость информации о вашем мероприятии, сметах и концепциях. Ваши идеи остаются вашими.',
    accent: 'why-us-card--private',
  },
  {
    title: 'Постпродакшн',
    text: 'Мы не исчезаем после финала. Предоставляем фото и видео отчёт, финансовую документацию и собираем отзывы. Работаем на долгосрочное партнёрство.',
    accent: 'why-us-card--aftercare',
  },
];

function WhyUsSection() {
  return (
    <section className="content-section content-section--why-us" aria-labelledby="why-us-title">
      <motion.div
        className="section-heading section-heading--left why-us-heading"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={headingVariants}
      >
        <h2 id="why-us-title">Почему мы?</h2>
      </motion.div>

      <motion.div
        className="why-us-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionContainerVariants}
      >
        {whyUsCards.map((item, index) => (
          <motion.article
            key={item.title}
            className={`why-us-card ${item.accent}`}
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

export default WhyUsSection;
