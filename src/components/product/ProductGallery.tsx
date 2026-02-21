

// "use client";

// import { useState } from "react";
// import { Image } from "@imagekit/next";
// import ImagePreviewModal from "@/components/product/ImagePreviewModal";

// export default function ProductGallery({
//   images,
// }: {
//   images: { id: number; url: string }[];
// }) {
//   const [active, setActive] = useState(images[0]?.url);
//   const [open, setOpen] = useState(false);

//   if (!active) return null;

//   const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

//   return (
//     <div className="">
//       {/* MAIN IMAGE */}
//       <div
//         className="
//           relative
//           aspect-[4/5]
//           bg-[#f4f4f2]   /* ✅ match page background */
//           flex
//           items-center
//           justify-center
//           overflow-hidden
//           mt-[-32]
//         "
//         onClick={() => setOpen(true)}
//       >
//         <div className="w-full h-full p-8">
//           <Image
//             src={active.replace(endpoint, "")}
//             fill
//             alt="Product image"
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>

//       {/* THUMBNAILS */}
//       <div className="flex gap-4 overflow-x-auto pb-1 mt-[-28]">
//         {images.map((img) => {
//           const isActive = active === img.url;

//           return (
//             <button
//               key={img.id}
//               onClick={() => setActive(img.url)}
//               className={`
//                 relative
//                 h-24
//                 w-20
//                 flex-shrink-0
//                 bg-[#f4f4f2]
//                 overflow-hidden
//                 transition-all
//                 duration-300
//                 ${
//                   isActive
//                     ? "ring-1 ring-[#2e2e2e]"
//                     : "hover:ring-1 hover:ring-gray-400"
//                 }
//               `}
//               aria-label="View product image"
//             >
//               <Image
//                 src={img.url.replace(endpoint, "")}
//                 fill
//                 alt="Thumbnail"
//                 className="
//                   object-cover
//                   transition-transform
//                   duration-300
//                   hover:scale-[1.03]
//                 "
//               />
//             </button>
//           );
//         })}
//       </div>

//       {/* IMAGE PREVIEW (OPTIONAL – ENABLE WHEN READY) */}
//       {/* {open && (
//         <ImagePreviewModal
//           src={active}
//           onClose={() => setOpen(false)}
//         />
//       )} */}
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { Image } from "@imagekit/next";
// import ImagePreviewModal from "@/components/product/ImagePreviewModal";

// export default function ProductGallery({
//   images,
// }: {
//   images: { id: number; url: string }[];
// }) {
//   const [index, setIndex] = useState(0);
//   const [open, setOpen] = useState(false);

//   const active = images[index];
//   if (!active) return null;

//   const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

//   const prev = () =>
//     setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

//   const next = () =>
//     setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

//   return (
//     <div className="space-y-6">
//       {/* MAIN IMAGE */}
//       <div className="relative bg-[#f4f4f2] aspect-[4/5] flex items-center justify-center overflow-hidden">
//         {/* LEFT ARROW */}
//         {images.length > 1 && (
//           <button
//             onClick={prev}
//             className="absolute left-4 z-10 text-3xl text-gray-400 hover:text-black transition"
//             aria-label="Previous image"
//           >
//             ‹
//           </button>
//         )}

//         {/* IMAGE */}
//         <div
//           className="w-full h-full p-10 cursor-zoom-in"
//           onClick={() => setOpen(true)}
//         >
//           <Image
//             src={active.url.replace(endpoint, "")}
//             fill
//             alt="Product image"
//             className="object-contain"
//             priority
//           />
//         </div>

//         {/* RIGHT ARROW */}
//         {images.length > 1 && (
//           <button
//             onClick={next}
//             className="absolute right-4 z-10 text-3xl text-gray-400 hover:text-black transition"
//             aria-label="Next image"
//           >
//             ›
//           </button>
//         )}

