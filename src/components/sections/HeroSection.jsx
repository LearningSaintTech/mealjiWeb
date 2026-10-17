import React from 'react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full mt-[100px] md:mt-0 h-[104vw] sm:h-[80vh] md:h-[88vh] lg:h-[94vh] sm:min-h-[540px] md:min-h-[640px] flex items-center justify-center bg-[#FAF7F0] overflow-hidden"
    >
      {/* Background Image with Authentic Table Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Home.png"
          alt="The Great Meal Ji Since 2026"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Top Tagline */}
        {/* <p className="text-white/80 text-xs md:text-sm font-semibold tracking-[0.35em] uppercase mb-2">
          THE GREAT
        </p> */}

        {/* Master Logo / Title: MEAL JI */}
        {/* <h1 className="text-white font-title text-6xl sm:text-7xl md:text-9xl font-extrabold tracking-wide uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] my-2 select-none">
          MEAL JI
        </h1> */}

        {/* Since Divider */}
        {/* <div className="flex items-center justify-center gap-4 my-2 w-full max-w-xs md:max-w-md">
          <span className="h-[1px] flex-1 bg-white/40"></span>
          <span className="text-white/70 text-xs md:text-sm font-light tracking-[0.3em] uppercase px-2">
            SINCE
          </span>
          <span className="h-[1px] flex-1 bg-white/40"></span>
        </div> */}

        {/* Year */}
        {/* <p className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-widest mt-1">
          2026
        </p> */}
      </div>

      {/* Bottom subtle blend into next section */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF7F0] to-transparent pointer-events-none" /> */}
    </section>
  );
}
