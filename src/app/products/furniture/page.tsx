import prisma from "@/lib/prisma";
import CategoryTabs from "@/components/CategoryTabs";

export default async function FurniturePage() {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <main className="bg-[#f6f6f4] min-h-screen">
      <div className="px-6 md:px-16 pt-20 pb-10">
        <h1 className="text-3xl md:text-4xl font-serif italic text-[#2e2e2e]">
          Furniture
        </h1>
      </div>

      <CategoryTabs categories={categories} />
    </main>
  );
}
