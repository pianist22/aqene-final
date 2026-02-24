
// "use client";

// import { useMemo, useState } from "react";
// import ProductGrid from "./ProductGrid";

// export default function CategoryTabs({ categories }: any) {
//   // remove duplicate categories by id
//   const uniqueCategories = useMemo(() => {
//     const map = new Map();
//     categories.forEach((c: any) => {
//       if (!map.has(c.id)) map.set(c.id, c);
//     });
//     return Array.from(map.values());
//   }, [categories]);

//   const [activeCategory, setActiveCategory] = useState<number | "all">(1);

//   return (
//     <>
//       {/* CATEGORY NAV */}
//       <div className="px-6 md:px-16 flex gap-6 overflow-x-auto pb-8">
//         <button
//           onClick={() => setActiveCategory("all")}
//           className={`text-sm tracking-wide uppercase whitespace-nowrap transition-colors ${
//             activeCategory === "all"
//               ? "text-[#2e2e2e] border-b border-[#2e2e2e]"
//               : "text-gray-400 hover:text-[#2e2e2e]"
//           }`}
//         >
//           All
//         </button>

//         {uniqueCategories.map((cat: any) => (
//           <button
//             key={`category-${cat.id}`} // ✅ guaranteed unique
//             onClick={() => setActiveCategory(cat.id)}
//             className={`text-sm tracking-wide uppercase whitespace-nowrap transition-colors ${
//               activeCategory === cat.id
//                 ? "text-[#2e2e2e] border-b border-[#2e2e2e]"
//                 : "text-gray-400 hover:text-[#2e2e2e]"
//             }`}
//           >
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       <ProductGrid categoryId={activeCategory} />
//     </>
//   );
// }


// "use client";

// import { useMemo, useState, useEffect } from "react";
// import ProductGrid from "./ProductGrid";

// export default function CategoryTabs({ categories }: any) {
//   // ✅ Remove duplicate categories by id
//   const uniqueCategories = useMemo(() => {
//     const map = new Map<number, any>();
//     categories.forEach((c: any) => {
//       if (!map.has(c.id)) map.set(c.id, c);
//     });
//     return Array.from(map.values());
//   }, [categories]);

//   // ✅ Default to first category
//   const [activeCategory, setActiveCategory] = useState<number | null>(null);

//   // ✅ Set first category as default once categories are ready
//   useEffect(() => {
//     if (uniqueCategories.length && activeCategory === null) {
//       setActiveCategory(uniqueCategories[0].id);
//     }
//   }, [uniqueCategories, activeCategory]);

//   if (!uniqueCategories.length || activeCategory === null) {
//     return null; // or skeleton if you want
//   }

//   return (
//     <>
//       {/* CATEGORY NAV */}
//       <div className="px-6 md:px-16 flex gap-6 overflow-x-auto pb-8">
//         {uniqueCategories.map((cat: any) => (
//           <button
//             key={`category-${cat.id}`}
//             onClick={() => setActiveCategory(cat.id)}
//             className={`
//               text-sm
//               tracking-wide
//               uppercase
//               font-serif
//               italic
//               whitespace-nowrap
//               transition-colors
//               ${
//                 activeCategory === cat.id
//                   ? "text-[#2e2e2e] border-b border-[#2e2e2e]"
//                   : "text-gray-400 hover:text-[#2e2e2e]"
//               }
//             `}
//           >
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* PRODUCTS */}
//       <ProductGrid categoryId={activeCategory} />
//     </>
//   );
// }


"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "./ProductGrid";

export default function CategoryTabs({ categories }: any) {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const uniqueCategories = useMemo(() => {
    const map = new Map<number, any>();
    categories.forEach((c: any) => {
      if (!map.has(c.id)) map.set(c.id, c);
    });
    return Array.from(map.values());
  }, [categories]);

  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    if (!uniqueCategories.length) return;

    if (categoryFromUrl) {
      const parsed = Number(categoryFromUrl);
      const exists = uniqueCategories.find(c => c.id === parsed);

      if (exists) {
        setActiveCategory(parsed);
        return;
      }
    }

    // fallback to first category
    setActiveCategory(uniqueCategories[0].id);
  }, [uniqueCategories, categoryFromUrl]);

  if (!uniqueCategories.length || activeCategory === null) {
    return null;
  }

  return (
    <>
      {/* CATEGORY NAV */}
      <div className="px-6 md:px-16 flex gap-6 overflow-x-auto pb-8">
        {uniqueCategories.map((cat: any) => (
          <button
            key={`category-${cat.id}`}
            onClick={() => setActiveCategory(cat.id)}
            className={`
              text-sm
              tracking-wide
              uppercase
              font-serif
              italic
              whitespace-nowrap
              transition-colors
              ${
                activeCategory === cat.id
                  ? "text-[#2e2e2e] border-b border-[#2e2e2e]"
                  : "text-gray-400 hover:text-[#2e2e2e]"
              }
            `}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <ProductGrid categoryId={activeCategory} />
    </>
  );
}