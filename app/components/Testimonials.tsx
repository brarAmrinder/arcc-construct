import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Walker",
    role: "Home Owner",
    review:
      "ARC Construction exceeded every expectation. Their communication, workmanship and professionalism made the entire building process stress-free.",
  },
  {
    name: "Sophie Mitchell",
    role: "Renovation Client",
    review:
      "The renovation completely transformed our home. The team finished on schedule and every detail was completed to an exceptional standard.",
  },
  {
    name: "Amelia Brown",
    role: "Property Owner",
    review:
      "Excellent service from start to finish. Transparent pricing, honest advice and outstanding craftsmanship. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-[var(--color-gold)] font-semibold">
            Testimonials
          </p>

          <h2 className="mt-3 text-5xl font-bold text-[var(--color-navy)]">
            What Our Clients Say
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-lg">
            Building long-term relationships through quality workmanship,
            honesty and reliable service.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((client, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-gold)] text-white text-2xl font-bold">
                  {client.name.charAt(0)}
                </div>

                <div className="ml-4">
                  <h3 className="font-bold text-xl text-[var(--color-navy)]">
                    {client.name}
                  </h3>

                  <p className="text-gray-500">{client.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-8 italic">
                "{client.review}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-[var(--color-navy)] px-10 py-14 text-center text-white">
          <h3 className="text-4xl font-bold mb-5">
            Ready to Start Your Dream Project?
          </h3>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg">
            Whether you're building a new home, renovating an existing property
            or planning a commercial project, our experienced team is here to
            help every step of the way.
          </p>

          <button className="mt-8 rounded-full bg-[var(--color-gold)] px-8 py-4 text-lg font-semibold text-white hover:scale-105 transition">
            Request a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
