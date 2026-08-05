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
        <main>
          <Hero />
          <div className="divider-gold-thick" aria-hidden="true" />
          <OurStory />
          <div className="divider-gold" aria-hidden="true" />
          <SpiceRange />
          <div className="divider-gold" aria-hidden="true" />
          <WhatMakesUsDifferent />
          <div className="divider-gold" aria-hidden="true" />
          <FarmToJar />
          <div className="divider-gold" aria-hidden="true" />
          <Testimonials />
          <div className="divider-gold" aria-hidden="true" />
          <Gallery />
          <div className="divider-gold" aria-hidden="true" />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReducedMotionProvider>
  );
}
