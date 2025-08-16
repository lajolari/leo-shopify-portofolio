export default function AboutPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About this project</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          This site is a demo storefront built with <strong>React</strong> and <strong>Vite</strong>, 
          styled with <strong>TailwindCSS</strong>, and powered by <strong>Shopify’s Storefront API</strong>. 
          It demonstrates how modern frontend frameworks can integrate seamlessly with an e-commerce backend.
        </p>

        {/* Technologies */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="p-4 rounded-lg shadow bg-gray-50">
            <p className="font-semibold">⚛️ React</p>
          </div>
          <div className="p-4 rounded-lg shadow bg-gray-50">
            <p className="font-semibold">⚡ Vite</p>
          </div>
          <div className="p-4 rounded-lg shadow bg-gray-50">
            <p className="font-semibold">🎨 TailwindCSS</p>
          </div>
          <div className="p-4 rounded-lg shadow bg-gray-50">
            <p className="font-semibold">🛍️ Shopify API</p>
          </div>
        </div>

        <p className="text-gray-500 mt-12 max-w-xl mx-auto text-sm">
          Even though this is a simple implementation, it follows professional practices: 
          component-based architecture, API integration, and responsive design.
        </p>
      </div>
    </section>
  );
}
