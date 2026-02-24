// "use client";

// const WORKSHOPS = [
//   {
//     id: "wood-craft",
//     title: "Wood Craft Workshop",
//     image: "/images/karkhana-wood.jpg", // replace with your actual path
//     paragraphs: [
//       "State CNC routers. Panel saws engineered for repeatability. Edge banders that erase imperfection. Spindle molders for functional profiles. Dust extraction systems that preserve craftsman and material.",
//       "But machinery alone builds nothing of consequence.",
//       "The Hand.",
//       "Our master carpenters—decades in apprenticeship, generations in lineage—refine what technology initiates. Joints perfected by hand. Surfaces read by touch. Proportions judged by eye trained over lifetimes.",
//       "Structural integrity not as specification, but as conviction.",
//       "The machine executes. The master completes.",
//     ],
//   },
//   {
//     id: "metal-craft",
//     title: "Metal Craft Workshop",
//     image: "/images/karkhana-metal.jpg",
//     paragraphs: [
//       "Laser cutting systems. CNC press brakes calibrated for controlled bends and clean tolerances. TIG and MIG welding stations for seamless joints. Surface finishing bays—brushed, patinated, powder-coated.",
//       "But metal is not forced.",
//       "The Hand.",
//       "Our metal artisans—trained in structural logic and finish sensibility—guide every junction and edge. Welds dressed to disappear. Edges softened for human contact.",
//       "Load-bearing integrity not assumed, but confirmed.",
//       "The machine forms. The craftsman perfects.",
//     ],
//   },
//   {
//     id: "foam-craft",
//     title: "Foam Craft Workshop",
//     image: "/images/karkhana-foam.jpg",
//     paragraphs: [
//       "Cutting tables. Industrial stitching machines tuned for uniform tension. Foam profiling systems sculpted to ergonomic intent. Material libraries spanning leathers, textiles, and fabrics.",
//       "But comfort cannot be automated.",
//       "The Hand.",
//       "Our upholsterers—versed in proportion, tension, and touch—complete what process begins. Cushioning balanced by feel. Upholstery tuned for longevity.",
//       "Support that holds form, comfort engineered to endure.",
//       "The machine assembles. The artisan finishes.",
//     ],
//   },
//   {
//     id: "surface-craft",
//     title: "Surface Craft Workshop",
//     image: "/images/karkhana-surface.jpg",
//     paragraphs: [
//       "Controlled environments. Isolated spray booths calibrated for consistency. Precision sanding stations for surface uniformity. Multi-stage coating systems—primers, stains, lacquers—applied in exact sequence.",
//       "But finish is not formula.",
//       "The Eye.",
//       "Our finishing specialists work in microns, not margins. Tones layered. Depth built through restraint—each layer allowed to settle, bind, and mature.",
//       "Surfaces finished to be lived with.",
//       "The system prepares. The craftsman resolves.",
//     ],
//   },
//   {
//     id: "final-craft",
//     title: "Final Craft Workshop",
//     image: "/images/karkhana-final.jpg",
//     paragraphs: [
//       "Every piece is fully assembled before it ever leaves the floor. Alignments perfected. Finishes examined under neutral light. Clearances verified. Intent established.",
//       "The Hand.",
//       "Custom crating. Layered protection. Shock-managed packing engineered for distance, climate, and handling. Edges guarded. Surfaces sealed. Hardware catalogued and secured.",
//       "Nothing leaves unfinished. Nothing left to chance.",
//     ],
//   },
// ];

// export default function Thekarkhana() {
//   return (
//     <section className="w-full bg-[#f4f4f5] py-24 lg:py-28">
//       <div className="mx-auto max-w-6xl xl:max-w-7xl px-6 lg:px-10">
//         {/* Heading – Inside The काrkhana */}
//         <div className="mb-16 text-left">
//           <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.18em] uppercase text-[#2f2a25] leading-tight">
//             Inside The{" "}
//             <span className="text-[#c1171a]">का</span>
//             <span className="text-[#2f2a25]">rkhana</span>
//           </h2>
//           <p className="mt-6 text-sm md:text-base lg:text-lg text-[#7a7165] max-w-3xl leading-relaxed">
//             Our 25,000 sq. ft. facility is a constellation of purpose-built
//             workshops—where material, machine, and hand operate in disciplined
//             synchrony.
//           </p>
//         </div>

//         {/* Alternating image/text rows */}
//         <div className="space-y-20 lg:space-y-24">
//           {WORKSHOPS.map((workshop, index) => {
//             const isEven = index % 2 === 0;

//             return (
//               <div
//                 key={workshop.id}
//                 className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-center"
//               >
//                 {/* Image */}
//                 <div
//                   className={`relative w-full h-64 sm:h-72 lg:h-80 xl:h-[22rem] overflow-hidden rounded-3xl bg-[#d4d4d8]
//                   ${!isEven ? "lg:order-2" : ""}`}
//                 >
//                   <img
//                     src={workshop.image}
//                     alt={workshop.title}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>

//                 {/* Text */}
//                 <div
//                   className={`space-y-3 text-[#4b4b4b] ${
//                     !isEven ? "lg:order-1 lg:text-right lg:items-end" : ""
//                   }`}
//                 >
//                   <h3
//                     className={`font-serif text-2xl lg:text-3xl text-[#2f2a25] mb-2 ${
//                       !isEven ? "lg:text-right" : ""
//                     }`}
//                   >
//                     {workshop.title}
//                   </h3>

