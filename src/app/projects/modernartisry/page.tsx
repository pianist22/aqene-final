// "use client";

// import Link from "next/link";

// const IMAGES = [
//   "/projects/modernartisery/01.jpg",
//   "/projects/modernartisery/02.jpg",
//   "/projects/modernartisery/03.jpg",
//   "/projects/modernartisery/04.jpg",
//   "/projects/modernartisery/05.jpg",
//   "/projects/modernartisery/06.jpg",
//   "/projects/modernartisery/08.jpg",
//   "/projects/modernartisery/07.jpg",
// ];

// export default function modernartisryPage() {
//   return (
//     <main className="min-h-screen w-full bg-[#f4f4f5]">
//       {/* keep top padding so it clears navbar */}
//       <section className="mx-auto max-w-6xl xl:max-w-7xl px-6 lg:px-10 pt-28 sm:pt-32 pb-16">
//         {/* Top bar: title + All Projects button */}
//         <header className="mb-10 flex items-center justify-between gap-4">
//           <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.18em] uppercase text-[#2f2a25]">
//             Modern Artisry
//           </h1>

//           <Link href="/projects">
//             <button
//               className="inline-flex items-center justify-center
//                          px-6 py-2
//                          border border-[#d9d9d4]
//                          bg-[#f4f4f5]
//                          text-[11px] font-semibold tracking-[0.18em] uppercase
//                          text-[#5b554b]
//                          transition-colors transition-transform duration-200
//                          hover:bg-[#dbdbdc] hover:border-[#cbcbc7]
//                          hover:-translate-y-0.5
//                          cursor-pointer"
//             >
//               All Projects
//             </button>
//           </Link>
//         </header>

//         {/* Image grid – fewer columns on large screens, wider cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
//           {IMAGES.map((src, idx) => (
//             <article key={src} className="flex flex-col">
//               <div className="overflow-hidden rounded-3xl bg-[#d4d4d8]">
//                 <img
//                   src={src}
//                   alt={`Modern Artisry ${idx + 1}`}
//                   className="w-full aspect-[3/2] md:aspect-[16/9] object-cover transition-transform duration-500 ease-out hover:scale-105"
//                 />
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
// "use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // Top gallery images for Modern Artistry
// const IMAGES = [
//   "/projects/modernartisery/01.jpg",
//   "/projects/modernartisery/02.jpg",
//   "/projects/modernartisery/03.jpg",
//   "/projects/modernartisery/04.jpg",
//   "/projects/modernartisery/05.jpg",
// ];

// // Shared slider projects with individual routes
// const PROJECTS = [
//   {
//     id: "01",
//     name: "Eclectic Minimalism",
//     // tag: "High-Rise Residence",
//     image: "/projects/lobby.jpg",
//     href: "/projects/eclectic-minimalism",
//   },
//   {
//     id: "02",
//     name: "Modern Classic",
//     // tag: "Private Penthouse",
//     image: "/projects/penthouse.jpg",
//     href: "/projects/modern_classic",
//   },
//   {
//     id: "03",
//     name: "Modern Artistry",
//     // tag: "Cultural Space",
//     image: "/projects/gallery.jpg",
//     href: "/projects/modernartisry",
//   },
//   {
//     id: "04",
//     name: "Modern Contemporary",
//     // tag: "Luxury Villa",
//     image: "/projects/villa.jpg",
//     href: "/projects/moderncontemporary",
//   },
//   {
//     id: "05",
//     name: "Neo Modern Classic",
//     // tag: "Corporate HQ",
//     image: "/projects/atrium.jpg",
//     href: "/projects/neomodernclassic",
//   },
//   {
//     id: "06",
//     name: "Classic Contemporary",
//     // tag: "Classic Contemporary",
//     image: "/projects/classiccontempoeary.jpg",
//     href: "/projects/classiccontemporary",
//   },
// ];

// export default function ModernArtisryPage() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const trackRef = useRef<HTMLDivElement | null>(null);

