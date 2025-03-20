import React from 'react';
import HeroSection from './HeroSection';  
import ProductSection from './ProductSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import ProductSlider from './ProductSlider';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductSlider />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default Home;
