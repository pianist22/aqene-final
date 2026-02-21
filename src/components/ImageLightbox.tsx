// "use client";

// import { useEffect } from "react";
// import IkImageNatural from "@/components/IkImageNatural";

// type Props = {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
//   onClose: () => void;
// };

// export default function ImageLightbox({
//   src,
//   alt,
//   width,
//   height,
//   onClose,
// }: Props) {
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [onClose]);

//   return (
//     <div className="fixed inset-0 z-50 bg-black/95">
//       {/* Close button */}
//       <button
//         onClick={onClose}
//         className="
//           fixed top-6 right-6 z-60
//           text-white text-3xl
//           opacity-80 hover:opacity-100
//           transition
//         "
//       >
//         ✕
//       </button>

//       {/* Scroll container */}
//       <div
//         className="absolute inset-0 overflow-auto px-6 py-16 md:px-16"
//         onClick={onClose}
//       >
//         <div
//           className="mx-auto w-fit max-w-none"
//           onClick={e => e.stopPropagation()}
//         >
//           <IkImageNatural
//             src={src}
//             alt={alt}
//             width={width}
//             height={height}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect } from "react";
// import IkImageNatural from "@/components/IkImageNatural";

// const NAVBAR_HEIGHT = 80; // px

// type Props = {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
//   onClose: () => void;
// };

// export default function ImageLightbox({
//   src,
//   alt,
//   width,
//   height,
//   onClose,
// }: Props) {
//   /* ESC key support */
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [onClose]);

//   return (
//     <div
//       className="
//         fixed
//         left-0
//         right-0
//         bottom-0
//         bg-black/95
//         z-[50]
//       "
//       style={{ top: NAVBAR_HEIGHT }}
//       onClick={onClose}
//     >
//       {/* CLOSE BUTTON */}
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           onClose();
//         }}
//         className="
//           fixed
//           text-white
//           text-3xl
//           opacity-80
//           hover:opacity-100
//           transition
//           z-[60]
//         "
//         style={{
//           top: NAVBAR_HEIGHT + 16,
//           right: 24,
//         }}
//         aria-label="Close image preview"
//       >
//         ✕
//       </button>

//       {/* SCROLLABLE CONTENT */}
//       <div
//         className="
//           w-full
//           h-full
//           overflow-auto
//           px-6
//           py-20
//           md:px-16
//           flex
//           justify-center
//         "
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="w-fit max-w-none">
//           <IkImageNatural
//             src={src}
//             alt={alt}
//             width={width}
//             height={height}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect } from "react";
// import IkImageNatural from "@/components/IkImageNatural";

// const NAVBAR_HEIGHT = 75; // px

// type Props = {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
//   onClose: () => void;
// };

// export default function ImageLightbox({
//   src,
//   alt,
//   width,
//   height,
//   onClose,
// }: Props) {
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [onClose]);

//   return (
//     <div
//       className="fixed left-0 right-0 bottom-0 bg-black/95 z-[50]"
//       style={{ top: NAVBAR_HEIGHT }}
//       onClick={onClose}
//     >
//       {/* CLOSE BUTTON */}
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           onClose();
//         }}
//         className="
//           fixed
//           text-white
//           text-3xl
//           opacity-80
//           hover:opacity-100
//           transition
//           z-[60]
//         "
//         style={{
//           top: NAVBAR_HEIGHT + 16,
//           right: 24,
//         }}
//         aria-label="Close image preview"
//       >
//         ✕
//       </button>

//       {/* SCROLLABLE CONTENT */}
//       <div
//         className="
//           w-full
//           h-full
//           overflow-auto
//           py-16
//           flex
//           justify-center
//         "
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* IMAGE WRAPPER */}
//         <div
//           className="
//             max-w-none
//             flex
//             justify-center
//           "
//           style={{
//             width: "100vw", // ✅ makes image feel larger
//           }}
//         >
//           <IkImageNatural
//             src={src}
//             alt={alt}
//             width={width}
//             height={height}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import IkImageNatural from "@/components/IkImageNatural";

const NAVBAR_HEIGHT = 0; // px

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClose: () => void;
};

export default function ImageLightbox({
  src,
  alt,
  width,
  height,
  onClose,
}: Props) {
  const [zoomed, setZoomed] = useState(false);

  /* ESC key support */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed left-0 right-0 bottom-0 bg-black/95 z-200"
      style={{ top: NAVBAR_HEIGHT }}
      onClick={onClose}
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="
          fixed
          text-white
          text-3xl
          opacity-80
          hover:opacity-100
          transition
          z-[60]
        "
        style={{
          top: NAVBAR_HEIGHT + 16,
          right: 24,
        }}
        aria-label="Close image preview"
      >
        ✕
      </button>

      {/* SCROLLABLE CONTENT */}
      <div
        className="
          w-full
          h-full
          overflow-auto
          py-16
          flex
          justify-center
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* IMAGE WRAPPER */}
        <div
          className="
            flex
            justify-center
            items-start
          "
          style={{ width: "100vw" }}
        >
          {/* ZOOMABLE IMAGE */}
          <div
            onDoubleClick={() => setZoomed((z) => !z)}
            className={`
              transition-transform
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${zoomed ? "scale-[1.6]" : "scale-100"}
            `}
            style={{
              cursor: zoomed ? "zoom-out" : "zoom-in",
            }}
          >
            <IkImageNatural
              src={src}
              alt={alt}
              width={width}
              height={height}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
