import React from 'react';

const HeroTicker = () => {
  const tickerText = "NOW OPEN IN LONDON ★ NEW SERVICES AVAILABLE ★ JOIN THE DEVSONS TEAM ★ ";
  
  return (
    <div className="bg-black border-y border-white/20 overflow-hidden py-3 mt-[88px] lg:mt-[96px]">
      <div className="flex w-max animate-ticker">
        {/* We duplicate the text twice to create a seamless infinite scroll loop, making sure to translate by 50% in the animation */}
        <div className="flex space-x-4 pr-4">
          <span className="text-white font-heading text-2xl lg:text-3xl tracking-widest whitespace-nowrap">
            {tickerText} {tickerText} {tickerText}
          </span>
        </div>
        <div className="flex space-x-4 pr-4">
          <span className="text-white font-heading text-2xl lg:text-3xl tracking-widest whitespace-nowrap">
            {tickerText} {tickerText} {tickerText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroTicker;
