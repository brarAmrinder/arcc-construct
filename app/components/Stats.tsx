"use client";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      number: "150+",
      label: "Projects Completed",
      icon: "🚀",
    },
    {
      number: "10+",
      label: "Years Experience",
      icon: "🏆",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: "⭐",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: "💬",
    },
    {
      number: "50+",
      label: "Happy Clients",
      icon: "🤝",
    },
    {
      number: "15+",
      label: "Technologies Used",
      icon: "💻",
    },
    {
      number: "99%",
      label: "Project Success",
      icon: "📈",
    },
    {
      number: "365",
      label: "Days Active",
      icon: "🔥",
    },
  ];

  return (
    <section
      id="stats"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--color-navy)]
        text-white
        py-24
        flex
        items-center
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-[var(--color-gold)]
          opacity-10
          blur-[120px]
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              text-[var(--color-gold)]
            "
          >
            Our Achievements
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
            Numbers that define our journey and success
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="
                group
                relative
                p-8
                rounded-3xl

                bg-white/10
                backdrop-blur-lg

                border
                border-white/20

                shadow-xl

                cursor-pointer

                transition
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  bg-[var(--color-gold)]
                  opacity-0
                  group-hover:opacity-20
                  blur-xl
                  transition
                "
              />

              <div className="relative z-10 text-center">
                <div
                  className="
                    text-5xl
                    mb-5
                    animate-bounce
                  "
                >
                  {stat.icon}
                </div>

                <h3
                  className="
                    text-4xl
                    md:text-5xl
                    font-extrabold
                    text-[var(--color-gold)]
                  "
                >
                  {stat.number}
                </h3>

                <p
                  className="
                    mt-3
                    text-gray-300
                    text-sm
                    md:text-base
                  "
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
