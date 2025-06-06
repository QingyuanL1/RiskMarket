import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, FileText, Loader2, AlertTriangle, Download, MapPin, Building, BarChart, Info, List, CheckCircle, HelpCircle } from 'lucide-react';
import { api } from '../api'; // Import the api instance
import { parse } from 'papaparse'; // Import a CSV parser

// Placeholder structure for a row in the CSV data (adjust as needed)
interface ExportedDataRow {
  address: string;
  
  name: string;
  vicinity: string;
  types: string;
  lat: number;
  lng: number;
  business_status: string;
  Total_Score: number;
  Top3_Scores_Combined: string;
  [key: string]: any; // Allow for other potential columns
}

// Define structure for grouped data
interface GroupedExportData {
    mainAddress: string;
    buildingDetails: Record<string, string> | null;
    riskScores: { total?: number; top3?: string };
    occupants: ExportedDataRow[]; // Contains rows belonging to this group
}

// Building detail parser (reused)
const parseBuildingDetails = (rawAddress: string | undefined): Record<string, string> | null => {
    if (!rawAddress || typeof rawAddress !== 'string') return null;
    const lines = rawAddress.split(/\r?\n/).map(line => line.trim()).filter(line => line);
    if (lines.length <= 1) return null;
    const details: Record<string, string> = {};
    for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const value = parts.slice(1).join(':').trim();
            if (key && value) details[key] = value;
        }
    }
    return Object.keys(details).length > 0 ? details : null;
};

// Function to group data based on non-empty address field signifying group start
const groupExportedData = (content: ExportedDataRow[]): GroupedExportData[] => {
    const groupedData: GroupedExportData[] = [];
    let currentGroup: GroupedExportData | null = null;

    for (const row of content) {
        if (row.address && row.address.trim() !== '') {
            // Start of a new group
            const mainAddress = row.address.split(/\r?\n/)[0] || 'Address Unknown';
            const buildingDetails = parseBuildingDetails(row.address);
            const riskScores = { total: row.Total_Score, top3: row.Top3_Scores_Combined };
            currentGroup = {
                mainAddress,
                buildingDetails,
                riskScores,
                occupants: [row] // Start occupants list with the header row
            };
            groupedData.push(currentGroup);
        } else if (currentGroup) {
            // Row belongs to the current group (address is empty)
            currentGroup.occupants.push(row);
        } else {
            // Edge case: row with empty address before any group started (shouldn't happen with export logic)
            console.warn("Orphaned row found in exported data:", row);
            // Optionally, create a group with placeholder address? Or skip? Skipping for now.
        }
    }
    return groupedData;
};

