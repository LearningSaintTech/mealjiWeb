
import React, { useState } from 'react';

export default function StartersMenuSection() {
  const [activeTab, setActiveTab] = useState('main');

  const categories = [
    { id: 'main', label: 'Indian Breads' },
    { id: 'desserts', label: 'Rice' },
    { id: 'seafood', label: 'Dry & semi-Dry sabji' },
    { id: 'biryani', label: 'Biryani' },
  ];

  const menuData = {
    main: [
      {
        name: 'Plain Chapati',
        // ingredients: 'wheat',
        price: '₹10/-',
        // extra: 'Extra Free Juice',
      },
      {
        name: 'Plain Paratha',
        // ingredients: 'wheat',
        price: '₹40/-',
        // extra: 'Extra Free Juice',
      },
      {
        name: 'Aloo Paratha',
        // ingredients: '',
        price: '₹60/-',
        // extra: 'Extra Free Juice',
      },
      {
        name: 'Sattu Paratha',
        // ingredients: 'Ricotta / Goat Cheese / Beetroot',
        price: '₹70/-',
        // extra: 'Extra Free Juice',
      },
      {
        name: 'Mooli Paratha',
        // ingredients: 'Ricotta / Goat Cheese / Beetroot',
        price: '₹60/-',
        // extra: 'Extra Free Juice',
      },
      {
        name: 'Gobhi Paratha',
        // ingredients: 'Ricotta / Goat Cheese / Beetroot',
        price: '₹70/-',
        // extra: 'Extra Free Juice',
      },
    ],
    desserts: [
      {
        name: 'Steamed Rice',
        // ingredients: 'Warm Cardamom Syrup / Pista Garnish',
        price: '₹50/-',
        // extra: 'Fresh Daily Batch',
      },
      {
        name: 'Jeera rice',
        // ingredients: 'Roasted Semolina / Cashews / Raisins',
        price: '₹70/-',
        // extra: 'Fresh Daily Batch',
      },
      {
        name: 'Matar Pulao',
        // ingredients: 'Saffron Milk / Pistachio / Almonds',
        price: '₹80/-',
        // extra: 'Chilled Cream',
      },
      {
        name: 'Vegetable Pulao',
        // ingredients: 'Pure Desi Ghee / Roasted Lentils',
        price: '₹90/-',
        // extra: 'Warm Comfort',
      },


      {
        name: 'Masala Khichdi',
        // ingredients: 'Pure Desi Ghee / Roasted Lentils',
        price: '₹90/-',
        // extra: 'Warm Comfort',
      },
      {
        name: 'Lemon rice',
        // ingredients: 'Pure Desi Ghee / Roasted Lentils',
        price: '₹90/-',
        // extra: 'Warm Comfort',
      },
    ],
    seafood: [
      {
        name: 'Aloo matar',
        // ingredients: 'Coconut Milk / Kokum / Curry Leaves',
        price: '₹100/-',
        // extra: 'Extra Free Rice',
      },
      {
        name: 'Mix Vegetable',
        // ingredients: 'Shallots / Ginger Garlic / Whole Spices',
        price: '₹120/-',
        // extra: 'Extra Free Rice',
      },
      {
        name: 'Methi Matar',
        // ingredients: 'Ajwain Spiced Gram Flour / Mint Dip',
        price: '₹120/-',
        // extra: 'Tawa Roasted',
      },
      {
        name: 'Baingan Bharta',
        // ingredients: 'Atlantic Fillet / Fries / Tartare Sauce',
        price: '₹120/-',
        // extra: 'Extra Free Juice',
      },
    ],
    biryani: [
      {
        name: 'Veg Biryani',
        // ingredients: 'Thick Cream Curd / Cardamom / Malai',
        price: '₹160/-',
        // extra: 'Served Chilled',
      },
      {
        name: 'Paneer Biryani',
        // ingredients: 'Roasted Jeera / Mint / Rock Salt',
        price: '₹160/-',
        // extra: 'Digestive Special',
      },
      {
        name: 'Chicken Biryani',
        // ingredients: 'Fresh Lime / Black Salt / Mint Leaves',
        price: '₹120/-',
        // extra: 'Instant Refresher',
      },
      {
        name: 'Mutton Biryani',
        // ingredients: 'Assam CTC Tea / Crushed Ginger / Cardamom',
        price: '₹120/-',
        // extra: 'Hot Brewed',
      },

       {
        name: 'Hyderabadi Biryani',
        // ingredients: 'Assam CTC Tea / Crushed Ginger / Cardamom',
        price: '₹120/-',
        // extra: 'Hot Brewed',
      },
       {
        name: 'Mutton Biryani',
        // ingredients: 'Assam CTC Tea / Crushed Ginger / Cardamom',
        price: '₹120/-',
        // extra: 'Hot Brewed',
      },
    ],
  };

  const currentItems = menuData[activeTab] || menuData.main;

  return (

    <section
      id="menu-starters"
      className="relative w-full bg-[#FAF7F0] bg-cover bg-center bg-no-repeat py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden font-['Oswald',sans-serif]"
      style={{
        backgroundImage: "url('/images/bg-wood.png')",
      }}
    >

      {/* Container matching im2 */}
      <div className="scale-wide relative mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 lg:gap-20 items-center">

        {/* LEFT: MENU ITEMS */}
        <div className="relative z-10 w-full max-w-[600px]">

          {/* Section tag */}
          <div className="mb-2 flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5425]">
              FOOD ITEMS
            </span>
            <span className="text-xs text-[#FF5425] font-bold tracking-wider">
              »»»——
            </span>
          </div>

          {/* Main Title */}

          <h2 className="font-['Oswald',sans-serif] text-[26px] sm:text-3xl md:text-[34px] lg:text-[40px] font-semibold text-[#171717] tracking-tight leading-tight mb-6 whitespace-nowrap">
            Starters &amp; Main Dishes
          </h2>


          {/* Category Tabs */}
          <div className="flex flex-nowrap md:flex-wrap gap-2.5 mb-5 -mx-6 px-6 sm:mx-0 sm:px-0 overflow-x-auto no-scrollbar">
            {categories.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 whitespace-nowrap rounded-[6px] px-4 py-1.5 text-xs font-bold transition-all duration-200 ${isActive
                    ? 'bg-[#FF5425] text-white shadow-sm'
                    : 'bg-white/95 text-[#333] border border-[#DDD7CD] hover:border-[#FF5425] hover:text-[#FF5425]'
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Full Serve Indicator Badge */}
          <div className="flex justify-end mb-2 pr-1">
            <span className="border border-[#AAA499] px-2.5 py-0.5 text-[8.5px] font-semibold text-[#555] tracking-wide rounded-[2px] bg-transparent">
              Full Serve
            </span>
          </div>

          {/* Food Items List */}
          <div className="space-y-4">
            {currentItems.map((item, index) => (
              <div key={`${activeTab}-${index}`} className="group">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="shrink-0 text-sm sm:text-[15px] font-bold text-[#1E1E1E] transition-colors group-hover:text-[#FF5425]">
                    {item.name}
                  </h3>

                  {/* Clean connecting line */}
                  <div className="mb-[3px] flex-1 border-b border-[#CCC6BC]" />

                  <span className="shrink-0 text-sm sm:text-[15px] font-bold text-[#FF5425]">
                    {item.price}
                  </span>
                </div>

                <div className="mt-1 flex items-start justify-between gap-3">
                  <p className="text-[10px] sm:text-[11px] text-[#7E7972] font-normal">
                    {item.ingredients}
                  </p>

                  <p className="shrink-0 text-right text-[9.5px] sm:text-[10px] text-[#7E7972] font-normal">
                    {item.extra}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT: QR CODE SCAN PANEL */}
        <div className="relative mx-auto flex w-full max-w-[380px] flex-col items-center justify-center pt-2 pb-4">

          {/* Handwritten Heading */}
          <h3 className="font-script text-2xl sm:text-[28px] md:text-[32px] text-[#FF5425] font-bold tracking-wide -rotate-1 text-center leading-tight mb-1">
            Good Food, Just a Scan Away
          </h3>

          {/* Decorative Squiggle Under Title */}
          <div className="text-[#FF5425]/70 text-xs sm:text-sm tracking-[0.35em] font-script mb-2 select-none">
            ~ ~ ~ ~ ~ ~
          </div>

          {/* Top Doodle Arrow */}
          <div className="w-full flex justify-start pl-6 sm:pl-8 -mb-3 z-10 pointer-events-none">
            <svg
              className="w-11 h-11 sm:w-12 sm:h-12 text-[#FF5425]"
              viewBox="0 0 50 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M26 6 C12 8, 8 20, 20 34" />
              <path d="M14 28 L20 34 L22 26" />
            </svg>
          </div>

          {/* Rounded White QR Card */}
          <div
            className="
              relative
              w-[240px] h-[240px]
              sm:w-[270px] sm:h-[270px]
              md:w-[290px] md:h-[290px]
              lg:w-[310px] lg:h-[310px]
              rounded-[26px]
              bg-white
              shadow-[0_14px_40px_rgba(0,0,0,0.08)]
              border border-black/[0.04]
              flex flex-col items-center justify-center
              p-5 sm:p-6
              transition-transform duration-300 hover:scale-[1.02]
            "
          >
            <div className="w-full h-full rounded-[18px] bg-[#FAF8F5] border border-dashed border-[#E5DFD5] flex flex-col items-center justify-center p-4 text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white p-2.5 rounded-xl shadow-sm border border-black/5 flex items-center justify-center mb-2">
                {/* <svg viewBox="0 0 24 24" className="w-full h-full text-[#1F1F1F]" fill="currentColor">
                  <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm-2 10h8v8H2v-8zm2 2v4h4v-4H4zm10-14h8v8h-8V2zm2 2v4h4V4h-4zm3 7h1v2h-1v-2zm-3 0h2v1h-2v-1zm5 0h1v1h-1v-1zm-2 2h2v1h-2v-1zm-3 1h2v1h-2v-1zm4 1h1v2h-1v-2zm-2 1h1v1h-1v-1zm3 0h1v1h-1v-1zm-4 1h2v1h-2v-1zm5 0h1v1h-1v-1zm-8 2h1v1h-1v-1zm2 0h2v1h-2v-1zm3 0h1v1h-1v-1zm-7 1h1v1h-1v-1zm3 0h1v1h-1v-1zm2 0h1v1h-1v-1zm-8 1h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h2v1h-2v-1z" />
                </svg> */}
                
{/* <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white p-2 rounded-xl shadow-sm border border-black/5 flex items-center justify-center mb-2 overflow-hidden"> */}
  <img
    src="/images/whatsapqr.jpeg"
    alt="WhatsApp QR Code"
    className="w-full h-full object-contain rounded-lg"
  />
{/* </div> */}

              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#FF5425] uppercase tracking-wider">
                SCAN TO VIEW MENU 
              </span>
              <span className="text-[8.5px] text-[#888] mt-0.5">
                Instant Mobile PDF &amp; Ordering
              </span>
            </div>
          </div>

          {/* Bottom Doodle Arrow */}
          <div className="w-full flex justify-end pr-6 sm:pr-8 -mt-3 z-10 pointer-events-none">
            <svg
              className="w-11 h-11 sm:w-12 sm:h-12 text-[#FF5425] rotate-6"
              viewBox="0 0 50 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 12 C20 12, 32 20, 34 38" />
              <path d="M26 32 L34 38 L38 30" />
            </svg>
          </div>

          {/* Bottom Handwritten Caption */}
          <p className="font-script text-base sm:text-lg md:text-xl text-[#FF5425] font-bold text-center mt-1">
            Your menu is right here. Scan to get started.
          </p>

          {/* Decorative Squiggle Under Bottom Text */}
          <div className="text-[#FF5425]/70 text-xs sm:text-sm tracking-[0.35em] font-script mt-0.5 select-none">
            ~ ~ ~ ~ ~ ~
          </div>

        </div>

      </div>
    </section>
  );
}