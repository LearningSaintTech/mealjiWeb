import React, { useState, useMemo } from 'react';
import {
  Clock,
  ShieldCheck,
  Droplets,
  ChefHat,
  ArrowRight,
  Download,
  ShoppingBag,
  Check,
  X,
  Plus,
  Minus,
  Trash2,
  MessageSquare,
  Star,
} from 'lucide-react';
import { mealJiMetadata, subscriptionPlans, menuItems } from '../data/mealJiMenuData';

/* ----------------------------------------------------------------
   Imagery (Unsplash, hotlinked per their guidelines)
---------------------------------------------------------------- */
const img = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const PHOTOS = {
  thaliTop: '1626777552726-4a6b54c97e46',
  thaliRoti: '1546833999-b9f581a1996d',
  biryaniHandi: '1563379091339-03b21ab4a4f8',
  biryaniBowl: '1631515243349-e0cb75fb8d3a',
  biryaniRaita: '1589302168068-964664d93dc0',
  chickenCurry: '1565557623262-b51c2513a641',
  keema: '1596797038530-2c107229654b',
  paneerTikka: '1567188040759-fb8a883dc6d8',
  rajmaChawal: '1585937421612-70a008356fbe',
  kadhiChawal: '1588166524941-3bf61a9c41db',
  butterChicken: '1603894584373-5ac82b2ae398',
  kebabs: '1599487488170-d11ec9c172f0',
  samosa: '1601050690597-df0568f70950',
  moody: '1645177628172-a94c1f96e6db',
};

const PLAN_PHOTOS = {
  gharji: PHOTOS.thaliRoti,
  khaasji: PHOTOS.thaliTop,
  daawatji: PHOTOS.butterChicken,
};

/* Curated signature dishes — a short, photo-led selection instead of the full list */
const SIGNATURES = [
  { id: 'biryani-hyd-chicken', photo: PHOTOS.biryaniHandi, group: 'biryani' },
  { id: 'nv-chicken-curry', photo: PHOTOS.chickenCurry, group: 'curries' },
  { id: 'comfort-rajma-chawal', photo: PHOTOS.rajmaChawal, group: 'comfort' },
  { id: 'biryani-paneer-tikka', photo: PHOTOS.paneerTikka, group: 'biryani' },
  { id: 'nv-chicken-keema-matar', photo: PHOTOS.keema, group: 'curries' },
  { id: 'comfort-kadhi-chawal', photo: PHOTOS.kadhiChawal, group: 'comfort' },
  { id: 'biryani-lucknowi-chicken', photo: PHOTOS.biryaniBowl, group: 'biryani' },
  { id: 'biryani-classic-mutton', photo: PHOTOS.biryaniRaita, group: 'biryani' },
];

const FILTERS = [
  { id: 'all', label: 'All Favourites', photo: PHOTOS.thaliTop },
  { id: 'biryani', label: 'Dum Biryani', photo: PHOTOS.biryaniHandi },
  { id: 'curries', label: 'Curries', photo: PHOTOS.chickenCurry },
  { id: 'comfort', label: 'Comfort Combos', photo: PHOTOS.rajmaChawal },
];

const PROMISES = [
  { icon: Clock, title: '3 Fresh Batches', text: 'Cooked for breakfast, lunch & dinner' },
  { icon: ShieldCheck, title: 'Zero Day-Old Food', text: 'Nothing is ever reheated or reused' },
  { icon: Droplets, title: '100% RO Water', text: 'For cooking and every ingredient wash' },
  { icon: ChefHat, title: 'Strict Hygiene', text: 'Kitchen sanitised after every service' },
];

const WHATSAPP = 'https://wa.me/917303141124';

const TypeDot = ({ type }) => {
  const color = type === 'veg' ? '#16A34A' : type === 'egg' ? '#D97706' : '#DC2626';
  return (
    <span
      className="inline-flex w-[14px] h-[14px] rounded-[3px] border-[1.5px] items-center justify-center bg-white"
      style={{ borderColor: color }}
      title={type}
    >
      <span className="w-[6px] h-[6px] rounded-full" style={{ background: color }} />
    </span>
  );
};

