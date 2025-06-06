import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import DataProcessingPage from "./pages/DataProcessingPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import LessorsRiskOnly from "./pages/LessorsRiskOnly";
import SearchResultDetailPage from './pages/SearchResultDetailPage';
import BatchExportDetailPage from './pages/BatchExportDetailPage';
import DocsIndex from './pages/docs/index';
import GettingStarted from './pages/docs/GettingStarted';
import Features from './pages/docs/Features';
import API from './pages/docs/API';
import UIDocumentation from './pages/docs/UIDocumentation';
import APIDocumentation from './pages/docs/APIDocumentation';
import { AuthProvider } from "./contexts/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/data-processing" element={<DataProcessingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* 文档路由 */}
          <Route path="/docs" element={<DocsIndex />} />
          <Route path="/docs/getting-started" element={<GettingStarted />} />
          <Route path="/docs/features" element={<Features />} />
          <Route path="/docs/api" element={<API />} />
          <Route path="/docs/ui-documentation" element={<UIDocumentation />} />
          <Route path="/docs/api-documentation" element={<APIDocumentation />} />
          
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/search-result/:id" element={<SearchResultDetailPage />} />
          <Route path="/batch-export-detail/:filename" element={<BatchExportDetailPage />} />
          <Route
            path="/products/commercial/lro"
            element={<LessorsRiskOnly />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
