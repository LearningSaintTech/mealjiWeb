import React from 'react';
import SectionBadge from '../ui/SectionBadge';
import { blogPosts } from '../../data/blogData';

export default function BlogSection() {
  return (
    <section id="blog" className="relative bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionBadge text="NEWS & BLOG" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-title text-[#111827] tracking-tight mt-1">
            Our Latest News & Blog
          </h2>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden group flex flex-col transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 bg-neutral-100 shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category Badge on Top-Left */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase text-white border border-white/10">
                  {post.tag}
                </div>
              </div>

              {/* Blog Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#111827] group-hover:text-[#F15A24] transition-colors leading-snug mb-3">
                <a href="#blog">
                  {post.title}
                </a>
              </h3>

              {/* Date & Author Meta */}
              <div className="mt-auto text-[11px] font-semibold tracking-wider uppercase text-[#8C98A4]">
                {post.date} • {post.author}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
