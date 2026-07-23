"use client";

import Link from "next/link";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
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
      name: "Contact",
      href: "/contact",
    },
  ];

  const services = [
    {
      name: "New Home Builds",
      href: "/services#new-home-builds",
    },
    {
      name: "Luxury Renovations",
      href: "/services#renovations",
    },
    {
      name: "Home Extensions",
      href: "/services#home-extensions",
    },
    {
      name: "Project Management",
      href: "/services#project-management",
    },
    {
      name: "Foundations & Structural",
      href: "/services#foundations",
    },
    {
      name: "Architectural Planning",
      href: "/services#architectural-planning",
    },
  ];

  return (
    <footer
      className="
        relative
        bg-[var(--color-navy)]
        text-white
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          bg-[var(--color-gold)]
          opacity-10
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-20
          relative
          z-10
        "
      >
        {/* Top CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            bg-white/10
            backdrop-blur-xl
            rounded-[2rem]
            p-8
            md:p-12
            mb-16
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            border
            border-white/10
          "
        >
          <div>
            <h2
              className="
                text-3xl
                md:text-4xl
                font-extrabold
              "
            >
              Ready To Build Your Dream Project?
            </h2>

            <p
              className="
                text-slate-300
                mt-3
              "
            >
              Talk with our construction experts today.
            </p>
          </div>

          <Link
            href="/contact"
            className="
              mt-6
              md:mt-0
              bg-[var(--color-gold)]
              px-8
              py-4
              rounded-xl
              font-bold
              hover:scale-105
              transition
            "
          >
            Get Free Quote
          </Link>
        </motion.div>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-12
          "
        >
          {/* Company */}

          <div>
            <h2
              className="
                text-3xl
                font-extrabold
              "
            >
              ARC
              <span className="text-[var(--color-gold)]"> Construction</span>
            </h2>

            <div
              className="
                w-20
                h-1
                bg-[var(--color-gold)]
                rounded-full
                my-5
              "
            />

            <p
              className="
                text-slate-300
                leading-8
              "
            >
              Premium residential and commercial construction delivering
              quality, trust, and exceptional craftsmanship.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-3 items-center text-slate-300">
                <Phone size={18} />
                +64 20 0000 0000
              </div>

              <div className="flex gap-3 items-center text-slate-300">
                <Mail size={18} />
                info@arccconstruction.co.nz
              </div>

              <div className="flex gap-3 items-center text-slate-300">
                <MapPin size={18} />
                Auckland, New Zealand
              </div>
            </div>
          </div>

          {/* Links */}

          <div>
            <h3
              className="
                text-xl
                font-bold
                mb-6
              "
            >
              Explore
            </h3>

            <ul className="space-y-4">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      text-slate-300
                      hover:text-[var(--color-gold)]
                      transition
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span className="text-[var(--color-gold)]">→</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3
              className="
                text-xl
                font-bold
                mb-6
              "
            >
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="
                    text-slate-300
                    hover:text-white
                    transition
                  "
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3
              className="
                text-xl
                font-bold
                mb-6
              "
            >
              Follow Us
            </h3>

            <p
              className="
                text-slate-300
                leading-7
              "
            >
              Follow our latest builds, renovations, and construction updates.
            </p>

            <div
              className="
                flex
                gap-4
                mt-7
              "
            >
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[var(--color-gold)]
                    hover:-translate-y-2
                    transition
                  "
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            border-t
            border-white/10
            mt-16
            pt-8
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
          "
        >
          <p
            className="
              text-slate-400
              text-sm
            "
          >
            © {new Date().getFullYear()} ARC Construction Group. All rights
            reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              mt-6
              md:mt-0
              w-14
              h-14
              rounded-full
              bg-[var(--color-gold)]
              flex
              items-center
              justify-center
              hover:scale-110
              transition
              shadow-lg
            "
          >
            <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
