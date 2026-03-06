import React from 'react';
import { motion } from 'framer-motion';
import { CLINIC_DATA } from '../constants';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold tracking-tight text-primary">
                {CLINIC_DATA.name.split(' ')[0]}
                <span className="font-light text-accent">{CLINIC_DATA.name.split(' ')[1]}</span>
              </span>
            </a>
            <p className="text-primary/50 text-sm leading-relaxed mb-8">
              {CLINIC_DATA.description}
            </p>
            <div className="flex gap-4">
              <a href={CLINIC_DATA.socials.instagram} className="w-10 h-10 rounded-full bg-neutral-soft flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href={CLINIC_DATA.socials.facebook} className="w-10 h-10 rounded-full bg-neutral-soft flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-soft flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Treatments', 'Technology', 'Results', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-primary/50 text-sm hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-6">Treatments</h4>
            <ul className="space-y-4">
              {['HydraFacial', 'Laser Hair Removal', 'Acne Treatment', 'Skin Rejuvenation', 'PRP Therapy'].map((link) => (
                <li key={link}>
                  <a href="#treatments" className="text-primary/50 text-sm hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-6">Newsletter</h4>
            <p className="text-primary/50 text-sm mb-6">Subscribe to get skincare tips and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-neutral-soft border border-black/5 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-all">
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Existing Copyright and Policy Section */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <p className="text-primary/30 text-xs font-medium">
            © {new Date().getFullYear()} {CLINIC_DATA.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-primary/30 text-xs hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary/30 text-xs hover:text-primary transition-colors">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="text-primary/30 text-xs font-bold flex items-center gap-2 hover:text-primary transition-colors"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>

        {/* Integrated Sample Concept Banner */}
        <div className="pt-8 border-t border-black/5 text-center">
          <div className="text-black/40 text-[10px] uppercase tracking-[0.2em] font-bold">
            Sample website concept prepared for 
            <span className="text-black ml-1">{CLINIC_DATA.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
