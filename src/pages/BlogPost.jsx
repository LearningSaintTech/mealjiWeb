import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock,
  Lightbulb,
  Link2,
  Check,
  ListOrdered,
} from 'lucide-react';
import { blogPosts } from '../data/blogData';

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */
const slugify = (t) =>
  t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/* Sets <title>, meta description and keywords while the article is open; restores them after. */
function useArticleMeta(post) {
  useEffect(() => {
    if (!post) return undefined;
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      const created = !el;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      const previous = el.getAttribute('content');
      el.setAttribute('content', content);
      return () => (created ? el.remove() : el.setAttribute('content', previous ?? ''));
    };
    const prevTitle = document.title;
    document.title = post.metaTitle || post.title;
    const restoreDesc = setMeta('description', post.metaDescription || post.excerpt || '');
    const restoreKeywords = setMeta('keywords', post.metaKeyword || '');
    return () => {
      document.title = prevTitle;
      restoreDesc();
      restoreKeywords();
    };
  }, [post]);
}

/* Thin progress bar under the navbar — updated via ref (no re-renders while scrolling). */
function ReadingProgress({ targetRef }) {
  const barRef = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = targetRef.current;
      const bar = barRef.current;
      if (!el || !bar) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const progress = Math.min(1, Math.max(0, -rect.top / (total || 1)));
      bar.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [targetRef]);

  return (
    <div className="fixed left-0 right-0 z-40 h-[3px] bg-transparent" style={{ top: 'var(--nav-h, 61px)' }} aria-hidden="true">
      <div ref={barRef} className="h-full origin-left bg-[#F15A24]" style={{ transform: 'scaleX(0)' }} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* content blocks                                                      */
/* ------------------------------------------------------------------ */
function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          id={slugify(block.text)}
          className="scroll-mt-28 mt-14 mb-5 font-condensed font-medium text-[28px] sm:text-[34px] leading-[1.15] text-[#171717]"
        >
          <span className="block w-10 h-[3px] rounded-full bg-[#F15A24] mb-4" />
          {block.text}
        </h2>
      );
    case 'h3': {
      const m = block.text.match(/^(\d+)\.\s+(.*)$/);
      return (
        <h3 className="mt-10 mb-3 flex items-start gap-3 font-condensed font-medium text-[21px] sm:text-[24px] leading-snug text-[#171717]">
          {m && (
            <span className="mt-0.5 shrink-0 w-9 h-9 rounded-xl bg-[#FFF1EB] text-[#F15A24] text-[16px] flex items-center justify-center">
              {m[1].padStart(2, '0')}
            </span>
          )}
          <span>{m ? m[2] : block.text}</span>
        </h3>
      );
    }
    case 'ul':
      return (
        <ul className="my-6 grid gap-2.5">
          {block.items.map((item) => {
            const i = item.indexOf(': ');
            const hasLabel = i > 0 && i < 45;
            return (
              <li
                key={item}
                className="flex gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-black/[0.05] text-[15.5px] leading-[1.65] text-[#4A4640]"
              >
                <Check className="w-4 h-4 mt-[5px] shrink-0 text-[#F15A24]" strokeWidth={3} />
                <span>
                  {hasLabel ? (
                    <>
                      <strong className="font-semibold text-[#171717]">{item.slice(0, i)}:</strong>
                      {item.slice(i + 1)}
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );
    case 'table':
      return (
        <div className="my-8 overflow-x-auto rounded-2xl bg-white ring-1 ring-black/[0.06] shadow-[0_15px_40px_-25px_rgba(10,37,43,0.35)]">
          <table className="w-full min-w-[440px] text-left text-[15px]">
            <thead>
              <tr className="bg-[#0A252B] text-white">
                {block.head.map((h) => (
                  <th key={h} className="px-5 py-4 font-condensed font-medium tracking-[0.02em]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className="border-t border-[#F0EAE1]">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-5 py-4 ${
                        ci === 0 ? 'font-condensed font-medium text-[17px] text-[#171717]' : 'text-[#4A4640]'
                      }`}
                    >
                      {ci > 0 ? <span className="font-semibold text-[#F15A24]">{cell}</span> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'note':
      return (
        <div className="my-8 relative overflow-hidden rounded-2xl bg-[#0A252B] text-white p-6 sm:p-7">
          <div className="pointer-events-none absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#F15A24]/25 blur-3xl" />
          <div className="relative flex gap-4">
            <span className="w-10 h-10 shrink-0 rounded-xl bg-[#F15A24] flex items-center justify-center">
              <Lightbulb className="w-5 h-5" />
            </span>
            <div>
              <p className="font-condensed uppercase tracking-[0.12em] text-[12px] text-[#FF9A73]">{block.label}</p>
              <p className="mt-1 text-[15.5px] leading-[1.75] text-white/85">{block.text}</p>
            </div>
          </div>
        </div>
      );
    default:
      return <p className="my-5 text-[16.5px] leading-[1.9] text-[#4A4640]">{block.text}</p>;
  }
}

/* ------------------------------------------------------------------ */
/* sidebar                                                             */
/* ------------------------------------------------------------------ */
function ShareButtons({ post }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const text = encodeURIComponent(`${post.title} ${url}`);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  const btn =
    'w-10 h-10 rounded-full bg-white ring-1 ring-black/[0.08] flex items-center justify-center text-[#171717] hover:bg-[#F15A24] hover:text-white hover:ring-[#F15A24] transition-colors';

  return (
    <div className="flex items-center gap-2">
      <a href={`https://wa.me/?text=${text}`} target="_blank" rel="noopener noreferrer" className={btn} aria-label="Share on WhatsApp">
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        aria-label="Share on LinkedIn"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z" />
        </svg>
      </a>
      <button type="button" onClick={copy} className={btn} aria-label="Copy link">
        {copied ? <Check className="w-4 h-4" strokeWidth={3} /> : <Link2 className="w-4 h-4" />}
      </button>
      {copied && <span className="text-[12px] text-[#F15A24]">Link copied</span>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* page                                                                */
/* ------------------------------------------------------------------ */
export default function BlogPost({ post }) {
  useArticleMeta(post);
  const articleRef = useRef(null);
  const toc = useMemo(() => (post?.blocks || []).filter((b) => b.type === 'h2').map((b) => ({ id: slugify(b.text), text: b.text })), [post]);

  if (!post) {
    return (
      <div className="bg-[#FAF7F0] font-['Jost',sans-serif]">
        <div className="nav-spacer" aria-hidden="true" />
        <div className="max-w-[760px] mx-auto px-6 py-24 text-center">
          <h1 className="font-condensed text-[36px]">Article not found</h1>
          <a href="#blog" className="mt-6 inline-flex items-center gap-2 text-[#F15A24]">
            <ArrowLeft size={16} /> Back to the blog
          </a>
        </div>
      </div>
    );
  }

  const others = blogPosts.filter((p) => p.slug !== post.slug);
  const jumpTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF7F0] text-[#171717] font-['Jost',sans-serif]">
      <ReadingProgress targetRef={articleRef} />

      {/* ============================ HERO ============================ */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[#FFF4EA] to-[#FAF7F0]">
        <div className="nav-spacer" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full bg-[#F15A24]/10 blur-[100px]" />

        <div className="scale-wide relative max-w-[1160px] mx-auto px-5 sm:px-6 pt-10 sm:pt-14 pb-14 sm:pb-20 grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px] text-[#8C8780]">
              <a href="#home" className="hover:text-[#F15A24] transition-colors">Home</a>
              <span>/</span>
              <a href="#blog" className="hover:text-[#F15A24] transition-colors">Blog</a>
              <span>/</span>
              <span className="text-[#171717] line-clamp-1">{post.tag}</span>
            </nav>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[12px] font-medium text-[#F15A24] ring-1 ring-[#F15A24]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F15A24]" />
              {post.tag}
            </span>

            <h1 className="mt-5 font-condensed font-semibold text-[36px] sm:text-[48px] lg:text-[54px] leading-[1.06] text-[#171717]">
              {post.title}
            </h1>
            {post.excerpt && <p className="mt-5 text-[17px] leading-[1.7] text-[#6F6A63] max-w-[520px]">{post.excerpt}</p>}

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13.5px] text-[#6F6A63]">
              <span className="inline-flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-full bg-white ring-1 ring-black/[0.06] overflow-hidden flex items-center justify-center">
                  <img src="/images/meals-chef-kiss.png" alt="" className="w-7 h-7 object-contain" />
                </span>
                <span className="font-medium text-[#171717]">{post.author}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={15} className="text-[#F15A24]" /> {post.date}
              </span>
              {post.readTime && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={15} className="text-[#F15A24]" /> {post.readTime}
                </span>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 sm:-inset-4 rounded-[32px] bg-[#F15A24]/10 rotate-[-2deg]" aria-hidden="true" />
            <img
              src={post.image}
              srcSet={`${post.imageSmall} 800w, ${post.image} 1920w`}
              sizes="(min-width: 1024px) 580px, 100vw"
              alt={post.imageAlt}
              width="1920"
              height="1080"
              className="relative w-full h-auto aspect-[16/9] object-cover rounded-[24px] shadow-[0_30px_60px_-25px_rgba(10,37,43,0.45)]"
            />
          </div>
        </div>
      </header>

      {/* ========================= BODY + SIDEBAR ========================= */}
      <div className="scale-wide max-w-[1160px] mx-auto px-5 sm:px-6 pb-20 grid lg:grid-cols-[minmax(0,1fr)_300px] gap-12 xl:gap-16">
        <article ref={articleRef} className="min-w-0 max-w-[740px]">
          {post.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}

          {/* CTA */}
          <div className="mt-16 relative overflow-hidden rounded-[28px] bg-[#F15A24] text-white p-7 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/10" />
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <p className="font-script text-[24px] text-white/90">Hungry for a better lunch?</p>
                <p className="mt-1 font-condensed font-medium text-[28px] sm:text-[32px] leading-tight">
                  Explore Meal Ji&apos;s meal plans for your office.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#menu"
                    className="inline-flex items-center gap-2 bg-white text-[#F15A24] hover:bg-[#FFF1EB] px-5 h-11 rounded-full text-[14px] font-medium transition-colors"
                  >
                    See the menu <ArrowRight size={15} />
                  </a>
                  <a
                    href="#for-business"
                    className="inline-flex items-center gap-2 ring-1 ring-white/60 hover:ring-white px-5 h-11 rounded-full text-[14px] font-medium transition-colors"
                  >
                    For business
                  </a>
                </div>
              </div>
              <img src="/images/mascot-white-steam.png" alt="" className="hidden sm:block w-[140px] shrink-0 pointer-events-none" />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.06] pt-8">
            <a href="#blog" className="inline-flex items-center gap-2 text-[14px] font-medium text-[#171717] hover:text-[#F15A24] transition-colors">
              <ArrowLeft size={16} /> Back to all articles
            </a>
            <div className="lg:hidden">
              <ShareButtons post={post} />
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-6 pt-14">
            {toc.length > 0 && (
              <div className="rounded-[24px] bg-white p-6 ring-1 ring-black/[0.05] shadow-[0_15px_40px_-30px_rgba(10,37,43,0.4)]">
                <p className="flex items-center gap-2 font-condensed uppercase tracking-[0.12em] text-[12px] text-[#F15A24]">
                  <ListOrdered size={15} /> In this article
                </p>
                <ol className="mt-4 space-y-1">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        onClick={jumpTo(t.id)}
                        className="block rounded-lg px-3 py-2 text-[13.5px] leading-snug text-[#4A4640] hover:bg-[#FFF1EB] hover:text-[#F15A24] transition-colors"
                      >
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="rounded-[24px] bg-white p-6 ring-1 ring-black/[0.05]">
              <p className="font-condensed uppercase tracking-[0.12em] text-[12px] text-[#8C8780]">Share this article</p>
              <div className="mt-4">
                <ShareButtons post={post} />
              </div>
            </div>

            <a
              href="#menu"
              className="group block overflow-hidden rounded-[24px] bg-[#0A252B] text-white p-6 relative"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#F15A24]/30 blur-2xl" />
              <p className="relative font-condensed uppercase tracking-[0.12em] text-[12px] text-[#FF9A73]">Meal plans from</p>
              <p className="relative mt-1 font-condensed font-semibold text-[40px] leading-none">₹129</p>
              <p className="relative mt-2 text-[13.5px] text-white/70">GharJi, KhaasJi &amp; DaawatJi — homestyle meals for your workday.</p>
              <span className="relative mt-5 inline-flex items-center gap-2 text-[14px] font-medium">
                View plans
                <span className="w-8 h-8 rounded-full bg-[#F15A24] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </span>
            </a>
          </div>
        </aside>
      </div>

      {/* ========================= RELATED ========================= */}
      {others.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="scale-wide max-w-[1160px] mx-auto px-5 sm:px-6">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-condensed font-medium text-[30px] sm:text-[36px] leading-tight">More from the blog</h2>
              <a href="#blog" className="hidden sm:inline-flex items-center gap-2 text-[14px] font-medium text-[#F15A24]">
                All articles <ArrowRight size={15} />
              </a>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {others.map((p) => {
                const live = Boolean(p.blocks);
                const Wrapper = live ? 'a' : 'div';
                return (
                  <Wrapper
                    key={p.slug}
                    href={live ? `#blog/${p.slug}` : undefined}
                    className={`group flex flex-col sm:flex-row gap-4 rounded-[24px] bg-[#FAF7F0] p-3 ring-1 ring-black/[0.04] transition-all duration-500 ${
                      live ? 'hover:-translate-y-1 hover:shadow-[0_25px_50px_-25px_rgba(10,37,43,0.35)]' : ''
                    }`}
                  >
                    <img
                      src={p.imageSmall}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="w-full sm:w-[45%] aspect-[16/9] object-cover rounded-[18px] shrink-0"
                    />
                    <div className="flex flex-col justify-center px-1 sm:px-0 sm:pr-3 pb-2 sm:pb-0">
                      <span
                        className={`self-start font-condensed uppercase text-[10.5px] tracking-[0.12em] px-2.5 py-1 rounded-full ${
                          live ? 'bg-[#FFF1EB] text-[#F15A24]' : 'bg-[#0A252B] text-white'
                        }`}
                      >
                        {live ? p.tag : 'Coming soon'}
                      </span>
                      <p className="mt-3 font-condensed font-medium text-[18px] leading-snug group-hover:text-[#F15A24] transition-colors">
                        {p.title}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
