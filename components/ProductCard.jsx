import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product._id}`}>
      <div className="border rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold">{product.title}</h2>

        <p className="text-gray-500">{product.category}</p>

        <p className="font-bold mt-2">${product.price}</p>
      </div>
    </Link>
  );
}
