import connectDB from "@/lib/db";
import Product from "@/models/Product";

export default async function ProductDetails({ params }) {
  await connectDB();
  const { id } = await params;
  const product = await Product.findById(id);
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      <p className="text-gray-500 mb-4">{product.category}</p>

      <p className="mb-6">{product.description}</p>

      <p className="text-xl font-bold">${product.price}</p>
    </div>
  );
}
