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
    <div className="bg-white py-8 lg:py-12 border-b border-gray-200">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-black font-heading uppercase tracking-widest mb-6 lg:mb-10" style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Original Burgers Built For You Daily
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
          <motion.img variants={itemVariants} src="https://burgerandsauce.com/wp-content/uploads/2021/02/uber-eats-logo-hrzn.svg" alt="Uber Eats" className="h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
          <motion.img variants={itemVariants} src="https://burgerandsauce.com/wp-content/uploads/2021/02/deliveroo-logo-wide.svg" alt="Deliveroo" className="h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
          <motion.img variants={itemVariants} src="https://burgerandsauce.com/wp-content/uploads/2022/04/click-and-collect-logo-bag.svg" alt="Click & Collect" className="h-12 lg:h-16 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
        </div>
      </motion.div>
    </div>
  );
};

export default PartnerStrip;
