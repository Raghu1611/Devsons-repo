import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past top
      setIsScrolled(currentScrollY > 10);
      
      // Hide nav bar entirely almost immediately when scrolling down
      if (currentScrollY > 10) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>

      {/* Main Navigation (Black) */}
      <header className={`fixed w-full z-40 top-0 transition-transform duration-300 font-heading border-b-2 border-accent ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-[#111] shadow-2xl py-3' : 'bg-[#111] py-4 lg:py-5'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center gap-4 lg:gap-8">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <Logo className="text-3xl lg:text-4xl" textColor="text-white" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-6 xl:gap-10">
              <Link to="/" className="text-white hover:text-accent text-xl xl:text-2xl uppercase tracking-widest transition-colors whitespace-nowrap">Home</Link>
              <Link to="/our-food" className="text-white hover:text-accent text-xl xl:text-2xl uppercase tracking-widest transition-colors whitespace-nowrap">Our Food</Link>
              <Link to="/menu" className="text-white hover:text-accent text-xl xl:text-2xl uppercase tracking-widest transition-colors whitespace-nowrap">Menu</Link>
              {['Locate', 'Join the Team', 'Franchise'].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-white hover:text-accent text-xl xl:text-2xl uppercase tracking-widest transition-colors whitespace-nowrap">
                  {link}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-accent focus:outline-none"
              >
                {mobileMenuOpen ? <X size={40} /> : <Menu size={40} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111]/95 border-t border-gray-800 absolute w-full left-0 top-full shadow-2xl backdrop-blur-md">
            <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
              <Link 
                to="/"
                className="text-white hover:text-accent block py-2 font-heading text-2xl uppercase tracking-wide border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/our-food"
                className="text-white hover:text-accent block py-2 font-heading text-2xl uppercase tracking-wide border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Food
              </Link>
              <Link 
                to="/menu"
                className="text-white hover:text-accent block py-2 font-heading text-2xl uppercase tracking-wide border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </Link>
              {['Locate', 'Join the Team', 'Franchise'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-white hover:text-accent block py-2 font-heading text-2xl uppercase tracking-wide border-b border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="flex flex-col space-y-4 pt-4">
                <button className="border-2 border-white text-white hover:bg-white hover:text-black transition-colors font-heading text-xl px-6 py-3 uppercase w-full">
                  Download Menu
                </button>
                <button className="bg-accent text-black font-heading text-xl px-6 py-3 uppercase w-full font-bold">
                  Order Online
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
};

export default Navbar;
