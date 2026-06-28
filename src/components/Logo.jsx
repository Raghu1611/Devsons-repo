import React from 'react';

const Logo = ({ className = "h-16 md:h-20" }) => {
  return (
    <div className={`flex items-center justify-center h-16 md:h-20`}>
      <img 
        src="/images/logo.png" 
        alt="Devson's Home of Burgers" 
        className="h-full w-auto object-contain mix-blend-lighten"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <div className={`hidden font-serif font-bold text-accent tracking-wide ${className}`}>
        DEVSON'S
      </div>
    </div>
  );
};

export default Logo;
