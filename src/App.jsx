import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import LuxuryIntro from './components/sections/LuxuryIntro';
import StartersMenuSection from './components/sections/StartersMenuSection';
import IndianRecipes from './components/sections/IndianRecipes';
import AppShowcase from './components/sections/AppShowcase';
import SpecialsMenu from './components/sections/SpecialsMenu';
import ReservationSection from './components/sections/ReservationSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FeaturesGrid from './components/sections/FeaturesGrid';
import Blog from './components/sections/Blog';
import Footer from './components/layout/Footer';
import MenuPage from './pages/Menu';
import AboutPage from './pages/About';
import BusinessPage from './pages/Business';
import LegalPage from './pages/LegalPage';
import BlogPost from './pages/BlogPost';
import { getPostBySlug } from './data/blogData';
import { privacyPolicy, termsAndConditions } from './data/legalContent';

// Hash -> standalone page. Any other hash (or none) shows the home page.
const PAGE_HASHES = {
  '#menu': 'menu',
  '#about-us': 'about',
  '#for-business': 'business',
  '#privacy-policy': 'privacy',
  '#terms-and-conditions': 'terms',
};

// Article links look like #blog/<slug>
const postSlugFromHash = (hash) => (hash.startsWith('#blog/') ? hash.slice(6) : null);

export default function App() {
  const [postSlug, setPostSlug] = useState(() => postSlugFromHash(window.location.hash));
  const [currentView, setCurrentView] = useState(() =>
    postSlugFromHash(window.location.hash) ? 'post' : PAGE_HASHES[window.location.hash] || 'home'
  );

  useEffect(() => {
    const handleHashChange = () => {
      const slug = postSlugFromHash(window.location.hash);
      const page = slug ? 'post' : PAGE_HASHES[window.location.hash];
      if (slug) setPostSlug(slug);
      if (page) {
        setCurrentView(page);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (window.location.hash === '#home' || !window.location.hash) {
        setCurrentView('home');
      } else {
        // A section anchor (e.g. #specials). If it isn't on the current page,
        // go back to the home page and scroll to it once it has rendered.
        const id = window.location.hash.slice(1);
        if (document.getElementById(id)) return;
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Expose the fixed navbar's real height as --nav-h (used by .nav-spacer under full-bleed banners).
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return undefined;
    const update = () =>
      document.documentElement.style.setProperty('--nav-h', `${header.getBoundingClientRect().height}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  // After switching back to the home page for a section link, scroll to that section.
  useEffect(() => {
    if (currentView !== 'home') return;
    const id = window.location.hash.slice(1);
    if (!id || id === 'home') return;
    document.getElementById(id)?.scrollIntoView();
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#111827] flex flex-col w-full selection:bg-[#F15A24] selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main Content Sections */}
      <main key={currentView === 'post' ? `post-${postSlug}` : currentView} className="page-enter flex-1 w-full">
        {currentView === 'menu' ? (
          /* =========================================
             DEDICATED MENU PAGE
             (Curated from MealJi_Complete_Menu_English.pdf)
          ========================================= */
          <MenuPage />
        ) : currentView === 'about' ? (
          <AboutPage />
        ) : currentView === 'business' ? (
          <BusinessPage />
        ) : currentView === 'post' ? (
          <BlogPost post={getPostBySlug(postSlug)} />
        ) : currentView === 'privacy' ? (
          <LegalPage doc={privacyPolicy} eyebrow="Your data, respected" />
        ) : currentView === 'terms' ? (
          <LegalPage doc={termsAndConditions} eyebrow="The fine print" />
        ) : (
          /* =========================================
             HOME LANDING EXPERIENCE
          ========================================= */
          <>
            {/* 1. Hero Ambience Section */}
            <HeroSection />

            {/* 2. Welcome Intro, Chef & Opening Hours (Tilted/Overlapping upwards into Hero) */}
            <LuxuryIntro />

            {/* Quick Menu Banner Promo */}
            {/* <div className="bg-[#0A252B] py-3.5 px-6 border-b border-white/10 text-center relative z-10">
              <p className="text-xs sm:text-sm text-white/90">
                ✨ Looking for office lunch boxes or daily subscriptions?{' '}
                <button
                  onClick={() => {
                    setCurrentView('menu');
                    window.history.pushState(null, '', '#menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 font-bold text-[#F15A24] hover:underline ml-1"
                >
                  View Complete Kitchen Menu & Plans →
                </button>
              </p>
            </div> */}

            {/* Starters & Main Dishes Section (Matching Exact Design) */}
            <StartersMenuSection />

            {/* 3. Real Indian Recipes & Mascot Showcase */}
            <IndianRecipes />

            {/* 4. Indian Flavours At Your Doorstep (Mobile App) */}
            <AppShowcase />

            {/* 5. Top Specials Menu (Pizza, Burger, Lemonade, Chicken) */}
            <SpecialsMenu />

            {/* 6. Table Reservation ("Get A Meal") */}
            <ReservationSection />

            {/* 7. Testimonials ("Best Chicken Fry") */}
            <TestimonialsSection />

            {/* 8. 4-Card Feature Highlights */}
            <FeaturesGrid />

            {/* 9. News & Blog */}
            <Blog />
          </>
        )}
      </main>

      {/* Footer with Hours, Links & Newsletter */}
      <Footer />
    </div>
  );
}
