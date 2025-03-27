import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AlertTriangle, Menu } from 'lucide-react';
import IndexPage from './pages/index';
import AlertsPage from './pages/alerts';
import SafetyGuidelinesPage from './pages/safety-guidelines';
import EmergencyPage from './pages/emergency';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/safety-guidelines" element={<SafetyGuidelinesPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-blue-900">FloodGuru</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/alerts" className={`nav-link ${location.pathname === '/alerts' ? 'active' : ''}`}>Real-Time Alerts</Link>
            <Link to="/safety-guidelines" className={`nav-link ${location.pathname === '/safety-guidelines' ? 'active' : ''}`}>Safety Guidelines</Link>
            <Link to="/emergency" className={`nav-link ${location.pathname === '/emergency' ? 'active' : ''}`}>Emergency</Link>
            <a href="#" className="nav-link">Contact Us</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
