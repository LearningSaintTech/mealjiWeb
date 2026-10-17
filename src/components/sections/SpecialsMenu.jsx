import React from 'react';
import { specialsItems } from '../../data/specialsData';

/*
  Background is the "frame special" artwork (1920 x 900). On lg+ the content frame
  keeps that ratio as a minimum height and the card row spans 67% of it (88% on 1024-1279px
  so cards stay readable). Everything scales proportionally on large screens.
  Each card is a size container, so its contents are sized in cqw (% of the card width)
  and keep identical proportions on desktop, tablet and phone.
  Phones get a swipeable row of cards.
*/
const Flourish = ({ flip = false }) => (
  <svg
    className={`w-9 lg:w-[max(28px,2.6cqw)] h-2.5 text-[#F15A24] ${flip ? 'scale-x-[-1]' : ''}`}
    viewBox="0 0 50 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="3" cy="5" r="2" />
    <line x1="5" y1="5" x2="34" y2="5" />
    <path d="M34 1.5l3.5 3.5-3.5 3.5M39 1.5l3.5 3.5-3.5 3.5M44 1.5l3.5 3.5-3.5 3.5" />
  </svg>
);

export default function SpecialsMenu() {
  return (
    <section
      id="specials"
      className="relative w-full bg-[#F8F0E0] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/frame special.png')" }}
    >
      {/* Content frame: sizes in cqw are % of this frame, so the design scales on any screen */}
      <div
        className="relative mx-auto w-full py-14 sm:py-16 lg:py-[4vw] lg:min-h-[46.875vw] flex flex-col justify-center"
        style={{ containerType: 'inline-size' }}
      >
      {/* Header */}
      <div className="text-center px-4">
        <div className="flex items-center justify-center gap-2 lg:gap-[0.6cqw]">
          <Flourish />
          <span className="font-condensed font-medium uppercase text-[13px] lg:text-[max(11px,0.9cqw)] tracking-[0.08em] text-[#F15A24]">
            Top Special
          </span>
          <Flourish flip />
        </div>
        <h2 className="font-condensed font-medium text-[#111111] leading-tight text-[34px] lg:text-[max(30px,2.75cqw)] mt-1 lg:mt-[0.4cqw]">
          Our Specials Menu
        </h2>
      </div>

      {/* Cards */}
      <div
        className="
          mt-8 lg:mt-[2.6cqw] mx-auto w-full lg:w-[88cqw] xl:w-[67cqw]
          flex sm:grid sm:grid-cols-2 lg:grid-cols-4
          gap-4 sm:gap-5 lg:gap-[1.5cqw]
          overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar
          px-6 sm:px-10 lg:px-0 pb-4 sm:pb-0
        "
      >
        {specialsItems.map((item) => (
          <article
            key={item.id}
            className="group shrink-0 w-[70%] sm:w-auto snap-center bg-white rounded-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.05)] flex flex-col items-center text-center"
            style={{ containerType: 'inline-size' }}
          >
            {/* Image with orange frame + price badge */}
            <div className="relative mt-[8.6cqw] w-[71cqw] aspect-square">
              <div className="w-full h-full rounded-[13cqw] border-[2.6cqw] border-[#F15A24] overflow-hidden bg-[#F15A24]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-[10cqw] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="absolute -right-[4cqw] -bottom-[3cqw] w-[25cqw] h-[25cqw] rounded-full bg-[#072B31] border-[1.2cqw] border-white text-white font-condensed font-medium text-[6.3cqw] flex items-center justify-center">
                {item.price}
              </span>
            </div>

            {/* Name */}
            <h3 className="font-condensed font-medium text-[#111111] text-[7.8cqw] leading-tight mt-[8cqw] transition-colors group-hover:text-[#F15A24]">
              {item.name}
            </h3>

            {/* Ingredients between two hairlines */}
            <div className="w-[82cqw] mt-[3.5cqw] border-y border-[#E8E2D8] py-[3cqw]">
              <p className="font-['Jost',sans-serif] font-medium uppercase text-[#333] text-[4.4cqw] tracking-[0.04em]">
                {item.ingredients.join(', ')}
              </p>
            </div>

            {/* Description */}
            <p className="font-['Jost',sans-serif] text-[#6F6A63] text-[5.1cqw] leading-[1.75] px-[9cqw] mt-[4cqw] mb-[11cqw] min-h-[17.5cqw]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
