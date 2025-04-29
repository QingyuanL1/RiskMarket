import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-neuton font-bold tracking-tight text-gray-900 leading-tight">
            About <span className="text-blue-600">Us</span>
          </h1>
          <div className="mt-4 h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              We are a group of insurance industry solution providers who have
              spent decades providing software and data solutions to carriers,
              MGAs, wholesalers, agents and brokers of all kinds. We know the
              processes and needs of insurance and are focused on
              straight-forward solutions, keeping it simple, using only what is
              needed and making the output fit user needs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Industry Experience
              </h3>
              <p className="text-gray-600 font-light">
                Decades of experience in insurance industry solutions
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Focused Solutions
              </h3>
              <p className="text-gray-600 font-light">
                Straight-forward solutions tailored to specific needs
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Client-Centric
              </h3>
              <p className="text-gray-600 font-light">
                Solutions designed to fit your specific needs
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-8 font-light">
              Partner with Risk Marker for insurance data solutions that make a
              difference.
            </p>
            <a
              href="/signup"
              className="inline-block py-3 px-8 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
