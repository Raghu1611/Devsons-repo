import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';

const MenuCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const carouselItems = [
    {
      id: 1,
      name: "DEVSON’S ORIGINAL",
      image: "/images/devsons_signature_burger.png",
      description: "Two 3oz smashed beef patties, melted American cheese, sweet caramelised onions and house pickles, Heinz ketchup and mustard sauce served in a toasted potato bun.",
    },
    {
      id: 2,
      name: "DEVSON’S DOUBLE GOLD",
      image: "/images/devsons_double_gold.png",
      description: "Three 3oz smashed beef patties layered with double American cheese, crispy onions, pickles and our rich black peppercorn sauce.",
    },
    {
      id: 3,
      name: "TRUFFLE PARMESAN SMASH",
      image: "/images/truffle_parmesan_smash.png",
      description: "Two 3oz smashed beef patties, double American cheese, truffle aioli, crispy onions and freshly grated Parmesan in our toasted potato bun.",
    },
    {
      id: 4,
      name: "THE GOLD LOADED FRIES",
      image: "/images/devsons_loaded_fries.png",
      description: "Skin-on fries topped with nacho cheese sauce, crispy onions and garlic mayo.",
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div id="menu" className="bg-primary py-16 lg:py-24 overflow-hidden border-b border-[#333]">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
            <div className="flex items-center gap-4 mb-2 justify-center sm:justify-start">
              <div className="h-[1px] w-8 bg-accent"></div>
              <p className="text-accent font-body tracking-[0.2em] uppercase text-xs font-semibold">Signatures</p>
            </div>
            <h2 className="text-white font-heading uppercase tracking-widest leading-none text-center sm:text-left" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              FEATURED <span className="text-accent">MENU</span>
            </h2>
        </div>
        <div className="hidden md:flex gap-4">
          <motion.button onClick={scrollLeft} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 border border-gray-800 flex justify-center items-center text-white hover:bg-accent hover:border-accent hover:text-primary transition-colors rounded-full">
            &larr;
          </motion.button>
          <motion.button onClick={scrollRight} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 border border-gray-800 flex justify-center items-center text-white hover:bg-accent hover:border-accent hover:text-primary transition-colors rounded-full">
            &rarr;
          </motion.button>
        </div>
      </motion.div>
      
      {/* Carousel Container */}
      <motion.div 
        ref={carouselRef}
        className="flex overflow-x-auto no-scrollbar pb-12 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory gap-8 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {carouselItems.map((item) => (
          <motion.div 
            key={item.id} 
            variants={itemVariants}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
            className="flex-none w-[320px] md:w-[400px] bg-secondary group cursor-pointer snap-center relative flex flex-col items-center px-8 pb-8 pt-0 border border-gray-800 hover:border-accent hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)] transition-all duration-500 overflow-hidden"
          >
            {/* Image Section */}
            <div className="w-full h-56 -mx-8 mb-6 flex justify-center items-center overflow-hidden bg-primary relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-primary to-primary"></div>
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 relative z-10 mix-blend-lighten" 
              />
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-start text-center h-[200px]">
              <div className="mb-4 flex flex-col items-center">
                <Crown className="w-6 h-6 text-accent mb-2" />
                <h3 className="text-accent font-heading text-xl uppercase tracking-[0.2em]">{item.name}</h3>
              </div>
              <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">{item.description}</p>
            </div>
            
            {/* View Details Button (appears on hover) */}
            <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/menu" className="border border-accent text-accent px-6 py-2 font-body text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-primary transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                View Menu
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MenuCarousel;
