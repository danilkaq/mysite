import { motion } from 'framer-motion';
import { headingVariants, viewportOnce } from '../lib/motion';

function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <motion.div
      className={`section-heading section-heading--${align}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={headingVariants}
    >
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </motion.div>
  );
}

export default SectionHeading;
