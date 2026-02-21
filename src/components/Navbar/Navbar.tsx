// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Link from 'next/link'
// import Image from 'next/image'

// import Hamburger from '@/components/Hamburger/Hamburger'
// import MenuOverlay from '@/components/MenuOverlay/MenuOverlay'
// import useScrollEffect from '@/hooks/useScrollEffect'

// export default function Navbar(){
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
//   const isScrolled = useScrollEffect(50)

//   const toggleMenu = (): void => {
//     setIsMenuOpen(prev => !prev)
//   }

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
//     return () => {
//       document.body.style.overflow = 'auto'
//     }
//   }, [isMenuOpen])

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <motion.div
//         className={`
//           fixed top-0 left-0 w-full z-1000
//           flex items-center justify-between
//           px-8 md:px-12 lg:px-16
//           transition-all duration-500
//           ${isScrolled ? 'h-16 glass-light-scrolled' : 'h-20 glass-light'}
//         `}
//         initial={false}
//       >
//         {/* Logo (Centered) */}
//         <Link href="/" className="absolute left-1/2 -translate-x-1/2">
//           <motion.div
//             className="cursor-pointer"
//             initial={false}
//             whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <div
//               className={`
//                 relative overflow-hidden transition-all duration-500
//                 ${isScrolled ? 'h-9' : 'h-11'}
//               `}
//             >
//               <Image
//                 src="/Arqene_Logo.png"
//                 alt="ARQUENE Luxury Furniture"
//                 width={isScrolled ? 120 : 160}
//                 height={isScrolled ? 32 : 40}
//                 priority
//                 className="object-contain select-none"
//                 style={{ filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.06))' }}
//               />
//             </div>
//           </motion.div>
//         </Link>

//         {/* Hamburger */}
//         <motion.div className="ml-auto" initial={false}>
//           <Hamburger
//             isOpen={isMenuOpen}
//             onToggle={toggleMenu}
//           />
//         </motion.div>
//       </motion.div>

//       {/* ================= MENU OVERLAY ================= */}
//       <AnimatePresence mode="wait" initial={false}>
//         {isMenuOpen && (
//           <MenuOverlay onClose={toggleMenu} />
//         )}
//       </AnimatePresence>
//     </>
//   )
// }


// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Link from 'next/link'
// import Image from 'next/image'

// import Hamburger from '@/components/Hamburger/Hamburger'
// import MenuOverlay from '@/components/MenuOverlay/MenuOverlay'
// import useScrollEffect from '@/hooks/useScrollEffect'

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isHovered, setIsHovered] = useState(false)
//   const isScrolled = useScrollEffect(40)

//   const toggleMenu = () => {
//     setIsMenuOpen(prev => !prev)
//   }

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
//     return () => {
//       document.body.style.overflow = 'auto'
//     }
//   }, [isMenuOpen])

//   // ---------- Navbar Visual State ----------
//   const navbarStyle = (() => {
//     if (isScrolled) {
//       return 'bg-black/70 backdrop-blur-md'
//     }
//     if (isHovered) {
//       return 'bg-white'
//     }
//     return 'bg-transparent'
//   })()

//   const isLightMode = isScrolled
//     ? false
//     : isHovered

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <motion.div
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className={`
//           fixed top-0 left-0 w-full z-40
//           flex items-center justify-between
//           px-8 md:px-12 lg:px-16
//           transition-all duration-500
//           ${isScrolled ? 'h-14' : 'h-18'}
//           ${navbarStyle}
//         `}
//       >
//         {/* LOGO */}
//         <Link href="/" className="absolute left-1/2 -translate-x-1/2">
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="cursor-pointer transition-all duration-500"
//           >
//             <Image
//               src={
//                 isLightMode
//                   ? '/Arqene_Logo_Dark.png'
//                   : '/Arqene_Logo_White.png'
//               }
//               alt="Arqene Luxury Furniture"
//               width={isScrolled ? 110 : 135}
//               height={40}
//               priority
//               className="object-contain select-none transition-all duration-500"
//             />
//           </motion.div>
//         </Link>

//         {/* HAMBURGER */}
//         <div className="ml-auto">
//           <Hamburger
//             isOpen={isMenuOpen}
//             onToggle={toggleMenu}
//             isLightMode={isLightMode}
//           />
//         </div>
//       </motion.div>

//       {/* ================= MENU OVERLAY ================= */}
//       <AnimatePresence mode="wait" initial={false}>
//         {isMenuOpen && <MenuOverlay onClose={toggleMenu} />}
//       </AnimatePresence>
//     </>
//   )
// }

// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Link from 'next/link'
// import Image from 'next/image'

