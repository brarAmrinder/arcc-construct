"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Our Story",
      href: "/ourstory",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Recent Builds",
      href: "/recentbuilds",
    },
    {
      name: "Contact",
      href: "/getintouch",
    },
  ];

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
      "
    >
      <nav
        className="
          bg-[var(--color-navy)]/95
          backdrop-blur-xl
          border-b
          border-white/10
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            h-20
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}

          <Link
            href="/"
            className="
              text-3xl
              font-extrabold
              text-white
              tracking-tight
            "
          >
            ARC
            <span className="text-[var(--color-gold)]"> Construction</span>
          </Link>

          {/* Desktop Navigation */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-8
            "
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  relative
                  text-white
                  font-medium
                  transition
                  hover:text-[var(--color-gold)]
                  group
                "
              >
                {link.name}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-0
                    bg-[var(--color-gold)]
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />
              </Link>
            ))}

            <Link
              href="/getintouch"
              className="
                bg-[var(--color-gold)]
                text-white
                px-6
                py-3
                rounded-xl
                font-bold
                hover:scale-105
                transition
                shadow-lg
              "
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              text-white
            "
            aria-label="Toggle Menu"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}

        {open && (
          <div
            className="
              md:hidden
              bg-[var(--color-navy)]
              border-t
              border-white/10
              px-6
              py-6
            "
          >
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-white
                    font-medium
                    hover:text-[var(--color-gold)]
                    transition
                  "
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/getintouch"
                onClick={() => setOpen(false)}
                className="
                  bg-[var(--color-gold)]
                  text-white
                  text-center
                  px-6
                  py-3
                  rounded-xl
                  font-bold
                "
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
