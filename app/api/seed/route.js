import connectDB from "../../../lib/db";
import Product from "../../../models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  await Product.deleteMany({});

  const products = [
    {
      title: "Nike Air Max",
      description: "Comfortable running shoes",
      price: 120,
      category: "shoes",
      images: ["https://picsum.photos/id/21/800/600"],
    },
    {
      title: "Adidas Hoodie",
      description: "Warm and stylish hoodie",
      price: 80,
      category: "clothing",
      images: ["https://picsum.photos/id/29/800/600"],
    },
    {
      title: "Apple Watch",
      description: "Smart watch with fitness tracking",
      price: 399,
      category: "electronics",
      images: ["https://picsum.photos/id/160/800/600"],
    },
  ];

  await Product.insertMany(products);

  return NextResponse.json({
    message: "Database seeded successfully",
  });
}
