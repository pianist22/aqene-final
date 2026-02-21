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

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const NAVBAR_HEIGHT = 72; // match your navbar height

export default function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const isHome = pathname === "/";

  // Trigger on route change
  useEffect(() => {
    setLoading(true);
    setVisible(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // visible duration

    return () => clearTimeout(timer);
  }, [pathname]);

  // Hide completely after animation
  useEffect(() => {
    if (!loading) {
      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 900);
      return () => clearTimeout(hideTimer);
    }
  }, [loading]);

  const backgroundStyle = isHome
    ? "bg-black/5 backdrop-blur-xl" // glass transparent for home
    : "bg-white";

  const logoSrc = isHome
    ? "/Arqene_Logo_White.png"
    : "/Arqene_Logo_Dark.png";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={pathname}
          className={`fixed inset-0 z-110 ${backgroundStyle}`}
          initial={{ height: "100vh" }}
          animate={{
            height: loading ? "100vh" : NAVBAR_HEIGHT,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          <motion.div
            className="flex h-full w-full items-center justify-center"
            animate={{
              opacity: loading ? 1 : 0,
              scale: loading ? 1 : 0.96,
            }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={logoSrc}
              alt="Arqene"
              width={260}
              height={80}
              priority
              className="h-14 w-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}