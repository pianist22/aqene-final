// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const PRODUCTS = [
//   {
//     id: "loose-furniture",
//     name: "Loose Furniture",
//     href: "/products/loose-furniture",
//     image: "/products/loose-furniture.jpg",
//   },
//   {
//     id: "vanities",
//     name: "Vanities",
//     href: "/products/vanities",
//     image: "/products/vanities.jpg",
//   },
//   {
//     id: "doors",
//     name: "Doors",
//     href: "/products/doors",
//     image: "/products/doors.jpg",
//   },
//   {
//     id: "millwork",
//     name: "Mill Work",
//     href: "/products/millwork",
//     image: "/products/millwork.jpg",
//   },
// ];

// const AUTO_INTERVAL = 5000; // 5 seconds

// export default function TheShilpSection() {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () =>
//     setCurrent((prev) => (prev + 1) % PRODUCTS.length);

//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

//   // Auto‑slide
//   useEffect(() => {
//     const id = setInterval(nextSlide, AUTO_INTERVAL);
//     return () => clearInterval(id); // cleanup on unmount
//   }, []);

//   return (
//     <section className="w-full bg-[#f4f4f5] py-20 lg:py-24">
//       <div className="mx-auto max-w-6xl lg:max-w-7xl xl:max-w-[90rem] px-6 lg:px-10">
//         {/* Heading */}
//         <div className="mb-12 text-center">
//           <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.18em] uppercase text-[#2f2a25]">
//             The{" "}
//             <span className="text-[#c1171a]">Shi</span>
//             <span className="text-[#2f2a25]">ल्प</span>
//           </h2>
//           {/* <p className="mt-4 text-sm md:text-base text-[#7a7165] max-w-3xl mx-auto leading-relaxed">
//             Clicking on any product vertical will redirect to its dedicated page
//             within the Products section.
//           </p> */}
//         </div>

//         {/* Carousel */}
//         <div className="relative">
//           {/* viewport */}
//           <div className="overflow-hidden rounded-[32px]">
//             {/* track */}
//             <div
//               className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {PRODUCTS.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={product.href}
//                   className="w-full flex-shrink-0 px-2 md:px-4"
//                 >
//                   <div className="rounded-[32px] overflow-hidden bg-white shadow-[0_18px_45px_rgba(21,19,15,0.18)]">
//                     <div className="relative h-[240px] md:h-[320px] lg:h-[360px]">
//                       <Image
//                         src={product.image}
//                         alt={product.name}
//                         fill
//                         className="object-cover transition-transform duration-500 hover:scale-105"
//                       />
//                     </div>
//                     <div className="py-4 text-center">
//                       <p className="font-serif text-lg text-[#2f2a25]">
//                         {product.name}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Left arrow */}
//           <button
//             type="button"
//             onClick={prevSlide}
//             className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white"
//             aria-label="Previous product"
//           >
//             <svg
//               viewBox="0 0 24 24"
//               className="h-4 w-4 text-[#2f2a25]"
//               aria-hidden="true"
//             >
//               <path
//                 d="M15.5 4.5 8 12l7.5 7.5"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>

//           {/* Right arrow */}
//           <button
//             type="button"
//             onClick={nextSlide}
//             className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white"
//             aria-label="Next product"
//           >
//             <svg
//               viewBox="0 0 24 24"
//               className="h-4 w-4 text-[#2f2a25]"
//               aria-hidden="true"
//             >
//               <path
//                 d="M8.5 4.5 16 12l-7.5 7.5"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="mt-6 flex justify-center gap-2">
//           {PRODUCTS.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               onClick={() => setCurrent(index)}
//               className={`h-1.5 rounded-full transition-all ${
//                 current === index
//                   ? "w-6 bg-[#2f2a25]"
//                   : "w-2 bg-[#d6d2cc]"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import IKImage from "@/components/IkImage";
import { productSections } from "@/config/productSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionData = {
  slug: string;
  title: string;
  folder: string;
  coverUrl: string | null;
};

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const autoTweenRef = useRef<gsap.core.Tween | null>(null);
  const maxScrollRef = useRef(0);

  const [sections, setSections] = useState<SectionData[]>([]);

  /* ================= FETCH IMAGEKIT ================= */
  useEffect(() => {
    const fetchImages = async () => {
      const data = await Promise.all(
        productSections.map(async (section) => {
          const res = await axios.get(
            `/api/imagekit/list`,
            {
              params: {
                folder: `/${section.folder}`,
              },
            }
          );

          const files = res.data;

          const cover = files.find((f: any) =>
            f.filePath.endsWith("/HomePage")
          );

          return {
            ...section,
            coverUrl: cover?.url ?? null
          };
        })
      );

      setSections(data);
    };

    fetchImages();
  }, []);

  /* ================= GSAP AUTO SCROLL ================= */
    // useEffect(() => {
    //   if (!sections.length) return;

    //   const section = sectionRef.current;
    //   const track = trackRef.current;
    //   if (!section || !track) return;

    //   const ctx = gsap.context(() => {

    //     // Because we duplicated content
    //     const totalWidth = track.scrollWidth / 2;

    //     const tween = gsap.to(track, {
    //       x: `-=${totalWidth}`,
    //       duration: 40,
    //       ease: "none",
    //       repeat: -1, // ✅ true infinite
    //       modifiers: {
    //         x: (x) => {
    //           const value = parseFloat(x);
    //           return `${value % totalWidth}px`;
    //         }
    //       },
    //       invalidateOnRefresh: true,
    //     });

    //     autoTweenRef.current = tween;

    //     ScrollTrigger.create({
    //       trigger: section,
    //       start: "top 90%",
    //       end: "bottom 10%",
    //       onEnter: () => tween.play(),
    //       onEnterBack: () => tween.play(),
    //       onLeave: () => tween.pause(),
    //       onLeaveBack: () => tween.pause(),
    //     });

    //   }, section);

    //   return () => ctx.revert();
    // }, [sections]);

  // console.log("Section",sections);

