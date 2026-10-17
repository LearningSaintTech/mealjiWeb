import React, { useEffect, useRef, useState } from 'react';
import { restaurantInfo } from '../../data/restaurantInfo';

function AnimatedNumber({ value, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Extract number from values like "3K+" or "50+"
  const numericValue = parseInt(String(value).replace(/\D/g, ''), 10) || 0;
  const prefix = String(value).match(/^[^\d]*/)?.[0] || '';
  const suffix = String(value).match(/[^\d]+$/)?.[0] || '';

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [started, numericValue, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function IndianRecipes() {
  const { stats } = restaurantInfo;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="scale-wide relative lg:min-h-[500px]">

        {/* ========================================
            LEFT CONTENT
        ======================================== */}
        <div className="relative z-20 w-full lg:w-[73%] pt-14 pb-12 lg:py-0 lg:min-h-[500px] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">

            <div className="max-w-[480px]">

              {/* Heading */}
              <h2
                className="
                  text-[#111118]
                  uppercase
                  font-black
                  tracking-[-0.035em]
                  leading-[0.98]
                  text-4xl
                  sm:text-5xl
                  md:text-5xl
                  lg:text-[52px]
                  xl:text-[56px]
                "
              >
                EXPERIENCE
                <br />
                OF REAL INDIAN
                <br />
                RECIPES
              </h2>

              {/* Divider */}
              <div className="mt-7 mb-4 w-[175px] sm:w-[190px] h-[1px] bg-[#BDBDBD]" />

              {/* Stats */}
              <div className="flex items-start gap-8 sm:gap-12">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p
                      className="
                        text-[#F15A24]
                        font-black
                        tracking-[-0.04em]
                        text-3xl
                        sm:text-4xl
                        leading-none
                      "
                    >
                      <AnimatedNumber value={stat.value} />
                    </p>

                    <p
                      className="
                        mt-1
                        text-[7px]
                        sm:text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.08em]
                        text-[#777]
                      "
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>


        {/* ========================================
            ORANGE RIGHT PANEL
        ======================================== */}
        <div
          className="
            relative
            ml-auto
            h-[300px]
            md:h-[400px]
            w-[42%]
            lg:absolute
            lg:top-0
            lg:right-0
            lg:h-full
            lg:w-[27%]
            lg:min-w-[220px]
            bg-[#FF5425]
          "
        >

          {/* ========================================
              FRESH MEALS
          ======================================== */}
          <div
            className="
              absolute
              top-6
              left-5
              lg:top-7
              lg:left-8
              z-20
              text-white
              rotate-[-8deg]
              select-none
            "
          >
            <p className="font-script text-xl sm:text-2xl leading-[0.9]">
              Fresh
            </p>

            <p className="font-script text-xl sm:text-2xl leading-[0.9] ml-2">
              Meals
            </p>
          </div>


          {/* ========================================
              DECORATIVE ONION / FOOD DOODLE
          ======================================== */}
          <div className="absolute top-8 right-5 text-white/70 text-3xl select-none">
            ♧
          </div>

          <div className="absolute top-20 right-5 text-white/60 text-2xl select-none">
            ◯
          </div>


          {/* ========================================
              FOOD PLATE
              OVERLAPS ORANGE PANEL
          ======================================== */}
          <div
            className="
              absolute
              z-30
              top-1/2
              left-[-54vw]
              md:left-[calc(-28vw-170px)]
              lg:left-0
              lg:-translate-x-1/2
              -translate-y-1/2
              w-[58vw]
              h-[58vw]
              md:w-[340px]
              md:h-[340px]
              lg:w-[260px]
              lg:h-[260px]
              rounded-full
              overflow-hidden
              bg-white
              border-[6px]
              border-white
              shadow-[0_12px_35px_rgba(0,0,0,0.18)]
            "
          >
            <img
              src="/images/dish-salmon-salad.jpg"
              alt="Fresh Indian Recipe"
              className="
                w-full
                h-full
                object-cover
                object-center
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>


          {/* ========================================
              CHEF MASCOT
          ======================================== */}
          <div
            className="
              absolute
              z-40
              bottom-0
              right-0
              w-[125px]
              sm:w-[155px]
              md:w-[180px]
              lg:w-[205px]
            "
          >
            <img
              src="/images/meals-chef-kiss.png"
              alt="Chef Mascot"
              className="w-full h-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = '/images/meals-chef-kiss.png'; // Fallback image
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}