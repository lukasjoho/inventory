import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const categories = await prisma.category.findMany({});
    return NextResponse.json(categories, {
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 500,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();

    if (Array.isArray(json)) {
      const categories = await prisma.category.createMany({
        data: json,
      });
      return NextResponse.json(categories, {
        status: 200,
      });
    } else {
      const category = await prisma.category.create({
        data: json,
      });
      return NextResponse.json(category, {
        status: 200,
      });
    }
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { status: "failed", message: "Category with this name already exists" },
        {
          status: 409,
        }
      );
    }
    return NextResponse.json(error.message, {
      status: 500,
    });
  }
}
