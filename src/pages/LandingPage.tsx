import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
    <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
      <span className="text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed font-light">{description}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-neuton font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                Purpose-built data products
                <span className="block text-blue-600 font-neuton mt-1">
                  for specific insurance needs
                </span>
              </h1>
              <p className="mt-5 text-base text-gray-600 sm:mt-6 sm:text-xl lg:text-lg xl:text-xl leading-relaxed font-light">
                Many data companies provide a broad array of data that can be
                used many ways, often priding themselves on exotic or boutique
                data points with interesting dimensions but not concrete
                answers. At{" "}
                <span className="text-blue-600 font-medium">Risk Marker</span>,
                we look at the actual questions insurers are struggling with and
                use the appropriate data and intelligence to provide
                straight-forward answers.
              </p>
              <div className="mt-10 sm:max-w-lg sm:mx-auto lg:mx-0">
                <Link
                  to="/signup"
                  className="block text-center w-full py-4 px-6 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-base font-medium shadow-md hover:shadow-lg"
                >
                  Explore Insurance Data Solutions
                </Link>
                <p className="mt-3 text-sm text-gray-500 font-light">
                  No credit card required. Start with a free consultation.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Insurance data analysis"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-neuton font-bold text-gray-900 tracking-tight leading-tight">
              Why Choose <span className="text-blue-600">Risk Marker</span>?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Purpose-built data products for specific insurance needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard
              icon="🎯"
              title="Specialized Insurance Data"
              description="Get precise data designed for insurance needs without filtering irrelevant information"
            />
            <FeatureCard
              icon="⚡"
              title="Immediate Solutions"
              description="We provide direct answers rather than raw data, helping you make quick insurance decisions"
            />
            <FeatureCard
              icon="📊"
              title="Industry-Specific Analysis"
              description="Data products tailored to insurance industry problems, ensuring relevance and practicality"
            />
          </div>
        </div>
      </div>

      {/* Trust Section with Image */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Business analytics"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="mt-10 lg:mt-0 lg:ml-8">
              <h2 className="text-3xl font-neuton font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Data Support for{" "}
                <span className="text-blue-600">Insurance Decisions</span>
              </h2>
              <div className="space-y-6">
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
                    Data designed specifically for insurance risk assessment
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
                    Practical data products instead of complex raw data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-neuton font-bold text-white mb-5 tracking-tight leading-tight">
              Ready to Transform Your Insurance Risk Assessment?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-light">
              Join leading insurers making data-driven decisions
            </p>
            <Link
              to="/signup"
              className="inline-block py-4 px-10 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors text-base font-medium shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
