"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Users,
  Hammer,
  Target,
  Award,
} from "lucide-react";

export default function OurStory() {
  const values = [
    {
      icon: Hammer,
      title: "Quality Craftsmanship",
      desc: "Every project is built with precision, attention to detail, and a commitment to lasting quality.",
    },
    {
      icon: ShieldCheck,
      title: "Trust & Integrity",
      desc: "We believe in honest communication, transparent pricing, and reliable construction solutions.",
    },
    {
      icon: Users,
      title: "Client Focused",
      desc: "Our clients are at the centre of every decision, from initial planning to project completion.",
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "ARC Construction Founded",
      desc: "Started with a vision to deliver reliable and high-quality construction services.",
    },
    {
      year: "2018",
      title: "Growing Our Expertise",
      desc: "Expanded our residential and commercial construction capabilities.",
    },
    {
      year: "2022",
      title: "Premium Project Delivery",
      desc: "Successfully delivered multiple large-scale building and renovation projects.",
    },
    {
      year: "2026",
      title: "Building The Future",
      desc: "Continuing to create exceptional spaces across Auckland and New Zealand.",
    },
  ];

  return (
    <section
      className="
        bg-white
        text-[var(--color-navy)]
        overflow-hidden
      "
    >
      {/* Hero */}

      <div
        className="
          relative
          min-h-[80vh]
          flex
          items-center
          bg-[var(--color-navy)]
          text-white
          px-6
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/40
            to-transparent
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
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              uppercase
              tracking-[5px]
              text-[var(--color-gold)]
              font-semibold
            "
          >
            Our Story
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              mt-6
              text-5xl
              md:text-7xl
              font-extrabold
              max-w-4xl
            "
          >
            Building With
            <span className="text-[var(--color-gold)]"> Integrity</span>,
            Quality & Vision
          </motion.h1>

          <p
            className="
              mt-8
              text-xl
              text-slate-300
              max-w-2xl
              leading-relaxed
            "
          >
            ARC Construction is dedicated to creating exceptional residential
            and commercial spaces through quality workmanship, innovation, and
            trusted partnerships.
          </p>
        </div>
      </div>

      {/* Company Story */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-24
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
                text-[var(--color-gold)]
                uppercase
                tracking-[4px]
                font-bold
              "
            >
              Who We Are
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                mt-4
              "
            >
              More Than Builders.
              <br />
              We Create Spaces.
            </h2>

            <p
              className="
                mt-6
                text-gray-600
                leading-8
                text-lg
              "
            >
              At ARC Construction, we combine modern building techniques with
              traditional craftsmanship to deliver projects that stand the test
              of time.
              <br />
              <br />
              From new home builds and renovations to commercial projects, our
              experienced team manages every stage with professionalism, care,
              and attention to detail.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="
              grid
              grid-cols-2
              gap-6
            "
          >
            {[
              ["10+", "Years Experience"],
              ["150+", "Projects Completed"],
              ["100%", "Commitment"],
              ["24/7", "Support"],
            ].map((item) => (
              <div
                key={item[1]}
                className="
                  rounded-3xl
                  bg-gray-100
                  p-8
                  text-center
                  hover:-translate-y-2
                  transition
                "
              >
                <h3
                  className="
                    text-4xl
                    font-bold
                    text-[var(--color-gold)]
                  "
                >
                  {item[0]}
                </h3>

                <p className="mt-3 text-gray-600">{item[1]}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Values */}

      <section
        className="
          bg-slate-100
          py-24
          px-6
        "
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="
              text-center
              text-5xl
              font-bold
              mb-14
            "
          >
            Our Core Values
          </h2>

          <div
            className="
              grid
              md:grid-cols-3
              gap-8
            "
          >
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-lg
                  hover:-translate-y-3
                  transition
                "
                >
                  <Icon
                    size={45}
                    className="
                    text-[var(--color-gold)]
                  "
                  />

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mt-6
                  "
                  >
                    {value.title}
                  </h3>

                  <p className="mt-4 text-gray-600">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}

      <section
        className="
          py-24
          px-6
        "
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="
              text-5xl
              font-bold
              text-center
              mb-16
            "
          >
            Our Journey
          </h2>

          <div className="space-y-10">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="
                  flex
                  gap-8
                  items-start
                "
              >
                <div
                  className="
                    text-3xl
                    font-bold
                    text-[var(--color-gold)]
                    w-24
                  "
                >
                  {item.year}
                </div>

                <div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
