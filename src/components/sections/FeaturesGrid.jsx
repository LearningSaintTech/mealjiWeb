import React from 'react';
import { featuresData } from '../../data/featuresData';

export default function FeaturesGrid() {
  return (
    <section className="relative bg-white pt-0 pb-20 md:pb-28 lg:pb-32 px-4 sm:px-6 overflow-hidden font-['Jost',sans-serif]">
      <div className="scale-wide max-w-[848px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 lg:gap-x-1 gap-y-2 lg:gap-y-0 items-start">
          {featuresData.map((feature, idx) => {
            // Cards 0 & 2: lower card, longer string, icon on top
            // Cards 1 & 3: higher card, shorter string, icon at bottom
            const isLowerCard = idx % 2 === 0;

            const Icon = (
              <div className="h-[68px] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="max-h-full max-w-[90px] object-contain"
                />
              </div>
            );

            const Title = (
              <h3 className="font-condensed text-[16px] font-semibold text-[#111111] leading-tight tracking-[0.01em]">
                {feature.title}
              </h3>
            );

            const Description = (
              <p className="text-[#6B6B6B] text-[11.5px] leading-[1.75] font-normal max-w-[175px] mx-auto">
                {feature.description}
              </p>
            );

            return (
              <div key={feature.id} className="flex flex-col items-center w-full">
                {/* Hanging string */}
                <div
                  className={`w-px bg-[#C9C6C1] h-7 ${isLowerCard ? 'lg:h-[108px]' : 'lg:h-[70px]'}`}
                />

                {/* Card */}
                <div
                  className={`relative w-full bg-[#EAE8E4] rounded-[16px] px-3 lg:px-5 text-center flex flex-col items-center justify-center group ${
                    isLowerCard ? 'h-[250px] lg:h-[246px]' : 'h-[250px] lg:h-[285px]'
                  }`}
                >
                  {/* Pin: white notch on the card's top edge with a dark dot */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center">
                    <span className="w-[7px] h-[7px] rounded-full bg-[#0B2B2E]" />
                  </div>

                  {isLowerCard ? (
                    <>
                      {Icon}
                      <div className="mt-5">{Title}</div>
                      <div className="mt-2">{Description}</div>
                    </>
                  ) : (
                    <>
                      {Description}
                      <div className="mt-3">{Title}</div>
                      <div className="mt-4">{Icon}</div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
