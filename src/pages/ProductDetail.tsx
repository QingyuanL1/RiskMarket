import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface SubProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tag: string;
  features: string[];
  subProducts?: SubProduct[];
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    setLoading(true);

    // Simulate API fetch
    setTimeout(() => {
      const productsData: Record<string, Product> = {
        commercial: {
          id: "commercial",
          title: "Commercial Property & Casualty",
          description:
            "Comprehensive data solutions for commercial property and casualty insurance.",
          longDescription:
            "Our Commercial Property & Casualty products provide insurers with accurate risk assessment and pricing models for businesses of all sizes. We analyze multiple data points to deliver actionable insights for underwriting and pricing decisions.",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tag: "Commercial",
          features: [
            "Risk assessment models tailored to industry-specific needs",
            "Comprehensive location risk analysis",
            "Customizable underwriting guidelines",
            "Real-time risk monitoring",
          ],
          subProducts: [
            {
              id: "lro",
              title: "LRO Location Profile",
              description:
                "Detailed location risk profiles with advanced analytics, providing insurers with precise geographic and environmental risk data for informed underwriting decisions.",
              image:
                "https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              tag: "Location Analysis",
            },
          ],
        },
        personal: {
          id: "personal",
          title: "Personal Property & Casualty",
          description:
            "Tailored data solutions for personal property and casualty insurance.",
          longDescription:
            "Our Personal Property & Casualty solutions help carriers accurately assess individual risks and optimize coverage options. We provide detailed insights into personal property risks and customize solutions for different policy types.",
          image:
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tag: "Personal",
          features: [
            "Individual risk assessment models",
            "Personalized coverage recommendations",
            "Historical claims data analysis",
            "Behavioral risk indicators",
          ],
        },
        health: {
          id: "health",
          title: "Life & Health",
          description: "Advanced analytics for life and health insurance.",
          longDescription:
            "Our Life & Health solutions provide insights into mortality, morbidity, and lifestyle factors for more accurate underwriting and pricing. We help insurers optimize their risk assessment for health-related policies.",
          image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tag: "Health",
          features: [
            "Mortality and morbidity prediction models",
            "Lifestyle risk assessment",
            "Health condition impact analysis",
            "Demographic-specific risk factors",
          ],
        },
      };

      const foundProduct = id ? productsData[id] : null;

      if (foundProduct) {
        setProduct(foundProduct);
      }

      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-neuton font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Product Not Found
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto font-light">
              The product you're looking for doesn't exist or has been removed.
            </p>
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
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Product Header */}
      <div className="relative">
        <div className="h-80 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center">
              <div>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  {product.tag}
                </span>
                <h1 className="text-4xl font-neuton font-bold text-white mt-2 leading-tight">
                  {product.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 font-light leading-relaxed mb-6">
                  {product.longDescription}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-neuton font-bold text-gray-900 mb-6">
                  Features
                </h2>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-lg text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4 mt-10 lg:mt-0">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Request Information
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact us to learn more about our {product.title} solutions
                  and how they can benefit your business.
                </p>
                <Link
                  to="/contact"
                  className="block text-center w-full py-3 px-6 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-base font-medium shadow-md hover:shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Products Section */}
      {product.subProducts && product.subProducts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-neuton font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              Featured Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.subProducts.map((subProduct) => (
                <div
                  key={subProduct.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="md:w-2/5 relative">
                    <img
                      src={subProduct.image}
                      alt={subProduct.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                        {subProduct.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {subProduct.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-4">
                      {subProduct.description}
                    </p>
                    <Link
                      to={
                        subProduct.id === "lro"
                          ? "/products/commercial/lro"
                          : `/contact?product=${product.id}&subproduct=${subProduct.id}`
                      }
                      className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                    >
                      {/* {subProduct.id === "lro" ? "Learn More" : "Learn More"} */}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Related Products */}

      <Footer />
    </div>
  );
};

export default ProductDetail;
