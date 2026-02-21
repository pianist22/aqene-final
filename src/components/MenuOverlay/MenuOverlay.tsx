// 'use client'

// import { useState, useMemo } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'
// import { menuItems } from '@/lib/menuData'
// import { Purple_Purse } from 'next/font/google'
// import type { MenuItem } from '@/types/menu'

// const purplePurse = Purple_Purse({
//   subsets: ['latin'],
//   weight: '400',
// })

// interface MenuOverlayProps {
//   onClose: () => void
// }

// export default function MenuOverlay({
//   onClose,
// }: MenuOverlayProps) {
//   const [hoveredId, setHoveredId] = useState<string | null>(null)

//   const activeItem = useMemo<MenuItem | null>(() => {
//     return menuItems.find(item => item.id === hoveredId) ?? null
//   }, [hoveredId])

//   const leftItems = menuItems.slice(0, 3)
//   const rightItems = menuItems.slice(3)

//   return (
//     <motion.div
//       className="fixed inset-0 z-40 flex"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       {/* ================= LEFT PANEL ================= */}
//       <motion.div
//         className="
//           w-full md:w-1/2 h-full
//           bg-[#d8d6cf]
//           px-10 md:px-16
//           py-24
//           flex items-start md:items-center
//         "
//         initial={{ y: '-100%' }}
//         animate={{ y: 0 }}
//         exit={{ y: '100%' }}
//         transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
//       >
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-24 md:gap-y-12">
//           {[leftItems, rightItems].map((group, groupIndex) => (
//             <ul key={groupIndex} className="space-y-6 md:space-y-10">
//               {group.map((item, index) => {
//                 const isActive = hoveredId === item.id
//                 const offset = index * 6

//                 return (
//                   <li
//                     key={item.id}
//                     style={{ marginLeft: offset }}
//                     className="leading-none"
//                   >
//                     <Link
//                       href={item.href}
//                       onClick={onClose}
//                       onMouseEnter={() => setHoveredId(item.id)}
//                       onMouseLeave={() => setHoveredId(null)}
//                     >
//                       <motion.span
//                         className={`
//                           ${purplePurse.className}
//                           inline-flex items-baseline
//                           cursor-pointer select-none
//                           tracking-[0.05em]
//                           text-black
//                         `}
//                         animate={{ x: isActive ? 10 : 0 }}
//                         transition={{ duration: 0.25 }}
//                       >
//                         <span className="text-[28px] font-serif italic md:text-[36px] mr-1">
//                           {item.label.charAt(0)}
//                         </span>
//                         <span className="text-[24px] font-serif italic md:text-[30px]">
//                           {item.label.slice(1)}
//                         </span>
//                       </motion.span>
//                     </Link>
//                   </li>
//                 )
//               })}
//             </ul>
//           ))}
//         </div>
//       </motion.div>

//       {/* ================= RIGHT PANEL (FULL IMAGE) ================= */}
//       <motion.div
//         className="
//           hidden md:flex
//           w-1/2 h-full
//           bg-white/60
//           backdrop-blur-xl
//           relative overflow-hidden
//         "
//         initial={{ y: '100%' }}
//         animate={{ y: 0 }}
//         exit={{ y: '-100%' }}
//         transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
//       >
//         <AnimatePresence mode="wait">
//           {activeItem && (
//             <motion.div
//               key={activeItem.image}
//               className="absolute inset-0"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.35 }}
//             >
//               {/* Zoom layer */}
//               <motion.div
//                 className="absolute inset-0"
//                 initial={{ scale: 1 }}
//                 animate={{ scale: 1.06 }}
//                 transition={{ duration: 6, ease: 'linear' }}
//               >
//                 <Image
//                   src={activeItem.image}
//                   alt={activeItem.label}
//                   fill
//                   priority
//                   className="object-cover"
//                 />
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </motion.div>
//   )
// }


// 'use client'

// import { useState, useMemo, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { menuItems } from '@/lib/menuData'
// import { Purple_Purse } from 'next/font/google'
// import type { MenuItem } from '@/types/menu'

// const purplePurse = Purple_Purse({
//   subsets: ['latin'],
//   weight: '400',
// })

// interface MenuOverlayProps {
//   onClose: () => void
// }

// export default function MenuOverlay({ onClose }: MenuOverlayProps) {
//   const [hoveredId, setHoveredId] = useState<string | null>(null)
//   const pathname = usePathname()

//   // Automatically close overlay when route changes
//   useEffect(() => {
//     onClose()
//   }, [pathname])

//   const activeItem = useMemo<MenuItem | null>(() => {
//     return menuItems.find(item => item.id === hoveredId) ?? null
//   }, [hoveredId])

//   const leftItems = menuItems.slice(0, 3)
//   const rightItems = menuItems.slice(3)

//   return (
//     <motion.div
//       className="fixed inset-0 z-40 flex"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       {/* LEFT PANEL */}
//       <motion.div
//         className="
//           w-full md:w-1/2 h-full
//           bg-[#d8d6cf]
//           px-10 md:px-16
//           py-24
//           flex items-start md:items-center
//         "
//         initial={{ y: '-100%' }}
//         animate={{ y: 0 }}
//         exit={{ y: '100%' }}
//         transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
//       >
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-24 md:gap-y-12">
//           {[leftItems, rightItems].map((group, groupIndex) => (
//             <ul key={groupIndex} className="space-y-2 md:space-y-4">
//               {group.map((item, index) => {
//                 const isActive = hoveredId === item.id
//                 const offset = index * 6

