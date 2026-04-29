"use client";

import { useState, useRef, useEffect } from 'react';
import { CalendarClock } from 'lucide-react';

export function JobAvailabilityBadge() {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside (especially useful for mobile)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block mt-8 w-max" ref={tooltipRef}>
      <button 
        className="flex items-center gap-2 bg-[rgba(255,255,255,0.3)] backdrop-blur-[8px] border border-[rgba(0,0,0,0.06)] rounded-[30px] px-[28px] py-[12px] font-semibold text-[14px] text-gray-500 hover:bg-[rgba(255,255,255,0.5)] transition-all cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Job Availability Status"
      >
        <CalendarClock size={18} />
        Not Available for Job
      </button>

      {/* Tooltip */}
      <div 
        className={`absolute bottom-[calc(100%+14px)] left-0 w-[280px] sm:w-[320px] p-4 bg-white/90 backdrop-blur-md border border-[rgba(0,0,0,0.05)] rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-[14px] text-gray-600 leading-relaxed transition-all duration-300 z-50 pointer-events-none origin-bottom-left ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <div className="absolute -bottom-2 left-10 w-4 h-4 bg-white/90 border-b border-r border-[rgba(0,0,0,0.05)] rotate-45 backdrop-blur-md"></div>
        <p className="relative z-10">
          I am currently completing my CA Articleship (CC period), which concludes on <strong>June 30, 2027</strong>. I will be open to new professional opportunities and career challenges immediately following this date.
        </p>
      </div>
    </div>
  );
}
