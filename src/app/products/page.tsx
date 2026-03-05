import Link from "next/link";
import axios from "axios";
import IKImage from "@/components/IkImage";
import { productSections } from "@/config/productSection";

export const dynamic = "force-dynamic";
async function getHomeImages() {
  const data = await Promise.all(
    productSections.map(async section => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/imagekit/list`,
        {
          params: {
            folder: `/${section.folder}`,
          },
        }
      );

      const files = res.data;
      // console.log(files);
      const cover = files.find((f: any) =>
        f.filePath.endsWith("/HomePage")
      );

      return {
        ...section,
        coverUrl: cover?.url ?? null,
      };
    })
  );

  // console.log("Data",data);
  return data;
}

export default async function ProductsPage() {
  const sections = await getHomeImages();
  // console.log("section",sections);

  return (
    <section className="bg-[#f4f4f2]">
      {/* Page Heading */}
      <div className="px-6 md:px-16 pt-20 pb-10 font-futura">
        <h1 className="text-3xl md:text-4xl uppercase tracking-[0.18rem] text-[#3a3a3a]">
          Products
        </h1>
      </div>

      {/* Product Grid */}
      <div className="px-6 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-20">
          {sections.map(section => (
            <Link
              key={section.slug}
              href={`/products/${section.slug}`}
              className="group block"
            >
              {/* FIXED FRAME */}
              <div
                className="
                  relative
                  w-full
                  rounded-sm
                  aspect-[16/10]
                  overflow-hidden
                  bg-[#e9e9e7]
                "
              >
                {/* IMAGE ZOOM LAYER */}
                <div
                  className="
                    absolute inset-0
                    transition-transform
                    duration-[900ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.08]
                    will-change-transform
                  "
                > 
               
                  <IKImage
                    src={section.coverUrl}
                    alt={section.title}
                    priority
                  />
                </div>

                {/* SOFT LUXURY OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-black/5
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-700
                  "
                />
              </div>

              {/* TITLE */}
              <h2
                className="
                  mt-6
                  text-[22px] md:text-[26px]
                  uppercase tracking-wide
                  text-[#3a3a3a]
                  transition-colors duration-300
                   
                  group-hover:text-[#873807]
                "
              >
                {section.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
