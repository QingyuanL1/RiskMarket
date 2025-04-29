import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Left Panel - Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center mb-6">
            <span className="text-blue-600 text-xl font-neuton tracking-wide">
              DataInsight Pro
            </span>
          </Link>

          {/* 404 Content */}
          <div className="text-center">
            <h1 className="text-8xl font-neuton text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl font-neuton text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Navigation Links */}
            <div className="space-y-4">
              <Link
                to="/"
                className="block w-full py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Back to Home
              </Link>
              <Link
                to="/login"
                className="block w-full py-2 px-4 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Image */}
      <div className="hidden lg:block lg:w-1/2 bg-blue-50">
        <div className="h-full flex items-center justify-center p-8">
          <div className="max-w-lg">
            <div className="space-y-2">
              <h2 className="text-4xl font-neuton font-light text-gray-900">
                Lost in Data?
              </h2>
              <p className="text-xl text-gray-600 font-neuton">
                Let us guide you back to your analytics journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
