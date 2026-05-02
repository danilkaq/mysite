import {
  FaBolt,
  FaDisplay,
  FaHeadset,
  FaLayerGroup,
  FaLightbulb,
  FaRegHandshake,
  FaShieldHalved,
  FaWaveSquare,
} from 'react-icons/fa6';

export const advantages = [
  {
    icon: FaShieldHalved,
    title: 'Надежная реализация',
    text: 'Техническая команда ET ART сопровождает проекты от подготовки площадки до финального выключения шоу.',
  },
  {
    icon: FaLightbulb,
    title: 'Визуальный продакшн',
    text: 'Свет, экраны, сценография и динамика пространства собираются в цельную визуальную историю бренда.',
  },
  {
    icon: FaWaveSquare,
    title: 'Event-tech эстетика',
    text: 'Мы делаем технику частью имиджа события: чисто, современно и с премиальным ритмом.',
  },
  {
    icon: FaHeadset,
    title: 'Комфортное ведение',
    text: 'Один контакт на проект, прозрачная коммуникация и быстрое принятие технических решений.',
  },
];

export const quickMenu = [
  { label: 'Кто мы', href: '#about' },
  { label: 'Наши работы', href: '#projects' },
  { label: 'Визуализация', href: '#visualization' },
  { label: 'Оборудование', href: '#equipment' },
  { label: 'Наборы света и звука', href: '#packages' },
  { label: 'С кем сотрудничаем', href: '#partners' },
  { label: 'Контакты', href: '#contacts' },
];

export const eventSlides = [
  {
    id: 'events-first',
    title: 'Мероприятия',
    label: 'Conference / LED / Stage',
    description: '',
    accent: 'linear-gradient(135deg, rgba(17,31,52,.88), rgba(74,189,255,.35), rgba(0,0,0,.92))',
    image: '/assets/portfolio/general/general-04.jpg',
    alt: 'ET ART event project',
    position: 'center center',
    mobilePosition: '54% center',
    showText: true,
  },
  {
    id: 'events-second',
    title: 'Мероприятия',
    label: 'Fashion / Moving Heads / Atmosphere',
    description: 'Деловые, концертные и камерные форматы с сильной визуальной подачей.',
    accent: 'linear-gradient(135deg, rgba(0,0,0,.95), rgba(0,118,184,.52), rgba(14,19,30,.95))',
    image: '/assets/portfolio/general/general-16.jpg',
    alt: 'ET ART stage event',
    position: 'center center',
    mobilePosition: '60% center',
    showText: false,
  },
  {
    id: 'events-third',
    title: 'Мероприятия',
    label: 'Branding / Scene / Event',
    description: 'Брендированные зоны, сцены и продакшн-решения для ярких проектов.',
    accent: 'linear-gradient(135deg, rgba(8,11,19,.94), rgba(75,198,255,.30), rgba(0,0,0,.9))',
    image: '/assets/portfolio/branding/branding-02.jpg',
    alt: 'ET ART branded event project',
    position: 'center center',
    mobilePosition: '52% center',
    showText: false,
  },
];

export const visualizationSlides = [
  {
    id: 'visual-first',
    title: '3D',
    label: 'Light Design / Stage',
    description: 'Предварительная 3D-проработка сцены, света и композиции проекта.',
    accent: 'linear-gradient(135deg, rgba(2,9,18,.96), rgba(61,185,255,.42), rgba(7,12,20,.96))',
    image: '/assets/portfolio/3d/visualization-01.jpg',
    alt: 'ET ART 3D visualization concept',
    position: 'center center',
    mobilePosition: '52% center',
    showText: true,
  },
  {
    id: 'visual-second',
    title: '3D',
    label: 'LED / Content / Motion',
    description: 'Визуальная сборка пространства с экранами, сценой и световыми акцентами.',
    accent: 'linear-gradient(135deg, rgba(5,8,14,.94), rgba(31,130,255,.36), rgba(0,0,0,.96))',
    image: '/assets/portfolio/3d/visualization-02.jpg',
    alt: 'ET ART 3D stage project',
    position: 'center center',
    mobilePosition: '50% center',
    showText: false,
  },
  {
    id: 'visual-third',
    title: '3D',
    label: 'Space / Mood / Atmosphere',
    description: 'Еще до монтажа показываем, как будет выглядеть итоговая площадка.',
    accent: 'linear-gradient(135deg, rgba(0,0,0,.96), rgba(88,217,255,.26), rgba(9,16,24,.96))',
    image: '/assets/portfolio/3d/visualization-03.jpg',
    alt: 'ET ART 3D event visualization',
    position: 'center center',
    mobilePosition: '50% center',
    showText: false,
  },
];

