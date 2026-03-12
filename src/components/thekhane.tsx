// "use client";

// const FOUNDERS = [
//   {
//     name: "SANDEEP ",
//     role: "Principal – Design",
//     image: "/founders/founder2.jpeg",
//   },
// ];

// export default function TheKhaaneeSection() {
//   return (
//     <section className="w-full bg-[#f4f4f5] text-[#111827]">
//       <div className="mx-auto max-w-6xl xl:max-w-7xl px-6 lg:px-10 py-24">
//         {/* Big editorial heading */}
//         <div className="mb-12 lg:mb-16">
//           <p className="text-xs tracking-[0.35em] uppercase text-[#9ca3af]">
           
//           </p>
//           <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] tracking-[0.12em] uppercase text-[#2f2a25]">
//              The <span className="text-[#c1171a]">क</span>haanee
//             <br />
            
//             <br />
           
//           </h2>
//           <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-[#6b7280]">
           
//           </p>
//         </div>

//         {/* 2‑column layout: founders left, story right */}
//         <div className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] items-start">
//           {/* Left: two founder images side by side */}
//           <div className="flex flex-col gap-6 md:flex-row">
//             {FOUNDERS.map((founder) => (
//               <article key={founder.name} className="flex-1 flex flex-col">
//                 <div className="overflow-hidden rounded-3xl bg-[#d4d4d8]">
//                   <img
//                     src={founder.image}
//                     alt={founder.name}
//                     className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition duration-500 ease-out"
//                   />
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-sm font-semibold tracking-wide text-[#111827]">
//                     {founder.name}
//                   </p>
//                   <p className="text-xs uppercase tracking-[0.18em] text-[#6b7280]">
//                     {founder.role}
//                   </p>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Right: long story text, like the reference page */}
//           <div className="space-y-4 text-sm md:text-[15px] leading-relaxed text-[#4b5563]">
//             <p>
//               We didn't begin with ambition. We began with immaturity, naivety, and some 
// conviction
//             </p>
//             <p>
//               We made a choice: craft over speed. Integrity over scale. Design indigenization. 
// Value addition with profit. That choice became principle. Principle became 
// practice. Practice became reputation
//             </p>
//             <p>
//               Today, we partner with India's architectural visionaries on prestige 
// commissions—not because we grew large, but because we stayed true.
// Every piece we create carries that one original intent: furniture built not to 
// impress for a season, but to be patrimonial
//             </p>
//             <p>
//               This isn't a business story.
// It's the story of our craft.
// And it continues—one commission, one partnership, one heirloom at a time
//             </p>
//             <p className="mt-6 text-xs uppercase tracking-[0.22em] text-[#6b7280]">
//               — SANDEEP
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// const FOUNDERS = [
//   {
//     name: "SANDEEP",
//     role: "Principal – Design",
//     image: "/founders/founder2.png",
//   },
// ];

// export default function TheKhaaneeSection() {
//   return (
//     <section className="w-full bg-[#f4f4f5] text-[#2f2a25]">
//       <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-32">

//         {/* SECTION HEADING */}
//         <div className="mb-10 font-futura">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-light tracking-[0.12em] uppercase leading-[1.05]">
//             The <span className="text-[#c1171a]">क</span>haanee
//           </h2>
//         </div>

//         {/* MAIN GRID */}
//         <div className="grid lg:grid-cols-[420px_minmax(0,1fr)] gap-14 lg:gap-20 items-start">

//           {/* LEFT — Founder */}
//           <div className="space-y-6">

//             {FOUNDERS.map((founder) => (
//               <div key={founder.name}>

//                 <div className="overflow-hidden rounded-3xl bg-[#d4d4d8]">
//                   <img
//                     src={founder.image}
//                     alt={founder.name}
//                     className="w-full h-[420px] object-cover hover:grayscale-0 transition duration-500"
//                   />
//                 </div>

//                 <div className="mt-5">
//                   <p className="text-sm tracking-[0.15em] uppercase font-medium">
//                     {founder.name}
//                   </p>

//                   <p className="text-xs uppercase tracking-[0.18em] text-[#6b6458] mt-1">
//                     {founder.role}
//                   </p>
//                 </div>

//               </div>
//             ))}

//           </div>

//           {/* RIGHT — STORY */}
//           <div className="font-futura max-w-2xl">

//             <div className="space-y-6 text-[18px] leading-[1.9] text-[#5f5a50]">

//               <p>
//                 We didn't begin with ambition. We began with immaturity,
//                 naivety, and some conviction.
//               </p>

//               <p>
//                 We made a choice: craft over speed. Integrity over scale.
//                 Design indigenization. Value addition with profit. That
//                 choice became principle. Principle became practice.
//                 Practice became reputation.
//               </p>

//               <p>
//                 Today, we partner with India's architectural visionaries
//                 on prestige commissions—not because we grew large, but
//                 because we stayed true. Every piece we create carries that
//                 one original intent: furniture built not to impress for a
//                 season, but to be patrimonial.
//               </p>

//               <p>
//                 This isn't a business story. It's the story of our craft.
//                 And it continues—one commission, one partnership,
//                 one heirloom at a time.
//               </p>

//             </div>

//             {/* SIGNATURE */}
//             <div className="mt-12">
//               <p className="text-sm uppercase tracking-[0.3em] text-[#6b6458]">
//                 — Sandeep
//               </p>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

type Founder = {
  image: string;
};

const FOUNDERS: Founder[] = [
  {
    image: "/founders/founder2.png",
  },
];

export default function TheKhaaneeSection() {
  return (
    <section className="w-full bg-[#f4f4f5] text-[#2f2a25]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-32">

        {/* SECTION HEADING */}
        <div className="mb-10 font-futura">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.12em] uppercase leading-[1.05]">
            The <span className="text-[#c1171a]">क</span>haanee
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[420px_minmax(0,1fr)] gap-14 lg:gap-20 items-start">

          {/* LEFT — Founder Image */}
          <div>
            {FOUNDERS.map((founder, index) => (
              <img
                key={index}
                src={founder.image}
                alt="Founder"
                className="w-[260px] md:w-[320px] h-auto"
              />
            ))}
          </div>

          {/* RIGHT — STORY */}
          <div className="font-futura max-w-2xl">

            <div className="space-y-6 text-[18px] leading-[1.9] text-[#5f5a50]">

              <p>
                We didn't begin with ambition. We began with immaturity,
                naivety, and some conviction.
              </p>

              <p>
                We made a choice: craft over speed. Integrity over scale.
                Design indigenization. Value addition with profit. That
                choice became principle. Principle became practice.
                Practice became reputation.
              </p>

              <p>
                Today, we partner with India's architectural visionaries
                on prestige commissions—not because we grew large, but
                because we stayed true. Every piece we create carries that
                one original intent: furniture built not to impress for a
                season, but to be patrimonial.
              </p>

              <p>
                This isn't a business story. <br />
                It's the story of our craft.<br />
                And it continues—one commission, one partnership,
                one heirloom at a time.
              </p>

            </div>

            {/* SIGNATURE IMAGE */}
            <div className="mt-12">
              <img
                src="/founders/signature.png"
                alt="Signature"
                className="h-10 w-auto"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}