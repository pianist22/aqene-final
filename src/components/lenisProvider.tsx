"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,          // smoothness
        wheelMultiplier: 1, // scroll speed
        smoothWheel: true,
         syncTouch: false,        // mimic native touch while allowing scroll sync
        touchMultiplier: 1.2, 
      }}
    >
      {children}
    </ReactLenis>
  );
}
