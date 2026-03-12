import ProductCard from "../components/ProductCard";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return data;
}
export default async function Home() {
  const products = await getProducts();
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
}
