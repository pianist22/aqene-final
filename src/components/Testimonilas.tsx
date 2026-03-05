// "use client";

// const TESTIMONIALS = [
//   {
//     id: "01",
//     quote: `They called me at 11 PM—not with a problem, but a question. A grain direction detail in our drawings that didn't align with structural logic. Most would've built it wrong and billed us for the fix. They paused everything until we got it right. That's integrity.`,
//     author: "Architect Meera Sachdev",
//     location: "Mumbai",
//   },
//   {
//     id: "02",
//     quote: `I've been practicing for twenty-eight years. I've never—not once—had an execution partner improve my drawings. Their shop drawings came back with a revised joint detail that was both stronger and more elegant. I kept that drawing. I study it sometimes.`,
//     author: "Architect Vikram Malhotra",
//     location: "New Delhi",
//   },
//   {
//     id: "03",
//     quote: `The project was a disaster. Previous vendor had abandoned it half-finished. Timeline shredded. Client threatening legal action. They walked the site, didn't flinch, and said, "We'll finish it." Six weeks later, we handed over. The client wrote me a thank-you note.`,
//     author: "Architect Arjun Bhatt",
//     location: "Dehradun",
//   },
//   {
//     id: "04",
//     quote: `My client cried when she saw the dining table. Not because it was beautiful—though it was—but because they'd matched the wood grain to a piece from her grandfather's estate that we'd sent as reference. No one asked them to do that. They just... understood what mattered.`,
//     author: "Designer Priya Menon",
//     location: "Gurgaon",
//   },
//   {
//     id: "05",
//     quote: `The installation was scheduled during my daughter's wedding week. I told them we'd have to postpone. They said, "We'll work nights." And they did. Silently. Perfectly. The morning after the wedding, the study was complete. My daughter thought it had always been there.`,
//     author: "Mr. Rajesh Khanna",
//     location: "South Mumbai",
//   },
//   {
//     id: "06",
//     quote: `Three European manufacturers told us the console design couldn't be built—the cantilever wouldn't hold. They didn't say "yes" or "no." They said, "Give us two weeks." They built a prototype. Stress-tested it. Sent us a video of their engineer standing on it. Then they asked, "How many do you need?"`,
//     author: "Architect Ananya Iyer",
//     location: "Chandigarh",
//   },
//   {
//     id: "07",
//     quote: `I visited their factory unannounced. Wanted to see how our commission was progressing. The foreman didn't panic—he smiled and walked me through every piece like he was presenting to a museum curator. The pride in his voice... I understood then why everything they make feels permanent.`,
//     author: "Designer Nisha Kapoor",
//     location: "Jaipur",
//   },
//   {
//     id: "08",
//     quote: `We had eight days to deliver a penthouse before the client's arrival from London. Impossible timeline. They didn't promise miracles—they just asked for our priorities. What mattered most. They delivered those first, then kept working. When the client walked in, the first word he said was "perfect." I'll never forget that.`,
//     author: "Interior Architect Rohan Desai",
//     location: "Pune",
//   },
//   {
//     id: "09",
//     quote: `My father built furniture for forty years. Old school—hand tools, no machines. When he visited our new home and saw their work, he ran his hand along a drawer joint for a full minute. Then he looked at me and said one word in Gujarati: "સરસ". Coming from him, that felt reassuring.`,
//     author: "Mr. Sameer Shah",
//     location: "Ahmedabad",
//   },
//   {
//     id: "10",
//     quote: `I run three businesses. I don't have bandwidth for project follow-ups. I told them that in our first meeting. Then, updates arrived proactively—always at decision points, never as problems. Installation happened while I was in Singapore. I saw milestone reports and photos, not chaos. Six months in, every drawer still glides well. No callbacks for adjustments. No need for after-sales.`,
//     author: "Mr. Aditya Verma",
//     location: "Gurugram",
//   },
//   {
//     id: "11",
//     quote: `They delivered on schedule during monsoon season. In Mumbai. The lacquer finish on our paneling? Flawless. Not a single bloom or haze.`,
//     author: "Ar. Meera Deshmukh",
//     location: "Mumbai",
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section className="w-full bg-[#f4f4f5] py-24 lg:py-28">
//       <div className="mx-auto max-w-6xl xl:max-w-7xl px-6 lg:px-10">
//         {/* Heading */}
//         <div className="mb-14 text-center">
//           <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.18em] uppercase text-[#2f2a25] leading-tight">
//             The{" "}
//             <span className="text-[#c1171a]">Sha</span>
//             <span className="text-[#2f2a25]">ब्द</span>
//           </h2>
//           <p className="mt-6 text-sm md:text-base lg:text-lg text-[#7a7165] max-w-3xl mx-auto leading-relaxed">
//             Quiet acknowledgements from architects, designers, and patrons who
//             trust what leaves our काrkhana.
//           </p>
//         </div>

