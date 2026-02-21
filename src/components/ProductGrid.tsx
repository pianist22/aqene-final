// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import InfiniteLoader from "./InfiniteLoader";

// const PAGE_SIZE = 12;

// export default function ProductGrid({ categoryId }: any) {
//   const [products, setProducts] = useState<any[]>([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(false);

//   // reset on category change
//   useEffect(() => {
//     setProducts([]);
//     setPage(1);
//     setHasMore(true);
//   }, [categoryId]);

//   useEffect(() => {
//     loadProducts();
//   }, [page, categoryId]);

//   const loadProducts = async () => {
//     if (!hasMore || loading) return;

//     setLoading(true);

//     const res = await fetch(
//       `/api/products?categoryId=${categoryId}&page=${page}&limit=${PAGE_SIZE}`
//     );

//     const data = await res.json();

//     setProducts(prev => [...prev, ...data.products]);
//     setHasMore(data.products.length === PAGE_SIZE);
//     setLoading(false);
//   };

//   if (!products.length && !hasMore) {
//     return (
//       <div className="px-6 md:px-16 py-20 text-gray-500">
//         No products found in this category.
//       </div>
//     );
//   }

//   return (
//     <div className="px-6 md:px-16 pb-24">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       <InfiniteLoader
//         hasMore={hasMore}
//         loading={loading}
//         onLoad={() => setPage(p => p + 1)}
//       />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

export default function ProductGrid({ categoryId }: any) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);

      const url =
        categoryId === "all"
          ? "/api/products"
          : `/api/products?categoryId=${categoryId}`;

      const res = await fetch(url);
      const data = await res.json();

      setProducts(data.products);
      setLoading(false);
    };

    loadProducts();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="px-6 md:px-16 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="px-6 md:px-16 py-20 text-gray-500">
        No products found in this category.
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {products.map(product => (
          <ProductCard key={`product-${product.id}`} product={product} />
        ))}
      </div>
    </div>
  );
}

