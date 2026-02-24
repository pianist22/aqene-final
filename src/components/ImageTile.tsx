"use client";

import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import IKImage from "@/components/IkImage";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function ImageTile({ src, alt, width, height }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Grid image (cropped, fill-based) */}
      <div
        className="
          relative w-full aspect-[16/10]
          overflow-hidden bg-[#e9e9e7]
          cursor-zoom-in
        "
        onClick={() => setOpen(true)}
      >
        <IKImage src={src} alt={alt} />
      </div>

      {/* Fullscreen preview */}
      {open && (
        <ImageLightbox
          src={src}
          alt={alt}
          width={width}
          height={height}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
