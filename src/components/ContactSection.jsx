import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaEnvelope, FaInstagram, FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa6';
import SectionHeading from './SectionHeading';
import { contacts } from '../data/content';
import { panelRevealVariants, sectionContainerVariants, viewportOnce } from '../lib/motion';

const icons = {
  Telegram: FaTelegram,
  Instagram: FaInstagram,
  VK: FaVk,
  WhatsApp: FaWhatsapp,
  Email: FaEnvelope,
};

function ContactSection() {
  const socialContacts = contacts.filter((item) => item.label !== 'Email');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    venue: '',
    eventType: '',
    date: '',
    guests: '',
    budget: '',
    message: '',
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="content-section contact-section content-section--magic content-section--contacts" id="contacts">
      <SectionHeading title="Оставьте заявку" />

      <motion.div
        className="contact-stack"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionContainerVariants}
      >
        <motion.div
          className="glass-card contact-card contact-card--form contact-card--accent contact-card--aurora magic-card magic-card--border-flow"
          variants={panelRevealVariants}
          custom={0}
        >
          <span className="magic-card__beam" aria-hidden="true" />

          <div className="contact-form-shell">
            {isSubmitted ? (
              <div className="contact-success">
                <span className="contact-success__icon">
                  <FaCheck />
                </span>
                <strong>Заявка отправлена</strong>
                <p>Скоро с вами свяжутся.</p>
              </div>
            ) : (
              <motion.form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__grid">
                  <label className="contact-field">
                    <span>ФИО</span>
                    <input
                      name="fullName"
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="contact-field">
                    <span>Почта</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="hello@mail.ru"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="contact-field">
                    <span>Телефон / Telegram</span>
                    <input
                      name="phone"
                      type="text"
                      placeholder="+7 (...) / @username"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="contact-field">
                    <span>Формат мероприятия</span>
                    <input
                      name="eventType"
                      type="text"
                      placeholder="Форум, концерт, бренд-зона"
                      value={formData.eventType}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="contact-field contact-field--wide">
                    <span>Адрес / площадка</span>
                    <input
                      name="venue"
                      type="text"
                      placeholder="Город, площадка или точный адрес"
                      value={formData.venue}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="contact-field">
                    <span>Дата</span>
                    <input
                      name="date"
                      type="text"
                      placeholder="Май 2026"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="contact-field">
                    <span>Кол-во гостей</span>
                    <input
                      name="guests"
                      type="text"
                      placeholder="Например: 150"
                      value={formData.guests}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="contact-field contact-field--wide">
                    <span>Бюджет</span>
                    <input
                      name="budget"
                      type="text"
                      placeholder="Например: от 200 000 ₽"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <label className="contact-field contact-field--message">
                  <span>Кратко о задаче</span>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Площадка, количество гостей, нужный свет, звук, экраны, сцена и другие детали."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </label>

                <label className="contact-field contact-field--checkbox">
                  <input
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                  />
                  <span>Согласен на обработку персональных данных для обработки заявки</span>
                </label>

                <div className="contact-form__footer">
                  <p>После нажатия откроется готовое письмо с уже собранной заявкой.</p>
                  <motion.button
                    className="button button--primary contact-form__submit"
                    type="submit"
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ y: -1, scale: 0.985 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  >
                    Отправить заявку
                  </motion.button>
                </div>
              </motion.form>
            )}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="glass-card site-contact-bar magic-card magic-card--spotlight"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={panelRevealVariants}
        custom={2}
      >
        <span className="magic-card__beam" aria-hidden="true" />
        <div className="site-contact-bar__intro">
          <h3>Связаться с нами</h3>
        </div>

        <div className="site-contact-bar__grid">
          <div className="site-contact-bar__item">
            <span className="site-contact-bar__label">Телефон</span>
            <a href="tel:2828685">2828685</a>
          </div>

          <div className="site-contact-bar__item">
            <span className="site-contact-bar__label">Почта</span>
            <a href="mailto:2828685@etart.ru">2828685@etart.ru</a>
          </div>

          <div className="site-contact-bar__item">
            <span className="site-contact-bar__label">Адрес</span>
            <p>Адрес офиса и склада: 60300 Россия, Нижний Новгород, Березовская 3а.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="glass-card contact-social-strip magic-card magic-card--spotlight"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={panelRevealVariants}
        custom={3}
      >
        <span className="magic-card__beam" aria-hidden="true" />
        <div className="contact-social-strip__links">
          {socialContacts.map((item) => {
            const Icon = icons[item.label];

            return (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <Icon />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </motion.div>

      <footer className="site-footer">
        <img className="footer-logo-blue" src="/assets/etart-logo.png" alt="ET ART logo" />
        <p>ET ART</p>
      </footer>
    </section>
  );
}

export default ContactSection;
