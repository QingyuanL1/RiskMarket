import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import {
  Loader2,
  Upload,
  Cog,
  FileDown,
  Download,
  CheckCircle,
  AlertCircle,
  Info,
  FileText,
  Database,
  Table,
  BarChart,
  Search as SearchIcon,
  MapPin,
  Building,
  Users,
  ImageIcon,
  Bell,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { api, API_BASE_URL } from "../api";

interface ProcessedData {
  address: string;
  name: string;
  vicinity: string;
  types: string;
  lat: number;
  lng: number;
  business_status: string;
  Total_Score: number;
  Top3_Scores_Combined: string;
}

interface SingleSearchResult {
  id: string;
  address: string;
  occupants: number;
  vacancies: number;
  photos: number;
  operationAlerts: number;
  dateLastUpdated: string;
  imageUrl?: string;
  hasWarning?: boolean;
  type?: string;
  totalScore?: number;
  filtered_results?: any[];
  top3ScoresCombined?: string;
}

interface UploadedFileDetails {
    id: string;
    name: string;
    path: string;
}

interface ExportedFileInfo {
    id: string;
    name: string;
    path: string;
    exported_at?: string;
}

const DataProcessingPage: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [selectedFileForBatch, setSelectedFileForBatch] = useState<File | null>(null);
  const [uploadedFileDetails, setUploadedFileDetails] = useState<UploadedFileDetails | null>(null);

  const [internalBatchData, setInternalBatchData] = useState<ProcessedData[]>([]);
  const [recentSearches, setRecentSearches] = useState<SingleSearchResult[]>([]);
  const [currentSingleResult, setCurrentSingleResult] = useState<SingleSearchResult | null>(null);
  const [exportedFiles, setExportedFiles] = useState<ExportedFileInfo[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRecent, setIsLoadingRecent] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "warning" | "info";
    text: string;
  } | null>(null);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [exportedFileName, setExportedFileName] = useState("");

  const [singleSearchAddress, setSingleSearchAddress] = useState("");

  useEffect(() => {
    loadExportedFiles();
    loadRecentSearches();
  }, []);

  const loadExportedFiles = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/api/list-exported-files");
      if (response.data && response.data.status === 'success' && Array.isArray(response.data.files)) {
          const files = response.data.files.map((file: any) => ({
              id: file.id,
              name: file.name,
              path: file.path,
              exported_at: file.exported_at
          }));
          setExportedFiles(files);
      } else {
          console.error("Failed to load exported files or invalid format:", response.data);
          showMessage("Could not load previously exported files list.", "warning");
          setExportedFiles([]);
      }
    } catch (error: any) {
      console.error("Error loading exported files list:", error);
      showMessage(`Error loading exported files: ${error.response?.data?.error || error.message || 'Unknown error'}`, "error");
      setExportedFiles([]);
    } finally {
        setIsLoading(false);
    }
  };

  const loadRecentSearches = async () => {
    setIsLoadingRecent(true);
    try {
      const response = await api.get("/api/recent-searches");
      // Check for the 'searches' array in the response
      if (response.data && response.data.status === 'success' && Array.isArray(response.data.searches)) {
        const searches = response.data.searches.map((searchItem: any) => {
          // Extract the single result from the nested 'data' array
          const result = searchItem.data && searchItem.data.length > 0 ? searchItem.data[0] : null;
          const totalResults = searchItem.length || 0;

          if (!result) {
             // Handle cases where a search history item might have empty data
             console.warn("Recent search item has no result data:", searchItem);
             return {
                id: searchItem.search_id || Math.random().toString(36).substring(2, 9),
                address: searchItem.address_searched || 'Search Failed',
                occupants: totalResults,
                vacancies: 0,
                photos: 0,
                operationAlerts: 0,
                dateLastUpdated: new Date(searchItem.search_timestamp).toLocaleDateString(),
                imageUrl: undefined,
                hasWarning: true,
                type: 'Error',
                totalScore: 0,
                filtered_results: searchItem.filtered_results || [],
                top3ScoresCombined: undefined
             };
          }

          // --- Find the first valid photo reference --- 
          let photoReference: string | undefined = undefined;
          if (result.extra_info?.photos && Array.isArray(result.extra_info.photos)) {
            for (const photo of result.extra_info.photos) {
              if (photo.photo_reference) {
                photoReference = photo.photo_reference;
                break; // Found the first one, stop looking
              }
            }
          }
          console.log(`Photo reference for ${result.address}:`, photoReference);
          // --- End Photo Reference Logic --- 
          
          // Map the extracted result to the SingleSearchResult format
          const imageUrl = photoReference ? 
              `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyDJpECFECrlCJGhwE6nDY6DRvnWni8xFp0` : 
              undefined;
          const typesArray = Array.isArray(result.types) ? result.types : [];
          
          // --- Add Logging --- 
          console.log(`Mapping search item ${searchItem.search_id || 'N/A'}:`);
          console.log(`  Raw result.Total_Score: ${result.Total_Score}`);
          console.log(`  Raw result.extra_info?.rating: ${result.extra_info?.rating}`);
          const scoreToUse = result.Total_Score || 0;
          console.log(`  Assigning totalScore: ${scoreToUse}`);
          // --- End Logging ---
          
          return {
            id: searchItem.search_id || Math.random().toString(36).substring(2, 9),
            address: searchItem.address_searched || result.address || 'Search Failed',
            occupants: totalResults,
            vacancies: 0, 
            photos: result.extra_info?.photos?.length || 0,
            operationAlerts: typesArray.length,
            dateLastUpdated: new Date(searchItem.search_timestamp).toLocaleDateString(),
            imageUrl: imageUrl,
            hasWarning: result.business_status === "CLOSED_PERMANENTLY",
            type: typesArray.join(", "),
            totalScore: scoreToUse, // Use the logged value
            filtered_results: searchItem.filtered_results || [],
            top3ScoresCombined: result.Top3_Scores_Combined
          };
        });
        setRecentSearches(searches);
      } else {
        console.error("Failed to load recent searches or invalid format:", response.data);
        setRecentSearches([]);
      }
    } catch (error: any) {
      console.error("Error loading recent searches:", error);
      showMessage(`Error loading recent searches: ${error.response?.data?.error || error.message || 'Unknown error'}`, "error");
      setRecentSearches([]);
    } finally {
      setIsLoadingRecent(false);
    }
  };

  const handleFileSelectedForUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    const fileInput = event.target;

    setSingleSearchAddress("");
    
    const formData = new FormData();
    formData.append("file", file);

    setIsUploading(true);
    setMessage(null); 
    setUploadedFileDetails(null); 

    try {
      showMessage(`Uploading ${file.name}...`, "info");
      const response = await api.post("/api/upload-csv", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 && response.data.status === "success") {
        const filePath = response.data.file_path;
        const fileId = response.data.file_id;
        const fileName = filePath.split("/").pop();
        showMessage(
          `File uploaded successfully: ${fileName}`,
          "success"
        );
        setUploadedFileDetails({ id: fileId, name: fileName, path: filePath });
        fileInput.value = "";
      } else {
        showMessage(`Upload failed: ${response.data.error || 'Unknown upload error'}`, "error");
        setUploadedFileDetails(null);
        fileInput.value = "";
      }
    } catch (error: any) {
      showMessage(`Upload error: ${error.response?.data?.error || error.message || "Unknown error"}`, "error");
      setUploadedFileDetails(null);
      fileInput.value = "";
    } finally {
      setIsUploading(false);
    }
  };

  const handleProcessBatchData = async () => {
    if (!uploadedFileDetails) {
      showMessage("No file has been uploaded for processing.", "error");
      return;
    }

    setIsLoading(true);
    setInternalBatchData([]);
    setMessage(null);
    try {
      showMessage(`Processing ${uploadedFileDetails.name}...`, "info");
      const searchResponse = await api.post("/api/search", {
        file_id: uploadedFileDetails.id,
        api_key: "AIzaSyDJpECFECrlCJGhwE6nDY6DRvnWni8xFp0",
        tables: ["us_real_estate"],
      });

      if (searchResponse.status !== 200 || searchResponse.data.status !== 'success') {
        throw new Error(searchResponse.data.error || "Batch data processing failed");
      }

      showMessage(`Matching Yelp data for ${uploadedFileDetails.name}...`, "info");
      const yelpResponse = await api.post("/api/match-yelp", {
        data: searchResponse.data.data, 
      });

      if (yelpResponse.status !== 200 || yelpResponse.data.status !== 'success') {
        throw new Error(yelpResponse.data.error || "Yelp data matching failed for batch");
      }

      setInternalBatchData(yelpResponse.data.data);
      showMessage("Processing successful, preparing export...", "success");

      await handleExport(yelpResponse.data.data);
      
      setUploadedFileDetails(null);

    } catch (error: any) {
      showMessage(
        `Batch processing error: ${error.message || "Unknown error"}`,
        "error"
      );
    }
  };

  const handleSingleSearch = async () => {
    if (!singleSearchAddress) {
      showMessage("Please enter an address for single search", "error");
      return;
    }
    
    setIsLoading(true);
    showMessage(`Searching for ${singleSearchAddress}...`, "info");
    
    try {
      // Call the nearby-search endpoint
      const response = await api.get(`/api/nearby-search`, {
        params: {
          address: singleSearchAddress
        }
      });
      
      if (response.status !== 200 || response.data.status !== 'success') {
        throw new Error(response.data.error || "Single search failed");
      }
      
      // Process the response data
      const searchData = response.data.data;
      const totalResults = response.data.length || 0;
      
      if (!searchData || searchData.length === 0) {
        showMessage("No results found for this address", "warning");
        setIsLoading(false);
        return;
      }
      
      // Format the data for display
      const result = searchData[0]; // Get the first (and likely only) result
      
      // Map the API response to our SingleSearchResult format
      const formattedResult: SingleSearchResult = {
        id: Math.random().toString(36).substring(2, 9), // Generate a random ID
        address: singleSearchAddress || result.address || 'Address not found',
        occupants: totalResults, // Total number of businesses at this address from length field
        vacancies: 2, // Default value for now
        photos: result.extra_info?.photos?.length || 0,
        operationAlerts: result.types?.length || 0, // Number of business types as operation alerts
        dateLastUpdated: new Date().toLocaleDateString(),
        type: Array.isArray(result.types) ? result.types.join(", ") : result.types,
        totalScore: result.Total_Score || 0,
        hasWarning: result.business_status === "CLOSED_PERMANENTLY",
        imageUrl: result.extra_info?.photos?.[0]?.photo_reference ? 
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.extra_info.photos[0].photo_reference}&key=AIzaSyDJpECFECrlCJGhwE6nDY6DRvnWni8xFp0` : 
          undefined,
        filtered_results: searchData || [],
        top3ScoresCombined: result.Top3_Scores_Combined
      };
      
      // Update the current result
      setCurrentSingleResult(formattedResult);
      
      // Add to recent searches (at the beginning)
      setRecentSearches(prevSearches => [formattedResult, ...prevSearches]);
      
      showMessage(`Found result for ${singleSearchAddress}`, "success");
      
    } catch (error: any) {
      console.error("Single search error:", error);
      showMessage(
        `Search error: ${error.response?.data?.error || error.message || "Unknown error"}`,
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    if (uploadedFileDetails) {
      handleProcessBatchData();
    } else {
      showMessage("Please upload a CSV file and wait for upload to complete.", "warning");
    }
  };

  const handleExport = async (dataToExport: ProcessedData[]) => {
    if (dataToExport.length === 0) {
      showMessage("No processed data available to export", "warning");
      setIsLoading(false);
      return;
    }

    if (!isLoading) setIsLoading(true); 
    showMessage("Exporting data to CSV...", "info");

    try {
      const response = await api.post("/api/export", {
        data: dataToExport, 
      });

      if (response.status === 200 && response.data.status === 'success') {
        const result = response.data;
        const newExportedFile: ExportedFileInfo = {
          id: result.file_id,
          name: result.file_path.split("/").pop(),
          path: result.file_path,
          exported_at: result.exported_at,
        };

        setExportedFiles(prev => [newExportedFile, ...prev]);
        setExportedFileName(newExportedFile.name);
        showMessage(
          `Export successful: ${newExportedFile.name}. Click Download below or in the list.`, 
          "success"
        );
        setInternalBatchData([]);
      } else {
          throw new Error(response.data.error || "Export failed");
      }
    } catch (error: any) {
      showMessage(`Export error: ${error.message || "Unknown error"}`, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (filenameToDownload: string) => {
    if (!filenameToDownload) {
      showMessage("Invalid filename for download", "error");
      return;
    }

    setIsLoading(true);
    showMessage(`Preparing download for ${filenameToDownload}...`, "info");

    try {
      const response = await api.get(`/api/download/${filenameToDownload}`, {
        responseType: "blob",
      });

      if (response.headers['content-type'] === 'application/json') {
           const errorJson = JSON.parse(await (response.data as Blob).text());
           throw new Error(errorJson.error || `Failed to download ${filenameToDownload}`);
      }

      const blob = new Blob([response.data], { type: response.headers['content-type'] || 'text/csv' });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filenameToDownload);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      showMessage(`Download started for ${filenameToDownload}`, "success");
    } catch (error: any) {
      showMessage(
        `Download error: ${error.response?.data?.error || error.message || "Unknown error"}`,
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const showMessage = (
    text: string,
    type: "success" | "error" | "warning" | "info"
  ) => {
    setMessage({ type, text });
  };

  const SingleSearchResultCard: React.FC<{ result: SingleSearchResult & { filtered_results?: any[] } }> = ({ result }) => {
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
      setImageError(false);
    }, [result.imageUrl]);

    const handleImageError = () => {
      setImageError(true);
    };

    const detailState = {
      address: result.address,
      vacancies: result.vacancies,
      photosCount: result.photos,
      dateLastUpdated: result.dateLastUpdated,
      imageUrl: result.imageUrl,
      occupantDetailsRaw: result.filtered_results || [],
      id: result.id,
      totalScore: result.totalScore,
      top3ScoresCombined: result.top3ScoresCombined
    };
  
    return (
      <Link
        to={`/search-result/${result.id}`}
        state={detailState}
        className="block bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        title={`View details for ${result.address}`}
      >
        <div className="flex">
          {/* Content Section */}
          <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
            <div>
              <p className="text-base font-semibold text-gray-800 mb-2 flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                <span className="truncate">Address: {result.address}</span>
              </p>
              <div className="text-xs sm:text-sm text-gray-600 space-y-2">
                <p className="flex items-center"><Users className="w-4 h-4 mr-2 text-blue-500" /> Occupants: {result.occupants}</p>
                <p className="flex items-center"><Building className="w-4 h-4 mr-2 text-blue-500" /> Vacancies: {result.vacancies}</p>
                <p className="flex items-center"><ImageIcon className="w-4 h-4 mr-2 text-blue-500" /> Photos: {result.photos}</p>
                <p className={`flex items-center ${result.operationAlerts > 0 ? 'text-red-600 font-medium' : ''}`}>
                  <Bell className={`w-4 h-4 mr-2 ${result.operationAlerts > 0 ? 'text-red-500' : 'text-blue-500'}`} />
                  Operation Alerts: {result.operationAlerts}
                </p>
                <p className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-blue-500" /> Last Updated: {result.dateLastUpdated}</p>
                {result.type && (
                  <p className="flex items-center"><Table className="w-4 h-4 mr-2 text-blue-500" /> Type: <span className="truncate inline-block max-w-xs" title={result.type}>{result.type}</span></p>
                )}
                {result.totalScore !== undefined && result.totalScore > 0 && (
                  <p className="flex items-center"><BarChart className="w-4 h-4 mr-2 text-blue-500" /> Risk Score: {result.totalScore.toFixed(2)}</p>
                )}
              </div>
            </div>
          </div>
          {/* Arrow/Indicator Section */}
          <div className={`flex flex-col justify-center items-center p-3 sm:p-4 border-l border-gray-200 transition-colors ${result.hasWarning ? 'bg-red-50' : 'bg-gray-50'}`}>
             {result.hasWarning && <AlertCircle className="w-5 h-5 text-red-600 mb-2 flex-shrink-0" />}
             <div className="text-blue-600">
                <ArrowRight className="w-5 h-5" />
             </div>
          </div>
        </div>
      </Link>
    );
  };

  const ExportedFileItem: React.FC<{ file: ExportedFileInfo }> = ({ file }) => (
      <Link
        to={`/batch-export-detail/${encodeURIComponent(file.name)}`}
        state={{ filename: file.name, filepath: file.path }}
        className="text-sm py-3 px-4 flex items-center justify-between border-b border-gray-200 last:border-b-0 hover:bg-gray-100 transition-colors duration-150 ease-in-out block focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 rounded-md"
        title={`View details for ${file.name}`}
      >
          <div className="flex items-center min-w-0 mr-4">
            <FileText className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0"/>
            <span className="truncate font-medium text-gray-800" title={file.name}>{file.name}</span>
          </div>
          <div className="flex items-center flex-shrink-0">
            {file.exported_at && <span className="text-xs text-gray-500 mr-4 whitespace-nowrap hidden sm:inline">{new Date(file.exported_at).toLocaleDateString()}</span>}
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
          </div>
      </Link>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Header Section */}
      {/* <header className="py-12 sm:py-16 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div>
      </header> */}

      <main className="flex-grow py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Column: Results */}
            <div className="space-y-12">
              {/* Recent Searches Section */}
              <section id="recent-searches">
                <h2 className="text-2xl font-neuton font-bold text-gray-800 mb-6">
                  Recent Single Searches
                </h2>
                {currentSingleResult && (
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <h3 className="text-sm font-medium text-indigo-600 mb-3 uppercase tracking-wide">Latest Result</h3>
                    <SingleSearchResultCard result={currentSingleResult} />
                  </div>
                )}
                <div className="space-y-5 max-h-[600px] overflow-y-auto pr-2 -mr-2 custom-scrollbar">
                  {isLoadingRecent ? (
                    <div className="text-center py-12">
                      <Loader2 className="mx-auto h-8 w-8 animate-spin text-indigo-600" />
                      <p className="mt-2 text-sm text-gray-500">Loading recent searches...</p>
                    </div>
                  ) : recentSearches.length > 0 ? (
                    recentSearches
                      .filter(result => !currentSingleResult || result.id !== currentSingleResult.id)
                      .map((result) => (
                      <SingleSearchResultCard key={result.id} result={result} />
                    ))
                  ) : (
                    <div className="text-center py-12 px-6 bg-gray-100 rounded-lg border border-gray-200 border-dashed">
                      <SearchIcon className="w-10 h-10 mx-auto text-gray-400 mb-4" />
                      <p className="text-sm text-gray-500">Your recent single property searches will appear here.</p>
                    </div>
                  ) }
                </div>
              </section>

              {/* Exported Files Section */}
              <section id="exported-files">
                <h2 className="text-2xl font-neuton font-bold text-gray-800 mb-6">
                  Batch Export History
                </h2>
                <div className="border rounded-lg overflow-hidden bg-white shadow-sm border-gray-200 max-h-[400px] overflow-y-auto custom-scrollbar">
                  {exportedFiles.length > 0 ? (
                    exportedFiles.map((file) => (
                      <ExportedFileItem key={file.id || file.name} file={file} />
                    ))
                  ) : (
                    <div className="text-center py-12 px-6">
                      <FileDown className="w-10 h-10 mx-auto text-gray-400 mb-4" />
                      <p className="text-sm text-gray-500">Exported CSV files from batch processing will appear here.</p>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* Right Column: New Search */}
            <div className="space-y-12">
              <section id="new-search" className="p-6 sm:p-8">
                {/* Single Property Search */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                    Single Property Lookup
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                    <div>
                      <label htmlFor="singleAddress" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Property Address
                      </label>
                      <input
                        type="text"
                        id="singleAddress"
                        value={singleSearchAddress}
                        onChange={(e) => {
                          setSingleSearchAddress(e.target.value);
                          if (e.target.value && uploadedFileDetails) {
                            setUploadedFileDetails(null);
                            setMessage(null);
                          }
                        }}
                        placeholder="e.g., 123 Main St, Anytown, CA 91234"
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-indigo-50 transition duration-150 ease-in-out sm:text-sm"
                        disabled={isLoading || isUploading}
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-sm font-medium text-gray-500">OR</span>
                  </div>
                </div>

                {/* Batch Property Search */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-indigo-600" />
                    Batch Search via CSV Upload
                  </h3>
                  <div className="mb-4">
                    <label 
                      htmlFor="batchCsvUpload"
                      className={`relative block w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-6 text-center transition duration-150 ease-in-out focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 ${isUploading ? 'opacity-60 cursor-not-allowed bg-gray-100' : 'bg-white'}`}
                    >
                      {isUploading ? (
                        <div className="flex flex-col items-center justify-center space-y-2 py-4">
                          <Loader2 className="mx-auto h-8 w-8 animate-spin text-indigo-600" />
                          <span className="mt-2 block text-sm font-medium text-gray-700">Uploading... Please wait.</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center space-y-2 py-4">
                            <Upload className="mx-auto h-8 w-8 text-indigo-500" />
                            <span className="block text-sm font-medium text-gray-700">
                              {uploadedFileDetails ? 'Choose a different file' : 'Click or drag CSV file here'}
                            </span>
                            <span className="mt-1 block text-xs text-gray-500">.csv format required</span>
                        </div>
                      )}
                      <input
                        type="file"
                        id="batchCsvUpload"
                        name="file" 
                        accept=".csv"
                        onChange={(e) => {
                          handleFileSelectedForUpload(e);
                          if (e.target.files && e.target.files.length > 0) {
                            setSingleSearchAddress('');
                          }
                        }}
                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        disabled={isUploading}
                      />
                    </label>
                  </div>

                  {uploadedFileDetails && !singleSearchAddress && (
                    <div className="text-sm text-green-700 mt-4 bg-green-50 p-4 rounded-lg border border-green-200 shadow-sm">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                        <p>Ready to process: <span className="font-semibold">{uploadedFileDetails.name}</span></p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="mt-8">
                  <button
                    onClick={singleSearchAddress ? handleSingleSearch : handleSearch}
                    disabled={isLoading || isUploading || (!singleSearchAddress && !uploadedFileDetails)}
                    className="w-full flex justify-center items-center py-3.5 px-6 rounded-lg bg-indigo-600 text-white text-base font-semibold hover:bg-indigo-700 transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 mr-2 inline animate-spin" />
                    ) : (
                      <SearchIcon className="w-5 h-5 mr-2 inline" />
                    )}
                    {isLoading ? 'Processing...' : (singleSearchAddress ? 'Search Address' : (uploadedFileDetails ? 'Process Batch File' : 'Search'))}
                  </button>
                </div>

                {/* Message Area */}
                {message && (
                  <div
                    className={`mt-6 rounded-lg p-4 border shadow-sm ${ 
                      message.type === "success"
                        ? "bg-green-50 text-green-800 border-green-300"
                        : message.type === "error"
                        ? "bg-red-50 text-red-800 border-red-300"
                        : message.type === "warning"
                        ? "bg-yellow-50 text-yellow-800 border-yellow-300"
                        : "bg-blue-50 text-blue-800 border-blue-300" // Info
                    }`}
                    role="alert"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        {message.type === "success" && (
                          <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" /> 
                        )}
                        {message.type === "error" && (
                          <AlertCircle className="w-5 h-5 text-red-500" aria-hidden="true" /> 
                        )}
                        {message.type === "info" && <Info className="w-5 h-5 text-blue-500" aria-hidden="true" />} 
                        {message.type === "warning" && <AlertCircle className="w-5 h-5 text-yellow-500" aria-hidden="true" />} 
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium">{message.text}</p> 
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DataProcessingPage;
