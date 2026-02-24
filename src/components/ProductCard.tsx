import Link from "next/link";
import { Image } from "@imagekit/next";

export default function ProductCard({ product }: any) {
  const imageUrl = product.images?.[0]?.url;
  if (!imageUrl) return null;

  return (
    <Link
      href={`/products/furniture/${product.id}`}
      className="group block cursor-pointer"
    >
      {/* IMAGE FRAME */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e9e7]">
        <Image
          src={imageUrl.replace(
            process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            ""
          )}
          fill
          alt={product.name}
          className="
            object-cover
            will-change-transform
            transition-transform
            duration-[1000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-[1.08]
          "
        />
      </div>

      {/* PRODUCT NAME */}
      <div className="mt-4">
        <h3
          className="
            text-lg
            md:text-xl
            font-serif
            italic 
            text-center
            tracking-wide
            text-[#3a3a3a]
            transition-colors
            duration-300
            group-hover:text-[#873807]
          "
        >
          {product.name}
        </h3>
      </div>
    </Link>
  );
}
