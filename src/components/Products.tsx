import React, { useEffect, useState } from "react";
import { shopifyFetch } from "../lib/ShopifyClient";
import { GET_PRODUCTS } from "../lib/Queries";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  altText?: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await shopifyFetch(GET_PRODUCTS, { numProducts: 6 });
        const items = data.products.edges.map((edge: any) => ({
          id: edge.node.id,
          title: edge.node.title,
          description: edge.node.description,
          imageUrl: edge.node.images.edges[0]?.node.transformedSrc,
          altText: edge.node.images.edges[0]?.node.altText,
        }));
        setProducts(items);
      } catch (error) {
        console.error("Error cargando productos", error);
      }
    }
    loadProducts();
  }, []);

  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Productos</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.id} className="bg-white shadow rounded overflow-hidden">
              <img src={p.imageUrl} alt={p.altText || p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