//                   {workshop.paragraphs.map((para, i) => (
//                     <p
//                       key={i}
//                       className={`text-sm lg:text-base leading-relaxed text-[#6b6458] ${
//                         !isEven ? "lg:ml-auto lg:max-w-xl" : "lg:max-w-xl"
//                       }`}
//                     >
//                       {para}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

const WORKSHOPS = [
  {
    id: "wood-craft",
    title: "Wood Craft Workshop",
    image: "/craftmanship-images/karkhana-wood.jpeg",
    paragraphs: [
      "State CNC routers. Panel saws engineered for repeatability. Edge banders that erase imperfection. Spindle molders for functional profiles. Dust extraction systems that preserve craftsman and material.",
      "But machinery alone builds nothing of consequence.",
      "The Hand.",
      "Our master carpenters—decades in apprenticeship, generations in lineage—refine what technology initiates. Joints perfected by hand. Surfaces read by touch. Proportions judged by eye trained over lifetimes.",
      "Structural integrity not as specification, but as conviction.",
      "The machine executes. The master completes.",
    ],
  },
  {
    id: "metal-craft",
    title: "Metal Craft Workshop",
    image: "/craftmanship-images/karkhana-metal.jpg",
    paragraphs: [
      "Laser cutting systems. CNC press brakes calibrated for controlled bends and clean tolerances. TIG and MIG welding stations for seamless joints. Surface finishing bays—brushed, patinated, powder-coated.",
      "But metal is not forced.",
      "The Hand.",
      "Our metal artisans—trained in structural logic and finish sensibility—guide every junction and edge. Welds dressed to disappear. Edges softened for human contact.",
      "Load-bearing integrity not assumed, but confirmed.",
      "The machine forms. The craftsman perfects.",
    ],
  },
  {
    id: "foam-craft",
    title: "Foam Craft Workshop",
    image: "/craftmanship-images/karkhana-foam.jpeg",
    paragraphs: [
      "Cutting tables. Industrial stitching machines tuned for uniform tension. Foam profiling systems sculpted to ergonomic intent. Material libraries spanning leathers, textiles, and fabrics.",
      "But comfort cannot be automated.",
      "The Hand.",
      "Our upholsterers—versed in proportion, tension, and touch—complete what process begins. Cushioning balanced by feel. Upholstery tuned for longevity.",
      "Support that holds form, comfort engineered to endure.",
      "The machine assembles. The artisan finishes.",
    ],
  },
  {
    id: "surface-craft",
    title: "Surface Craft Workshop",
    image: "/craftmanship-images/karkhana-surface.jpeg",
    paragraphs: [
      "Controlled environments. Isolated spray booths calibrated for consistency. Precision sanding stations for surface uniformity. Multi-stage coating systems—primers, stains, lacquers—applied in exact sequence.",
      "But finish is not formula.",
      "The Eye.",
      "Our finishing specialists work in microns, not margins. Tones layered. Depth built through restraint—each layer allowed to settle, bind, and mature.",
      "Surfaces finished to be lived with.",
      "The system prepares. The craftsman resolves.",
    ],
  },
  {
    id: "final-craft",
    title: "Final Craft Workshop",
    image: "/craftmanship-images/karkhana-final.jpeg",
    paragraphs: [
      "Every piece is fully assembled before it ever leaves the floor. Alignments perfected. Finishes examined under neutral light. Clearances verified. Intent established.",
      "The Hand.",
      "Custom crating. Layered protection. Shock-managed packing engineered for distance, climate, and handling. Edges guarded. Surfaces sealed. Hardware catalogued and secured.",
      "Nothing leaves unfinished. Nothing left to chance.",
    ],
  },
];

export default function Thekarkhana() {
  return (
    <section className="w-full bg-[#f4f4f5] py-24 lg:py-28">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-6 lg:px-10">
        {/* Heading – Inside The काrkhana */}
        <div className="mb-16 text-left">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.18em] uppercase text-[#2f2a25] leading-tight">
            Inside The{" "}
            <span className="text-[#c1171a]">का</span>
            <span className="text-[#2f2a25]">rkhana</span>
          </h2>
          <p className="mt-6 text-sm md:text-base lg:text-lg text-[#7a7165] max-w-3xl leading-relaxed">
            Our 25,000 sq. ft. facility is a constellation of purpose-built
            workshops—where material, machine, and hand operate in disciplined
            synchrony.
          </p>
        </div>

        {/* Alternating image/text rows */}
        <div className="space-y-20 lg:space-y-24">
          {WORKSHOPS.map((workshop, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={workshop.id}
                className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-center"
              >
                {/* Image */}
                <div
                  className={`relative w-full h-64 sm:h-72 lg:h-80 xl:h-[22rem] overflow-hidden rounded-3xl bg-[#d4d4d8]
                  ${!isEven ? "lg:order-2" : ""}`}
                >
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Text – always left aligned, nice width */}
                <div className="space-y-3 text-left">
                  <h3 className="font-serif text-2xl lg:text-3xl text-[#2f2a25] mb-2">
                    {workshop.title}
                  </h3>

                  {workshop.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="text-sm lg:text-base leading-relaxed text-[#6b6458] max-w-xl"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
