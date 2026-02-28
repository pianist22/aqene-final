// // app/the-prakriya/page.tsx

// "use client";

// const STEPS = [
//   {
//     id: "01",
//     title: "Initial Consultation & Feasibility",
//     body: [
//       "We begin by studying your architectural drawings and design intent. This phase includes material recommendations & structural feasibility analysis.",
//     ],
//     timeline: "Timeline: 1–2 weeks*",
//     deliverable:
//       "Deliverable: Design review, feasibility report, material palette",
//   },
//   {
//     id: "02",
//     title: "Design Development & Documentation",
//     body: [
//       "We produce detailed CAD drawings, joinery specifications, and finish samples.",
//       "Every dimension, joint, & surface treatment is documented and submitted for your approval.",
//     ],
//     timeline: "Timeline: 2–3 weeks*",
//     deliverable:
//       "Deliverable: Complete technical drawings, material samples",
//   },
//   {
//     id: "03",
//     title: "Prototyping & Refinement",
//     body: [
//       "For complex commissions, we create scale models.",
//       "You see, touch, and approve the exact piece before manufacturing begins. Modifications are welcomed at this stage.",
//     ],
//     timeline: "Timeline: 1–2 weeks*",
//     deliverable: "Deliverable: Physical prototype for sign-off",
//   },
//   {
//     id: "04",
//     title: "Fabrication",
//     body: [
//       "CNC precision for structural integrity. Hand-finishing for soul.",
//       "You receive progress updates with photographic documentation.",
//       "Quality checks occur at every stage—wood selection, joinery, finishing, hardware installation.",
//       "You’re informed. Not surprised.",
//     ],
//     timeline: "Timeline: 6–12 weeks* (scope dependent)",
//     deliverable:
//       "Deliverable: Weekly progress reports, pre-delivery inspection invitation",
//   },
//   {
//     id: "05",
//     title: "Installation & Commissioning",
//     body: [
//       "Our certified installation team handles delivery and placement with surgical precision.",
//       "The final act of craftsmanship—site protection, leveling, and fine adjustments—executed to exactitude.",
//     ],
//     timeline: "Timeline: 3–4 weeks* (project dependent)",
//     deliverable:
//       "Deliverable: As-built documentation, care instructions, warranty",
//   },
// ];

// export default function ThePrakriyaPage() {
//   return (
//     <main className="min-h-screen w-full bg-[#f4f4f5] py-20 lg:py-24">
//       <div className="mx-auto max-w-5xl lg:max-w-6xl px-6 lg:px-10">
//         {/* Heading */}
//         <header className="mb-16 text-center">
//           <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.18em] uppercase text-[#2f2a25]">
//             The{" "}
//             <span className="text-[#c1171a]">प्र</span>
//             <span className="text-[#2f2a25]">kriya</span>
//           </h1>
//           <p className="mt-5 text-sm md:text-base text-[#7a7165] max-w-2xl mx-auto leading-relaxed">
//             A meticulous, end‑to‑end process that protects your design intent
//             while delivering execution at atelier standards.
//           </p>
//         </header>

//         {/* Steps timeline */}
//         <section className="relative space-y-10 md:space-y-12">
//           {/* vertical line */}
//           <div className="pointer-events-none absolute left-6 top-0 bottom-0 hidden md:block">
//             <div className="h-full w-px bg-gradient-to-b from-transparent via-[#000000git] to-transparent" />
//           </div>

//           {STEPS.map((step, index) => (
//             <article
//               key={step.id}
//               className="relative flex gap-6 md:gap-10"
//             >
//               {/* Number badge */}
//               <div className="flex flex-col items-center">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c7b08a] bg-[#c5c5c6] shadow-sm">
//                   <span className="font-mono text-xs tracking-[0.25em] text-[#7a7165]">
//                     {step.id}
//                   </span>
//                 </div>
//               </div>

//               {/* Card */}
//               <div className="flex-1 rounded-2xl border border-[#dfd9cf] bg-[#c5c5c6] px-6 py-6 md:px-8 md:py-7 shadow-[0_14px_40px_rgba(21,19,15,0.08)]">
//                 <h2 className="font-serif text-lg md:text-xl text-[#2f2a25] mb-3">
//                   {step.title}
//                 </h2>

//                 <div className="space-y-2 text-sm md:text-[15px] leading-relaxed text-[#7a7165]">
//                   {step.body.map((paragraph, i) => (
//                     <p key={i}>{paragraph}</p>
//                   ))}
//                 </div>

