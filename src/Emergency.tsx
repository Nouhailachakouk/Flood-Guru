import React from 'react';
import { AlertTriangle, ArrowUpCircle, Droplets, Zap, CrossIcon as SosIcon, Phone, MapPin, Bell, Menu, ArrowRight, AlertCircle, Building2, Navigation } from 'lucide-react';

function App() {
  const emergencyContacts = [
    { name: "Civil Protection", number: "112", primary: true },
    { name: "Police", number: "19", primary: false },
    { name: "Ambulance", number: "150", primary: false },
    { name: "Fire Department", number: "15", primary: false }
  ];

  const immediateActions = [
    {
      title: "Move to Higher Ground",
      icon: <ArrowUpCircle className="h-6 w-6" />,
      description: "Immediately evacuate to elevated areas away from flood waters"
    },
    {
      title: "Avoid Floodwaters",
      icon: <Droplets className="h-6 w-6" />,
      description: "Never walk or drive through flood waters - 6 inches of water can sweep you away"
    },
    {
      title: "Turn Off Utilities",
      icon: <Zap className="h-6 w-6" />,
      description: "If safe, turn off electricity and gas to prevent accidents"
    },
    {
      title: "Signal for Help",
      icon: <SosIcon className="h-6 w-6" />,
      description: "If trapped, use flashlights or bright cloth to signal your location"
    }
  ];

  const shelters = [
    {
      name: "Central Community Center",
      address: "123 Safety Street, Marrakech",
      capacity: "500 people",
      status: "Open"
    },
    {
      name: "North District School",
      address: "45 Shelter Road, Marrakech",
      capacity: "300 people",
      status: "Open"
    },
    {
      name: "South Emergency Center",
      address: "78 Emergency Lane, Marrakech",
      capacity: "400 people",
      status: "Limited Space"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="pt-16">
        {/* Emergency Header */}
        <div className="bg-red-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertCircle className="h-12 w-12 mr-4 animate-pulse" />
                <div>
                  <h1 className="text-4xl font-bold">Emergency Response</h1>
                  <p className="text-red-100 mt-2">Quick actions and emergency contacts</p>
                </div>
              </div>
              <a href="tel:112" className="hidden md:flex items-center px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200">
                <Phone className="h-5 w-5 mr-2" />
                Call 112 Now
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Emergency Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {emergencyContacts.map((contact, index) => (
              <a
                key={index}
                href={`tel:${contact.number}`}
                className={`flex items-center p-4 rounded-lg ${
                  contact.primary 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-white text-gray-900 hover:bg-gray-50'
                } shadow-md transition-colors duration-200`}
              >
                <Phone className={`h-6 w-6 ${contact.primary ? 'text-white' : 'text-red-600'} mr-3`} />
                <div>
                  <div className="font-semibold">{contact.name}</div>
                  <div className={`text-lg font-bold ${contact.primary ? 'text-white' : 'text-red-600'}`}>
                    {contact.number}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Immediate Actions */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Immediate Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {immediateActions.map((action, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                      {action.icon}
                    </div>
                    <h3 className="ml-3 font-semibold">{action.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Evacuation Centers */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Building2 className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold">Emergency Shelters</h2>
              </div>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                <Navigation className="h-5 w-5 mr-1" />
                View on Map
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shelters.map((shelter, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{shelter.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      shelter.status === 'Open' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {shelter.status}
                    </span>
                  </div>
                  <div className="flex items-start text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">{shelter.address}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Capacity: {shelter.capacity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900 rounded-lg shadow-md p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Prepared, Stay Safe</h2>
            <p className="text-blue-200 mb-6">Subscribe to receive real-time flood alerts and emergency updates.</p>
            <button className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <Bell className="h-5 w-5 mr-2" />
              Subscribe to Alerts
            </button>
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
              <h4 className="text-lg font-semibold mb-4">Emergency Contact</h4>
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