//         {/* Cards grid */}
//         <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
//           {TESTIMONIALS.map((t) => (
//             <article
//               key={t.id}
//               className="flex h-full flex-col rounded-3xl border border-[#e5e7eb] bg-[#fdfbf7] px-7 py-8 shadow-sm hover:shadow-md transition-shadow duration-200"
//             >
//               <p className="text-[11px] tracking-[0.25em] uppercase text-[#b0a38d]">
//                 {t.id.padStart(2, "0")}
//               </p>

//               <div className="mt-3 mb-4">
//                 <span className="text-4xl leading-none text-[#d4c2a1]">“</span>
//               </div>

//               <p className="flex-1 text-sm lg:text-[15px] leading-relaxed text-[#4b4740]">
//                 {t.quote}
//               </p>

//               <div className="mt-6 pt-4 border-t border-[#e5e7eb] text-sm text-[#6b6458]">
//                 <p className="font-semibold text-[#3b342c]">{t.author}</p>
//                 <p className="text-[13px] uppercase tracking-[0.16em]">
//                   {t.location}
//                 </p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useState } from "react";

// const TESTIMONIALS = [
  
//   {
//     id: "01",
//     quote: `They called me at 11 PM—not with a problem, but a question. A grain direction detail in our drawings that didn't align with structural logic. Most would've built it wrong and billed us for the fix. They paused everything until we got it right. That's integrity.`,
//     author: "Architect Meera Sachdev",
//     location: "Mumbai",
//   },
//   {
//     id: "02",
//     quote: `I've been practicing for twenty-eight years. I've never—not once—had an execution partner improve my drawings. Their shop drawings came back with a revised joint detail that was both stronger and more elegant. I kept that drawing. I study it sometimes.`,
//     author: "Architect Vikram Malhotra",
//     location: "New Delhi",
//   },
//   {
//     id: "03",
//     quote: `The project was a disaster. Previous vendor had abandoned it half-finished. Timeline shredded. Client threatening legal action. They walked the site, didn't flinch, and said, "We'll finish it." Six weeks later, we handed over. The client wrote me a thank-you note.`,
//     author: "Architect Arjun Bhatt",
//     location: "Dehradun",
//   },
//   {
//     id: "04",
//     quote: `My client cried when she saw the dining table. Not because it was beautiful—though it was—but because they'd matched the wood grain to a piece from her grandfather's estate that we'd sent as reference. No one asked them to do that. They just... understood what mattered.`,
//     author: "Designer Priya Menon",
//     location: "Gurgaon",
//   },
//   {
//     id: "05",
//     quote: `The installation was scheduled during my daughter's wedding week. I told them we'd have to postpone. They said, "We'll work nights." And they did. Silently. Perfectly. The morning after the wedding, the study was complete. My daughter thought it had always been there.`,
//     author: "Mr. Rajesh Khanna",
//     location: "South Mumbai",
//   },
//   {
//     id: "06",
//     quote: `Three European manufacturers told us the console design couldn't be built—the cantilever wouldn't hold. They didn't say "yes" or "no." They said, "Give us two weeks." They built a prototype. Stress-tested it. Sent us a video of their engineer standing on it. Then they asked, "How many do you need?"`,
//     author: "Architect Ananya Iyer",
//     location: "Chandigarh",
//   },
//   {
//     id: "07",
//     quote: `I visited their factory unannounced. Wanted to see how our commission was progressing. The foreman didn't panic—he smiled and walked me through every piece like he was presenting to a museum curator. The pride in his voice... I understood then why everything they make feels permanent.`,
//     author: "Designer Nisha Kapoor",
//     location: "Jaipur",
//   },
//   {
//     id: "08",
//     quote: `We had eight days to deliver a penthouse before the client's arrival from London. Impossible timeline. They didn't promise miracles—they just asked for our priorities. What mattered most. They delivered those first, then kept working. When the client walked in, the first word he said was "perfect." I'll never forget that.`,
//     author: "Interior Architect Rohan Desai",
//     location: "Pune",
//   },
//   {
//     id: "09",
//     quote: `My father built furniture for forty years. Old school—hand tools, no machines. When he visited our new home and saw their work, he ran his hand along a drawer joint for a full minute. Then he looked at me and said one word in Gujarati: "સરસ". Coming from him, that felt reassuring.`,
//     author: "Mr. Sameer Shah",
//     location: "Ahmedabad",
//   },
//   {
//     id: "10",
//     quote: `I run three businesses. I don't have bandwidth for project follow-ups. I told them that in our first meeting. Then, updates arrived proactively—always at decision points, never as problems. Installation happened while I was in Singapore. I saw milestone reports and photos, not chaos. Six months in, every drawer still glides well. No callbacks for adjustments. No need for after-sales.`,
//     author: "Mr. Aditya Verma",
//     location: "Gurugram",
//   },
//   {
//     id: "11",
//     quote: `They delivered on schedule during monsoon season. In Mumbai. The lacquer finish on our paneling? Flawless. Not a single bloom or haze.`,
//     author: "Ar. Meera Deshmukh",
//     location: "Mumbai",
//   },


