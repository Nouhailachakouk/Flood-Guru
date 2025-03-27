import React from 'react';
import { 
  AlertTriangle, 
  BarChart2, 
  Shield, 
  Map, 
  Navigation, 
  Phone,
  Home,
  BookOpen,
  AlertCircle,
  Menu
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <div className="hero-gradient pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Real-Time AI-Powered Flood Detection & Alerts in Morocco
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Stay safe with real-time alerts and AI-based predictions. Protect yourself and your loved ones with accurate, timely information.
              </p>
              <div className="space-x-4">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                  Get Alerts Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1612708771321-1cfe5ce5e106?auto=format&fit=crop&q=80&w=800"
                alt="Flood Monitoring System"
                className="rounded-lg shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Alerts Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-Time Flood Alerts & Map</h2>
            <p className="text-lg text-gray-600">Monitor flood risks and receive instant alerts for your area</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200"
              alt="Interactive Map"
              className="w-full h-[400px] object-cover rounded-lg mb-6"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="card-hover p-6 bg-blue-50 rounded-lg">
                <Map className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Mapping</h3>
                <p className="text-gray-600">Real-time visualization of flood-prone areas and active alerts</p>
              </div>
              <div className="card-hover p-6 bg-blue-50 rounded-lg">
                <Navigation className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location Tracking</h3>
                <p className="text-gray-600">Precise location-based alerts and risk assessment</p>
              </div>
              <div className="card-hover p-6 bg-blue-50 rounded-lg">
                <BarChart2 className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Risk Analysis</h3>
                <p className="text-gray-600">Advanced AI-powered risk prediction and analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How FloodGuru Works</h2>
            <p className="text-lg text-gray-600">Advanced AI technology working to keep you safe</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-blue-600" />,
                title: "Data Collection",
                description: "Gathering weather data and satellite imagery"
              },
              {
                icon: <BarChart2 className="h-12 w-12 text-blue-600" />,
                title: "AI Analysis",
                description: "Processing data through our AI models"
              },
              {
                icon: <AlertCircle className="h-12 w-12 text-blue-600" />,
                title: "Risk Assessment",
                description: "Evaluating flood risks and potential impact"
              },
              {
                icon: <Phone className="h-12 w-12 text-blue-600" />,
                title: "Alert Dispatch",
                description: "Sending real-time alerts to users"
              }
            ].map((step, index) => (
              <div key={index} className="text-center card-hover">
                <div className="bg-white rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center shadow-lg mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">FloodGuru</span>
              </div>
              <p className="text-blue-200">Protecting communities through AI-powered flood detection and alerts.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Real-Time Alerts</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Safety Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Emergency Contacts</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Preparedness Guide</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-blue-200">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency: 112
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 FloodGuru. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
