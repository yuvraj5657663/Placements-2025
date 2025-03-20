import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const products = [
    {
      id: 1,
      name: "Bottle Filling Machine",
      image: "https://images.unsplash.com/photo-1594761047254-5ff5a0a2d5d9?q=80&w=2940&auto=format&fit=crop",
      description: "State-of-the-art filling machines for various bottle sizes",
      items: ["Hot Liquid Syrup Filling Machine", "Bottle Filling Machine for Sparkling Water", "1 Ltr Bottle Filling Machine", "200ml Bottle Filling Machine", "Spirit & Beer Bottling Machine"]
    },
    {
      id: 2,
      name: "Pharmaceutical Liquid Line Machinery",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2940&auto=format&fit=crop",
      description: "Precision machinery for pharmaceutical production",
      items: ["Mustard Oil Filling Packaging", "Petroleum Jelly Filling Machine", "Pharma Liquid Filling Machine", "Vitamins Syrup Filling Machine", "Oral Liquid Syrup Filling Machine"]
    },
    {
      id: 3,
      name: "Conveyor System",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2858&auto=format&fit=crop",
      description: "Efficient conveyor systems for industrial applications",
      items: ["Roller Table and Conveyors", "Rubber Belt Conveyor System", "Food Conveyor System", "Mobile Conveying System", "Aeration Conveyor"]
    }
  ];

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
    <div id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of high-quality industrial machinery and equipment
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex border border-gray-300 rounded-lg overflow-hidden">
            {products.map((product, index) => (
              <button 
                key={product.id}
                className={`px-5 py-2 ${activeCategory === index ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setActiveCategory(index)}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="product-slider">
          <Slider {...sliderSettings}>
            {products[activeCategory].items.map((item, index) => (
              <div key={index} className="px-2">
                <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl">
                  <img 
                    src={`https://source.unsplash.com/random/300x200?machinery,${index + activeCategory * 5}`} 
                    alt={item} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item}</h3>
                    <p className="text-gray-600 mb-4">
                      High-quality industrial equipment engineered for optimal performance and reliability.
                    </p>
                    <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                      View Details <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
