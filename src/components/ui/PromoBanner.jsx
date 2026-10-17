import React from 'react';

/*
  Full-width promotional poster (public/images/promo.png, 1640 x 624) shown at the top of the
  About and legal pages, directly below the fixed navbar — the .nav-spacer reserves the
  navbar's measured height (--nav-h, set in App.jsx) so the banner is never hidden under it.
  Served as WebP (48 KB mobile / 175 KB desktop) with the original PNG as a fallback,
  and links to the menu like its "Order Now" art.
*/
export default function PromoBanner() {
  return (
    <div className="bg-[#0A252B]">
      <div className="nav-spacer" aria-hidden="true" />
      <a
        href="#menu"
        aria-label="Super Delicious Menu, every day — see the Meal Ji menu"
        className="group block overflow-hidden"
      >
        <picture>
          <source
            type="image/webp"
            srcSet="/images/promo-820.webp 820w, /images/promo.webp 1640w"
            sizes="100vw"
          />
          <img
            src="/images/promo.png"
            alt="Super Delicious Menu, every day — free delivery and 50% off on all items at Meal Ji"
            width="1640"
            height="624"
            fetchpriority="high"
            className="block w-full h-auto aspect-[1640/624] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </picture>
      </a>
    </div>
  );
}
