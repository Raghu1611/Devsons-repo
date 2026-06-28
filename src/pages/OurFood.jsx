import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PartnerStrip from '../components/PartnerStrip';
import { Crown } from 'lucide-react';

const OurFood = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="bg-primary min-h-screen pt-[90px] lg:pt-[100px] overflow-hidden selection:bg-accent selection:text-primary">
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-[#333]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: 'url("/images/devsons_storefront.png")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/80"></div>
        
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-white font-heading uppercase tracking-[0.2em] drop-shadow-2xl mb-6"
            style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
          >
            OUR FOOD
          </motion.h1>
          <motion.p
            className="text-accent font-review italic drop-shadow-lg max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            "Handcrafted daily. Never frozen. The ultimate burger experience."
          </motion.p>
        </motion.div>
      </div>

      {/* Our Craft Section */}
      <div className="relative w-full py-32 lg:py-48 flex items-center bg-secondary border-b border-[#333]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <p className="text-gray-400 font-heading tracking-[0.2em] uppercase mb-8 text-sm sm:text-base">
              Always Fresh. Never Frozen.
            </p>
            <div className="border-l-[6px] border-[#D4AF37] pl-6 mb-10">
              <h2 className="text-white font-heading uppercase leading-[0.9]" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}>
                OUR FOOD<br/>
                IS OUR CRAFT
              </h2>
            </div>
            <p className="text-gray-300 font-body leading-relaxed mb-12 max-w-2xl" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.3rem)' }}>
              We don't believe in frozen patties or meats. We use quality ingredients including fresh chicken, fresh beef, and also make our own veggie patties using fresh potato. Nobody likes a frozen burger.
            </p>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center items-center relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full scale-75"></div>
            <img 
              src="/images/devsons_signature_burger.png" 
              alt="Fresh Handmade Burger" 
              className="w-full max-w-lg h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(212,175,55,0.2)] hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="w-full bg-primary flex flex-col lg:flex-row border-b border-[#333]">
        <div className="w-full lg:w-1/2 flex items-center justify-center py-24 px-6 sm:px-12 xl:px-24 border-r border-[#333]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl w-full"
          >
            <h2 className="text-white font-heading uppercase tracking-wide leading-none mb-6" style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)' }}>
              OUR STORY
            </h2>
            <div className="w-24 h-[2px] bg-[#D4AF37] mb-10"></div>
            
            <h3 className="text-accent font-heading uppercase tracking-wide leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              OUR CONCEPT IS VERY SIMPLE.
            </h3>
            
            <div className="text-gray-300 font-body leading-relaxed space-y-6 mb-12" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)' }}>
              <p>
                Giving the customer a burger that ticks all the boxes from taste to price to quality. A burger should be simple and great tasting. It shouldn't be made complicated. We use the freshest ingredients and bring them together under one bun to create a burger that tastes great.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full lg:w-1/2 flex items-center justify-center p-0 bg-secondary overflow-hidden">
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src="/images/devsons_packaging.png"
            alt="Devson's Premium Packaging"
            className="w-full h-full object-cover min-h-[500px]"
          />
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-primary border-b border-[#333]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-heading tracking-widest uppercase mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)' }}>
              Our Signature Classic
            </p>
            <h2 className="text-white font-heading uppercase tracking-widest leading-[0.9] mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
              The Premium Beef Burger
            </h2>
            <div className="text-gray-300 font-body leading-relaxed space-y-6 opacity-90 mb-10" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)' }}>
              <p>
                A masterpiece of flavor. Our 3oz beef patties are made from 100% pure, premium cuts of beef, ground fresh daily in our kitchen. We smash them on a smoking hot grill to create a beautiful caramelized crust while keeping the inside perfectly juicy.
              </p>
              <p>
                Topped with melted American cheese, crisp lettuce, fresh tomatoes, and our iconic secret Devson's sauce, all hugged by a pillowy soft toasted potato bun. It’s the burger that started it all.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="order-2 lg:order-2 flex flex-col justify-center items-center relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/images/devsons_loaded_fries.png" 
              alt="Devson's Loaded Fries" 
              className="w-full max-w-xl h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(212,175,55,0.15)] hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>

      <PartnerStrip />
    </main>
  );
};

export default OurFood;
