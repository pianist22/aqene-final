// import type { Metadata } from 'next'
// import './globals.css'
// import Providers from './providers'
// import Hero from '@/components/hero'
// import WhyArchitectsChooseUs from '@/components/whychooseus'
// import CraftsmanshipSection from '@/components/craftmanship'
// export const metadata: Metadata = {
//   title: 'ARQUENE - Luxury Furniture',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Providers />
//         <Hero />
//         <WhyArchitectsChooseUs />
//         <CraftsmanshipSection />
//         {children}
//       </body>
//     </html>
//   )
// }
// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { LenisProvider } from "@/components/lenisProvider";

export const metadata: Metadata = {
  title: "ARQUENE - Luxury Furniture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* If Providers is a context wrapper, it should wrap children */}
        <Providers />
          <LenisProvider>{children}</LenisProvider> 
      </body>
    </html>
  );
}
