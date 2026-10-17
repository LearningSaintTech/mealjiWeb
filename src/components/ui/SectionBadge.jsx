import React from 'react';

export default function SectionBadge({ text, light = false }) {
  return (
    <div className="inline-flex items-center justify-center gap-2 mb-2 select-none">
      {/* Left Chevron Ornament */}
      <span className="flex items-center text-[#F15A24] text-xs tracking-tighter opacity-80 font-bold">
        ‹‹‹‹‹
      </span>
      
      {/* Badge Text */}
      <span
        className={`text-xs md:text-sm font-bold tracking-[0.2em] uppercase ${
          light ? 'text-[#F15A24]' : 'text-[#F15A24]'
        }`}
      >
        {text}
      </span>

      {/* Right Chevron Ornament */}
      <span className="flex items-center text-[#F15A24] text-xs tracking-tighter opacity-80 font-bold">
        ›››››
      </span>
    </div>
  );
}
