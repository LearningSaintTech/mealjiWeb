import React from 'react';
import {
  Building2,
  Presentation,
  PartyPopper,
  UtensilsCrossed,
  Package,
  MapPin,
  Users,
  CalendarClock,
  Leaf,
  ReceiptText,
  Boxes,
  Check,
  ArrowRight,
  Minus,
  Plus,
} from 'lucide-react';

/* ---------------------------------------------------------------
   Meal Ji — For Business (office meals & bulk orders)
---------------------------------------------------------------- */
const WHATSAPP = `https://wa.me/917303141124?text=${encodeURIComponent(
  'Hello Meal Ji! I would like to discuss office meals / a bulk order for our team.'
)}`;


const Eyebrow = ({ children, light = false, center = false }) => (
  <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
    <span
      className={`font-condensed font-medium uppercase text-[12px] sm:text-[13px] tracking-[0.12em] ${
        light ? 'text-white/80' : 'text-[#FF5425]'
      }`}
    >
      {children}
    </span>
    <span className={`h-px w-10 ${light ? 'bg-white/40' : 'bg-[#FF5425]/60'}`} />
  </div>
);

const H2 = ({ children, className = '', light = false }) => (
  <h2
    className={`font-condensed font-medium leading-[1.1] text-[32px] sm:text-[40px] lg:text-[44px] ${
      light ? 'text-white' : 'text-[#171717]'
    } ${className}`}
  >
    {children}
  </h2>
);

const Container = ({ children, className = '' }) => (
  <div className={`scale-wide max-w-[1100px] mx-auto px-5 sm:px-8 ${className}`}>{children}</div>
);

/* ----------------------------- data ----------------------------- */
const OCCASIONS = ['Office Lunches', 'Meetings & Training', 'Team Celebrations', 'Bulk Orders'];

const MOMENTS = [
  {
    icon: Building2,
    title: 'Lunch for the whole office',
    text: 'Bring everyone together over familiar Indian favourites, for a single team lunch or a recurring meal plan.',
    tag: 'One-off & recurring enquiries',
  },
  {
    icon: Presentation,
    title: 'Meetings that call for a meal',
    text: 'Discuss food for client visits, workshops, training days and working lunches around your agenda.',
    tag: 'Meetings & training days',
  },
  {
    icon: PartyPopper,
    title: 'Celebrations, served together',
    text: 'Make room for food at office festivals, milestones, team get-togethers and larger company events.',
    tag: 'Office events & bulk catering',
  },
];

const FLAVOUR_POINTS = [
  { title: 'Food for different appetites', text: 'Discuss menu variety, vegetarian preferences and dietary needs.' },
  { title: 'A plan that suits the occasion', text: 'Explore individual meals or a shared spread with our team.' },
  { title: 'Details agreed before you order', text: 'Align on the menu, quantities, timings and quote together.' },
];

const MENU_IDEAS = [
  {
    img: '/images/meal-photography.webp',
    eyebrow: 'For the lunch break',
    title: 'Everyday Indian meals',
    text: 'Explore dal, seasonal sabzi, rice and roti combinations for a familiar, satisfying office lunch.',
  },
  {
    img: '/images/meal2.webp',
    eyebrow: 'For a hearty team meal',
    title: 'Rice & curry favourites',
    text: 'Talk to us about biryani, rice meals, curry combinations and vegetarian or non-vegetarian choices.',
  },
  {
    img: '/images/meal3.webp',
    eyebrow: 'For gatherings & occasions',
    title: 'A spread to celebrate',
    text: 'Discuss starters, mains, sides and sweet finishes for your office gathering or celebration.',
  },
];

const SERVE = [
  {
    icon: UtensilsCrossed,
    title: 'Individual meal packs',
    text: 'Ask about separately packed meals for desks, meeting rooms or staggered lunch breaks.',
    note: 'Discuss portions & labelling',
  },
  {
    icon: Package,
    title: 'Shared catering spread',
    text: 'Explore food for a common serving area, team table or office celebration.',
    note: 'Discuss serving needs & setup',
  },
];

const STEPS = [
  { title: 'Tell us the plan', text: 'Share your office location, occasion, date, meal time and estimated number of people.' },
  { title: 'Build the menu together', text: 'Discuss dishes, preferences, serving format and any dietary requirements with our team.' },
  { title: 'Agree the details', text: 'Review the quote, quantities, delivery arrangements and payment or invoice requirements.' },
  { title: 'Coordinate your meal', text: 'Confirm the order and nominate an office contact for the agreed handover arrangements.' },
];

