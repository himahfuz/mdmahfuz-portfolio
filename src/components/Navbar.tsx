"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "CV", href: "/cv" },
    { name: "Learning", href: "/learning" },
    { name: "Tools", href: "/tools" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-panel h-[56px] px-6 rounded-[50px] flex items-center justify-between w-[90vw] max-w-5xl">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center font-bold text-lg">
            M
          </div>
          <span className="font-semibold text-sm tracking-wider hidden md:block">
            MD MAHFUZUR RAHMAN
          </span>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Right: CTA */}
        <button className="btn-primary py-2 px-5 text-sm rounded-[30px] flex items-center gap-1 hidden md:flex">
          Let's Work Together <span className="text-lg leading-none">↗</span>
        </button>
      </div>
    </nav>
  );
}
