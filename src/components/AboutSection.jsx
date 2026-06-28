import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';

const AboutSection = () => {
  return (
    <div id="our-food" className="bg-primary py-24 lg:py-32 flex justify-center items-center min-h-[70vh] border-b border-[#333] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row gap-16 items-center">
        
        <motion.div 
          className="flex-1 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Crown className="w-16 h-16 text-accent mb-6" />
          <motion.p 
            className="text-accent font-heading tracking-widest uppercase mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Awesome With Our Signature Sauce
          </motion.p>
          <motion.h2 
            className="text-white font-heading uppercase tracking-widest leading-[0.85] mb-8" style={{ fontSize: 'clamp(3.5rem, 6vw, 6.5rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The Burger Is<br/>
            The Star Of<br/>
            The Show.
          </motion.h2>
          <motion.div 
            className="text-gray-300 font-body leading-relaxed mb-10 space-y-6 max-w-2xl" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>
              At Devson's, we believe that great taste comes from premium ingredients. That's why our beef, chicken, and veggie burger patties are handmade every single day. We never use frozen meat.
            </p>
            <p>
              Our signature sauces are crafted to perfectly complement every bite, delivering a luxurious taste experience that keeps our customers coming back for more. Quality you can taste, freshness you can trust.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
          <Link to="/our-food">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-primary font-heading uppercase hover:bg-white transition-colors w-full sm:w-auto text-center" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)', padding: 'clamp(1rem, 1.5vw, 1.25rem) clamp(2rem, 3vw, 2.5rem)' }}>
              Our Food
            </motion.button>
          </Link>
          <Link to="/menu">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.95 }}
              className="border-4 border-white text-white font-heading uppercase hover:bg-white transition-colors w-full sm:w-auto text-center" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)', padding: 'clamp(1rem, 1.5vw, 1.25rem) clamp(2rem, 3vw, 2.5rem)' }}>
              View Our Menu
            </motion.button>
          </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center items-center relative mt-16 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full"></div>
          <img 
            src="/images/devsons_signature_burger.png" 
            alt="Devson's Signature Burger" 
            className="w-full max-w-xl h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(212,175,55,0.2)] hover:scale-105 transition-transform duration-700 mix-blend-lighten"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default AboutSection;
