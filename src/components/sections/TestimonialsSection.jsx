import React, { useState } from 'react';


const testimonials = [
  {
    dishTitle: "Taste & Quality",
    quote:
      "Honestly, the food was so delicious! Everything tasted fresh, the flavours were amazing, and it felt just like a homemade meal. Definitely ordering again from Meal Ji!",
    author: "Happy Customer",
    role: "Food Lover",
  },
  {
    dishTitle: "Homemade Food Feel",
    quote:
      "Finally found food that feels like ghar ka khana! The taste was comforting, the quality was great, and every bite was worth it. Meal Ji has become my new favourite!",
    author: "Happy Customer",
    role: "Regular Foodie",
  },
  {
    dishTitle: "Variety & Experience",
    quote:
      "I loved my experience with Meal Ji! The food was flavourful, perfectly prepared, and so satisfying. It's a great option when you're craving something tasty without cooking yourself.",
    author: "Happy Customer",
    role: "Food Enthusiast",
  },
  {
    dishTitle: "Overall Favourite",
    quote:
      "Meal Ji really impressed me with its food! The meal was delicious, fresh, and full of flavour. It's the kind of food that makes you look forward to your next order.",
    author: "Happy Customer",
    role: "Satisfied Customer",
  },
];


export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative bg-[#072B31] py-16 md:py-32 px-4 sm:px-6 lg:px-8 text-white overflow-hidden text-center">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E353B]/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="scale-wide relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-title text-white tracking-wide mb-6">
          {testimonials[currentIndex].dishTitle}
        </h2>

        {/* Quote */}
        <blockquote className="max-w-3xl text-white/80 text-base sm:text-lg md:text-xl font-light leading-relaxed italic mb-10 px-4">
          “{testimonials[currentIndex].quote}”
        </blockquote>

        {/* Overlapping Photo Cluster */}
        <div className="relative my-4 w-72 sm:w-80 h-44 sm:h-52 flex items-center justify-center select-none">
          {/* <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 transform hover:scale-105 transition-transform duration-300"> */}
          <img
            src="/images/testimonial-photos.jpg"
            alt="Client review and dish"
            className="w-full h-full object-cover object-center"
          />
          {/* </div> */}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full ${currentIndex === idx
                ? 'w-7 h-2.5 bg-[#F15A24]'
                : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
