import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
