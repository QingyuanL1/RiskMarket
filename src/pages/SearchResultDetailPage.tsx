import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  MapPin, Building, Users, ImageIcon, Calendar, Loader2,
  ArrowLeft, Download, RefreshCw, ArrowRight, AlertTriangle
} from 'lucide-react';
import { api } from '../api'; // Assuming api setup is similar

// Interface for raw occupant data (matching filtered_results)
interface RawOccupantData {
    name: string;
    types: string[] | string; // Allow types to be string[] or string
    business_status: string;
    // Add other fields from filtered_results if needed
}

// Interface for processed occupant data for the table
interface OccupantDetail {
  name: string;
  operations: string;
  // alerts: string[]; // Removed alerts
}

// Interface for the detail page data state
interface SearchResultDetailData {
  id: string;
  address: string;
  occupants: number;
  vacancies: number;
  photos: number;
  dateLastUpdated: string;
  imageUrl?: string;
  rentalRate?: string;
  occupantDetails: OccupantDetail[]; // Use the processed format here
  totalScore?: number; // Added Total Risk Score
  top3ScoresCombined?: string; // Added Top 3 Scores
}

// Helper function to map raw occupant data to table format
const mapOccupantData = (rawData: RawOccupantData[]): OccupantDetail[] => {
    return rawData.map(item => {
        let operationsContent = 'N/A';
        if (Array.isArray(item.types)) {
            operationsContent = item.types.join(', ');
        } else if (typeof item.types === 'string' && item.types.length > 0) {
            // Handle case where 'types' might already be a string
            operationsContent = item.types;
        }
        // Ensure empty strings become 'N/A'
        if (operationsContent.trim() === '') {
            operationsContent = 'N/A';
        }

        return {
            name: item.name || 'N/A',
            operations: operationsContent,
            // alerts: [] // Removed alerts
        };
    });
};

// Function to parse building details from the raw address string
const parseBuildingDetails = (rawAddress: string | undefined): Record<string, string> | null => {
    if (!rawAddress || typeof rawAddress !== 'string') {
        return null;
    }
    // Use regex to handle both \n and literal \n from stringified JSON
    const lines = rawAddress.split(/\r?\n/).map(line => line.trim());
    if (lines.length <= 1) {
        return null; // Only address line found
    }
    const details: Record<string, string> = {};
    // Start from the second line (index 1)
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line) continue; // Skip empty lines
        const parts = line.split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const value = parts.slice(1).join(':').trim(); // Join back in case value has ':'
            if (key && value) {
              details[key] = value;
            }
        }
    }
    return Object.keys(details).length > 0 ? details : null;
};

const SearchResultDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation(); // Get location object
  const [resultData, setResultData] = useState<SearchResultDetailData | null>(null);
  const [buildingDetails, setBuildingDetails] = useState<Record<string, string> | null>(null); // State for building details
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  // Function to handle image loading errors
  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      setImageError(false); // Reset image error on new load
      setBuildingDetails(null); // Reset building details
      // --- Check for state passed via Link ---
      const passedState = location.state as any; // Type assertion needed

      if (passedState && passedState.id === id) {
          console.log("Using passed state:", passedState);
          try {
              // Map the raw occupant data from the state
              const mappedOccupants = mapOccupantData(passedState.occupantDetailsRaw || []);

              // --- Parse Building Details --- 
              const rawAddressFromState = passedState.occupantDetailsRaw?.[0]?.address;
              const parsedDetails = parseBuildingDetails(rawAddressFromState);
              setBuildingDetails(parsedDetails); // Update the new state
              // --- End Parse Building Details ---

              // Construct the resultData from the passed state
              const dataFromState: SearchResultDetailData = {
                  id: passedState.id,
                  address: passedState.address || 'Address not found', // This is the CLEAN address
                  occupants: mappedOccupants.length, // Use length of mapped occupants
                  vacancies: passedState.vacancies ?? 0, 
                  photos: passedState.photosCount ?? 0, 
                  dateLastUpdated: passedState.dateLastUpdated || new Date().toLocaleDateString(),
                  imageUrl: passedState.imageUrl,
                  rentalRate: parsedDetails?.['Rental Rate'] || passedState.rentalRate || 'N/A', // Get Rental Rate from details if available
                  occupantDetails: mappedOccupants,
                  totalScore: passedState.totalScore, // Get totalScore from state
                  top3ScoresCombined: passedState.top3ScoresCombined // Get top3ScoresCombined from state
              };
              setResultData(dataFromState);
          } catch (mappingError) {
              console.error("Error processing passed state:", mappingError);
              setError("Error processing data. Please try refreshing.");
          } finally {
              setIsLoading(false);
          }
      } else {
        // --- Fallback: Fetch data if no state or ID mismatch ---
        console.log("No valid state found or ID mismatch, fetching data for ID:", id);
        // TODO: Implement actual API call here
        // This part remains placeholder for now
        try {
          await new Promise(resolve => setTimeout(resolve, 500)); // Simulate fetch
          // Placeholder data if fetch is needed (should be replaced by API response)
          const placeholderRawAddress = "Fetched: 123 Main St, Anytown USA\nYear Built: 2000\nParking: 50 Spaces"; // Example raw address for placeholder
          const placeholderOccupantsRaw = [
            { name: "Placeholder Business 1", types: ["store"], business_status: "OPERATIONAL", address: placeholderRawAddress },
            { name: "Closed Business", types: ["restaurant"], business_status: "CLOSED_TEMPORARILY", address: placeholderRawAddress },
          ];
          const placeholderOccupantsFetched = mapOccupantData(placeholderOccupantsRaw);
          const placeholderParsedDetails = parseBuildingDetails(placeholderRawAddress);
          setBuildingDetails(placeholderParsedDetails); // Set details for placeholder

          const placeholderDataFetched: SearchResultDetailData = {
              id: id || 'unknown-fetch',
              address: "Fetched: 123 Main St, Anytown USA", // Clean address for placeholder
              occupants: placeholderOccupantsFetched.length,
              vacancies: 2,
              photos: 1,
              dateLastUpdated: "Fetched: 01/01/25",
              rentalRate: placeholderParsedDetails?.['Rental Rate'] || "$10-$15 sf/yr",
              imageUrl: undefined, // No image fetched in placeholder
              occupantDetails: placeholderOccupantsFetched,
              totalScore: 55.5, // Example placeholder score
              top3ScoresCombined: "RiskA: 90\nRiskB: 85\nRiskC: 80" // Example placeholder top scores
          };
          setResultData(placeholderDataFetched);
        } catch (fetchError) {
          console.error("Error fetching details:", fetchError);
          setError("Failed to load search result details.");
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (id) {
      loadData();
    } else {
      setError("No search result ID provided.");
      setIsLoading(false);
    }
    // Add location.state to dependency array if you want it to re-run if state changes
    // but usually it's set on initial navigation. ID is the primary trigger.
  }, [id, location.state]); // Rerun if ID changes or state is newly available

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error || !resultData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center px-4">
           <p className="text-red-600 mb-4">{error || "Could not load result data."}</p>
           <button
             onClick={() => navigate(-1)} // Go back to the previous page
             className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
           >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
           </button>
        </main>
        <Footer />
      </div>
    );
  }

  // The detail view structure from the previous attempt, adapted for a full page
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
            {/* Header Section with Title and Back Button */}
             <div className="mb-6 flex justify-between items-center">
                 <h1 className="text-2xl font-bold text-gray-800 flex items-center">
                     <MapPin className="w-6 h-6 mr-2 text-blue-600"/>
                     Risk Marker
                 </h1>
                 <button
                    onClick={() => navigate('/data-processing')} // Navigate back to the main processing page
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
                 >
                     <ArrowLeft className="w-4 h-4 mr-1.5" />
                     Back to Search List
                 </button>
             </div>

            {/* Main Detail Card - Apply styling consistency */}
             <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                 {/* Card Header with Address - Blue background */}
                <div className="px-5 py-4 sm:px-6 bg-blue-600 text-white">
                  <h2 className="text-lg leading-6 font-semibold">
                    {resultData.address}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left Column: Overview + Image */}
                  <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col">
                    {/* Address Overview - Remove background */}
                    <div className="p-5 sm:p-6"> 
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Address Overview</h3>
                      <div className="text-sm text-gray-700 space-y-2">
                        <p className="flex justify-between"><span>Vacancies:</span> <span className="font-medium text-gray-900">{resultData.vacancies}</span></p>
                        <p className="flex justify-between"><span>Rental Rate:</span> <span className="font-medium text-gray-900">{resultData.rentalRate || 'N/A'}</span></p>
                        <p className="flex justify-between"><span>Occupants:</span> <span className="font-medium text-gray-900">{resultData.occupants}</span></p>
                        <p className="flex justify-between"><span>Photos:</span> <span className="font-medium text-gray-900">{resultData.photos}</span></p>
                        <p className="flex justify-between"><span>Last Update:</span> <span className="font-medium text-gray-900">{resultData.dateLastUpdated}</span></p>
                      </div>
                    </div>

                    {/* Building Details Section - Remove background and border */}
                    {buildingDetails && (
                        <div className="p-5 sm:p-6">
                            <h3 className="text-base font-semibold text-gray-900 mb-4">Building Details</h3>
                            <div className="text-sm text-gray-700 space-y-2">
                                {Object.entries(buildingDetails).map(([key, value]) => (
                                    <p key={key} className="flex justify-between">
                                        <span>{key}:</span> <span className="font-medium text-gray-900 text-right truncate" title={value}>{value}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Risk Analysis Section - Remove background and border */} 
                    {(resultData.totalScore !== undefined || resultData.top3ScoresCombined) && (
                        <div className="p-5 sm:p-6">
                            <h3 className="text-base font-semibold text-gray-900 mb-4">Risk Analysis</h3>
                            <div className="text-sm text-gray-700 space-y-3">
                                {resultData.totalScore !== undefined && (
                                    <p className="flex justify-between">
                                        <span>Total Risk Score:</span> 
                                        <span className="font-medium text-gray-900">
                                            {resultData.totalScore.toFixed(2)}
                                        </span>
                                    </p>
                                )}
                                {resultData.top3ScoresCombined && (
                                    <div>
                                        <p className="font-medium text-gray-800 mb-1">Top 3 Risks:</p>
                                        {/* Render multi-line scores */} 
                                        <div className="pl-2 space-y-1 text-gray-600">
                                            {resultData.top3ScoresCombined.split(/\r?\n/).map((line, index) => (
                                                <p key={index}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                  </div>

                  {/* Right Column: Occupant Detail */}
                  <div className="lg:col-span-2 flex flex-col">
                    {/* Table Section - Consistent padding */}
                    <div className="p-5 sm:p-6 flex-grow">
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Occupant Detail</h3>
                      <div className="overflow-x-auto border border-gray-200 rounded-md shadow-sm max-h-[60vh] overflow-y-auto custom-scrollbar">
                        <table className="min-w-full divide-y divide-gray-200 table-fixed">
                          <thead className="bg-gray-100 sticky top-0 z-10">
                            <tr>
                              <th scope="col" className="w-1/2 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Occupant</th>
                              <th scope="col" className="w-1/2 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operations</th>
                              {/* <th scope="col" className="w-1/5 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alerts</th> */}
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {resultData.occupantDetails.map((occupant, index) => (
                              <tr key={index} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer underline truncate" title={occupant.name}>{occupant.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-700 truncate" title={occupant.operations}>{occupant.operations}</td>
                                {/*
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-red-600">
                                  {occupant.alerts.length > 0 && (
                                    <div className="flex items-center space-x-1.5" title={occupant.alerts.join(', ')}>
                                      <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                                      <span className="font-medium truncate">{occupant.alerts.join(', ')}</span>
                                    </div>
                                  )}
                                </td>
                                */}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* Bottom Controls - Styled like DataProcessingPage */}
                     <div className="px-5 py-4 sm:px-6 bg-gray-50 border-t border-gray-200 flex items-center justify-between mt-auto">
                         <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                             <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                             Previous
                         </button>
                         <div className="flex items-center space-x-2">
                             {/* Export button - Blue style */}
                             <button className="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                 <Download className="w-3.5 h-3.5 mr-1.5" />
                                 Export
                             </button>
                             {/* Refresh button - White style */}
                             <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500">
                                 <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                                 Refresh
                             </button>
                         </div>
                         <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                             Next
                             <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                         </button>
                     </div>
                  </div>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResultDetailPage; 