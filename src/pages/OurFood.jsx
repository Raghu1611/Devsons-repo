import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PartnerStrip from '../components/PartnerStrip';

// Using actual food images from the website
const beefBurger = 'https://burgerandsauce.com/wp-content/uploads/2025/08/4oz_beef-burger-3000px-rgb-tp-upd-1024x1024.png';
const chickenBurger = 'https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png';
const animalFries = 'https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce-animal-fries-bn-3000px-1024x1024.png';

const OurFood = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="bg-white min-h-screen pt-[90px] lg:pt-[100px] overflow-hidden">
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-gray-200">
        <motion.div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat origin-top"
          style={{ 
            backgroundImage: `url('https://burgerandsauce.com/wp-content/uploads/2021/11/burger-and-sauce-558-lifestyle-rgb-2048x1367.jpg')`,
            y: heroY,
            scale: 1.1
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
        
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-white font-heading uppercase tracking-[0.2em] drop-shadow-2xl mb-6"
            style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
          >
            OUR FOOD
          </motion.h1>
          <motion.p
            className="text-accent font-review italic drop-shadow-lg max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            "Handcrafted daily. Never frozen. The ultimate burger experience."
          </motion.p>
        </motion.div>
      </div>

      {/* Our Craft Section */}
      <div className="relative w-full py-32 lg:py-48 flex items-center bg-white border-t border-gray-200">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <motion.img 
              src="https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce_hr_early_2020_20-2048x1367.jpg" 
              className="w-full h-full object-cover opacity-100" 
              alt="Crafting our food" 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/10"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-black font-heading tracking-[0.2em] uppercase mb-8 text-sm sm:text-base">
              Always Fresh. Never Frozen.
            </p>
            <div className="border-l-[6px] border-[#D4AF37] pl-6 mb-10">
              <h2 className="text-black font-heading uppercase leading-[0.9]" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}>
                OUR FOOD<br/>
                IS OUR CRAFT
              </h2>
            </div>
            <p className="text-gray-800 font-body leading-relaxed opacity-90 mb-12 max-w-2xl" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.3rem)' }}>
              We don't believe in frozen patties or meats. We use quality ingredients including fresh chicken, fresh beef, and also make our own veggie patties using fresh potato. Nobody likes a frozen burger.
            </p>
            <button className="bg-[#D4AF37] text-white font-heading uppercase tracking-widest hover:bg-black transition-colors px-10 py-5 font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
              View Our Gallery
            </button>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="w-full bg-white flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-24 px-6 sm:px-12 xl:px-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl w-full"
          >
            <h2 className="text-black font-heading uppercase tracking-wide leading-none mb-6" style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)' }}>
              OUR STORY
            </h2>
            <div className="w-24 h-[2px] bg-[#D4AF37] mb-10"></div>
            
            <h3 className="text-black font-heading uppercase tracking-wide leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              OUR CONCEPT IS VERY SIMPLE.
            </h3>
            
            <div className="text-gray-600 font-body leading-relaxed space-y-6 mb-12" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)' }}>
              <p>
                Giving the customer a burger that ticks all the boxes from taste to price to quality. A burger should be simple and great tasting. It shouldn't be made complicated. We use the freshest ingredients and bring them together under one bun to create a burger that tastes great.
              </p>
            </div>
            
            <button className="bg-[#D4AF37] text-white font-heading uppercase tracking-widest hover:bg-black transition-colors px-8 py-4 font-bold" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
              See Whats On The Menu
            </button>
          </motion.div>
        </div>
        
        {/* Image Content */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-auto overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            src="https://burgerandsauce.com/wp-content/uploads/2021/11/burger-and-sauce-433-lifestyle-rgb-1200x1200.jpg" 
            alt="Our Team" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Split Image Gallery */}
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[70vh] bg-white">
        <div className="w-full md:w-1/3 h-[400px] md:h-full p-4 md:pr-2">
          <motion.img 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce_hr_early_2020_20-2048x1367.jpg" 
            alt="Grilling" 
            className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer border border-gray-200"
          />
        </div>
        <div className="w-full md:w-2/3 h-[400px] md:h-full p-4 pt-0 md:pt-4 md:pl-2">
          <motion.img 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce_hr_early_2020_77-2048x1367.jpg" 
            alt="Service" 
            className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer border border-gray-200"
          />
        </div>
      </div>

      {/* Popular Items Showcase: Beef Burger */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <img 
              src={beefBurger} 
              alt="The Beef Burger" 
              className="w-full max-w-md h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
          
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-heading tracking-widest uppercase mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)' }}>
              Our Signature Classic
            </p>
            <h2 className="text-black font-heading uppercase tracking-widest leading-[0.9] mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
              The Premium Beef Burger
            </h2>
            <div className="text-gray-700 font-body leading-relaxed space-y-6 opacity-90 mb-10" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)' }}>
              <p>
                A masterpiece of flavor. Our 4oz beef patties are made from 100% pure, premium cuts of beef, ground fresh daily in our kitchen. We smash them on a smoking hot grill to create a beautiful caramelized crust while keeping the inside perfectly juicy.
              </p>
              <p>
                Topped with melted American cheese, crisp lettuce, fresh tomatoes, and our iconic secret Devson's sauce, all hugged by a pillowy soft brioche bun. It’s the burger that started it all.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              <div>
                <h4 className="text-accent font-heading text-3xl mb-2">100%</h4>
                <p className="text-gray-500 font-body">Pure Angus Beef</p>
              </div>
              <div>
                <h4 className="text-accent font-heading text-3xl mb-2">0%</h4>
                <p className="text-gray-500 font-body">Artificial Preservatives</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popular Items Showcase: Chicken Burger */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-heading tracking-widest uppercase mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)' }}>
            The Fan Favorite
          </p>
          <h2 className="text-black font-heading uppercase tracking-widest leading-none mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
            The Original Chicken
          </h2>
          <div className="text-gray-700 font-body leading-relaxed space-y-6 opacity-90 mb-10" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)' }}>
            <p>
              We've spent years perfecting our chicken recipe. We take premium, fresh chicken breast and marinate it in our proprietary blend of spices for a full 24 hours to ensure maximum tenderness and flavor penetration.
            </p>
            <p>
              Coated in our signature seasoned breading and fried to golden perfection, it offers an incredible crunch that gives way to incredibly juicy chicken. Served with fresh lettuce and our creamy house mayo.
            </p>
          </div>
          <button className="bg-accent text-white font-heading uppercase tracking-widest hover:bg-black transition-colors px-12 py-5 rounded-none font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
            Order Online Now
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full max-w-md mx-auto"></div>
          <img 
            src={chickenBurger} 
            alt="Chicken Burger" 
            className="w-full max-w-md h-auto object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:scale-110 transition-transform duration-700 relative z-10"
          />
        </motion.div>
      </div>

      {/* Popular Items Showcase: Animal Fries */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center relative"
          >
            <img 
              src={animalFries} 
              alt="Animal Fries" 
              className="w-full max-w-lg h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-110 transition-transform duration-700 relative z-10"
            />
          </motion.div>
          
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-heading tracking-widest uppercase mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)' }}>
              The Ultimate Side
            </p>
            <h2 className="text-black font-heading uppercase tracking-widest leading-[0.9] mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
              Loaded Animal Fries
            </h2>
            <div className="text-gray-700 font-body leading-relaxed space-y-6 opacity-90 mb-10" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)' }}>
              <p>
                Not your average side dish. We take a mountain of our golden, crispy skin-on fries and turn them into a decadent meal of their own.
              </p>
              <p>
                Smothered in a rich blanket of melted cheese sauce, topped with caramelized grilled onions, spicy jalapeños, and drizzled generously with our legendary secret sauce. It's a flavor explosion in every single bite.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <PartnerStrip />
    </main>
  );
};

export default OurFood;
