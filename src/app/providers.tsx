// 'use client'

// import Navbar from '@/components/Navbar/Navbar'

// export default function Providers(){
//   return <Navbar />
// }
'use client'

import React from 'react'
import Navbar from '@/components/Navbar/Navbar'

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}