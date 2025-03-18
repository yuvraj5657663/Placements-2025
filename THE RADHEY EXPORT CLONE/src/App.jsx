import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const App = () => {
  return (
    <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-md max-w-2xl mx-auto mt-10">
      {/* Location Icon & Address */}
      <FaLocationDot className="text-gray-600 text-xl" />
      <span className="text-gray-800 font-semibold">
        Kathwada, Ahmedabad, Gujarat
      </span>

      {/* Verified Badge */}
      <span className="flex items-center space-x-1 text-green-600 font-semibold">
        ✅ GST <span className="font-bold">24AQCPM0238Q1ZP</span>
      </span>

      {/* TrustSeal Badge */}
      <span className="flex items-center space-x-1 text-yellow-600 font-semibold">
        🛡️ TrustSEAL Verified
      </span>

      {/* Star Ratings */}
      <div className="flex items-center space-x-1">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStarHalfAlt className="text-yellow-500" />
        <span className="text-gray-700 font-semibold">4.3/5</span>
      </div>
    </div>
  );
};

export default App;
