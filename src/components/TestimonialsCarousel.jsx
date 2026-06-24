import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      text: "Devsons completely transformed our online presence. Their custom methodology meant we got a web app that fit our exact operational needs, not just a generic template.",
      author: "SARAH JENKINS, CEO"
    },
    {
      id: 2,
      text: "The team's attention to detail and design aesthetics is unmatched. They built our e-commerce platform from scratch and our conversion rates have doubled since launch.",
      author: "MICHAEL CHEN, FOUNDER"
    },
    {
      id: 3,
      text: "We wanted a mobile app that felt premium and responsive. Devsons delivered beyond our expectations, and the post-launch support has been incredible.",
      author: "EMMA WILLIAMS, CMO"
    }
  ];

  return (
    <div className="bg-black py-24 lg:py-32 border-y border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Quote size={64} className="text-accent mx-auto mb-8" />
          <h2 className="text-white font-heading text-4xl lg:text-5xl uppercase tracking-widest">Client Feedback</h2>
        </div>

        {/* Carousel container */}
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-8 pb-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-none w-[85vw] sm:w-[600px] lg:w-[800px] snap-center flex flex-col items-center justify-center text-center">
              <p className="text-white text-2xl lg:text-4xl font-body font-light leading-relaxed mb-10 italic">
                "{testimonial.text}"
              </p>
              <span className="text-accent font-heading text-2xl uppercase tracking-widest">
                — {testimonial.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