const BatchExportDetailPage: React.FC = () => {
  const { filename: encodedFilename } = useParams<{ filename: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Store the grouped data
  const [groupedFileContent, setGroupedFileContent] = useState<GroupedExportData[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false); // State for download button
  const [error, setError] = useState<string | null>(null);
  const [downloadMessage, setDownloadMessage] = useState<string | null>(null); // For download status

  // Decode the filename from URL parameter
  const filename = encodedFilename ? decodeURIComponent(encodedFilename) : 'Unknown File';
  // Get filepath from state (passed via Link) - might not be needed if using filename
  const filepath = location.state?.filepath;

  useEffect(() => {
    // --- Fetch file content from backend ---
    const fetchAndGroupContent = async () => {
      if (!encodedFilename) {
         setError("No filename provided.");
         setIsLoading(false);
         return;
      }
      setIsLoading(true);
      setError(null);
      setGroupedFileContent(null); // Clear previous grouped data

      try {
        console.log(`Fetching content for: /api/view-export/${encodedFilename}`);
        // Fetch as text first to handle potential CSV response
        const response = await api.get(`/api/view-export/${encodedFilename}`, {
            responseType: 'text' // Explicitly request text
        });
        console.log("API Raw Response:", response);

        let rawContent: ExportedDataRow[] = [];

        // Check content type or attempt parsing
        if (response.headers && (response.headers['content-type']?.includes('text/csv') || typeof response.data === 'string')) {
            console.log("Response is likely CSV text, parsing...");
            const csvData = response.data as string;
            // Use papaparse for robust CSV parsing
            const parseResult = parse<ExportedDataRow>(csvData, {
                header: true, // Assuming first row is header
                skipEmptyLines: true,
                dynamicTyping: true, // Automatically convert numbers/booleans
                transformHeader: (header: string) => header.trim() // Trim header names
            });

            if (parseResult.errors.length > 0) {
                console.error("CSV Parsing errors:", parseResult.errors);
                // Maybe just show the first error
                throw new Error(`CSV Parsing Error: ${parseResult.errors[0].message}`);
            }

            // Validate required fields (optional but good practice)
            const requiredFields = ['address', 'name', 'vicinity', 'types', 'lat', 'lng', 'business_status', 'Total_Score', 'Top3_Scores_Combined'];
            const missingHeaders = requiredFields.filter(field => !parseResult.meta.fields?.includes(field));
            if (missingHeaders.length > 0) {
                 console.warn(`CSV missing expected headers: ${missingHeaders.join(', ')}. Attempting to continue.`);
                 // You might throw an error here if headers are strictly required
                 // throw new Error(`CSV missing expected headers: ${missingHeaders.join(', ')}`);
            }

            // Map parsed data, ensuring types are correct (papaparse helps with dynamicTyping)
            rawContent = parseResult.data.map((row: any) => ({
                ...row,
                // Explicit type casting if needed (though dynamicTyping should handle most)
                lat: Number(row.lat) || 0,
                lng: Number(row.lng) || 0,
                Total_Score: Number(row.Total_Score) || 0,
                // Ensure strings are strings even if empty
                address: String(row.address ?? ''),
                name: String(row.name ?? 'NA'),
                vicinity: String(row.vicinity ?? 'NA'),
                types: String(row.types ?? 'NA'),
                business_status: String(row.business_status ?? 'NA'),
                Top3_Scores_Combined: String(row.Top3_Scores_Combined ?? ''),
            }));
            console.log("Parsed CSV content:", rawContent);

        } else if (response.data && response.data.status === 'success' && Array.isArray(response.data.content)) {
            // Handle the originally expected JSON format
            console.log("Response is JSON, using original logic.");
            rawContent = response.data.content as ExportedDataRow[];
        }
         else {
            // Attempt to parse as JSON error object if possible
             let errorMsg = 'Failed to load file content or invalid format';
             try {
                 const jsonData = JSON.parse(response.data as string);
                 errorMsg = jsonData.error || errorMsg;
             } catch (jsonError) {
                 // Ignore if it's not JSON
             }
             throw new Error(errorMsg);
        }

        // Proceed with grouping
        if (rawContent.length > 0) {
            const grouped = groupExportedData(rawContent);
            setGroupedFileContent(grouped);
        } else {
             setGroupedFileContent([]);
        }

      } catch (err: any) {
        console.error("API/Parsing Error:", err);
        // Display a more informative error message
        let displayError = 'Failed to load or process file content.';
        if (err instanceof Error) {
            displayError = err.message;
        } else if (typeof err === 'string') {
            displayError = err;
        }
        setError(displayError);
        setGroupedFileContent(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndGroupContent();
    // --- End fetching logic ---

  }, [encodedFilename]); // Re-run only if filename changes

  // --- Download Handler (adapted from DataProcessingPage) ---
  const handleDownload = async () => {
    if (!filename || filename === 'Unknown File') {
      setDownloadMessage("Invalid filename for download");
      return;
    }

    setIsDownloading(true);
    setDownloadMessage(`Preparing download for ${filename}...`);

    try {
      const response = await api.get(`/api/download/${encodeURIComponent(filename)}`, {
        responseType: "blob",
      });

      // Check if the response is JSON (indicating an error from the backend)
      if (response.headers['content-type'] === 'application/json') {
           const errorJson = JSON.parse(await (response.data as Blob).text());
           throw new Error(errorJson.error || `Failed to download ${filename}`);
      }

      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: response.headers['content-type'] || 'text/csv' });
      const url = window.URL.createObjectURL(blob);

      // Create a link and trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename); // Use the actual filename
      document.body.appendChild(link);
      link.click();

      // Clean up
      link.remove();
      window.URL.revokeObjectURL(url);

      setDownloadMessage(`Download started for ${filename}`);
      // Clear message after a few seconds
      setTimeout(() => setDownloadMessage(null), 3000);

    } catch (error: any) {
      const errorMsg = error.response?.data?.error || error.message || "Unknown download error";
      console.error("Download error:", errorMsg);
      setDownloadMessage(`Download error: ${errorMsg}`);
      // Keep error message displayed longer or until dismissed
    } finally {
      setIsDownloading(false);
    }
  };
  // --- End Download Handler ---

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto"> {/* Using the 1200px width */} 
          {/* Header Section */}
          <div className="mb-6 flex flex-wrap justify-between items-center gap-4"> {/* Added flex-wrap and gap */} 
            <h1 className="text-2xl font-bold text-gray-800 flex items-center mr-4"> {/* Added mr-4 */} 
              <FileText className="w-6 h-6 mr-2 text-indigo-600 flex-shrink-0"/>
              <span className="truncate" title={filename}>Export: {filename}</span>
            </h1>
            <div className="flex items-center space-x-3"> {/* Group buttons */} 
                <button
                  onClick={handleDownload}
                  disabled={isDownloading || isLoading}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {isDownloading ? (
                     <Loader2 className="w-4 h-4 mr-2 animate-spin"/>
                   ) : (
                     <Download className="w-4 h-4 mr-2"/>
                   )}
                  Download CSV
                </button>
                <button
                  onClick={() => navigate('/data-processing')}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
                >
                  <ArrowLeft className="w-4 h-4 mr-1.5" />
                  Back
                </button>
            </div>
          </div>
           {/* Download Status Message */}
           {downloadMessage && (
               <div className={`mb-4 text-sm p-3 rounded-md ${downloadMessage.startsWith('Download error') ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                   {downloadMessage}
               </div>
            )}

          {/* Content Area - Render list of grouped cards */}
          <div className="space-y-6">
              {isLoading ? (
                <div className="bg-white rounded-lg shadow p-6 text-center py-12">
                  <Loader2 className="mx-auto h-8 w-8 animate-spin text-indigo-600" />
                  <p className="mt-2 text-sm text-gray-500">Loading file content...</p>
                </div>
              ) : error ? (
                <div className="bg-white rounded-lg shadow p-6 text-center py-12 bg-red-50 border border-red-200">
                   <AlertTriangle className="w-10 h-10 mx-auto text-red-400 mb-4" />
                   <p className="text-sm text-red-700">{error}</p>
                </div>
              ) : groupedFileContent && groupedFileContent.length > 0 ? (
                 <>
                    <p className="text-base text-gray-600 font-medium">
                      Displaying {groupedFileContent.length} address group(s) from {filename}
                    </p>
                    {groupedFileContent.map((group, index) => {
                        // Generate a unique ID for the link state for the group
                        const detailId = encodeURIComponent(`${filename}-group-${index}`);
                        // Prepare the state object for SearchResultDetailPage, passing ALL occupants
                        const detailState = {
                            id: detailId,
                            address: group.mainAddress, // Clean address for display
                            vacancies: parseInt(group.buildingDetails?.['Parking'] || '0'), // Example: Get vacancies from building details if available
                            photosCount: group.occupants.filter(o => o.name !== 'NA').length, // Example: Count actual occupants as photos?
                            dateLastUpdated: new Date().toLocaleDateString(), // Placeholder
                            imageUrl: undefined,
                            // Pass ALL occupants for this group
                            // Ensure the raw address needed for parsing is included
                            occupantDetailsRaw: group.occupants.map(occ => ({
                                ...occ,
                                // Make sure the address field for building details parsing is consistent
                                address: group.occupants[0]?.address || group.mainAddress 
                            })),
                            totalScore: group.riskScores.total,
                            top3ScoresCombined: group.riskScores.top3
                        };

                        return (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                {/* Group Header - Make this the link */}
                                <div className="px-5 py-3 sm:px-6 bg-gray-100 border-b border-gray-200">
                                    <Link 
                                      to={`/search-result/${detailId}`}
                                      state={detailState}
                                      className="block hover:bg-gray-200 -mx-5 -my-3 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 rounded-t-lg transition duration-150 ease-in-out"
                                      title={`View details for ${group.mainAddress}`}
                                    >
                                        <h3 className="text-base leading-6 font-medium text-gray-900 flex items-center">
                                            <MapPin className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0"/> {group.mainAddress}
                                        </h3>
                                    </Link>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                                    {/* Left Column: Building Details & Risk */}
                                    <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col p-5 sm:p-6 space-y-6">
                                        {group.buildingDetails && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-800 mb-3">Building Details</h4>
                                                <div className="text-xs text-gray-700 space-y-1.5">
                                                    {Object.entries(group.buildingDetails).map(([key, value]) => (
                                                        <p key={key} className="flex justify-between">
                                                            <span className="text-gray-500">{key}:</span>
                                                            <span className="font-medium text-gray-800 text-right truncate ml-2" title={value}>{value}</span>
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {(group.riskScores.total !== undefined || group.riskScores.top3) && (
                                            <div className={`${group.buildingDetails ? 'pt-6 border-t border-gray-100' : ''}`}>
                                                <h4 className="text-sm font-semibold text-gray-800 mb-3">Risk Analysis</h4>
                                                <div className="text-xs text-gray-700 space-y-2">
                                                    {group.riskScores.total !== undefined && (
                                                        <p className="flex justify-between items-center">
                                                            <span className="text-gray-500 flex items-center">
                                                                <BarChart className="w-3.5 h-3.5 mr-1.5"/>Total Score:
                                                                <span className="ml-1 cursor-help inline-block relative group">
                                                                    <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
                                                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 min-w-max px-3 py-2 text-xs font-medium text-white bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out pointer-events-none z-10 whitespace-nowrap">
                                                                        composite scores for all 18 disasters
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span className="font-semibold text-lg text-gray-900">{group.riskScores.total.toFixed(2)}</span>
                                                        </p>
                                                    )}
                                                    {group.riskScores.top3 && (
                                                        <div className="mt-2 pt-2 border-t border-gray-100">
                                                            <p className="font-medium text-gray-700 mb-1 flex items-center">
                                                                Top 3 Risks:
                                                                <span className="ml-1 cursor-help inline-block relative group">
                                                                    <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
                                                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 min-w-max px-3 py-2 text-xs font-medium text-white bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out pointer-events-none z-10 whitespace-nowrap">
                                                                        Top three disaster geo peril
                                                                    </span>
                                                                </span>
                                                            </p>
                                                            <div className="pl-2 space-y-0.5 text-gray-500 whitespace-pre-wrap">
                                                                {group.riskScores.top3}
                                                            </div>
                                                        </div>
                                                     )}
                                                 </div>
                                             </div>
                                         )}
                                    </div>

                                    {/* Right Column: Occupant Table (No links inside) */}
                                    <div className="lg:col-span-2 p-5 sm:p-6">
                                        <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                                            <List className="w-4 h-4 mr-1.5"/> Occupants at this Address ({group.occupants.length})
                                        </h4>
                                        <div className="overflow-x-auto border border-gray-200 rounded-md shadow-sm max-h-[60vh] overflow-y-auto custom-scrollbar">
                                            <table className="min-w-full divide-y divide-gray-200 table-auto">
                                                <thead className="bg-gray-50 sticky top-0 z-10">
                                                    <tr>
                                                        <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                        <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vicinity</th>
                                                        <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Types</th>
                                                        <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {group.occupants.map((item, occIndex) => (
                                                        <tr key={occIndex} className="hover:bg-gray-50 transition-colors text-xs">
                                                            <td className="px-3 py-2 whitespace-nowrap font-medium text-gray-800">{item.name !== 'NA' ? item.name : '-'}</td>
                                                            <td className="px-3 py-2 text-gray-600">{item.vicinity !== 'NA' ? item.vicinity : '-'}</td>
                                                            <td className="px-3 py-2 text-gray-600">{item.types !== 'NA' ? item.types : '-'}</td>
                                                            <td className="px-3 py-2 whitespace-nowrap">
                                                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${ 
                                                                    item.business_status === 'OPERATIONAL' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                                }`}>
                                                                    {item.business_status !== 'NA' ? item.business_status : '-'}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         );
                      })}
                 </>
              ) : groupedFileContent && groupedFileContent.length === 0 ? (
                 <div className="bg-white rounded-lg shadow p-6 text-center py-12">
                    <p className="text-sm text-gray-500">The exported file is empty.</p>
                 </div>
              ) : (
                 <div className="bg-white rounded-lg shadow p-6 text-center py-12">
                    <p className="text-sm text-gray-500">Could not load file content.</p>
                 </div>
              )}
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BatchExportDetailPage; 