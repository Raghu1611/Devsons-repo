import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      text: "The best burger I've had in a long time! The beef was incredibly fresh and that signature sauce is absolutely addictive. Will definitely be ordering again.",
      author: "SARAH JENKINS, LOCAL GUIDE"
    },
    {
      id: 2,
      text: "You can really taste the difference when the patties are handmade daily. The chicken burger was perfectly crispy on the outside and juicy on the inside.",
      author: "MICHAEL CHEN, FOOD BLOGGER"
    },
    {
      id: 3,
      text: "Amazing value for money! The loaded fries are generous and the fact that everything is fresh and never frozen makes Burger & Sauce my new favorite spot.",
      author: "EMMA WILLIAMS, CUSTOMER"
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
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-gray-50 py-16 lg:py-24 overflow-hidden border-b border-gray-200">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <p className="text-accent font-heading tracking-widest uppercase mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)' }}>
            What People Are Saying
          </p>
          <h2 className="text-black font-heading uppercase tracking-widest leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
            Don't Just Take Our Word For It
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory gap-6 px-4">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex-none w-[300px] sm:w-[400px] lg:w-[500px] bg-white text-black p-8 sm:p-10 snap-center relative border-b-8 border-accent shadow-lg"
            >
              <img src="https://burgerandsauce.com/wp-content/uploads/2021/03/iconmonstr-quote-1.svg" alt="Quote" className="w-12 h-12 lg:w-16 lg:h-16 opacity-10 absolute top-6 left-6" />
              <div className="relative z-10 pt-4">
                <p className="text-black font-review italic leading-relaxed mb-6 font-medium" style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.6rem)' }}>
                  "{testimonial.text}"
                </p>
                <p className="text-accent font-heading uppercase tracking-widest mt-8" style={{ fontSize: 'clamp(1.25rem, 1.5vw, 1.6rem)' }}>
                  {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default TestimonialsCarousel;
