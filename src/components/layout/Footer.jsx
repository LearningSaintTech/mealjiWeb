import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantInfo';
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  const { contact, exploreLinks } = restaurantInfo;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer id="contact" className="relative bg-[#072B31] text-white pt-14 md:pt-20 pb-10 border-t border-white/5">
      <div className="scale-wide max-w-7xl mx-auto px-6 md:px-12">

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-12 pb-12 md:pb-16 border-b border-white/10">

          {/* Column 1: Brand & Schedule */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/images/meallogo.png"
                alt="Meal Ji Logo"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-2 text-white font-bold text-xl">
                <span className="w-7 h-7 rounded-full bg-[#F15A24] flex items-center justify-center text-white text-sm">
                  👨‍🍳
                </span>
                <span>Meal<span className="text-[#F15A24]">Ji</span></span>
              </div>
            </div>

            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-8">
              Discover culinary delights recipes and inspiration in our food haven.
            </p>

            {/* Timings */}
            {/* <div className="space-y-2 text-xs text-white/80 border-t border-white/10 pt-4">
              {contact.footerHours.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="uppercase text-white/50 tracking-wider font-semibold">
                    {item.days}
                  </span>
                  <span className="font-medium text-white/90">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Column 2: Explore Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#F15A24] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-white/70">

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 text-[#F15A24]">
                  <MapPin size={15} />
                </div>
                <span className="leading-relaxed">
                  {contact.address}
                </span>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 text-[#F15A24]">
                  <Phone size={15} />
                </div>
                <div className="flex flex-col">
                  {contact.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone}`}
                      className="hover:text-[#F15A24] transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 text-[#F15A24]">
                  <Mail size={15} />
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[#F15A24] transition-colors"
                >
                  {contact.email}
                </a>
              </div>

            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-span-2 md:col-span-1">
            {/* <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider">
              Newsletter
            </h4> */}
            {/* <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5">
              Join our subscribers list to get the latest news and special offers.
            </p> */}

            {subscribed ? (
              <div className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 px-4 py-3 rounded-xl text-xs mb-6">
                Thank you for subscribing! Check your inbox soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3 mb-6">
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24]"
                />
                {/* <button
                  type="submit"
                  className="w-full bg-[#F15A24] hover:bg-[#d94917] text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Subscribe
                </button> */}
              </form>
            )}

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/50 tracking-wider">
                Social Meida:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/mealji.in/"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#F15A24] text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* <a
                  href="https://www.pinterest.com/mealji.in/"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#F15A24] text-white flex items-center justify-center transition-colors"
                  aria-label="Pinterest"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a> */}
                <a
                  href="http://linkedin.com/company/mealji"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#F15A24] text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href='https://www.instagram.com/meal.ji/'
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#F15A24] text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-3.5 h-3.5 fill-current" />
                </a>
              </div>
            
                {/* </a> */}
              {/* </div> */}
            </div>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>© Copyright 2026 Mealji. All Rights Reserved</span>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#about-us" className="hover:text-[#F15A24] transition-colors">About Us</a>
            <a href="#privacy-policy" className="hover:text-[#F15A24] transition-colors">Privacy Policy</a>
            <a href="#terms-and-conditions" className="hover:text-[#F15A24] transition-colors">Terms &amp; Conditions</a>
          </nav>
        </div>

      </div>
    </footer>
  );
}