// ];

// export default function TestimonialsSection() {
//   const [active, setActive] = useState<(typeof TESTIMONIALS)[number] | null>(
//     null
//   );

//   return (
//     <section className="relative w-full bg-[#f4f4f5] py-24 lg:py-28">
//       <div className={`mx-auto max-w-6xl xl:max-w-7xl px-6 lg:px-10 ${active ? "pointer-events-none blur-sm" : ""}`}>
//         {/* Heading */}
//         <div className="mb-14 text-center">
//           <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.18em] uppercase text-[#2f2a25] leading-tight">
//             The{" "}
//             <span className="text-[#c1171a]">Sha</span>
//             <span className="text-[#2f2a25]">ब्द</span>
//           </h2>
//           <p className="mt-6 text-sm md:text-base lg:text-lg text-[#7a7165] max-w-3xl mx-auto leading-relaxed">
//             Quiet acknowledgements from architects, designers, and patrons who
//             trust what leaves our <span className="text-[#c1171a]">का</span>rkhana.
//           </p>
//         </div>

//         {/* Cards grid */}
//         <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
//           {TESTIMONIALS.map((t) => (
//             <button
//               key={t.id}
//               type="button"
//               onClick={() => setActive(t)}
//               className="group flex h-full flex-col rounded-3xl border border-[#e5e7eb] bg-[#dbdbdc] px-7 py-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c7b08a]/70"
//             >
//               <p className="text-[11px] tracking-[0.25em] uppercase text-[#b0a38d]">
//                 {t.id.toString().padStart(2, "0")}
//               </p>

//               <div className="mt-3 mb-4">
//                 <span className="text-4xl leading-none text-[#d4c2a1] group-hover:text-[#c7b08a] transition-colors">
//                   “
//                 </span>
//               </div>

//               <p className="flex-1 text-sm lg:text-[15px] leading-relaxed text-[#4b4740]">
//                 {t.quote}
//               </p>

//               <div className="mt-6 pt-4 border-t border-[#e5e7eb] text-sm text-[#6b6458]">
//                 <p className="font-semibold text-[#3b342c]">{t.author}</p>
//                 <p className="text-[13px] uppercase tracking-[0.16em]">
//                   {t.location}
//                 </p>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Modal overlay */}
//       {active && (
//         <div
//           className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
//           onClick={() => setActive(null)}
//         >
//           <div
//             className="relative max-w-3xl w-full rounded-3xl bg-[#dbdbdc] px-8 py-10 shadow-2xl border border-[#e5e7eb]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               type="button"
//               onClick={() => setActive(null)}
//               className="absolute right-5 top-5 text-sm uppercase tracking-[0.18em] text-[#7a7165] hover:text-[#3b342c]"
//             >
//               Close
//             </button>

//             <p className="text-[11px] tracking-[0.25em] uppercase text-[#b0a38d]">
//               {active.id.toString().padStart(2, "0")}
//             </p>

