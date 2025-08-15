interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  altText?: string;
  price?: string; // si quieres mostrar precio
  [key: string]: any; // para cualquier otra característica
}

export default function ProductDetail({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 font-bold hover:text-gray-900"
        >
          ✕
        </button>
        <img
          src={product.imageUrl}
          alt={product.altText || product.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        {product.price && (
          <p className="text-lg font-semibold mb-2 text-green-700">${product.price}</p>
        )}
        <p className="text-gray-700">{product.description}</p>
        {/* Aquí puedes mapear otras características si las tienes */}
        {product.features && (
          <ul className="mt-4 list-disc list-inside text-gray-600">
            {product.features.map((f: string, idx: number) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