//   const autoTweenRef = useRef<gsap.core.Tween | null>(null);
//   const maxScrollRef = useRef(0);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const track = trackRef.current;
//     if (!section || !track) return;

//     const containerWidth = section.clientWidth;
//     const totalScroll = track.scrollWidth - containerWidth;
//     if (totalScroll <= 0) return;

//     maxScrollRef.current = totalScroll;

//     const ctx = gsap.context(() => {
//       const autoTween = gsap.to(track, {
//         x: -totalScroll,
//         duration: 30,
//         ease: "none",
//         repeat: -1,
//         yoyo: true,
//         paused: true,
//       });

//       autoTweenRef.current = autoTween;

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top 90%",
//         end: "bottom 10%",
//         onEnter: () => autoTween.play(),
//         onEnterBack: () => autoTween.play(),
//         onLeave: () => autoTween.pause(),
//         onLeaveBack: () => autoTween.pause(),
//       });
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   const scrollByCard = (direction: "left" | "right") => {
//     const track = trackRef.current;
//     if (!track) return;

//     const firstCard = track.querySelector("article") as HTMLElement | null;
//     const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 320;

//     const currentX = (gsap.getProperty(track, "x") as number) || 0;
//     let targetX =
//       direction === "left" ? currentX + cardWidth : currentX - cardWidth;

//     if (targetX > 0) targetX = 0;
//     if (targetX < -maxScrollRef.current) targetX = -maxScrollRef.current;

//     autoTweenRef.current?.pause();

//     gsap.to(track, {
//       x: targetX,
//       duration: 0.6,
//       ease: "power2.out",
//     });
//   };

//   return (
//     <main className="min-h-screen w-full bg-[#f4f4f5]">
//       {/* ===== Modern Artisry grid ===== */}
//       <section className="mx-auto max-w-6xl xl:max-w-7xl px-6 lg:px-10 pt-28 sm:pt-32 pb-16">
//         {/* Top bar: title + All Projects button */}
//         <header className="mb-10 flex items-center justify-between gap-4">
//           <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.18em] uppercase text-[#2f2a25]">
//             Modern Artisry
//           </h1>

//           <Link href="/projects">
//             <button
//               className="inline-flex items-center justify-center
//                          px-6 py-2
//                          border border-[#d9d9d4]
//                          bg-[#f4f4f5]
//                          text-[11px] font-semibold tracking-[0.18em] uppercase
//                          text-[#5b554b]
//                          transition-colors transition-transform duration-200
//                          hover:bg-[#dbdbdc] hover:border-[#cbcbc7]
//                          hover:-translate-y-0.5
//                          cursor-pointer"
//             >
//               All Projects
//             </button>
//           </Link>
//         </header>

//         {/* Image grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
//           {IMAGES.map((src, idx) => (
//             <article key={src} className="flex flex-col">
//               <div className="overflow-hidden rounded-3xl bg-[#d4d4d8]">
//                 <img
//                   src={src}
//                   alt={`Modern Artisry ${idx + 1}`}
//                   className="w-full aspect-[3/2] md:aspect-[16/9] object-cover transition-transform duration-500 ease-out hover:scale-105"
//                 />
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* ===== The शैlee slider ===== */}
//       <section
//         ref={sectionRef}
//         className="py-24 bg-[#f4f4f5] text-slate-900 overflow-hidden"
//       >
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
//           <h2 className="mb-12 text-center font-serif text-3xl lg:text-4xl tracking-[0.25em] uppercase text-[#2f2a25]">
//             The <span className="text-[#c1171a]">शै</span>
//             <span className="text-[#2f2a25]">lee</span>
//           </h2>
//         </div>

//         <div className="relative">
//           {/* Left arrow */}
//           <button
//             type="button"
//             onClick={() => scrollByCard("left")}
//             className="hidden lg:flex absolute left-10 top-1/2 z-20 -translate-y-1/2
//                        h-14 w-14 items-center justify-center rounded-full
//                        bg-[#dbdbdc]/80 text-white text-2xl
//                        shadow-sm hover:bg-[#dbdbdc] transition"
//             aria-label="Previous projects"
//           >
//             ‹
//           </button>

