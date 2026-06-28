import React from 'react';
import HeroSection from '../components/HeroSection';
import MenuCarousel from '../components/MenuCarousel';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <MenuCarousel />
      <AboutSection />
      <ValuesSection />
    </main>
  );
};

export default Home;
