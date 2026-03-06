import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export const BeforeAfterSlider = ({ beforeImage, afterImage, title }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h3 className="text-2xl font-display font-bold text-primary">{title}</h3>
      <div 
        ref={containerRef}
        className="relative w-full max-w-2xl aspect-[4/3] rounded-[32px] overflow-hidden cursor-ew-resize select-none shadow-2xl border border-black/5 bg-neutral-100"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* After Image (Background) - Changed to object-contain and scaled to 'zoom out' */}
        <img 
          src={afterImage} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-contain p-4 scale-95"
          referrerPolicy="no-referrer"
        />
        
        {/* Before Image (Overlay) - Container width controlled by slider */}
        <div 
          className="absolute inset-0 h-full overflow-hidden z-10"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* Before Image - Matching object-contain and scale-95 to ensure alignment */}
          <img 
            src={beforeImage} 
            alt="Before" 
            className="absolute inset-0 h-full object-contain p-4 scale-95 max-none"
            style={{ width: containerRef.current?.offsetWidth }}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center gap-1 border border-neutral-200">
            <div className="w-0.5 h-4 bg-neutral-400 rounded-full" />
            <div className="w-0.5 h-4 bg-neutral-400 rounded-full" />
          </div>
        </div>

        {/* Labels - Positioned inside to stay visible with zoomed out images */}
        <div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md text-white text-[10px] tracking-widest font-bold px-3 py-1.5 rounded-full z-30">
          BEFORE
        </div>
        <div className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-md text-white text-[10px] tracking-widest font-bold px-3 py-1.5 rounded-full z-30">
          AFTER
        </div>
      </div>
    </div>
  );
};

export const ResultsSection = () => {
  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
          >
            Real Results, Real People
          </motion.h2>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg">
            Witness the transformative power of our treatments through our collection of unretouched before and after results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <BeforeAfterSlider 
            title="Skin Brightening"
            beforeImage="/before1.jpg"
            afterImage="/after1.jpg"
          />
          <BeforeAfterSlider 
            title="Microneedling"
            beforeImage="/before2.jpg"
            afterImage="/after2.jpg"
          />
        </div>
      </div>
    </section>
  );
};
