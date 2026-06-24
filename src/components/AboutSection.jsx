import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div id="our-food" className="bg-white py-0 flex flex-col lg:flex-row min-h-screen overflow-hidden">
      {/* Image Half */}
      <motion.div 
        className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img 
          src="https://burgerandsauce.com/wp-content/uploads/2021/11/burger-and-sauce-433-lifestyle-rgb-1200x1200.jpg" 
          alt="Fresh ingredients" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Half */}
      <motion.div 
        className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 py-16 lg:py-20 lg:px-16 xl:px-24 bg-white"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <motion.p 
          className="text-accent font-heading tracking-widest uppercase mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Awesome With Our Signature Sauce
        </motion.p>
        <motion.h2 
          className="text-black font-heading uppercase tracking-widest leading-[0.85] mb-8 lg:mb-10" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          The Burger Is The Star Of The Show.
        </motion.h2>
        <motion.div 
          className="text-black font-body leading-relaxed mb-10 lg:mb-12 space-y-6" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>
            At Burger & Sauce, we believe that great taste comes from fresh ingredients. That's why our beef, chicken, and veggie burger patties are handmade in-store every single day. We never use frozen meat.
          </p>
          <p>
            Our signature sauces are crafted to perfectly complement every bite, delivering a taste experience that keeps our customers coming back for more. Quality you can taste, freshness you can trust.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#d4af37", color: "#000000" }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white font-heading uppercase hover:bg-accent hover:text-black transition-colors w-full sm:w-auto text-center" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)', padding: 'clamp(1rem, 1.5vw, 1.25rem) clamp(2rem, 3vw, 2.5rem)' }}>
            Our Food
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#000000", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            className="border-4 border-black text-black font-heading uppercase hover:bg-black hover:text-white transition-colors w-full sm:w-auto text-center" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)', padding: 'clamp(1rem, 1.5vw, 1.25rem) clamp(2rem, 3vw, 2.5rem)' }}>
            View Our Menu
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
