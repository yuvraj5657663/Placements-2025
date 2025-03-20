import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaInfoCircle, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  
  // Toggle expanded product information
  const toggleProduct = (index) => {
    if (expandedProduct === index) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(index);
    }
  };

  const products = [
    {
      id: 1,
      name: "Detergent Plant",
      image: "https://images.pexels.com/photos/3912961/pexels-photo-3912961.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete setup for detergent powder and liquid production with high efficiency and quality control systems.",
      features: ["Automatic mixing system", "Temperature control", "Quality testing modules", "Output: 2-5 tons/day"]
    },
    {
      id: 2,
      name: "Pharma Liquid Filling Machine",
      image: "https://images.pexels.com/photos/8325914/pexels-photo-8325914.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Precision filling machines for pharmaceutical liquids with sterilization capabilities.",
      features: ["cGMP compliant", "0.5% filling accuracy", "Up to 120 bottles per minute", "Automatic cleaning system"]
    },
    {
      id: 3,
      name: "Mustard Oil Filling Machine",
      image: "https://cdn.pixabay.com/photo/2014/07/12/14/48/manufacturing-391921_960_720.jpg",
      description: "Specialized equipment for filling edible oils with anti-oxidation systems.",
      features: ["Nitrogen purging", "Leak testing", "Cap sealing", "50-100ml bottle capacity"]
    },
    {
      id: 4,
      name: "Mineral Water Pouch Packing",
      image: "https://cdn.pixabay.com/photo/2019/08/18/13/11/industry-4413913_1280.jpg",
      description: "High-speed water pouch filling and sealing machinery with UV filtration.",
      features: ["200-500ml pouches", "Output: 40-60 pouches/min", "UV sterilization", "PLC controlled"]
    },
    {
      id: 5,
      name: "Bottle Capping Machine",
      image: "https://cdn.pixabay.com/photo/2017/08/02/10/04/factory-2570575_1280.jpg",
      description: "Automatic bottle capping system for various cap types and bottle sizes.",
      features: ["Multiple cap types", "Speed: 60-120 bottles/min", "Cap torque testing", "Size change in 15 min"]
    }
  ];

  // Add custom CSS to head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .product-slider {
        position: relative;
      }
      .product-slider .slick-track {
        display: flex !important;
        height: 480px !important;
      }
      .product-slider .slick-slide {
        height: inherit !important;
        display: flex !important;
      }
      .product-slider .slick-slide > div {
        width: 100%;
        height: 100%;
        display: flex;
      }
      .product-slider .slick-dots {
        bottom: -35px;
      }
      .product-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        transition: box-shadow 0.3s ease;
      }
      .product-card:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      .product-card-content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }
      .product-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      .product-card:hover img {
        transform: scale(1.05);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mt-6 py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Featured Products</h3>
        <div className="product-slider relative z-10" style={{ height: '480px', paddingBottom: '50px' }}>
          <Slider {...sliderSettings}>
            {products.map((product, index) => (
              <div key={product.id} className="px-3 h-full">
                <div className="product-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-bl-lg text-sm">
                      Premium
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white product-card-content">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {product.description}
                    </p>
                    
                    <div className="flex justify-center mt-auto">
                      <button 
                        onClick={() => toggleProduct(index)}
                        className="flex items-center text-blue-500 hover:text-blue-700 text-sm font-medium"
                      >
                        {expandedProduct === index ? 'Show Less' : 'Show Details'} 
                        <FaArrowRight className={`ml-1 transition-transform duration-300 ${expandedProduct === index ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                    
                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      expandedProduct === index ? 'max-h-60 mt-3 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-700 mb-2 flex items-center">
                          <FaInfoCircle className="mr-1" /> Key Features
                        </h5>
                        <ul className="list-disc pl-4 text-gray-600 text-sm space-y-1">
                          {product.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                        <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm transition-colors w-full">
                          Request Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
