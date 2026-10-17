import React from 'react';
import { Phone } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantInfo';

/*
  On lg+ the card keeps the design ratio (1608 x 640; it grows taller only if text needs it) and is a size container,
  so every inner size is expressed in cqw (1cqw = 1% of the card width).
  That keeps the whole composition proportional at any screen width.
  Below lg (phones + tablets) the three panels stack with regular px sizing.
*/
export default function LuxuryIntro() {
  const { aboutWelcome, openingHours, hotline } = restaurantInfo;

  return (
    <section
      id="about"
      className="relative z-20 w-full mt-0 lg:-mt-[3.1vw] xl:-mt-[3vw] bg-white overflow-visible font-condensed lg:pb-[10.25vw] xl:pb-[9.97vw]"
    >
      <div className="relative w-full">
        {/* Main 3-column card */}
        <div
          className="
            relative ml-auto
            w-full lg:w-[86%] xl:w-[83.75%]
            lg:aspect-[1608/640]
            grid grid-cols-1 lg:grid-cols-3
            shadow-[0_20px_50px_rgba(0,0,0,0.15)]
          "
          style={{ containerType: 'inline-size' }}
        >
          {/* Chef mascot — overlaps the card's bottom-left corner (sized in % of card width) */}
          <img
            src="/images/cheft.png"
            alt="Meal Ji Chef Mascot"
            className="hidden lg:block absolute z-30 pointer-events-none left-[-14.2cqw] bottom-[-11.9cqw] w-[23.7cqw] h-auto drop-shadow-[0_16px_25px_rgba(0,0,0,0.22)]"
          />

          {/* ===== LEFT — WELCOME ===== */}
          <div
            className="
              relative bg-[#F8F3EA] text-center
              flex flex-col items-center justify-center
              px-6 pt-9 pb-8 lg:px-[3cqw] lg:py-[3cqw]
            "
          >
            <img
              src="/images/flourish-luxury-transparent.png"
              alt=""
              className="w-[95px] lg:w-[8.2cqw] h-auto object-contain opacity-80"
            />

            <h2
              className="
                mt-4 lg:mt-[2.2cqw]
                font-semibold uppercase text-[#171717]
                text-[22px] lg:text-[max(20px,2.3cqw)] leading-[1.3] lg:leading-[1.4]
                max-w-[300px] lg:max-w-[24cqw]
              "
            >
              {aboutWelcome.heading}
            </h2>

            <p
              className="
                mt-4 lg:mt-[1.5cqw]
                font-['Jost',sans-serif] text-[#6F6A63]
                text-[12.5px] lg:text-[max(12px,0.98cqw)] leading-[1.75] lg:leading-[1.7]
                max-w-[300px] lg:max-w-[27.5cqw]
              "
            >
              {aboutWelcome.description}
            </p>

            {/* Mobile mascot — sits beside the hotline */}
            <img
              src="/images/cheft.png"
              alt=""
              className="lg:hidden absolute left-3 bottom-0 w-[96px] h-auto pointer-events-none drop-shadow-[0_10px_18px_rgba(0,0,0,0.2)]"
            />

            {/* Hotline */}
            <div
              className="
                mt-6 lg:mt-[2.2cqw] ml-[84px] lg:ml-0
                flex items-center bg-white shadow-[0_3px_12px_rgba(0,0,0,0.08)]
                h-[50px] lg:h-[6.2cqw]
              "
            >
              <div className="h-full aspect-square bg-[#FF5425] flex items-center justify-center">
                <Phone className="w-[40%] h-[40%] text-white fill-white -rotate-12" />
              </div>

              <div className="px-4 lg:px-[1.6cqw] lg:min-w-[11cqw] text-left">
                {/* <span className="block text-[9px] lg:text-[max(9px,0.8cqw)] uppercase tracking-[0.06em] text-[#555] leading-none mb-1 lg:mb-[0.6cqw]">
                  Hotline 24/7
                </span> */}
                <a
                  href={`tel:${hotline}`}
                  className="block text-[15px] lg:text-[max(14px,1.6cqw)] font-medium text-[#171717] leading-none hover:text-[#FF5425] transition-colors"
                >
                  {hotline}
                </a>
              </div>
            </div>
          </div>

          {/* ===== CENTER — CHEF PHOTO ===== */}
          <div className="relative h-[85vw] sm:h-[60vw] max-h-[560px] lg:max-h-none lg:h-auto bg-[#171717] overflow-hidden group">
            <img
              src="/images/chef.jpg"
              alt="Executive Chef"
              className="absolute inset-0 w-full h-full object-cover object-top lg:object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          {/* ===== RIGHT — OPENING HOURS ===== */}
          <div
            className="
              relative bg-[#FF5425] text-white overflow-hidden
              flex flex-col justify-center
              px-8 py-10 lg:pl-[4.7cqw] lg:pr-[3.4cqw] lg:py-[4cqw]
            "
          >
            <div
              className="absolute inset-0 opacity-[0.16] pointer-events-none bg-cover bg-center mix-blend-multiply"
              style={{ backgroundImage: 'url(/images/orange-pattern-clean.jpg)' }}
            />

            <div className="relative z-10 w-full">
              <h3 className="text-[28px] lg:text-[max(22px,2.45cqw)] font-medium leading-none mb-5 lg:mb-[1.6cqw]">
                Opening Hours
              </h3>

              <div>
                {openingHours.map((item) => (
                  <div
                    key={item.day}
                    className="
                      flex items-center justify-between gap-3
                      border-b border-white/15 py-2 lg:py-[1cqw]
                      text-[12px] lg:text-[max(11px,1cqw)] leading-[1.35]
                    "
                  >
                    <span className="uppercase font-normal tracking-[0.04em] whitespace-nowrap">
                      {item.day}:
                    </span>
                    <span className="font-normal tracking-[0.04em] text-right whitespace-nowrap">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
