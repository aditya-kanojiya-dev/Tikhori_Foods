import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { sectionReveal, fadeInUp } from '../utils/motion';
import { StarIcon, ArrowLeftIcon, ArrowRightIcon } from './ui/Icons';
import { cn } from '../utils/cn';

const testimonials = [
  {
    quote: "Tikhori's garam masala transformed my cooking. The aroma when you open the jar is something you won't find in supermarket brands — it's pure magic.",
    name: 'Chef Priya Sharma',
    title: 'Head Chef, Spice Route Restaurant',
    initials: 'PS',
    color: 'from-chili to-saffron',
    rating: 5,
  },
  {
    quote: "I've been using Tikhori spices for 3 years now. The turmeric is so vibrant and fresh — my dal has never looked or tasted better. My mother-in-law approves!",
    name: 'Anita Desai',
    title: 'Home Cook, Mumbai',
    initials: 'AD',
    color: 'from-saffron to-turmeric',
    rating: 5,
  },
  {
    quote: "As a food blogger, I test dozens of spice brands. Tikhori stands out for consistency and purity. You can taste the difference — these are real, honest spices.",
    name: 'Rajesh Kumar',
    title: 'Food Blogger & Photographer',
    initials: 'RK',
    color: 'from-maroon to-chili',
    rating: 5,
  },
  {
    quote: "We switched to Tikhori for our restaurant chain and haven't looked back. The quality is impeccable, and their small-batch approach means every shipment is fresh.",
    name: 'Vikram Patel',
    title: "Owner, Patel's Kitchen Chain",
    initials: 'VP',
    color: 'from-turmeric to-gold',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4198656/pexels-photo-4198656.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-maroon-dark/92 backdrop-blur-sm" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-4">Voices of Trust</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6">
            What People Say
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-8 sm:p-12 bg-maroon/30 border-gold/15 min-h-[320px] flex items-center">
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
                <div className="flex justify-center gap-1 mb-6" aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}>
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <StarIcon key={i} size={20} className="text-saffron" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-cream/90 italic leading-relaxed mb-8 max-w-3xl mx-auto">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className={cn(
                    'w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-sm',
                    testimonials[currentIndex].color
                  )}>
                    {testimonials[currentIndex].initials}
                  </div>
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
              className="w-12 h-12 rounded-full border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold transition-all flex items-center justify-center focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-dark"
              aria-label="Previous testimonial"
            >
              <ArrowLeftIcon size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'h-2.5 rounded-full transition-all duration-300',
                    i === currentIndex ? 'bg-saffron w-8' : 'bg-gold/30 hover:bg-gold/50 w-2.5'
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold transition-all flex items-center justify-center focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-dark"
              aria-label="Next testimonial"
            >
              <ArrowRightIcon size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}