//             <div className="mt-3 mb-5">
//               <span className="text-5xl leading-none text-[#d4c2a1]">“</span>
//             </div>

//             <p className="text-base lg:text-lg leading-relaxed text-[#3f3932]">
//               {active.quote}
//             </p>

//             <div className="mt-8 pt-4 border-t border-[#e5e7eb] text-sm text-[#6b6458]">
//               <p className="font-semibold text-[#2f2720]">{active.author}</p>
//               <p className="text-[13px] uppercase tracking-[0.16em]">
//                 {active.location}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TESTIMONIALS = [
//   {
//     id: "01",
//     quote: `They called me at 11 PM—not with a problem, but a question. A grain direction detail in our drawings that didn't align with structural logic. Most would've built it wrong and billed us for the fix. They paused everything until we got it right. That's integrity.`,
//     author: "Architect Meera Sachdev",
//     location: "Mumbai",
//   },
//   {
//     id: "02",
//     quote: `I've never—not once—had an execution partner improve my drawings. Their shop drawings came back stronger and more elegant. I kept that drawing. I study it sometimes.`,
//     author: "Architect Vikram Malhotra",
//     location: "New Delhi",
//   },
//   {
//     id: "03",
//     quote: `Previous vendor abandoned it. Timeline shredded. Client furious. They walked the site and said, "We'll finish it." Six weeks later, we handed over.`,
//     author: "Architect Arjun Bhatt",
//     location: "Dehradun",
//   },
//   {
//     id: "04",
//     quote: `My client cried seeing the dining table—not because it was beautiful, but because they matched the wood grain to her grandfather's estate piece.`,
//     author: "Designer Priya Menon",
//     location: "Gurgaon",
//   },
//   {
//     id: "05",
//     quote: `Installation happened during my daughter's wedding week. They worked nights. Silently. Perfectly.`,
//     author: "Mr. Rajesh Khanna",
//     location: "South Mumbai",
//   },
// ];

// export default function TestimonialsSection() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const trackRef = useRef<HTMLDivElement | null>(null);
//   const autoTweenRef = useRef<gsap.core.Tween | null>(null);

//   /* ================= AUTO SCROLL ================= */
//   useEffect(() => {
//     const section = sectionRef.current;
//     const track = trackRef.current;
//     if (!section || !track) return;

//     const totalWidth = track.scrollWidth / 2;

//     const startAutoScroll = () => {
//       autoTweenRef.current?.kill();

//       autoTweenRef.current = gsap.to(track, {
//         x: `-=${totalWidth}`,
//         duration: 45,
//         ease: "none",
//         repeat: -1,
//         modifiers: {
//           x: (x) => {
//             const value = parseFloat(x);
//             return `${value % totalWidth}px`;
//           },
//         },
//       });
//     };

//     startAutoScroll();

//     ScrollTrigger.create({
//       trigger: section,
//       start: "top 90%",
//       end: "bottom 10%",
//       onEnter: () => autoTweenRef.current?.play(),
//       onEnterBack: () => autoTweenRef.current?.play(),
//       onLeave: () => autoTweenRef.current?.pause(),
//       onLeaveBack: () => autoTweenRef.current?.pause(),
//     });

//     return () => {
//       autoTweenRef.current?.kill();
//     };
//   }, []);

//   /* ================= MANUAL ARROW ================= */
//   const scrollByCard = (direction: "left" | "right") => {
//     const track = trackRef.current;
//     if (!track) return;

//     const firstCard = track.querySelector("article") as HTMLElement | null;
//     const cardWidth = firstCard ? firstCard.offsetWidth + 40 : 500;

//     const totalWidth = track.scrollWidth / 2;
//     const currentX = (gsap.getProperty(track, "x") as number) || 0;

//     let targetX =
//       direction === "left"
//         ? currentX + cardWidth
//         : currentX - cardWidth;

//     if (targetX <= -totalWidth) targetX += totalWidth;
//     if (targetX >= 0) targetX -= totalWidth;

//     autoTweenRef.current?.kill();

