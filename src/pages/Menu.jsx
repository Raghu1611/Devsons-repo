import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Star, Flame } from 'lucide-react';
import PartnerStrip from '../components/PartnerStrip';

const menuData = [
  // Signature Burgers
  { id: 1, name: "DEVSON’S ORIGINAL", image: "/images/devsons_signature_burger.png", category: "Signature Burgers", price: 11.95, description: "Two 3oz smashed beef patties, melted American cheese, sweet caramelised onions and house pickles, Heinz ketchup and mustard sauce served in a toasted potato bun.", quote: "Simple. Classic. Perfect." },
  { id: 2, name: "DEVSON’S DOUBLE GOLD", image: "/images/devsons_double_gold.png", category: "Signature Burgers", price: 13.95, description: "Three 3oz smashed beef patties layered with double American cheese, crispy onions, pickles and our rich black peppercorn sauce.", quote: "The burger that built the brand.", badge: "Chef's Recommendation", badgeIcon: "Star" },
  { id: 3, name: "BBQ BEEF BACON BEAST", image: "/images/devsons_signature_burger.png", category: "Signature Burgers", price: 13.95, description: "Two 3oz smashed beef patties, cheddar cheese, smoky BBQ sauce, onion jam and crispy beef bacon in a toasted potato bun.", quote: "Sweet, smoky and unapologetically indulgent." },
  { id: 4, name: "TRUFFLE PARMESAN SMASH", image: "/images/truffle_parmesan_smash.png", category: "Signature Burgers", price: 13.95, description: "Two 3oz smashed beef patties, double American cheese, truffle aioli, crispy onions and freshly grated Parmesan in our toasted potato bun.", quote: "Luxury in every bite.", badge: "Premium Favourite", badgeIcon: "Star" },
  { id: 5, name: "OKLAHOMA JALAPEÑO SMASH", image: "/images/devsons_signature_burger.png", category: "Signature Burgers", price: 13.95, description: "Double 3oz Oklahoma-style smashed beef with sweet grilled onions, double American cheese, mustard aioli and jalapeño pickles.", quote: "Sweet heat meets smash burger perfection." },
  { id: 6, name: "THE OKLAHOMA CLASSIC", image: "/images/devsons_signature_burger.png", category: "Signature Burgers", price: 12.95, description: "Double 3oz Authentic Oklahoma onion smash burger with grilled onions, double American cheese, mustard aioli in our potato bun.", quote: "The burger that started the smash burger movement." },
  { id: 7, name: "DEVSON’S MAC & ALGERIAN ATTACK", image: "/images/devsons_signature_burger.png", category: "Signature Burgers", price: 14.95, description: "Two 3oz smashed beef patties stacked with creamy macaroni cheese, crispy onions and our famous Algerian burger sauce.", quote: "Comfort food meets smash burger heaven.", badge: "Most Indulgent", badgeIcon: "Flame" },
  
  // Chicken & Veg Boxes
  { id: 8, name: "DEVSON’S BIRD BOX", image: "/images/devsons_chicken_burger.png", category: "Chicken & Veg Boxes", price: 14.95, description: "Buttermilk Chicken Burger, Skin-On Fries and Drink." },
  { id: 9, name: "VEG DELIGHT BOX", image: "/images/devsons_chicken_burger.png", category: "Chicken & Veg Boxes", price: 13.95, description: "Veggie Burger, Skin-On Fries and Drink." },
  
  // Loaded Fries
  { id: 10, name: "THE GOLD LOADED", image: "/images/devsons_loaded_fries.png", category: "Loaded Fries", price: 8.95, description: "Skin-on fries topped with nacho cheese sauce, crispy onions and garlic mayo." },
  { id: 11, name: "BBQ BEAST FRIES", image: "/images/devsons_loaded_fries.png", category: "Loaded Fries", price: 8.95, description: "Skin-on fries loaded with cheddar cheese, smoky BBQ sauce and crispy onions." },
  { id: 12, name: "TRUFFLE PARMESAN FRIES", image: "/images/devsons_loaded_fries.png", category: "Loaded Fries", price: 8.95, description: "Skin-on fries finished with truffle aioli and freshly grated Parmesan.", badge: "Best Seller", badgeIcon: "Star" },
  
  // Sides
  { id: 13, name: "Skin-On Fries", image: "/images/devsons_sides.png", category: "Sides", price: 4.95, description: "Salted. (Peri Peri +£0.50, Cheesy +£2.45)" },
  { id: 14, name: "Onion Rings (5)", image: "/images/devsons_sides.png", category: "Sides", price: 4.95, description: "Golden crispy battered onion rings." },
  { id: 15, name: "Mozzarella Sticks (5)", image: "/images/devsons_sides.png", category: "Sides", price: 4.95, description: "Crispy coated mozzarella with gooey cheese centre." },
  { id: 16, name: "Mac & Cheese Bites (5)", image: "/images/devsons_sides.png", category: "Sides", price: 4.95, description: "Creamy macaroni cheese coated and fried until golden." },
  { id: 17, name: "Potato Tots (12)", image: "/images/devsons_sides.png", category: "Sides", price: 4.95, description: "Crispy potato bites served golden and crunchy." },
  
  // Signature Boxes
  { id: 18, name: "DEVSON’S MEAL DEAL", image: "/images/devsons_box_meal.png", category: "Signature Boxes", price: 17.95, description: "Any Signature Burger + Skin-On Fries + Drink", badge: "Expected Best Seller", badgeIcon: "Star" },
  { id: 19, name: "DOUBLE TROUBLE DEAL", image: "/images/devsons_box_meal.png", category: "Signature Boxes", price: 25.95, description: "Any 2 Signature Burgers + Loaded Fries + 2 Drinks" },
  { id: 20, name: "THE DEVSON’S BOX", image: "/images/devsons_box_meal.png", category: "Signature Boxes", price: 23.95, description: "Any Signature Burger + Loaded Fries + 2 Wings + Drink + Choice of Dip" },
  { id: 21, name: "THE BEAST DUO", image: "/images/devsons_box_meal.png", category: "Signature Boxes", price: 39.95, description: "Any 2 Signature Burgers + Loaded Fries + 4 Wings + Potato Tots + 2 Drinks + 2 Dips", badge: "Designed For Sharing", badgeIcon: "Flame" },
  
  // Extras
  { id: 22, name: "Extra Smash Patty", image: "/images/devsons_signature_burger.png", category: "Extras", price: 4.00, description: "Add another smashed beef patty." },
  { id: 23, name: "Chicken", image: "/images/devsons_chicken_burger.png", category: "Extras", price: 2.50, description: "Add chicken." },
  { id: 24, name: "Fried Egg", image: "/images/devsons_sides.png", category: "Extras", price: 2.50, description: "Add a fried egg." },
  { id: 25, name: "Crispy Beef Bacon", image: "/images/devsons_sides.png", category: "Extras", price: 1.50, description: "Add crispy beef bacon." },
  
  // Dips & Drinks
  { id: 26, name: "House Dips", image: "/images/devsons_dips.png", category: "House Dips", price: 1.50, description: "Choose: House Burger Sauce, Garlic Mayo, Black Peppercorn Sauce, Truffle Aioli, Smoky BBQ Sauce" },
  { id: 27, name: "Drinks", image: "/images/devsons_drinks.png", category: "Drinks", price: 1.95, description: "Choose: Coca-Cola, Coca-Cola Zero, Fanta Orange, Sprite, Dr Pepper, Red Bull, Still Water" },
];