export const equipmentCards = [
  {
    title: 'Сценические конструкции',
    description: 'Подиумы, фермы, сцены и технические каркасы для безопасного продакшна.',
    tone: 'from-night',
    image: '/assets/equipment-stage.png',
    imageClass: 'equipment-card__image--stage',
  },
  {
    title: 'Звуковое оборудование',
    description: 'Комплекты для речи, шоу-программ и музыкальных сетов с качественной настройкой.',
    tone: 'from-ice',
    image: '/assets/equipment-sound.png',
    imageClass: 'equipment-card__image--sound',
  },
  {
    title: 'Профессиональный свет',
    description: 'Moving heads, wash, beam, spot и атмосфера для клубных, деловых и концертных форматов.',
    tone: 'from-cyan',
    image: '/assets/equipment-light.png',
    imageClass: 'equipment-card__image--light',
  },
  {
    title: 'LED-экраны',
    description: 'Модульные экраны для сцены, задников, бренд-зон и иммерсивных инсталляций.',
    tone: 'from-steel',
    image: '/assets/equipment-screen.png',
    imageClass: 'equipment-card__image--screen',
  },
  {
    title: 'Мультимедиа',
    description: 'Профессиональные панели и мобильные стойки для презентаций, деловых зон и информационных экранов.',
    tone: 'from-night',
    image: '/assets/equipment-display.png',
    imageClass: 'equipment-card__image--display',
  },
  {
    title: 'Брендинг',
    description: 'Стенды, брендированные зоны и готовые решения для презентаций, выставок и промо-активаций.',
    tone: 'from-steel',
    image: '/assets/equipment-branding.png',
    imageClass: 'equipment-card__image--branding',
  },
];

export const packages = [
  {
    title: 'Минимальный набор',
    price: '45 000 ₽',
    description: 'Для камерных мероприятий, презентаций, частных вечеров и небольших площадок.',
  },
  {
    title: 'Средний набор',
    price: '85 000 ₽',
    description: 'Для корпоративов, бренд-зон, свадеб и мероприятий со сценой среднего масштаба.',
  },
  {
    title: 'Максимальный набор',
    price: 'от 140 000 ₽',
    description: 'Для крупных событий, форумов, концертных сетапов и визуально насыщенных площадок.',
  },
];

export const reviews = [
  {
    name: 'A. Mamedov',
    company: 'Private Event Producer',
    text: 'ET ART держат темп проекта спокойно и уверенно. На площадке чувствуется высокий класс команды и техники.',
  },
  {
    name: 'Brand Team Nova',
    company: 'Launch Event',
    text: 'Сильная визуальная подача, быстрые решения и очень чистая финальная картинка на площадке.',
  },
  {
    name: 'Event Hall Meridian',
    company: 'Venue Partner',
    text: 'Команда дисциплинированная, техничная и бережно работает с локацией. Надежный партнер для сложных монтажей.',
  },
];

export const partners = [
  {
    name: 'Газпром',
    image: '/assets/partners/gazprom.svg',
  },
  {
    name: 'Сбер',
    image: '/assets/partners/sber.svg',
  },
  {
    name: 'Росатом',
    image: '/assets/partners/rosatom.svg',
  },
  {
    name: 'Высшая школа экономики',
    image: '/assets/partners/hse.svg',
  },
  {
    name: 'ITESCO',
    image: '/assets/partners/itesco.svg',
  },
];

export const contacts = [
  { label: 'Telegram', value: '@etart_event', href: 'https://t.me/etart_event' },
  { label: 'Instagram', value: '@etart.production', href: 'https://instagram.com/etart.production' },
  { label: 'VK', value: 'vk.com/etart.production', href: 'https://vk.com/etart.production' },
  { label: 'WhatsApp', value: '+7 (999) 123-45-67', href: 'https://wa.me/79991234567' },
  { label: 'Email', value: 'hello@etart.pro', href: 'mailto:hello@etart.pro' },
];

export const metrics = [
  { value: '120+', label: 'реализованных проектов' },
  { value: '24/7', label: 'техническая поддержка' },
  { value: '10+', label: 'лет event-tech опыта' },
];

export const socialHighlights = [
  {
    icon: FaRegHandshake,
    title: 'Отзывы',
    text: 'Подтвержденная репутация, спокойный процесс и предсказуемый результат на площадке.',
  },
  {
    icon: FaLayerGroup,
    title: 'Партнерства',
    text: 'Работаем с площадками, агентствами и брендами, которым важна техническая эстетика.',
  },
  {
    icon: FaHeadset,
    title: 'Соцсети',
    text: 'Показываем закулисье, сетапы и визуальный язык проектов в цифровых каналах.',
  },
];
