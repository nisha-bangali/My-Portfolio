import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
          <h1 className="text-6xl font-bold text-red-600">⚠️ Something went wrong</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Please refresh the page or try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            Refresh Page
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
