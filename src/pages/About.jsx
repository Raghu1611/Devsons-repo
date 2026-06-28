import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import PartnerStrip from '../components/PartnerStrip';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';

const About = () => {
  return (
    <main className="bg-primary min-h-screen pt-[90px] lg:pt-[100px] selection:bg-accent selection:text-primary overflow-hidden">
      
      {/* Our Story Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-[#333]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            <h1 className="text-white font-heading uppercase tracking-widest mb-6 leading-none" style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)' }}>
              OUR STORY
            </h1>
            
            <div className="h-[2px] w-24 bg-accent mb-8"></div>
            
            <h2 className="text-accent font-heading uppercase tracking-widest leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              OUR CONCEPT IS<br/>VERY SIMPLE.
            </h2>
            
            <div className="space-y-6 text-gray-300 font-body leading-relaxed max-w-xl text-lg">
              <p>
                Giving the customer a burger that ticks all the boxes from taste to price to quality. A burger should be simple and great tasting. It shouldn't be made complicated.
              </p>
              <p>
                We use the freshest ingredients and bring them together under our signature techniques. No frozen patties, no compromises—just pure, unapologetically bold flavours in every single bite.
              </p>
            </div>
          </motion.div>
          
          {/* Right Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] lg:min-h-[600px] w-full rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full"></div>
            <img 
              src="/images/devsons_packaging.png" 
              alt="Devson's Packaging and Fries" 
              className="w-full h-full object-cover relative z-10 rounded-lg drop-shadow-[0_20px_50px_rgba(212,175,55,0.15)] mix-blend-lighten"
              onError={(e) => {
                e.target.src = '/images/devsons_signature_burger.png';
              }}
            />
          </motion.div>

        </div>
      </section>

      {/* Reused Sections for Consistency */}
      <AboutSection />
      {/* Attractive Food Showcase Gallery */}
      <section className="py-24 border-b border-[#333] bg-primary overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-accent"></div>
              <h2 className="text-accent font-body tracking-[0.2em] uppercase text-sm font-semibold">Taste The Difference</h2>
              <div className="h-[1px] w-8 bg-accent"></div>
            </div>
            <h3 className="text-white font-heading uppercase text-4xl lg:text-6xl tracking-wide drop-shadow-lg">CRAFTED TO PERFECTION</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: 'Oklahoma Classic', img: '/images/oklahoma_classic.png' },
              { name: 'BBQ Bacon Beast', img: '/images/bbq_beef_bacon_beast.png' },
              { name: 'Mac Algerian', img: '/images/mac_algerian_attack.png' },
              { name: 'Devson\'s Original', img: '/images/devsons_signature_burger.png' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-secondary rounded-2xl overflow-hidden border border-[#333] hover:border-accent transition-colors duration-500 h-[380px] flex flex-col justify-end cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image */}
                <div className="absolute inset-0 flex justify-center items-center p-6 lg:p-8">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-contain mix-blend-lighten transform group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]" 
                  />
                </div>
                
                {/* Text Overlay */}
                <div className="relative z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent p-6 pt-24 text-center transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-heading uppercase text-xl lg:text-2xl tracking-wider">{item.name}</h4>
                  <div className="w-12 h-[2px] bg-accent mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
