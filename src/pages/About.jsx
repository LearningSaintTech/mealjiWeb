import React from 'react';
import {
  Flame,
  Home,
  Wallet,
  ShieldCheck,
  Salad,
  Briefcase,
  Check,
  ArrowRight,
  MapPin,
  Building2,
  Users,
  UtensilsCrossed,
} from 'lucide-react';
import PromoBanner from '../components/ui/PromoBanner';

/* Unsplash imagery (Unsplash License) — same photo set used on the Menu page */
const img = (id, w = 900) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
const PHOTOS = {
  thaliTop: '1626777552726-4a6b54c97e46',
  thaliRoti: '1546833999-b9f581a1996d',
  rajmaChawal: '1585937421612-70a008356fbe',
  butterChicken: '1603894584373-5ac82b2ae398',
  biryani: '1563379091339-03b21ab4a4f8',
  kadhiChawal: '1588166524941-3bf61a9c41db',
};

const SPECIAL = [
  {
    icon: Flame,
    title: 'Freshly Cooked Every Day',
    text: 'Every lunch is prepared fresh. We never serve previous-day food because we believe freshness should never be compromised.',
  },
  {
    icon: Home,
    title: 'Homestyle Taste',
    text: 'Our meals are inspired by everyday home cooking, with comforting flavours, balanced spices, and carefully prepared dishes.',
  },
  {
    icon: Wallet,
    title: 'Pocket-Friendly Meal Plans',
    text: 'Enjoy wholesome meals without the hassle of expensive daily ordering. Our meal plans are designed to make everyday lunches affordable and convenient.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygiene Comes First',
    text: 'We prioritise quality ingredients, clean kitchen practices, separate vegetarian and non-vegetarian handling, and hygienic food-grade packaging.',
  },
  {
    icon: Salad,
    title: 'Variety on Your Plate',
    text: 'From everyday comfort food to special curries and biryanis, our changing menu keeps lunchtime interesting.',
  },
  {
    icon: Briefcase,
    title: 'Made for Busy Workdays',
    text: 'With convenient meal subscriptions and delivery to nearby offices, we help you spend less time worrying about lunch and more time enjoying it.',
  },
];

const PLANS = [
  {
    name: 'GharJi',
    tagline: 'Everyday Homestyle Meal',
    text: 'A comforting everyday combination of dal or gravy, seasonal sabzi, rice, and chapatis. Simple, wholesome, and satisfying.',
    photo: PHOTOS.thaliRoti,
  },
  {
    name: 'KhaasJi',
    tagline: 'A Little More Special',
    text: 'A delicious meal featuring a premium vegetarian or non-vegetarian curry, jeera rice, ghee/butter chapatis, raita, and salad.',
    photo: PHOTOS.thaliTop,
  },
  {
    name: 'DaawatJi',
    tagline: 'A Complete Meal Experience',
    text: 'For those who love a fuller spread, DaawatJi brings together a choice of curries, rice or biryani, chapatis, raita, salad, and a sweet.',
    photo: PHOTOS.butterChicken,
  },
];

const PROMISES = [
  'Freshly prepared meals every day',
  'No previous-day food',
  'Quality-checked ingredients',
  'Clean and hygienic preparation',
  'Separate vegetarian and non-vegetarian handling',
  'Carefully monitored oil usage',
  'Safe, sealed food-grade packaging',
  'Homestyle taste and everyday affordability',
];

const Eyebrow = ({ children, light = false }) => (
  <span className={`font-script text-[26px] sm:text-[28px] ${light ? 'text-[#FF7A4D]' : 'text-[#F15A24]'}`}>{children}</span>
);