//                 return (
//                   <li
//                     key={item.id}
//                     style={{ marginLeft: offset }}
//                     className="leading-none"
//                   >
//                     <Link
//                       href={item.href}
//                       onMouseEnter={() => setHoveredId(item.id)}
//                       onMouseLeave={() => setHoveredId(null)}
//                       className="block"
//                     >
//                       <motion.span
//                         className={`
//                           ${purplePurse.className}
//                           inline-flex items-baseline
//                           cursor-pointer select-none
//                           text-black
//                         `}
//                         animate={{ x: isActive ? 10 : 0 }}
//                         transition={{ duration: 0.25 }}
//                       >
//                         <span className="text-[26px] font-serif italic md:text-[32px] mr-1">
//                           {item.label.charAt(0)}
//                         </span>
//                         <span className="text-[22px] font-serif -translate-x-[10] italic tracking-tight md:text-[28px]">
//                           {item.label.slice(1)}
//                         </span>
//                       </motion.span>
//                     </Link>
//                   </li>
//                 )
//               })}
//             </ul>
//           ))}
//         </div>
//       </motion.div>

//       {/* RIGHT PANEL */}
//       <motion.div
//         className="
//           hidden md:flex
//           w-1/2 h-full
//           bg-white/60
//           backdrop-blur-xl
//           relative overflow-hidden
//         "
//         initial={{ y: '100%' }}
//         animate={{ y: 0 }}
//         exit={{ y: '-100%' }}
//         transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
//       >
//         <AnimatePresence mode="wait">
//           {activeItem && (
//             <motion.div
//               key={activeItem.image}
//               className="absolute inset-0"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.35 }}
//             >
//               <motion.div
//                 className="absolute inset-0"
//                 initial={{ scale: 1 }}
//                 animate={{ scale: 1.06 }}
//                 transition={{ duration: 6, ease: 'linear' }}
//               >
//                 <Image
//                   src={activeItem.image}
//                   alt={activeItem.label}
//                   fill
//                   priority
//                   className="object-cover"
//                 />
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </motion.div>
//   )
// }


'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { menuItems } from '@/lib/menuData'
import type { MenuItem } from '@/types/menu'



interface MenuOverlayProps {
  onClose: () => void
}

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    onClose()
  }, [pathname])

  const activeItem = useMemo<MenuItem | null>(() => {
    return menuItems.find(item => item.id === hoveredId) ?? null
  }, [hoveredId])

  const leftItems = menuItems.slice(0, 3)
  const rightItems = menuItems.slice(3)

  return (
    <motion.div
      className="fixed inset-0 z-90 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* ================= LEFT PANEL ================= */}
      <motion.div
        className="
          w-full md:w-1/2 h-full
          bg-[#d8d6cf]
          px-4 md:px-12
          pt-32 md:py-12
          flex items-start md:items-center
        "
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
      >
        {/* ---------------- MOBILE LAYOUT ---------------- */}
        <div className="w-full md:hidden">
          <ul className="space-y-4">
            {menuItems.map((item, index) => {
              const isActive = hoveredId === item.id
              const offset = index * 6 // stronger diagonal effect

              return (
                <li
                  key={item.id}
                  style={{ marginLeft: offset }}
                  className="leading-none"
                >
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="block"
                  >
                    <motion.span
                      className={`
                        inline-block
                        text-black
                        text-[20px]
                        font-serif
                        italic
                        tracking-tight
                      `}
                      animate={{ x: isActive ? 12 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* ---------------- DESKTOP LAYOUT (UNCHANGED) ---------------- */}
        <div className="hidden md:grid w-full grid-cols-2 gap-y-12 gap-x-28">
          {[leftItems, rightItems].map((group, groupIndex) => (
            <ul key={groupIndex} className="space-y-6">
              {group.map((item, index) => {
                const isActive = hoveredId === item.id
                const offset = index * 4

                return (
                  <li
                    key={item.id}
                    style={{ marginLeft: offset }}
                    className="leading-none"
                  >
                    <Link
                      href={item.href}
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <motion.span
                        className={`
                          inline-flex items-baseline
                          cursor-pointer select-none
                          text-black
                        `}
                        animate={{ x: isActive ? 10 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <span className="text-[22px] tracking-tight font-serif italic md:text-[32px] mr-1">
                          {item.label.charAt(0)}
                        </span>
                        <span className="text-[20px] tracking-tight font-serif italic md:text-[28px]">
                          {item.label.slice(1)}
                        </span>
                      </motion.span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          ))}
        </div>
      </motion.div>

      {/* ================= RIGHT PANEL (UNCHANGED) ================= */}
      <motion.div
        className="
          hidden md:flex
          w-1/2 h-full
          bg-white/60
          backdrop-blur-xl
          relative overflow-hidden
        "
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
      >
        <AnimatePresence mode="wait">
          {activeItem && (
            <motion.div
              key={activeItem.image}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1.06 }}
                transition={{ duration: 6, ease: 'linear' }}
              >
                <Image
                  src={activeItem.image}
                  alt={activeItem.label}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}