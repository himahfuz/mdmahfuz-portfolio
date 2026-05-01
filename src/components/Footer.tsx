import { Mail, Globe, Link2, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full px-6 mt-10 pb-8 z-50 lg:px-0 lg:mt-0 lg:pb-0 lg:w-[90vw] lg:max-w-5xl lg:fixed lg:bottom-5 lg:left-1/2 lg:-translate-x-1/2">
      <div className="glass-panel min-h-[60px] py-4 lg:py-0 px-6 lg:px-10 flex flex-col lg:flex-row items-center text-center justify-between gap-4 lg:gap-0 rounded-[24px]">
        {/* Left */}
        <div className="flex items-center gap-2 text-[var(--color-text-primary)] font-medium text-sm">
          <Mail size={18} />
          <a href="mailto:hello@mdmahfuz.com" className="hover:text-[var(--color-brand-primary)] transition-colors">
            hello@mdmahfuz.com
          </a>
        </div>

        {/* Center */}
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/mdmahfuzurali"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center hover:scale-110 hover:shadow-[0_4px_16px_rgba(0,201,127,0.3)] transition-all"
            aria-label="LinkedIn"
          >
            <Link2 size={18} />
          </a>
          <a
            href="https://wa.me/8801303819419"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center hover:scale-110 hover:shadow-[0_4px_16px_rgba(0,201,127,0.3)] transition-all"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-1 lg:flex-row lg:gap-2 text-[var(--color-text-secondary)] text-sm">
          {/* Globe + Copyright grouped */}
          <div className="flex items-center gap-2">
            <Globe size={18} />
            <span>© 2026 mdmahfuz.com</span>
          </div>
          {/* Separator — hidden on mobile, visible on lg */}
          <span className="hidden lg:inline opacity-30">·</span>
          {/* Privacy Policy */}
          <Link
            href="/privacy-policy"
            className="text-xs opacity-50 hover:opacity-100 hover:text-[var(--color-brand-primary)] transition-all duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
