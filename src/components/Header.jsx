import { useEffect, useState } from 'react';
import { contacts, quickMenu } from '../data/content';

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9.04 15.47 8.87 19.8c.4 0 .58-.17.8-.38l2.08-2 4.31 3.16c.79.44 1.35.21 1.56-.73l2.83-13.28.01-.01c.25-1.18-.43-1.64-1.2-1.35L2.62 11.52c-1.13.44-1.11 1.07-.19 1.35l4.23 1.32 9.82-6.19c.46-.28.88-.13.53.18l-7.97 7.29z"
      />
    </svg>
  );
}

const desktopMenuOrder = ['#about', '#packages', '#projects', '#equipment', '#contacts'];

const headerMenu = desktopMenuOrder
  .map((href) => quickMenu.find((item) => item.href === href))
  .filter(Boolean);

const homeLink = '#hero';
const callLabel = '\u0421\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c\u0441\u044f';
const mainNavLabel = '\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f';
const mobileNavLabel = '\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f';
const openMenuLabel = '\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e';
const closeMenuLabel = '\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrollHeaderVisible, setIsScrollHeaderVisible] = useState(false);
  const telegramLink = contacts.find((item) => item.label === 'Telegram')?.href ?? '#contacts';

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', isMobileMenuOpen);

    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let frameId = 0;

    const updateScrollHeaderState = () => {
      frameId = 0;

      const heroSection = document.getElementById('hero');
      const heroHeight = heroSection?.offsetHeight ?? window.innerHeight;
      const baseThreshold = Math.max(heroHeight - 96, window.innerHeight * 0.92);
      const hysteresis = Math.min(Math.max(window.innerHeight * 0.08, 36), 88);
      const showThreshold = baseThreshold + hysteresis * 0.35;
      const hideThreshold = baseThreshold - hysteresis;
      const currentScroll = window.scrollY;

      setIsScrollHeaderVisible((current) => {
        if (current) {
          return currentScroll > hideThreshold;
        }

        return currentScroll > showThreshold;
      });
    };

    const requestUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateScrollHeaderState);
      }
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`landing-header landing-header--static ${
          isScrollHeaderVisible ? 'landing-header--hero-hidden-mobile' : ''
        }`}
      >
        <div className="landing-header__bar">
          <div className="landing-header__balance" aria-hidden="true" />

          <nav className="landing-header__nav" aria-label={mainNavLabel}>
            {headerMenu.map((item) => (
              <a key={item.href} href={item.href} className="landing-header__link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="landing-header__actions">
            <a className="landing-button landing-button--header" href="#contacts" onClick={closeMobileMenu}>
              {callLabel}
            </a>

            <a
              className="landing-header__telegram"
              href={telegramLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <span className="landing-header__telegram-glyph">
                <TelegramIcon />
              </span>
            </a>

            <button
              type="button"
              className={`landing-header__burger ${isMobileMenuOpen ? 'landing-header__burger--active' : ''}`}
              aria-label={isMobileMenuOpen ? closeMenuLabel : openMenuLabel}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <header className={`scroll-header ${isScrollHeaderVisible ? 'scroll-header--visible' : ''}`}>
        <div className="scroll-header__inner">
          <a className="scroll-header__logo" href={homeLink} aria-label="ET ART">
            <img src="/assets/1.png" alt="ET ART" />
          </a>

          <nav className="scroll-header__nav" aria-label={mainNavLabel}>
            {headerMenu.map((item) => (
              <a key={`scroll-${item.href}`} href={item.href} className="scroll-header__link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="scroll-header__actions">
            <a className="landing-button scroll-header__call" href="#contacts" onClick={closeMobileMenu}>
              {callLabel}
            </a>

            <a
              className="scroll-header__telegram"
              href={telegramLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <span className="scroll-header__telegram-glyph">
                <TelegramIcon />
              </span>
            </a>

            <button
              type="button"
              className={`scroll-header__burger ${isMobileMenuOpen ? 'scroll-header__burger--active' : ''}`}
              aria-label={isMobileMenuOpen ? closeMenuLabel : openMenuLabel}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'mobile-nav-overlay--visible' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden={!isMobileMenuOpen}
      />

      <aside
        id="mobile-navigation"
        className={`mobile-nav-drawer ${isMobileMenuOpen ? 'mobile-nav-drawer--open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="mobile-nav-drawer__nav" aria-label={mobileNavLabel}>
          {headerMenu.map((item) => (
            <a key={`mobile-${item.href}`} href={item.href} className="mobile-nav-drawer__link" onClick={closeMobileMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mobile-nav-drawer__footer">
          <a className="mobile-nav-drawer__telegram" href={telegramLink} target="_blank" rel="noreferrer" onClick={closeMobileMenu}>
            Telegram
          </a>
          <a className="landing-button mobile-nav-drawer__button" href="#contacts" onClick={closeMobileMenu}>
            {callLabel}
          </a>
        </div>
      </aside>
    </>
  );
}

export default Header;
