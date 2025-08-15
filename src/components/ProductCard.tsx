import { useState } from "react";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  altText?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setOpen(true)} 
        className="cursor-pointer bg-white shadow rounded overflow-hidden hover:shadow-lg transition"
      >
        <img
          src={product.imageUrl}
          alt={product.altText || product.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600 text-sm">{product.description.substring(0, 60)}...</p>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded p-6 max-w-lg w-full relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold"
            >
              ✕
            </button>
            <img
              src={product.imageUrl}
              alt={product.altText || product.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
