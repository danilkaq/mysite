import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { quickMenu } from '../data/content';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-menu">
        <button
          className={`header-minimal${isOpen ? ' is-open' : ''}`}
          aria-label="Открыть меню"
          aria-expanded={isOpen}
          type="button"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <AnimatePresence>
          {isOpen ? (
            <motion.nav
              className="header-dropdown"
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              {quickMenu.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.18, delay: index * 0.03 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Header;
