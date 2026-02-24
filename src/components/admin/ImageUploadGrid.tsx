"use client";

import { upload } from "@imagekit/next";
import { useState } from "react";

type Props = {
  onImagesChange: (urls: string[]) => void;
};

export default function ImageUploadGrid({ onImagesChange }: Props) {
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const getAuthParams = async () => {
    const res = await fetch("/api/upload-auth");
    return res.json();
  };

  const handleFiles = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    setLoading(true);

    setPreviews(prev => [
      ...prev,
      ...files.map(file => URL.createObjectURL(file)),
    ]);

    const newUrls: string[] = [];

    for (const file of files) {
      const { signature, expire, token, publicKey } =
        await getAuthParams();

        console.log(signature, expire, token, publicKey);

      const res = await upload({
        file,
        fileName: file.name,
        signature,
        expire,
        token,
        publicKey,

        // Recommended options
        useUniqueFileName: true,
        folder: "/products",
      });

      if (res.url) newUrls.push(res.url);
    }

    const all = [...uploadedUrls, ...newUrls];
    setUploadedUrls(all);
    onImagesChange(all);
    setLoading(false);
    e.target.value = "";
  };

  return (
    <div className="space-y-4">
      <input type="file" multiple onChange={handleFiles} />

      <div className="grid grid-cols-4 gap-4">
        {previews.map((src, i) => (
          <img
            key={i}
            src={src}
            className="h-28 w-full object-cover rounded-lg border"
          />
        ))}
      </div>

      {loading && (
        <p className="text-sm text-gray-500">
          Uploading images…
        </p>
      )}
    </div>
  );
}
