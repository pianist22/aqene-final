import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'
import { Toaster } from "@/components/ui/sonner"
import { Montserrat } from "next/font/google";
import { ImageKitProvider } from '@imagekit/next';
import WhatsAppButton from "@/components/global/WhatsappButton";
import ConnectToggle from '@/components/global/ConnectToggle';
import RouteLoader from '@/components/global/RouteLoader';

const font = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: 'ARQUENE - Luxury Furniture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <Providers />
        {/* INTRO LOADER */}
        <RouteLoader />

        <ImageKitProvider
          urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
        >
          {children}
          <WhatsAppButton />
          <ConnectToggle/>
        </ImageKitProvider>
        <Toaster
          position="top-right"
        />
      </body>
    </html>
  )
}
