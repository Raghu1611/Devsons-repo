import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-black py-20 lg:py-32 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <h1 className="text-white font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-widest leading-none mb-12 max-w-5xl mx-auto">
          Original Solutions Built For Your Business Daily
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <button className="border-2 border-white text-white font-heading text-2xl lg:text-3xl px-8 py-4 uppercase hover:bg-white hover:text-black transition-colors">
            Download Brochure
          </button>
          <button className="bg-accent text-white font-heading text-2xl lg:text-3xl px-8 py-4 uppercase hover:bg-white hover:text-black transition-colors">
            Case Studies
          </button>
        </div>

        <a href="#quote" className="inline-block bg-white text-black font-heading text-xl lg:text-2xl uppercase tracking-widest px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-colors mb-16">
          Get a Quote
        </a>

        {/* Partner Logos */}
        <div className="w-full max-w-4xl mx-auto">
          <p className="text-white/50 font-heading text-xl tracking-widest uppercase mb-6">Trusted By</p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos represented by text for now, but would be SVG normally */}
            <span className="text-white font-heading text-3xl tracking-widest">CLUTCH</span>
            <span className="text-white font-heading text-3xl tracking-widest">GOOGLE REVIEWS</span>
            <span className="text-white font-heading text-3xl tracking-widest">TRUSTPILOT</span>
            <span className="text-white font-heading text-3xl tracking-widest">UPWORK</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
