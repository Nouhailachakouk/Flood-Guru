import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Bell,
  Search,
  Filter,
  MapPin,
  Droplets,
  Clock,
  AlertCircle,
  Menu,
  ChevronDown,
  Settings,
  Mail,
  MessageSquare,
  BarChart3,
  CloudRain,
  Waves,
  Phone
} from 'lucide-react';

// Mock data for demonstration
const alerts = [
  {
    id: 1,
    location: "Marrakech Region",
    severity: "high",
    type: "Flash Flood",
    description: "Heavy rainfall expected. High risk of flash floods in urban areas.",
    timestamp: "2024-03-10T14:30:00",
    impact: "Urban areas and transportation routes affected"
  },
  {
    id: 2,
    location: "Ouarzazate Province",
    severity: "medium",
    type: "River Overflow",
    description: "River levels rising above normal. Moderate flood risk.",
    timestamp: "2024-03-10T13:45:00",
    impact: "Agricultural lands and riverside communities"
  },
  {
    id: 3,
    location: "Tangier-Tetouan",
    severity: "low",
    type: "Coastal Flood",
    description: "High tides combined with strong winds may cause minor flooding.",
    timestamp: "2024-03-10T12:15:00",
    impact: "Coastal areas and ports"
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('alerts');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="pt-16">
        {/* Header */}
        <div className="bg-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Real-Time Flood Alerts in Morocco</h1>
            <p className="text-xl text-blue-200 mb-4">Live flood warnings, AI-based predictions, and high-risk zones</p>
            <div className="flex items-center text-sm text-blue-200">
              <Clock className="h-4 w-4 mr-2" />
              Last updated: March 10, 2024, 14:30 GMT+1
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Alerts Feed */}
            <div className="lg:col-span-1">
              {/* Search and Filters */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search alerts..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <div className="flex space-x-4">
                  <select
                    className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                  >
                    <option value="all">All Regions</option>
                    <option value="marrakech">Marrakech</option>
                    <option value="casablanca">Casablanca</option>
                    <option value="tangier">Tangier</option>
                  </select>
                  <select
                    className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={selectedSeverity}
                    onChange={(e) => setSelectedSeverity(e.target.value)}
                  >
                    <option value="all">All Severities</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>

              {/* Alerts List */}
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="font-semibold">{alert.location}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                      </span>
                    </div>
                    <div className="mb-2">
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Droplets className="h-4 w-4 mr-1" />
                        {alert.type}
                      </div>
                      <p className="text-gray-700">{alert.description}</p>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {new Date(alert.timestamp).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Map and Predictions */}
            <div className="lg:col-span-2">
              {/* Interactive Map */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Interactive Risk Map</h2>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                      <CloudRain className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                      <Waves className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                      <Settings className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200"
                    alt="Interactive Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span>High Risk</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span>Medium Risk</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                      <span>Low Risk</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Predictions */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <h2 className="text-xl font-semibold mb-4">AI Risk Predictions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold mb-2">24-Hour Forecast</h3>
                    <div className="h-40 bg-white rounded-lg p-4">
                      <BarChart3 className="h-full w-full text-blue-600 opacity-50" />
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Risk Probability</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="w-24">Flash Flood</span>
                        <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500" style={{ width: '75%' }}></div>
                        </div>
                        <span className="ml-2">75%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-24">River Flood</span>
                        <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500" style={{ width: '45%' }}></div>
                        </div>
                        <span className="ml-2">45%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-24">Coastal</span>
                        <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: '30%' }}></div>
                        </div>
                        <span className="ml-2">30%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Alert Preferences</h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Save Settings
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <h3 className="font-semibold">Email Alerts</h3>
                      <p className="text-sm text-gray-600">Daily digest + Emergency</p>
                    </div>
                    <input type="checkbox" className="ml-auto" defaultChecked />
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <h3 className="font-semibold">SMS Alerts</h3>
                      <p className="text-sm text-gray-600">Emergency only</p>
                    </div>
                    <input type="checkbox" className="ml-auto" defaultChecked />
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Bell className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <h3 className="font-semibold">Push Notifications</h3>
                      <p className="text-sm text-gray-600">All alerts</p>
                    </div>
                    <input type="checkbox" className="ml-auto" defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 mt-12">
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
