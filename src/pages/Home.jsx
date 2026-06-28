import React from 'react';
import HeroSection from '../components/HeroSection';
import MenuCarousel from '../components/MenuCarousel';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';

const Home = () => {
  return (
    <main>
      <ValuesSection />
      <HeroSection />
      <MenuCarousel />
      <AboutSection />
    </main>
  );
};

export default Home;
