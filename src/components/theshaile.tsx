// // "use client";

// // import { useEffect, useRef } from "react";
// // import Link from "next/link";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const PROJECTS = [
// //   {
// //     id: "01",
// //     name: "Artevo Residence Lobby",
// //     tag: "High-Rise Residence",
// //     image: "/projects/lobby.jpg",
// //   },
// //   {
// //     id: "02",
// //     name: "Linea Penthouse",
// //     tag: "Private Penthouse",
// //     image: "/projects/penthouse.jpg",
// //   },
// //   {
// //     id: "03",
// //     name: "Brune Gallery Suite",
// //     tag: "Cultural Space",
// //     image: "/projects/gallery.jpg",
// //   },
// //   {
// //     id: "04",
// //     name: "Oak & Stone Villa",
// //     tag: "Luxury Villa",
// //     image: "/projects/villa.jpg",
// //   },
// //   {
// //     id: "05",
// //     name: "Marble Atrium",
// //     tag: "Corporate HQ",
// //     image: "/projects/atrium.jpg",
// //   },
// //   {
// //     id: "06",
// //     name: "Bespoke Boardroom",
// //     tag: "Workspace",
// //     image: "/projects/boardroom.jpg",
// //   },
// // ];

// // export default function ProjectsSection() {
// //   const sectionRef = useRef<HTMLDivElement | null>(null);
// //   const trackRef = useRef<HTMLDivElement | null>(null);

// //   useEffect(() => {
// //     const section = sectionRef.current;
// //     const track = trackRef.current;
// //     if (!section || !track) return;

// //     const containerWidth = section.clientWidth;
// //     const totalScroll = track.scrollWidth - containerWidth;
// //     if (totalScroll <= 0) return;

// //     const ctx = gsap.context(() => {
// //       // autoplay horizontal movement
// //       const autoTween = gsap.to(track, {
// //         x: -totalScroll,
// //         duration: 30, // slower/faster autoplay
// //         ease: "none",
// //         repeat: -1,
// //         yoyo: true,
// //         paused: true,
// //       });

// //       // start/stop autoplay when section is in view
// //       ScrollTrigger.create({
// //         trigger: section,
// //         start: "top 90%",   // when section is near viewport
// //         end: "bottom 10%",
// //         onEnter: () => autoTween.play(),
// //         onEnterBack: () => autoTween.play(),
// //         onLeave: () => autoTween.pause(),
// //         onLeaveBack: () => autoTween.pause(),
// //       });
// //     }, section);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="py-24 bg-[#f4f4f5] text-slate-900 overflow-hidden"
// //     >
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
// //         <h2 className="mb-12 text-center font-serif text-3xl lg:text-4xl tracking-[0.25em] uppercase text-[#2f2a25]">
// //           The <span className="text-[#c1171a]">शै</span>
// //           <span className="text-[#2f2a25]">lee</span>
// //         </h2>
// //       </div>

// //       {/* Horizontal track */}
// //       <div className="relative">
// //         <div
// //           ref={trackRef}
// //           className="flex gap-6 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32"
// //         >
// //           {PROJECTS.map((project) => (
// //             <article
// //               key={project.id}
// //               onMouseEnter={() => {
// //                 window.dispatchEvent(new Event("cursor-small-enter"));
// //               }}
// //               onMouseLeave={() => {
// //                 window.dispatchEvent(new Event("cursor-small-leave"));
// //               }}
// //               className="group flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[32vw] max-w-[520px] flex flex-col items-center transition-transform duration-300 ease-out hover:-translate-y-2"
// //             >
// //               <div className="w-full max-w-[520px] aspect-[16/9] overflow-hidden rounded-3xl bg-[#d4d4d8]">
// //                 <img
// //                   src={project.image}
// //                   alt={project.name}
// //                   className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
// //                 />
// //               </div>

// //               <div className="mt-6 text-center space-y-1">
// //                 <p className="text-[11px] tracking-[0.2em] uppercase text-[#7a7165]">
// //                   {project.tag}
// //                 </p>
// //                 <p className="text-lg italic text-[#3b342c]">
// //                   {project.name}
// //                 </p>
// //               </div>
// //             </article>
// //           ))}

