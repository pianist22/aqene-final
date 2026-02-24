"use client";

import { Image } from "@imagekit/next";

const NAVBAR_HEIGHT = 80; // px

export default function ImagePreviewModal({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

  return (
    <div
      className="
        fixed
        left-0
        right-0
        bottom-0
        bg-black/90
        z-[50]
      "
      style={{ top: NAVBAR_HEIGHT }}
      onClick={onClose}
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="
          fixed
          right-6
          text-white
          text-4xl
          leading-none
          hover:opacity-70
          transition
          z-[60]
        "
        style={{ top: NAVBAR_HEIGHT + 16 }}
        aria-label="Close image preview"
      >
        ×
      </button>

      {/* SCROLLABLE IMAGE CONTAINER */}
      <div
        className="
          w-full
          h-full
          overflow-auto
          flex
          justify-center
          py-20
        "
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src.replace(endpoint, "")}
          alt="Preview"
          width={2400}
          height={3800}
          className="h-auto w-auto max-w-none"
        />
      </div>
    </div>
  );
}