//                 <div className="mt-4 space-y-1 text-xs md:text-sm font-medium tracking-[0.12em] uppercase text-[#5b554b]">
//                   <p>{step.timeline}</p>
//                   <p>{step.deliverable}</p>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </section>

//         <p className="mt-10 text-[11px] text-center tracking-[0.18em] uppercase text-[#a19b8f]">
//           *Timelines are indicative and may vary by scope and site conditions.
//         </p>
//       </div>
//     </main>
//   );
// }
// app/the-prakriya/page.tsx

// "use client";

// const STEPS = [
//   {
//     id: "01",
//     title: "Initial Consultation & Feasibility",
//     body: [
//       "We begin by studying your architectural drawings and design intent. This phase includes material recommendations & structural feasibility analysis.",
//     ],
//     timeline: "Timeline: 1–2 weeks*",
//     deliverable:
//       "Deliverable: Design review, feasibility report, material palette",
//   },
//   {
//     id: "02",
//     title: "Design Development & Documentation",
//     body: [
//       "We produce detailed CAD drawings, joinery specifications, and finish samples.",
//       "Every dimension, joint, & surface treatment is documented and submitted for your approval.",
//     ],
//     timeline: "Timeline: 2–3 weeks*",
//     deliverable:
//       "Deliverable: Complete technical drawings, material samples",
//   },
//   {
//     id: "03",
//     title: "Prototyping & Refinement",
//     body: [
//       "For complex commissions, we create scale models.",
//       "You see, touch, and approve the exact piece before manufacturing begins. Modifications are welcomed at this stage.",
//     ],
//     timeline: "Timeline: 1–2 weeks*",
//     deliverable: "Deliverable: Physical prototype for sign-off",
//   },
//   {
//     id: "04",
//     title: "Fabrication",
//     body: [
//       "CNC precision for structural integrity. Hand-finishing for soul.",
//       "You receive progress updates with photographic documentation.",
//       "Quality checks occur at every stage—wood selection, joinery, finishing, hardware installation.",
//       "You’re informed. Not surprised.",
//     ],
//     timeline: "Timeline: 6–12 weeks* (scope dependent)",
//     deliverable:
//       "Deliverable: Weekly progress reports, pre-delivery inspection invitation",
//   },
//   {
//     id: "05",
//     title: "Installation & Commissioning",
//     body: [
//       "Our certified installation team handles delivery and placement with surgical precision.",
//       "The final act of craftsmanship—site protection, leveling, and fine adjustments—executed to exactitude.",
//     ],
//     timeline: "Timeline: 3–4 weeks* (project dependent)",
//     deliverable:
//       "Deliverable: As-built documentation, care instructions, warranty",
//   },
// ];

// export default function ThePrakriyaPage() {
//   return (
//     <main className="min-h-screen w-full bg-[#f4f4f5] py-20 lg:py-24">
//       <div className="mx-auto max-w-5xl lg:max-w-6xl px-6 lg:px-10">
//         {/* Heading */}
//         <header className="mb-16 text-center">
//           <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.18em] uppercase text-[#2f2a25]">
//             The{" "}
//             <span className="text-[#c1171a]">प्र</span>
//             <span className="text-[#2f2a25]">kriya</span>
//           </h1>
//           <p className="mt-5 text-base md:text-lg text-[#7a7165] max-w-2xl mx-auto leading-relaxed">
//             A meticulous, end‑to‑end process that protects your design intent
//             while delivering execution at atelier standards.
//           </p>
//         </header>

//         {/* Steps timeline */}
//         <section className="relative space-y-12">
//           {/* vertical line */}

//           {STEPS.map((step, index) => {
//             const isEven = index % 2 === 0; // 0,2,4...

//             return (
//               <article
//                 key={step.id}
//                 className={`
//                   relative flex gap-6 md:gap-10
//                   md:items-start
//                   ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
//                 `}
//               >
//                 {/* Number badge */}
//                {/* Step number – big, no circle */}
// <div className="flex flex-col items-center md:items-start md:mt-1">
//   <span className="font-mono text-3xl md:text-4xl font-semibold tracking-[0.25em] text-black">
//     {step.id}
//   </span>
// </div>


//                 {/* Card */}
//                 <div className="flex-1 rounded-2xl border border-[#e1ddd4] bg-[#e9e8e5] px-7 py-7 md:px-9 md:py-8 shadow-[0_18px_45px_rgba(21,19,15,0.10)]">
//                   <h2 className="font-serif text-xl md:text-2xl text-[#2f2a25] mb-4">
//                     {step.title}
//                   </h2>

//                   <div className="space-y-3 text-sm md:text-base leading-relaxed text-[#625b50]">
//                     {step.body.map((paragraph, i) => (
//                       <p key={i}>{paragraph}</p>
//                     ))}
//                   </div>

