import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { CLINIC_DATA } from '../constants';

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-neutral-soft">
      {/* Background Accents */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Column - Removed bg-white box and padding */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Star size={14} className="fill-accent" />
            <span className="tabular-nums tracking-widest">
              {CLINIC_DATA.googleRating.toString().includes('.') 
                ? CLINIC_DATA.googleRating 
                : `${CLINIC_DATA.googleRating}.0`}
            </span> 
            <span className="ml-1">Google Rating</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-primary tracking-tight">
            {CLINIC_DATA.tagline}
          </h1>

          <p className="text-lg text-primary/60 mb-10 max-w-lg leading-relaxed">
            {CLINIC_DATA.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              Book Appointment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`https://wa.me/${CLINIC_DATA.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white border border-black/10 text-primary px-8 py-4 rounded-full font-semibold hover:bg-neutral-soft transition-all hover:scale-105 active:scale-95"
            >
              Contact Clinic
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-primary/70">
              <ShieldCheck size={20} className="text-accent" />
              Certified Professionals
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-primary/70">
              <Zap size={20} className="text-accent" />
              Modern Equipment
            </div>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10 bg-white">
            <img
              src="/landingnew.png"
              alt="NewMee Cosmetology"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>
          
          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-black/5 hidden sm:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Star size={24} className="fill-accent" />
              </div>
              <div>
                <div className="text-xl font-bold text-primary tabular-nums">
                  {CLINIC_DATA.googleRating.toString().includes('.') 
                    ? CLINIC_DATA.googleRating 
                    : `${CLINIC_DATA.googleRating}.0`}/5
                </div>
                <div className="text-xs text-primary/50 font-medium">Patient Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