//     gsap.to(track, {
//       x: targetX,
//       duration: 1,
//       ease: "power3.out",
//       onComplete: () => {
//         autoTweenRef.current = gsap.to(track, {
//           x: `-=${totalWidth}`,
//           duration: 45,
//           ease: "none",
//           repeat: -1,
//           modifiers: {
//             x: (x) => {
//               const value = parseFloat(x);
//               return `${value % totalWidth}px`;
//             },
//           },
//         });
//       },
//     });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="py-24 bg-[#f4f4f2] overflow-hidden"
//     >
//       {/* HEADING */}
//       <div className="max-w-7xl mx-auto px-6 md:px-16 mb-16">
//         <h2 className="font-serif italic text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.08em] text-[#2f2a25]">
//           The{" "}
//           <span className="text-[#c1171a]">Sha</span>
//           <span className="text-[#2f2a25]">ब्द</span>
//         </h2>
//       </div>

//       <div className="relative">

//         {/* LEFT ARROW */}
//         <button
//           onClick={() => scrollByCard("left")}
//           className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 text-gray-300 hover:text-[#2f2a25] transition"
//         >
//           <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//           </svg>
//         </button>

//         {/* RIGHT ARROW */}
//         <button
//           onClick={() => scrollByCard("right")}
//           className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 text-gray-300 hover:text-[#2f2a25] transition"
//         >
//           <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
//           </svg>
//         </button>

//         {/* TRACK */}
//         <div
//           ref={trackRef}
//           className="flex gap-10 px-8 md:px-16 lg:px-32"
//         >
//           {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
//             <article
//               key={t.id + index}
//               className="flex-shrink-0 w-[85vw] md:w-[55vw] lg:w-[38vw] max-w-[620px]"
//             >
//               <div className="bg-[#dbdbdc] rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500">

//                 <p className="text-[11px] tracking-[0.25em] uppercase text-[#b0a38d] mb-6">
//                   {t.id}
//                 </p>

//                 <p className="text-lg lg:text-xl leading-relaxed text-[#3b342c] font-serif mb-8">
//                   “{t.quote}”
//                 </p>

//                 <div className="border-t border-[#d5d5d5] pt-4">
//                   <p className="font-semibold text-[#2f2720]">
//                     {t.author}
//                   </p>
//                   <p className="text-xs uppercase tracking-[0.2em] text-[#7a7165]">
//                     {t.location}
//                   </p>
//                 </div>

//               </div>
//             </article>
//           ))}

