import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { api } from "../api";

const ContactUs = () => {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" }); // For success/error messages
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default page reload
    setIsLoading(true);

    // eli@riskmarker.com
    setStatus({ type: "", message: "" }); // Clear previous status

    // --- Construct email details --- 
    const recipientEmail = "zifan@riskmarker.com,eli@riskmarker.com"; // ** CHANGE THIS if you want emails sent elsewhere **
    const emailSubject = `Contact Form Submission from ${firstName} ${lastName}`;
    const emailBody = `
      New message received from the contact form:
      ------------------------------------------
      Name: ${firstName} ${lastName}
      Email: ${email}
      ------------------------------------------
      Message:
      ${message}
      ------------------------------------------
    `;

    try {
      const response = await api.post("/api/send-email", { 
        to_email: recipientEmail, 
        subject: emailSubject,
        body: emailBody,
      });

      const result = response.data;

      if (response.status >= 200 && response.status < 300 && result.status === "success") {
        setStatus({ type: "success", message: "Message sent successfully!" });
        // Clear the form
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus({ type: "error", message: result.message || "Failed to send message. Please try again." });
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      setStatus({ type: "error", message: "An error occurred. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

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
            </div>

            <form className="space-y-5 mt-8 lg:mt-0" onSubmit={handleSubmit}>
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your first name"
                    required
                    disabled={isLoading}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your last name"
                    required
                    disabled={isLoading}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                  disabled={isLoading}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="How can we help you?"
                  required
                  disabled={isLoading}
                ></textarea>
              </div>

              {/* Display Success/Error Messages */}
              {status.message && (
                <div className={`p-3 rounded-lg text-sm ${ 
                  status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {status.message}
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  className={`w-full py-3 px-8 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
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
