import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    quote: "Tikhori's garam masala transformed my cooking. The aroma when you open the jar is something you won't find in supermarket brands — it's pure magic.",
    name: 'Chef Priya Sharma',
    title: 'Head Chef, Spice Route Restaurant',
    avatar: '👩‍🍳',
    rating: 5,
  },
  {
    quote: "I've been using Tikhori spices for 3 years now. The turmeric is so vibrant and fresh — my dal has never looked or tasted better. My mother-in-law approves!",
    name: 'Anita Desai',
    title: 'Home Cook, Mumbai',
    avatar: '👩',
    rating: 5,
  },
  {
    quote: "As a food blogger, I test dozens of spice brands. Tikhori stands out for consistency and purity. You can taste the difference — these are real, honest spices.",
    name: 'Rajesh Kumar',
    title: 'Food Blogger & Photographer',
    avatar: '👨‍🍳',
    rating: 5,
  },
  {
    quote: "We switched to Tikhori for our restaurant chain and haven't looked back. The quality is impeccable, and their small-batch approach means every shipment is fresh.",
    name: 'Vikram Patel',
    title: "Owner, Patel's Kitchen Chain",
    avatar: '👨‍💼',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4198656/pexels-photo-4198656.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-maroon-dark/92 backdrop-blur-sm" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">Voices of Trust</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-3 mb-6">
            What People Say
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-8 sm:p-12 bg-maroon/30 border-gold/15 min-h-[280px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="text-center w-full"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <span key={i} className="text-saffron text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-cream/90 italic leading-relaxed mb-8 max-w-3xl mx-auto">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl">{testimonials[currentIndex].avatar}</span>
                  <div className="text-left">
                    <p className="text-gold-light font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-cream/40 text-sm">{testimonials[currentIndex].title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold transition-all flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="14,4 6,10 14,16" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-saffron w-8' : 'bg-gold/30 hover:bg-gold/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold transition-all flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="6,4 14,10 6,16" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
