import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChiliIcon, MenuIcon, CloseIcon } from './ui/Icons';
import { cn } from '../utils/cn';

const navLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Spices', href: '#spices' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-maroon-dark/95 backdrop-blur-md shadow-lg py-3 glass-strong'
          : 'bg-transparent py-5'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          aria-label="Tikhori Foods - Home"
        >
          <ChiliIcon size={28} className="text-saffron" />
          <span className="font-display text-xl sm:text-2xl font-bold text-gold-light tracking-wide group-hover:text-saffron transition-colors duration-300">
            Tikhori Foods
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-cream/80 hover:text-saffron-light text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative',
                'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-saffron after:transition-all after:duration-300 hover:after:w-full',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-dark'
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={cn(
            'md:hidden text-cream p-2 rounded-lg',
            'hover:bg-saffron/10 transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron'
          )}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-maroon-dark/95 backdrop-blur-md px-4 py-4 flex flex-col gap-3 border-t border-gold/10 glass-strong">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-cream/80 hover:text-saffron-light text-sm font-medium tracking-wide uppercase py-2 border-b border-gold/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}