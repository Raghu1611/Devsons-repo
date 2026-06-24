import React from 'react';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      image: image1,
      category: "OFFERS",
      title: "Get 20% Off Your First Order Online This Month",
      date: "OCT 24"
    },
    {
      id: 2,
      image: image2,
      category: "MENU",
      title: "Introducing Our New Spicy Jalapeño Chicken Burger",
      date: "NOV 02"
    },
    {
      id: 3,
      image: image3,
      category: "NEWS",
      title: "Devsons is Opening a New Location in Birmingham",
      date: "NOV 15"
    }
  ];

  return (
    <div className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-black font-heading text-5xl lg:text-6xl uppercase tracking-widest leading-none">
            Stay In The Loop
          </h2>
          <button className="hidden sm:block border-b-2 border-black text-black font-heading text-2xl uppercase hover:text-accent hover:border-accent transition-colors pb-1">
            View All News
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-video bg-black">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter contrast-125"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent font-heading text-xl tracking-widest uppercase bg-black px-3 py-1">
                    {post.category}
                  </span>
                  <span className="text-black/50 font-heading text-xl uppercase tracking-wider">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-black font-heading text-3xl uppercase tracking-wide leading-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center sm:hidden">
          <button className="border-2 border-black text-black font-heading text-xl px-8 py-3 uppercase w-full">
            View All News
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlogSection;
