import React from 'react';

const NewsletterSignup = () => {
  return (
    <div className="bg-black py-20 border-y border-white/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <h2 className="text-white font-heading text-5xl lg:text-6xl uppercase tracking-widest mb-4">
          Keep Up To Date With Us!
        </h2>
        
        <p className="text-white/70 font-body text-xl mb-10">
          Receive the latest news & fresh offers, sign up today!
        </p>

        <form className="w-full max-w-2xl flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL ADDRESS" 
            className="flex-grow bg-transparent border-2 border-white/50 text-white placeholder-white/50 px-6 py-4 font-heading text-xl tracking-wider focus:outline-none focus:border-white transition-colors"
            required
          />
          <button 
            type="submit" 
            className="bg-white text-black font-heading text-2xl uppercase px-10 py-4 hover:bg-accent hover:text-white transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

      </div>
    </div>
  );
};

export default NewsletterSignup;
