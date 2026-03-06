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
      // 1. Pin the container - keeping it at 150% to give user time to see everything
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", 
        pin: true,
        scrub: 1,
      });

      // 2. Rotate the device
      gsap.to(deviceRef.current, {
        rotateY: 180,
        scale: 1.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%", // Finished rotating before the pin ends
          scrub: 1,
        }
      });

      // 3. AGGRESSIVE TIMING FOR LABELS
      const labels = gsap.utils.toArray(".tech-label");
      labels.forEach((label: any, i) => {
        gsap.fromTo(label, 
          { 
            opacity: 0, 
            y: 30,
            scale: 0.7 
          },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              // All labels now trigger between 5% and 40% of the total scroll
              // This ensures the last labels ("Safe for All" and "Clinically Tested") 
              // appear almost immediately after the first two.
              start: `top+=${(i * 8) + 5}% top`, 
              end: `top+=${(i * 8) + 20}% top`,
              scrub: 0.5,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const techLabels = [
    { title: "Precision Laser Technology", pos: "top-[15%] left-[2%] md:left-[8%]" },
    { title: "Dermatologist Approved", pos: "top-[28%] right-[2%] md:right-[8%]" },
    { title: "Safe for All Skin Types", pos: "bottom-[32%] left-[2%] md:left-[8%]" },
    { title: "Clinically Tested Equipment", pos: "bottom-[15%] right-[2%] md:right-[8%]" },
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
        <div className="text-center mb-10 z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
          >
            Advanced Care Technology
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            We invest in world-class, medical-grade technology to ensure safety and precision.
          </p>
        </div>

        <div className="relative w-full max-w-5xl flex items-center justify-center">
          {/* Device Container */}
          <div ref={deviceRef} className="relative z-10 w-48 h-72 md:w-72 md:h-[450px] perspective-1000">
            <div className="w-full h-full bg-neutral-900 rounded-[40px] shadow-2xl flex items-center justify-center overflow-hidden border border-white/10">
              <img 
                src="/techshowcase.jpg" 
                alt="Technology"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
              <div className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <div className="w-6 h-6 rounded-full bg-accent animate-pulse shadow-[0_0_20px_#8b5cf6]" />
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
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 md:px-6 md:py-3 rounded-2xl shadow-xl">
                  <span className="text-white font-semibold text-xs md:text-base whitespace-nowrap">
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
