import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const ClinicTechnologyShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Pinned Container - Reduced height to 100% for faster exit
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%", 
        pin: true,
        scrub: 0.5, // Snappier scrub
      });

      // 2. Rotate and Scale - Happens very quickly at the start
      gsap.to(deviceRef.current, {
        rotateY: 180,
        scale: 1.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "top+=50% top", // Finish rotation early
          scrub: 1,
        }
      });

      // 3. IMMEDIATE LABEL TRIGGERING
      const labels = gsap.utils.toArray(".tech-label");
      labels.forEach((label: any, i) => {
        gsap.fromTo(label, 
          { 
            opacity: 0, 
            y: 40,
            scale: 0.6 
          },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              // All labels will now be fully visible by the time 
              // the user has scrolled only 30% of the section height
              start: `top+=${(i * 5)}% top`, 
              end: `top+=${(i * 5) + 15}% top`,
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Updated positions to ensure they don't block the center image
  const techLabels = [
    { title: "Precision Laser Technology", pos: "top-[10%] left-[5%] md:left-[10%]" },
    { title: "Dermatologist Approved", pos: "top-[25%] right-[5%] md:right-[10%]" },
    { title: "Safe for All Skin Types", pos: "bottom-[30%] left-[5%] md:left-[10%]" },
    { title: "Clinically Tested Equipment", pos: "bottom-[15%] right-[5%] md:right-[10%]" },
  ];

  return (
    <section 
      ref={containerRef} 
      id="technology" 
      className="relative h-screen bg-primary overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative h-full flex flex-col items-center justify-center">
        <div className="text-center mb-6 z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-2"
          >
            Advanced Care Technology
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            World-class medical-grade technology for safety and precision.
          </p>
        </div>

        <div className="relative w-full max-w-5xl flex items-center justify-center">
          {/* Device Container */}
          <div ref={deviceRef} className="relative z-10 w-44 h-64 md:w-72 md:h-[450px] perspective-1000">
            <div className="w-full h-full bg-neutral-900 rounded-[30px] md:rounded-[40px] shadow-2xl flex items-center justify-center overflow-hidden border border-white/10">
              <img 
                src="/techshowcase.jpg" 
                alt="Technology"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
              <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-accent animate-pulse shadow-[0_0_20px_#8b5cf6]" />
              </div>
            </div>
          </div>

          {/* Floating Labels */}
          <div ref={labelsRef} className="absolute inset-0 pointer-events-none">
            {techLabels.map((label, idx) => (
              <div 
                key={idx} 
                className={`tech-label absolute ${label.pos} z-20 flex items-center gap-3`}
              >
                <div className="hidden md:block w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_#8b5cf6]" />
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl shadow-xl">
                  <span className="text-white font-semibold text-[10px] md:text-base whitespace-nowrap">
                    {label.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
