import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'Home', 'Our Work', 'Services', 'Portfolio', 'Locate', 'Join the Team', 'Franchise'
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg shadow-white/5 py-4' : 'bg-black py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-heading text-4xl tracking-wider text-white">DEVSONS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-white hover:text-accent font-heading text-xl uppercase tracking-wide transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex space-x-4">
            <button className="border-2 border-white text-white font-heading text-xl px-6 py-2 uppercase hover:bg-white hover:text-black transition-colors">
              Download Brochure
            </button>
            <button className="bg-white text-black font-heading text-xl px-6 py-2 uppercase hover:bg-black hover:text-white border-2 border-transparent hover:border-white transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-accent focus:outline-none"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 absolute w-full left-0 top-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-white hover:text-accent block px-3 py-2 font-heading text-2xl uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex flex-col space-y-4 p-4">
              <button className="border-2 border-white text-white font-heading text-xl px-6 py-3 uppercase w-full">
                Download Brochure
              </button>
              <button className="bg-white text-black font-heading text-xl px-6 py-3 uppercase w-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
