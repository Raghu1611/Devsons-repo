import React from 'react';

const Logo = ({ className = "h-12", textColor = "text-black" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="flex items-center">
        {/* Shield with D */}
        <div className="relative flex items-center justify-center mr-1">
          {/* Outer Shield */}
          <svg className="absolute w-[1.8em] h-[2.2em] text-accent" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="4">
            <path d="M 20 5 L 80 5 L 95 30 L 95 70 L 50 115 L 5 70 L 5 30 Z" />
          </svg>
          {/* Inner Shield */}
          <svg className="absolute w-[1.4em] h-[1.8em] text-accent" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="4">
            <path d="M 20 5 L 80 5 L 95 30 L 95 70 L 50 115 L 5 70 L 5 30 Z" />
          </svg>
          <span className="relative z-10 text-accent font-serif font-bold text-[1.4em] leading-none" style={{ fontFamily: "Georgia, serif" }}>D</span>
        </div>
        {/* EVSON'S */}
        <span className={`${textColor} font-serif font-bold text-[1.4em] tracking-wide`} style={{ fontFamily: "Georgia, serif" }}>
          EVSON'S
        </span>
      </div>
      {/* Subtext */}
      <span className="text-accent font-sans text-[0.35em] tracking-[0.2em] uppercase font-bold mt-1 ml-4">
        PREMIUM BEEF BURGERS
      </span>
    </div>
  );
};

export default Logo;
