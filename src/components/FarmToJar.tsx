import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { fadeInUp, slideInLeft, sectionReveal } from '../utils/motion';
import { WheatIcon, SunIcon, BowlIcon, ShieldCheckIcon } from './ui/Icons';

const steps = [
  {
    number: '01',
    title: 'Harvest',
    description: 'Our partner farmers across Rajasthan, Kerala, and Gujarat hand-pick spices at peak ripeness, ensuring maximum flavor and potency.',
    Icon: WheatIcon,
    color: 'bg-green-600',
    image: 'https://images.pexels.com/photos/20527455/pexels-photo-20527455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    number: '02',
    title: 'Sun-Dry',
    description: 'Spices are naturally sun-dried on clean stone beds, preserving their essential oils and developing deeper flavor profiles.',
    Icon: SunIcon,
    color: 'bg-saffron',
    image: 'https://images.pexels.com/photos/5060368/pexels-photo-5060368.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    number: '03',
    title: 'Stone-Grind',
    description: 'Using traditional stone grinding methods, we slowly mill each spice to the perfect texture — retaining oils that modern machines destroy.',
    Icon: BowlIcon,
    color: 'bg-spice-brown',
    image: 'https://images.pexels.com/photos/4871347/pexels-photo-4871347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    number: '04',
    title: 'Pack & Seal',
    description: 'Freshly ground spices are immediately sealed in airtight, food-grade packaging to lock in aroma and freshness until they reach your kitchen.',
    Icon: ShieldCheckIcon,
    color: 'bg-chili',
    image: 'https://images.pexels.com/photos/1516421/pexels-photo-1516421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
];

export default function FarmToJar() {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const jarFill = useTransform(scrollYProgress, [0.1, 0.8], [0, 100]);

  return (
    <section id="process" className="relative bg-warm-white overflow-hidden">
      {/* Header */}
      <div ref={headerRef} className="py-28 md:py-36 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block text-saffron text-sm uppercase tracking-[0.3em] font-semibold mb-4">Our Process</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-maroon-dark mb-6">
              From Farm to Jar
            </h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto mb-6" />
            <p className="text-spice-brown/60 max-w-2xl mx-auto text-lg">
              Every jar of Tikhori spice travels a journey of care, tradition, and love before it reaches your shelf.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scrollytelling */}
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Sticky Jar Visual */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="relative w-64 h-80 mx-auto">
                {/* Jar SVG */}
                <svg viewBox="0 0 200 300" className="w-full h-full">
                  {/* Jar body */}
                  <rect x="30" y="60" width="140" height="200" rx="15" fill="none" stroke="#D4A843" strokeWidth="2" />
                  {/* Jar neck */}
                  <rect x="55" y="30" width="90" height="35" rx="5" fill="none" stroke="#D4A843" strokeWidth="2" />
                  {/* Jar cap */}
                  <rect x="50" y="15" width="100" height="20" rx="8" fill="#D4A843" opacity="0.3" stroke="#D4A843" strokeWidth="2" />

                  {/* Fill level - animated */}
                  <defs>
                    <clipPath id="jarClip">
                      <rect x="32" y="62" width="136" height="196" rx="13" />
                    </clipPath>
                    <linearGradient id="spiceFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E8920E" />
                      <stop offset="50%" stopColor="#C41E22" />
                      <stop offset="100%" stopColor="#8B1518" />
                    </linearGradient>
                  </defs>
                  
                  <motion.rect
                    x="32"
                    y="62"
                    width="136"
                    height="196"
                    rx="13"
                    fill="url(#spiceFill)"
                    clipPath="url(#jarClip)"
                    style={{
                      transformOrigin: 'bottom',
                      scaleY: useTransform(jarFill, [0, 100], [0, 1]),
                    }}
                    opacity={0.8}
                  />

                  {/* Jar label */}
                  <rect x="55" y="120" width="90" height="70" rx="5" fill="#FFF8EC" opacity="0.9" stroke="#D4A843" strokeWidth="1" />
                  <text x="100" y="148" textAnchor="middle" fill="#5E1B1F" fontSize="11" fontWeight="bold" fontFamily="serif">Tikhori</text>
                  <text x="100" y="164" textAnchor="middle" fill="#5E1B1F" fontSize="8" fontFamily="serif">PREMIUM SPICES</text>
                  <text x="100" y="180" textAnchor="middle" fill="#C41E22" fontSize="9" fontFamily="serif">✦</text>
                </svg>

                {/* Progress indicator */}
                <motion.div
                  className="absolute -right-16 top-1/2 -translate-y-1/2 font-display text-5xl font-bold text-saffron/20"
                  style={{ opacity: useTransform(jarFill, [0, 100], [0.2, 0.5]) }}
                />
              </div>
            </div>
          </div>

          {/* Right: Step Cards */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative"
    >
      {/* Connecting line */}
      {index < steps.length - 1 && (
        <div className="absolute left-8 top-20 bottom-[-3rem] w-[2px] bg-gradient-to-b from-gold/30 to-transparent hidden lg:block" aria-hidden="true" />
      )}

      <div className="flex gap-6">
        {/* Step number */}
        <div className={`shrink-0 w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-lg`}>
          <step.Icon size={28} />
        </div>

        <div className="flex-1">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-gold/40 font-display text-4xl font-bold">{step.number}</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-maroon-dark">{step.title}</h3>
          </div>
          <p className="text-spice-brown/70 leading-relaxed mb-4">{step.description}</p>
          
          {/* Step image */}
          <div className="rounded-2xl overflow-hidden shadow-lg image-reveal">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}