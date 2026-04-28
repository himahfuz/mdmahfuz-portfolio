import { Mail, Globe, Link2, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-5xl">
      <div className="glass-panel h-[60px] px-10 flex items-center justify-between rounded-[20px]">
        {/* Left */}
        <div className="flex items-center gap-2 text-[var(--color-text-primary)] font-medium text-sm">
          <Mail size={18} />
          <a href="mailto:hello@mdmahfuz.com" className="hover:text-[var(--color-brand-primary)] transition-colors">
            hello@mdmahfuz.com
          </a>
        </div>

        {/* Center */}
        <div className="flex items-center gap-3">
          <Link href="#" className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center hover:scale-110 hover:shadow-[0_4px_16px_rgba(0,201,127,0.3)] transition-all">
            <Link2 size={18} />
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center hover:scale-110 hover:shadow-[0_4px_16px_rgba(0,201,127,0.3)] transition-all">
            <MessageCircle size={18} />
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center hover:scale-110 hover:shadow-[0_4px_16px_rgba(0,201,127,0.3)] transition-all">
            <Send size={18} />
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 text-[var(--color-text-secondary)] text-sm">
          <Globe size={18} />
          <span>© 2026 mdmahfuz.com</span>
        </div>
      </div>
    </footer>
  );
}