const H2 = ({ children, light = false, className = '' }) => (
  <h2
    className={`font-condensed font-semibold uppercase leading-[1.05] text-[36px] sm:text-[46px] lg:text-[52px] ${
      light ? 'text-white' : 'text-[#171717]'
    } ${className}`}
  >
    {children}
  </h2>
);

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F0] text-[#171717] font-['Jost',sans-serif] overflow-hidden">
      {/* Full-width promo banner directly under the navbar */}
      <PromoBanner />

      {/* =========================================================
          1. HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0A252B] text-white py-14 sm:py-16 lg:py-24">
        <div className="absolute -left-40 top-20 w-[460px] h-[460px] rounded-full bg-[#FF5425]/20 blur-[140px] pointer-events-none" />

        <div className="scale-wide relative max-w-[1240px] mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow light>About Meal Ji</Eyebrow>
            <h1 className="font-condensed font-semibold uppercase leading-[1.02] text-[46px] sm:text-[64px] lg:text-[76px] mt-1">
              Ghar Jaisa Khana,
              <br />
              <span className="text-[#FF5425]">Har Din!</span>
            </h1>
            <p className="mt-6 max-w-[540px] text-[17px] leading-[1.75] text-white/85">
              At Meal Ji, we believe that a good meal should feel like home - fresh, comforting, delicious, and made with care.
            </p>
            <p className="mt-4 max-w-[540px] text-[15px] leading-[1.75] text-white/65">
              We understand how busy workdays can get. Between meetings, deadlines, and daily responsibilities, finding a
              wholesome and affordable lunch shouldn&apos;t be another challenge.
            </p>
          </div>

          {/* Photo stack */}
          <div className="relative mx-auto w-full max-w-[460px] aspect-[4/5]">
            <img
              src={img(PHOTOS.thaliTop)}
              alt="Meal Ji homestyle thali"
              className="absolute right-0 top-0 w-[78%] h-[72%] object-cover rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            />
            <img
              src={img(PHOTOS.rajmaChawal, 600)}
              alt="Rajma chawal"
              className="absolute left-0 bottom-0 w-[58%] h-[50%] object-cover rounded-[24px] ring-8 ring-[#0A252B] shadow-xl"
            />
            <img
              src="/images/meals-chef-kiss.png"
              alt=""
              className="absolute -right-3 bottom-[-4%] w-[38%] drop-shadow-[0_15px_25px_rgba(0,0,0,0.45)] pointer-events-none"
            />
          </div>
        </div>

      </section>

      {/* "That's where Meal Ji comes in" card */}
      <div className="scale-wide max-w-[1240px] mx-auto px-4 sm:px-6 mt-10 lg:mt-14">
        <div className="bg-[#FF5425] text-white rounded-2xl sm:rounded-[28px] px-6 sm:px-10 py-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <p className="font-condensed font-semibold uppercase text-[24px] sm:text-[28px] shrink-0">That&apos;s where Meal Ji comes in!</p>
          <p className="text-[15px] leading-[1.6] text-white/90">
            We bring the warmth of homestyle cooking straight to your workplace, making everyday lunches simple, convenient,
            and satisfying.
          </p>
        </div>
      </div>

      {/* =========================================================
          2. WHO WE ARE
      ========================================================= */}
      <section className="py-20 lg:py-28">
        <div className="scale-wide max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={img(PHOTOS.kadhiChawal, 1000)}
              alt="Freshly prepared homestyle lunch"
              loading="lazy"
              className="w-full aspect-[5/4] object-cover rounded-[28px] shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
            />
            <div className="absolute -bottom-6 right-6 sm:right-10 bg-white rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] px-5 py-4 flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#FF5425] text-white flex items-center justify-center">
                <MapPin size={20} />
              </span>
              <div>
                <p className="font-condensed text-[22px] font-semibold leading-none">~5 km</p>
                <p className="text-[12px] text-[#777] mt-1">delivery radius from our kitchen</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow>Who we are</Eyebrow>
            <H2 className="mt-1">Fresh food, familiar flavours</H2>
            <p className="mt-6 text-[16px] leading-[1.8] text-[#55504A]">
              Meal Ji is a cloud-style kitchen dedicated to serving freshly prepared, homestyle meals to working professionals,
              corporate offices, and teams.
            </p>
            <p className="mt-4 text-[16px] leading-[1.8] text-[#55504A]">
              Our focus is simple: <strong className="text-[#171717] font-semibold">fresh food, familiar flavours, affordable prices, and reliable service.</strong>
            </p>
            <p className="mt-4 text-[16px] leading-[1.8] text-[#55504A]">
              From comforting dal-chawal and seasonal sabzis to flavourful curries, soft chapatis, and delicious biryanis, our
              menu brings together the everyday dishes you love.
            </p>
            <p className="mt-4 text-[16px] leading-[1.8] text-[#55504A]">
              With a delivery radius of approximately 5 km from our kitchen, we focus on keeping meals fresh and reaching nearby
              workplaces on time.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. MISSION
      ========================================================= */}
      <section className="px-6">
        <div className="scale-wide relative max-w-[1100px] mx-auto rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#FF5425]" />
          <div className="px-8 py-12 sm:px-14 sm:py-16 text-center">
            <Eyebrow>Our mission</Eyebrow>
            <p className="mt-3 font-condensed font-medium text-[26px] sm:text-[34px] leading-[1.3] text-[#171717] max-w-[820px] mx-auto">
              To make fresh, homestyle meals accessible, affordable, and convenient for every working professional.
            </p>
            <p className="mt-6 text-[16px] leading-[1.8] text-[#55504A] max-w-[720px] mx-auto">
              We aim to make office lunches something you look forward to, rather than something you have to worry about. By
              combining familiar homemade flavours with convenient meal plans, we want to bring comfort and simplicity to your
              everyday routine.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. WHAT MAKES MEAL JI SPECIAL
      ========================================================= */}
      <section className="py-20 lg:py-28">
        <div className="scale-wide max-w-[1240px] mx-auto px-6">
          <div className="text-center">
            <Eyebrow>Why people love us</Eyebrow>
            <H2 className="mt-1">What makes Meal Ji special?</H2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {SPECIAL.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
               
               
                className="group bg-white rounded-3xl p-7 border border-black/5 hover:border-[#FF5425]/40 hover:shadow-[0_20px_45px_rgba(255,84,37,0.12)] transition-all duration-500 ease-out hover:-translate-y-1"
              >
                <span className="w-14 h-14 rounded-2xl bg-[#FFF1EB] text-[#FF5425] flex items-center justify-center group-hover:bg-[#FF5425] group-hover:text-white transition-colors">
                  <Icon size={26} />
                </span>
                <h3 className="mt-5 font-condensed font-semibold text-[22px] leading-tight">{title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.75] text-[#6F6A63]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. MEAL PLANS
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">
        <div className="scale-wide max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-[720px] mx-auto">
            <Eyebrow>Pick your thali</Eyebrow>
            <H2 className="mt-1">Our meal plans</H2>
            <p className="mt-5 text-[16px] leading-[1.8] text-[#55504A]">
              We understand that everyone has different tastes, appetites, and budgets. That&apos;s why Meal Ji offers three
              thoughtfully designed meal plans.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <article key={plan.name} className="group bg-[#FAF7F0] rounded-3xl overflow-hidden flex flex-col">
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={img(plan.photo, 700)}
                    alt={plan.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute left-6 bottom-5 text-white">
                    <h3 className="font-condensed font-semibold text-[32px] leading-none">{plan.name}</h3>
                    <p className="text-[13px] text-white/85 mt-1">{plan.tagline}</p>
                  </div>
                </div>
                <p className="p-6 text-[15px] leading-[1.75] text-[#55504A]">{plan.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[15px] text-[#6F6A63]">
              Our plans are designed to offer flexibility, variety, and great value for everyday meals.
            </p>
            <a
              href="#menu"
              className="mt-6 inline-flex items-center gap-2 bg-[#FF5425] hover:bg-[#e94a1d] text-white px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.08em] rounded-md transition-colors"
            >
              See plans &amp; prices <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. OFFICES & TEAMS
      ========================================================= */}
      <section className="relative bg-[#0A252B] text-white py-20 lg:py-28">
        <div className="scale-wide max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Eyebrow light>Made for offices &amp; teams</Eyebrow>
            <H2 light className="mt-1">A good lunch makes a busy workday better</H2>
            <p className="mt-6 text-[16px] leading-[1.8] text-white/75">
              We offer corporate meal solutions that make it easier for businesses to arrange fresh, delicious lunches for their
              employees.
            </p>
            <p className="mt-4 text-[16px] leading-[1.8] text-white/75">
              Whether you&apos;re an individual professional looking for a satisfying daily meal or an organisation planning
              lunches for your team, Meal Ji is here to make the experience simpler.
            </p>
          </div>

          <div className="grid gap-4">
            <p className="font-condensed uppercase tracking-[0.1em] text-[14px] text-white/60">Our corporate approach includes</p>
            {[
              { icon: Users, title: 'Understanding team preferences' },
              { icon: UtensilsCrossed, title: 'Offering tasting opportunities' },
              { icon: Building2, title: 'Helping businesses choose suitable meal plans' },
            ].map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5">
                <span className="w-12 h-12 shrink-0 rounded-full bg-[#FF5425] flex items-center justify-center">
                  <Icon size={20} />
                </span>
                <h3 className="font-condensed font-medium text-[20px] leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. OUR PROMISE
      ========================================================= */}
      <section className="py-20 lg:py-28">
        <div className="scale-wide max-w-[1240px] mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          <div>
            <Eyebrow>Our promise to you</Eyebrow>
            <H2 className="mt-1">Good food begins with genuine care</H2>
            <p className="mt-6 text-[16px] leading-[1.8] text-[#55504A]">
              At Meal Ji, we believe good food begins with good ingredients and genuine care. That&apos;s why we focus on:
            </p>
            <p className="mt-8 font-script text-[26px] leading-snug text-[#F15A24] max-w-[460px]">
              Because for us, serving food isn&apos;t just about filling a plate. It&apos;s about bringing a little comfort to your
              day.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3">
            {PROMISES.map((p, i) => (
              <li key={p} className="flex items-start gap-3 bg-white rounded-2xl px-5 py-4 border border-black/5">
                <span className="w-6 h-6 shrink-0 rounded-full bg-[#FF5425] text-white flex items-center justify-center mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-[15px] leading-[1.5] text-[#333]">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================
          8. CTA
      ========================================================= */}
      <section className="px-6 pb-20 lg:pb-28">
        <div className="scale-wide relative max-w-[1240px] mx-auto rounded-[32px] overflow-hidden bg-[#FF5425] text-white">
          <img
            src={img(PHOTOS.biryani, 1400)}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-multiply"
          />
          <div className="relative px-8 py-14 sm:px-14 sm:py-16 lg:pr-[300px]">
            <H2 light>Let&apos;s make lunchtime better!</H2>
            <p className="mt-5 max-w-[640px] text-[16px] leading-[1.8] text-white/90">
              Whether you crave a simple ghar-jaisa lunch, a delicious biryani, or a convenient meal plan for your office, Meal
              Ji has something for you. Explore our menu, discover our meal plans, and enjoy the comfort of fresh homestyle food.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-white text-[#FF5425] hover:bg-[#FFF1EB] px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.08em] rounded-md transition-colors"
              >
                Explore our menu <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/60 hover:border-white px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.08em] rounded-md transition-colors"
              >
                Contact us
              </a>
            </div>
            <p className="mt-10 font-condensed text-[22px] uppercase">Meal Ji - Ghar Jaisa Khana, Har Din!</p>
            <p className="text-[14px] text-white/80">Freshly Cooked. Made with Care. Delivered to Your Workplace.</p>
          </div>
          <img
            src="/images/mascot-white-steam.png"
            alt=""
            className="hidden lg:block absolute right-10 bottom-0 w-[250px] pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]"
          />
        </div>
      </section>
    </div>
  );
}
