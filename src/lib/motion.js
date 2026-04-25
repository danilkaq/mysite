export const viewportOnce = { once: true, amount: 0.22 };

const easeOutExpo = [0.16, 1, 0.3, 1];

export const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const heroItemVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.97,
    filter: 'blur(14px)',
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.88,
      delay: index * 0.06,
      ease: easeOutExpo,
    },
  }),
};

export const headingVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.985,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.82,
      ease: easeOutExpo,
    },
  },
};

export const sectionContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const cardRevealVariants = {
  hidden: {
    opacity: 0,
    y: 38,
    scale: 0.965,
    rotateX: -10,
    filter: 'blur(12px)',
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.72,
      delay: index * 0.055,
      ease: easeOutExpo,
    },
  }),
};

export const cardShiftVariants = {
  hidden: (index = 0) => ({
    opacity: 0,
    x: index % 2 === 0 ? -26 : 26,
    y: 24,
    scale: 0.97,
    filter: 'blur(10px)',
  }),
  visible: (index = 0) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.74,
      delay: index * 0.06,
      ease: easeOutExpo,
    },
  }),
};

export const panelRevealVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    filter: 'blur(10px)',
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.76,
      delay: index * 0.08,
      ease: easeOutExpo,
    },
  }),
};

export const floatingLoop = {
  y: [0, -10, 0],
  rotate: [0, -1.6, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};
