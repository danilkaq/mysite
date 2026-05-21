import { motion } from 'framer-motion';
import { FaEnvelope, FaTelegram, FaVk } from 'react-icons/fa6';
import { contacts } from '../data/content';
import { panelRevealVariants, viewportOnce } from '../lib/motion';

const icons = {
  Telegram: FaTelegram,
  VK: FaVk,
  Email: FaEnvelope,
};

function ContactSection() {
  const socialContacts = contacts.filter((item) => item.label !== 'Email');

  return (
    <section className="content-section contact-section content-section--magic content-section--contacts" id="contacts">
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
            const isMax = item.label === 'MAX';

            return (
              <a
                key={item.label}
                className={`contact-social-strip__link ${isMax ? 'contact-social-strip__link--max' : ''}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                {item.icon ? <img src={item.icon} alt="" aria-hidden="true" /> : <Icon />}
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
