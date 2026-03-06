// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";

// const NAVBAR_HEIGHT = 72; // match your navbar height

// export default function RouteLoader() {
//   const pathname = usePathname();
//   const [visible, setVisible] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const isHome = pathname === "/";

//   // Trigger on route change
//   useEffect(() => {
//     setLoading(true);
//     setVisible(true);

//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 900); // visible duration

//     return () => clearTimeout(timer);
//   }, [pathname]);

//   // Hide completely after animation
//   useEffect(() => {
//     if (!loading) {
//       const hideTimer = setTimeout(() => {
//         setVisible(false);
//       }, 900);
//       return () => clearTimeout(hideTimer);
//     }
//   }, [loading]);

//   const backgroundStyle = isHome
//     ? "bg-black/5 backdrop-blur-xl" // glass transparent for home
//     : "bg-white";

//   const logoSrc = isHome
//     ? "/Arqene_Logo_White.png"
//     : "/Arqene_Logo_Dark.png";

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           key={pathname}
//           className={`fixed inset-0 z-[100] ${backgroundStyle}`}
//           initial={{ height: "100vh" }}
//           animate={{
//             height: loading ? "100vh" : NAVBAR_HEIGHT,
//           }}
//           exit={{ opacity: 0 }}
//           transition={{
//             duration: 0.9,
//             ease: [0.23, 1, 0.32, 1],
//           }}
//         >
//           <motion.div
//             className="flex h-full w-full items-center justify-center"
//             animate={{
//               opacity: loading ? 1 : 0,
//               scale: loading ? 1 : 0.96,
//             }}
//             transition={{ duration: 0.6 }}
//           >
//             <Image
//               src={logoSrc}
//               alt="Arqene"
//               width={260}
//               height={80}
//               priority
//               className="h-14 w-auto"
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";

// const NAVBAR_HEIGHT = 72; // match your navbar height

// export default function RouteLoader() {
//   const pathname = usePathname();
//   const [visible, setVisible] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const isHome = pathname === "/";

//   // Trigger on route change
//   useEffect(() => {
//     setLoading(true);
//     setVisible(true);

//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 900); // visible duration

//     return () => clearTimeout(timer);
//   }, [pathname]);

//   // Hide completely after animation
//   useEffect(() => {
//     if (!loading) {
//       const hideTimer = setTimeout(() => {
//         setVisible(false);
//       }, 900);
//       return () => clearTimeout(hideTimer);
//     }
//   }, [loading]);

//   const backgroundStyle = isHome
//     ? "bg-black/5 backdrop-blur-xl" // glass transparent for home
//     : "bg-white";

//   const logoSrc = isHome
//     ? "/Arqene_Logo_White.png"
//     : "/Arqene_Logo_Dark.png";

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           key={pathname}
//           className={`fixed inset-0 z-110 ${backgroundStyle}`}
//           initial={{ height: "100vh" }}
//           animate={{
//             height: loading ? "100vh" : NAVBAR_HEIGHT,
//           }}
//           exit={{ opacity: 0 }}
//           transition={{
//             duration: 0.9,
//             ease: [0.23, 1, 0.32, 1],
//           }}
//         >
//           <motion.div
//             className="flex h-full w-full items-center justify-center"
//             animate={{
//               opacity: loading ? 1 : 0,
//               scale: loading ? 1 : 0.96,
//             }}
//             transition={{ duration: 0.6 }}
//           >
//             <Image
//               src={logoSrc}
//               alt="Arqene"
//               width={260}
//               height={80}
//               priority
//               className="h-14 w-auto"
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }



// 1 Implementation
// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";

// const NAVBAR_HEIGHT = 72;

// export default function RouteLoader() {
//   const pathname = usePathname();

//   const [visible, setVisible] = useState(false);
//   const [phase, setPhase] = useState<"logo" | "collapse">("logo");

//   const isHome = pathname === "/";

