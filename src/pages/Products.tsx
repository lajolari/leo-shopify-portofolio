import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { shopifyFetch } from "../lib/ShopifyClient";
import { GET_PRODUCTS } from "../lib/Queries";

import ProductList from "../components/ProductList";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  altText?: string;
  price?: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await shopifyFetch(GET_PRODUCTS, { numProducts: 6 });
        const edges = data?.products?.edges || [];
        const items = edges.map((edge: any) => ({
          id: edge.node.id,
          title: edge.node.title,
          description: edge.node.description,
          imageUrl: edge.node.images.edges[0]?.node.transformedSrc || "",
          altText: edge.node.images.edges[0]?.node.altText || edge.node.title,
          price: edge.node.variants?.edges[0]?.node.price,
        }));
        setProducts(items);
      } catch (error) {
        console.error("Error loading products", error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  // Filtrado local usando useMemo para performance
  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      ),
    [products, search]
  );

  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Products</h2>

        {/* Input de búsqueda */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Lista de productos */}
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found</p>
        ) : (
          <ProductList
            products={filteredProducts}
            onProductClick={(product) =>
              navigate(`/product/${encodeURIComponent(product.id)}`)
            }
          />
        )}
      </div>
    </section>
  );
}
