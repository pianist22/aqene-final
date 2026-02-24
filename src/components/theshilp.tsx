"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    id: "loose-furniture",
    name: "Loose Furniture",
    href: "/products/loose-furniture",
    image: "/products/loose-furniture.jpg",
  },
  {
    id: "vanities",
    name: "Vanities",
    href: "/products/vanities",
    image: "/products/vanities.jpg",
  },
  {
    id: "doors",
    name: "Doors",
    href: "/products/doors",
    image: "/products/doors.jpg",
  },
  {
    id: "millwork",
    name: "Mill Work",
    href: "/products/millwork",
    image: "/products/millwork.jpg",
  },
];

const AUTO_INTERVAL = 5000; // 5 seconds

export default function TheShilpSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % PRODUCTS.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

  // Auto‑slide
  useEffect(() => {
    const id = setInterval(nextSlide, AUTO_INTERVAL);
    return () => clearInterval(id); // cleanup on unmount
  }, []);

  return (
    <section className="w-full bg-[#f4f4f5] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl lg:max-w-7xl xl:max-w-[90rem] px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.18em] uppercase text-[#2f2a25]">
            The{" "}
            <span className="text-[#c1171a]">Shi</span>
            <span className="text-[#2f2a25]">ल्प</span>
          </h2>
          {/* <p className="mt-4 text-sm md:text-base text-[#7a7165] max-w-3xl mx-auto leading-relaxed">
            Clicking on any product vertical will redirect to its dedicated page
            within the Products section.
          </p> */}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* viewport */}
          <div className="overflow-hidden rounded-[32px]">
            {/* track */}
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {PRODUCTS.map((product) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="w-full flex-shrink-0 px-2 md:px-4"
                >
                  <div className="rounded-[32px] overflow-hidden bg-white shadow-[0_18px_45px_rgba(21,19,15,0.18)]">
                    <div className="relative h-[240px] md:h-[320px] lg:h-[360px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="py-4 text-center">
                      <p className="font-serif text-lg text-[#2f2a25]">
                        {product.name}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Left arrow */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white"
            aria-label="Previous product"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-[#2f2a25]"
              aria-hidden="true"
            >
              <path
                d="M15.5 4.5 8 12l7.5 7.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white"
            aria-label="Next product"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-[#2f2a25]"
              aria-hidden="true"
            >
              <path
                d="M8.5 4.5 16 12l-7.5 7.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {PRODUCTS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all ${
                current === index
                  ? "w-6 bg-[#2f2a25]"
                  : "w-2 bg-[#d6d2cc]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
