import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ValuesSection = () => {

  return (
    <div 
      className="relative py-24 lg:py-40 overflow-hidden border-b border-[#333] bg-primary"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: 'url("/images/devsons_storefront.png")' }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>

      <motion.div 
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p 
          className="text-accent font-heading tracking-widest uppercase mb-4 sm:mb-6 drop-shadow-md" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.25rem)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Always Fresh. Never Frozen.
        </motion.p>
        
        <motion.h2 
          className="text-white font-heading uppercase tracking-widest leading-[0.85] mb-8 sm:mb-10 drop-shadow-lg" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          ALL OUR BURGERS ARE HANDMADE FRESH EVERY DAY.
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 font-body leading-relaxed mb-12 sm:mb-16 max-w-4xl drop-shadow-md px-2 sm:px-0" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.875rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We combine the highest quality meats with our secret signature sauces to ensure your meal is not only delicious but fresh and full of flavor. No frozen patties, no compromises.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="/menu">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(212,175,55,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-primary font-heading uppercase hover:bg-white transition-colors w-full sm:w-auto text-center" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)', padding: 'clamp(1rem, 1.5vw, 1.25rem) clamp(2rem, 3vw, 3rem)' }}>
              FIND A STORE
            </motion.button>
          </Link>
          <Link to="/menu">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="border-4 border-white text-white font-heading uppercase hover:bg-white hover:text-black transition-colors w-full sm:w-auto text-center" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)', padding: 'clamp(1rem, 1.5vw, 1.25rem) clamp(2rem, 3vw, 3rem)' }}>
              ORDER DELIVERY
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ValuesSection;
