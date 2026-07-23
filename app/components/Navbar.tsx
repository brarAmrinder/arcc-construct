"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/ourstory" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  // Helper check for contact route alignment
  const isContactActive = pathname === "/contact" || pathname === "/getintouch";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-[var(--color-navy)]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold text-white tracking-tight"
          >
            ARC
            <span className="text-[var(--color-gold)]"> Construction</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive =
                link.href === "/contact"
                  ? isContactActive
                  : pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-medium transition group ${
                    isActive
                      ? "text-[var(--color-gold)]"
                      : "text-white hover:text-[var(--color-gold)]"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-[var(--color-gold)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Both CTA and Contact Link go to /contact */}
            <Link
              href="/contact"
              className="bg-[var(--color-gold)] text-slate-950 px-6 py-3 rounded-xl font-bold hover:bg-amber-400 hover:scale-105 transition-all shadow-lg shadow-[var(--color-gold)]/10"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={open}
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="md:hidden bg-[var(--color-navy)] border-t border-white/10 px-6 py-6">
            <div className="flex flex-col gap-5">
              {links.map((link) => {
                const isActive =
                  link.href === "/contact"
                    ? isContactActive
                    : pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`font-medium transition ${
                      isActive
                        ? "text-[var(--color-gold)]"
                        : "text-white hover:text-[var(--color-gold)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-[var(--color-gold)] text-slate-950 text-center px-6 py-3 rounded-xl font-bold hover:bg-amber-400 transition"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
