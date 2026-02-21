import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // IMPORTANT FIX
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      { error: "Product ID missing" },
      { status: 400 }
    );
  }

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
    include: {
      images: true,
      category: true,
    },
  });

  if (!product) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