//                   <div className="mt-5 space-y-1 text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[#494238]">
//                     <p>{step.timeline}</p>
//                     <p>{step.deliverable}</p>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </section>

//         <p className="mt-12 text-[11px] text-center tracking-[0.18em] uppercase text-[#a19b8f]">
//           *Timelines are indicative and may vary by scope and site conditions.
//         </p>
//       </div>
//     </main>
//   );
// }
// app/the-prakriya/page.tsx

"use client";

const STEPS = [
  {
    id: "01",
    title: "Initial Consultation & Feasibility",
    body: [
      "We begin by studying your architectural drawings and design intent. This phase includes material recommendations & structural feasibility analysis.",
    ],
    timeline: "Timeline: 1–2 weeks*",
    deliverable:
      "Deliverable: Design review, feasibility report, material palette",
  },
  {
    id: "02",
    title: "Design Development & Documentation",
    body: [
      "We produce detailed CAD drawings, joinery specifications, and finish samples.",
      "Every dimension, joint, & surface treatment is documented and submitted for your approval.",
    ],
    timeline: "Timeline: 2–3 weeks*",
    deliverable:
      "Deliverable: Complete technical drawings, material samples",
  },
  {
    id: "03",
    title: "Prototyping & Refinement",
    body: [
      "For complex commissions, we create scale models.",
      "You see, touch, and approve the exact piece before manufacturing begins. Modifications are welcomed at this stage.",
    ],
    timeline: "Timeline: 1–2 weeks*",
    deliverable: "Deliverable: Physical prototype for sign-off",
  },
  {
    id: "04",
    title: "Fabrication",
    body: [
      "CNC precision for structural integrity. Hand-finishing for soul.",
      "You receive progress updates with photographic documentation.",
      "Quality checks occur at every stage—wood selection, joinery, finishing, hardware installation.",
      "You’re informed. Not surprised.",
    ],
    timeline: "Timeline: 6–12 weeks* (scope dependent)",
    deliverable:
      "Deliverable: Weekly progress reports, pre-delivery inspection invitation",
  },
  {
    id: "05",
    title: "Installation & Commissioning",
    body: [
      "Our certified installation team handles delivery and placement with surgical precision.",
      "The final act of craftsmanship—site protection, leveling, and fine adjustments—executed to exactitude.",
    ],
    timeline: "Timeline: 3–4 weeks* (project dependent)",
    deliverable:
      "Deliverable: As-built documentation, care instructions, warranty",
  },
];

export default function ThePrakriyaPage() {
  return (
    <main className="min-h-screen w-full bg-[#f4f4f5] py-20 lg:py-24">
      <div className="mx-auto max-w-5xl lg:max-w-6xl px-6 lg:px-10">
        {/* Heading */}
        <header className="mb-16 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.18em] uppercase text-[#2f2a25]">
            The{" "}
            <span className="text-[#c1171a]">प्र</span>
            <span className="text-[#2f2a25]">kriya</span>
          </h1>
        </header>

        {/* Steps */}
        <section className="space-y-10 md:space-y-12">
          {STEPS.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={step.id}
                className={`
                  flex flex-col md:flex-row md:items-stretch
                  gap-4 md:gap-10
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* Mobile number (above card, centered) */}
                <div className="mb-2 flex justify-center md:hidden">
                  <span className="font-mono text-3xl font-semibold tracking-[0.25em] text-black">
                    {step.id}
                  </span>
                </div>

                {/* Desktop number (side, vertically centered) */}
                <div className="hidden md:flex md:w-24 lg:w-28 justify-center">
                  <span className="self-center font-mono text-3xl md:text-4xl font-semibold tracking-[0.25em] text-black">
                    {step.id}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="
                    flex-1 rounded-2xl border border-[#e1ddd4] bg-[#e9e8e5]
                    px-7 py-7 md:px-9 md:py-8
                    shadow-[0_14px_35px_rgba(21,19,15,0.10)]
                    transition-transform transition-shadow duration-300
                    hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(21,19,15,0.16)]
                    hover:bg-[#f1f0ed]
                    text-center md:text-left
                  "
                >
                  <h2 className="font-serif text-xl md:text-2xl text-[#2f2a25] mb-4">
                    {step.title}
                  </h2>

                  <div className="space-y-3 text-sm md:text-base leading-relaxed text-[#625b50]">
                    {step.body.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-5 space-y-1 text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[#494238]">
                    <p>{step.timeline}</p>
                    <p>{step.deliverable}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

      </div>
    </main>
  );
}
