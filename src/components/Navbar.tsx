"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "CV", href: "/cv" },
    { name: "Learning", href: "/learning" },
    { name: "Tools", href: "/tools" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="relative z-50 flex flex-col items-center w-[90vw] max-w-5xl mx-auto transition-all">
      <div className="glass-panel h-[56px] px-6 rounded-[50px] flex items-center justify-between w-full">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center font-bold text-lg">
            M
          </div>
          <span className="font-semibold text-sm tracking-wider hidden lg:block">
            MD MAHFUZUR RAHMAN
          </span>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-[var(--color-brand-primary)] ${
                  isActive ? "text-[var(--color-brand-primary)]" : "text-[var(--color-text-secondary)]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-brand-accent)]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA (Desktop) */}
        <button className="btn-primary py-2 px-5 text-sm rounded-[30px] items-center gap-1 hidden lg:flex">
          Let's Work Together <span className="text-lg leading-none">↗</span>
        </button>

        {/* Hamburger Toggle (Mobile) */}
        <button 
          className="lg:hidden text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown (Push Layout with Transition) */}
      <div 
        className={`lg:hidden w-full grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="glass-panel w-full rounded-[24px] p-5 flex flex-col gap-4 shadow-xl border-t border-white/20 mb-2">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium transition-colors ${
                      isActive ? "text-[var(--color-brand-primary)]" : "text-[var(--color-text-primary)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="w-full h-[1px] bg-white/40 my-1"></div>
            <button className="btn-primary py-3 w-full justify-center text-sm rounded-[30px] flex items-center gap-2">
              Let's Work Together <span className="text-lg leading-none">↗</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
