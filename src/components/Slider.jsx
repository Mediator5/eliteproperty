import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Find Your Dream Home",
      subtitle: "Discover luxury properties in prime locations",
      description: "Browse through our extensive collection of premium homes and find the perfect property that matches your lifestyle and budget.",
      buttonText: "Start Searching",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: "/src/assets/NWxJepQVbga9.jpg"
    },
    {
      id: 2,
      title: "Sell Your Property",
      subtitle: "Get the best value for your investment",
      description: "Our expert team will help you sell your property quickly and at the best possible price with our proven marketing strategies.",
      buttonText: "Get Valuation",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      image: "/src/assets/EZOOU4ENphhJ.jpg"
    },
    {
      id: 3,
      title: "Investment Opportunities",
      subtitle: "Build wealth through real estate",
      description: "Explore lucrative investment opportunities in the real estate market with our comprehensive analysis and expert guidance.",
      buttonText: "View Investments",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      image: "/src/assets/QEegjaIgo5Dk.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <span className="text-sm font-medium">Take Action</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make Your
            <span className="gradient-text"> Next Move?</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 transform translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 transform -translate-x-full'
                      : 'opacity-0 transform translate-x-full'
                }`}
                style={{ background: slide.background }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-8">
                    <div className="max-w-2xl text-white">
                      <h3 className="text-4xl md:text-6xl font-bold mb-4 animate-slideInLeft">
                        {slide.title}
                      </h3>
                      <p className="text-xl md:text-2xl mb-4 opacity-90 animate-slideInLeft">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg mb-8 opacity-80 leading-relaxed animate-slideInLeft">
                        {slide.description}
                      </p>
                      <button className="group px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 btn-hover font-semibold text-lg flex items-center gap-2 animate-slideInLeft">
                        {slide.buttonText}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 bg-muted rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-linear"
              style={{ 
                width: `${((currentSlide + 1) / slides.length) * 100}%` 
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

