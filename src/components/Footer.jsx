import React from 'react';
import { Camera, MessageCircle, Video, Users, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Logo */}
        <div className="flex justify-center mb-16">
          <span className="font-heading text-6xl tracking-widest text-white">DEVSONS</span>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/20 pb-20">
          
          {/* Column 1 */}
          <div className="flex flex-col">
            <h4 className="text-white font-heading text-3xl uppercase tracking-widest mb-6">Devsons</h4>
            <ul className="space-y-4">
              {['Our Work', 'Services', 'Portfolio', 'Blog', 'Gallery'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/70 font-heading text-xl uppercase tracking-wider hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h4 className="text-white font-heading text-3xl uppercase tracking-widest mb-6">Locate Us / Contact</h4>
            <ul className="space-y-4">
              {['Find Us', 'Get a Quote', 'Support', 'FAQ'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/70 font-heading text-xl uppercase tracking-wider hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h4 className="text-white font-heading text-3xl uppercase tracking-widest mb-6">Partner</h4>
            <ul className="space-y-4">
              {['Franchise', 'Careers', 'Affiliates', 'Investors'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/70 font-heading text-xl uppercase tracking-wider hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <h4 className="text-white font-heading text-3xl uppercase tracking-widest mb-6">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-accent transition-colors" title="Instagram"><Camera size={28} /></a>
              <a href="#" className="text-white hover:text-accent transition-colors" title="Twitter"><MessageCircle size={28} /></a>
              <a href="#" className="text-white hover:text-accent transition-colors" title="Youtube"><Video size={28} /></a>
              <a href="#" className="text-white hover:text-accent transition-colors" title="Facebook"><Users size={28} /></a>
              <a href="#" className="text-white hover:text-accent transition-colors" title="LinkedIn"><Briefcase size={28} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-white/50 font-body text-sm">
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved. DEVSONS© LTD</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