//   useEffect(() => {
//     setVisible(true);
//     setPhase("logo");

//     // Phase 1: Logo display duration
//     const logoTimer = setTimeout(() => {
//       setPhase("collapse");
//     }, 1800); // Logo visible duration

//     // Phase 2: After collapse complete, hide loader
//     const hideTimer = setTimeout(() => {
//       setVisible(false);
//     }, 2800);

//     return () => {
//       clearTimeout(logoTimer);
//       clearTimeout(hideTimer);
//     };
//   }, [pathname]);

//   const backgroundStyle = isHome
//     ? "bg-black/5 backdrop-blur-xl"
//     : "bg-white";

//   const logoSrc = isHome
//     ? "/Arqene_Logo_White.png"
//     : "/Arqene_Logo_Dark.png";

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           key={pathname}
//           className={`fixed inset-0 z-[110] ${backgroundStyle}`}
//           initial={{ height: "100vh" }}
//           animate={{
//             height:
//               phase === "logo"
//                 ? "100vh"
//                 : NAVBAR_HEIGHT, // collapse only after logo phase
//           }}
//           transition={{
//             duration: 2,
//             ease: [0.23, 1, 0.32, 1],
//           }}
//         >
//           {/* LOGO ANIMATION */}
//           <motion.div
//             className="flex h-full w-full items-center justify-center"
//             initial={{ opacity: 0, scale: 2.2}}
//             animate={{
//               opacity: phase === "logo" ? 1 : 0,
//               scale: phase === "logo" ? 1 : 0.4,
//             }}
//             transition={{
//               duration: 1.2,
//               ease: [0.23, 1, 0.32, 1],
//             }}
//           >
//             <Image
//               src={logoSrc}
//               alt="Arqene"
//               width={700}
//               height={220}
//               priority
//               className="h-28 md:h-36 w-auto select-none"
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }



// 2nd Implementation
// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";

// const NAVBAR_HEIGHT = 72;

// export default function RouteLoader() {
//   const pathname = usePathname();

//   const [visible, setVisible] = useState(false);
//   const [logoPhase, setLogoPhase] = useState<"show" | "hide">("show");
//   const [collapse, setCollapse] = useState(false);

//   const isHome = pathname === "/";

//   useEffect(() => {
//     setVisible(true);
//     setLogoPhase("show");
//     setCollapse(false);

//     // 1️⃣ Logo visible duration
//     const logoDisplay = setTimeout(() => {
//       setLogoPhase("hide");
//     }, 1800);

//     // 2️⃣ Start collapse AFTER logo fade completes
//     const collapseTimer = setTimeout(() => {
//       setCollapse(true);
//     }, 2600);

//     // 3️⃣ Fully remove loader
//     const removeTimer = setTimeout(() => {
//       setVisible(false);
//     }, 3600);

//     return () => {
//       clearTimeout(logoDisplay);
//       clearTimeout(collapseTimer);
//       clearTimeout(removeTimer);
//     };
//   }, [pathname]);

//   const backgroundStyle = isHome
//     ? "bg-black/5 backdrop-blur-xl"
//     : "bg-white";

//   const logoSrc = isHome
//     ? "/Arqene_Logo_White.png"
//     : "/Arqene_Logo_Dark.png";

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           key={pathname}
//           className={`fixed inset-0 z-[110] ${backgroundStyle}`}
//           initial={{ height: "100vh" }}
//           animate={{
//             height: collapse ? NAVBAR_HEIGHT : "100vh",
//           }}
//           transition={{
//             duration: 1.1,
//             ease: [0.23, 1, 0.32, 1],
//           }}
//         >
//           {/* CENTERED LOGO — NEVER MOVES */}
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center"
//             initial={{ scale: 3.8, opacity: 1 }}
//             animate={{
//               scale: logoPhase === "show" ? 2.2 : 0.5,
//               opacity: logoPhase === "show" ? 1 : 0,
//             }}
//             transition={{
//               duration: 1.6,
//               ease: [0.23, 1, 0.32, 1],
//             }}
//           >
//             <Image
//               src={logoSrc}
//               alt="Arqene"
//               width={600}
//               height={240}
//               priority
//               className="h-32 md:h-40 w-auto select-none"
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";

