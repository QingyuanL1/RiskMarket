import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductCard = ({
  id,
  title,
  description,
  image,
  tag,
  hasSubProducts = false,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  hasSubProducts?: boolean;
}) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group h-full flex flex-col">
    <div className="relative h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-3 right-3">
        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
          {tag}
        </span>
      </div>
      {hasSubProducts && (
        <div className="absolute bottom-3 right-3">
          <span className="px-3 py-1 bg-blue-800 text-white text-xs font-medium rounded-full flex items-center">
            <svg
              className="w-3 h-3 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            Sub Products
          </span>
        </div>
      )}
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed font-light mb-4 flex-grow">
        {description}
      </p>
      <Link
        to={`/products/${id}`}
        className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center mt-auto"
      >
        Learn More
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
);

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-neuton font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Our <span className="text-blue-600">Products</span>
            </h1>
            <div className="mt-4 h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Purpose-built data solutions for specific insurance needs
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <ProductCard
                id="commercial"
                title="Commercial Property & Casualty"
                description="Comprehensive data solutions for commercial property and casualty insurance, providing accurate risk assessment and pricing models for businesses of all sizes."
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                tag="Commercial"
                hasSubProducts={true}
              />
            </div>
            <div className="md:col-span-1">
              <ProductCard
                id="personal"
                title="Personal Property & Casualty"
                description="Tailored data solutions for personal property and casualty insurance, helping carriers accurately assess individual risks and optimize coverage options."
                image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                tag="Personal"
              />
            </div>
            <div className="md:col-span-1">
              <ProductCard
                id="health"
                title="Life & Health"
                description="Advanced analytics for life and health insurance, providing insights into mortality, morbidity, and lifestyle factors for more accurate underwriting and pricing."
                image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                tag="Health"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-neuton font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Data-Driven{" "}
                <span className="text-blue-600">Insurance Decisions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
                Our data products provide specific, accurate insights for the
                insurance industry rather than generic data points. We focus on
                delivering direct answers to the real questions insurers face.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
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
                  <p className="ml-3 text-gray-600">
                    Data specifically designed for insurance risk assessment
                  </p>
                </div>
                <div className="flex items-start">
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
                  <p className="ml-3 text-gray-600">
                    Direct answers to specific questions insurers face
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Data analysis"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-neuton font-bold text-white mb-5 tracking-tight leading-tight">
              Explore Our Insurance Data Solutions
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-light">
              Contact us to learn how data-driven solutions can enhance your
              insurance business
            </p>
            <Link
              to="/contact"
              className="inline-block py-4 px-10 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors text-base font-medium shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
