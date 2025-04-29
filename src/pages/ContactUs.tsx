import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-neuton font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Contact <span className="text-blue-600">Us</span>
            </h1>
            <p className="mt-5 text-base text-gray-600 sm:mt-6 sm:text-xl lg:text-lg xl:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              We look forward to hearing from you. Feel free to reach out with
              any questions, suggestions, or partnership opportunities.
            </p>
            <div className="mt-4 h-0.5 w-24 bg-blue-600 mx-auto"></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-white rounded-xl shadow-sm p-10 border border-gray-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-full"></div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-2xl font-neuton font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-base text-gray-600 mb-8 font-light leading-relaxed">
                Use the form to send us a message, or contact us directly via
                email.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Sales Inquiries
                  </h3>
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">sales@riskmaker.com</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Support Requests
                  </h3>
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">support@riskmaker.com</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-5 mt-8 lg:mt-0">
              <div className="grid grid-cols-1 gap-y-5 gap-x-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name <span className="text-gray-500">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name <span className="text-gray-500">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-gray-500">(required)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message <span className="text-gray-500">(required)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 px-8 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
