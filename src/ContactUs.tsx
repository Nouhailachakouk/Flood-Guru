import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700">Email: <a href="mailto:support@floodguru.com" className="text-blue-600 hover:underline">support@floodguru.com</a></span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700">Hotline: <span className="font-medium">+212 XXX XXX XXX</span> (24/7 for emergencies)</span>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-1" />
              <span className="text-gray-700">Address: [Insert Address]</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Form</h3>
            <p className="text-gray-700 mb-4">Submit inquiries and feedback.</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Social Media</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Facebook className="h-5 w-5 text-blue-600 mr-2" />
              <a href="https://www.facebook.com/FloodGuru" className="text-blue-600 hover:underline">Facebook: @FloodGuru</a>
            </div>
            <div className="flex items-center">
              <Twitter className="h-5 w-5 text-blue-400 mr-2" />
              <a href="https://twitter.com/FloodGuruMorocco" className="text-blue-600 hover:underline">Twitter: @FloodGuruMorocco</a>
            </div>
            <div className="flex items-center">
              <Instagram className="h-5 w-5 text-pink-500 mr-2" />
              <a href="https://www.instagram.com/FloodGuru_Official" className="text-blue-600 hover:underline">Instagram: @FloodGuru_Official</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
