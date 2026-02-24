import { imagekit } from "@/lib/imagekit-server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const folder = req.nextUrl.searchParams.get("folder");

  if (!folder) {
    return NextResponse.json(
      { error: "Folder is required" },
      { status: 400 }
    );
  }

  const files = await imagekit.listFiles({
    path: folder,
  });

  return NextResponse.json(files);
}
