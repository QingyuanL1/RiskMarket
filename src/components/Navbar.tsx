import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { Menu, ChevronDown, User, LogOut, Settings, Bell, Book, FileText, ExternalLink, Layout, FileJson, Server } from "lucide-react";

// Default avatar
const DEFAULT_AVATAR =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 focus:outline-none"
      >
        <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 overflow-hidden hover:border-blue-500 transition-colors">
          <img
            src={currentUser?.photoURL || DEFAULT_AVATAR}
            alt={currentUser?.displayName || "User"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-700">
            {currentUser?.displayName || "User"}
          </p>
          <p className="text-xs text-gray-500">{currentUser?.email}</p>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 z-10 border border-gray-100">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center">
              <img
                src={currentUser?.photoURL || DEFAULT_AVATAR}
                alt={currentUser?.displayName || "User"}
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">
                  {currentUser?.displayName || "User"}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {currentUser?.email}
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Link>
          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

// Docs dropdown menu component
const DocsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isDocsActive = location.pathname.startsWith('/docs');

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 100)}
        className={`flex items-center px-3 py-2 text-sm font-medium ${isDocsActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
      >
        Docs
        <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg py-3 z-10 border border-gray-100 divide-y divide-gray-100">
          {/* 文档导航部分 */}
          <div className="pb-2">
            <div className="px-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Getting Starteding Started
            </div>
            <Link 
              to="/docs/getting-started"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              <Book className="w-4 h-4 mr-3 text-blue-600" />
              <span>Getting Started</span>
            </Link>
          </div>
          
          {/* 主要文档部分 */}
          <div className="py-2">
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              文档指南
            </div>
            <Link 
              to="/docs/ui-documentation"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              <Layout className="w-4 h-4 mr-3 text-blue-600" />
              <span>UI Documentation</span>
            </Link>
            <Link 
              to="/docs/features"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              <FileText className="w-4 h-4 mr-3 text-blue-600" />
              <span>Risk Score Dictionary</span>
            </Link>
          </div>
          
          {/* API部分 */}
          <div className="pt-2">
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Developer Resources
            </div>
            <Link
              to="/docs/api-documentation"
              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md group"
            >
              <FileJson className="mr-3 h-5 w-5 text-blue-500 group-hover:text-blue-600" />
              API Documentation
            </Link>
            {/* <Link
              to="/docs/api"
              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md group"
            >
              <Server className="mr-3 h-5 w-5 text-blue-500 group-hover:text-blue-600" />
              API Reference
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

// Mobile docs dropdown menu
const MobileDocsMenu = () => {
  const [mobileDocsOpen, setMobileDocsOpen] = useState(false);
  const location = useLocation();
  const isDocsActive = location.pathname.startsWith('/docs');

  return (
    <div>
      <button 
        onClick={() => setMobileDocsOpen(!mobileDocsOpen)}
        className={`flex justify-between w-full px-4 py-2 text-base font-medium ${isDocsActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
      >
        <span>Docs</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${mobileDocsOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {mobileDocsOpen && (
        <div className="pl-6 py-2 space-y-4 bg-gray-50 border-l-2 border-blue-100">
          {/* 开始使用 */}
          <div>
            <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              开始使用
            </div>
            <Link 
              to="/docs/getting-started"
              className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-blue-700"
            >
              <Book className="w-4 h-4 mr-2 text-blue-500" />
              <span>Getting Started</span>
            </Link>
          </div>
          
          {/* 文档指南 */}
          <div>
            <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              文档指南
            </div>
            <Link 
              to="/docs/ui-documentation"
              className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-blue-700"
            >
              <Layout className="w-4 h-4 mr-2 text-blue-500" />
              <span>UI Documentation</span>
            </Link>
            <Link 
              to="/docs/features"
              className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-blue-700"
            >
              <FileText className="w-4 h-4 mr-2 text-blue-500" />
              <span>Risk Score Dictionary</span>
            </Link>
          </div>
          
          {/* 开发者资源 */}
          <div className="py-2 pl-3 border-l-2 border-blue-500 bg-blue-50">
            <div className="mb-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              开发者资源
            </div>
            <Link
              to="/docs/api-documentation"
              className="block py-2 pl-3 pr-4 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-800"
              onClick={() => setMobileDocsOpen(false)}
            >
              <div className="flex items-center">
                <FileJson className="w-4 h-4 mr-2 text-blue-500" />
                <span>API Documentation</span>
              </div>
            </Link>
            <Link
              to="/docs/api"
              className="block py-2 pl-3 pr-4 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-800"
              onClick={() => setMobileDocsOpen(false)}
            >
              <div className="flex items-center">
                <Server className="w-4 h-4 mr-2 text-blue-500" />
                <span>API Reference</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const { currentUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const isProductActive = (path: string) => location.pathname.startsWith(path);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-blue-600 text-xl font-neuton tracking-wide hover:text-blue-700 transition-colors"
            >
              Risk Marker
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium ${isActive('/') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Home
            </Link>
            <Link
              to="/products/commercial/lro"
              className={`px-3 py-2 text-sm font-medium ${isProductActive('/products') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Products
            </Link>
            <Link
              to="/data-processing"
              className={`px-3 py-2 text-sm font-medium ${isActive('/data-processing') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium ${isActive('/about') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              About
            </Link>
            <DocsMenu />
            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium ${isActive('/contact') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Contact
            </Link>

            {currentUser ? (
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-900">
                  <Bell className="w-5 h-5" />
                </button>
                <UserMenu />
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-4 py-2 text-base font-medium ${isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              Home
            </Link>
            <Link
              to="/products/commercial/lro"
              className={`block px-4 py-2 text-base font-medium ${isProductActive('/products') ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              Products
            </Link>
            <Link
              to="/data-processing"
              className={`block px-4 py-2 text-base font-medium ${isActive('/data-processing') ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2 text-base font-medium ${isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              About
            </Link>
            <MobileDocsMenu />
            <Link
              to="/contact"
              className={`block px-4 py-2 text-base font-medium ${isActive('/contact') ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              Contact
            </Link>
          </div>
          {currentUser ? (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-4 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={currentUser.photoURL || DEFAULT_AVATAR}
                    alt={currentUser.displayName || "User"}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {currentUser.displayName || "User"}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {currentUser.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  Settings
                </Link>
                <button
                  onClick={() => auth.signOut()}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="space-y-1">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-base font-medium text-blue-600 hover:text-blue-700"
                >
                  Sign up
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
