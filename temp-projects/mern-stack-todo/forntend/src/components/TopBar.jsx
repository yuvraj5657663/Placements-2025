import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-white shadow-lg rounded-xl border border-gray-200">
      {/* Top Section */}
      <div className="flex flex-col space-y-4">
        {/* Logo and Details */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Logo */}
          <div className="w-24 h-24 flex-shrink-0 p-1 border border-gray-200 rounded-lg shadow-sm">
            <img
              src="/logo-radhey.png"
              alt="Radhey Export Logo"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Details */}
          <div className="flex flex-col flex-grow text-center md:text-left">
            <h1 className="text-4xl mt-5 mb-2 font-bold text-gray-900">The Radhey Export</h1>
            
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <p className="text-gray-700 text-sm mb-0">📍 Kathwada, Ahmedabad, Gujarat</p>
              <p className="text-gray-500 font-semibold mb-0">✅ GST <span className="text-black font-bold">24AQCPM0238Q1ZP</span></p>
              <p className="text-gray-500 font-semibold mb-0">🔒 TrustSEAL Verified</p>
              <span className="text-gray-800 font-semibold text-lg">4.3/<span className="text-black font-bold text-lg px-1">5</span></span>
              <span className="text-yellow-400 ml-1">★★★★☆</span>
              
              {/* View Mobile Number Button - Appears within company details */}
              <div className="flex justify-center md:justify-end mt-2 md:mt-0 md:ml-4">
                <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-green-600 flex items-center justify-center w-full md:w-auto">
                  <FaPhoneAlt className="mr-2" /> View Mobile Number
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
