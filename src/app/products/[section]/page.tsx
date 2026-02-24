import { notFound } from "next/navigation";
import axios from "axios";
import { productSections } from "@/config/productSection";
import ImageTile from "@/components/ImageTile";
import IkVideo from "@/components/IkVideo";

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
      <div className="px-6 md:px-16 pt-20 pb-10">
        <h1 className="text-2xl md:text-3xl font-serif italic tracking-wide text-[#3a3a3a]">
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
