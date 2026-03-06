import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { CLINIC_DATA } from '../constants';

const Counter = ({ value, suffix = "", isDecimal = false }: { value: string, suffix?: string, isDecimal?: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  
  // Parse as float if it's a decimal, otherwise int
  const numericValue = isDecimal ? parseFloat(value) : parseInt(value.replace(/\D/g, ''));
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue);
    }
  }, [inView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        if (isDecimal) {
          // Fix to 1 decimal point for the rating
          ref.current.textContent = latest.toFixed(1) + suffix;
        } else {
          ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
        }
      }
    });
  }, [springValue, suffix, isDecimal]);

  return <span ref={ref} className="tabular-nums">0</span>;
};

export const SocialProofBar = () => {
  const metrics = [
    { 
      label: "Google Rating", 
      value: CLINIC_DATA.googleRating, 
      suffix: "★",
      isDecimal: true // Flag to handle the decimal point
    },
    { label: "Happy Clients", value: CLINIC_DATA.happyClients, suffix: "+" },
    { label: "Years Experience", value: CLINIC_DATA.experience, suffix: "+" },
    { label: "Treatments Offered", value: CLINIC_DATA.treatmentsCount, suffix: "+" },
  ];

  return (
    <div className="bg-white py-12 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center md:border-r last:border-0 border-black/5 px-4">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                <Counter 
                  value={metric.value} 
                  suffix={metric.suffix} 
                  isDecimal={metric.isDecimal} 
                />
              </div>
              <div className="text-xs md:text-sm font-medium text-primary/40 uppercase tracking-widest">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
