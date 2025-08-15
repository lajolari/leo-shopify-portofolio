import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  altText?: string;
  price?: string;
}

export default function ProductList({
  products,
  onProductClick,
}: {
  products: Product[];
  onProductClick: (product: Product) => void;
}) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <div key={p.id} onClick={() => onProductClick(p)}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