/* ================= GSAP AUTO SCROLL ================= */
useEffect(() => {
  if (!sections.length) return;

  const section = sectionRef.current;
  const track = trackRef.current;
  if (!section || !track) return;

  const totalWidth = track.scrollWidth / 2;

  const startAutoScroll = () => {
    autoTweenRef.current?.kill();

    autoTweenRef.current = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const value = parseFloat(x);
          return `${value % totalWidth}px`;
        }
      }
    });
  };

  startAutoScroll();

  ScrollTrigger.create({
    trigger: section,
    start: "top 90%",
    end: "bottom 10%",
    onEnter: () => autoTweenRef.current?.play(),
    onEnterBack: () => autoTweenRef.current?.play(),
    onLeave: () => autoTweenRef.current?.pause(),
    onLeaveBack: () => autoTweenRef.current?.pause(),
  });

  return () => {
    autoTweenRef.current?.kill();
  };

}, [sections]);
  /* ================= MANUAL ARROW ================= */
  // const scrollByCard = (direction: "left" | "right") => {
  //   const track = trackRef.current;
  //   if (!track) return;

  //   const firstCard = track.querySelector("article") as HTMLElement | null;
  //   const cardWidth = firstCard ? firstCard.offsetWidth + 32 : 400;

  //   const currentX = (gsap.getProperty(track, "x") as number) || 0;
  //   let targetX =
  //     direction === "left" ? currentX + cardWidth : currentX - cardWidth;

  //   if (targetX > 0) targetX = 0;
  //   if (targetX < -maxScrollRef.current)
  //     targetX = -maxScrollRef.current;

  //   autoTweenRef.current?.pause();

  //   gsap.to(track, {
  //     x: targetX,
  //     duration: 0.8,
  //     ease: "power3.out",
  //   });
  // };

  /* ================= MANUAL ARROW (INFINITE) ================= */
const scrollByCard = (direction: "left" | "right") => {
  const track = trackRef.current;
  if (!track) return;

  const firstCard = track.querySelector("article") as HTMLElement | null;
  const cardWidth = firstCard ? firstCard.offsetWidth + 32 : 400;

  const totalWidth = track.scrollWidth / 2;
  const currentX = (gsap.getProperty(track, "x") as number) || 0;

  let targetX =
    direction === "left"
      ? currentX + cardWidth
      : currentX - cardWidth;

  // Infinite wrap
  if (targetX <= -totalWidth) targetX += totalWidth;
  if (targetX >= 0) targetX -= totalWidth;

  // 🔥 Kill current infinite tween completely
  autoTweenRef.current?.kill();

  // Manual smooth movement
  gsap.to(track, {
    x: targetX,
    duration: 1,
    ease: "power3.out",
    onComplete: () => {

      // 🔥 Restart infinite scroll FROM NEW POSITION
      autoTweenRef.current = gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 40,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const value = parseFloat(x);
            return `${value % totalWidth}px`;
          }
        }
      });

    }
  });
};

  return (
    <section
      ref={sectionRef}
      className="py-14 bg-[#f4f4f2] overflow-hidden"
    >
      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-16">
          <h2 className="font-futura uppercase text-2xl md:text-3xl lg:text-4xl  tracking-[0.08em] text-[#2f2a25]">
             The{" "}
             <span className="text-[#2f2a25]">Shi</span>
             <span className="text-[#c1171a]">ल्प</span>
           </h2>
      </div>

      <div className="relative">

      {/* LEFT ARROW */}
      <button
        type="button"
        onClick={() => scrollByCard("left")}
        className="
          hidden lg:flex
          absolute
          left-8 md:left-12 lg:left-20
          top-1/2 -translate-y-1/2
          z-30
          items-center justify-center
          text-gray-200
           hover:text-[#2f2a25]
          transition-colors duration-300
        "
        aria-label="Previous projects"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* RIGHT ARROW */}
      <button
        type="button"
        onClick={() => scrollByCard("right")}
        className="
          hidden lg:flex
          absolute
          right-8 md:right-12 lg:right-20
          top-1/2 -translate-y-1/2
          z-30
          items-center justify-center
          text-gray-200
          hover:text-[#2f2a25]
          transition-colors duration-300
        "
        aria-label="Next projects"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
        </svg>
      </button>

        {/* TRACK */}
        <div
          ref={trackRef}
          className="flex gap-8 px-8 md:px-16 lg:px-32"
        >
          {[...sections, ...sections].map((section, index) => (
            <Link
              key={section.slug + index}
              href={`/products/${section.slug}`}
              className="group flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[32vw] max-w-[540px]"
            >
              <article className="flex flex-col">

                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm bg-[#e9e9e7]">
                  <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]">

                    {section.coverUrl && (
                      <IKImage
                        src={section.coverUrl}  
                        alt={section.title}
                      />
                    )}

                  </div>

                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <h3 className="mt-6 text-[20px] md:text-[24px] font-futura uppercase tracking-wide text-[#3a3a3a] group-hover:text-[#873807] transition-colors text-center">
                  {section.title}
                </h3>

              </article>
            </Link>
          ))}

          <div className="flex-shrink-0 w-[10vw]" />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/products">
                <button className="mt-10 inline-flex items-center justify-center px-12 py-4 rounded-full border border-[#2f2a25] bg-transparent text-[13px] font-futura font-semibold  text-[#2f2a25] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[2px] tracking-[0.16em] ">
                  VIEW ALL PRODUCTS
                </button>
        </Link>
      </div>
    </section>
  );
}
