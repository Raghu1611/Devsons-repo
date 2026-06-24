import React from 'react';
import Navbar from './components/Navbar';
import HeroTicker from './components/HeroTicker';
import HeroSection from './components/HeroSection';
import ServicesCarousel from './components/ServicesCarousel';
import AboutSection from './components/AboutSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ValuesSection from './components/ValuesSection';
import BlogSection from './components/BlogSection';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroTicker />
      <HeroSection />
      <ServicesCarousel />
      <AboutSection />
      <TestimonialsCarousel />
      <ValuesSection />
      <BlogSection />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;
