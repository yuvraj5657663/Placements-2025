import React, { useState } from 'react';
import { FaArrowRight, FaSearch, FaStar, FaShoppingCart } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  
  // Toggle expanded card state
  const toggleCard = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  const products = [
    {
      id: 1,
      name: "Bottle Filling Machine",
      icon: "🏭",
      image: "https://images.unsplash.com/photo-1594761047254-5ff5a0a2d5d9?q=80&w=2940&auto=format&fit=crop",
      description: "State-of-the-art filling machines for various bottle sizes",
      fullDescription: "Our advanced bottle filling machines are designed to provide precise, efficient filling for all types of liquids. Available in various capacities and configurations to meet your specific production needs.",
      price: "₹5,00,000 - ₹15,00,000",
      rating: 4.8,
      reviews: 124,
      items: [
        {
          name: "Hot Liquid Syrup Filling Machine",
          image: "https://images.unsplash.com/photo-1594761047254-5ff5a0a2d5d9?q=80&w=800",
          shortDesc: "High precision for hot liquid filling"
        },
        {
          name: "Bottle Filling Machine for Sparkling Water",
          image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800",
          shortDesc: "Maintains carbonation during filling process"
        },
        {
          name: "1 Ltr Bottle Filling Machine",
          image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800",
          shortDesc: "Perfect for large volume production"
        },
        {
          name: "200ml Bottle Filling Machine",
          image: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?q=80&w=800",
          shortDesc: "Ideal for small pharmaceutical bottles"
        },
        {
          name: "Spirit & Beer Bottling Machine",
          image: "https://images.unsplash.com/photo-1569937756447-1d45682a5c18?q=80&w=800",
          shortDesc: "Specialized for alcoholic beverages"
        }
      ]
    },
    {
      id: 2,
      name: "Pharmaceutical Equipment",
      icon: "💊",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2940&auto=format&fit=crop",
      description: "Precision machinery for pharmaceutical production",
      fullDescription: "Our pharmaceutical equipment meets the highest industry standards for precision, cleanliness, and efficiency. From liquid filling to packaging, we provide complete solutions for pharmaceutical manufacturing.",
      price: "₹6,50,000 - ₹25,00,000",
      rating: 4.9,
      reviews: 87,
      items: [
        {
          name: "Mustard Oil Filling Packaging",
          image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=800",
          shortDesc: "Specialized for oil-based products"
        },
        {
          name: "Petroleum Jelly Filling Machine",
          image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800",
          shortDesc: "Handles high-viscosity materials"
        },
        {
          name: "Pharma Liquid Filling Machine",
          image: "https://images.unsplash.com/photo-1581093577421-5a1a5fd5f242?q=80&w=800",
          shortDesc: "Meets GMP standards for pharmaceuticals"
        },
        {
          name: "Vitamins Syrup Filling Machine",
          image: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?q=80&w=800",
          shortDesc: "Accurate dosing for nutritional products"
        },
        {
          name: "Oral Liquid Syrup Filling Machine",
          image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=800",
          shortDesc: "Perfect for medicinal syrups"
        }
      ]
    },
    {
      id: 3,
      name: "Conveyor Systems",
      icon: "⚙️",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2858&auto=format&fit=crop",
      description: "Efficient conveyor systems for industrial applications",
      fullDescription: "Our conveyor systems are built to handle the most demanding industrial environments. With customizable configurations and robust construction, they ensure smooth material handling for maximum productivity.",
      price: "₹3,50,000 - ₹12,00,000",
      rating: 4.7,
      reviews: 95,
      items: [
        {
          name: "Roller Table and Conveyors",
          image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800",
          shortDesc: "Heavy-duty industrial design"
        },
        {
          name: "Rubber Belt Conveyor System",
          image: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?q=80&w=800",
          shortDesc: "Excellent grip for all materials"
        },
        {
          name: "Food Conveyor System",
          image: "https://images.unsplash.com/photo-1569937756447-1d45682a5c18?q=80&w=800",
          shortDesc: "Food-grade materials, easy cleaning"
        },
        {
          name: "Mobile Conveying System",
          image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800",
          shortDesc: "Portable design for flexible operations"
        },
        {
          name: "Aeration Conveyor",
          image: "https://images.unsplash.com/photo-1581093577421-5a1a5fd5f242?q=80&w=800",
          shortDesc: "For light materials and packaging"
        }
      ]
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
    <div className="product-slider-section py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products & Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of high-quality industrial machinery and equipment
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex border border-gray-300 rounded-lg overflow-hidden">
            {products.map((product, index) => (
              <button 
                key={product.id}
                className={`px-5 py-3 transition-all duration-300 flex items-center ${
                  activeCategory === index 
                    ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <span className="mr-2">{product.icon}</span>
                <span className="font-medium">{product.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Category Description */}
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{products[activeCategory].name}</h3>
          <p className="text-gray-600">{products[activeCategory].fullDescription}</p>
          <div className="flex items-center justify-center mt-3">
            <div className="mr-4">
              <span className="font-medium text-gray-800">Price Range: </span>
              <span className="text-blue-600 font-bold">{products[activeCategory].price}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-gray-800 mr-1">Rating: </span>
              <span className="text-yellow-500 flex items-center">
                {products[activeCategory].rating} <FaStar className="ml-1" />
              </span>
              <span className="text-gray-500 text-sm ml-1">({products[activeCategory].reviews} reviews)</span>
            </div>
          </div>
        </div>
        
        {/* Product Cards Slider */}
        <div className="product-slider mb-12">
          <Slider {...sliderSettings}>
            {products[activeCategory].items.map((item, index) => (
              <div key={index} className="px-3 mb-8">
                <div 
                  className={`product-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform ${
                    expandedCard === index ? 'scale-105 shadow-lg' : ''
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.name} 
                      className="w-full h-52 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                      New
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">
                      {item.shortDesc}
                    </p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <button 
                        onClick={() => toggleCard(index)}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {expandedCard === index ? 'Less Details' : 'More Details'} <FaArrowRight className={`ml-1 transition-transform duration-300 ${expandedCard === index ? 'rotate-90' : ''}`} />
                      </button>
                      <button className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
                        <FaShoppingCart />
                      </button>
                    </div>
                    
                    {/* Expanded Card Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      expandedCard === index ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-700 mb-2">Key Features</h4>
                        <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                          <li>High precision manufacturing</li>
                          <li>Easy maintenance design</li>
                          <li>Energy efficient operation</li>
                          <li>Compatible with industry standards</li>
                          <li>1-year warranty included</li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                          <span className="text-green-600 font-semibold">Available for Quick Delivery</span>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md text-sm transition-colors">
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg inline-flex items-center">
            <FaSearch className="mr-2" /> View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
