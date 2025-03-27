import React, { useState } from 'react';
import { AlertTriangle, Bell, Shield, Home, Car, ChevronFirst as FirstAid, Phone, CheckCircle2, XCircle, AlertCircle, Package, Route, Droplets, Heart, FileCheck, Video, MessageCircle, Menu, ArrowRight, Download } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('before');

  const emergencyKit = [
    { item: "Water (3-day supply)", essential: true },
    { item: "Non-perishable food", essential: true },
    { item: "First aid kit", essential: true },
    { item: "Flashlight and batteries", essential: true },
    { item: "Important documents", essential: true },
    { item: "Medications", essential: true },
    { item: "Battery-powered radio", essential: false },
    { item: "Mobile phone charger", essential: false },
    { item: "Cash", essential: false },
    { item: "Change of clothes", essential: false }
  ];

  const safetySteps = {
    before: [
      "Sign up for FloodGuru alerts",
      "Identify evacuation routes",
      "Prepare emergency kit",
      "Secure important documents",
      "Install flood barriers",
      "Check insurance coverage"
    ],
    during: [
      "Move to higher ground",
      "Avoid walking through flood water",
      "Don't drive through flooded areas",
      "Keep emergency contacts handy",
      "Follow official instructions",
      "Stay tuned to news updates"
    ],
    after: [
      "Wait for official clearance",
      "Document damage for insurance",
      "Clean and disinfect everything",
      "Check for structural damage",
      "Beware of contaminated water",
      "Monitor for health issues"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="pt-16">
        {/* Header */}
        <div className="bg-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-4">
              <Shield className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-4xl font-bold">Flood Safety Guidelines</h1>
                <p className="text-xl text-blue-200 mt-2">Protect Yourself & Your Loved Ones</p>
              </div>
            </div>
            <div className="mt-8 inline-flex rounded-md shadow">
              <a href="#emergency-kit" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors duration-200">
                View Emergency Kit Checklist
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Timeline Navigation */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-3 gap-4 bg-white rounded-lg shadow-md p-2">
              <button
                onClick={() => setActiveSection('before')}
                className={`px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200
                  ${activeSection === 'before' ? 'bg-blue-100 text-blue-900' : 'hover:bg-gray-100'}`}
              >
                <Shield className="h-5 w-5" />
                <span>Before</span>
              </button>
              <button
                onClick={() => setActiveSection('during')}
                className={`px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200
                  ${activeSection === 'during' ? 'bg-blue-100 text-blue-900' : 'hover:bg-gray-100'}`}
              >
                <AlertCircle className="h-5 w-5" />
                <span>During</span>
              </button>
              <button
                onClick={() => setActiveSection('after')}
                className={`px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200
                  ${activeSection === 'after' ? 'bg-blue-100 text-blue-900' : 'hover:bg-gray-100'}`}
              >
                <CheckCircle2 className="h-5 w-5" />
                <span>After</span>
              </button>
            </div>
          </div>

          {/* Safety Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {safetySteps[activeSection].map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="ml-3 font-semibold">Step {index + 1}</span>
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>

          {/* Emergency Kit Section */}
          <div id="emergency-kit" className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="flex items-center mb-6">
              <Package className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold">Emergency Kit Checklist</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyKit.map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className={`p-2 rounded-full ${item.essential ? 'bg-red-100' : 'bg-blue-100'}`}>
                    {item.essential ? (
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    ) : (
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                  <span className="ml-3">{item.item}</span>
                  {item.essential && (
                    <span className="ml-auto text-sm text-red-600 font-medium">Essential</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Download className="h-5 w-5 mr-2" />
                Download Complete Checklist
              </button>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Video className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Video Guides</h3>
              </div>
              <p className="text-gray-600 mb-4">Watch our detailed safety demonstration videos.</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Watch Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Community Forum</h3>
              </div>
              <p className="text-gray-600 mb-4">Join discussions and share experiences with others.</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Join Forum
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FileCheck className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">FAQs</h3>
              </div>
              <p className="text-gray-600 mb-4">Find answers to common flood safety questions.</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                View FAQs
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900 rounded-lg shadow-md p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Informed, Stay Safe</h2>
            <p className="text-blue-200 mb-6">Subscribe to receive real-time flood alerts and safety updates.</p>
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