const PRACTICAL = [
  {
    icon: MapPin,
    title: 'Office location & delivery',
    text: 'Share your address and preferred meal time. Delivery coverage, access and handover arrangements need to be confirmed.',
  },
  {
    icon: Users,
    title: 'Headcount & order size',
    text: 'Tell us your estimated quantity. Minimum quantities and capacity depend on your order — please discuss them with the team.',
  },
  {
    icon: CalendarClock,
    title: 'Lead time & repeat orders',
    text: 'Share your dates early. Ask about preparation time, recurring schedules and the process for changing quantities.',
  },
  {
    icon: Leaf,
    title: 'Dietary needs & allergens',
    text: 'Flag vegetarian preferences, allergies and other dietary needs before ordering. Suitability must be confirmed by the team.',
  },
  {
    icon: ReceiptText,
    title: 'Quotes, payment & invoicing',
    text: 'Request a quote for your menu and quantities. Discuss taxes, payment terms and any company or GST invoice requirements.',
  },
  {
    icon: Boxes,
    title: 'Packaging & serving needs',
    text: 'Discuss individual packs or shared portions, cutlery and serving arrangements so you know what is included in the quote.',
  },
];

const BRING = [
  'Your office location & delivery time',
  'The occasion, date & estimated headcount',
  'Meal preferences & a budget to work around',
  'Your company contact & invoice needs',
];

const FAQS = [
  {
    q: 'Can we order meals regularly for our office?',
    a: 'Yes, you can enquire about recurring office meals as well as one-time bulk orders. Share your preferred days, headcount and location so the team can discuss feasibility.',
  },
  {
    q: 'Is there a minimum order or a fixed corporate price?',
    a: 'Order quantities and pricing are discussed for your requirements. Ask the team for a quote based on your menu, headcount, serving format and location.',
  },
  {
    q: 'How far in advance should we contact you?',
    a: 'Enquire as early as you can with your date and meal time. The team will confirm the preparation time and availability for your order.',
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Please share preferences and allergies at the enquiry stage. The team will confirm suitable dishes and any limitations before you place an order.',
  },
  {
    q: 'Do you deliver to our office and provide an invoice?',
    a: 'Share your office address and business billing details. Delivery coverage, charges and company or GST invoice requirements should be confirmed with the team.',
  },
  {
    q: 'What if our headcount or event date changes?',
    a: 'Contact the team to discuss a change. Quantity updates, rescheduling and cancellation terms need to be agreed before you confirm the order.',
  },
];

