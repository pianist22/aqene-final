"use client";

import { Video } from "@imagekit/next";

type Props = {
  filePath: string;
  thumbnail?: string | null;
};

export default function IkVideo({ filePath, thumbnail }: Props) {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

  return (
    <Video
      urlEndpoint={urlEndpoint}
      src={filePath}
      controls
      preload="metadata"
      muted={false}          // ✅ audio enabled
      playsInline
      poster={thumbnail ?? undefined} // ✅ USE EXISTING THUMBNAIL
      className="w-full h-full object-cover"
    />
  );
}
