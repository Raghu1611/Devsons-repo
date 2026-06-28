import React from 'react';
import HeroSection from '../components/HeroSection';
import MenuCarousel from '../components/MenuCarousel';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';

const Home = () => {
  return (
    <main className="bg-primary min-h-screen pt-[90px] lg:pt-[100px] selection:bg-accent selection:text-primary overflow-hidden">
      <ValuesSection />
      <HeroSection />
      <MenuCarousel />
      <AboutSection />
    </main>
  );
};

export default Home;
