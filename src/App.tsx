import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { DemoBanner } from './components/DemoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofBar } from './components/SocialProofBar';
import { ClinicTechnologyShowcase } from './components/ClinicTechnologyShowcase';
import { FeaturedTreatments } from './components/FeaturedTreatments';
import { DoctorSection } from './components/DoctorSection';
import { ResultsSection } from './components/ResultsSection';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ClinicGallery } from './components/ClinicGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative">
      <DemoBanner />
      <Navbar />
      
      <Hero />
      <SocialProofBar />
      <ClinicTechnologyShowcase />
      <FeaturedTreatments />
      <DoctorSection />
      <ResultsSection />
      <TestimonialCarousel />
      <WhyChooseUs />
      <ClinicGallery />
      <ContactSection />
      
      <Footer />
      <FloatingActions />
    </main>
  );
}