// import Hamburger from '@/components/Hamburger/Hamburger'
// import MenuOverlay from '@/components/MenuOverlay/MenuOverlay'
// import useScrollEffect from '@/hooks/useScrollEffect'

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isHovered, setIsHovered] = useState(false)
//   const isScrolled = useScrollEffect(40)

//   const toggleMenu = () => {
//     setIsMenuOpen(prev => !prev)
//   }

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
//     return () => {
//       document.body.style.overflow = 'auto'
//     }
//   }, [isMenuOpen])

//   // ---------------- NAVBAR STATE LOGIC ----------------
//   const navbarStyle = (() => {
//     if (isMenuOpen) return 'bg-white'
//     if (isScrolled) return 'bg-black/70 backdrop-blur-md'
//     if (isHovered) return 'bg-white'
//     return 'bg-transparent'
//   })()

//   const isLightMode = (() => {
//     if (isMenuOpen) return true
//     if (isScrolled) return false
//     if (isHovered) return true
//     return false
//   })()

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <motion.div
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className={`
//           fixed top-0 left-0 w-full
//           ${isMenuOpen ? 'z-60' : 'z-50'}
//           flex items-center justify-between
//           px-8 md:px-12 lg:px-16
//           transition-all duration-500
//           ${isScrolled ? 'h-14' : 'h-18'}
//           ${navbarStyle}
//         `}
//       >
//         {/* LOGO */}
//         <Link href="/" className="absolute left-1/2 -translate-x-1/2">
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="cursor-pointer transition-all duration-500"
//           >
//             <Image
//               src={
//                 isLightMode
//                   ? '/Arqene_Logo_Dark.png'
//                   : '/Arqene_Logo_White.png'
//               }
//               alt="Arqene Luxury Furniture"
//               width={isScrolled ? 105 : 130}
//               height={40}
//               priority
//               className="object-contain select-none transition-all duration-500"
//             />
//           </motion.div>
//         </Link>

//         {/* HAMBURGER */}
//         <div className="ml-auto">
//           <Hamburger
//             isOpen={isMenuOpen}
//             onToggle={toggleMenu}
//             isLightMode={isLightMode}
//           />
//         </div>
//       </motion.div>

//       {/* ================= MENU OVERLAY ================= */}
//       <AnimatePresence mode="wait" initial={false}>
//         {isMenuOpen && (
//           <MenuOverlay onClose={toggleMenu} />
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import Hamburger from '@/components/Hamburger/Hamburger'
import MenuOverlay from '@/components/MenuOverlay/MenuOverlay'
import useScrollEffect from '@/hooks/useScrollEffect'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const isScrolled = useScrollEffect(40)
  const pathname = usePathname()

  const isHome = pathname === '/'

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  // ---------------- NAVBAR VISUAL LOGIC ----------------

  const navbarStyle = (() => {
    if (isMenuOpen) return 'bg-white'

    if (isScrolled) {
      return 'bg-black/75 backdrop-blur-xs transition-all'
    }

    if (isHome) {
      return isHovered ? 'bg-white transition-all' : 'bg-transparent transition-all'
    }

    return 'bg-white'
  })()

  const isLightMode = (() => {
    if (isMenuOpen) return true
    if (isScrolled) return false

    if (isHome) {
      return isHovered
    }

    return true
  })()

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.div
        onMouseEnter={() => isHome && setIsHovered(true)}
        onMouseLeave={() => isHome && setIsHovered(false)}
        className={`
          fixed top-0 left-0 w-full
          z-[100]   // ALWAYS above overlay & loader
          flex items-center justify-between
          px-8 md:px-12 lg:px-16
          transition-all duration-500
          ${isScrolled ? 'h-20' : 'h-18'}
          ${navbarStyle}
        `}
      >
        {/* LOGO */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer transition-all duration-500"
          >
            <Image
              src={
                isLightMode
                  ? '/Arqene_Logo_Dark.png'
                  : '/Arqene_Logo_White.png'
              }
              alt="Arqene Luxury Furniture"
              width={isScrolled ? 115 : 130}
              height={40}
              priority
              className="object-contain select-none transition-all duration-500"
            />
          </motion.div>
        </Link>

        {/* HAMBURGER */}
        <div className="ml-auto">
          <Hamburger
            isOpen={isMenuOpen}
            onToggle={toggleMenu}
            isLightMode={isLightMode}
          />
        </div>
      </motion.div>

      {/* ================= MENU OVERLAY ================= */}
      <AnimatePresence mode="wait" initial={false}>
        {isMenuOpen && (
          <MenuOverlay onClose={toggleMenu} />
        )}
      </AnimatePresence>
    </>
  )
}