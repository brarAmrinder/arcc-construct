import {
  House,
  Hammer,
  Ruler,
  ClipboardList,
  Building2,
  HardHat,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: House,
    title: "New Home Builds",
    description:
      "Custom-built homes designed and constructed with exceptional craftsmanship and attention to detail.",
  },
  {
    icon: Hammer,
    title: "Renovations",
    description:
      "Transform your existing home with high-quality renovations that improve both style and functionality.",
  },
  {
    icon: Ruler,
    title: "Home Extensions",
    description:
      "Expand your living space with expertly planned extensions tailored to your family's needs.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "End-to-end project coordination ensuring timelines, budgets, and quality standards are met.",
  },
  {
    icon: Building2,
    title: "Foundations & Concrete",
    description:
      "Strong, durable concrete and foundation solutions engineered for long-lasting performance.",
  },
  {
    icon: HardHat,
    title: "Architectural Planning",
    description:
      "Professional planning and design services to turn your ideas into reality.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-[var(--color-gold)] font-semibold">
            Our Expertise
          </p>

          <h2 className="mt-3 text-5xl font-bold text-[var(--color-navy)]">
            Construction Services
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-lg">
            From concept to completion, we deliver reliable construction
            solutions with quality workmanship and attention to detail.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-gold)]/10 mb-6 group-hover:bg-[var(--color-gold)] group-hover:text-white transition">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">{service.description}</p>

                <button className="mt-8 flex items-center gap-2 text-[var(--color-gold)] font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
