import React, { useState, useEffect } from 'react';

export default function Navbar({ currentView = 'home', setCurrentView }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const leftLinks = [
    { label: 'Home', href: '#home', view: 'home' },
    // { label: 'Pages', href: '#about' },
    { label: 'Menu', href: '#menu', view: 'menu' },
    { label: 'For Business', href: '#for-business', view: 'business' },
  ];

  const rightLinks = [
    // { label: 'Blog', href: '#blog' },
    // { label: 'Shop', href: '#specials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, item) => {
    if (item.view && setCurrentView) {
      e.preventDefault();
      setCurrentView(item.view);
      window.history.pushState(null, '', item.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50

        transition-all
        duration-300

        bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]

        ${
          scrolled
            ? `
              md:bg-white/85
              md:backdrop-blur-xl
              md:backdrop-saturate-150
              md:border-b
              md:border-white/40
              md:shadow-[0_4px_25px_rgba(0,0,0,0.08)]
            `
            : `
              md:bg-[#061C20]/40
              md:backdrop-blur-xl
              md:backdrop-saturate-150
              md:border-b
              md:border-white/10
              md:shadow-none
            `
        }
      `}
    >

      {/* =====================================================
          NAVBAR
      ====================================================== */}
               <div
        className="
          w-full
          max-w-[1000px]
          mx-auto
          px-3
          sm:px-5
          md:px-6
          lg:px-8
          xl:px-10
          2xl:px-12
          h-[60px]
          md:h-[60px]
          flex
          items-center
          justify-between
          gap-3
        "
      >

        {/* ===================================================
            LEFT LINKS
        ==================================================== */}
<nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6">
          {leftLinks.map((item) => {
            const isActive = item.view && currentView === item.view;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item)}
                className={`
                  text-[13px]
                  font-medium
                  transition-colors
                  duration-200
                  flex items-center gap-1.5

                  ${
                    isActive
                      ? 'text-[#F15A24] font-bold'
                      : scrolled
                      ? 'text-[#111827] hover:text-[#F15A24]'
                      : 'text-white hover:text-[#F15A24]'
                  }
                `}
              >
                {item.label}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F15A24]" />
                )}
              </a>
            );
          })}

        </nav>


        {/* ===================================================
            LOGO
        ==================================================== */}
        <div className="flex-shrink-0">

          <a
            href="#home"
            onClick={(e) => {
              if (setCurrentView) {
                e.preventDefault();
                setCurrentView('home');
                window.location.hash = '#home';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center justify-center group"
          >

            <img
              src="/images/meallogos.png"
              alt="Meal Ji"
              className="
                h-[36px] md:h-[42px]
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />

          </a>

        </div>


        {/* ===================================================
            RIGHT LINKS
        ==================================================== */}
        <nav className="hidden md:flex items-center gap-7">

          {rightLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`
                text-[13px]
                font-medium
                transition-colors
                duration-200

                ${
                  scrolled
                    ? 'text-[#111827] hover:text-[#F15A24]'
                    : 'text-white hover:text-[#F15A24]'
                }
              `}
            >
              {item.label}
            </a>
          ))}

        </nav>


        {/* ===================================================
            MOBILE CTA
        ==================================================== */}
        <a
          href="#reservation"
          className="md:hidden inline-flex items-center px-5 h-[38px] bg-[#FF5425] text-white text-[13px] font-semibold rounded-[4px] active:scale-95 transition-transform"
        >
          Book a Table
        </a>

      </div>


      {/* =====================================================
          MOBILE LINK ROW
      ====================================================== */}
      <nav className="md:hidden flex items-center justify-between px-4 h-[40px] border-t border-black/5 overflow-x-auto no-scrollbar">
        {[...leftLinks, ...rightLinks].map((item) => {
          const isActive = item.view && currentView === item.view;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item)}
              className={`text-[13px] font-medium whitespace-nowrap px-1 ${
                isActive ? 'text-[#F15A24] font-semibold' : 'text-[#111827]'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

    </header>
  );
}