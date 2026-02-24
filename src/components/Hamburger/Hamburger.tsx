// 'use client'

// import { useId } from 'react'
// import styles from './Hamburger.module.css'

// interface HamburgerProps {
//   isOpen: boolean
//   onToggle: () => void
// }

// export default function Hamburger({
//   isOpen,
//   onToggle,
// }: HamburgerProps) {
//   const uid = useId()
//   const inputId = `nav-toggle-${uid}`

//   const variantClass = isOpen
//     ? styles.checkboxtogglerDark
//     : styles.checkboxtogglerLight

//   return (
//     <div className={styles.checkboxWrapper}>
//       <input
//         id={inputId}
//         className={styles.navToggle}
//         type="checkbox"
//         checked={isOpen}
//         onChange={onToggle}
//         aria-label="Toggle menu"
//       />

//       <label className={styles.toggleLabel} htmlFor={inputId}>
//         <div className={`${styles.checkboxtoggler} ${variantClass}`}>
//           <div className={`${styles.line} ${styles.line1}`} />
//           <div className={`${styles.line} ${styles.line2}`} />
//           <div className={`${styles.line} ${styles.line3}`} />
//         </div>
//       </label>
//     </div>
//   )
// }

'use client'

import { useId } from 'react'
import styles from './Hamburger.module.css'

interface HamburgerProps {
  isOpen: boolean
  onToggle: () => void
  isLightMode: boolean
}

export default function Hamburger({
  isOpen,
  onToggle,
  isLightMode,
}: HamburgerProps) {
  const uid = useId()
  const inputId = `nav-toggle-${uid}`

  const variantClass = isLightMode
    ? styles.light
    : styles.dark

  return (
    <div className={styles.wrapper}>
      <input
        id={inputId}
        type="checkbox"
        checked={isOpen}
        onChange={onToggle}
        className={styles.input}
      />

      <label htmlFor={inputId} className={styles.label}>
        <div className={`${styles.lines} ${variantClass}`}>
          <span />
          <span />
          <span />
        </div>
      </label>
    </div>
  )
}
