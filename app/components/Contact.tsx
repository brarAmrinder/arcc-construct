"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  User,
  MessageSquare,
  Shield,
  ExternalLink,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Contact() {
  const contactItems = [
    {
      icon: Phone,
      title: "Phone",
      value: "+64 20 0000 0000",
      href: "tel:+642000000000",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@arccconstruction.co.nz",
      href: "mailto:info@arccconstruction.co.nz",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Auckland, New Zealand",
      href: "https://maps.google.com/?q=Auckland,+New+Zealand",
      isExternal: true,
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Fri | 8:00 AM - 5:00 PM",
      href: null,
    },
  ];

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--color-gold)] opacity-10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[var(--color-gold)] text-white text-sm font-semibold uppercase tracking-widest">
            Free Consultation
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold text-white">
            Let's Build
            <span className="text-[var(--color-gold)]"> Something Great</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-lg">
            Have a construction idea? Share your vision with us and our experts
            will provide professional guidance and a free project estimate.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full relative bg-[var(--color-navy)] rounded-[2.5rem] p-8 md:p-12 border border-[var(--color-gold)]/30 shadow-[0_0_35px_rgba(234,179,8,0.15)] overflow-hidden flex flex-col justify-between"
          >
            {/* Soft Yellow Radial Light Spot */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-gold)]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-8 relative z-10">
              <span className="text-[var(--color-gold)] font-semibold text-xs tracking-widest uppercase">
                Get In Touch
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-1">
                Request A Quote
              </h3>
              <p className="text-slate-300 mt-2 text-base">
                Fill in the details below. We usually respond within 24 hours.
              </p>
            </div>

            <form
              id="quote-form"
              className="space-y-6 relative z-10 flex-1 flex flex-col justify-between"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      size={20}
                    />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      className="w-full rounded-2xl border border-slate-200 bg-white p-4 pl-12 text-slate-900 placeholder:text-slate-400 outline-none focus:border-[var(--color-gold)] focus:ring-4 focus:ring-[var(--color-gold)]/20 transition-all duration-200 font-medium shadow-sm"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        size={20}
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="example@email.com"
                        className="w-full rounded-2xl border border-slate-200 bg-white p-4 pl-12 text-slate-900 placeholder:text-slate-400 outline-none focus:border-[var(--color-gold)] focus:ring-4 focus:ring-[var(--color-gold)]/20 transition-all duration-200 font-medium shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        size={20}
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+64 21 000 0000"
                        className="w-full rounded-2xl border border-slate-200 bg-white p-4 pl-12 pr-12 text-slate-900 placeholder:text-slate-400 outline-none focus:border-[var(--color-gold)] focus:ring-4 focus:ring-[var(--color-gold)]/20 transition-all duration-200 font-medium shadow-sm"
                      />
                      {/* Direct Dial Link inside input */}
                      <a
                        href="tel:+642000000000"
                        title="Call directly"
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-[var(--color-gold)] transition-colors"
                      >
                        <Phone size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Project Details
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-4 top-4 text-slate-400 pointer-events-none"
                      size={20}
                    />
                    <textarea
                      rows={4}
                      name="message"
                      required
                      placeholder="Describe your renovation, new build, or commercial project..."
                      className="w-full rounded-2xl border border-slate-200 bg-white p-4 pl-12 text-slate-900 placeholder:text-slate-400 resize-none outline-none focus:border-[var(--color-gold)] focus:ring-4 focus:ring-[var(--color-gold)]/20 transition-all duration-200 font-medium shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[var(--color-gold)] text-slate-950 py-4 px-8 rounded-2xl font-bold text-base hover:bg-amber-400 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-[var(--color-gold)]/15 group cursor-pointer"
                >
                  <span>Send Request</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-medium pt-3">
                  <Shield size={16} className="text-[var(--color-gold)]" />
                  <span>Your information is protected and kept private.</span>
                </div>
              </div>
            </form>
          </motion.div>

          {/* CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full bg-[var(--color-navy)] rounded-[2.5rem] p-8 md:p-12 text-white border border-[var(--color-gold)]/30 shadow-[0_0_35px_rgba(234,179,8,0.15)] relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[var(--color-gold)] opacity-20 blur-3xl" />

            <div>
              <h3 className="text-3xl font-bold relative">
                Let's Discuss Your Project
              </h3>

              <p className="text-slate-300 mt-5 leading-relaxed relative">
                From residential builds to commercial developments, our team
                provides reliable construction solutions from concept to
                completion.
              </p>

              {/* Clickable Info Links */}
              <div className="mt-10 space-y-5 relative">
                {contactItems.map((item) => {
                  const Content = (
                    <div className="flex gap-5 items-center p-2 rounded-2xl transition-colors hover:bg-white/5 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[var(--color-gold)] shrink-0 group-hover:bg-[var(--color-gold)] group-hover:text-slate-950 transition-all">
                        <item.icon size={24} />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-bold text-white flex items-center gap-2">
                          {item.title}
                          {item.href && item.isExternal && (
                            <ExternalLink
                              size={14}
                              className="text-slate-400 group-hover:text-[var(--color-gold)]"
                            />
                          )}
                        </h4>
                        <p className="text-slate-300 text-sm group-hover:text-[var(--color-gold)] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.isExternal ? "_blank" : "_self"}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {Content}
                    </a>
                  ) : (
                    <div key={item.title}>{Content}</div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 bg-white/10 rounded-2xl p-5 relative border border-white/5">
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                ✓ Free site consultation
                <br />
                ✓ Transparent pricing
                <br />✓ Professional project guidance
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
