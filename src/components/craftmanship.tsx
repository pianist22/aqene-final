// "use client";

// const CAPABILITIES = [
//   "Advanced CNC machining with 0.1mm tolerance",
//   "Traditional hand‑finishing by master craftsmen",
//   "Climate‑controlled manufacturing facility",
//   "In‑house veneer matching and bookmatching",
//   "Custom metalwork and hardware fabrication",
//   "Upholstery and soft furnishing integration",
//   "Full‑scale mock‑ups and prototyping",
//   "Certified installation teams nationwide",
// ];

// export default function CraftsmanshipSection() {
//   return (
//     <section className="w-full bg-[#f4f4f5] py-24 lg:py-28">
//       <div className="mx-auto max-w-7xl lg:max-w-6xl xl:max-w-7xl px-6 lg:px-12">
//         {/* Heading – updated to The काrkhana with color theme */}
//         <div className="mb-14">
//           <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wide leading-tight text-[#111827]">
//             The{" "}
//             <span className="text-[#c1171a]">का</span>
//             <span className="text-[#111827]">rkhana</span>
//           </h2>
//           <p className="mt-4 text-base lg:text-lg text-[#6b7280]">
//             Originality doesn't announce itself. 
// It's built in silence—one joint, one surface, one finish at a time.
// Our workshop is where intention becomes artifact. 
// Where wood is understood before it's touched, and machinery amplifies mastery—
// never replaces it.
// This is how permanence is made
//           </p>
//         </div>

//         {/* Content: big image left, big list right */}
//         <div className="grid gap-14 lg:gap-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] items-start">
//           {/* Large image */}
//           <div className="w-full aspect-[4/3] lg:aspect-[5/4] bg-[#d4d4d8] overflow-hidden rounded-2xl">
//             <img
//               src="/craftsmanship.jpg"
//               alt="Craftsmanship"
//               className="h-full w-full object-cover"
//             />
//           </div>

//           {/* Numbered list */}
//           <div className="divide-y divide-[#e5e7eb] text-left">
//             {CAPABILITIES.map((text, index) => (
//               <div
//                 key={text}
//                 className="group flex cursor-pointer items-center gap-5 py-4 lg:py-5
//                            transition-transform duration-200 hover:-translate-y-1.5"
//               >
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5e7eb]">
//                   <span className="text-sm lg:text-base font-semibold text-[#4b5563]">
//                     {index + 1}
//                   </span>
//                 </div>

//                 <p
//                   className="flex-1 text-sm lg:text-lg leading-relaxed text-[#4b5563]
//                              transition-colors duration-200 group-hover:text-[#111827]"
//                 >
//                   {text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import Link from "next/link";

const CAPABILITIES = [
  "Advanced CNC machining with 0.1mm tolerance",
  "Traditional hand‑finishing by master craftsmen",
  "Climate‑controlled manufacturing facility",
  "In‑house veneer matching and bookmatching",
  "Custom metalwork and hardware fabrication",
  "Upholstery and soft furnishing integration",
  "Full‑scale mock‑ups and prototyping",
  "Certified installation teams nationwide",
];

export default function CraftsmanshipSection() {
  return (
    <section className="w-full bg-[#f4f4f5] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl lg:max-w-6xl xl:max-w-7xl px-6 lg:px-12">
        {/* Heading – The काrkhana */}
        <div className="mb-14">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wide leading-tight text-[#111827]">
            The{" "}
            <span className="text-[#c1171a]">का</span>
            <span className="text-[#111827]">rkhana</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-[#6b7280]">
            Originality doesn't announce itself. It's built in silence—one joint, one
            surface, one finish at a time. Our workshop is where intention becomes
            artifact. Where wood is understood before it's touched, and machinery
            amplifies mastery—never replaces it. This is how permanence is made.
          </p>
        </div>

    {/* Content: image left, list + button right */}
<div className="grid gap-14 lg:gap-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.5fr)] items-start lg:items-stretch">
  {/* Image frame – grows to match list height on lg+ */}
  <div className="w-full h-64 sm:h-80 lg:h-full lg:min-h-[24rem] xl:min-h-[28rem] bg-[#d4d4d8] overflow-hidden rounded-3xl">
    <img
      src="/craftmanship-images/craftsmanship.jpeg"
      alt="Craftsmanship"
      className="h-full w-full object-cover grayscale"
    />
  </div>

  {/* Numbered list + button */}
  <div className="text-left">
    <div className="divide-y divide-[#e5e7eb]">
      {CAPABILITIES.map((text, index) => (
        <div
          key={text}
          className="group flex cursor-pointer items-center gap-5 py-4 lg:py-5
                     transition-transform duration-200 hover:-translate-y-1.5"
        >
          <div className="flex h-10 w-10 lg:h-11 lg:w-11 items-center justify-center rounded-full bg-[#e5e7eb]">
            <span className="text-sm lg:text-base font-semibold text-[#4b5563]">
              {index + 1}
            </span>
          </div>

          <p
            className="flex-1 text-sm lg:text-lg leading-relaxed text-[#4b5563]
                       transition-colors duration-200 group-hover:text-[#111827]"
          >
            {text}
          </p>
        </div>
      ))}
    </div>

            {/* Read More button (same style as earlier sections) */}
       <Link href="/thekarkhana">
              <button
                className="mt-10 inline-flex items-center justify-center
                           px-9 py-3
                           border border-[#d9d9d4]
                           bg-[#f4f4f5]
                           text-[11px] font-semibold tracking-[0.18em] uppercase
                           text-[#5b554b]
                           transition-colors transition-transform duration-200
                           hover:bg-[#dbdbdc] hover:border-[#cbcbc7]
                           hover:-translate-y-1 
                           cursor-pointer"
              >
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
