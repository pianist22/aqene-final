"use client";

import { Image } from "@imagekit/next";

type Props = {
  src?: string | null;
  alt: string;
  priority?: boolean;
};

export default function IKImage({ src, alt, priority }: Props) {
  if (!src) return null;

  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

  const relativePath = src.startsWith(urlEndpoint)
    ? src.replace(urlEndpoint, "")
    : src;

  return (
    <Image
      urlEndpoint={urlEndpoint}
      src={relativePath}
      alt={alt}
      fill
      priority={priority}
      className="object-cover"
      transformation={[
        {
          width: 1600,
          height: 1000,
          crop: "maintain_ratio",
        },
      ]}
    />
  );
}
