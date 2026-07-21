"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArrowDown } from "lucide-react";

const slides = [
  {
    image: "/img0.png",
    title: "Building Your Dream Home",
    subtitle:
      "Premium residential and commercial construction delivered with quality craftsmanship and attention to detail.",
  },
  {
    image: "/img1.png",
    title: "Quality You Can Trust",
    subtitle:
      "Over 10 years of experience creating beautiful, durable homes across New Zealand.",
  },
  {
    image: "/img2.png",
    title: "Renovations & Extensions",
    subtitle:
      "Transform your existing home with modern renovation and extension solutions.",
  },
  {
    image: "/img4.png",
    title: "Designed Around Your Vision",
    subtitle:
      "From planning to completion, we bring your ideas to life with expert construction services.",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Hero Content */}
          <div className="relative z-20 flex items-center h-full">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <p className="uppercase tracking-[5px] text-[var(--color-gold)] font-semibold mb-4">
                ARC Construction Group
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl">
                {slide.title}
              </h1>

              <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl leading-8">
                {slide.subtitle}
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <button className="bg-[var(--color-gold)] text-[var(--color-navy)] px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
                  Get a Quote
                </button>

                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[var(--color-navy)] transition duration-300">
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-[var(--color-gold)] transition flex items-center justify-center"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-[var(--color-gold)] transition flex items-center justify-center"
      >
        <ChevronRight size={30} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-[var(--color-gold)]"
                : "w-3 h-3 bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 z-30 hidden lg:flex flex-col items-center">
        <div className="h-16 w-px bg-white/60 mb-3"></div>

        <button
          onClick={() =>
            document
              .getElementById("stats")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-12 h-12 rounded-full border border-white/50 backdrop-blur-sm bg-black/20 flex items-center justify-center animate-bounce hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] transition duration-300"
        >
          <ArrowDown size={20} className="text-white" />
        </button>
      </div>
    </section>
  );
}
