import { Variants, Transition } from 'framer-motion';

export const motionTokens = {
  duration: {
    instant: 0.08,
    fast: 0.15,
    base: 0.25,
    slow: 0.4,
    slower: 0.6,
    dramatic: 1.0,
  },
  ease: {
    standard: [0.2, 0, 0, 1] as const,
    entrance: [0.05, 0.7, 0.1, 1] as const,
    exit: [0.3, 0, 1, 1] as const,
    spring: [0.175, 0.885, 0.32, 1.275] as const,
    gentle: [0.4, 0, 0.2, 1] as const,
    bounce: [0.68, -0.55, 0.265, 1.55] as const,
  },
  stagger: {
    micro: 0.02,
    standard: 0.06,
    dramatic: 0.1,
  },
} as const;

export const createTransition = (
  duration: keyof typeof motionTokens.duration = 'base',
  ease: keyof typeof motionTokens.ease = 'entrance',
  delay = 0
): Transition => ({
  duration: motionTokens.duration[duration],
  ease: motionTokens.ease[ease],
  delay,
});

export const createSpringTransition = (
  stiffness = 300,
  damping = 30,
  delay = 0
): Transition => ({
  type: 'spring',
  stiffness,
  damping,
  delay,
});

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: createTransition('slow', 'entrance'),
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: createTransition('fast', 'exit'),
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: createTransition('base', 'entrance'),
  },
  exit: {
    opacity: 0,
    transition: createTransition('fast', 'exit'),
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: createTransition('slow', 'entrance'),
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: createTransition('fast', 'exit'),
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: createTransition('slow', 'entrance'),
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: createTransition('fast', 'exit'),
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: motionTokens.stagger.standard,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: createTransition('base', 'entrance'),
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: createTransition('fast', 'exit'),
  },
};

export const cardHover: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transition: createTransition('base', 'gentle'),
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 20px 60px rgba(196, 30, 34, 0.2), 0 0 30px rgba(232, 146, 14, 0.15)',
    transition: createTransition('base', 'gentle'),
  },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: createTransition('slower', 'entrance'),
  },
};