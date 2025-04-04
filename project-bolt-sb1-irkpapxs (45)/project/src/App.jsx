import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import About from './pages/about/Company';
import Contact from './pages/about/ContactUs';
import LegalDocuments from './pages/about/LegalDocuments';
import TradingAccounts from './pages/trading/TradingAccounts';
import TradingPlatforms from './pages/trading/TradingPlatforms';
import MarketAnalysis from './pages/trading/MarketAnalysis';
import TradingGuides from './pages/education/TradingGuides';
import Webinars from './pages/education/Webinars';
import Login from './pages/auth/Login';
import AdminLogin from './pages/auth/AdminLogin';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminDashboard from './master-crm/Dashboard';

const queryClient = new QueryClient();

function App() {
  const isAuthenticated = () => {
    return !!localStorage.getItem('currentUser');
  };

  const isAdmin = () => {
    const user = localStorage.getItem('currentUser');
    return user && JSON.parse(user).isAdmin;
  };

  const ProtectedRoute = ({ children, adminOnly = false }) => {
    if (!isAuthenticated()) {
      return <Navigate to={adminOnly ? "/admin/login" : "/login"} replace />;
    }
    if (adminOnly && !isAdmin()) {
      return <Navigate to="/dashboard" replace />;
    }
    return children;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Protected Dashboard Route */}
          <Route 
            path="/dashboard/*" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Public routes with Header/Footer */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <main className="flex-grow pt-20">
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Navigate to="/" replace />} />
                    <Route path="about/company" element={<About />} />
                    <Route path="about/contact" element={<Contact />} />
                    <Route path="about/legal-documents" element={<LegalDocuments />} />
                    <Route path="trading/accounts" element={<TradingAccounts />} />
                    <Route path="trading/platforms" element={<TradingPlatforms />} />
                    <Route path="trading/market-analysis" element={<MarketAnalysis />} />
                    <Route path="education/guides" element={<TradingGuides />} />
                    <Route path="education/webinars" element={<Webinars />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;