import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Module Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The module you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        <Home className="w-5 h-5" />
        Return Home
      </Link>
    </div>
  );
}

