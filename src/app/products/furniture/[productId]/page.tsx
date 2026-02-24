import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";

async function getProduct(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  // ✅ IMPORTANT FIX
  const { productId } = await params;

  const product = await getProduct(productId);
  if (!product) notFound();

  return (
    <main className="bg-[#f4f4f2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ProductGallery images={product.images} />
          <ProductInfo
            name={product.name}
            description={product.description}
            category={product.category?.name}
            categoryId={product.categoryId}
          />
        </div>
      </div>
    </main>
  );
}
