import { useEffect, useRef, useState, useMemo, type SVGProps } from 'react';
import { motion } from 'framer-motion';
import { ChiliIcon, SparkleIcon, LeafIcon, ArrowDownIcon } from './ui/Icons';
import { fadeInUp, fadeIn } from '../utils/motion';

const spiceIcons = [ChiliIcon, SparkleIcon, LeafIcon, SparkleIcon, ChiliIcon, SparkleIcon, LeafIcon];

interface Particle {
  id: number;
  Icon: typeof ChiliIcon;
  left: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const generateParticles = useMemo(() => {
    return Array.from({ length: 16 }, (_, i) => ({
      id: i,
      Icon: spiceIcons[i % spiceIcons.length],
      left: 10 + Math.random() * 80,
      duration: 12 + Math.random() * 15,
      delay: Math.random() * 8,
      size: 18 + Math.random() * 24,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, []);

  useEffect(() => {
    setParticles(generateParticles);
  }, [generateParticles]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxY = scrollY * 0.3;
  const opacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Image with Premium Overlays */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.pexels.com/photos/31280796/pexels-photo-31280796.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            transform: `translateY(${parallaxY * 0.5}px)`,
            opacity,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/90 via-maroon-dark/70 to-maroon-dark/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-chili-dark/40 via-transparent to-saffron-dark/20" />
        
        {/* Liquid glass morphing blobs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] liquid-blob bg-gradient-to-br from-saffron/10 to-chili/5 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] liquid-blob bg-gradient-to-br from-gold/10 to-turmeric/5 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }} aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] liquid-blob bg-gradient-to-br from-saffron/15 to-transparent -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }} aria-hidden="true" />
      </div>

      {/* Floating Premium Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              fontSize: `${p.size}px`,
              opacity: p.opacity,
              bottom: '-40px',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: p.opacity, scale: 1 }}
            transition={{ duration: p.duration, delay: p.delay, ease: 'linear', repeat: Infinity }}
          >
            <p.Icon size={p.size} className="text-gold" />
          </motion.span>
        ))}
      </div>

      {/* Mandala Decorative Rings - Premium Version */}
      <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none opacity-15" aria-hidden="true">
        <svg viewBox="0 0 800 800" className="w-[600px] h-[600px] md:w-[800px] md:h-[800px]" fill="none">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A843" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#E8920E" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#E8B90E" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <circle cx="400" cy="400" r="350" stroke="url(#goldGradient)" strokeWidth="0.8" />
          <circle cx="400" cy="400" r="280" stroke="url(#goldGradient)" strokeWidth="0.6" />
          <circle cx="400" cy="400" r="210" stroke="url(#goldGradient)" strokeWidth="0.4" />
          <circle cx="400" cy="400" r="140" stroke="url(#goldGradient)" strokeWidth="0.3" />
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={i}
              x1="400"
              y1="60"
              x2="400"
              y2="740"
              stroke="url(#goldGradient)"
              strokeWidth="0.4"
              transform={`rotate(${i * 22.5} 400 400)`}
            />
          ))}
          {/* Inner ornamental ring */}
          <circle cx="400" cy="400" r="80" stroke="url(#goldGradient)" strokeWidth="0.5" fill="none" opacity="0.6" />
          <circle cx="400" cy="400" r="40" stroke="url(#goldGradient)" strokeWidth="0.5" fill="none" opacity="0.4" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        {/* Chili Icon */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-saffron/20 to-chili/20 border border-gold/30 mb-4 animate-float-gentle">
            <ChiliIcon size={56} className="text-saffron" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          id="hero-title"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-cream mb-6 leading-[1.1] tracking-tight"
        >
          <span className="text-gradient-saffron">Tikhori</span>{' '}
          <span className="text-cream">Foods</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-light to-transparent animate-shimmer" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gold-light italic mb-8 max-w-3xl mx-auto"
        >
          Spice up your kitchen, the authentic way
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-cream/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Hand-picked, stone-ground, and lovingly blended — bringing the soul of India&apos;s spice gardens to your kitchen since 1987.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#spices"
            className="btn-premium inline-flex items-center justify-center gap-3 px-10 py-5 bg-saffron text-white font-semibold text-sm uppercase tracking-wider rounded-full border-2 border-saffron shadow-lg shadow-saffron/30"
            whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(232, 146, 14, 0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Explore Our Spices</span>
            <ArrowDownIcon size={18} className="transition-transform group-hover:translate-y-1" />
          </motion.a>
          
          <motion.a
            href="#story"
            className="btn-outline-premium inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent text-gold-light font-semibold text-sm uppercase tracking-wider rounded-full border-2 border-gold/40"
            whileHover={{ scale: 1.03, borderColor: 'var(--color-gold)', backgroundColor: 'var(--color-gold-muted)' }}
            whileTap={{ scale: 0.97 }}
          >
            <LeafIcon size={18} className="transition-transform group-hover:rotate-12" />
            <span>Our Story</span>
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-cream/50 text-sm"
        >
          <div className="flex items-center gap-2">
            <CheckIcon size={16} className="text-saffron" />
            <span>Since 1987</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon size={16} className="text-saffron" />
            <span>100% Natural</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon size={16} className="text-saffron" />
            <span>No Preservatives</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon size={16} className="text-saffron" />
            <span>Small Batch</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        >
          <span className="text-cream/50 text-xs uppercase tracking-widest font-medium">Scroll to Discover</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-saffron"
          >
            <ArrowDownIcon size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CheckIcon({ size = 24, className, ...props }: { size?: number | string; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}