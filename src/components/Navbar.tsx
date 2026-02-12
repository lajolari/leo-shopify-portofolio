import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-lg hover:no-underline">
          <span>Leonardo's Shopify/React Portfolio</span>
        </Link>
        <div className="space-x-4">
          <a 
            href="https://github.com/lajolari" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:no-underline"
          >
            Projects
          </a>
          <a 
            href="mailto:leolama18@gmail.com" 
            className="hover:no-underline"
          >
            Contact
          </a>
          <Link to="/about" className="hover:no-underline">
            <span>About this page</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
