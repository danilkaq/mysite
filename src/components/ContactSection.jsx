import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaLocationDot, FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa6';
import SectionHeading from './SectionHeading';
import { contacts } from '../data/content';

const icons = {
  Telegram: FaTelegram,
  Instagram: FaInstagram,
  VK: FaVk,
  WhatsApp: FaWhatsapp,
  Email: FaEnvelope,
};

function ContactSection() {
  return (
    <section className="content-section contact-section" id="contacts">
      <SectionHeading title="Соцсети и контакты" text="Открыты к новым проектам и сотрудничеству." />

      <div className="contact-layout">
        <motion.div
          className="glass-card contact-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <h3>Свяжитесь с ET ART</h3>
          <div className="contact-links">
            {contacts.map((item) => {
              const Icon = icons[item.label];

              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  <span className="icon-wrap">
                    <Icon />
                  </span>
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="glass-card contact-card contact-card--accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.06 }}
        >
          <h3>Техническое сопровождение мероприятий</h3>
          <p>Частные события, брендовые запуски, форумы, концерты и выездные площадки.</p>
          <div className="contact-address">
            <FaLocationDot />
            <span>La Aion, Нижний Новгород</span>
          </div>
          <a className="button button--primary" href="mailto:hello@etart.pro">
            Запросить смету
          </a>
        </motion.div>
      </div>

      <footer className="site-footer">
        <img className="footer-logo-blue" src="/assets/etart-logo.png" alt="ET ART logo" />
        <p>ET ART</p>
      </footer>
    </section>
  );
}

export default ContactSection;
