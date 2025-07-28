import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Properties from './components/Properties';
import Slider from './components/Slider';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import WhyChooseUs from './components/WhyChooseUs';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import PropertyModal from './components/PropertyModal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openPropertyModal = (property) => {
    setSelectedProperty(property);
  };

  const closePropertyModal = () => {
    setSelectedProperty(null);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Services />
      <Properties onPropertySelect={openPropertyModal} />
      <Slider />
      <Testimonials />
      <FAQ />
      <Contact />
      <Pricing />
      <HowItWorks />
      <CallToAction />
      <WhyChooseUs />
      <Consultation />
      <Footer />
      
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={closePropertyModal} 
        />
      )}
    </div>
  );
}

export default App;

