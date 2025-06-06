import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Code, Server, Database, Shield, FileJson, Globe, Terminal, LucideIcon, ArrowRight, RefreshCw, Search } from 'lucide-react';

// API documentation card component
interface APICardProps {
  title: string;
  description: string;
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: {name: string, type: string, description: string, required: boolean}[];
  responses?: {code: string, description: string}[];
  icon: LucideIcon;
}

const methodColors = {
  GET: 'bg-green-100 text-green-800',
  POST: 'bg-blue-100 text-blue-800',
  PUT: 'bg-yellow-100 text-yellow-800',
  DELETE: 'bg-red-100 text-red-800'
};

const APICard: React.FC<APICardProps> = ({ title, description, endpoint, method, params, responses, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all mb-8">
    <div className="border-b border-gray-100 p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center mt-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${methodColors[method]}`}>
          {method}
        </span>
        <code className="ml-3 px-3 py-1 bg-gray-100 rounded text-sm font-mono text-gray-800">
          {endpoint}
        </code>
      </div>
    </div>
    
    {params && params.length > 0 && (
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Parameters</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {params.map((param, index) => (
                <tr key={index}>
                  <td className="px-3 py-2 text-sm font-mono text-gray-800">{param.name}</td>
                  <td className="px-3 py-2 text-sm text-gray-600">{param.type}</td>
                  <td className="px-3 py-2 text-sm">
                    {param.required ? 
                      <span className="text-red-600">Yes</span> : 
                      <span className="text-gray-500">No</span>
                    }
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-600">{param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}
    
    {responses && responses.length > 0 && (
      <div className="px-6 py-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Response Status</h4>
        <div className="space-y-2">
          {responses.map((response, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 text-blue-500 mt-1">
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <div className="ml-2">
                <code className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded">{response.code}</code>
                <span className="text-sm text-gray-600 ml-2">{response.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

const APIDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 relative inline-block">
              API Documentation
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"></div>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Complete guide to using the Risk Marker API interfaces and methods
            </p>
          </div>
          
          {/* API Overview */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
              <h2 className="text-xl font-bold">API Overview</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Risk Marker API provides a complete set of interfaces that allow developers to programmatically access our risk assessment data and features. All API requests require authentication and use HTTPS protocol for secure transmission.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-medium text-gray-900">Authentication</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    All API requests require API key authentication. Include the <code className="text-xs bg-blue-100 px-1 py-0.5 rounded">X-API-Key</code> header in your requests.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center mb-2">
                    <Globe className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-medium text-gray-900">Base URL</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    All API requests use the base URL <code className="text-xs bg-blue-100 px-1 py-0.5 rounded">https://api.riskmarker.com/v1</code>
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center mb-2">
                    <FileJson className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-medium text-gray-900">Response Format</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    All API responses are returned in JSON format, containing <code className="text-xs bg-blue-100 px-1 py-0.5 rounded">data</code> and <code className="text-xs bg-blue-100 px-1 py-0.5 rounded">status</code> fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Directory Navigation */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12 border border-gray-100">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">API Interface Directory</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#auth-api" className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors">
                  <Shield className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Authentication API</span>
                </a>
                <a href="#search-api" className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors">
                  <Search className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Search API</span>
                </a>
                <a href="#data-api" className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors">
                  <Database className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Data API</span>
                </a>
                <a href="#export-api" className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors">
                  <FileJson className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Export API</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Authentication API */}
          <section id="auth-api" className="mb-16 scroll-mt-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Authentication API</h2>
              <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
            </div>
            
            <APICard 
              title="Get Access Token" 
              description="Obtain temporary access token using API key"
              endpoint="/auth/token"
              method="POST"
              icon={Shield}
              params={[
                {name: "api_key", type: "string", description: "API Key", required: true},
                {name: "scope", type: "string", description: "Requested permission scope", required: false}
              ]}
              responses={[
                {code: "200", description: "Success, returns access token"},
                {code: "401", description: "Unauthorized, invalid API key"},
                {code: "403", description: "Forbidden, insufficient permissions"}
              ]}
            />
            
            <APICard 
              title="Verify Token" 
              description="Verify the validity of an access token"
              endpoint="/auth/verify"
              method="GET"
              icon={Shield}
              params={[
                {name: "token", type: "string", description: "Access token", required: true}
              ]}
              responses={[
                {code: "200", description: "Token valid"},
                {code: "401", description: "Token invalid or expired"}
              ]}
            />
          </section>
          
          {/* Search API */}
          <section id="search-api" className="mb-16 scroll-mt-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Search API</h2>
              <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
            </div>
            
            <APICard 
              title="Address Search" 
              description="Query risk data by address"
              endpoint="/search/address"
              method="GET"
              icon={Search}
              params={[
                {name: "query", type: "string", description: "Address query string", required: true},
                {name: "limit", type: "integer", description: "Limit number of results", required: false},
                {name: "country", type: "string", description: "Country code", required: false}
              ]}
              responses={[
                {code: "200", description: "Success, returns search results"},
                {code: "400", description: "Bad request parameters"},
                {code: "404", description: "No matching addresses found"}
              ]}
            />
            
            <APICard 
              title="Batch Address Search" 
              description="Query risk data for multiple addresses in batch"
              endpoint="/search/batch"
              method="POST"
              icon={Database}
              params={[
                {name: "addresses", type: "array", description: "List of addresses", required: true},
                {name: "include_details", type: "boolean", description: "Include detailed information", required: false}
              ]}
              responses={[
                {code: "200", description: "Success, returns batch search results"},
                {code: "400", description: "Bad request parameters"},
                {code: "413", description: "Request entity too large"}
              ]}
            />
          </section>
          
          {/* Data API */}
          <section id="data-api" className="mb-16 scroll-mt-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Data API</h2>
              <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
            </div>
            
            <APICard 
              title="Get Risk Details" 
              description="Get detailed risk assessment data for a specific address"
              endpoint="/data/risk/{address_id}"
              method="GET"
              icon={Database}
              params={[
                {name: "address_id", type: "string", description: "Address ID", required: true},
                {name: "include_occupants", type: "boolean", description: "Include occupant information", required: false}
              ]}
              responses={[
                {code: "200", description: "Success, returns risk data"},
                {code: "400", description: "Bad request parameters"},
                {code: "404", description: "Address not found"}
              ]}
            />
            
            <APICard 
              title="Get Historical Data" 
              description="Get historical risk data for a specific address"
              endpoint="/data/history/{address_id}"
              method="GET"
              icon={RefreshCw}
              params={[
                {name: "address_id", type: "string", description: "Address ID", required: true},
                {name: "from_date", type: "string", description: "Start date (YYYY-MM-DD)", required: false},
                {name: "to_date", type: "string", description: "End date (YYYY-MM-DD)", required: false}
              ]}
              responses={[
                {code: "200", description: "Success, returns historical data"},
                {code: "400", description: "Bad request parameters"},
                {code: "404", description: "Address or historical data not found"}
              ]}
            />
          </section>
          
          {/* Export API */}
          <section id="export-api" className="mb-16 scroll-mt-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <FileJson className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Export API</h2>
              <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
            </div>
            
            <APICard 
              title="Create Export Task" 
              description="Create data export task"
              endpoint="/export/create"
              method="POST"
              icon={FileJson}
              params={[
                {name: "address_ids", type: "array", description: "List of address IDs", required: true},
                {name: "format", type: "string", description: "Export format (csv, json, xlsx)", required: true},
                {name: "include_details", type: "boolean", description: "Include detailed information", required: false}
              ]}
              responses={[
                {code: "200", description: "Success, returns export task ID"},
                {code: "400", description: "Bad request parameters"},
                {code: "413", description: "Request entity too large"}
              ]}
            />
            
            <APICard 
              title="Get Export Status" 
              description="Query the status of an export task"
              endpoint="/export/status/{export_id}"
              method="GET"
              icon={RefreshCw}
              params={[
                {name: "export_id", type: "string", description: "Export task ID", required: true}
              ]}
              responses={[
                {code: "200", description: "Success, returns task status"},
                {code: "404", description: "Export task not found"}
              ]}
            />
            
            <APICard 
              title="Download Export File" 
              description="Download completed export file"
              endpoint="/export/download/{export_id}"
              method="GET"
              icon={FileJson}
              params={[
                {name: "export_id", type: "string", description: "Export task ID", required: true}
              ]}
              responses={[
                {code: "200", description: "Success, returns file content"},
                {code: "404", description: "Export task or file not found"},
                {code: "409", description: "Export task not yet completed"}
              ]}
            />
          </section>
          
          {/* Code Examples */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Code Examples</h2>
              <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="border-b border-gray-100 px-6 py-4 flex items-center">
                <Terminal className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">JavaScript Example</h3>
              </div>
              <div className="p-6">
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  {`// Get access token
const getToken = async () => {
  const response = await fetch('https://api.riskmarker.com/v1/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      api_key: 'YOUR_API_KEY'
    })
  });
  
  const data = await response.json();
  return data.data.token;
};

// Search address
const searchAddress = async (token, address) => {
  const response = await fetch(\`https://api.riskmarker.com/v1/search/address?query=\${encodeURIComponent(address)}\`, {
    headers: {
      'Authorization': \`Bearer \${token}\`
    }
  });
  
  return await response.json();
};

// Usage example
(async () => {
  try {
    const token = await getToken();
    const results = await searchAddress(token, '123 Main St, New York, NY');
    console.log(results);
  } catch (error) {
    console.error('Error:', error);
  }
})();`}
                </pre>
              </div>
            </div>
          </section>
          
          {/* Help section */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm p-8 border border-blue-100 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Need More Help?</h2>
              <p className="text-gray-600 leading-relaxed">
                If you encounter any issues using the API or need additional technical support, please contact our development team.
              </p>
            </div>
            <Link to="/contact" className="flex-shrink-0 inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Contact Technical Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default APIDocumentation; 