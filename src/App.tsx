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
    <div className="min-h-screen bg-warm-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      
      {/* Divider: Hero -> Story */}
      <div className="h-1 bg-gradient-to-r from-saffron via-chili to-turmeric" />
      
      <OurStory />
      
      {/* Divider: Story -> Spices */}
      <div className="section-divider" />
      
      <SpiceRange />
      
      {/* Divider: Spices -> Differentiators */}
      <div className="h-1 bg-gradient-to-r from-chili via-saffron to-gold" />
      
      <WhatMakesUsDifferent />
      
      {/* Divider: Differentiators -> Process */}
      <div className="section-divider" />
      
      <FarmToJar />
      
      {/* Divider: Process -> Testimonials */}
      <div className="h-1 bg-gradient-to-r from-saffron via-chili to-turmeric" />
      
      <Testimonials />
      
      {/* Divider: Testimonials -> Gallery */}
      <div className="h-1 bg-gradient-to-r from-gold via-saffron to-chili" />
      
      <Gallery />
      
      {/* Divider: Gallery -> Contact */}
      <div className="section-divider" />
      
      <Contact />
      
      <Footer />
    </div>
  );
}
