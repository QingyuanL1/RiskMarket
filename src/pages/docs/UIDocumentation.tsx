import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Layout, Globe, UserCircle, Search, FileText, Database, Mail, AlertCircle, Info, FileSearch, Home, ArrowRight, Server, Shield, LucideIcon } from 'lucide-react';

// Feature card component for displaying feature details
interface FeatureCardProps {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, items, icon: Icon, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all ${className}`}>
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 text-blue-500 mt-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
            <span className="ml-2 text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Main component
const UIDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 relative inline-block">
              User Interface Guide
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"></div>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guide to Risk Marker platform's interface and features
            </p>
          </div>
          
          {/* Table of contents */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
              <h2 className="text-xl font-bold">Documentation Contents</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="#main-pages" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors group">
                  <Home className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">Main Pages</span>
                    <p className="text-sm text-gray-500">Core website pages</p>
                  </div>
                </a>
                <a href="#auth-system" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors group">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">Authentication</span>
                    <p className="text-sm text-gray-500">Login and account management</p>
                  </div>
                </a>
                <a href="#data-processing" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors group">
                  <Database className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">Data Processing</span>
                    <p className="text-sm text-gray-500">Data management and analysis</p>
                  </div>
                </a>
                <a href="#products" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors group">
                  <Globe className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">Products</span>
                    <p className="text-sm text-gray-500">Product pages and details</p>
                  </div>
                </a>
                <a href="#user-profile" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors group">
                  <UserCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">User Profile</span>
                    <p className="text-sm text-gray-500">Personal info and settings</p>
                  </div>
                </a>
                <a href="#legal" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors group">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">Legal</span>
                    <p className="text-sm text-gray-500">Privacy policy and terms</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Main pages */}
          <section id="main-pages" className="mb-16 scroll-mt-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Home className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Main Pages</h2>
              <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                title="Home Page (LandingPage)"
                description="Main entry point and overview of the platform."
                items={[
                  "Platform introduction and key value propositions",
                  "Product feature previews",
                  "Quick navigation to registration",
                  "Why choose Risk Marker section"
                ]}
                icon={Home}
              />
              
              <FeatureCard
                title="About Us (AboutUs)"
                description="Detailed information about company background and vision."
                items={[
                  "Company introduction and industry experience",
                  "Core values presentation",
                  "Contact information"
                ]}
                icon={Info}
              />
              
              <FeatureCard
                title="Contact Us (ContactUs)"
                description="Customer communication channel with contact form."
                items={[
                  "Contact form (name, email, message)",
                  "Form validation"
                ]}
                icon={Mail}
              />
              
              <FeatureCard
                title="404 Page (NotFound)"
                description="Error page displayed when visiting non-existent pages."
                items={[
                  "Friendly error message",
                  "Links to home page and main sections"
                ]}
                icon={AlertCircle}
              />
            </div>
          </section>
          
          {/* Authentication system */}
          <section id="auth-system" className="mb-16 scroll-mt-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Authentication System</h2>
              <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                title="Login Page (Login/AuthPages)"
                description="User login interface with multiple login methods."
                items={[
                  "Email/password login",
                  "Google account login",
                  "Remember login option",
                  "Forgot password link",
                  "Register new account link"
                ]}
                icon={UserCircle}
              />
              
              <FeatureCard
                title="Registration Page (Signup/AuthPages)"
                description="New user registration interface."
                items={[
                  "Email/password registration",
                  "Google account registration",
                  "Password strength requirements",
                  "Password confirmation",
                  "Return to login link"
                ]}
                icon={UserCircle}
              />
              
              <FeatureCard
                title="Forgot Password (ForgotPassword)"
                description="Password reset functionality."
                items={[
                  "Email input form",
                  "Reset email sending function",
                  "Return to login option"
                ]}
                icon={Shield}
              />
            </div>
          </section>
          
          {/* Data processing functionality */}
          <section id="data-processing" className="mb-16 scroll-mt-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Data Processing</h2>
              <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                title="Data Processing Page (DataProcessingPage)"
                description="Core platform functionality for data upload, processing, and analysis."
                items={[
                  "Single address search functionality",
                  "CSV file batch upload",
                  "Real-time data processing status",
                  "Recent search results list",
                  "Batch export history",
                  "CSV file download functionality"
                ]}
                icon={Database}
                className="md:col-span-3 lg:col-span-1"
              />
              
              <FeatureCard
                title="Batch Export Details (BatchExportDetailPage)"
                description="View detailed information for exported data."
                items={[
                  "Data grouped by address",
                  "Building details display",
                  "Risk analysis data display",
                  "Occupancy information table",
                  "CSV file download options"
                ]}
                icon={FileText}
                className="lg:col-span-1"
              />
              
              <FeatureCard
                title="Search Results Detail (SearchResultDetailPage)"
                description="Displays detailed results for a single address search."
                items={[
                  "Address information and basic data",
                  "Building details and risk scores",
                  "Occupant list and details",
                  "Location photos (if available)"
                ]}
                icon={Search}
                className="lg:col-span-1"
              />
            </div>
          </section>
          
          {/* Products section */}
          <section id="products" className="mb-16 scroll-mt-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Products</h2>
              <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                title="Products List (Products)"
                description="Display of all company products and services."
                items={[
                  "Product card grid layout",
                  "Product categories and tags",
                  "Short product descriptions",
                  "View details links"
                ]}
                icon={Globe}
              />
              
              <FeatureCard
                title="Product Details (ProductDetail)"
                description="Detailed information page for specific products."
                items={[
                  "Product detailed description",
                  "Product features and benefits",
                  "Related images or charts",
                  "Sub-product list (if applicable)",
                  "Contact inquiry button"
                ]}
                icon={FileSearch}
              />
              
              <FeatureCard
                title="Specific Product Page (LessorsRiskOnly)"
                description="Dedicated page for specific product solutions."
                items={[
                  "Product-specific information",
                  "Specific scenario solutions",
                  "Contact and inquiry options"
                ]}
                icon={Server}
              />
            </div>
          </section>
          
          {/* User profile management */}
          <section id="user-profile" className="mb-16 scroll-mt-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <UserCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">User Profile Management</h2>
              <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                title="Profile Page (Profile)"
                description="View and edit personal user information."
                items={[
                  "User basic information display",
                  "Avatar display and updates",
                  "Personal information editing",
                  "Password change options",
                  "Account settings management"
                ]}
                icon={UserCircle}
                className="md:col-span-2 lg:col-span-1"
              />
            </div>
          </section>
          
          {/* Legal pages */}
          <section id="legal" className="mb-16 scroll-mt-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Legal Pages</h2>
              <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                title="Privacy Policy (Privacy)"
                description="Detailed explanation of company privacy policies."
                items={[
                  "Data collection and usage explanation",
                  "User rights information",
                  "Cookie policies",
                  "Third-party sharing policies",
                  "Return button"
                ]}
                icon={Shield}
              />
              
              <FeatureCard
                title="Terms of Service (Terms)"
                description="Website and service terms of use."
                items={[
                  "Service usage conditions",
                  "User responsibilities",
                  "Intellectual property notes",
                  "Disclaimers",
                  "Return button"
                ]}
                icon={FileText}
              />
            </div>
          </section>
          
          {/* Other features */}
          <section id="other" className="mb-16 scroll-mt-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Info className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Other Features</h2>
              <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                title="Navigation and Footer Components"
                description="Common navigation components throughout the website."
                items={[
                  "Navigation: Website page links, user menu, login/signup buttons",
                  "Footer: Contact information, copyright notice, legal links, social media links"
                ]}
                icon={Layout}
                className="md:col-span-2 lg:col-span-1"
              />
            </div>
          </section>
          
          {/* Help section */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm p-8 border border-blue-100 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Need Help?</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions or need further assistance, please contact our support team for more information.
              </p>
            </div>
            <Link to="/contact" className="flex-shrink-0 inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              <Mail className="mr-2 w-5 h-5" />
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UIDocumentation;