//           {/* Right arrow */}
//           <button
//             type="button"
//             onClick={() => scrollByCard("right")}
//             className="hidden lg:flex absolute right-10 top-1/2 z-20 -translate-y-1/2
//                        h-14 w-14 items-center justify-center rounded-full
//                        bg-[#dbdbdc]/80 text-white text-2xl
//                        shadow-sm hover:bg-[#dbdbdc] transition"
//             aria-label="Next projects"
//           >
//             ›
//           </button>

//           {/* Horizontal track */}
//           <div
//             ref={trackRef}
//             className="flex gap-6 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32"
//           >
//             {PROJECTS.map((project) => (
//               <Link
//                 key={project.id}
//                 href={project.href}
//                 className="group flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[32vw] max-w-[520px]
//                            flex flex-col items-center transition-transform duration-300
//                            ease-out hover:-translate-y-2"
//               >
//                 <div className="w-full max-w-[520px] aspect-[16/9] overflow-hidden rounded-3xl bg-[#d4d4d8]">
//                   <img
//                     src={project.image}
//                     alt={project.name}
//                     className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
//                   />
//                 </div>

//                 <div className="mt-6 text-center space-y-1">
//                   {/* <p className="text-[11px] tracking-[0.2em] uppercase text-[#7a7165]">
//                     {project.tag}
//                   </p> */}
//                   <p className="text-lg italic text-[#3b342c]">
//                     {project.name}
//                   </p>
//                 </div>
//               </Link>
//             ))}

//             <div className="flex-shrink-0 w-[20vw] md:w-[15vw] lg:w-[10vw]" />
//           </div>
//         </div>

//         {/* Back to main projects */}
//         <div className="mt-16 flex justify-center">
//           <Link href="/projects">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center
//                          px-9 py-3
//                          border border-[#d9d9d4]
//                          bg-[#d9d9d4]
//                          text-[11px] font-semibold tracking-[0.18em] uppercase
//                          text-[#5b554b]
//                          transition-colors transition-transform duration-200
//                          hover:bg-[#cbcbc7] hover:border-[#cbcbc7]
//                          hover:-translate-y-1 
//                          cursor-pointer"
//             >
//               VIEW ALL PROJECTS
//             </button>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Top gallery images
const IMAGES = [
  "/projects/modernartisery/01.jpg",
  "/projects/modernartisery/02.jpg",
  "/projects/modernartisery/03.jpg",
  "/projects/modernartisery/04.jpg",
  "/projects/modernartisery/05.jpg",
];

// Shared slider projects
const PROJECTS = [
  {
    id: "01",
    name: "Eclectic Minimalism",
    image: "/projects/lobby.jpg",
    href: "/projects/eclectic-minimalism",
  },
  {
    id: "02",
    name: "Modern Classic",
    image: "/projects/penthouse.jpg",
    href: "/projects/modern_classic",
  },
  {
    id: "03",
    name: "Modern Artistry",
    image: "/projects/gallery.jpg",
    href: "/projects/modernartisry",
  },
  {
    id: "04",
    name: "Modern Contemporary",
    image: "/projects/villa.jpg",
    href: "/projects/moderncontemporary",
  },
  {
    id: "05",
    name: "Neo Modern Classic",
    image: "/projects/atrium.jpg",
    href: "/projects/neomodernclassic",
  },
  {
    id: "06",
    name: "Classic Contemporary",
    image: "/projects/classiccontempoeary.jpg",
    href: "/projects/classiccontemporary",
  },
];

