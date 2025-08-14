import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Products />
      </main>
      <Footer />
    </div>
  );
}
