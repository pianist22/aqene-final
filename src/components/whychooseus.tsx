// "use client";

// const FEATURES = [
//   {
//     id: "technical-excellence",
//     title: "Technical Virtuosity, Proven",
//     description:
//       "Former PMCs and seasoned specialists lead every installation. Complications anticipated. Challenges resolved. Your project. Their vigilance. Period.",
//     icon: "/icons/technical-excellence.png",
//   },
//   {
//     id: "the design Maestros ",
//     title: "The design Maestros ",
//     description:
//       "Before a single cut, we dissect—MEPs, RCPs, structure. Every specification carried through—Shop Drawings. Engineered from the first line",

//     icon: "/icons/on-time-delivery.png",
//   },
//   {
//     id: "with Master Architects",
//     title: "with Master Architects",
//     description:
//       "Decades with the finest on prestige commissions. Trust built quietly, one partnership at a time.",
//     icon: "/icons/complete-customization.png",
//   },
//   {
//     id: "material-mastery",
//     title: "Material Mastery",
//     description:
//       "Curated selection of premium materials, veneers, and finishes. Access to resources that elevate your projects.",
//     icon: "/icons/material-mastery.png",
//   },
// ];

// export default function WhyArchitectsChooseUs() {
//   return (
//     <section className="w-full bg-[#f4f4f5] py-32 lg:py-40">
//       <div className="mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-24">
//         {/* Heading - updated */}
//       <div className="text-center mb-24">
//   <h2 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-[0.1em] text-[#111827] leading-tight">
//     The{" "}
//     <span className="text-[#c1171a]">वा</span>
//     <span className="text-[#111827]">stukar’s Choice</span>
//   </h2>
//   <p className="mt-8 text-xl lg:text-2xl xl:text-3xl text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
//     Precision, reliability, and uncompromising quality in every collaboration.
//   </p>
// </div>

//         {/* Features grid */}
//         <div className="grid gap-24 lg:gap-32 xl:gap-40 md:grid-cols-2 lg:grid-cols-4">
//           {FEATURES.map((feature) => (
//             <article
//               key={feature.id}
//               className="group flex cursor-pointer flex-col items-center text-center
//                          transition-all duration-500 hover:-translate-y-6 hover:scale-[1.02]"
//             >
//               <div
//                 className="mb-12 flex h-48 w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64 items-center justify-center rounded-3xl
//                            border-4 border-[#d1d5db] bg-white shadow-xl
//                            transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#4b5563]"
//               >
//                 <img
//                   src={feature.icon}
//                   alt={feature.title}
//                   className="h-24 w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36 object-contain
//                              transition-all duration-500 group-hover:scale-125 group-hover:rotate-6"
//                 />
//               </div>

//               <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#1f2937] tracking-tight mb-6">
//                 {feature.title}
//               </h3>

//               <p className="mt-2 text-sm lg:text-base leading-tight text-[#6b7280] tracking-wide max-w-none">
//                 {feature.description}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// const FEATURES = [
//   {
//     id: "technical-excellence",
//     title: "Technical Virtuosity, Proven",
//     description:
//       "Former PMCs and seasoned specialists lead every installation. Complications anticipated. Challenges resolved. Your project. Their vigilance. Period.",
//   },
//   {
//     id: "the-design-maestros",
//     title: "The Design Maestros",
//     description:
//       "Before a single cut, we dissect—MEPs, RCPs, structure. Every specification carried through—shop drawings engineered from the first line.",
//   },
//   {
//     id: "with-master-architects",
//     title: "With Master Architects",
//     description:
//       "Decades with the finest on prestige commissions. Trust built quietly, one partnership at a time.",
//   },
//   {
//     id: "Exactitude",
//     title: "Exactitude",
//     description:
//       "Engineered to the tenth of a millimeter. Your drawings, our mandate.",
//   },
//   {
//     id: "Time as Craft",
//     title: "Time as Craft",
//     description:
//       "Your reputation rests on delivery. So does ours. No extensions. No excuses. Just meticulous planning. ",
//   },
//   {
//     id: "material-mastery",
//     title: "Material Master",
//     description:
//       "Rare woods. Museum-grade finishes. Materials that manifest the perspective. Surfaces, lived with.",
//   },
//   {
//     id: " BESPOKE. ",
//     title: "BESPOKE",
//     description:
//       "EBespoke means bespoke.No templates. No limits. You choose. We take care of the rest.",
//   },
// ];

