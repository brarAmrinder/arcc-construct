"use client";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  User,
  MessageSquare,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Contact() {
  const contactItems = [
    {
      icon: Phone,
      title: "Phone",
      value: "+64 20 0000 0000",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@arccconstruction.co.nz",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Auckland, New Zealand",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Fri | 8:00 AM - 5:00 PM",
    },
  ];

  return (
    <section
      className="
        relative
        py-28
        bg-slate-100
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          bg-[var(--color-gold)]
          opacity-10
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          relative
          z-10
        "
      >
        {/* Header */}
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
          className="text-center mb-16"
        >
          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-[var(--color-gold)]
              text-white
              text-sm
              font-semibold
              uppercase
              tracking-widest
            "
          >
            Free Consultation
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-extrabold
              text-[var(--color-navy)]
            "
          >
            Let's Build
            <span className="text-[var(--color-gold)]"> Something Great</span>
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
            Have a construction idea? Share your vision with us and our experts
            will provide professional guidance and a free project estimate.
          </p>
        </motion.div>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
          "
        >
          {/* FORM */}

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
            className="
              bg-white
              rounded-[2rem]
              shadow-2xl
              p-8
              md:p-10
              border
              border-gray-100
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                text-[var(--color-navy)]
              "
            >
              Request A Quote
            </h3>

            <p className="text-gray-500 mt-2 mb-8">
              Fill in the details below. We usually respond within 24 hours.
            </p>

            <form className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="relative mt-2">
                  <User
                    className="
                      absolute
                      left-4
                      top-4
                      text-gray-400
                    "
                    size={20}
                  />

                  <input
                    placeholder="John Smith"
                    className="
                      w-full
                      rounded-xl
                      border
                      p-4
                      pl-12
                      outline-none
                      focus:border-[var(--color-gold)]
                      transition
                    "
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    p-4
                    outline-none
                    focus:border-[var(--color-gold)]
                  "
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                  placeholder="+64..."
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    p-4
                    outline-none
                    focus:border-[var(--color-gold)]
                  "
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Project Details
                </label>

                <div className="relative mt-2">
                  <MessageSquare
                    className="
                      absolute
                      left-4
                      top-4
                      text-gray-400
                    "
                  />

                  <textarea
                    rows="5"
                    placeholder="
Describe your renovation, new build, or commercial project..."
                    className="
                      w-full
                      rounded-xl
                      border
                      p-4
                      pl-12
                      resize-none
                      outline-none
                      focus:border-[var(--color-gold)]
                    "
                  />
                </div>
              </div>

              <button
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3
                  bg-[var(--color-gold)]
                  text-white
                  py-4
                  rounded-xl
                  font-bold
                  hover:scale-[1.03]
                  transition
                  shadow-lg
                "
              >
                Send Request
                <ArrowRight size={20} />
              </button>
            </form>
          </motion.div>

          {/* CONTACT CARD */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              bg-[var(--color-navy)]
              rounded-[2rem]
              p-10
              text-white
              shadow-2xl
              relative
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                -right-20
                -top-20
                w-72
                h-72
                rounded-full
                bg-[var(--color-gold)]
                opacity-20
                blur-3xl
              "
            />

            <h3 className="text-3xl font-bold relative">
              Let's Discuss Your Project
            </h3>

            <p
              className="
                text-slate-300
                mt-5
                leading-relaxed
                relative
              "
            >
              From residential builds to commercial developments, our team
              provides reliable construction solutions from concept to
              completion.
            </p>

            <div className="mt-10 space-y-7 relative">
              {contactItems.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    gap-5
                    items-center
                  "
                >
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-white/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <item.icon />
                  </div>

                  <div>
                    <h4 className="font-bold">{item.title}</h4>

                    <p className="text-slate-300 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="
                mt-12
                bg-white/10
                rounded-2xl
                p-5
              "
            >
              <p className="text-sm text-slate-200">
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
