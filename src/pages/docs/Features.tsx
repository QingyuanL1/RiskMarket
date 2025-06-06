import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FileText } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Geo peril Data Dictionary</h1>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8 mb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-md">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sort</th>
                    <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field Name</th>
                    <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field Alias</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">1</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">ZIP</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Postal code</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">2</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">AVLN_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Avalanche scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">3</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">CFLD_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">CoastalFlooding scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">4</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">CWAV_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">ColdWave scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">5</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">DRGT_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Drought scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">6</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">ERQK_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Earthquake scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">7</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">HAIL_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Hail scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">8</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">HWAV_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">HeatWave scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">9</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">HRCN_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Hurricane scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">10</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">ISTM_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">IceStorm scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">11</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">LNDS_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Landslide scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">12</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">LTNG_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Lightning scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">13</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">RFLD_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">RiverineFlooding scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">14</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">SWND_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">StrongWind scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">15</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">TRND_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Tornado scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">16</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">TSUN_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Tsunami scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">17</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">VLCN_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">VolcanicActivity scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">18</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">WFIR_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Wildfire scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">19</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">WNTW_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">WinterWeather scores, 0-100, 3 decimals</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">20</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-blue-700">Total_Score</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Composite scores for all 18 disasters mentioned above, 0-100, 3 decimals</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features; 