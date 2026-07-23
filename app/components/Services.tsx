"use client";

import Link from "next/link";
import { useState } from "react";
import {
  House,
  Hammer,
  Ruler,
  ClipboardList,
  Building2,
  HardHat,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
} from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Management"];

const services = [
  {
    id: "new-home-builds",
    icon: House,
    category: "Residential",
    title: "New Home Builds",
    description:
      "Custom-built luxury homes crafted with precision, premium materials, and unparalleled attention to architectural detail.",
    features: [
      "Bespoke Architectural Design",
      "Energy-Efficient Builds",
      "Full Interior Finishing",
    ],
  },
  {
    id: "renovations",
    icon: Hammer,
    category: "Residential",
    title: "High-End Renovations",
    description:
      "Transform your existing space into a contemporary masterpiece designed for functionality and timeless aesthetic.",
    features: [
      "Structural Reconfiguration",
      "Luxury Material Sourcing",
      "Minimal Living Disruption",
    ],
  },
  {
    id: "home-extensions",
    icon: Ruler,
    category: "Residential",
    title: "Home Extensions",
    description:
      "Seamlessly blend added square footage with your home's original aesthetic for expanded, high-value living areas.",
    features: [
      "Custom Space Planning",
      "Architectural Matching",
      "Permit & Code Compliance",
    ],
  },
  {
    id: "project-management",
    icon: ClipboardList,
    category: "Management",
    title: "Project Management",
    description:
      "Comprehensive end-to-end oversight ensuring rigid quality control, strict safety standards, and transparent budgeting.",
    features: [
      "Dedicated Site Supervisor",
      "Real-time Timeline Updates",
      "Vendor & Subcontractor Control",
    ],
  },
  {
    id: "foundations",
    icon: Building2,
    category: "Commercial",
    title: "Foundations & Structural",
    description:
      "Heavy-duty, precision-engineered concrete and groundwork solutions engineered for decades of structural integrity.",
    features: [
      "Soil & Site Analysis",
      "Reinforced Concrete Pouring",
      "Seismic Compliance",
    ],
  },
  {
    id: "architectural-planning",
    icon: HardHat,
    category: "Management",
    title: "Architectural Planning",
    description:
      "Turn early-stage concepts into fully detailed schematics, 3D renders, and council-approved blueprints.",
    features: [
      "3D Visualizations",
      "Feasibility Studies",
      "Council Submissions",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation & Scope",
    desc: "Understanding your vision, budget, and site feasibility.",
  },
  {
    step: "02",
    title: "Design & Planning",
    desc: "Creating architectural blueprints and finalizing permits.",
  },
  {
    step: "03",
    title: "Execution & Build",
    desc: "Precision construction backed by dedicated project leads.",
  },
  {
    step: "04",
    title: "Handover & Warranty",
    desc: "Rigorous quality inspection followed by seamless key delivery.",
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* --- HERO SECTION --- */}
      <section className="relative py-28 overflow-hidden border-b border-slate-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-sm font-medium mb-6">
            <Sparkles size={16} /> Premium Construction Standards
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Master Craftsmanship, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[var(--color-gold)] to-amber-500">
              Uncompromised Quality.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
            From luxury residential builds to large-scale structural management,
            we deliver end-to-end excellence designed to stand the test of time.
          </p>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800/80 pt-10">
            {[
              { label: "Projects Completed", value: "150+" },
              { label: "Quality Guarantee", value: "100%" },
              { label: "Expert Engineers", value: "25+" },
              { label: "Industry Experience", value: "15+ Yrs" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MAIN SERVICES SHOWCASE --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[var(--color-gold)] text-slate-950 shadow-lg shadow-[var(--color-gold)]/20 font-semibold"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                id={service.id}
                key={service.id}
                className="group relative rounded-3xl bg-slate-900/60 p-8 border border-slate-800/80 hover:border-[var(--color-gold)]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-gold)]/5 flex flex-col justify-between scroll-mt-28"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-800 text-[var(--color-gold)] group-hover:bg-[var(--color-gold)] group-hover:text-slate-950 transition-colors duration-300">
                      <Icon size={28} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-800/50 px-3 py-1 rounded-md border border-slate-700/50">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-gold)] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 border-t border-slate-800/80 pt-6 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[var(--color-gold)] shrink-0"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact">
                  <button className="w-full py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-[var(--color-gold)] hover:text-slate-950 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 transition-all group-hover:shadow-md">
                    Request Consultation
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- PROCESS / WORKFLOW SECTION --- */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Proven Methodology
            </h2>
            <p className="text-slate-400">
              How we ensure every project delivers precision, efficiency, and
              structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((p, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-900 border border-slate-800"
              >
                <span className="text-4xl font-extrabold text-[var(--color-gold)]/20 mb-4 block">
                  {p.step}
                </span>
                <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-slate-900 border border-[var(--color-gold)]/30 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have a custom project in mind?
            </h3>
            <p className="text-slate-300 max-w-xl text-base">
              Speak with our architectural and engineering teams to turn your
              blueprint into a physical reality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-[var(--color-gold)] text-slate-950 font-bold hover:bg-amber-400 transition-all text-center flex items-center justify-center gap-2"
            >
              <PhoneCall size={18} />
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
