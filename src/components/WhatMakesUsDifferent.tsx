import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { fadeInUp, staggerContainer, staggerItem, sectionReveal, cardHover } from '../utils/motion';
import { WheatIcon, ShieldCheckIcon, LeafIcon, SparkleIcon } from './ui/Icons';
import { cn } from '../utils/cn';

const features = [
  {
    Icon: WheatIcon,
    title: 'Stone-Ground',
    description: 'Traditional stone grinding preserves essential oils and creates the deepest, most authentic flavor profile.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'No Preservatives',
    description: 'Pure ingredients, zero additives. Every pack is 100% natural — just spices, nothing else.',
  },
  {
    Icon: LeafIcon,
    title: 'Farm-Direct Sourcing',
    description: 'We partner with farming communities across India, ensuring fair prices and the freshest harvest.',
  },
  {
    Icon: SparkleIcon,
    title: 'Small-Batch Roasted',
    description: 'Every batch is slow-roasted in small quantities to unlock maximum aroma and consistent quality.',
  },
];

export default function WhatMakesUsDifferent() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="relative py-28 md:py-36 bg-cream overflow-hidden">
      <div className="absolute inset-0 paisley-border opacity-50" aria-hidden="true" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-saffron text-sm uppercase tracking-[0.3em] font-semibold mb-4">Why Choose Us</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-maroon-dark mb-6">
            What Makes Us Different
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto" />
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{ ...cardHover, rest: { opacity: 0, y: 40, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              initial="rest"
              animate={inView ? 'visible' : 'rest'}
              whileHover="hover"
              transition={{ duration: 0.6, delay: 0.15 * index, ease: 'easeOut' }}
              className="group text-center p-8 rounded-3xl bg-warm-white border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-saffron/10 to-chili/10 text-saffron mb-6 group-hover:scale-110 group-hover:from-saffron/20 group-hover:to-chili/20 transition-all duration-500">
                <feature.Icon size={36} />
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