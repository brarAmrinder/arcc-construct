import Home from "./home";
import Slider from "./slider";
import Image from "next/image";

export default function homepage() {
  return (
    <div className="relative w-full h-full">
      <Home />
      <div className="w-full p-4">
        <Slider />
      </div>
      <div className="mt-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--color-navy)]">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-md rounded-xl border-l-4 border-[var(--color-gold)] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-navy)]">
              ✅ Licensed & Insured
            </h3>
            <p className="text-gray-700">
              We operate fully licensed and insured, ensuring safe and compliant
              construction on every project.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl border-l-4 border-[var(--color-gold)] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-navy)]">
              ✅ 10+ Years Experience
            </h3>
            <p className="text-gray-700">
              Our team brings extensive industry experience, delivering
              high-quality workmanship every time.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl border-l-4 border-[var(--color-gold)] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-navy)]">
              ✅ On-Time Delivery
            </h3>
            <p className="text-gray-700">
              We follow strict timelines and ensure your build stays on schedule
              from start to finish.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl border-l-4 border-[var(--color-gold)] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-navy)]">
              ✅ Transparent & Fair Pricing
            </h3>
            <p className="text-gray-700">
              No hidden costs — you get clear pricing, honest communication, and
              full transparency.
            </p>
          </div>
        </div>
        <div className="mt-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-[var(--color-navy)]">
            Our Construction Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-[var(--color-gold)] hover:shadow-xl transition duration-300">
              <div className="text-[var(--color-gold)] text-4xl mb-3">🏡</div>
              <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-2">
                New Home Builds
              </h3>
              <p className="text-gray-700">
                Full-service residential construction with top-quality
                workmanship from foundation to finish.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-[var(--color-gold)] hover:shadow-xl transition duration-300">
              <div className="text-[var(--color-gold)] text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-2">
                Renovations
              </h3>
              <p className="text-gray-700">
                Modernize and upgrade your existing home with professional
                renovation services.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-[var(--color-gold)] hover:shadow-xl transition duration-300">
              <div className="text-[var(--color-gold)] text-4xl mb-3">📐</div>
              <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-2">
                Home Extensions
              </h3>
              <p className="text-gray-700">
                Add extra rooms or expand your living space with structural
                extension solutions.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-[var(--color-gold)] hover:shadow-xl transition duration-300">
              <div className="text-[var(--color-gold)] text-4xl mb-3">📋</div>
              <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-2">
                Project Management
              </h3>
              <p className="text-gray-700">
                Professional planning & coordination to ensure smooth, efficient
                construction timelines.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-[var(--color-gold)] hover:shadow-xl transition duration-300">
              <div className="text-[var(--color-gold)] text-4xl mb-3">🧱</div>
              <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-2">
                Foundations & Concrete
              </h3>
              <p className="text-gray-700">
                Strong, durable, and precision-engineered foundation and
                concrete solutions.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-[var(--color-gold)] hover:shadow-xl transition duration-300">
              <div className="text-[var(--color-gold)] text-4xl mb-3">🏗️</div>
              <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-2">
                Architectural Planning
              </h3>
              <p className="text-gray-700">
                Expert design and blueprint planning to bring your vision to
                life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-navy)]">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-[var(--color-gold)] hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-3">
              <div>
                <h3 className="font-semibold text-[var(--color-navy)]">
                  James Walker
                </h3>
              </div>
            </div>
            <div className="flex text-yellow-400 text-xl mb-3">★★★★★</div>
            <p className="text-gray-700">
              “Outstanding workmanship and attention to detail. They kept us
              updated every step of the way and delivered our new home exactly
              as promised.”
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-[var(--color-gold)] hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-3">
              <div>
                <h3 className="font-semibold text-[var(--color-navy)]">
                  Sophie Mitchell
                </h3>
              </div>
            </div>
            <div className="flex text-yellow-400 text-xl mb-3">★★★★★</div>
            <p className="text-gray-700">
              “We had our home renovated and the results were better than
              expected. Super professional and finished right on schedule.”
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-[var(--color-gold)] hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-3">
              <div>
                <h3 className="font-semibold text-[var(--color-navy)]">
                  Amelia Brown
                </h3>
              </div>
            </div>
            <div className="flex text-yellow-400 text-xl mb-3">★★★★★</div>
            <p className="text-gray-700">
              “Highly recommend! Clear communication, fair pricing, and the team
              was incredibly respectful during construction.”
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-[var(--color-navy)]">
          Get a Free Quote
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ✅ Contact Form */}
          <div className="bg-white shadow-md rounded-xl p-8 border-t-4 border-[var(--color-gold)]">
            <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">
              Request a Call Back
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[var(--color-gold)] outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[var(--color-gold)] outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[var(--color-gold)] outline-none"
              />

              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[var(--color-gold)] outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white font-semibold rounded-lg transition"
              >
                Request Quote
              </button>
            </form>
          </div>

          {/* Contact Info / Right Side */}
          <div className="bg-[var(--color-navy)] text-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <p className="mb-4">
              Have questions or want to start your construction project? Our
              team is ready to help.
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                📞 <span className="font-semibold">02000000000000</span>
              </p>

              <p className="flex items-center gap-3">
                📧{" "}
                <span className="font-semibold">
                  info@arccconstruction.co.nz
                </span>
              </p>

              <p className="flex items-center gap-3">
                📍 <span className="font-semibold">Melbourne, Australia</span>
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
              <p>Mon – Fri: 8:00 AM – 5:00 PM</p>
              <p>Sat: 9:00 AM – 1:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative bg-gradient-to-br from-[#0A1B3E] to-[#040B18] text-white mt-20 pt-20 pb-10 px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,215,0,0.08)] to-transparent animate-pulse"></div>

        <div className="absolute top-6 right-6 bg-[var(--color-gold)] text-[var(--color-navy)] px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
          ✅ Licensed & Insured
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-14 z-10">
          <div className="space-y-4">
            <h3 className="text-4xl font-bold tracking-wide">
              ARC Construction Group
            </h3>
            <div className="h-1 w-20 bg-[var(--color-gold)] rounded-full animate-pulse"></div>

            <p className="text-gray-300 leading-relaxed text-[15px]">
              Delivering premium construction services with craftsmanship,
              trust, and transparency for families across New Zealand.
            </p>

            <a
              href="/getintouch"
              className="inline-block mt-4 bg-[var(--color-gold)] text-[var(--color-navy)] px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
            >
              Request a Quote →
            </a>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-[var(--color-gold)]">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-300 text-[15px]">
              <li>
                <a href="/home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/ourstory" className="footer-link">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="/recentbuilds" className="footer-link">
                  Recent Builds
                </a>
              </li>
              <li>
                <a href="/getintouch" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-[var(--color-gold)]">
              Contact Details
            </h4>

            <div className="space-y-3 text-gray-300 text-[15px]">
              <p>📞 0200000000000</p>
              <p>📧 info@arccconstruction.co.nz</p>
              <p>📍 Melbourne, AU</p>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <div className="icon-wrapper">
                <svg
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07C2 17.1 5.66 21.23 10.44 22v-7.01H7.9v-2.92h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.92h-2.33V22C18.34 21.23 22 17.1 22 12.07z" />
                </svg>
              </div>

              <div className="icon-wrapper">
                <svg
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.25a1.25 1.25 0 11-.001 2.501A1.25 1.25 0 0116.5 8.75z" />
                </svg>
              </div>

              <div className="icon-wrapper">
                <svg
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3A2 2 0 0121 5V19A2 2 0 0119 21H5A2 2 0 013 19V5A2 2 0 015 3H19M8.34 17V10.67H5.67V17H8.34M7 9.5A1.67 1.67 0 107 6.16 1.67 1.67 0 007 9.5M18.33 17V13.58C18.33 11.5 17.25 10.5 15.75 10.5A2.52 2.52 0 0013.33 11.91V10.67H10.67V17H13.33V13.83C13.33 12.58 14.08 11.83 15.08 11.83S16.67 12.58 16.67 13.83V17H18.33Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-gray-600 mt-12 pt-5 text-center text-gray-400 text-sm z-10">
          © {new Date().getFullYear()} ARC Construction Group — Built with
          Excellence in New Zealand.
        </div>
      </footer>
    </div>
  );
}
