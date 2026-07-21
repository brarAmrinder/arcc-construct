"use client";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Licensed & Insured",
      desc: "Fully licensed and insured for safe, reliable, and compliant construction.",
      icon: "🛡️",
    },
    {
      title: "10+ Years Experience",
      desc: "Skilled professionals delivering exceptional craftsmanship and expertise.",
      icon: "🏗️",
    },
    {
      title: "On-Time Delivery",
      desc: "Efficient project management ensuring every deadline is achieved.",
      icon: "⏱️",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear communication with honest pricing and no hidden surprises.",
      icon: "💰",
    },
  ];

  return (
    <section
      className="
        relative
        py-28
        px-6
        bg-gray-50
        overflow-hidden
      "
    >
      {/* Background Decoration */}
      <div
        className="
          absolute
          -top-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-[var(--color-gold)]
          opacity-10
          blur-3xl
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          relative
          z-10
        "
      >
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <p
            className="
              text-[var(--color-gold)]
              uppercase
              tracking-[5px]
              font-bold
              text-sm
            "
          >
            Why Choose Us
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-extrabold
              text-[var(--color-navy)]
              mt-5
            "
          >
            Built On Trust
            <span className="text-[var(--color-gold)]"> & Quality</span>
          </h2>

          <p
            className="
              mt-5
              text-gray-600
              max-w-2xl
              mx-auto
              text-lg
            "
          >
            We combine experience, reliability, and modern solutions to deliver
            construction projects that last.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="
            grid
            md:grid-cols-2
            gap-8
          "
        >
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                relative
                bg-white
                rounded-3xl
                p-8
                border
                border-gray-200
                shadow-lg
                overflow-hidden
                transition
              "
            >
              {/* Gold Hover Background */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[var(--color-gold)]
                  opacity-0
                  group-hover:opacity-10
                  transition
                "
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[var(--color-navy)]
                    flex
                    items-center
                    justify-center
                    text-3xl
                    mb-6
                    group-hover:scale-110
                    transition
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[var(--color-navy)]
                    mb-3
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-gray-600
                    leading-relaxed
                  "
                >
                  {item.desc}
                </p>

                {/* Bottom Line */}
                <div
                  className="
                    mt-6
                    h-1
                    w-12
                    bg-[var(--color-gold)]
                    rounded-full
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
