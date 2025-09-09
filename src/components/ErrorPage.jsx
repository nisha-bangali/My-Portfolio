import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default ErrorPage;
