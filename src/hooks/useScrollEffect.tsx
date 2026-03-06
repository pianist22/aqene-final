// 'use client'

// import { useEffect, useState } from 'react'

// export default function useScrollEffect(threshold = 50): boolean {
//   const [isScrolled, setIsScrolled] = useState<boolean>(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > threshold)
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })
//     handleScroll()

//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [threshold])

//   return isScrolled
// }


'use client'

import { useEffect, useState } from 'react'

export default function useScrollEffect(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > threshold)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll()

    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isScrolled
}