export default function MenuPage() {
  const [period, setPeriod] = useState('meal'); // 'meal' | 'monthly'
  const [filter, setFilter] = useState('all');
  const [tray, setTray] = useState([]);
  const [trayOpen, setTrayOpen] = useState(false);

  const dishes = useMemo(
    () =>
      SIGNATURES.map((s) => ({ ...menuItems.find((m) => m.id === s.id), ...s })).filter(
        (d) => d.name
      ),
    []
  );

  const visibleDishes = filter === 'all' ? dishes : dishes.filter((d) => d.group === filter);

  /* ---------------- Tray ---------------- */
  const addToTray = (item) => {
    setTray((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1 }];
    });
  };

  const removeFromTray = (id) =>
    setTray((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i)).filter((i) => i.qty > 0)
    );

  const trayTotal = tray.reduce((sum, i) => sum + i.price * i.qty, 0);
  const trayCount = tray.reduce((sum, i) => sum + i.qty, 0);

  const orderOnWhatsApp = () => {
    if (!tray.length) return;
    const lines = tray.map((i) => `• ${i.name} x${i.qty} (₹${i.price * i.qty})`).join('\n');
    const msg = encodeURIComponent(
      `Hello Meal Ji Kitchen! I would like to order:\n\n${lines}\n\nEstimated Total: ₹${trayTotal}`
    );
    window.open(`${WHATSAPP}?text=${msg}`, '_blank');
  };

  const subscribe = (plan) => {
    const label =
      period === 'monthly'
        ? `22-meal monthly plan (₹${plan.monthlyPrice})`
        : `single meal (₹${plan.perMealPrice})`;
    const msg = encodeURIComponent(
      `Hello Meal Ji Kitchen! I'm interested in the ${plan.name} ${label}. Please share details.`
    );
    window.open(`${WHATSAPP}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-[#FAF7F0] text-[#171717] font-['Jost',sans-serif] pb-10">
      {/* =========================================================
          1. HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0A252B] text-white pt-[132px] pb-14 lg:pt-36 lg:pb-28">
        <div className="absolute -left-40 top-10 w-[480px] h-[480px] rounded-full bg-[#FF5425]/20 blur-[140px] pointer-events-none" />

        <div className="relative max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div>
            <span className="font-script text-[28px] text-[#FF7A4D]">Today's kitchen</span>
            <h1 className="font-condensed font-semibold uppercase leading-[1.02] text-[46px] sm:text-[68px] lg:text-[80px] mt-1">
              Simple Food.
              <br />
              <span className="text-[#FF5425]">Great Mood.</span>
            </h1>
            <p className="mt-6 max-w-[460px] text-[16px] leading-[1.7] text-white/75">
              {mealJiMetadata.subtitle} Cooked fresh three times a day — never yesterday's food.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#plans"
                className="inline-flex items-center gap-2 bg-[#FF5425] hover:bg-[#e94a1d] px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                View Meal Plans <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#favourites"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                Our Favourites
              </a>
            </div>

            <div className="mt-10 lg:mt-12 flex gap-7 sm:gap-10">
              {[
                ['3×', 'Fresh batches daily'],
                ['₹129', 'Meals starting at'],
                ['0', 'Day-old food'],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-condensed text-[34px] font-semibold leading-none">{n}</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-white/55">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Food collage */}
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[520px] aspect-square">
            <div className="absolute inset-[8%] rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite]" />
            <img
              src={img(PHOTOS.thaliTop, 900)}
              alt="Meal Ji thali"
              className="absolute inset-[14%] w-[72%] h-[72%] rounded-full object-cover shadow-[0_30px_60px_rgba(0,0,0,0.45)] ring-[10px] ring-white/5"
            />
            <img
              src={img(PHOTOS.kebabs, 400)}
              alt="Grilled kebabs"
              className="absolute right-0 top-[4%] w-[30%] aspect-square rounded-full object-cover ring-[6px] ring-[#0A252B] shadow-xl"
            />
            <img
              src={img(PHOTOS.samosa, 400)}
              alt="Samosa"
              className="absolute left-0 bottom-[8%] w-[28%] aspect-square rounded-full object-cover ring-[6px] ring-[#0A252B] shadow-xl"
            />
            <img
              src="/images/meals-chef-kiss.png"
              alt=""
              className="absolute -right-2 bottom-0 w-[30%] drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]"
            />
            <div className="absolute left-[4%] top-[10%] -rotate-[10deg] bg-white text-[#171717] px-4 py-2 shadow-lg">
              <p className="font-script text-[22px] leading-none text-[#FF5425]">Ghar jaisa</p>
              <p className="text-[11px] uppercase tracking-[0.12em] font-semibold">khaana, daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. MEAL PLANS
      ========================================================= */}
      <section id="plans" className="py-14 lg:py-28 max-w-[1240px] mx-auto px-6 scroll-mt-24">
        <div className="text-center">
          <span className="font-script text-[26px] text-[#FF5425]">Pick your thali</span>
          <h2 className="font-condensed font-semibold uppercase text-[40px] sm:text-[52px] leading-none mt-1">
            Our Meal Plans
          </h2>

          <div className="mt-8 inline-flex p-1 bg-white border border-black/10">
            {[
              ['meal', 'Per Meal'],
              ['monthly', '22-Meal Monthly'],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setPeriod(id)}
                className={`px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                  period === id ? 'bg-[#171717] text-white' : 'text-[#555] hover:text-black'
                }`}
              >
                {label}
                {id === 'monthly' && (
                  <span className="ml-2 text-[10px] bg-[#FF5425] text-white px-1.5 py-0.5">-15%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-14 flex md:grid md:grid-cols-3 gap-4 md:gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 py-2 pb-6 md:py-0">
          {subscriptionPlans.map((plan) => {
            const featured = plan.popular;
            return (
              <article
                key={plan.id}
                className={`group relative shrink-0 w-[84%] sm:w-[60%] md:w-auto snap-center flex flex-col bg-white overflow-hidden transition-shadow duration-300 ${
                  featured
                    ? 'shadow-[0_25px_60px_rgba(255,84,37,0.22)] ring-2 ring-[#FF5425]'
                    : 'shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)]'
                }`}
              >
                <div className="relative h-[210px] overflow-hidden">
                  <img
                    src={img(PLAN_PHOTOS[plan.id])}
                    alt={plan.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  {featured && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-[#FF5425] text-white text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5">
                      <Star className="w-3 h-3 fill-white" /> Most Popular
                    </span>
                  )}
                  <div className="absolute left-6 bottom-5 text-white">
                    <h3 className="font-condensed font-semibold text-[34px] leading-none">{plan.name}</h3>
                    <p className="text-[13px] text-white/85 mt-1">{plan.tagline}</p>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-condensed text-[44px] font-semibold leading-none">
                      ₹{period === 'meal' ? plan.perMealPrice : plan.monthlyPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[13px] text-[#888]">
                      / {period === 'meal' ? 'meal' : '22 meals'}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 flex-1">
                    {plan.items.slice(0, 4).map((item) => (
                      <li key={item.text} className="flex gap-3 text-[14px] leading-snug text-[#444]">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#FF5425] stroke-[3]" />
                        {item.text}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => subscribe(plan)}
                    className={`mt-8 w-full py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                      featured
                        ? 'bg-[#FF5425] text-white hover:bg-[#e94a1d]'
                        : 'bg-[#171717] text-white hover:bg-[#FF5425]'
                    }`}
                  >
                    Choose {plan.name}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          3. SIGNATURE FAVOURITES
      ========================================================= */}
      <section id="favourites" className="bg-white py-14 lg:py-28 scroll-mt-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center">
            <span className="font-script text-[26px] text-[#FF5425]">Loved by our regulars</span>
            <h2 className="font-condensed font-semibold uppercase text-[40px] sm:text-[52px] leading-none mt-1">
              Kitchen Favourites
            </h2>
          </div>

          {/* Photo filter chips */}
          <div className="mt-8 md:mt-10 grid grid-cols-4 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-10">
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button key={f.id} onClick={() => setFilter(f.id)} className="group flex flex-col items-center gap-2 sm:gap-3">
                  <span
                    className={`block w-[66px] h-[66px] sm:w-[96px] sm:h-[96px] rounded-full p-1 transition-all ${
                      active ? 'ring-2 ring-[#FF5425] ring-offset-2' : 'opacity-70 group-hover:opacity-100'
                    }`}
                  >
                    <img src={img(f.photo, 240)} alt="" className="w-full h-full rounded-full object-cover" />
                  </span>
                  <span
                    className={`font-condensed text-[12px] sm:text-[15px] leading-tight text-center uppercase tracking-[0.04em] sm:tracking-[0.06em] ${
                      active ? 'text-[#FF5425]' : 'text-[#333]'
                    }`}
                  >
                    {f.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dish grid */}
          <div className="mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-7">
            {visibleDishes.map((dish) => {
              const inTray = tray.find((i) => i.id === dish.id);
              return (
                <article key={dish.id} className="group flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#eee]">
                    <img
                      src={img(dish.photo, 600)}
                      alt={dish.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3">
                      <TypeDot type={dish.type} />
                    </span>
                    <span className="absolute bottom-0 right-0 bg-[#FF5425] text-white font-condensed text-[15px] md:text-[20px] font-semibold px-2.5 md:px-4 py-1 md:py-1.5">
                      ₹{dish.price}
                    </span>
                  </div>

                  <div className="pt-3 md:pt-4 flex flex-col flex-1">
                    <h3 className="font-condensed text-[16px] md:text-[20px] font-semibold leading-tight group-hover:text-[#FF5425] transition-colors">
                      {dish.name}
                    </h3>
                    <p className="mt-1.5 md:mt-2 text-[12px] md:text-[13px] leading-[1.55] text-[#777] line-clamp-3 flex-1">
                      {dish.description}
                    </p>

                    <div className="mt-4">
                      {inTray ? (
                        <div className="inline-flex items-center border border-[#FF5425]">
                          <button
                            onClick={() => removeFromTray(dish.id)}
                            className="w-9 h-9 flex items-center justify-center text-[#FF5425] hover:bg-[#FF5425] hover:text-white"
                            aria-label="Remove one"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">{inTray.qty}</span>
                          <button
                            onClick={() => addToTray(dish)}
                            className="w-9 h-9 flex items-center justify-center text-[#FF5425] hover:bg-[#FF5425] hover:text-white"
                            aria-label="Add one"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToTray(dish)}
                          className="inline-flex items-center gap-1.5 md:gap-2 text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.08em] md:tracking-[0.1em] text-[#171717] border-b-2 border-[#FF5425] pb-1 hover:text-[#FF5425]"
                        >
                          <Plus className="w-4 h-4" /> Add to plate
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. KITCHEN PROMISE
      ========================================================= */}
      <section className="bg-[#0A252B] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {PROMISES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="w-12 h-12 shrink-0 rounded-full bg-[#FF5425] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-condensed text-[19px] font-semibold uppercase tracking-[0.03em]">{title}</h3>
                <p className="text-[13px] text-white/60 mt-1 leading-snug">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          5. CORPORATE / FULL MENU CTA
      ========================================================= */}
      <section className="max-w-[1240px] mx-auto px-6 pt-20">
        <div className="relative overflow-hidden min-h-[340px] flex items-center">
          <img src={img(PHOTOS.moody, 1600)} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/10" />

          <div className="relative z-10 p-8 sm:p-14 max-w-[620px] text-white">
            <span className="font-script text-[26px] text-[#FF7A4D]">Feeding a team?</span>
            <h2 className="font-condensed font-semibold uppercase text-[36px] sm:text-[46px] leading-[1.05] mt-1">
              Office lunches for 10 to 500+
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-white/75">
              Monthly billing, fixed delivery slots and a rotating menu your team won't get bored of.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent('Hello Meal Ji! We need office lunch catering for our team.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF5425] hover:bg-[#e94a1d] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors"
              >
                <MessageSquare className="w-4 h-4" /> Talk to us
              </a>
              {/* <a
                href={mealJiMetadata.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/40 hover:border-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors"
              >
                <Download className="w-4 h-4" /> Full menu (PDF)
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. FLOATING PLATE
      ========================================================= */}
      {trayCount > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          {trayOpen ? (
            <div className="w-[320px] sm:w-[360px] bg-white shadow-2xl border border-black/10">
              <div className="bg-[#171717] text-white px-5 py-4 flex items-center justify-between">
                <span className="font-condensed text-[18px] uppercase tracking-[0.05em] flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#FF5425]" /> My Plate ({trayCount})
                </span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setTray([])} className="text-white/60 hover:text-white" title="Clear">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => setTrayOpen(false)} className="text-white/60 hover:text-white" title="Close">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <ul className="max-h-60 overflow-y-auto divide-y divide-black/5 px-5">
                {tray.map((i) => (
                  <li key={i.id} className="py-3 flex items-center justify-between gap-3 text-[14px]">
                    <span className="leading-snug">
                      {i.name}
                      <span className="block text-[12px] text-[#999]">₹{i.price} × {i.qty}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <button onClick={() => removeFromTray(i.id)} className="text-[#999] hover:text-[#FF5425]">
                        <Minus className="w-4 h-4" />
                      </button>
                      <button onClick={() => addToTray(i)} className="text-[#999] hover:text-[#FF5425]">
                        <Plus className="w-4 h-4" />
                      </button>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="px-5 py-4 bg-[#FAF7F0]">
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-[13px] text-[#666]">Estimated total</span>
                  <span className="font-condensed text-[26px] font-semibold">₹{trayTotal}</span>
                </div>
                <button
                  onClick={orderOnWhatsApp}
                  className="w-full py-3.5 bg-[#FF5425] hover:bg-[#e94a1d] text-white text-[13px] font-semibold uppercase tracking-[0.1em] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Order on WhatsApp
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setTrayOpen(true)}
              className="flex items-center gap-3 bg-[#FF5425] text-white px-6 py-4 shadow-[0_15px_35px_rgba(255,84,37,0.4)] hover:-translate-y-0.5 transition-transform"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="font-condensed text-[17px] uppercase tracking-[0.05em]">
                My Plate ({trayCount}) · ₹{trayTotal}
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