const CATEGORIES = ['All', 'Signature Burgers', 'Chicken & Veg Boxes', 'Loaded Fries', 'Sides', 'Signature Boxes', 'Extras', 'House Dips', 'Drinks'];
const SORT_OPTIONS = ['None', 'Price: Low to High', 'Price: High to Low'];

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('None');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filteredAndSortedItems = useMemo(() => {
    let items = [...menuData];

    if (selectedCategory !== 'All') {
      items = items.filter(item => item.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
    }

    if (sortOption === 'Price: Low to High') {
      items.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Price: High to Low') {
      items.sort((a, b) => b.price - a.price);
    }

    return items;
  }, [searchQuery, selectedCategory, sortOption]);

  return (
    <main className="bg-primary min-h-screen pt-[90px] lg:pt-[100px] selection:bg-accent selection:text-primary">
      
      {/* Menu Hero */}
      <div className="relative w-full h-[40vh] min-h-[350px] flex flex-col justify-center items-center overflow-hidden border-b border-[#333] bg-gradient-to-br from-primary via-[#1a1a1a] to-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-primary/50 to-primary"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-accent"></div>
            <p className="text-accent font-body tracking-[0.3em] uppercase text-sm font-semibold">Our Menu</p>
            <div className="h-[1px] w-12 bg-accent"></div>
          </div>
          <h1 className="text-white font-heading uppercase tracking-widest drop-shadow-2xl mb-6 leading-none" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}>
            DEVSON'S <span className="text-accent">MENU</span>
          </h1>
          <p className="text-gray-300 font-body text-lg md:text-xl font-light">
            Smashed. Seasoned. Legendary. Crafted with premium double 3oz smashed beef, toasted potato buns and bold house-made flavours.
          </p>
        </motion.div>
      </div>

      {/* Controls / Filters */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 w-full">
          
          {/* Categories */}
          <div className="flex-1 w-full overflow-x-auto no-scrollbar pb-4 lg:pb-0">
            <div className="flex flex-nowrap items-center gap-3 w-max lg:w-auto">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 font-body uppercase tracking-[0.1em] text-xs font-semibold whitespace-nowrap border transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'border-accent bg-accent text-primary shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                      : 'border-gray-800 bg-secondary text-gray-400 hover:border-accent hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-4 w-full lg:w-auto flex-shrink-0">
            {/* Search */}
            <div className="relative w-full lg:w-64 flex-shrink-0">
              <input 
                type="text" 
                placeholder="Search menu..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-secondary border border-gray-800 focus:outline-none focus:border-accent transition-colors font-body text-white placeholder-gray-500 text-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full lg:w-56 flex-shrink-0">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="w-full flex items-center justify-between px-5 py-3 bg-secondary border border-gray-800 hover:border-accent transition-colors font-body uppercase tracking-wider text-xs font-semibold text-white"
              >
                Sort: {sortOption}
                <ChevronDown size={16} className={`text-accent transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isSortOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-secondary border border-gray-800 shadow-2xl z-20"
                  >
                    {SORT_OPTIONS.map(option => (
                      <button
                         key={option}
                        onClick={() => {
                          setSortOption(option);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 font-body uppercase tracking-wider text-xs font-semibold transition-colors hover:bg-gray-800 ${
                          sortOption === option ? 'text-accent' : 'text-gray-300'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        {filteredAndSortedItems.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10"
          >
            <AnimatePresence>
              {filteredAndSortedItems.map(item => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="bg-secondary border border-gray-800 hover:border-accent p-6 lg:p-8 flex flex-col group hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)] transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-accent text-primary px-4 py-2 font-body font-bold text-sm tracking-widest z-20 rounded-bl-lg shadow-lg">
                    £{item.price.toFixed(2)}
                  </div>
                  
                  {item.badge && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-primary/80 backdrop-blur-sm border border-accent/50 text-accent px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                      {item.badgeIcon === 'Star' ? <Star size={12} className="fill-accent" /> : <Flame size={12} className="fill-accent" />}
                      {item.badge}
                    </div>
                  )}

                  {item.image && (
                    <div className="w-full h-48 -mx-6 -mt-6 lg:-mx-8 lg:-mt-8 mb-6 overflow-hidden relative">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-primary to-primary"></div>
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  )}

                  <div className={`flex-1 flex flex-col ${!item.image ? 'pt-6 lg:pt-8' : ''}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-[1px] flex-1 bg-gray-800 group-hover:bg-accent/50 transition-colors"></div>
                      <p className="text-accent font-body text-[10px] font-bold uppercase tracking-[0.2em]">{item.category}</p>
                      <div className="h-[1px] flex-1 bg-gray-800 group-hover:bg-accent/50 transition-colors"></div>
                    </div>
                    
                    <h3 className="text-white font-heading text-2xl lg:text-3xl uppercase tracking-wide leading-tight mb-4 group-hover:text-accent transition-colors text-center">
                      {item.name}
                    </h3>
                    
                    <p className="text-gray-400 font-body text-sm leading-relaxed mb-4 flex-1 text-center font-light">
                      {item.description}
                    </p>

                    {item.quote && (
                      <p className="text-accent/80 font-heading italic text-lg text-center mb-6">
                        "{item.quote}"
                      </p>
                    )}
                    
                    <button className="w-full bg-primary border border-accent text-accent font-body uppercase tracking-[0.2em] text-xs font-bold py-4 hover:bg-accent hover:text-primary transition-all duration-300 mt-auto shadow-[0_0_10px_rgba(212,175,55,0)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                      Add to Order
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="w-full py-32 flex flex-col items-center justify-center text-center">
            <p className="text-accent font-heading text-4xl uppercase tracking-widest mb-4">No Items Found</p>
            <p className="text-gray-400 font-body font-light">Try adjusting your category or search filters.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSortOption('None');
              }}
              className="mt-8 border border-accent text-accent px-8 py-3 font-body text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      
      <PartnerStrip />
    </main>
  );
};

export default Menu;
