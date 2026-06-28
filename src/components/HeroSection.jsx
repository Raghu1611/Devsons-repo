import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      className="relative w-full min-h-[85vh] flex items-center justify-center bg-primary overflow-hidden border-b border-[#333] pt-[100px]"
    >
      {/* Hero Background - Storefront Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url("/images/devsons_storefront.png")' }}
      ></div>
      
      {/* Dark Overlay for depth and text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 py-12">
        {/* Left Text Content */}
        <motion.div 
          className="text-center lg:text-left flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-6"
          >
              <div className="h-[1px] w-12 sm:w-20 bg-accent"></div>
              <p className="text-accent font-body tracking-[0.3em] uppercase text-xs sm:text-sm font-semibold">Home of Burgers</p>
              <div className="h-[1px] w-12 sm:w-20 bg-accent"></div>
          </motion.div>

          <motion.h1 
            className="text-white font-heading uppercase tracking-widest leading-tight mb-8 lg:mb-12 drop-shadow-2xl" 
            style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            SMASHED. SEASONED.<br/><span className="text-accent drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">LEGENDARY.</span>
          </motion.h1>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 lg:gap-8 mt-4 lg:mt-8 w-full sm:w-auto px-4 sm:px-0 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Link to="/menu">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white font-body text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-colors w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                DOWNLOAD MENU
              </motion.button>
            </Link>
            <Link to="/menu">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-primary font-body text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-colors w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                ORDER ONLINE
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image Content */}
        <motion.div
          className="flex-1 hidden lg:flex justify-center items-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full scale-75"></div>
          <img 
            src="/images/devsons_signature_burger.png" 
            alt="Devson's Signature Burger" 
            className="w-full max-w-xl h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(212,175,55,0.2)] hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