// export default function WhyArchitectsChooseUs() {
//   return (
//     <section className="w-full bg-[#f4f4f5] py-24 lg:py-28">
//       <div className="mx-auto max-w-6xl px-6 lg:px-8">
//         {/* Heading */}
//         <div className="mb-20 text-center">
//           <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.18em] uppercase text-[#2f2a25]">
//             The{" "}
//             <span className="text-[#c1171a]">वा</span>
//             <span className="text-[#2f2a25]">stukar’s Choice</span>
//           </h2>
//           <p className="mt-6 text-sm md:text-base text-[#7a7165] max-w-2xl mx-auto leading-relaxed">
//             Precision, reliability, and uncompromising quality in every collaboration.
//           </p>
//         </div>

//         {/* Features – refined, architectural style */}
//         <div className="grid gap-x-16 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
//           {FEATURES.map((feature, index) => (
//             <article
//               key={feature.id}
//               className={`flex flex-col items-center text-center ${
//                 index === 3 ? "lg:col-span-3" : ""
//               }`}
//             >
//               {/* Small circular badge with diamond, like the reference */}
//               <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#c7b08a] bg-[#f7f3ec]">
//                 <div className="h-3 w-3 rotate-45 bg-[#b48a5a]" />
//               </div>

//               <h3 className="font-serif text-xl md:text-2xl text-[#3b342c] mb-3">
//                 {feature.title}
//               </h3>

//               <p className="text-sm md:text-[15px] leading-relaxed text-[#7a7165] max-w-xs">
//                 {feature.description}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// const FEATURES = [
//   {
//     id: "technical-excellence",
//     title: "Technical Virtuosity, Proven",
//     description:
//       "Former PMCs and seasoned specialists lead every installation. Complications anticipated. Challenges resolved. Your project. Their vigilance. Period.",
//   },
//   {
//     id: "the-design-maestros",
//     title: "The Design Maestros",
//     description:
//       "Before a single cut, we dissect—MEPs, RCPs, structure. Every specification carried through—shop drawings engineered from the first line.",
//   },
//   {
//     id: "with-master-architects",
//     title: "With Master Architects",
//     description:
//       "Decades with the finest on prestige commissions. Trust built quietly, one partnership at a time.",
//   },
//   {
//     id: "Exactitude",
//     title: "Exactitude",
//     description:
//       "Engineered to the tenth of a millimeter. Your drawings, our mandate.",
//   },
//   {
//     id: "Time as Craft",
//     title: "Time as Craft",
//     description:
//       "Your reputation rests on delivery. So does ours. No extensions. No excuses. Just meticulous planning. ",
//   },
//   {
//     id: "material-mastery",
//     title: "Material Master",
//     description:
//       "Rare woods. Museum-grade finishes. Materials that manifest the perspective. Surfaces, lived with.",
//   },
//   {
//     id: " BESPOKE. ",
//     title: "BESPOKE",
//     description:
//       "EBespoke means bespoke.No templates. No limits. You choose. We take care of the rest.",
//   },
// ];

// export default function WhyArchitectsChooseUs() {
//   return (
//     <section className="w-full bg-[#f4f4f5] py-24 lg:py-28">
//       {/* widen container on large screens */}
//       <div className="mx-auto max-w-6xl lg:max-w-7xl xl:max-w-[90rem] px-6 lg:px-10">
//         {/* Heading */}
//         <div className="mb-20 text-center">
//           <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0.18em] uppercase text-[#2f2a25]">
//             The{" "}
//             <span className="text-[#c1171a]">वा</span>
//             <span className="text-[#2f2a25]">stukar’s Choice</span>
//           </h2>
//           <p className="mt-6 text-sm md:text-base lg:text-lg text-[#7a7165] max-w-2xl mx-auto leading-relaxed">
//             Precision, reliability, and uncompromising quality in every collaboration.
//           </p>
//         </div>

