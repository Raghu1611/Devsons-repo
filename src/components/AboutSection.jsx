import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Image Half */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-black">
          {/* We're using a dark, moody placeholder as requested */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
            alt="Devsons team at work" 
            className="absolute inset-0 w-full h-full object-cover filter brightness-50 contrast-125"
          />
          <div className="absolute bottom-10 left-10 z-20">
            <h3 className="text-white font-heading text-4xl lg:text-5xl uppercase tracking-widest">
              Digital Excellence
            </h3>
          </div>
        </div>

        {/* Content Half */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-24">
          <p className="text-accent font-heading text-2xl tracking-widest uppercase mb-4">
            Awesome With Our Signature Approach
          </p>
          <h2 className="text-black font-heading text-5xl lg:text-6xl uppercase tracking-widest leading-none mb-8">
            Our Methodology Is The Star Of The Show.
          </h2>
          <div className="text-black/80 font-body text-lg leading-relaxed mb-12 space-y-6">
            <p>
              At Devsons, we believe that every business is unique, and so should be its digital presence. We don't rely on templates or pre-packaged solutions. Everything we build is tailored specifically for your brand, ensuring you stand out in a crowded market.
            </p>
            <p>
              From the first line of code to the final polished interface, our team of expert developers and designers work tirelessly to deliver robust, scalable, and visually stunning digital experiences that drive real results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-black text-white font-heading text-2xl px-8 py-4 uppercase hover:bg-accent transition-colors">
              About Us
            </button>
            <button className="border-2 border-black text-black font-heading text-2xl px-8 py-4 uppercase hover:bg-black hover:text-white transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
