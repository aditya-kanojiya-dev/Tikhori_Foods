import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="38" r="18" strokeLinecap="round" />
        <path d="M22 38 C22 38, 27 28, 32 28 C37 28, 42 38, 42 38" strokeLinecap="round" />
        <circle cx="32" cy="36" r="4" fill="currentColor" opacity="0.3" />
        <path d="M32 20 L32 14" strokeLinecap="round" strokeWidth="3" />
        <path d="M26 12 L32 14 L38 12" strokeLinecap="round" />
      </svg>
    ),
    title: 'Stone-Ground',
    description: 'Traditional stone grinding preserves essential oils and creates the deepest, most authentic flavor profile.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8 C32 8, 16 20, 16 34 C16 43, 23 52, 32 52 C41 52, 48 43, 48 34 C48 20, 32 8, 32 8Z" strokeLinecap="round" />
        <path d="M32 18 L32 38" strokeLinecap="round" opacity="0.5" />
        <path d="M26 30 L32 38 L38 30" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: 'No Preservatives',
    description: 'Pure ingredients, zero additives. Every pack is 100% natural — just spices, nothing else.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 56 L32 30" strokeLinecap="round" strokeWidth="3" />
        <path d="M24 38 L32 30 L40 38" strokeLinecap="round" strokeWidth="2" />
        <path d="M12 24 C12 24, 20 16, 32 16 C44 16, 52 24, 52 24" strokeLinecap="round" />
        <path d="M8 18 C8 18, 18 8, 32 8 C46 8, 56 18, 56 18" strokeLinecap="round" opacity="0.5" />
        <rect x="20" y="48" width="24" height="8" rx="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Farm-Direct Sourcing',
    description: 'We partner with farming communities across India, ensuring fair prices and the freshest harvest.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="32" r="14" strokeDasharray="4 3" />
        <path d="M24 32 C24 32, 28 40, 32 40 C36 40, 40 32, 40 32 C40 32, 36 24, 32 24 C28 24, 24 32, 24 32Z" fill="currentColor" opacity="0.15" />
        <path d="M16 52 C16 52, 24 48, 32 48 C40 48, 48 52, 48 52" strokeLinecap="round" />
        <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.4" />
        <path d="M32 8 L32 18" strokeLinecap="round" />
        <path d="M48 16 L42 24" strokeLinecap="round" />
        <path d="M16 16 L22 24" strokeLinecap="round" />
      </svg>
    ),
    title: 'Small-Batch Roasted',
    description: 'Every batch is slow-roasted in small quantities to unlock maximum aroma and consistent quality.',
  },
];

export default function WhatMakesUsDifferent() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 paisley-border opacity-50" />
      
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-saffron text-sm uppercase tracking-[0.3em] font-semibold">Why Choose Us</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-maroon-dark mt-3 mb-6">
            What Makes Us Different
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto" />
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index, ease: 'easeOut' }}
              className="group text-center p-8 rounded-2xl bg-warm-white border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-saffron/10 to-chili/10 text-saffron mb-6 group-hover:scale-110 group-hover:from-saffron/20 group-hover:to-chili/20 transition-all duration-500">
                {feature.icon}
              </div>

              <h3 className="font-display text-xl font-bold text-maroon-dark mb-3 group-hover:text-chili transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-spice-brown/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
