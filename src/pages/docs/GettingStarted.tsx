import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Book } from 'lucide-react';

const GettingStarted: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center">
              <Book className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Getting Started</h1>
            </div>
            <p className="mt-2 text-gray-600">
              Learn the basics of Risk Marker and how to get started quickly.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction to Risk Marker</h2>
            <div className="prose prose-blue max-w-none">
              <p>Risk Marker is a comprehensive platform designed to help businesses identify, assess, and manage various types of risks. Our platform provides detailed analytics and insights to help you make informed decisions about property risks.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Key Features</h3>
              <ul className="space-y-2">
                <li className="ml-4">
                  <span className="font-medium">Risk Assessment</span>: Evaluate property risks based on 18 different disaster types
                </li>
                <li className="ml-4">
                  <span className="font-medium">Data Visualization</span>: View risk data through intuitive maps and charts
                </li>
                <li className="ml-4">
                  <span className="font-medium">Batch Processing</span>: Import and process multiple addresses at once
                </li>
                <li className="ml-4">
                  <span className="font-medium">Detailed Reports</span>: Generate comprehensive risk assessment reports
                </li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Who Should Use Risk Marker?</h3>
              <ul className="space-y-2">
                <li className="ml-4">Insurance Companies</li>
                <li className="ml-4">Real Estate Investors</li>
                <li className="ml-4">Property Management Companies</li>
                <li className="ml-4">Risk Management Professionals</li>
                <li className="ml-4">Business Continuity Planners</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Guide</h2>
            <div className="prose prose-blue max-w-none">
              <p>Get up and running with Risk Marker in just a few minutes.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Step 1: Create an Account</h3>
              <p>Sign up for a new account by providing your email address and creating a secure password.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Step 2: Choose Your Subscription</h3>
              <p>Select the subscription plan that best fits your needs.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Step 3: Start Searching</h3>
              <p>Enter an address or upload a batch file to begin analyzing property risks.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Step 4: Analyze Results</h3>
              <p>Review the comprehensive risk assessment for your selected properties.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GettingStarted; 