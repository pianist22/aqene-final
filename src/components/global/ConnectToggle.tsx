// "use client";

// import { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { toast } from "sonner";

// const WHATSAPP_NUMBER =
//   process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

// export default function ConnectToggle() {
//   const [open, setOpen] = useState(false);
//   const panelRef = useRef<HTMLDivElement>(null);

//   // Close on outside click
//   useEffect(() => {
//     function handleClick(e: MouseEvent) {
//       if (
//         panelRef.current &&
//         !panelRef.current.contains(e.target as Node)
//       ) {
//         setOpen(false);
//       }
//     }

//     if (open) {
//       document.addEventListener("mousedown", handleClick);
//     }

//     return () =>
//       document.removeEventListener("mousedown", handleClick);
//   }, [open]);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const name = formData.get("name")?.toString().trim() || "";
//     const phone = formData.get("phone")?.toString().trim() || "";
//     const email = formData.get("email")?.toString().trim() || "";
//     const message = formData.get("message")?.toString().trim() || "";

//     if (!name || !phone) {
//         toast.error("Please fill required fields");
//         return;
//     }

//     const finalMessage = `
//     New Inquiry from Arqene Website:

//     Name: ${name}
//     Phone: ${phone}
//     Email: ${email || "Not Provided"}

//     Details:
//     ${message || "No additional details"}
//     `;

//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//         finalMessage
//     )}`;

//     window.open(url, "_blank");

//     toast.success(
//         "Your message has been sent successfully. We will connect with you soon."
//     );

//     e.currentTarget.reset();
//     setOpen(false);
//   };


//   return (
//     <>
//       {/* TOGGLE BUTTON */}
//       <div
//         className="fixed right-0 top-1/2 -translate-y-1/2 z-[80]"
//       >
//         <button
//           onClick={() => setOpen(!open)}
//           className="
//             bg-black text-white
//             px-4 py-10
//             flex flex-col items-center
//             gap-3
//             rounded-l-xl
//             shadow-xl
//             tracking-wide
//             transition-all duration-300
//             hover:bg-[#1a1a1a]
//           "
//         >
//           <span
//             className="
//               writing-mode-vertical-rl
//               rotate-180
//               text-sm
//               uppercase
//               tracking-[0.2em]
//             "
//           >
//             Connect
//           </span>

//           {open ? (
//             <ChevronRight size={20} />
//           ) : (
//             <ChevronLeft size={20} />
//           )}
//         </button>
//       </div>

//       {/* SLIDE PANEL */}
//       <div
//         ref={panelRef}
//         className={`
//           fixed
//           top-0
//           right-0
//           h-full
//           w-full sm:w-[420px]
//           bg-white
//           z-[75]
//           shadow-2xl
//           transform
//           transition-transform
//           duration-500
//           ease-[cubic-bezier(0.22,1,0.36,1)]
//           ${open ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         <div className="h-full overflow-y-auto p-10">
//           <h2 className="text-2xl font-serif italic mb-10">
//             Connect With Us
//           </h2>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-6"
//           >
//             <input
//               name="name"
//               placeholder="Name*"
//               required
//               className="connect-input"
//             />

//             <input
//               name="phone"
//               placeholder="Phone Number*"
//               required
//               className="connect-input"
//             />

//             <input
//               name="email"
//               placeholder="Email (Optional)"
//               className="connect-input"
//             />

//             <textarea
//               name="message"
//               placeholder="Tell Us More"
//               rows={4}
//               className="connect-input resize-none"
//             />

//             <button
//               type="submit"
//               className="
//                 w-full
//                 bg-black
//                 text-white
//                 py-4
//                 rounded-full
//                 tracking-wide
//                 transition
//                 hover:opacity-90
//               "
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { toast } from "sonner";

// const WHATSAPP_NUMBER =
//   process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

// export default function ConnectToggle() {
//   const [open, setOpen] = useState(false);
//   const panelRef = useRef<HTMLDivElement>(null);

//   // Close when clicking outside
//   useEffect(() => {
//     function handleClick(e: MouseEvent) {
//       if (
//         open &&
//         panelRef.current &&
//         !panelRef.current.contains(e.target as Node)
//       ) {
//         setOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClick);
//     return () =>
//       document.removeEventListener("mousedown", handleClick);
//   }, [open]);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const name = formData.get("name")?.toString().trim() || "";
//     const phone = formData.get("phone")?.toString().trim() || "";
//     const email = formData.get("email")?.toString().trim() || "";
//     const details = formData.get("details")?.toString().trim() || "";

