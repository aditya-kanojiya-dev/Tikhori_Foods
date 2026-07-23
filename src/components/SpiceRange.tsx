import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { WheatIcon, DropletIcon, ChiliIcon, SparkleIcon, Leaf2Icon, LeafIcon } from './ui/Icons';
import { sectionReveal, staggerContainer, staggerItem, fadeInUp, cardHover } from '../utils/motion';
import { cn } from '../utils/cn';

const spiceCategories = [
  {
    name: 'Whole Spices',
    description: 'Premium handpicked whole spices — cumin, cardamom, cloves, and more.',
    Icon: WheatIcon,
    color: 'from-saffron-dark to-saffron',
    gradient: 'from-saffron/20 to-gold/10',
    image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    count: '24+ varieties',
  },
  {
    name: 'Blended Masalas',
    description: 'Signature blends for biryani, garam masala, sambar & more.',
    Icon: DropletIcon,
    color: 'from-chili-dark to-chili',
    gradient: 'from-chili/20 to-saffron/10',
    image: 'https://images.pexels.com/photos/4198656/pexels-photo-4198656.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    count: '16+ blends',
  },
  {
    name: 'Chili Powders',
    description: 'From mild Kashmiri to fiery Guntur — heat for every palate.',
    Icon: ChiliIcon,
    color: 'from-chili to-chili-light',
    gradient: 'from-chili/20 to-turmeric/10',
    image: 'https://images.pexels.com/photos/30688211/pexels-photo-30688211.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    count: '8 heat levels',
  },
  {
    name: 'Turmeric & Haldi',
    description: 'Golden, aromatic turmeric sourced from the finest farms.',
    Icon: SparkleIcon,
    color: 'from-turmeric to-turmeric-light',
    gradient: 'from-turmeric/20 to-gold/10',
    image: 'https://images.pexels.com/photos/4198655/pexels-photo-4198655.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    count: '6 origins',
  },
  {
    name: 'Dried Herbs',
    description: 'Fenugreek leaves, curry leaves, mint & coriander — dried to perfection.',
    Icon: Leaf2Icon,
    color: 'from-spice-brown to-spice-brown-light',
    gradient: 'from-spice-brown/20 to-saffron/10',
    image: 'https://images.pexels.com/photos/9575086/pexels-photo-9575086.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    count: '12+ herbs',
  },
  {
    name: 'Specialty Mixes',
    description: 'Chai masala, pickle masala, chaat masala & seasonal specials.',
    Icon: LeafIcon,
    color: 'from-maroon to-maroon-light',
    gradient: 'from-maroon/20 to-chili/10',
    image: 'https://images.pexels.com/photos/1516421/pexels-photo-1516421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    count: '10+ specialties',
  },
];

function SpiceCard({ spice, index, inView }: { spice: typeof spiceCategories[0]; index: number; inView: boolean }) {
  return (
    <motion.article
      variants={{ ...cardHover, rest: { opacity: 0, y: 50 }, hover: cardHover.hover }}
      initial="rest"
      animate={inView ? 'visible' : 'rest'}
      whileHover="hover"
      className="group relative rounded-3xl overflow-hidden bg-maroon/50 border border-gold/10 hover:border-gold/40 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={spice.image}
          alt={`${spice.name} collection`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${spice.color} opacity-40 group-hover:opacity-50 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon-dark/40 to-transparent" />
        
        {/* Icon Badge */}
        <div className={cn(
          'absolute top-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center border border-gold/20',
          'group-hover:scale-110 group-hover:border-gold/50 transition-all duration-500',
          spice.gradient
        )}>
          <spice.Icon size={24} className="text-gold" />
        </div>

        {/* Count Badge */}
        <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-maroon-dark/70 backdrop-blur-sm text-gold text-xs font-semibold border border-gold/20">
          {spice.count}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-cream group-hover:text-saffron-light transition-colors duration-300 mb-2">
          {spice.name}
        </h3>
        <p className="text-cream/60 text-sm leading-relaxed mb-4">
          {spice.description}
        </p>
        
        {/* Hover reveal link */}
        <div className="flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span>Explore Range</span>
          <ArrowRight size={16} />
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
           style={{ boxShadow: 'inset 0 0 80px rgba(232, 146, 14, 0.1)' }} />
    </motion.article>
  );
}

function ArrowRight({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function SpiceRange() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section id="spices" className="relative py-28 md:py-36 bg-maroon-dark overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 mandala-bg opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark via-maroon-dark/95 to-maroon-dark" aria-hidden="true" />

      {/* Floating decorative blobs */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] liquid-blob bg-gradient-to-br from-saffron/5 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-[200px] h-[200px] liquid-blob bg-gradient-to-br from-chili/5 to-transparent" style={{ animationDelay: '3s' }} aria-hidden="true" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          {...sectionReveal}
          initial={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.span
            {...fadeInUp}
            initial={inView ? 'visible' : 'hidden'}
            className="inline-block text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-4"
          >
            Crafted with Care
          </motion.span>
          <motion.h2
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            initial={inView ? 'visible' : 'hidden'}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6"
          >
            Our Spice Range
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
          />
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            initial={inView ? 'visible' : 'hidden'}
            className="text-cream/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            From the fiery red chili fields of Andhra to the cardamom hills of Kerala — every jar tells a story.
          </motion.p>
        </motion.div>

        {/* Spice Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {spiceCategories.map((spice, index) => (
            <SpiceCard key={spice.name} spice={spice} index={index} inView={inView} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="btn-outline-premium inline-flex items-center gap-3 px-8 py-4 text-gold font-semibold text-sm uppercase tracking-wider rounded-full border-2 border-gold/40"
          >
            <span>View Full Collection</span>
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}