export default function ModernArtisryPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const autoTweenRef = useRef<gsap.core.Tween | null>(null);
  const maxScrollRef = useRef(0);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Disable background scroll when modal open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const containerWidth = section.clientWidth;
    const totalScroll = track.scrollWidth - containerWidth;
    if (totalScroll <= 0) return;

    maxScrollRef.current = totalScroll;

    const ctx = gsap.context(() => {
      const autoTween = gsap.to(track, {
        x: -totalScroll,
        duration: 30,
        ease: "none",
        repeat: -1,
        yoyo: true,
        paused: true,
      });

      autoTweenRef.current = autoTween;

      ScrollTrigger.create({
        trigger: section,
        start: "top 90%",
        end: "bottom 10%",
        onEnter: () => autoTween.play(),
        onEnterBack: () => autoTween.play(),
        onLeave: () => autoTween.pause(),
        onLeaveBack: () => autoTween.pause(),
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollByCard = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector("article") as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 320;

    const currentX = (gsap.getProperty(track, "x") as number) || 0;
    let targetX =
      direction === "left" ? currentX + cardWidth : currentX - cardWidth;

    if (targetX > 0) targetX = 0;
    if (targetX < -maxScrollRef.current) targetX = -maxScrollRef.current;

    autoTweenRef.current?.pause();

    gsap.to(track, {
      x: targetX,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <main className="min-h-screen w-full bg-[#f4f4f5]">

      {/* ===== Modern Artisry Grid ===== */}
      <section className="mx-auto max-w-6xl xl:max-w-7xl px-6 lg:px-10 pt-28 sm:pt-32 pb-16">
        <header className="mb-10 flex items-center justify-between gap-4">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.18em] uppercase text-[#2f2a25]">
            Modern Artisry
          </h1>

          <Link href="/projects">
            <button className="px-6 py-2 border border-[#d9d9d4] bg-[#f4f4f5] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5b554b] hover:bg-[#dbdbdc] transition">
              All Projects
            </button>
          </Link>
        </header>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {IMAGES.map((src, idx) => (
            <article key={src} className="flex flex-col">
              <div
                onClick={() => setSelectedImage(src)}
                className="overflow-hidden rounded-3xl bg-[#d4d4d8] cursor-pointer group"
              >
                <img
                  src={src}
                  alt={`Modern Artisry ${idx + 1}`}
                  className="w-full aspect-[3/2] md:aspect-[16/9] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== MODAL BELOW NAVBAR ===== */}
   {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center px-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-10 text-white text-5xl font-light hover:scale-110 transition"
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ===== The शैlee Slider ===== */}
      <section
        ref={sectionRef}
        className="py-24 bg-[#f4f4f5] text-slate-900 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="mb-12 text-center font-serif text-3xl lg:text-4xl tracking-[0.25em] uppercase text-[#2f2a25]">
            The <span className="text-[#c1171a]">शै</span>
            <span className="text-[#2f2a25]">lee</span>
          </h2>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            className="hidden lg:flex absolute left-10 top-1/2 z-20 -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-[#dbdbdc]/80 text-white text-2xl shadow-sm hover:bg-[#dbdbdc] transition"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => scrollByCard("right")}
            className="hidden lg:flex absolute right-10 top-1/2 z-20 -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-[#dbdbdc]/80 text-white text-2xl shadow-sm hover:bg-[#dbdbdc] transition"
          >
            ›
          </button>

          <div
            ref={trackRef}
            className="flex gap-6 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32"
          >
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[32vw] max-w-[520px] flex flex-col items-center transition-transform duration-300 ease-out hover:-translate-y-2"
              >
                <div className="w-full max-w-[520px] aspect-[16/9] overflow-hidden rounded-3xl bg-[#d4d4d8]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-6 text-center space-y-1">
                  <p className="text-lg italic text-[#3b342c]">
                    {project.name}
                  </p>
                </div>
              </Link>
            ))}

            <div className="flex-shrink-0 w-[20vw] md:w-[15vw] lg:w-[10vw]" />
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/projects">
            <button className="px-9 py-3 border border-[#d9d9d4] bg-[#d9d9d4] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5b554b] hover:bg-[#cbcbc7] transition hover:-translate-y-1">
              VIEW ALL PROJECTS
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}