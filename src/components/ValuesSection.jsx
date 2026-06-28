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

      {/* Bottom Left Action - Order Online */}
      <motion.div 
        className="absolute bottom-8 md:bottom-12 left-[5%] md:left-[8%] z-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link to="/menu">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.8)", borderColor: "#d4af37" }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/50 text-white font-heading uppercase hover:text-accent transition-all duration-300 flex items-center justify-center gap-3 rounded-xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)] bg-black/60 px-6 py-4 md:px-10 md:py-5 group"
          >
            <Utensils className="w-5 h-5 md:w-7 md:h-7 text-accent group-hover:scale-110 transition-transform" />
            <div className="flex flex-col items-start text-left">
              <span className="text-xs md:text-sm tracking-[0.2em] text-gray-300">Craving a Burger?</span>
              <span className="text-xl md:text-3xl font-bold tracking-widest mt-1">ORDER ONLINE</span>
            </div>
          </motion.button>
        </Link>
      </motion.div>

      {/* Right Announcement - Dine In Soon */}
      <motion.div 
        className="absolute top-[45%] md:top-[50%] -translate-y-1/2 right-[5%] md:right-[8%] z-20"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-accent font-heading uppercase flex items-center justify-center gap-3 px-6 py-4 md:px-10 md:py-5 drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)]">
          <div className="flex flex-col items-end text-right">
            <span className="text-sm md:text-base tracking-[0.2em] text-white drop-shadow-md">Coming Very Soon</span>
            <span className="text-2xl md:text-4xl font-bold tracking-widest mt-1 text-accent drop-shadow-lg">OPENING DINE IN</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ValuesSection;
