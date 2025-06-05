import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ExternalLink, Code } from 'lucide-react';

const API: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center">
              <ExternalLink className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">API Documentation</h1>
            </div>
            <p className="mt-2 text-gray-600">
              Integrate Risk Marker's capabilities into your own applications with our API.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">API Overview</h2>
            <div className="prose prose-blue max-w-none">
              <p>Our RESTful API allows you to integrate Risk Marker's risk assessment capabilities into your own applications.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Authentication</h3>
              <p>All API requests require an API key, which you can generate in your account settings.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Rate Limits</h3>
              <ul className="space-y-2">
                <li className="ml-4">Standard Plan: 100 requests per day</li>
                <li className="ml-4">Premium Plan: 1,000 requests per day</li>
                <li className="ml-4">Enterprise Plan: Custom limits</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Base URL</h3>
              <div className="bg-gray-100 rounded p-3 font-mono text-sm overflow-x-auto">
                https://api.riskmarker.com/v1
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">API Endpoints</h2>
            <div className="prose prose-blue max-w-none">
              <h3 className="text-lg font-semibold mt-6 mb-3">Get Risk Assessment</h3>
              
              <div className="bg-gray-100 rounded p-3 font-mono text-sm overflow-x-auto">
                GET /risk-assessment
              </div>
              
              <h4 className="font-medium mt-4 mb-2">Query Parameters:</h4>
              <ul className="space-y-2">
                <li className="ml-4"><code className="bg-gray-100 px-1 py-0.5 rounded text-sm">address</code>: The property address</li>
                <li className="ml-4"><code className="bg-gray-100 px-1 py-0.5 rounded text-sm">include_details</code>: Boolean, whether to include detailed risk factors</li>
              </ul>
              
              <h4 className="font-medium mt-6 mb-2">Example Response:</h4>
              <div className="bg-gray-100 rounded p-3 font-mono text-sm overflow-x-auto">
                {`{
  "status": "success",
  "data": {
    "address": "123 Main St, Anytown, USA",
    "total_score": 42.5,
    "risk_level": "Moderate",
    "top_risks": [
      {
        "type": "Flood",
        "score": 65.2
      },
      {
        "type": "Earthquake",
        "score": 48.7
      },
      {
        "type": "Wildfire",
        "score": 21.3
      }
    ]
  }
}`}
              </div>
              
              <h3 className="text-lg font-semibold mt-8 mb-3">Batch Risk Assessment</h3>
              
              <div className="bg-gray-100 rounded p-3 font-mono text-sm overflow-x-auto">
                POST /batch-assessment
              </div>
              
              <h4 className="font-medium mt-4 mb-2">Request Body:</h4>
              <div className="bg-gray-100 rounded p-3 font-mono text-sm overflow-x-auto">
                {`{
  "addresses": [
    {
      "address": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "90210"
    },
    {
      "address": "456 Oak Dr",
      "city": "Springfield",
      "state": "IL",
      "zip": "62701"
    }
  ]
}`}
              </div>
              
              <h4 className="font-medium mt-6 mb-2">Example Response:</h4>
              <div className="bg-gray-100 rounded p-3 font-mono text-sm overflow-x-auto">
                {`{
  "status": "success",
  "job_id": "batch_12345",
  "eta_seconds": 30,
  "status_url": "/batch-status/batch_12345"
}`}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default API; 