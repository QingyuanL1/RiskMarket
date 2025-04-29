import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface SubProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

const LessorsRiskOnly = () => {
  const [lroData, setLroData] = useState<SubProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Get LRO sub-product data from ProductDetail
    setLoading(true);
    setTimeout(() => {
      const productsData = {
        commercial: {
          subProducts: [
            {
              id: "lro",
              title: "Lessors Risk Only",
              description:
                "Commercial insurers manually collect information on multi-tenantbuildings to determine the occupancy of these buildings. LROprograms rely heavily on the type of occupancy of multi-tenantbuildings which is inherently variable over time. Leverage our data toautomate building tenancy, operations, and occupancy inquiriesthrough a user interface or an API with sub second results",
              image:
                "https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              tag: "Location Analysis",
            },
          ],
        },
      };

      const lroProduct = productsData.commercial.subProducts.find(
        (p) => p.id === "lro"
      );

      setLroData(lroProduct || null);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!lroData) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-4xl font-neuton font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
            Product Not Found
          </h1>
          <div className="mt-10">
            <Link
              to="/products"
              className="inline-block py-3 px-8 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 bg-blue-50">
        <div className="w-full max-w-2xl px-8">
          <h1 className="text-4xl font-neuton font-bold tracking-tight text-gray-900 leading-tight mb-6">
            {lroData.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
            {lroData.description}
          </p>
          <div className="mt-8 flex space-x-4">
            <Link
              to="/contact?product=commercial&subproduct=lro"
              className="inline-block py-3 px-8 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/contact?product=commercial&subproduct=lro"
              className="inline-block py-3 px-8 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="h-full relative">
          <img
            src={lroData.image}
            alt={lroData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-20"></div>
          <div className="absolute top-8 left-8">
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
              {lroData.tag}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessorsRiskOnly;