// //           <div className="flex-shrink-0 w-[20vw] md:w-[15vw] lg:w-[10vw]" />
// //         </div>
// //       </div>

// //       <div className="mt-16 flex justify-center">
// //         <Link href="/projects">
// //           <button
// //             className="inline-flex items-center justify-center
// //                        px-9 py-3
// //                        border border-[#d9d9d4]
// //                        bg-[#d9d9d4]
// //                        text-[11px] font-semibold tracking-[0.18em] uppercase
// //                        text-[#5b554b]
// //                        transition-colors transition-transform duration-200
// //                        hover:bg-[#cbcbc7] hover:border-[#cbcbc7]
// //                        hover:-translate-y-1 
// //                        cursor-pointer"
// //           >
// //             VIEW ALL PROJECTS
// //           </button>
// //         </Link>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const PROJECTS = [
//   {
//     id: "01",
//     name: "Artevo Residence Lobby",
//     tag: "High-Rise Residence",
//     image: "/projects/lobby.jpg",
//   },
//   {
//     id: "02",
//     name: "Linea Penthouse",
//     tag: "Private Penthouse",
//     image: "/projects/penthouse.jpg",
//   },
//   {
//     id: "03",
//     name: "Brune Gallery Suite",
//     tag: "Cultural Space",
//     image: "/projects/gallery.jpg",
//   },
//   {
//     id: "04",
//     name: "Oak & Stone Villa",
//     tag: "Luxury Villa",
//     image: "/projects/villa.jpg",
//   },
//   {
//     id: "05",
//     name: "Marble Atrium",
//     tag: "Corporate HQ",
//     image: "/projects/atrium.jpg",
//   },
//   {
//     id: "06",
//     name: "Bespoke Boardroom",
//     tag: "Workspace",
//     image: "/projects/boardroom.jpg",
//   },
// ];

// export default function ProjectsSection() {
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
//     const cardWidth = firstCard
//       ? firstCard.offsetWidth + 24 // 24px ~ gap
//       : 320;

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
//     <section
//       ref={sectionRef}
//       className="py-24 bg-[#f4f4f5] text-slate-900 overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
//         <h2 className="mb-12 text-center font-serif text-3xl lg:text-4xl tracking-[0.25em] uppercase text-[#2f2a25]">
//           The <span className="text-[#c1171a]">शै</span>
//           <span className="text-[#2f2a25]">lee</span>
//         </h2>
//       </div>

//       {/* Wrapper so arrows can sit over the track */}
//       <div className="relative">
//         {/* Left arrow */}
//         <button
//           type="button"
//           onClick={() => scrollByCard("left")}
//           className="hidden lg:flex absolute left-6 top-1/2 z-20 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[#c7b08a] bg-white/80 text-[#3b342c] shadow-sm hover:bg-white transition"
//           aria-label="Previous projects"
//         >
//           ‹
//         </button>

//         {/* Right arrow */}
//         <button
//           type="button"
//           onClick={() => scrollByCard("right")}
//           className="hidden lg:flex absolute right-6 top-1/2 z-20 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[#c7b08a] bg-white/80 text-[#3b342c] shadow-sm hover:bg-white transition"
//           aria-label="Next projects"
//         >
//           ›
//         </button>

//         {/* Horizontal track */}
//         <div
//           ref={trackRef}
//           className="flex gap-6 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32"
//         >
//           {PROJECTS.map((project) => (
//             <article
//               key={project.id}
//               onMouseEnter={() => {
//                 window.dispatchEvent(new Event("cursor-small-enter"));
//               }}
//               onMouseLeave={() => {
//                 window.dispatchEvent(new Event("cursor-small-leave"));
//               }}
//               className="group flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[32vw] max-w-[520px] flex flex-col items-center transition-transform duration-300 ease-out hover:-translate-y-2"
//             >
//               <div className="w-full max-w-[520px] aspect-[16/9] overflow-hidden rounded-3xl bg-[#d4d4d8]">
//                 <img
//                   src={project.image}
//                   alt={project.name}
//                   className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
//                 />
//               </div>

