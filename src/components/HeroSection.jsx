import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div 
      ref={ref}
      className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-white overflow-hidden border-b border-gray-200"
    >
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat origin-top"
        style={{ 
          backgroundImage: 'url("https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce_hr_early_2020_77-2048x1367.jpg")',
          y: backgroundY,
          scale: 1.1
        }}
      />
      
      {/* Dark Overlay for rich vibrant image */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-24 lg:pt-32 pb-16"
        style={{ y: textY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        
        <motion.h1 
          className="text-white font-heading uppercase tracking-widest leading-none mb-8 lg:mb-12 drop-shadow-2xl" 
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          FRESH EVERYDAY.<br/><span className="text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">NEVER FROZEN.</span>
        </motion.h1>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-4 lg:mt-8 w-full sm:w-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-4 border-white text-white font-heading uppercase hover:bg-white hover:text-black transition-colors w-full sm:w-auto" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)', padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)' }}>
            DOWNLOAD MENU
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-black font-heading uppercase hover:bg-white transition-colors w-full sm:w-auto" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)', padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)' }}>
            ORDER ONLINE
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
