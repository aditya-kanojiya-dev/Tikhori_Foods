import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/17870116/pexels-photo-17870116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
    alt: 'Traditional spice market in India',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/20527453/pexels-photo-20527453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=500',
    alt: 'Farmer harvesting herbs',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/33428714/pexels-photo-33428714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Hand grinding spices with mortar and pestle',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/30688211/pexels-photo-30688211.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=500',
    alt: 'Dried red chili peppers close up',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/15741144/pexels-photo-15741144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700',
    alt: 'Spice market stall with grains and spices',
    span: 'col-span-2 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/13005177/pexels-photo-13005177.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=500',
    alt: 'Chili peppers in mortar',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.05 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-cream-dark overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-saffron text-sm uppercase tracking-[0.3em] font-semibold mb-4">Behind the Scenes</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-maroon-dark mb-6">
            Gallery
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto mb-6" />
          <p className="text-spice-brown/60 max-w-2xl mx-auto text-lg">
            Glimpses from our farms, markets, and packaging — where tradition meets taste.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div ref={scrollRef}>
          <motion.div
            style={{ x }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]"
          >
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`${img.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-cream text-sm font-medium">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}