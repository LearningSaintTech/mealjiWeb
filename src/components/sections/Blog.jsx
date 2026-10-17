import React from 'react';
import { blogPosts } from '../../data/blogData';

/*
  Home-page "News & Blog" section (below the features grid).
  Three equal cards: image with a small white tag, title, then "DATE • AUTHOR".
  Published posts link to their article page; posts without content are not clickable.
*/

/* Flourish on either side of the "NEWS & BLOG" label */
const Flourish = ({ flip = false }) => (
  <svg
    className={`w-14 h-3 text-[#F15A24] ${flip ? 'scale-x-[-1]' : ''}`}
    viewBox="0 0 70 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="3" cy="6" r="2" />
    <line x1="5" y1="6" x2="52" y2="6" />
    <path d="M52 2.5l3.5 3.5-3.5 3.5M57 2.5l3.5 3.5-3.5 3.5M62 2.5l3.5 3.5-3.5 3.5" />
  </svg>
);

function BlogCard({ post }) {
  const live = Boolean(post.blocks);
  const href = live ? `#blog/${post.slug}` : undefined;
  const Wrapper = live ? 'a' : 'div';

  return (
    <article className="group">
      <Wrapper href={href} className="relative block overflow-hidden rounded-lg aspect-[16/9] bg-[#F3EEE6]">
        <img
          src={post.imageSmall}
          srcSet={`${post.imageSmall} 800w, ${post.image} 1920w`}
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
          alt={post.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-white text-[#171717] font-condensed font-medium uppercase text-[10px] tracking-[0.06em] leading-none px-2.5 py-1.5 rounded-[3px]">
          {post.tag}
        </span>
      </Wrapper>

      <h3 className="mt-5 font-condensed font-medium text-[17px] sm:text-[18px] leading-[1.35] text-[#171717]">
        {live ? (
          <a href={href} className="transition-colors hover:text-[#F15A24]">
            {post.title}
          </a>
        ) : (
          post.title
        )}
      </h3>

      <p className="mt-3 font-['Jost',sans-serif] text-[11.5px] uppercase tracking-[0.02em] text-[#7A7570]">
        {post.date} <span className="mx-0.5">•</span> {post.author}
      </p>
    </article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="relative bg-white pb-20 md:pb-28 px-5 sm:px-6">
      <div className="scale-wide max-w-[920px] mx-auto">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2.5">
            <Flourish />
            <span className="font-condensed font-medium uppercase text-[13px] tracking-[0.06em] text-[#F15A24]">
              News &amp; Blog
            </span>
            <Flourish flip />
          </div>
          <h2 className="mt-1.5 font-condensed font-medium text-[28px] sm:text-[32px] leading-tight text-[#111111]">
            Our Latest News &amp; Blog
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
