import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Microscope, HeartPulse } from 'lucide-react';

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Shield size={32} />,
      title: "Experienced Doctors",
      description: "Our board-certified specialists have over 12 years of experience in clinical and cosmetic dermatology."
    },
    {
      icon: <Microscope size={32} />,
      title: "Modern Equipment",
      description: "We use US-FDA approved laser technology and state-of-the-art diagnostic tools for every procedure."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Personalized Care",
      description: "Every treatment plan is customized to your unique skin type, concerns, and aesthetic goals."
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Safe Environment",
      description: "We maintain the highest standards of hygiene and safety protocols in our premium clinic space."
    }
  ];

  return (
    <section className="py-24 bg-neutral-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Why Choose Our Clinic
          </h2>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg">
            We combine medical expertise with luxury care to provide an unparalleled patient experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4">
                {benefit.title}
              </h3>
              <p className="text-primary/50 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
