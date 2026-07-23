import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const spiceCategories = [
  {
    name: 'Whole Spices',
    description: 'Premium handpicked whole spices — cumin, cardamom, cloves, and more.',
    emoji: '🫘',
    color: 'from-saffron-dark to-saffron',
    image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    name: 'Blended Masalas',
    description: 'Signature blends for biryani, garam masala, sambar & more.',
    emoji: '🥘',
    color: 'from-chili-dark to-chili',
    image: 'https://images.pexels.com/photos/4198656/pexels-photo-4198656.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    name: 'Chili Powders',
    description: 'From mild Kashmiri to fiery Guntur — heat for every palate.',
    emoji: '🌶️',
    color: 'from-chili to-chili-light',
    image: 'https://images.pexels.com/photos/30688211/pexels-photo-30688211.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    name: 'Turmeric & Haldi',
    description: 'Golden, aromatic turmeric sourced from the finest farms.',
    emoji: '✨',
    color: 'from-turmeric to-turmeric-light',
    image: 'https://images.pexels.com/photos/4198655/pexels-photo-4198655.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    name: 'Dried Herbs',
    description: 'Fenugreek leaves, curry leaves, mint & coriander — dried to perfection.',
    emoji: '🌿',
    color: 'from-spice-brown to-spice-brown-light',
    image: 'https://images.pexels.com/photos/9575086/pexels-photo-9575086.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    name: 'Specialty Mixes',
    description: 'Chai masala, pickle masala, chaat masala & seasonal specials.',
    emoji: '🍵',
    color: 'from-maroon to-maroon-light',
    image: 'https://images.pexels.com/photos/1516421/pexels-photo-1516421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
];

export default function SpiceRange() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section id="spices" className="relative py-24 md:py-32 bg-maroon-dark overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 mandala-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark via-maroon-dark/95 to-maroon-dark" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">Crafted with Care</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-3 mb-6">
            Our Spice Range
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-cream/60 max-w-2xl mx-auto text-lg">
            From the fiery red chili fields of Andhra to the cardamom hills of Kerala — every jar tells a story.
          </p>
        </motion.div>

        {/* Spice Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {spiceCategories.map((spice, index) => (
            <motion.div
              key={spice.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.12 }}
              className="spice-card group relative rounded-2xl overflow-hidden bg-maroon/50 border border-gold/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={spice.image}
                  alt={spice.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${spice.color} opacity-40 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent" />
                
                {/* Emoji badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-maroon-dark/60 backdrop-blur-sm flex items-center justify-center text-2xl border border-gold/20 group-hover:scale-110 group-hover:border-gold/50 transition-all duration-300">
                  {spice.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-cream group-hover:text-saffron-light transition-colors duration-300 mb-2">
                  {spice.name}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {spice.description}
                </p>
                
                {/* Hover reveal link */}
                <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore Range</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="0" y1="8" x2="14" y2="8" />
                    <polyline points="8,2 14,8 8,14" />
                  </svg>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                   style={{ boxShadow: 'inset 0 0 60px rgba(232, 146, 14, 0.1)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
