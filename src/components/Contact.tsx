import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { fadeInUp, sectionReveal } from '../utils/motion';
import { MailIcon, PhoneIcon, MapPinIcon, ArrowRightIcon, CheckIcon, ChiliIcon, InstagramIcon, FacebookIcon, TwitterIcon, YouTubeIcon } from './ui/Icons';

const socialLinks = [
  { name: 'Instagram', Icon: InstagramIcon },
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'Twitter', Icon: TwitterIcon },
  { name: 'YouTube', Icon: YouTubeIcon },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-maroon-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mandala-bg opacity-20" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-saffron/5 translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-chili/5 -translate-x-1/3 translate-y-1/3" aria-hidden="true" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-4">Get in Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6">
            Let&apos;s Talk Spice
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-cream/50 max-w-xl mx-auto text-lg">
            Have a question, want to place a bulk order, or just want to share your favorite recipe? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gold/70 text-sm font-medium mb-2">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="input-premium"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gold/70 text-sm font-medium mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="input-premium"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gold/70 text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="input-premium resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="btn-warm w-full px-8 py-4 bg-saffron text-white font-semibold text-sm uppercase tracking-wider rounded-xl border-2 border-saffron hover:border-chili transition-all focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-dark"
              >
                <span className="flex items-center justify-center gap-2">
                  {submitted ? (
                    <>
                      <CheckIcon size={16} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRightIcon size={16} />
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-maroon/30 border border-gold/10 hover:border-gold/25 transition-all group">
                <div className="w-12 h-12 shrink-0 rounded-full bg-saffron/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MailIcon size={22} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-gold-light font-semibold mb-1">Email Us</h4>
                  <p className="text-cream/50 text-sm">hello@tikhorifoods.com</p>
                  <p className="text-cream/50 text-sm">orders@tikhorifoods.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-maroon/30 border border-gold/10 hover:border-gold/25 transition-all group">
                <div className="w-12 h-12 shrink-0 rounded-full bg-saffron/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PhoneIcon size={22} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-gold-light font-semibold mb-1">WhatsApp / Call</h4>
                  <p className="text-cream/50 text-sm">+91 98765 43210</p>
                  <p className="text-cream/50 text-sm">Mon–Sat, 9 AM – 7 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-maroon/30 border border-gold/10 hover:border-gold/25 transition-all group">
                <div className="w-12 h-12 shrink-0 rounded-full bg-saffron/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPinIcon size={22} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-gold-light font-semibold mb-1">Visit Us</h4>
                  <p className="text-cream/50 text-sm">Tikhori Foods Pvt. Ltd.</p>
                  <p className="text-cream/50 text-sm">Industrial Area, Jodhpur,</p>
                  <p className="text-cream/50 text-sm">Rajasthan 342001, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-gold/70 text-sm font-medium uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map(({ name, Icon }) => (
                  <a
                    key={name}
                    href="#"
                    className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-saffron hover:border-saffron hover:bg-saffron/10 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-dark"
                    aria-label={name}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Brand Seal */}
            <div className="flex items-center gap-4 pt-4 border-t border-gold/10">
              <div className="w-16 h-16 rounded-full border-2 border-gold/30 flex items-center justify-center">
                <ChiliIcon size={28} className="text-saffron" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-gold-light">Tikhori Foods</p>
                <p className="text-cream/40 text-xs uppercase tracking-wider">Premium Indian Spices Since 1987</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}