import prisma from "@/lib/prisma";
import CategoryTabs from "@/components/CategoryTabs";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default async function FurniturePage() {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <main className="bg-[#f6f6f4] min-h-screen font-futura">
      <div className="px-6 md:px-16 pt-20 pb-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#8c8c8c]">
          <Link
            href="/products"
            className="
              relative
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
              hover:after:w-full
            "
          >
            Products
          </Link>

          <span className="text-[#c8c8c6]">/</span>

          <span className="text-[#3a3a3a]">
            Furniture
          </span>

        </nav>

        {/* Page Title */}
        <h1 className="mt-4 text-3xl md:text-4xl uppercase tracking-[0.18rem] text-[#2e2e2e]">
          Furniture
        </h1>

      </div>

      <CategoryTabs categories={categories} />
    </main>
  );
}
