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
      images: ["/images/nike1.jpg", "/images/nike2.jpg"],
    },
    {
      title: "Adidas Hoodie",
      description: "Warm and stylish hoodie",
      price: 80,
      category: "clothing",
      images: ["/images/adidas1.jpg"],
    },
    {
      title: "Apple Watch",
      description: "Smart watch with fitness tracking",
      price: 399,
      category: "electronics",
      images: ["/images/applewatch1.jpg"],
    },
  ];

  await Product.insertMany(products);

  return NextResponse.json({
    message: "Database seeded successfully",
  });
}
