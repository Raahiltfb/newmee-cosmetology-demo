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
      // 1. Pin the container
      const mainTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", // Reduced scroll length for snappier feel
        pin: true,
        scrub: 1,
      });

      // 2. Rotate and scale the device - happens over the whole scroll
      gsap.to(deviceRef.current, {
        rotateY: 180, // 360 can sometimes be too fast, 180 feels more "showcase"
        scale: 1.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
        }
      });

      // 3. Animate labels - Adjusted timing to happen DURING the pin
      const labels = gsap.utils.toArray(".tech-label");
      labels.forEach((label: any, i) => {
        gsap.fromTo(label, 
          { 
            opacity: 0, 
            x: i % 2 === 0 ? -30 : 30, 
            scale: 0.9 
          },
          { 
            opacity: 1, 
            x: 0, 
            scale: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              // These start points ensure labels appear sequentially while pinned
              start: `top+=${(i * 30)}% top`, 
              end: `top+=${(i * 30) + 20}% top`,
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const techLabels = [
    { title: "Precision Laser Technology", pos: "top-[10%] left-[-5%] md:left-[5%]" },
    { title: "Dermatologist Approved", pos: "top-[25%] right-[-5%] md:right-[5%]" },
    { title: "Safe for All Skin Types", pos: "bottom-[25%] left-[-5%] md:left-[5%]" },
    { title: "Clinically Tested Equipment", pos: "bottom-[10%] right-[-5%] md:right-[5%]" },
  ];

  return (
    <section 
      ref={containerRef} 
      id="technology" 
      className="relative h-screen bg-primary overflow-hidden flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative h-full flex flex-col items-center justify-center">
        <div className="text-center mb-12 z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
          >
            Advanced Care Technology
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            We invest in the world's most advanced medical-grade technology to ensure safety, precision, and superior results for every patient.
          </p>
        </div>

        <div className="relative w-full max-w-4xl flex items-center justify-center">
          {/* Device Container */}
          <div ref={deviceRef} className="relative z-10 w-56 h-80 md:w-80 md:h-[500px] perspective-1000">
            <div className="w-full h-full bg-neutral-800 rounded-[40px] shadow-[0_0_50px_rgba(255,255,255,0.1)] flex items-center justify-center overflow-hidden border border-white/20">
              {/* Local Image from public/techshowcase.jpg */}
              <img 
                src="/techshowcase.jpg" 
                alt="Advanced Technology"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              
              <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <div className="w-8 h-8 rounded-full bg-accent animate-pulse shadow-[0_0_20px_#8b5cf6]" />
              </div>
            </div>
          </div>

          {/* Floating Labels - Adjusted positioning to prevent overlap */}
          <div ref={labelsRef} className="absolute inset-0 pointer-events-none">
            {techLabels.map((label, idx) => (
              <div 
                key={idx} 
                className={`tech-label absolute ${label.pos} z-20 flex items-center gap-3`}
              >
                {/* Visual Connector Dot */}
                <div className="hidden md:block w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 md:px-6 md:py-3 rounded-2xl shadow-2xl">
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
