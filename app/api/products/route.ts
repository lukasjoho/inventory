import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: true,
      },
    });
    return NextResponse.json(products, {
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
      const products = await prisma.product.createMany({
        data: json,
      });
      return NextResponse.json(products, {
        status: 200,
      });
    } else {
      const product = await prisma.product.create({
        data: json,
      });
      return NextResponse.json(product, {
        status: 200,
      });
    }
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { status: "failed", message: "Product with this name already exists" },
        {
          status: 409,
        }
      );
    }
    return NextResponse.json("Product creation failed", {
      status: 500,
    });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const json = await req.json();

    const product = await prisma.product.update({
      where: {
        id: json.id,
      },
      data: json,
    });
    return NextResponse.json(product, {
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const json = await req.json();

    const product = await prisma.product.delete({
      where: {
        id: json.id,
      },
    });
    return NextResponse.json(
      {
        status: "success",
        message: "Product successfully deleted.",
        data: null,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 500,
    });
  }
}