//     if (!name || !phone) {
//       toast.error("Please fill required fields");
//       return;
//     }

//     const message = `
// New Inquiry from Arqene Website

// Name: ${name}
// Phone: ${phone}
// Email: ${email || "Not Provided"}

// Details:
// ${details || "No additional details"}
// `;

//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//       message
//     )}`;

//     window.open(url, "_blank");

//     toast.success(
//       "Your message has been sent successfully. We will connect with you soon."
//     );

//     e.currentTarget.reset();
//     setOpen(false);
//   };

//   return (
//     <>
//       {/* CONNECT TOGGLE */}
//       <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[90]">
//         <button
//           onClick={() => setOpen(!open)}
//           className={`
//             relative
//             bg-white
//             text-black
//             rounded-l-2xl
//             shadow-2xl
//             py-16
//             flex
//             flex-col
//             items-center
//             justify-center
//             gap-6
//             transition-all
//             duration-500
//             ease-[cubic-bezier(0.22,1,0.36,1)]
//             hover:bg-[#f6f6f6]
//           `}
//         >
//           {/* Vertical Text */}
//           <span
//             className="
//               text-[11px]
//               uppercase
//               tracking-[0.35em]
//               rotate-270
//               writing-mode-vertical-rl
//               font-serif
//             "
//           >
//             Connect
//           </span>

//           {/* Chevron */}
//           <div className="transition-transform duration-300">
//             {open ? (
//               <ChevronRight size={18} />
//             ) : (
//               <ChevronLeft size={18} />
//             )}
//           </div>
//         </button>
//       </div>

//       {/* SLIDE PANEL */}
//       <div
//         ref={panelRef}
//         className={`
//           fixed
//           top-20
//           right-18
//           h-[80%]
//           w-full
//           sm:w-[460px]
//           bg-white
//           z-[85]
//           shadow-[0_40px_120px_rgba(0,0,0,0.2)]
//           transform
//           transition-transform
//           duration-700
//           ease-[cubic-bezier(0.22,1,0.36,1)]
//           rounded-md
//           ${open ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         <div className="h-full overflow-y-auto px-10 py-5">
//           <h2 className="text-xl font-serif italic mb-12 text-[#2e2e2e]">
//             Connect
//           </h2>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-2"
//           >
//             <input
//               name="name"
//               placeholder="Name*"
//               required
//               className="connect-input"
//             />

//             <input
//               name="phone"
//               placeholder="Phone Number*"
//               required
//               className="connect-input"
//             />

//             <input
//               name="email"
//               placeholder="Email (Optional)"
//               className="connect-input"
//             />

//             <textarea
//               name="details"
//               placeholder="Tell Us More"
//               rows={2}
//               className="connect-input resize-none"
//             />

//             <button
//               type="submit"
//               className="
//                 w-full
//                 bg-black
//                 text-white
//                 py-4
//                 rounded-full
//                 tracking-[0.15em]
//                 uppercase
//                 text-sm
//                 transition
//                 hover:opacity-90
//               "
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }



// "use client";

// import { useState, useRef, useEffect } from "react";
// import { toast } from "sonner";

// const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

// export default function ConnectToggle() {
//   const [open, setOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Close panel when hovering outside
//   useEffect(() => {
//     function handleMouseMove(e: MouseEvent) {
//       if (
//         open &&
//         containerRef.current &&
//         !containerRef.current.contains(e.target as Node)
//       ) {
//         setOpen(false);
//       }
//     }

//     document.addEventListener("mousemove", handleMouseMove);
//     return () =>
//       document.removeEventListener("mousemove", handleMouseMove);
//   }, [open]);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const name = formData.get("name")?.toString().trim() || "";
//     const phone = formData.get("phone")?.toString().trim() || "";
//     const email = formData.get("email")?.toString().trim() || "";
//     const details = formData.get("details")?.toString().trim() || "";

//     if (!name || !phone) {
//       toast.error("Please fill required fields");
//       return;
//     }

//     const message = `
// New Inquiry from Arqene Website

// Name: ${name}
// Phone: ${phone}
// Email: ${email || "Not Provided"}

// Details:
// ${details || "No additional details"}
// `;

//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//       message
//     )}`;

//     window.open(url, "_blank");

//     toast.success(
//       "Your message has been sent successfully. We will connect with you soon."
//     );

