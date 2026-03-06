import React from 'react';
import { motion } from 'framer-motion';
import { TREATMENTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const FeaturedTreatments = () => {
  return (
    <section id="treatments" className="py-24 bg-neutral-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
            >
              Featured Treatments
            </motion.h2>
            <p className="text-primary/60 text-lg">
              Discover our range of specialized aesthetic and dermatological procedures designed to enhance your natural beauty.
            </p>
          </div>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            href="#contact"
            className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All Treatments <ArrowUpRight size={20} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {treatment.name}
                </h3>
                <p className="text-primary/50 leading-relaxed mb-6">
                  {treatment.description}
                </p>
                <button className="text-sm font-bold text-primary flex items-center gap-2 group/btn">
                  Learn More 
                  <span className="w-8 h-[1px] bg-primary group-hover/btn:w-12 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
