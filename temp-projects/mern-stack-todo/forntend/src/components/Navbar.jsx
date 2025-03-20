import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaEnvelope, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Helper function to determine if a link is active
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo for mobile view */}
          <div className="md:hidden flex items-center">
            <NavLink to="/" className="text-xl font-bold text-blue-700">Radhey Export</NavLink>
          </div>
          
          {/* Desktop Navigation - All in One Line */}
          <div className="hidden md:flex w-full items-center justify-between">
            {/* Navigation Links */}
            <div className="flex-grow">
              <ul className="flex items-center space-x-6 font-semibold text-gray-700">
                <li>
                  <NavLink 
                    to="/" 
                    className={({isActive}) => 
                      isActive 
                        ? "text-blue-700 border-b-2 border-blue-700 pb-1 px-2" 
                        : "hover:text-blue-600 cursor-pointer px-2"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/products" 
                    className={({isActive}) => 
                      isActive 
                        ? "text-blue-700 border-b-2 border-blue-700 pb-1 px-2" 
                        : "hover:text-blue-600 cursor-pointer px-2"
                    }
                  >
                    Products & Services
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/about" 
                    className={({isActive}) => 
                      isActive 
                        ? "text-blue-700 border-b-2 border-blue-700 pb-1 px-2" 
                        : "hover:text-blue-600 cursor-pointer px-2"
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contact" 
                    className={({isActive}) => 
                      isActive 
                        ? "text-blue-700 border-b-2 border-blue-700 pb-1 px-2" 
                        : "hover:text-blue-600 cursor-pointer px-2"
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            
            {/* Search Bar */}
            <div className="mx-4">
              <div className="flex justify-between items-center bg-gray-200 p-1 rounded-lg w-64">
                <input 
                  type="text" 
                  placeholder="Search Products/Services" 
                  className="flex-grow p-1 rounded-l-lg outline-none text-sm"
                />
                <button className="bg-blue-600 text-white px-3 py-1 rounded-r-lg flex items-center justify-center">
                  <FaSearch />
                </button>
              </div>
            </div>
            
            {/* Contact Supplier Button */}
            <div className="flex justify-center md:justify-end">
              <NavLink to="/contact">
                <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-teal-600 flex items-center justify-center w-full md:w-auto">
                  <FaEnvelope className="mr-2" /> Contact Supplier
                </button>
              </NavLink>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              className="focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu - Slide down animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3">
            <NavLink to="/" className={({isActive}) => 
              `font-medium ${isActive ? 'text-blue-700 font-bold' : 'text-gray-800'} hover:text-blue-600 transition-colors py-2`
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => 
              `font-medium ${isActive ? 'text-blue-700 font-bold' : 'text-gray-800'} hover:text-blue-600 transition-colors py-2`
            }>
              About Us
            </NavLink>
            <NavLink to="/products" className={({isActive}) => 
              `font-medium ${isActive ? 'text-blue-700 font-bold' : 'text-gray-800'} hover:text-blue-600 transition-colors py-2`
            }>
              Products & Services
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => 
              `font-medium ${isActive ? 'text-blue-700 font-bold' : 'text-gray-800'} hover:text-blue-600 transition-colors py-2`
            }>
              Contact
            </NavLink>
            
            <div className="flex justify-between items-center bg-gray-200 p-2 rounded-lg mt-2">
              <input 
                type="text" 
                placeholder="Search Products/Services" 
                className="flex-grow p-2 rounded-l-lg outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg flex items-center justify-center">
                <FaSearch />
              </button>
            </div>
            
            <div className="flex justify-center mt-2">
              <NavLink to="/contact" className="w-full">
                <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-teal-600 flex items-center justify-center w-full">
                  <FaEnvelope className="mr-2" /> Contact Supplier
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