//     e.currentTarget.reset();
//     setOpen(false);
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="fixed right-0 top-1/2 -translate-y-1/2 z-[100]"
//     >
//       {/* ========================= */}
//       {/* TOGGLE BUTTON */}
//       {/* ========================= */}
//       {!collapsed && (
//         <div
//           onMouseEnter={() => setOpen(true)}
//           className="relative"
//         >
//           <div
//             className="
//               bg-white
//               rounded-l-2xl
//               shadow-[0_20px_60px_rgba(0,0,0,0.15)]
//               py-16
//               flex
//               flex-col
//               items-center
//               justify-center
//               transition-all
//               duration-500
//               ease-[cubic-bezier(0.22,1,0.36,1)]
//             "
//           >
//             {/* Arrow */}
//             <button
//               onClick={() => setCollapsed(true)}
//               className="
//                 absolute
                
//                 -top-10
//                 bg-black
//                 text-white
//                 w-10
//                 h-10
//                 flex
//                 items-center
//                 justify-center
//                 rounded-md
//                 shadow-lg
//                 hover:opacity-90
//                 transition
//               "
//             >
//               ←
//             </button>

//             {/* Vertical Text */}
//             <span
//               className="
//                 text-xs
//                 uppercase
//                 tracking-[0.35em]
//                 rotate-270
//                 writing-mode-vertical-rl
//                 font-light
//               "
//             >
//               Connect
//             </span>
//           </div>
//         </div>
//       )}

//       {/* ========================= */}
//       {/* COLLAPSED ARROW */}
//       {/* ========================= */}
//       {collapsed && (
//         <button
//           onClick={() => setCollapsed(false)}
//           className="
//             bg-black
//             text-white
//             w-10
//             h-10
//             flex
//             items-center
//             justify-center
//             rounded-l-md
//             shadow-xl
//             transition
//             hover:opacity-90
//           "
//         >
//           →
//         </button>
//       )}

//       {/* ========================= */}
//       {/* SLIDE PANEL */}
//       {/* ========================= */}
//       <div
//         className={`
//           fixed
//           right-16
//           top-1/2
//           -translate-y-1/2
//           w-[420px]
//           bg-white
//           rounded-2xl
//           shadow-[0_40px_120px_rgba(0,0,0,0.2)]
//           transition-all
//           duration-700
//           ease-[cubic-bezier(0.22,1,0.36,1)]
//           ${
//             open && !collapsed
//               ? "opacity-100 translate-x-0"
//               : "opacity-0 translate-x-8 pointer-events-none"
//           }
//         `}
//       >
//         <div className="p-10">
//           <h2 className="text-xl font-medium mb-8">
//             Connect With Us
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <input
//               name="name"
//               placeholder="Name*"
//               required
//               className="connect-input"
//             />

//             <input
//               name="phone"
//               placeholder="Phone Number*"
//               required
//               className="connect-input"
//             />

//             <input
//               name="email"
//               placeholder="Email (Optional)"
//               className="connect-input"
//             />

//             <textarea
//               name="details"
//               placeholder="Tell Us More"
//               rows={4}
//               className="connect-input resize-none"
//             />

