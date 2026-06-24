import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import PartnerStrip from '../components/PartnerStrip';

const menuData = [
  { id: 1, name: 'The Original Beef', category: 'Beef Burgers', price: 6.99, description: '4oz pure Angus beef, American cheese, lettuce, tomato, signature sauce.', image: 'https://burgerandsauce.com/wp-content/uploads/2025/08/4oz_beef-burger-3000px-rgb-tp-upd-1024x1024.png' },
  { id: 2, name: 'Angus Beef Stack', category: 'Beef Burgers', price: 9.99, description: 'Double 4oz Angus beef patties, double cheese, caramelized onions, house mayo.', image: 'https://burgerandsauce.com/wp-content/uploads/2022/05/angus-beef-stack-3000px-1024x1024.png' },
  { id: 3, name: 'Beef Nacho Burger', category: 'Beef Burgers', price: 8.49, description: 'Beef patty topped with crispy nachos, jalapeños, and warm cheese sauce.', image: 'https://burgerandsauce.com/wp-content/uploads/2021/03/burger-and-sauce-beef-nacho-3000px-2-1-1024x1024.png' },
  { id: 4, name: 'The Original Chicken', category: 'Chicken Burgers', price: 7.49, description: 'Crispy fried chicken breast, fresh lettuce, and our legendary house mayo.', image: 'https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-suace-chicken-burger-3000px-2.1-1024x1024.png' },
  { id: 5, name: 'Fiery Legend', category: 'Chicken Burgers', price: 8.99, description: 'Spicy coated chicken breast, jalapeños, spicy mayo, pepper jack cheese.', image: 'https://burgerandsauce.com/wp-content/uploads/2021/03/burger-and-sauce-fiery-Legend-3000px-2-3-1024x1024.png' },
  { id: 6, name: 'The Veggie Original', category: 'Veggie Burgers', price: 6.49, description: 'House-made fresh potato and mixed vegetable patty, lettuce, tomato, mayo.', image: 'https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce-veggi-burger-3000px-2.1-1024x1024.png' },
  { id: 7, name: 'Signature Fries', category: 'Fries & Sides', price: 2.99, description: 'Crispy skin-on fries seasoned to perfection.', image: 'https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce-signature-fries-3000px-1024x1024.png' },
  { id: 8, name: 'Animal Fries', category: 'Fries & Sides', price: 5.49, description: 'Skin-on fries smothered in cheese sauce, grilled onions, and secret sauce.', image: 'https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce-animal-fries-bn-3000px-1024x1024.png' },
  { id: 9, name: 'Chicken & Cheese Fries', category: 'Fries & Sides', price: 6.49, description: 'Loaded fries with chopped crispy chicken, melted cheese, and jalapeños.', image: 'https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce-chicken-cheese-fries-bn-3000px-1024x1024.png' },
  { id: 10, name: 'Lemon Pepper Wings', category: 'Fries & Sides', price: 6.99, description: 'Crispy chicken wings tossed in our signature lemon pepper seasoning.', image: 'https://burgerandsauce.com/wp-content/uploads/2022/07/wings-lemon-pepper-products-banner-3000px-RGB-1024x1024.png' },
  { id: 11, name: 'Fruity Refreshers', category: 'Drinks', price: 3.49, description: 'Ice cold, handcrafted fruity refreshers in multiple flavors.', image: 'https://burgerandsauce.com/wp-content/uploads/2023/10/refreshers-3000px-rgb-1024x1024.png' },
  { id: 12, name: 'CreamySu Desserts', category: 'Desserts', price: 4.99, description: 'Premium soft serve ice cream layered with rich sauces and toppings.', image: 'https://burgerandsauce.com/wp-content/uploads/2023/10/desserts-creamysu-3000px-RGB-1024x1024.png' },
];

const CATEGORIES = ['All', 'Beef Burgers', 'Chicken Burgers', 'Veggie Burgers', 'Fries & Sides', 'Drinks', 'Desserts'];
const SORT_OPTIONS = ['None', 'Price: Low to High', 'Price: High to Low'];

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('None');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filteredAndSortedItems = useMemo(() => {
    let items = [...menuData];

    // 1. Filter by category
    if (selectedCategory !== 'All') {
      items = items.filter(item => item.category === selectedCategory);
    }

    // 2. Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
    }

    // 3. Sort
    if (sortOption === 'Price: Low to High') {
      items.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Price: High to Low') {
      items.sort((a, b) => b.price - a.price);
    }

    return items;
  }, [searchQuery, selectedCategory, sortOption]);

  return (
    <main className="bg-gray-50 min-h-screen pt-[90px] lg:pt-[100px]">
      
      {/* Menu Hero */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex flex-col justify-center items-center overflow-hidden border-b border-gray-200">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce_hr_early_2020_20-2048x1367.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-white font-heading uppercase tracking-[0.15em] drop-shadow-2xl mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            Our Menu
          </h1>
          <p className="text-accent font-review italic drop-shadow-lg text-xl md:text-2xl">
            Explore our handcrafted selection.
          </p>
        </motion.div>
      </div>

      {/* Controls / Filters */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 w-full">
          
          {/* Categories (Scrollable on smaller screens) */}
          <div className="flex-1 w-full overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            <div className="flex flex-nowrap items-center gap-2 lg:gap-3 w-max lg:w-auto">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 font-heading uppercase tracking-wider text-sm whitespace-nowrap border-2 transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-200 bg-white text-gray-600 hover:border-accent hover:text-black'
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
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 bg-white focus:outline-none focus:border-accent transition-colors font-body text-black"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full lg:w-56 flex-shrink-0">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="w-full flex items-center justify-between px-4 py-2 border-2 border-gray-200 bg-white hover:border-accent transition-colors font-heading uppercase tracking-wider text-sm text-black"
              >
                Sort: {sortOption}
                <ChevronDown size={16} className={`transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isSortOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-200 shadow-xl z-20"
                  >
                    {SORT_OPTIONS.map(option => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortOption(option);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 font-heading uppercase tracking-wider text-sm transition-colors hover:bg-gray-50 ${
                          sortOption === option ? 'text-accent font-bold' : 'text-black'
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence>
              {filteredAndSortedItems.map(item => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-white border border-gray-100 hover:border-accent p-6 flex flex-col group hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 font-heading text-lg font-bold z-10">
                    £{item.price.toFixed(2)}
                  </div>
                  
                  <div className="w-full aspect-square mb-6 relative flex justify-center items-center">
                    <div className="absolute inset-0 bg-accent/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain relative z-10 drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <p className="text-accent font-heading text-xs uppercase tracking-widest mb-2">{item.category}</p>
                    <h3 className="text-black font-heading text-2xl uppercase tracking-wide leading-tight mb-3 group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 font-body text-sm leading-relaxed mb-6 flex-1">
                      {item.description}
                    </p>
                    <button className="w-full bg-black text-white font-heading uppercase tracking-widest py-3 hover:bg-accent hover:text-black transition-colors">
                      Add to Order
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="w-full py-24 flex flex-col items-center justify-center text-center">
            <p className="text-gray-400 font-heading text-3xl uppercase tracking-widest mb-4">No Items Found</p>
            <p className="text-gray-500 font-body">Try adjusting your category or search filters.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSortOption('None');
              }}
              className="mt-6 border-2 border-black text-black px-8 py-3 font-heading uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
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
