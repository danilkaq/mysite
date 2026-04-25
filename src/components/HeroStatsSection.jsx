import { useEffect, useMemo, useRef, useState } from 'react';

const heroStats = [
  { value: '10', label: 'Лет на рынке', accent: 'landing-stats__card--private' },
  { value: '24/7/365', label: 'Техническая поддержка Вашего проекта', accent: 'landing-stats__card--business' },
  { value: '94', label: 'Реализованных проектов за 2025 год', accent: 'landing-stats__card--public' },
];

function CountUpValue({ value, start }) {
  const parts = useMemo(
    () =>
      value.split(/(\d+)/).filter(Boolean).map((part) => ({
        text: part,
        isNumber: /^\d+$/.test(part),
      })),
    [value]
  );

  const [displayValues, setDisplayValues] = useState(() =>
    parts.map((part) => (part.isNumber ? 0 : part.text))
  );

  useEffect(() => {
    if (!start) {
      setDisplayValues(parts.map((part) => (part.isNumber ? 0 : part.text)));
      return;
    }

    let frameId = 0;
    let startTime = 0;
    const duration = 2400;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValues(
        parts.map((part) => {
          if (!part.isNumber) {
            return part.text;
          }

          const target = Number(part.text);
          return Math.round(target * eased);
        })
      );

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [parts, start]);

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${value}-${index}`} className={part.isNumber ? 'landing-stats__digits' : undefined}>
          {displayValues[index]}
        </span>
      ))}
    </>
  );
}

function HeroStatsSection() {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node || hasStarted) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="landing-stats" aria-label="Ключевые показатели">
      <div className="landing-stats__inner">
        {heroStats.map((item) => (
          <article key={`${item.value}-${item.label}`} className={`landing-stats__card ${item.accent}`}>
            <strong className="landing-stats__value">
              <CountUpValue value={item.value} start={hasStarted} />
            </strong>
            <p className="landing-stats__label">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HeroStatsSection;
