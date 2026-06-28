import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import PartnerStrip from '../components/PartnerStrip';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';

const About = () => {
  return (
    <main className="bg-primary min-h-screen pt-[90px] lg:pt-[100px] selection:bg-accent selection:text-primary overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center items-center overflow-hidden border-b border-[#333]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: 'url("/images/devsons_storefront.png")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/80"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
        >
          <Crown className="w-16 h-16 text-accent mb-6" />
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-accent"></div>
            <p className="text-accent font-body tracking-[0.3em] uppercase text-sm font-semibold">Since 2024</p>
            <div className="h-[1px] w-12 bg-accent"></div>
          </div>
          <h1 className="text-white font-heading uppercase tracking-widest drop-shadow-2xl mb-6 leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            OUR <span className="text-accent">STORY</span>
          </h1>
          <p className="text-gray-300 font-body text-lg md:text-xl font-light max-w-2xl mx-auto">
            Not just burgers. It's a Devson's experience. We set out to redefine the premium smash burger, using only the finest ingredients and unapologetically bold flavours.
          </p>
        </motion.div>
      </div>

      {/* The Journey */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white font-heading text-4xl lg:text-5xl uppercase tracking-widest mb-8 leading-tight">
              Smashed to <span className="text-accent">Perfection</span>
            </h2>
            <div className="space-y-6 text-gray-400 font-body leading-relaxed font-light">
              <p>
                The Devson's journey began with a simple belief: a burger should be more than just fast food. It should be an experience, crafted with passion and precision.
              </p>
              <p>
                We spent months perfecting our signature smash technique, ensuring every 3oz 100% Angus beef patty achieves that legendary crispy crust while locking in the juicy flavour inside. 
              </p>
              <p>
                Paired with our bespoke house-made sauces, perfectly melted double American cheese, and toasted potato buns, every bite of a Devson's burger is designed to be unforgettable.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-accent font-heading text-3xl mb-2">100%</h4>
                <p className="text-white font-body text-xs uppercase tracking-widest font-bold">Pure Angus Beef</p>
              </div>
              <div>
                <h4 className="text-accent font-heading text-3xl mb-2">0%</h4>
                <p className="text-white font-body text-xs uppercase tracking-widest font-bold">Frozen Ingredients</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full"></div>
            <img 
              src="/images/devsons_signature_burger.png" 
              alt="Devson's Signature Burger" 
              className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Reused Sections for Consistency */}
      <AboutSection />
      <ValuesSection />

    </main>
  );
};

export default About;
