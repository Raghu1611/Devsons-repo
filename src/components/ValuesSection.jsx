import React from 'react';

const ValuesSection = () => {
  return (
    <div className="relative bg-black min-h-[600px] flex items-center py-24 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/75 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Coding screen" 
          className="w-full h-full object-cover filter contrast-125 grayscale"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <p className="text-accent font-heading text-2xl lg:text-3xl tracking-widest uppercase mb-6">
          Always Fresh. Never Outdated.
        </p>
        
        <h2 className="text-white font-heading text-5xl sm:text-6xl lg:text-7xl uppercase tracking-widest leading-none mb-10">
          All Our Solutions Are Crafted Fresh For Every Client.
        </h2>
        
        <p className="text-white/80 font-body text-xl lg:text-2xl leading-relaxed mb-16 max-w-3xl">
          We combine cutting-edge tech stacks with innovative design principles to ensure your digital products are not only stunning today but resilient and scalable for the future. No stale code, no outdated practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="bg-white text-black font-heading text-2xl px-10 py-4 uppercase hover:bg-accent hover:text-white transition-colors">
            Find Us
          </button>
          <button className="border-2 border-white text-white font-heading text-2xl px-10 py-4 uppercase hover:bg-white hover:text-black transition-colors">
            Download Our Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
