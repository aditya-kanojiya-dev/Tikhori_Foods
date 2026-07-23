import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const spiceEmojis = ['🌶️', '🫚', '🧄', '🌿', '✨', '🔥', '🍂'];

interface Particle {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const generateParticles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: spiceEmojis[i % spiceEmojis.length],
      left: Math.random() * 100,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      size: 14 + Math.random() * 20,
    }));
  }, []);

  useEffect(() => {
    setParticles(generateParticles);
  }, [generateParticles]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/31280796/pexels-photo-31280796.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/80 via-maroon-dark/70 to-maroon-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-chili-dark/30 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              fontSize: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              bottom: '-40px',
            }}
          >
            {p.emoji}
          </span>
        ))}
      </div>

      {/* Mandala decorative rings */}
      <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none opacity-10">
        <svg viewBox="0 0 800 800" className="w-[600px] h-[600px] md:w-[800px] md:h-[800px]" fill="none">
          <circle cx="400" cy="400" r="350" stroke="#D4A843" strokeWidth="0.5" opacity="0.4" />
          <circle cx="400" cy="400" r="280" stroke="#D4A843" strokeWidth="0.5" opacity="0.3" />
          <circle cx="400" cy="400" r="210" stroke="#D4A843" strokeWidth="0.5" opacity="0.2" />
          <circle cx="400" cy="400" r="140" stroke="#D4A843" strokeWidth="0.5" opacity="0.15" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="400"
              y1="50"
              x2="400"
              y2="750"
              stroke="#D4A843"
              strokeWidth="0.3"
              opacity="0.15"
              transform={`rotate(${i * 30} 400 400)`}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="text-5xl sm:text-6xl md:text-7xl">🌶️</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream mb-4 leading-tight"
        >
          <span className="text-saffron-light">Tikhori</span>{' '}
          <span className="text-cream">Foods</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display text-xl sm:text-2xl md:text-3xl text-gold-light italic mb-8"
        >
          Spice up your kitchen, the authentic way
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-cream/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hand-picked, stone-ground, and lovingly blended — bringing the soul of India's spice gardens to your kitchen since 1987.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#spices"
            className="btn-warm inline-flex items-center justify-center px-8 py-4 bg-saffron text-white font-semibold text-sm uppercase tracking-wider rounded-full border-2 border-saffron hover:border-chili transition-all"
          >
            <span>Explore Our Spices</span>
          </a>
          <a
            href="#story"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-gold-light font-semibold text-sm uppercase tracking-wider rounded-full border-2 border-gold/40 hover:border-gold hover:bg-gold/10 transition-all duration-300"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-cream/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="bounce-arrow text-saffron text-2xl">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
