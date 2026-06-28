import React from 'react';

const Logo = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/images/logo.png" 
        alt="Devson's Home of Burgers" 
        className="h-full object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <div className="hidden font-serif font-bold text-accent tracking-wide text-2xl">
        DEVSON'S
      </div>
    </div>
  );
};

export default Logo;
