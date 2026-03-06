import React, { useState, useRef, useEffect } from 'react';
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
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h3 className="text-2xl font-display font-bold text-primary">{title}</h3>
      <div 
        ref={containerRef}
        className="relative w-full max-w-2xl aspect-[4/3] rounded-[32px] overflow-hidden cursor-ew-resize select-none shadow-2xl border border-black/5"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Before Image (Overlay) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before" 
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current?.offsetWidth }}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center gap-1">
            <div className="w-1 h-4 bg-accent/30 rounded-full" />
            <div className="w-1 h-4 bg-accent/30 rounded-full" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-6 left-6 bg-black/30 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full z-10">
          BEFORE
        </div>
        <div className="absolute bottom-6 right-6 bg-black/30 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full z-10">
          AFTER
        </div>
      </div>
    </div>
  );
};

export const ResultsSection = () => {
  return (
    <section id="results" className="py-24 bg-neutral-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

Refer to  the attached image - can you zoom out the images a bit (after1 before1 after2 before2 since they are too zoomed in ? Provide full code with this change made
