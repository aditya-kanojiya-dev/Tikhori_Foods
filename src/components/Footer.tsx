export default function Footer() {
  return (
    <footer className="relative bg-maroon-dark border-t border-gold/10">
      {/* Paisley border */}
      <div className="h-2 bg-gradient-to-r from-saffron via-chili to-turmeric opacity-60" />
      
      <div className="paisley-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌶️</span>
              <span className="font-display text-xl font-bold text-gold-light">Tikhori Foods</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-cream/40">
              <a href="#story" className="hover:text-saffron transition-colors">Our Story</a>
              <a href="#spices" className="hover:text-saffron transition-colors">Spices</a>
              <a href="#process" className="hover:text-saffron transition-colors">Process</a>
              <a href="#gallery" className="hover:text-saffron transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-saffron transition-colors">Contact</a>
            </div>

            {/* Copyright */}
            <p className="text-cream/25 text-xs">
              &copy; {new Date().getFullYear()} Tikhori Foods. All rights reserved.
            </p>
          </div>

          {/* Decorative bottom line */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-gold/20" />
            <span className="text-gold/30 text-xs italic font-display">Spice up your kitchen, the authentic way</span>
            <div className="w-12 h-[1px] bg-gold/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
