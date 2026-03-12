async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return data;
}
export default async function Home() {
  const products = await getProducts();
  console.log(Array.isArray(products));
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold">{product.title}</h2>

            <p className="text-gray-500">{product.category}</p>

            <p className="font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
