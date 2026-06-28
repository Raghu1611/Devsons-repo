import React from 'react';
import { Monitor, Smartphone, PenTool, Search, Layout, ShoppingCart } from 'lucide-react';

const ServicesCarousel = () => {
  const services = [
    { id: 1, title: 'Web Design', icon: <Monitor size={48} className="mb-4" />, badge: 'NEW!', badgeType: 'solid' },
    { id: 2, title: 'Mobile Apps', icon: <Smartphone size={48} className="mb-4" />, badge: 'LIMITED!', badgeType: 'outline' },
    { id: 3, title: 'Branding', icon: <PenTool size={48} className="mb-4" /> },
    { id: 4, title: 'SEO', icon: <Search size={48} className="mb-4" />, badge: 'HOT', badgeType: 'solid' },
    { id: 5, title: 'UI/UX', icon: <Layout size={48} className="mb-4" /> },
    { id: 6, title: 'E-Commerce', icon: <ShoppingCart size={48} className="mb-4" /> },
  ];

  return (
    <div className="bg-primary py-16 lg:py-24 overflow-hidden border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-white font-heading text-4xl lg:text-5xl uppercase tracking-widest text-center">Our Services</h2>
      </div>
      
      {/* Carousel Container */}
      <div className="flex overflow-x-auto no-scrollbar pb-8 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory gap-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="flex-none w-64 h-80 bg-secondary group cursor-pointer snap-center relative transition-transform hover:scale-105 duration-300 flex flex-col justify-center items-center text-center p-6 border border-[#333] hover:border-accent"
          >
            {/* Badge */}
            {service.badge && (
              <div className={`absolute top-4 right-4 font-heading text-xl uppercase px-2 py-1 ${service.badgeType === 'solid' ? 'bg-accent text-primary' : 'border border-accent text-accent'}`}>
                {service.badge}
              </div>
            )}
            
            <div className="text-gray-300 group-hover:text-accent transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-white font-heading text-3xl uppercase tracking-wide mt-4">{service.title}</h3>
            
            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="border-b-2 border-accent text-accent font-heading text-xl uppercase">Learn More</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