/* --------------------------- component --------------------------- */
export default function BusinessPage() {
  const [openFaq, setOpenFaq] = React.useState(() => new Set(FAQS.map((_, i) => i)));
  const toggleFaq = (i) =>
    setOpenFaq((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="bg-white text-[#171717] font-['Jost',sans-serif]">
      {/* =========================================================
          1. HERO
      ========================================================= */}
      <section className="relative overflow-hidden text-white bg-[#0A1A1D]">
        <picture>
          <source type="image/webp" srcSet="/images/business-hero.webp" />
          <img
            src="/images/Buisness.png"
            alt="A team sharing a meal together"
            className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
            fetchpriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <Container className="relative pt-[calc(var(--nav-h,100px)+56px)] pb-24 sm:pb-28 lg:pt-[calc(var(--nav-h,61px)+90px)] lg:pb-36 min-h-[560px] lg:min-h-[640px]">
          <Eyebrow light>Office meals &amp; bulk orders</Eyebrow>
          <h1 className="mt-4 font-condensed font-semibold uppercase leading-[1.02] text-[44px] sm:text-[60px] lg:text-[72px]">
            Big teams.
            <br />
            Bigger appetites.
          </h1>
          <p className="mt-3 text-[20px] sm:text-[24px] font-semibold">Meal Ji has you covered.</p>
          <p className="mt-3 max-w-[460px] text-[14px] sm:text-[15px] leading-[1.7] text-white/85">
            Bring Indian flavours to the office. We accept bulk orders for team lunches, meetings and workplace celebrations.
            Tell us what you&apos;re planning — let&apos;s talk food.
          </p>
         
<a
  href={WHATSAPP}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-7 inline-flex items-center justify-center w-full max-w-[260px] h-12 rounded-[4px] bg-[#FF5425] hover:bg-[#e94a1d] text-[14px] font-medium transition-colors"
>
  Enquire now
</a>

          <p className="mt-4 text-[13px] text-white/75">
            One-time gathering or recurring meals?{' '}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
              Start a conversation
            </a>
          </p>
        </Container>

        {/* Sticker */}
        <div className="hidden sm:block absolute right-[6%] bottom-12 lg:bottom-16 -rotate-[8deg] bg-[#FFF6EA] text-[#171717] rounded-md shadow-[0_15px_35px_rgba(0,0,0,0.35)] px-5 py-4 max-w-[230px]">
          <p className="font-script text-[24px] leading-[1.05] text-[#FF5425]">Good food. Great company.</p>
          <p className="mt-1 text-[12px] text-[#555]">A little flavour for the workday</p>
        </div>
      </section>

      {/* =========================================================
          2. OCCASION STRIP
      ========================================================= */}
      <div className="bg-[#FF5425] text-white">
        <div className="scale-wide max-w-[1240px] mx-auto px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-2">
          {OCCASIONS.map((o, i) => (
            <React.Fragment key={o}>
              <span className="font-condensed uppercase text-[12px] sm:text-[13px] tracking-[0.12em]">{o}</span>
              {i < OCCASIONS.length - 1 && <span className="hidden sm:block w-1 h-1 rounded-full bg-white/80" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* =========================================================
          3. A MEAL FOR EVERY MOMENT
      ========================================================= */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-end">
            <div>
              <Eyebrow>A meal for every moment</Eyebrow>
              <H2 className="mt-3">
                From everyday lunches
                <br className="hidden sm:block" /> to the big office get-together.
              </H2>
            </div>
            <p className="text-[15px] leading-[1.7] text-[#6F6A63] md:pb-1">
              For HR teams, office admins and event organisers: tell us the occasion, and we&apos;ll discuss a meal plan that fits.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {MOMENTS.map(({ icon: Icon, title, text, tag }) => (
              <article
                key={title}
                className="group bg-[#FFF8F1] border border-[#F3E6D6] rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(255,84,37,0.12)]"
              >
                <Icon className="w-6 h-6 text-[#FF5425]" strokeWidth={1.6} />
                <h3 className="mt-4 font-condensed font-medium text-[20px]">{title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#6F6A63]">{text}</p>
                <p className="mt-4 text-[12.5px] text-[#FF5425]">{tag}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. INDIAN FLAVOURS
      ========================================================= */}
      <section className="bg-[#F8EFE0] py-16 lg:py-20">
        <Container className="grid md:grid-cols-[0.8fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[1.1/1] bg-[#FF5425] overflow-hidden">
            <img
              src="/images/dish-salmon-salad.jpg"
              alt="A plated lunch"
              loading="lazy"
              className="absolute left-[5%] top-[5%] w-[70%] aspect-square object-cover rounded-full border-[6px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.2)]"
            />
            <img
              src="/images/cheft.png"
              alt=""
              loading="lazy"
              className="absolute right-0 bottom-0 w-[40%] pointer-events-none"
            />
            <p className="absolute left-[6%] bottom-[6%] text-white font-semibold text-[18px] sm:text-[20px] leading-tight">
              A proper lunch
              <br />
              break!
            </p>
          </div>

          <div>
            <Eyebrow>Good food. Happy plates.</Eyebrow>
            <H2 className="mt-3 uppercase">
              Indian flavours.
              <br />A seat for the whole team.
            </H2>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#6F6A63]">
              The dishes you look forward to, made part of your workday. Explore familiar favourites and talk to us about
              putting together an office-friendly spread.
            </p>
            <ul className="mt-6 space-y-4">
              {FLAVOUR_POINTS.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rotate-45 bg-[#FF5425] shrink-0" />
                  <div>
                    <p className="font-condensed font-medium text-[17px]">{p.title}</p>
                    <p className="text-[13.5px] text-[#7A746D]">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* =========================================================
          5. WHAT'S ON THE OFFICE MENU
      ========================================================= */}
      <section id="office-menu" className="py-16 lg:py-24 scroll-mt-24">
        <Container>
          <div className="text-center max-w-[560px] mx-auto">
            <Eyebrow center>Good food, your way</Eyebrow>
            <H2 className="mt-3">What&apos;s on the office menu?</H2>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#6F6A63]">
              A few ideas to get the conversation started. We&apos;ll help you explore a menu for your occasion, preferences and
              budget.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {MENU_IDEAS.map((m) => (
              <article
                key={m.title}
                className="group bg-[#FFF8F1] rounded-lg overflow-hidden border border-[#F3E6D6] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="aspect-[416/270] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="font-condensed uppercase text-[11px] tracking-[0.12em] text-[#FF5425]">{m.eyebrow}</p>
                  <h3 className="mt-2 font-condensed font-medium text-[21px]">{m.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#6F6A63]">{m.text}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-[12.5px] text-[#8A857E]">
            Menu ideas are illustrative. Dishes, availability, portions and dietary requests are confirmed with the Meal Ji team.
          </p>
        </Container>
      </section>

      {/* =========================================================
          6. HOW WE'LL SERVE IT
      ========================================================= */}
      <section className="bg-[#072B31] text-white py-14 lg:py-16">
        <Container className="grid md:grid-cols-3 gap-10 md:gap-0">
          <div className="md:pr-10">
            <Eyebrow light>How we&apos;ll serve it</Eyebrow>
            <H2 light className="mt-3">
              Individual plates.
              <br />
              Shared moments.
            </H2>
            <p className="mt-3 text-[14px] leading-[1.7] text-white/70">
              Share your setup with us. We&apos;ll discuss the serving and packaging options available for your order.
            </p>
          </div>
          {SERVE.map(({ icon: Icon, title, text, note }) => (
            <div key={title} className="md:border-l border-white/15 md:px-10">
              <Icon className="w-6 h-6 text-[#FF7A4D]" strokeWidth={1.6} />
              <h3 className="mt-4 font-condensed font-medium text-[21px]">{title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-white/70">{text}</p>
              <p className="mt-4 text-[12.5px] text-white/90">{note}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* =========================================================
          7. STEPS
      ========================================================= */}
      <section className="py-16 lg:py-24">
        <Container>
          <Eyebrow>From enquiry to mealtime</Eyebrow>
          <H2 className="mt-3">Let&apos;s get your team around the table.</H2>

          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-[#FF5425] text-white font-condensed text-[16px] flex items-center justify-center">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-[#EDE6DC]" />
                </div>
                <h3 className="mt-5 font-condensed font-medium text-[19px]">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#6F6A63]">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* =========================================================
          8. THE PRACTICAL BITS
      ========================================================= */}
      <section className="bg-[#FDF8F1] py-16 lg:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-end">
            <div>
              <Eyebrow>The practical bits</Eyebrow>
              <H2 className="mt-3">Good planning. Better lunch breaks.</H2>
            </div>
            <p className="text-[15px] leading-[1.7] text-[#6F6A63] md:pb-1">
              Every office is different. Here&apos;s what we&apos;ll work through together before your order is confirmed.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {PRACTICAL.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t border-[#E3D9CB] pt-6">
                <Icon className="w-5 h-5 text-[#FF5425]" strokeWidth={1.7} />
                <h3 className="mt-3 font-condensed font-medium text-[19px]">{title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#6F6A63]">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          9. BRING THE DETAILS (CTA)
      ========================================================= */}
      <section className="bg-[#FF5425] text-white py-14 lg:py-16 overflow-hidden">
        <Container className="grid md:grid-cols-[1fr_1fr_auto] gap-8 md:gap-10 items-center">
          <div>
            <Eyebrow light>Got a lunch on your calendar?</Eyebrow>
            <H2 light className="mt-3">
              Bring the details.
              <br />
              We&apos;ll talk about the food.
            </H2>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-white text-[#FF5425] hover:bg-[#FFF1EB] px-6 h-12 rounded-[4px] text-[14px] font-medium transition-colors"
            >
              Start a conversation <ArrowRight size={16} />
            </a>
          </div>

          <ul className="space-y-3">
            {BRING.map((b) => (
              <li key={b} className="flex items-center gap-3 text-[15px]">
                <Check className="w-4 h-4 shrink-0" strokeWidth={3} />
                {b}
              </li>
            ))}
          </ul>

          <img
            src="/images/mascot-white-steam.png"
            alt=""
            loading="lazy"
            className="hidden md:block w-[150px] lg:w-[170px] pointer-events-none"
          />
        </Container>
      </section>

      {/* =========================================================
          10. FAQ
      ========================================================= */}
      <section className="py-16 lg:py-24">
        <Container className="grid md:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-start">
          <div className="md:sticky md:top-28">
            <Eyebrow>A little more clarity</Eyebrow>
            <H2 className="mt-3">Questions before you dig in?</H2>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#6F6A63]">
              Here are a few things office teams often need to plan. For the details of your order, connect with Meal Ji.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-condensed text-[16px] text-[#FF5425] hover:gap-3 transition-all"
            >
              Let&apos;s discuss your order <ArrowRight size={16} />
            </a>
          </div>

          <div className="border-t border-[#EDE6DC]">
            {FAQS.map((f, i) => {
              const open = openFaq.has(i);
              return (
                <div key={f.q} className="border-b border-[#EDE6DC]">
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-condensed font-medium text-[18px] sm:text-[19px]">{f.q}</span>
                    {open ? (
                      <Minus className="w-4 h-4 shrink-0 text-[#FF5425]" />
                    ) : (
                      <Plus className="w-4 h-4 shrink-0 text-[#FF5425]" />
                    )}
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-[14px] leading-[1.7] text-[#6F6A63]">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}

