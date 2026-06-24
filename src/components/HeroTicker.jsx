import React from 'react';

const HeroTicker = () => {
  const tickerText = "NOW OPEN IN NOTTINGHAM ★ NEW STORES OPENING SOON ★ JOIN THE BURGER & SAUCE TEAM ★ ";
  
  return (
    <div className="mt-[90px] lg:mt-[100px] bg-white border-b border-gray-200 overflow-hidden py-3 flex items-center">
      <div className="whitespace-nowrap animate-ticker inline-block">
        <span className="text-black font-heading uppercase tracking-widest px-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)' }}>{tickerText}</span>
        <span className="text-black font-heading uppercase tracking-widest px-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)' }}>{tickerText}</span>
        <span className="text-black font-heading uppercase tracking-widest px-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)' }}>{tickerText}</span>
        <span className="text-black font-heading uppercase tracking-widest px-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)' }}>{tickerText}</span>
      </div>
    </div>
  );
};

export default HeroTicker;
