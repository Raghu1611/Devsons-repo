import React from 'react';
import HeroSection from '../components/HeroSection';
import PartnerStrip from '../components/PartnerStrip';
import MenuCarousel from '../components/MenuCarousel';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <PartnerStrip />
      <MenuCarousel />
      <AboutSection />
      <ValuesSection />
      <TestimonialsCarousel />
    </main>
  );
};

export default Home;
