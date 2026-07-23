import { ReducedMotionProvider } from './context/ReducedMotionContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import SpiceRange from './components/SpiceRange';
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent';
import FarmToJar from './components/FarmToJar';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ReducedMotionProvider>
      <div className="min-h-screen bg-warm-white">
        <ScrollProgress />
        <Navbar />
        <Hero />
        
        {/* Divider: Hero -> Story */}
        <div className="divider-gold-thick" aria-hidden="true" />
        
        <OurStory />
        
        {/* Divider: Story -> Spices */}
        <div className="divider-gold" aria-hidden="true" />
        
        <SpiceRange />
        
        {/* Divider: Spices -> Differentiators */}
        <div className="divider-gold" aria-hidden="true" />
        
        <WhatMakesUsDifferent />
        
        {/* Divider: Differentiators -> Process */}
        <div className="divider-gold" aria-hidden="true" />
        
        <FarmToJar />
        
        {/* Divider: Process -> Testimonials */}
        <div className="divider-gold" aria-hidden="true" />
        
        <Testimonials />
        
        {/* Divider: Testimonials -> Gallery */}
        <div className="divider-gold" aria-hidden="true" />
        
        <Gallery />
        
        {/* Divider: Gallery -> Contact */}
        <div className="divider-gold" aria-hidden="true" />
        
        <Contact />
        
        <Footer />
      </div>
    </ReducedMotionProvider>
  );
}