//           <div className="flex-shrink-0 w-[10vw]" />
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TESTIMONIALS = [
//   {
//     id: "01",
//     quote: `They called me at 11 PM—not with a problem, but a question. A grain direction detail didn't align with structural logic. They paused everything until we got it right.`,
//     author: "Architect Meera Sachdev",
//     location: "Mumbai",
//   },
//   {
//     id: "02",
//     quote: `Installation happened during my daughter's wedding week. They worked nights. Silently. Perfectly.`,
//     author: "Mr. Rajesh Khanna",
//     location: "South Mumbai",
//   },
//   {
//     id: "03",
//     quote: `My client cried seeing the dining table—not because it was beautiful, but because they matched the wood grain to her grandfather's estate piece.`,
//     author: "Designer Priya Menon",
//     location: "Gurgaon",
//   },
// ];

// export default function TestimonialsSection() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const trackRef = useRef<HTMLDivElement | null>(null);
//   const autoTweenRef = useRef<gsap.core.Tween | null>(null);

//   /* ================= AUTO SCROLL ================= */
//   useEffect(() => {
//     const section = sectionRef.current;
//     const track = trackRef.current;
//     if (!section || !track) return;

//     const totalWidth = track.scrollWidth / 2;

//     autoTweenRef.current = gsap.to(track, {
//       x: `-=${totalWidth}`,
//       duration: 45,
//       ease: "none",
//       repeat: -1,
//       modifiers: {
//         x: (x) => {
//           const value = parseFloat(x);
//           return `${value % totalWidth}px`;
//         },
//       },
//     });

//     ScrollTrigger.create({
//       trigger: section,
//       start: "top 90%",
//       end: "bottom 10%",
//       onEnter: () => autoTweenRef.current?.play(),
//       onEnterBack: () => autoTweenRef.current?.play(),
//       onLeave: () => autoTweenRef.current?.pause(),
//       onLeaveBack: () => autoTweenRef.current?.pause(),
//     });

//     return () => autoTweenRef.current?.kill();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-24 bg-[#f4f4f2] overflow-hidden"
//     >
//       {/* HEADING */}
//       <div className="max-w-7xl mx-auto px-6 md:px-16 mb-16">
//         <h2 className="font-serif italic text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.08em] text-[#2f2a25]">
//           The <span className="text-[#c1171a]">Sha</span>ब्द
//         </h2>
//       </div>

//       <div className="relative">
//         <div
//           ref={trackRef}
//           className="flex gap-12 px-8 md:px-16 lg:px-32"
//         >
//           {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
//             <article
//               key={t.id + index}
//               className="flex-shrink-0 w-[85vw] md:w-[55vw] lg:w-[40vw] max-w-[640px]"
//             >
//               <div className="h-full min-h-[420px] flex flex-col justify-between bg-[#e8e6e3] rounded-[40px] px-12 py-12 shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3">

//                 {/* Top Content */}
//                 <div>
//                   <p className="text-[20px] tracking-[0.3em] uppercase text-[#b0a38d] mb-2">
//                     {t.id}
//                   </p>

//                   <p className="text-lg lg:text-xl leading-relaxed text-[#3b342c] font-serif">
//                     “{t.quote}”
//                   </p>
//                 </div>

//                 {/* Bottom Author */}
//                 <div>
//                   <div className="h-px bg-[#d8d5d2] my-8"></div>

//                   <p className="font-semibold text-[#2f2720] text-lg">
//                     {t.author}
//                   </p>
//                   <p className="text-xs uppercase tracking-[0.25em] text-[#7a7165] mt-1">
//                     {t.location}
//                   </p>
//                 </div>

//               </div>
//             </article>
//           ))}

//           <div className="flex-shrink-0 w-[10vw]" />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  
  {
    id: "01",
    quote: `They called me at 11 PM—not with a problem, but a question. A grain direction detail in our drawings that didn't align with structural logic. Most would've built it wrong and billed us for the fix. They paused everything until we got it right. That's integrity.`,
    author: "Architect Meera Sachdev",
    location: "Mumbai",
  },
  {
    id: "02",
    quote: `I've been practicing for twenty-eight years. I've never—not once—had an execution partner improve my drawings. Their shop drawings came back with a revised joint detail that was both stronger and more elegant. I kept that drawing. I study it sometimes.`,
    author: "Architect Vikram Malhotra",
    location: "New Delhi",
  },
  {
    id: "03",
    quote: `The project was a disaster. Previous vendor had abandoned it half-finished. Timeline shredded. Client threatening legal action. They walked the site, didn't flinch, and said, "We'll finish it." Six weeks later, we handed over. The client wrote me a thank-you note.`,
    author: "Architect Arjun Bhatt",
    location: "Dehradun",
  },
  {
    id: "04",
    quote: `My client cried when she saw the dining table. Not because it was beautiful—though it was—but because they'd matched the wood grain to a piece from her grandfather's estate that we'd sent as reference. No one asked them to do that. They just... understood what mattered.`,
    author: "Designer Priya Menon",
    location: "Gurgaon",
  },
  {
    id: "05",
    quote: `The installation was scheduled during my daughter's wedding week. I told them we'd have to postpone. They said, "We'll work nights." And they did. Silently. Perfectly. The morning after the wedding, the study was complete. My daughter thought it had always been there.`,
    author: "Mr. Rajesh Khanna",
    location: "South Mumbai",
  },
  {
    id: "06",
    quote: `Three European manufacturers told us the console design couldn't be built—the cantilever wouldn't hold. They didn't say "yes" or "no." They said, "Give us two weeks." They built a prototype. Stress-tested it. Sent us a video of their engineer standing on it. Then they asked, "How many do you need?"`,
    author: "Architect Ananya Iyer",
    location: "Chandigarh",
  },
  {
    id: "07",
    quote: `I visited their factory unannounced. Wanted to see how our commission was progressing. The foreman didn't panic—he smiled and walked me through every piece like he was presenting to a museum curator. The pride in his voice... I understood then why everything they make feels permanent.`,
    author: "Designer Nisha Kapoor",
    location: "Jaipur",
  },
  {
    id: "08",
    quote: `We had eight days to deliver a penthouse before the client's arrival from London. Impossible timeline. They didn't promise miracles—they just asked for our priorities. What mattered most. They delivered those first, then kept working. When the client walked in, the first word he said was "perfect." I'll never forget that.`,
    author: "Interior Architect Rohan Desai",
    location: "Pune",
  },
  {
    id: "09",
    quote: `My father built furniture for forty years. Old school—hand tools, no machines. When he visited our new home and saw their work, he ran his hand along a drawer joint for a full minute. Then he looked at me and said one word in Gujarati: "સરસ". Coming from him, that felt reassuring.`,
    author: "Mr. Sameer Shah",
    location: "Ahmedabad",
  },
  {
    id: "10",
    quote: `I run three businesses. I don't have bandwidth for project follow-ups. I told them that in our first meeting. Then, updates arrived proactively—always at decision points, never as problems. Installation happened while I was in Singapore. I saw milestone reports and photos, not chaos. Six months in, every drawer still glides well. No callbacks for adjustments. No need for after-sales.`,
    author: "Mr. Aditya Verma",
    location: "Gurugram",
  },
  {
    id: "11",
    quote: `They delivered on schedule during monsoon season. In Mumbai. The lacquer finish on our paneling? Flawless. Not a single bloom or haze.`,
    author: "Ar. Meera Deshmukh",
    location: "Mumbai",
  },


];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const autoTweenRef = useRef<gsap.core.Tween | null>(null);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalWidth = track.scrollWidth / 2;

    const startAuto = () => {
      autoTweenRef.current?.kill();

      autoTweenRef.current = gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 45,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const value = parseFloat(x);
            return `${value % totalWidth}px`;
          },
        },
      });
    };

    startAuto();

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
  }, []);

  /* ================= MANUAL ARROWS ================= */
  const scrollByCard = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector("article") as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 48 : 600;

    const totalWidth = track.scrollWidth / 2;
    const currentX = (gsap.getProperty(track, "x") as number) || 0;

    let targetX =
      direction === "left"
        ? currentX + cardWidth
        : currentX - cardWidth;

    if (targetX <= -totalWidth) targetX += totalWidth;
    if (targetX >= 0) targetX -= totalWidth;

    autoTweenRef.current?.kill();

    gsap.to(track, {
      x: targetX,
      duration: 1,
      ease: "power3.out",
      onComplete: () => {
        autoTweenRef.current = gsap.to(track, {
          x: `-=${totalWidth}`,
          duration: 45,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => {
              const value = parseFloat(x);
              return `${value % totalWidth}px`;
            },
          },
        });
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#f4f4f2] overflow-hidden font-futura"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-16">
        <h2 className=" text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.08em] text-[#2f2a25]">
          The <span className="text-[#c1171a]">Sha</span>ब्द
        </h2>
      </div>

      <div className="relative">

        {/* LEFT ARROW */}
        <button
          onClick={() => scrollByCard("left")}
          className="hidden lg:flex absolute left-8 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-30 text-gray-300 hover:text-[#2f2a25] transition-colors duration-300"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scrollByCard("right")}
          className="hidden lg:flex absolute right-8 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 z-30 text-gray-300 hover:text-[#2f2a25] transition-colors duration-300"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
          </svg>
        </button>

        {/* TRACK */}
        <div
          ref={trackRef}
          className="flex gap-12 px-8 md:px-12 lg:px-20"
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
            <article
              key={t.id + index}
              className="flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[35vw]  max-w-[580px]"
            >
              <div className="h-full min-h-[420px] flex flex-col justify-between bg-[#e8e6e3] rounded-[40px] px-12 py-12 shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3">

                <div>
                  <p className="text-[20px] tracking-[0.3em] uppercase text-[#b0a38d] mb-4">
                    {t.id}
                  </p>

                  <p className="text-base lg:text-md leading-relaxed text-[#3b342c] ">
                    “{t.quote}”
                  </p>
                </div>

                <div>
                  <div className="h-px bg-[#d8d5d2] my-2"></div>

                  <p className="font-semibold text-[#2f2720] text-lg">
                    {t.author}
                  </p>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#7a7165] mt-1">
                    {t.location}
                  </p>
                </div>

              </div>
            </article>
          ))}

          <div className="flex-shrink-0 w-[10vw]" />
        </div>
      </div>
    </section>
  );
}