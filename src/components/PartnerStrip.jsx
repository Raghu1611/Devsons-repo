import React from 'react';
import { motion } from 'framer-motion';

const PartnerStrip = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-secondary py-8 lg:py-12 border-b border-[#333]">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-white font-heading uppercase tracking-widest mb-6 lg:mb-10" style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Original Burgers Built For You Daily
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          <motion.div variants={itemVariants} className="text-gray-400 font-heading text-2xl lg:text-3xl uppercase tracking-widest hover:text-accent transition-colors cursor-pointer">
            UBER EATS
          </motion.div>
          <motion.div variants={itemVariants} className="text-gray-400 font-heading text-2xl lg:text-3xl uppercase tracking-widest hover:text-accent transition-colors cursor-pointer">
            DELIVEROO
          </motion.div>
          <motion.div variants={itemVariants} className="text-gray-400 font-heading text-2xl lg:text-3xl uppercase tracking-widest hover:text-accent transition-colors cursor-pointer">
            CLICK & COLLECT
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PartnerStrip;