//         {/* ZOOM ICON */}
//         <button
//           onClick={() => setOpen(true)}
//           className="
//             absolute bottom-4 right-4
//             bg-white/90 backdrop-blur
//             border rounded-full
//             w-10 h-10
//             flex items-center justify-center
//             text-lg
//             hover:bg-white
//             transition
//           "
//           aria-label="Zoom image"
//         >
//           +
//         </button>
//       </div>

//       {/* THUMBNAILS */}
//       {images.length > 1 && (
//         <div className="flex gap-4 overflow-x-auto pb-1">
//           {images.map((img, i) => {
//             const isActive = i === index;

//             return (
//               <button
//                 key={img.id}
//                 onClick={() => setIndex(i)}
//                 className={`
//                   relative
//                   h-24
//                   w-20
//                   flex-shrink-0
//                   bg-[#f4f4f2]
//                   overflow-hidden
//                   transition
//                   ${
//                     isActive
//                       ? "ring-1 ring-black"
//                       : "hover:ring-1 hover:ring-gray-400"
//                   }
//                 `}
//               >
//                 <Image
//                   src={img.url.replace(endpoint, "")}
//                   fill
//                   alt="Thumbnail"
//                   className="object-cover"
//                 />
//               </button>
//             );
//           })}
//         </div>
//       )}

//       {/* FULLSCREEN PREVIEW */}
//       {open && (
//         <ImagePreviewModal
//           src={active.url}
//           onClose={() => setOpen(false)}
//         />
//       )}
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { Image } from "@imagekit/next";

export default function ProductGallery({
  images,
}: {
  images: { id: number; url: string }[];
}) {
  const [index, setIndex] = useState(0);

  const active = images[index];
  if (!active) return null;

  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="space-y-6">
      {/* MAIN IMAGE WITH SIDE ARROWS */}
      <div className="relative flex items-center">
        {/* LEFT CHEVRON */}
        {images.length > 1 && (
          <button
            onClick={prev}
            aria-label="Previous image"
            className="
              absolute
              left-[-10]
              -translate-x-full
              text-gray-400
              text-5xl
              hover:text-gray-700
              transition
            "
          >
            ‹
          </button>
        )}

        {/* IMAGE FRAME */}
        <div className="relative bg-[#f4f4f2] aspect-[4/5] w-full flex items-center justify-center overflow-hidden">
          <div className="w-full h-full p-10">
            <Image
              src={active.url.replace(endpoint, "")}
              fill
              alt="Product image"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT CHEVRON */}
        {images.length > 1 && (
          <button
            onClick={next}
            aria-label="Next image"
            className="
              absolute
              right-[-10]
              translate-x-full
              text-gray-400
              text-5xl
              hover:text-gray-700
              transition
            "
          >
            ›
          </button>
        )}
      </div>

      {/* THUMBNAILS WITH ARROWS */}
      {images.length > 1 && (
        <div className="relative flex items-center">
          {/* LEFT CHEVRON */}
          <button
            onClick={prev}
            aria-label="Previous thumbnails"
            className="
              absolute
              left-[-10]
              -translate-x-full
              text-gray-400
              text-5xl
              hover:text-gray-700
              transition
            "
          >
            ‹
          </button>

          {/* THUMBNAILS */}
          <div className="flex gap-4 overflow-x-auto pb-1">
            {images.map((img, i) => {
              const isActive = i === index;

              return (
                <button
                  key={img.id}
                  onClick={() => setIndex(i)}
                  className={`
                    relative
                    h-24
                    w-20
                    flex-shrink-0
                    bg-[#f4f4f2]
                    overflow-hidden
                    transition
                    ${
                      isActive
                        ? "ring-1 ring-black"
                        : "hover:ring-1 hover:ring-gray-400"
                    }
                  `}
                >
                  <Image
                    src={img.url.replace(endpoint, "")}
                    fill
                    alt="Thumbnail"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT CHEVRON */}
          <button
            onClick={next}
            aria-label="Next thumbnails"
            className="
              absolute
              right-[-10]
              translate-x-full
              text-gray-400
              text-5xl
              hover:text-gray-700
              transition
            "
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
