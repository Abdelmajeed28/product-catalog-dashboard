import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product._id}`}>
      <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer">
        <div className="relative w-full h-48">
          <Image
            src={product.images?.[0] || "/placeholder.jpg"}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.title}</h2>

          <p className="text-gray-500 text-sm">{product.category}</p>

          <p className="font-bold mt-2">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}
