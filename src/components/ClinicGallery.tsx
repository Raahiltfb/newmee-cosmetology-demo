import React from 'react';
import { motion } from 'framer-motion';

export const ClinicGallery = () => {
  const images = [
    "/interior1.jpg",
    "/interior2.jpg",
    "/interior3.jpg",
    "/interior4.jpg",
    "/interior5.jpg",
    "/interior6.jpg",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Inside Our Clinic
          </h2>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg">
            A glimpse into our modern, tranquil space designed for your comfort and relaxation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="aspect-square rounded-[32px] overflow-hidden group relative"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
