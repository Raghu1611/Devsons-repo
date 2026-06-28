import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Utensils } from 'lucide-react';

const ValuesSection = () => {

  return (
    <div 
      className="relative w-full overflow-hidden border-b border-[#333] bg-primary"
    >
      {/* Fully HD Background Image inline to preserve exact aspect ratio */}
      <img src="/images/devsons_storefront.png" alt="Devson's Storefront" className="w-full h-auto block" />

      {/* Left Button - Order Food (Near left wall light) */}
      <motion.div 
        className="absolute top-[35%] md:top-[40%] left-[5%] md:left-[10%] z-20"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link to="/menu">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(212,175,55,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-accent text-accent font-heading uppercase hover:text-white hover:border-white transition-colors flex items-center justify-center gap-2 md:gap-3 rounded-2xl backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.4)] bg-black/30" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.5rem)', padding: 'clamp(0.5rem, 1vw, 1rem) clamp(1rem, 2vw, 3rem)' }}>
            <Utensils className="w-4 h-4 md:w-6 md:h-6" />
            ORDER FOOD
          </motion.button>
        </Link>
      </motion.div>

      {/* Right Button - Store (Near right wall light, avoiding sandwich board) */}
      <motion.div 
        className="absolute top-[35%] md:top-[40%] right-[5%] md:right-[10%] z-20"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link to="/menu">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(212,175,55,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-accent text-accent font-heading uppercase hover:text-white hover:border-white transition-colors flex items-center justify-center gap-2 md:gap-3 rounded-2xl backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.4)] bg-black/30" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.5rem)', padding: 'clamp(0.5rem, 1vw, 1rem) clamp(1rem, 2vw, 3rem)' }}>
            <ShoppingBag className="w-4 h-4 md:w-6 md:h-6" />
            STORE
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ValuesSection;
