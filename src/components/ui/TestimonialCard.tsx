"use client";

import { Quote } from "lucide-react";
import { useState } from "react";

export function TestimonialCard({
  name,
  designation,
  review,
  avatarSrc,
}: {
  name: string;
  designation?: string;
  review: string;
  avatarSrc: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-panel p-[16px_20px] w-full flex gap-3 testimonial-card">
      {/* Avatar */}
      <img
        src={avatarSrc}
        alt={name}
        className="w-12 h-12 rounded-full object-cover shrink-0"
      />

      {/* Content */}
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col">
            <span className="font-semibold text-[14px] text-[var(--color-text-primary)]">
              {name}
            </span>
            {designation && (
              <span className="text-[11px] text-[var(--color-text-secondary)] mt-0.5 leading-tight">
                {designation}
              </span>
            )}
          </div>
          <Quote size={14} className="text-[var(--color-brand-primary)] shrink-0 mt-1 ml-2" />
        </div>

        <div className="flex text-[#f59e0b] text-[14px] my-2">
          ★★★★★
        </div>

        <div className="relative">
          <p 
            className="text-[13px] text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line transition-all duration-300"
            style={{ 
              display: '-webkit-box', 
              WebkitLineClamp: isExpanded ? 'unset' : 8, 
              WebkitBoxOrient: 'vertical', 
              overflow: 'hidden' 
            }}
          >
            "{review}"
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[12px] font-medium text-[var(--color-brand-primary)] mt-2 hover:underline focus:outline-none"
          >
            {isExpanded ? "Read less" : "Read more..."}
          </button>
        </div>
      </div>
    </div>
  );
}

