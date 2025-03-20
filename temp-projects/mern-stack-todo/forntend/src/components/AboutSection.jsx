import React from 'react';
import { FaCheck } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2940&auto=format&fit=crop" 
              alt="About Radhey Export" 
              className="rounded-lg shadow-md h-[400px] w-full object-cover"
            />
          </div>
          <div>
            <h6 className="text-blue-600 font-semibold mb-2">ABOUT US</h6>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Leading Manufacturer & Exporter of Industrial Machinery Since 2005
            </h2>
            <p className="text-gray-600 mb-6">
              Radhey Export has established itself as a trusted name in the industrial machinery sector.
              With a state-of-the-art manufacturing facility and a team of skilled professionals, we have been serving 
              clients across various industries with high-quality equipment and exceptional service.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span>ISO 9001:2015 Certified Company</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span>Global Exports to 30+ Countries</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span>15+ Years of Industry Experience</span>
              </li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