//               <div className="mt-6 text-center space-y-1">
//                 <p className="text-[11px] tracking-[0.2em] uppercase text-[#7a7165]">
//                   {project.tag}
//                 </p>
//                 <p className="text-lg italic text-[#3b342c]">
//                   {project.name}
//                 </p>
//               </div>
//             </article>
//           ))}

//           <div className="flex-shrink-0 w-[20vw] md:w-[15vw] lg:w-[10vw]" />
//         </div>
//       </div>

//       <div className="mt-16 flex justify-center">
//         <Link href="/projects">
//           <button
//             className="inline-flex items-center justify-center
//                        px-9 py-3
//                        border border-[#d9d9d4]
//                        bg-[#d9d9d4]
//                        text-[11px] font-semibold tracking-[0.18em] uppercase
//                        text-[#5b554b]
//                        transition-colors transition-transform duration-200
//                        hover:bg-[#cbcbc7] hover:border-[#cbcbc7]
//                        hover:-translate-y-1 
//                        cursor-pointer"
//           >
//             VIEW ALL PROJECTS
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: "01",
    name: "Eclectic Minimalism",
    // tag: "High-Rise Residence",
    image: "/projects/lobby.jpg",
    href: "/projects/eclectic-minimalism",
  },
  {
    id: "02",
    name: "Modern Classic",
    // tag: "Private Penthouse",
    image: "/projects/penthouse.jpg",
    href: "/projects/modern_classic",
  },
  {
    id: "03",
    name: "Modern Artistry",
    // tag: "Cultural Space",
    image: "/projects/gallery.jpg",
    href: "/projects/modernartisry",
  },
  {
    id: "04",
    name: "Modern Contemporary",
    // tag: "Luxury Villa",
    image: "/projects/villa.jpg",
    href: "/projects/moderncontemporary",
  },
  {
    id: "05",
    name: "Neo Modern Classic",
    // tag: "Corporate HQ",
    image: "/projects/atrium.jpg",
    href: "/projects/neomodernclassic",
  },
  {
    id: "06",
    name: "Classic Contemporary",
    // tag: "Classic Contemporary",
    image: "/projects/classiccontempoeary.jpg",
    href: "/projects/classiccontemporary",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const autoTweenRef = useRef<gsap.core.Tween | null>(null);
  const maxScrollRef = useRef(0);

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

      {/* Wrapper so arrows can sit over the track */}
      <div className="relative">
        {/* Left arrow */}
        <button
          type="button"
          onClick={() => scrollByCard("left")}
          className="hidden lg:flex absolute left-10 top-1/2 z-20 -translate-y-1/2
                     h-14 w-14 items-center justify-center rounded-full
                     bg-[#dbdbdc]/80 text-white text-2xl
                     shadow-sm hover:bg-[#dbdbdc] transition"
          aria-label="Previous projects"
        >
          ‹
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => scrollByCard("right")}
          className="hidden lg:flex absolute right-10 top-1/2 z-20 -translate-y-1/2
                     h-14 w-14 items-center justify-center rounded-full
                     bg-[#dbdbdc]/80 text-white text-2xl
                     shadow-sm hover:bg-[#dbdbdc] transition"
          aria-label="Next projects"
        >
          ›
        </button>

        {/* Horizontal track */}
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
                {/* <p className="text-[11px] tracking-[0.2em] uppercase text-[#7a7165]">
                  {project.tag}
                </p> */}
                <p className="text-lg italic text-[#3b342c]">
                  {project.name}
                </p>
              </div>
            </Link>
          ))}

          <div className="flex-shrink-0 w-[20vw] md:w-[15vw] lg:w-[10vw]" />
        </div>
      </div>

      {/* Button redirects to main Projects page */}
      <div className="mt-16 flex justify-center">
        <Link href="/projects">
          <button
            type="button"
            className="inline-flex items-center justify-center
                       px-9 py-3
                       border border-[#d9d9d4]
                       bg-[#d9d9d4]
                       text-[11px] font-semibold tracking-[0.18em] uppercase
                       text-[#5b554b]
                       transition-colors transition-transform duration-200
                       hover:bg-[#cbcbc7] hover:border-[#cbcbc7]
                       hover:-translate-y-1 
                       cursor-pointer"
          >
            VIEW ALL PROJECTS
          </button>
        </Link>
      </div>
    </section>
  );
}

