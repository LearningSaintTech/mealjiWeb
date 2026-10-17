import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { legalMeta } from '../data/legalContent';
import PromoBanner from '../components/ui/PromoBanner';

/*
  Shared layout for Privacy Policy and Terms & Conditions.
  `doc` = { title, sections: [{ id, title, blocks: [...] }] } from data/legalContent.js
  Block types: p | list | subheading | label (e.g. "Email: …", "Location: …").
*/
const CONTACT_ICONS = { Email: Mail, Phone, Address: MapPin, Website: Globe };

function ContactRow({ label, text }) {
  const Icon = CONTACT_ICONS[label];
  const href =
    label === 'Email' ? `mailto:${text}` : label === 'Phone' ? `tel:${text}` : label === 'Website' ? text : null;

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-black/5 last:border-0">
      {Icon && (
        <span className="w-9 h-9 shrink-0 rounded-full bg-[#FFF1EB] text-[#F15A24] flex items-center justify-center">
          <Icon size={16} />
        </span>
      )}
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#8A857E]">{label}</p>
        {href ? (
          <a href={href} className="text-[15px] text-[#171717] hover:text-[#F15A24] break-words" target={label === 'Website' ? '_blank' : undefined} rel="noopener noreferrer">
            {text}
          </a>
        ) : (
          <p className="text-[15px] text-[#171717] break-words">{text}</p>
        )}
      </div>
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case 'list':
      return (
        <ul className="my-4 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-[1.7] text-[#4A4640]">
              <span className="mt-[0.7em] w-1.5 h-1.5 shrink-0 rounded-full bg-[#F15A24]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'subheading':
      return <h3 className="font-condensed font-medium text-[19px] text-[#171717] mt-6 mb-2">{block.text}</h3>;
    case 'label':
      if (CONTACT_ICONS[block.label]) return <ContactRow label={block.label} text={block.text} />;
      return (
        <p className="my-3 text-[15px] leading-[1.75] text-[#4A4640]">
          <strong className="font-semibold text-[#171717]">{block.label}:</strong> {block.text}
        </p>
      );
    default:
      return <p className="my-3 text-[15px] leading-[1.75] text-[#4A4640]">{block.text}</p>;
  }
}

/* Group consecutive contact rows into one card */
function renderBlocks(blocks) {
  const out = [];
  let contacts = [];
  const flush = (key) => {
    if (contacts.length) {
      out.push(
        <div key={`c-${key}`} className="my-5 rounded-2xl bg-[#FAF7F0] border border-black/5 px-5 py-2">
          {contacts.map((b) => <Block key={b.label} block={b} />)}
        </div>
      );
      contacts = [];
    }
  };
  blocks.forEach((b, i) => {
    if (b.type === 'label' && CONTACT_ICONS[b.label]) {
      contacts.push(b);
    } else {
      flush(i);
      out.push(<Block key={i} block={b} />);
    }
  });
  flush('end');
  return out;
}

export default function LegalPage({ doc, eyebrow }) {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(`sec-${id}`);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF7F0] text-[#171717] font-['Jost',sans-serif]">
      {/* Full-width promo banner directly under the navbar */}
      <PromoBanner />

      {/* Title strip */}
      <section className="bg-[#0A252B] text-white">
        <div className="scale-wide max-w-[1100px] mx-auto px-5 sm:px-6 py-8 sm:py-10 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <span className="font-script text-[22px] sm:text-[24px] text-[#FF7A4D]">{eyebrow}</span>
            <h1 className="font-condensed font-semibold uppercase text-[36px] sm:text-[48px] leading-none mt-1">
              {doc.title}
            </h1>
            {(legalMeta.effectiveDate || legalMeta.lastUpdated) && (
              <p className="mt-3 text-[13px] text-white/60">
                {legalMeta.effectiveDate && <>Effective date: {legalMeta.effectiveDate}</>}
                {legalMeta.effectiveDate && legalMeta.lastUpdated && ' · '}
                {legalMeta.lastUpdated && <>Last updated: {legalMeta.lastUpdated}</>}
              </p>
            )}
          </div>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-white/55 md:pb-1.5">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <span className="text-[#FF7A4D]">/</span>
            <span className="text-white/85">{doc.title}</span>
          </nav>
        </div>
      </section>

      <div className="scale-wide max-w-[1100px] mx-auto px-6 pt-12 pb-12 lg:pt-16 lg:pb-16 grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-14">
        {/* Table of contents */}
        <aside className="hidden lg:block">
          <nav className="sticky top-28">
            <p className="font-condensed uppercase tracking-[0.12em] text-[13px] text-[#F15A24] mb-4">On this page</p>
            <ol className="space-y-2 border-l border-black/10">
              {doc.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#sec-${s.id}`}
                    onClick={scrollTo(s.id)}
                    className="block -ml-px pl-4 border-l-2 border-transparent text-[13.5px] leading-snug text-[#6F6A63] hover:text-[#F15A24] hover:border-[#F15A24] hover:pl-5 transition-all duration-300 ease-out"
                  >
                    {s.id}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Content */}
        <article className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] px-6 py-8 sm:px-10 sm:py-12 min-w-0">
          {doc.sections.map((s) => (
            <section key={s.id} id={`sec-${s.id}`} className="pb-8 mb-8 border-b border-black/5 last:border-0 last:mb-0 last:pb-0">
              <h2 className="font-condensed font-medium text-[24px] sm:text-[28px] text-[#171717] flex items-baseline gap-3">
                <span className="text-[#F15A24] text-[18px] sm:text-[20px]">{String(s.id).padStart(2, '0')}</span>
                {s.title}
              </h2>
              {renderBlocks(s.blocks)}
            </section>
          ))}

          <p className="mt-10 pt-8 border-t border-black/5 text-center font-script text-[24px] text-[#F15A24]">
            Meal Ji — Fresh Homestyle Food, Served with Care.
          </p>
        </article>
      </div>
    </div>
  );
}
