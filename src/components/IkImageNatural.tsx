"use client";

import { Image } from "@imagekit/next";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function IkImageNatural({
  src,
  alt,
  width,
  height,
}: Props) {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

  const relativePath = src.startsWith(urlEndpoint)
    ? src.replace(urlEndpoint, "")
    : src;

  return (
    <Image
      urlEndpoint={urlEndpoint}
      src={relativePath}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className="block h-auto w-auto max-w-none"
    />
  );
}
