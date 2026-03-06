import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { REVIEWS } from '../constants';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Trusted by Thousands
          </h2>
          <div className="flex items-center justify-center gap-2 text-accent">
            <Star size={20} className="fill-accent" />
            <Star size={20} className="fill-accent" />
            <Star size={20} className="fill-accent" />
            <Star size={20} className="fill-accent" />
            <Star size={20} className="fill-accent" />
            <span className="ml-2 text-primary font-bold">4.8/5 on Google Reviews</span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-neutral-soft rounded-[40px] p-8 md:p-16 relative"
            >
              <Quote size={60} className="text-accent/10 absolute top-10 left-10" />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg">
                  <img 
                    src={REVIEWS[currentIndex].image} 
                    alt={REVIEWS[currentIndex].name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xl md:text-2xl text-primary/80 italic mb-8 leading-relaxed">
                  "{REVIEWS[currentIndex].text}"
                </p>
                <div className="font-display font-bold text-xl text-primary">
                  {REVIEWS[currentIndex].name}
                </div>
                <div className="text-accent flex gap-1 mt-2">
                  {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
