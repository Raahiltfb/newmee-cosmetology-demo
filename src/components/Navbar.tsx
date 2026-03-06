import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { CLINIC_DATA } from '../constants';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Treatments', href: '#treatments' },
    { name: 'Technology', href: '#technology' },
    { name: 'Results', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Updated Logo Section */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="h-10 md:h-12 w-auto overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img 
              src="/newmeelogo.png" 
              alt={CLINIC_DATA.name} 
              className="h-full w-full object-contain"
            />
          </div>
          {/* Optional: Keeping text logo hidden on mobile, visible on desktop if you want both */}
          <span className="hidden lg:block font-display text-xl font-bold tracking-tight text-primary">
            {CLINIC_DATA.name.split(' ')[0]}
            <span className="font-light text-accent ml-1">{CLINIC_DATA.name.split(' ')[1]}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-primary/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-primary/70 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-black/5">
              <a
                href={`tel:${CLINIC_DATA.phone}`}
                className="flex items-center justify-center gap-2 bg-neutral-soft text-primary py-3 rounded-xl font-medium"
              >
                <Phone size={18} /> Call Us
              </a>
              <a
                href={`https://wa.me/${CLINIC_DATA.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-medium"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
