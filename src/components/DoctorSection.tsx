import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Heart } from 'lucide-react';
import { CLINIC_DATA } from '../constants';

export const DoctorSection = () => {
  const trustIndicators = [
    { icon: <ShieldCheck className="text-accent" />, text: "Board Certified Dermatologist" },
    { icon: <Award className="text-accent" />, text: "12+ Years of Clinical Excellence" },
    { icon: <Users className="text-accent" />, text: "Personalized Patient Care" },
    { icon: <Heart className="text-accent" />, text: "Advanced Medical Equipment" },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=1200"
                alt="Lead Doctor"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl -z-10" />
            
            <div className="absolute bottom-10 right-10 bg-white p-6 rounded-3xl shadow-xl z-20 border border-black/5">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">12+</div>
                <div className="text-xs text-primary/50 font-medium uppercase tracking-widest">Years Exp</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              Meet Our Expert
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              Dr. Sarah Mitchell <br />
              <span className="text-primary/40 font-light">MD, FAAD (Dermatology)</span>
            </h2>
            <p className="text-primary/60 text-lg mb-8 leading-relaxed">
              With over a decade of experience in medical and cosmetic dermatology, Dr. Mitchell is dedicated to providing evidence-based treatments that deliver natural, long-lasting results. She believes in a holistic approach to skin health, combining advanced technology with personalized care.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {trustIndicators.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-soft flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-primary/80">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              Consult Dr. Mitchell
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
