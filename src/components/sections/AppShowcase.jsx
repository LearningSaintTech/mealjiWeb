import React from 'react';
import { Apple } from 'lucide-react';

/*
  Layout is driven by the BG.png artwork (1920 x 1106). On lg+ the content frame
  keeps that aspect ratio and every element is placed in % / cqw of the frame, so the
  composition stays identical from 1024px up to any large screen.
  Text sizes have px minimums so they stay readable. Below lg the content stacks.
*/
export default function AppShowcase() {
  return (
    <section className="relative isolate z-10 w-full overflow-hidden lg:overflow-visible bg-white text-white">
      {/* Orange wave background */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-bottom lg:bg-[length:100%_100%]"
        style={{ backgroundImage: "url('/images/BG.png')" }}
      />

      {/* Content frame: inner sizes use cqw (1% of this frame's width), so the design scales on any screen */}
      <div
        className="relative mx-auto w-full pb-0 sm:px-6 lg:px-0 lg:aspect-[1920/1106]"
        style={{ containerType: 'inline-size' }}
      >
      {/* ===== Left content ===== */}
      <div className="relative z-20 px-6 pt-16 lg:absolute lg:left-[16.5%] lg:top-[25%] lg:w-[36%] lg:p-0">
        <h2 className="font-condensed font-semibold leading-[1.15] text-[34px] lg:text-[max(30px,3.3cqw)]">
          Indian Flavours At Your <br className="hidden lg:block" />Doorstep
        </h2>

        <p className="mt-4 lg:mt-[1.4cqw] font-['Jost',sans-serif] text-[14px] lg:text-[max(13px,1.05cqw)] leading-[1.6] text-white/95">
          Bring your favourite Indian dishes home with Mealji.
          <br className="hidden lg:block" />
          {' '}Explore the menu and order straight from our app.
        </p>

        {/* Store badges */}
        <div className="mt-7 lg:mt-[2.6cqw]">
          <span className="mb-3 lg:mb-[0.9cqw] block font-['Jost',sans-serif] text-[11px] lg:text-[max(10px,0.75cqw)] font-semibold uppercase tracking-[0.14em]">
            Coming Soon On:
          </span>

          <div className="flex flex-col items-start lg:flex-row lg:flex-wrap gap-3 lg:gap-[1cqw]">
            <a
              href="#download"
              className="flex items-center gap-2 lg:gap-[0.5cqw] rounded-[6px] lg:rounded-[0.45cqw] bg-black border border-white/20 px-3 py-2 lg:px-[0.9cqw] lg:py-[0.5cqw] text-white transition hover:bg-neutral-800"
            >
              <Apple className="w-6 h-6 lg:w-[max(20px,1.7cqw)] lg:h-[max(20px,1.7cqw)] shrink-0 fill-current" />
              <span className="font-['Jost',sans-serif] text-left">
                <span className="block text-[9px] lg:text-[max(8px,0.62cqw)] leading-tight">Download on the</span>
                <span className="block text-[16px] lg:text-[max(14px,1.3cqw)] font-medium leading-none">App Store</span>
              </span>
            </a>

            <a
              href="#download"
              className="flex items-center gap-2 lg:gap-[0.5cqw] rounded-[6px] lg:rounded-[0.45cqw] bg-black border border-white/20 px-3 py-2 lg:px-[0.9cqw] lg:py-[0.5cqw] text-white transition hover:bg-neutral-800"
            >
              <svg className="w-6 h-6 lg:w-[max(19px,1.6cqw)] lg:h-[max(19px,1.6cqw)] shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#00D7FE" d="M3.6 1.8 13.8 12 3.6 22.2A2 2 0 0 1 3 20.8V3.2c0-.5.2-1 .6-1.4z" />
                <path fill="#FFCE00" d="m17.8 8-4 4 4 4 3.5-2a2 2 0 0 0 0-3.5z" />
                <path fill="#FF3A44" d="M13.8 12 3.6 22.2c.6.6 1.6.7 2.4.3L17.8 16z" />
                <path fill="#00F076" d="M13.8 12 17.8 8 6 1.5c-.8-.4-1.8-.3-2.4.3z" />
              </svg>
              <span className="font-['Jost',sans-serif] text-left">
                <span className="block text-[9px] lg:text-[max(8px,0.62cqw)] leading-tight uppercase">Get it on</span>
                <span className="block text-[16px] lg:text-[max(14px,1.3cqw)] font-medium leading-none">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ===== Phone mockup (includes quote bubble + dot pattern) ===== */}
      <div className="relative z-10 mx-auto mt-10 w-[86%] max-w-[380px] lg:absolute lg:mt-0 lg:max-w-none lg:left-[48%] lg:top-[19%] lg:w-[33%]">
        <img
          src="/images/app.png"
          alt="Mealji mobile food ordering app"
          className="block h-auto w-full object-contain"
        />
      </div>

      {/* ===== Handwritten accent ===== */}
      <div className="hidden lg:block absolute left-[82.5%] top-[11%] z-20 -rotate-[14deg] font-script text-[max(20px,1.9cqw)] leading-[1.05] text-white">
        Good
        <br />
        <span className="ml-[0.4cqw]">Food</span>
        <br />
        Happier
        <br />
        <span className="ml-[1.4cqw]">You</span>
      </div>

      {/* ===== Chef mascot ===== */}
      <img
        src="/images/mascot-white-steam.png"
        alt="Mealji chef mascot"
        className="pointer-events-none hidden lg:block absolute bottom-[-2.5%] left-[15.8%] z-20 w-[14.5%] select-none object-contain"
      />
      </div>
    </section>
  );
}