//             <button
//               type="submit"
//               className="
//                 w-full
//                 bg-black
//                 text-white
//                 py-4
//                 rounded-full
//                 tracking-wide
//                 uppercase
//                 text-sm
//                 hover:opacity-90
//                 transition
//               "
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export default function ConnectToggle() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close panel when mouse leaves container
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (
        open &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () =>
      document.removeEventListener("mousemove", handleMouseMove);
  }, [open]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const details = formData.get("details")?.toString().trim() || "";

    if (!name || !phone) {
      toast.error("Please fill required fields");
      return;
    }

    const message = `
New Inquiry from Arqene Website

Name: ${name}
Phone: ${phone}
Email: ${email || "Not Provided"}

Details:
${details || "No additional details"}
`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");

    toast.success(
      "Your message has been sent successfully. We will connect with you soon."
    );

    e.currentTarget.reset();
    setOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center"
    >
      {/* ===================== */}
      {/* CONNECT BUTTON */}
      {/* ===================== */}
      {!collapsed && (
        <div
          onMouseEnter={() => setOpen(true)}
          className="relative"
        >
          <div
            className="
              w-[56px]                    /* slimmer width */
              relative
              h-[100px]
              bg-white
              rounded-l-xl
              shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              flex
              flex-col
              items-center
              justify-between
              py-10
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
          >
            {/* Arrow fixed at top */}
            <button
              onClick={() => setCollapsed(true)}
              className="
               absolute
                w-14
                h-9
                bg-black
                text-white
                flex
                items-center
                justify-center
                rounded-t-md
                shadow-md
                -top-7.5
                hover:opacity-90
                transition
              "
            >
              ←
            </button>

            {/* Vertical Text */}
            <span
              className="
                text-[12px]
                tracking-[0.2em]
                rotate-270
                font-serif
                writing-mode-vertical-rl
                
              "
            >
              Connect
            </span>
          </div>
        </div>
      )}

      {/* ===================== */}
      {/* COLLAPSED ARROW ONLY */}
      {/* ===================== */}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          className="
            w-9
            h-9
            bg-black
            text-white
            flex
            items-center
            justify-center
            rounded-l-md
            shadow-xl
            transition
            hover:opacity-90
          "
        >
          →
        </button>
      )}

      {/* ===================== */}
      {/* SLIDE PANEL */}
      {/* ===================== */}
      {/* <div
        className={`
          absolute
          right-[56px]
          top-24
          -translate-y-1/2
          w-[420px]
          bg-white
          rounded-2xl
          shadow-[0_40px_120px_rgba(0,0,0,0.25)]
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            open && !collapsed
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-6 pointer-events-none"
          }
        `}
      >
        <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8">
            Connect With Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
            <input
              name="name"
              placeholder="Name*"
              required
              className="connect-input w-full text-sm sm:text-base py-3 sm:py-3.5 md:py-4"
            />

            <input
              name="phone"
              placeholder="Phone Number*"
              required
              className="connect-input w-full text-sm sm:text-base py-3 sm:py-3.5 md:py-4"
            />

            <input
              name="email"
              placeholder="Email (Optional)"
              className="connect-input w-full text-sm sm:text-base py-3 sm:py-3.5 md:py-4"
            />

            <textarea
              name="details"
              placeholder="Tell Us More"
              rows={4}
              className="connect-input w-full text-sm sm:text-base py-3 sm:py-3.5 md:py-4 resize-none"
            />

            <button
              type="submit"
              className="
                w-full
                bg-black
                text-white
                py-3 sm:py-4 md:py-4
                rounded-full
                tracking-wide
                uppercase
                text-xs sm:text-sm
                hover:opacity-90
                transition
              "
            >
              Submit
            </button>
          </form>
        </div>

      </div> */}

<div
  className={`
    absolute
    right-[56px]
    top-1/2
    -translate-y-1/2
    w-[260px]
    xs:w-[320px]
    sm:w-[360px]
    md:w-[420px]
    
    bg-white
    rounded-2xl
    shadow-[0_40px_120px_rgba(0,0,0,0.25)]
    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]
    overflow-y-auto
    ${
      open && !collapsed
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-6 pointer-events-none"
    }
  `}
>
  {/* CLOSE BUTTON */}
  <button
    onClick={() => setOpen(false)}
    className="
      absolute
      top-4
      right-4
      text-gray-500
      text-xl
      hover:text-black
      transition
      z-10
    "
  >
    ✕
  </button>

  <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
    <h2 className="text-lg sm:text-md md:text-xl font-medium mb-1">
      Connect With Us
    </h2>

    <form
      onSubmit={handleSubmit}
      className="space-y-1 sm:space-y-2 md:space-y-3"
    >
      <input
        name="name"
        placeholder="Name*"
        required
        className="connect-input w-full text-sm sm:text-base py-3 sm:py-3.5 md:py-4"
      />

      <input
        name="phone"
        placeholder="Phone Number*"
        required
        className="connect-input w-full text-sm sm:text-base py-3 sm:py-3.5 md:py-4"
      />

      <input
        name="email"
        placeholder="Email (Optional)"
        className="connect-input w-full text-sm sm:text-base py-3 sm:py-3.5 md:py-4"
      />

      <textarea
        name="details"
        placeholder="Tell Us More"
        rows={3}
        className="connect-input w-full text-sm sm:text-base py-3 sm:py-3.5 md:py-4 resize-none"
      />

      <button
        type="submit"
        className="
          w-full
          bg-black
          text-white
          py-3 sm:py-4 md:py-4
          rounded-full
          tracking-wide
          uppercase
          text-xs sm:text-sm
          hover:opacity-90
          transition
        "
      >
        Submit
      </button>
    </form>
  </div>
</div>
    </div>
  );
}
