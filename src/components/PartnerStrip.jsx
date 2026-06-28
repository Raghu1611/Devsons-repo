import React from 'react';
import { motion } from 'framer-motion';

const PartnerStrip = () => {
  const phrases = [
    "100% PREMIUM BEEF",
    "NEVER FROZEN",
    "SMASHED TO PERFECTION",
    "HANDCRAFTED DAILY",
    "OUR SECRET SAUCE",
    "ALWAYS FRESH",
    "THE ULTIMATE BURGER EXPERIENCE",
    "LEGENDARY FLAVOUR"
  ];

  return (
    <div className="bg-accent py-4 lg:py-6 overflow-hidden flex items-center border-y border-[#333]">
      <motion.div
        className="flex whitespace-nowrap w-fit"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {/* Set 1 */}
        <div className="flex gap-8 px-4 items-center">
          {phrases.map((phrase, i) => (
            <React.Fragment key={i}>
              <span className="text-primary font-heading uppercase text-xl lg:text-3xl tracking-widest font-bold">
                {phrase}
              </span>
              <span className="text-primary/50 text-2xl">◆</span>
            </React.Fragment>
          ))}
        </div>
        
        {/* Set 2 (Exact Duplicate for perfectly seamless infinite loop) */}
        <div className="flex gap-8 px-4 items-center">
          {phrases.map((phrase, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span className="text-primary font-heading uppercase text-xl lg:text-3xl tracking-widest font-bold">
                {phrase}
              </span>
              <span className="text-primary/50 text-2xl">◆</span>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PartnerStrip;
