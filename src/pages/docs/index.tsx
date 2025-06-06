import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Book, FileText, ExternalLink, ChevronRight, Layout } from 'lucide-react';

const DocsIndex: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Documentation</h1>
            <p className="mt-2 text-gray-600">
              Everything you need to know about Risk Marker's features and capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Getting Started Card */}
            <Link to="/docs/getting-started" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <Book className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900">Getting Started</h2>
                </div>
                <p className="text-gray-600">Learn the basics of Risk Marker and how to get started quickly.</p>
              </div>
              <div className="px-6 py-3 bg-blue-50 text-blue-600 text-sm font-medium flex justify-between items-center">
                <span>View Guide</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
            
            {/* Features Card */}
            <Link to="/docs/features" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900">Features & Tools</h2>
                </div>
                <p className="text-gray-600">Detailed information about Risk Marker's features and capabilities.</p>
              </div>
              <div className="px-6 py-3 bg-blue-50 text-blue-600 text-sm font-medium flex justify-between items-center">
                <span>Explore Features</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
            
            {/* API Card */}
            <Link to="/docs/api" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <ExternalLink className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900">API Documentation</h2>
                </div>
                <p className="text-gray-600">Integrate Risk Marker's capabilities into your own applications with our API.</p>
              </div>
              <div className="px-6 py-3 bg-blue-50 text-blue-600 text-sm font-medium flex justify-between items-center">
                <span>View API Docs</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>

            {/* UI Documentation Card */}
            <Link to="/docs/ui-documentation" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <Layout className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900">UI Documentation</h2>
                </div>
                <p className="text-gray-600">Understand the user interface and learn how to navigate through different sections of the platform.</p>
              </div>
              <div className="px-6 py-3 bg-blue-50 text-blue-600 text-sm font-medium flex justify-between items-center">
                <span>Explore UI Guide</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-4">Can't find what you're looking for? Contact our support team for assistance.</p>
            <Link to="/contact" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocsIndex; 