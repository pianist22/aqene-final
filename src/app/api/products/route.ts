import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { name, description, categoryId, images } =
    await req.json();

  const product = await prisma.product.create({
    data: {
      name,
      description,
      categoryId,
      images: {
        create: images.map((url: string) => ({ url })),
      },
    },
  });

  return Response.json({ success: true, product });
}


// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);

//   const categoryId = Number(searchParams.get("categoryId"));
//   const page = Number(searchParams.get("page") || 1);
//   const limit = Number(searchParams.get("limit") || 12);

//   const products = await prisma.product.findMany({
//     where: { categoryId },
//     include: { images: true },
//     skip: (page - 1) * limit,
//     take: limit,
//     orderBy: { id: "desc" },
//   });

//   return Response.json({ products });
// }

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const categoryId = searchParams.get("categoryId");

  const products = await prisma.product.findMany({
    where: categoryId ? { categoryId: Number(categoryId) } : undefined,
    include: { images: true },
    orderBy: { id: "asc" },
  });

  return Response.json({ products });
}
