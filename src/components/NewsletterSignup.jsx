import React from 'react';

const NewsletterSignup = () => {
  return (
    <div className="bg-primary py-20 border-b border-[#333]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <h2 className="text-white font-heading text-5xl lg:text-6xl uppercase tracking-widest mb-4">
          Keep Up To Date With Us!
        </h2>
        
        <p className="text-gray-400 font-body text-xl mb-10">
          Receive the latest news & fresh offers, sign up today!
        </p>

        <form className="w-full max-w-2xl flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL ADDRESS" 
            className="flex-grow bg-secondary border border-[#333] text-white placeholder-gray-500 px-6 py-4 font-heading text-xl tracking-wider focus:outline-none focus:border-accent transition-colors"
            required
          />
          <button 
            type="submit" 
            className="bg-accent text-primary font-heading text-2xl uppercase px-10 py-4 hover:bg-white transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

      </div>
    </div>
  );
};

export default NewsletterSignup;