//         {/* Features – unchanged for small; larger & more flexible for big screens */}
//         <div className="grid gap-x-16 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {FEATURES.map((feature) => (
//             <article
//               key={feature.id}
//               className="flex flex-col items-center text-center lg:items-start lg:text-left"
//             >
//               {/* Slightly larger badge on lg+ */}
//               <div className="mb-6 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full border border-[#c7b08a] bg-[#f7f3ec]">
//                 <div className="h-3 w-3 lg:h-3.5 lg:w-3.5 rotate-45 bg-[#b48a5a]" />
//               </div>

//               <h3 className="font-serif text-xl md:text-2xl lg:text-[1.6rem] xl:text-2xl text-[#3b342c] mb-3">
//                 {feature.title}
//               </h3>

//               <p className="text-sm md:text-[15px] lg:text-base leading-relaxed text-[#7a7165] max-w-xs lg:max-w-sm">
//                 {feature.description}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

const FEATURES = [
  {
    id: "technical-excellence",
    title: "Technical Virtuosity, Proven",
    description:
      "Former PMCs and seasoned specialists lead every installation. Complications anticipated. Challenges resolved. Your project. Their vigilance. Period.",
    icon: "/icons/technical.svg",
  },
  {
    id: "the-design-maestros",
    title: "The Design Maestros",
    description:
      "Before a single cut, we dissect—MEPs, RCPs, structure. Every specification carried through—shop drawings engineered from the first line.",
    icon: "/icons/design.svg",
  },
  {
    id: "with-master-architects",
    title: "With Master Architects",
    description:
      "Decades with the finest on prestige commissions. Trust built quietly, one partnership at a time.",
    icon: "/icons/architects.svg",
  },
  {
    id: "exactitude",
    title: "Exactitude",
    description:
      "Engineered to the tenth of a millimeter. Your drawings, our mandate.",
    icon: "/icons/exactitude.svg",
  },
  {
    id: "time-as-craft",
    title: "Time as Craft",
    description:
      "Your reputation rests on delivery. So does ours. No extensions. No excuses. Just meticulous planning.",
    icon: "/icons/time.svg",
  },
  {
    id: "material-mastery",
    title: "Material Mastery",
    description:
      "Rare woods. Museum-grade finishes. Materials that manifest the perspective. Surfaces, lived with.",
    icon: "/icons/material.svg",
  },
  {
    id: "bespoke",
    title: "Bespoke",
    description:
      "Bespoke means bespoke. No templates. No limits. You choose. We take care of the rest.",
    icon: "/icons/bespoke.svg",
  },
];

export default function WhyArchitectsChooseUs() {
  return (
    <section className="w-full bg-[#f4f4f5] py-24 lg:py-28">
      <div className="mx-auto max-w-6xl lg:max-w-7xl xl:max-w-[90rem] px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0.18em] uppercase text-[#2f2a25]">
            The{" "}
            <span className="text-[#c1171a]">वा</span>
            <span className="text-[#2f2a25]">stukar’s Choice</span>
          </h2>
          <p className="mt-6 text-sm md:text-base lg:text-lg text-[#7a7165] max-w-2xl mx-auto leading-relaxed">
            Precision, reliability, and uncompromising quality in every collaboration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map((feature) => (
            <article key={feature.id} className="h-full">
              <div
                className="
                  flex h-full flex-col items-center text-center
                  lg:items-start lg:text-left
                  rounded-2xl border border-[#c3c3c4] bg-[#f4f4f5]
                  px-7 py-8 lg:px-8 lg:py-9
                  shadow-[0_10px_35px_rgba(21,19,15,0.08)]
                  hover:shadow-[0_18px_45px_rgba(21,19,15,0.18)]
                  hover:-translate-y-1.5
                  transition-transform transition-shadow duration-300
                "
              >
                {/* Icon badge with per-card SVG from /public */}
                <div className="mb-6 flex h-16 w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full border border-[#c3c3c4] bg-[#f4f4f5]">
                  <img
                    src={feature.icon}
                    alt=""
                    className="h-7 w-7"
                  />
                </div>

                <h3 className="font-serif text-lg md:text-xl lg:text-[1.3rem] xl:text-xl text-[#3b342c] mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm md:text-[15px] lg:text-base leading-relaxed text-[#7a7165] max-w-xs lg:max-w-sm">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
