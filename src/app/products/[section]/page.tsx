export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import axios from "axios";
import { productSections } from "@/config/productSection";
import ImageTile from "@/components/ImageTile";
import IkVideo from "@/components/IkVideo";
import Link from "next/link";

async function getSectionFiles(folder: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/imagekit/list`,
    {
      params: {
        folder: `/${folder}`,
      },
    }
  );

  return res.data;
}

// export default async function SectionPage({
//   params,
// }: {
//   params: { section: string };
// }) {
//   const { section: sectionSlug } = await params;

//   // IMPORTANT: Furniture is handled by its own page
//   if (sectionSlug === "furniture") {
//     notFound();
//   }

//   const section = productSections.find(
//     s => s.slug === sectionSlug
//   );

//   if (!section) notFound();

//   const files = await getSectionFiles(section.folder);

//   return (
//     <section className="bg-[#f4f4f2]">
//       {/* Heading */}
//       <div className="px-6 md:px-16 pt-20 pb-10">
//         <h1 className="text-3xl md:text-4xl font-futura uppercase tracking-wide text-[#3a3a3a]">
//           {section.title}
//         </h1>
//       </div>

//       {/* Gallery */}
//       <div className="px-6 md:px-16 pb-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {files
//             .filter((f: any) => !f.filePath.endsWith("/HomePage"))
//             .map((file: any) => {
//               /* IMAGE */
//               if (file.fileType === "image") {
//                 return (
//                   <ImageTile
//                     key={file.fileId}
//                     src={file.url}
//                     alt={file.name}
//                     width={file.width}
//                     height={file.height}
//                   />
//                 );
//               }

//               /* VIDEO */
//               if (
//                 file.fileType === "non-image" &&
//                 file.mime?.startsWith("video")
//               ) {
//                 return (
//                   <div
//                     key={file.fileId}
//                     className="relative w-full aspect-[16/10] overflow-hidden bg-black"
//                   >
//                     <IkVideo
//                       filePath={file.filePath}
//                       thumbnail={file.thumbnail}
//                     />
//                   </div>
//                 );
//               }

//               return null;
//             })}
//         </div>
//       </div>
//     </section>
//   );
// }


export default async function SectionPage({
  params,
}: {
  params: { section: string };
}) {
  const { section: sectionSlug } = await params;

  // IMPORTANT: Furniture is handled by its own page
  if (sectionSlug === "furniture") {
    notFound();
  }

  const section = productSections.find(
    s => s.slug === sectionSlug
  );

  if (!section) notFound();

  const files = await getSectionFiles(section.folder);

  return (
    <section className="bg-[#f4f4f2]">
      {/* Heading */}
      <div className="px-6 md:px-16 pt-20 pb-10 font-futura">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8c8c8c]">
          <Link
            href="/products"
            className="              relative
              transition-colors
              duration-300
              hover:text-[#873807]
              after:absolute
              after:left-0
              after:-bottom-[2px]
              after:h-[1px]
              after:w-0
              after:bg-[#873807]
              after:transition-all
              after:duration-300
              hover:after:w-full"
          >
            Products
          </Link>

          <span>/</span>

          <span className="text-[#3a3a3a]">
            {section.title}
          </span>
        </div>

        {/* Main Section Title */}
        <h1 className="mt-4 text-3xl md:text-4xl uppercase tracking-[0.18rem] text-[#3a3a3a]">
          {section.title}
        </h1>

      </div>

      {/* Gallery */}
      <div className="px-6 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {files
            .filter((f: any) => !f.filePath.endsWith("/HomePage"))
            .map((file: any) => {

              /* IMAGE */
              if (file.fileType === "image") {
                return (
                  <ImageTile
                    key={file.fileId}
                    src={file.url}
                    alt={file.name}
                    width={file.width}
                    height={file.height}
                  />
                );
              }

              /* VIDEO */
              if (
                file.fileType === "non-image" &&
                file.mime?.startsWith("video")
              ) {
                return (
                  <div
                    key={file.fileId}
                    className="relative w-full aspect-[16/10] overflow-hidden bg-black"
                  >
                    <IkVideo
                      filePath={file.filePath}
                      thumbnail={file.thumbnail}
                    />
                  </div>
                );
              }

              return null;
            })}
        </div>
      </div>
    </section>
  );
}