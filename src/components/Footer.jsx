import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 pt-20 pb-10 border-t border-[#333]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 border-b border-[#333] pb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col items-start pt-1">
            <div className="mb-6">
              <Logo className="text-3xl" textColor="text-white" />
            </div>
            <p className="text-gray-400 font-body leading-relaxed mb-8 text-sm">
              Experience the best food with Devson's. Delivering happiness, one order at a time.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-[#1a1a24] rounded flex items-center justify-center text-gray-400 hover:text-accent hover:bg-[#2a2a36] transition-all duration-300" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-[#1a1a24] rounded flex items-center justify-center text-gray-400 hover:text-accent hover:bg-[#2a2a36] transition-all duration-300" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-[#1a1a24] rounded flex items-center justify-center text-gray-400 hover:text-accent hover:bg-[#2a2a36] transition-all duration-300" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-[#1a1a24] rounded flex items-center justify-center text-gray-400 hover:text-accent hover:bg-[#2a2a36] transition-all duration-300" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col">
            <h4 className="text-white font-body font-bold mb-6 text-base tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="text-gray-400 font-body hover:text-accent transition-colors flex items-center gap-3">
                  <span className="w-1 h-1 bg-gray-500 inline-block"></span> Home
                </Link>
              </li>
              <li>
                <Link to="/our-food" className="text-gray-400 font-body hover:text-accent transition-colors flex items-center gap-3">
                  <span className="w-1 h-1 bg-gray-500 inline-block"></span> Our Food
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 font-body hover:text-accent transition-colors flex items-center gap-3">
                  <span className="w-1 h-1 bg-gray-500 inline-block"></span> Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 font-body hover:text-accent transition-colors flex items-center gap-3">
                  <span className="w-1 h-1 bg-gray-500 inline-block"></span> About Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 font-body hover:text-accent transition-colors flex items-center gap-3">
                  <span className="w-1 h-1 bg-gray-500 inline-block"></span> Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 font-body hover:text-accent transition-colors flex items-center gap-3">
                  <span className="w-1 h-1 bg-gray-500 inline-block"></span> Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col">
            <h4 className="text-white font-body font-bold mb-6 text-base tracking-wide">Support</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/help" className="text-gray-400 font-body hover:text-accent transition-colors">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 font-body hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 font-body hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-400 font-body hover:text-accent transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div className="flex flex-col">
            <h4 className="text-white font-body font-bold mb-6 text-base tracking-wide">Stay Updated</h4>
            <p className="text-gray-400 font-body text-xs mb-4">Subscribe for exclusive offers.</p>
            <form className="flex w-full mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-[#1a1a24] border-none text-white px-4 py-3 focus:outline-none transition-colors font-body text-sm rounded-l-lg"
                required
              />
              <button 
                type="submit" 
                className="bg-accent text-primary px-4 py-3 hover:bg-white transition-colors flex items-center justify-center rounded-r-lg"
              >
                <Send size={16} className="text-primary" />
              </button>
            </form>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={16} />
                <a href="mailto:admin@devsons.co.uk" className="text-gray-400 font-body hover:text-accent transition-colors">
                  admin@devsons.co.uk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={16} />
                <div className="flex flex-col">
                  <span className="text-gray-400 font-body text-xs mb-1">For franchise queries:</span>
                  <a href="mailto:franchise@devsons.co.uk" className="text-gray-400 font-body hover:text-accent transition-colors">
                    franchise@devsons.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={16} />
                <a href="tel:+447769044665" className="text-gray-400 font-body hover:text-accent transition-colors">
                  +44 7769 044665
                </a>
              </li>
            </ul>
          </div>

        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 font-body text-sm space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Devson's Burgers. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
          <p>Website Built by <span className="text-accent">Devsons</span></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