// const NAVBAR_HEIGHT = 72;

// export default function RouteLoader() {
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   // Show immediately if home (prevents jerk)
//   const [visible, setVisible] = useState(isHome);
//   const [logoPhase, setLogoPhase] = useState<"show" | "hide">("show");
//   const [collapse, setCollapse] = useState(false);

//   useEffect(() => {
//     // If not home → never show
//     if (!isHome) {
//       setVisible(false);
//       return;
//     }

//     // Reset animation state
//     setLogoPhase("show");
//     setCollapse(false);
//     setVisible(true);

//     const logoDisplay = setTimeout(() => {
//       setLogoPhase("hide");
//     }, 1800);

//     const collapseTimer = setTimeout(() => {
//       setCollapse(true);
//     }, 2600);

//     const removeTimer = setTimeout(() => {
//       setVisible(false);
//     }, 3600);

//     return () => {
//       clearTimeout(logoDisplay);
//       clearTimeout(collapseTimer);
//       clearTimeout(removeTimer);
//     };
//   }, [isHome]);

//   // ✅ Do not render at all if not home
//   if (!isHome) return null;

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           className="fixed inset-0 z-[110] bg-black/5 backdrop-blur-xl"
//           initial={{ height: "100vh" }}
//           animate={{
//             height: collapse ? NAVBAR_HEIGHT : "100vh",
//           }}
//           transition={{
//             duration: 1.1,
//             ease: [0.23, 1, 0.32, 1],
//           }}
//         >
//           {/* CENTERED LOGO */}
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center"
//             initial={{ scale: 3.8, opacity: 1 }}
//             animate={{
//               scale: logoPhase === "show" ? 2.2 : 0.5,
//               opacity: logoPhase === "show" ? 1 : 0,
//             }}
//             transition={{
//               duration: 1.6,
//               ease: [0.23, 1, 0.32, 1],
//             }}
//           >
//             <Image
//               src="/Arqene_Logo_White.png"
//               alt="Arqene"
//               width={600}
//               height={240}
//               priority
//               className="h-32 md:h-40 w-auto select-none"
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const NAVBAR_HEIGHT = 72;

export default function RouteLoader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [visible, setVisible] = useState(isHome);
  const [logoPhase, setLogoPhase] = useState<"show" | "hide">("show");
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setVisible(false);
      return;
    }

    setLogoPhase("show");
    setCollapse(false);
    setVisible(true);

    const logoDisplay = setTimeout(() => {
      setLogoPhase("hide");
    }, 1800);

    const collapseTimer = setTimeout(() => {
      setCollapse(true);
    }, 2600);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 3600);

    return () => {
      clearTimeout(logoDisplay);
      clearTimeout(collapseTimer);
      clearTimeout(removeTimer);
    };
  }, [isHome]);

  if (!isHome) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[110] bg-black/5 backdrop-blur-xl overflow-hidden"
          initial={{ height: "100vh" }}
          animate={{
            height: collapse ? NAVBAR_HEIGHT : "100vh",
          }}
          transition={{
            duration: 1.1,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          {/* CENTERED LOGO */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-6"
            initial={{ scale: 2.8, opacity: 1 }}
            animate={{
              scale: logoPhase === "show" ? 1.6 : 0.5,
              opacity: logoPhase === "show" ? 1 : 0,
            }}
            transition={{
              duration: 1.6,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <div className="relative w-[70vw] max-w-[520px] aspect-[5/2]">
              <Image
                src="/Arqene_Logo_White.png"
                alt="Arqene"
                fill
                priority
                sizes="(max-width: 768px) 70vw, 520px"
                className="object-contain select-none"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}