import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log errors to a service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50">
          <h1 className="text-3xl font-bold text-red-600">Something went wrong.</h1>
          <p className="mt-4 text-gray-700">
            Please try refreshing the page, or go back to the homepage.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-[#008080] text-white rounded-lg shadow hover:bg-[#00CED1] transition"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
