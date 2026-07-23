import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const timelineItems = [
  { year: '1987', label: 'Founded', description: 'Started as a family-run spice stall in Rajasthan' },
  { year: '2001', label: 'First Factory', description: 'Opened our stone-grinding facility in Jodhpur' },
  { year: '2015', label: 'National Reach', description: 'Expanded to 15 states across India' },
  { year: '2024', label: 'Global', description: 'Exporting to 12 countries worldwide' },
];

import { useState, useEffect } from 'react';

function StatCounter({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-4xl sm:text-5xl font-bold text-saffron">
        {count}{suffix}
      </span>
      <p className="text-spice-brown/70 text-sm mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function OurStory() {
  const { ref: sectionRef, inView: sectionInView } = useInView({ threshold: 0.1 });

  return (
    <section id="story" className="relative py-24 md:py-32 bg-cream paisley-border overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-saffron/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-turmeric/5 translate-x-1/3 translate-y-1/3" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-saffron text-sm uppercase tracking-[0.3em] font-semibold">Heritage & Passion</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-maroon-dark mt-3 mb-6">
            Our Story
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto" />
        </motion.div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/17870116/pexels-photo-17870116.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Traditional spice market stall with colorful spices"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/50 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-gold/90 text-maroon-dark px-4 py-2 rounded-full text-sm font-bold">
                Est. 1987
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-maroon-dark leading-snug">
              From a humble spice stall in Rajasthan to kitchens around the world
            </h3>
            <p className="text-spice-brown/80 leading-relaxed text-lg">
              Three generations ago, our grandfather Shri Rameshwar Ji began grinding spices on a stone slab in the narrow lanes of Jodhpur's Sardar Market. His secret? Using only the freshest, sun-dried spices sourced directly from the farms of Rajasthan, Gujarat, and Kerala.
            </p>
            <p className="text-spice-brown/80 leading-relaxed">
              Today, Tikhori Foods carries that same devotion forward. Every batch is tasted, tested, and perfected by our family before it reaches your kitchen. We believe in <span className="font-semibold text-chili">no shortcuts</span> — just pure, stone-ground goodness passed down through generations.
            </p>
            <p className="text-spice-brown/80 leading-relaxed">
              Our name, <em className="text-saffron-dark font-semibold">"Tikhori"</em> — meaning <em>"the spicy one"</em> — reflects our commitment to bold, authentic flavor that awakens every dish.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          <StatCounter target={37} suffix="+" label="Years of Heritage" />
          <StatCounter target={50} suffix="+" label="Spice Varieties" />
          <StatCounter target={12} suffix="" label="Countries" />
          <StatCounter target={100} suffix="K+" label="Happy Kitchens" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-saffron/20 via-saffron to-saffron/20 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Dot */}
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-saffron rounded-full border-4 border-cream z-10 shadow-md" />
                  
                  <div className="bg-warm-white rounded-xl p-6 shadow-md border border-gold/10 hover:shadow-lg hover:border-gold/30 transition-all duration-300">
                    <span className="font-display text-3xl font-bold text-chili">{item.year}</span>
                    <h4 className="font-semibold text-maroon-dark mt-2 text-lg">{item.label}</h4>
                    <p className="text-spice-brown/60 text-sm mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
