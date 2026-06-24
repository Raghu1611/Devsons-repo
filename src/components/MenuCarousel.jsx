import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MenuCarousel = () => {
  const menuItems = [
    { 
      id: 1, 
      title: 'The Beef Burger', 
      image: 'https://burgerandsauce.com/wp-content/uploads/2025/08/4oz_beef-burger-3000px-rgb-tp-upd-1024x1024.png',
      logo: 'https://burgerandsauce.com/wp-content/uploads/2022/05/The-Beef-Burger-Original-Logo-2022-RGB-BLK.svg'
    },
    { 
      id: 2, 
      title: 'The Chicken Burger', 
      image: 'https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png',
      logo: 'https://burgerandsauce.com/wp-content/uploads/2022/05/chicken-original-burger-logo-2022-rgb-bk.svg'
    },
    { 
      id: 3, 
      title: 'The Veggie Burger', 
      image: 'https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce-veggi-burger-3000px-2.1-1024x1024.png',
      logo: 'https://burgerandsauce.com/wp-content/uploads/2022/05/The-Veggi-Original-Burger-Logo-2022-RGB-BK.svg'
    },
    { 
      id: 4, 
      title: 'Animal Fries', 
      image: 'https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce-animal-fries-bn-3000px-1024x1024.png',
      logo: 'https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce_logo_animal_fries_wh_rgb.svg'
    },
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
    <div id="menu" className="bg-white py-16 lg:py-24 overflow-hidden border-b border-gray-200">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-black font-heading uppercase tracking-widest leading-none text-center sm:text-left" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
          Our Menu
        </h2>
        <div className="hidden md:flex gap-4">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-14 h-14 border-2 border-black flex justify-center items-center text-black hover:bg-black hover:text-white transition-colors rounded-full">
            &larr;
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-14 h-14 border-2 border-black flex justify-center items-center text-black hover:bg-black hover:text-white transition-colors rounded-full">
            &rarr;
          </motion.button>
        </div>
      </motion.div>
      
      {/* Carousel Container */}
      <motion.div 
        className="flex overflow-x-auto no-scrollbar pb-12 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory gap-8 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {menuItems.map((item) => (
          <motion.div 
            key={item.id} 
            variants={itemVariants}
            whileHover={{ y: -20, transition: { duration: 0.3 } }}
            className="flex-none w-[320px] md:w-[400px] bg-gray-50 group cursor-pointer snap-center relative flex flex-col items-center pt-8 pb-24 px-6 border-4 border-transparent hover:border-accent hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-colors"
          >
            {/* Product Image */}
            <motion.div 
              className="w-full aspect-square mb-6 relative"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl" />
            </motion.div>
            
            {/* Product Logo / Text */}
            {item.logo ? (
              <img src={item.logo} alt={item.title} className="h-16 lg:h-20 object-contain" />
            ) : (
              <h3 className="text-black font-heading text-4xl uppercase tracking-wide text-center">{item.title}</h3>
            )}
            
            {/* View Details Button (appears on hover) */}
            <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/menu" className="bg-black text-white px-6 py-2 font-heading text-xl uppercase tracking-wider hover:bg-accent hover:text-black transition-colors">
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MenuCarousel;
