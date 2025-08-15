import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { shopifyFetch } from "../lib/ShopifyClient";
import { GET_PRODUCTS } from "../lib/Queries";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  altText?: string;
  price?: string;
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const decodedId = id ? decodeURIComponent(id) : "";
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await shopifyFetch(GET_PRODUCTS, { numProducts: 20 });
        const edges = data?.products?.edges || [];
        const found = edges.find((e: any) => e.node.id === decodedId);
        if (found) {
          setProduct({
            id: found.node.id,
            title: found.node.title,
            description: found.node.description,
            imageUrl: found.node.images.edges[0]?.node.transformedSrc || "",
            altText: found.node.images.edges[0]?.node.altText || found.node.title,
            price: found.node.variants?.edges[0]?.node.price,
          });
        }
      } catch (error) {
        console.error("Error Loading Product", error);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading Product...</p>;
  if (!product) return <p className="text-center mt-20">Product not found</p>;

  return (
    <>
      <main className="container mx-auto px-6 py-12 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
          <img
            src={product.imageUrl}
            alt={product.altText}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          {product.price && (
            <p className="text-lg font-semibold mb-4 text-green-700">${product.price}</p>
          )}
          <p className="text-gray-700">{product.description}</p>
        </div>
      </main>
    </>
  );
}
