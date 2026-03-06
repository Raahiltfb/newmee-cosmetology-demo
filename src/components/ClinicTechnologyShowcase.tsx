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
      // Pin the container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
      });

      // Rotate and scale the device
      gsap.to(deviceRef.current, {
        rotateY: 360,
        scale: 1.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
        }
      });

      // Animate labels
      const labels = gsap.utils.toArray(".tech-label");
      labels.forEach((label: any, i) => {
        gsap.fromTo(label, 
          { opacity: 0, x: i % 2 === 0 ? -50 : 50, scale: 0.8 },
          { 
            opacity: 1, 
            x: 0, 
            scale: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: `${20 + i * 20}% top`,
              end: `${40 + i * 20}% top`,
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const techLabels = [
    { title: "Precision Laser Technology", pos: "top-1/4 left-0 md:left-10" },
    { title: "Dermatologist Approved", pos: "top-1/3 right-0 md:right-10" },
    { title: "Safe for All Skin Types", pos: "bottom-1/3 left-0 md:left-10" },
    { title: "Clinically Tested Equipment", pos: "bottom-1/4 right-0 md:right-10" },
  ];

  return (
    <section ref={containerRef} id="technology" className="relative h-screen bg-primary overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative h-full flex flex-col items-center justify-center">
        <div className="text-center mb-12 z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
          >
            Advanced Skin & Hair Care Technology
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We invest in the world's most advanced medical-grade technology to ensure safety, precision, and superior results for every patient.
          </p>
        </div>

        <div className="relative w-full max-w-4xl aspect-video flex items-center justify-center">
          {/* Device Placeholder */}
          <div ref={deviceRef} className="relative z-10 w-64 h-96 md:w-80 md:h-[500px] perspective-1000">
            <div className="w-full h-full bg-gradient-to-b from-neutral-200 to-neutral-400 rounded-[40px] shadow-[0_0_50px_rgba(255,255,255,0.1)] flex items-center justify-center overflow-hidden border border-white/20">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-50 mix-blend-overlay" />
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-accent animate-pulse" />
              </div>
            </div>
          </div>

          {/* Floating Labels */}
          <div ref={labelsRef} className="absolute inset-0 pointer-events-none">
            {techLabels.map((label, idx) => (
              <div 
                key={idx} 
                className={`tech-label absolute ${label.pos} z-20 flex items-center gap-4`}
              >
                <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl">
                  <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">{label.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
