import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 pt-20 pb-10 border-t-4 border-accent">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col items-start pt-1">
            <div className="mb-6">
              <Logo className="text-3xl" textColor="text-white" />
            </div>
            <p className="text-gray-400 font-body leading-relaxed mb-8">
              Handcrafted daily. Never frozen. The ultimate premium burger experience delivered fresh to your table.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-black transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-black transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-black transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-white font-heading text-xl uppercase tracking-widest mb-6 border-l-4 border-accent pl-3">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 font-body hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span> Home
                </Link>
              </li>
              <li>
                <Link to="/our-food" className="text-gray-400 font-body hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span> Our Food
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 font-body hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span> View Menu
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 font-body hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span> Franchise Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-white font-heading text-xl uppercase tracking-widest mb-6 border-l-4 border-accent pl-3">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <Phone className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <p className="text-white font-heading tracking-wider mb-1">Phone</p>
                  <a href="tel:+441234567890" className="text-gray-400 font-body hover:text-white transition-colors">
                    +44 1234 567 890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <Mail className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <p className="text-white font-heading tracking-wider mb-1">Email</p>
                  <a href="mailto:hello@devsons.com" className="text-gray-400 font-body hover:text-white transition-colors">
                    hello@devsons.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <MapPin className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <div>
                  <p className="text-white font-heading tracking-wider mb-1">Location</p>
                  <p className="text-gray-400 font-body">
                    123 Burger Lane<br />London, UK
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col">
            <h4 className="text-white font-heading text-xl uppercase tracking-widest mb-6 border-l-4 border-accent pl-3">Newsletter</h4>
            <p className="text-gray-400 font-body leading-relaxed mb-6">
              Subscribe to our newsletter to receive exclusive offers, updates, and delicious news directly in your inbox.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required
                  className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-accent font-body transition-colors"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent text-black font-heading uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-white transition-colors font-bold"
              >
                Subscribe <Send size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 font-body text-sm space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Devson's Burgers. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <p>Website Built by <span className="text-accent">Devsons</span></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
