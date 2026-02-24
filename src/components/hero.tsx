// "use client";

// import { useEffect, useState } from "react";

// const slides = [
//   "/hero-1.jpg",
//   "/hero-2.jpg",
//   "/hero-3.jpg",
//   "/hero-4.jpg",
//   "/hero-5.jpg",
// ];

// const SLIDE_INTERVAL = 5000; // 5 seconds

// export default function Luxuryhero() {
//   const [current, setCurrent] = useState(0);

//   // Auto‑play
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, SLIDE_INTERVAL);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Background slideshow */}
//       {slides.map((src, index) => (
//         <img
//           key={src}
//           src={src}
//           alt={`Luxury slide ${index + 1}`}
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
//           ${index === current ? "opacity-100" : "opacity-0"}`}
//         />
//       ))}

//       {/* Dark gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

//       {/* Text overlay */}
//       <div className="relative z-10 flex h-full items-center justify-center px-4">
//         <h1 className="text-center text-3xl sm:text-5xl lg:text-6xl tracking-[0.25em] uppercase text-white">
//           LUXURY{" "}
//           <span className="block mt-3 text-2xl sm:text-4xl lg:text-5xl tracking-[0.3em]">
//             FURNITURE<span className="ml-2">Collection</span>
//           </span>
//         </h1>
//       </div>

//       {/* Dots (position indicator) */}
//       <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`h-3 w-3 rounded-full border border-white/60 transition
//             ${index === current ? "bg-white" : "bg-white/20 hover:bg-white/60"}`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  "/Hero-images/hero-1.jpeg",
  "/Hero-images/hero-2.jpeg",
  "/Hero-images/hero-3.jpeg",
  "/Hero-images/hero-4.jpeg",
  "/Hero-images/hero-5.jpeg",
];

const SLIDE_INTERVAL = 5000; // 5 seconds

export default function LuxuryHeroWithDiscover() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      SLIDE_INTERVAL
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full">
      {/* HERO SECTION (same as before) */}
      <section className="relative w-full h-screen overflow-hidden">
        {slides.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Luxury slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <h1 className="text-center text-3xl sm:text-5xl lg:text-6xl tracking-[0.25em] uppercase text-white">
            LUXURY{" "}
            <span className="block mt-3 text-2xl sm:text-4xl lg:text-5xl tracking-[0.3em]">
              FURNITURE<span className="ml-2">Collection</span>
            </span>
          </h1>
        </div>

        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full border border-white/60 transition ${
                index === current
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* DISCOVER COMPANY SECTION (updated) */}
      <section className="w-full bg-[#f4f4f5] py-20">
        {/* left‑aligned block */}
        <div className="ml-6 lg:ml-16 max-w-xl px-0">
          <p className="text-[22px] leading-relaxed text-[#6b655d] font-bold">
            Architects design it. We build it and install it.
          </p>

           <Link href="/about-us">   {/* <-- target route here */}
            <button
              className="mt-10 inline-flex items-center justify-center
                         px-9 py-3
                         border border-[#d9d9d4]
                         bg-[#f4f4f5]
                         text-[11px] font-semibold tracking-[0.18em] uppercase
                         text-[#5b554b]
                         transition-colors transition-transform duration-200
                         hover:bg-[#cbcbc7] hover:border-[#cbcbc7]
                         hover:-translate-y-1 
                         cursor-pointer"
            >
              READ MORE
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
