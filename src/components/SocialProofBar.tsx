import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { CLINIC_DATA } from '../constants';

const Counter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ''));
  
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
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0</span>;
};

export const SocialProofBar = () => {
  const metrics = [
    { label: "Google Rating", value: CLINIC_DATA.googleRating, suffix: "★" },
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
                <Counter value={metric.value} suffix={metric.suffix} />
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
