import React from 'react';
import { Home, Search, DollarSign, Key, Building, TrendingUp, Users, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Property Search",
      description: "Find your perfect home with our advanced search tools and expert guidance.",
      features: ["Custom search criteria", "Market analysis", "Neighborhood insights"]
    },
    {
      icon: DollarSign,
      title: "Property Valuation",
      description: "Get accurate property valuations based on current market conditions.",
      features: ["Comparative market analysis", "Investment potential", "Market trends"]
    },
    {
      icon: Key,
      title: "Buying Services",
      description: "Complete support throughout your home buying journey.",
      features: ["Negotiation support", "Inspection coordination", "Closing assistance"]
    },
    {
      icon: Home,
      title: "Selling Services",
      description: "Maximize your property value with our comprehensive selling services.",
      features: ["Professional staging", "Marketing strategy", "Price optimization"]
    },
    {
      icon: Building,
      title: "Investment Properties",
      description: "Build wealth through strategic real estate investments.",
      features: ["ROI analysis", "Portfolio management", "Market opportunities"]
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Stay informed with detailed market reports and trends.",
      features: ["Price trends", "Market forecasts", "Investment insights"]
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Expert advice tailored to your specific real estate needs.",
      features: ["Strategy planning", "Goal setting", "Timeline development"]
    },
    {
      icon: Shield,
      title: "Legal Support",
      description: "Navigate complex legal requirements with confidence.",
      features: ["Contract review", "Legal compliance", "Risk mitigation"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <span className="text-sm font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Real Estate
            <span className="gradient-text"> Solutions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From property search to closing, we provide end-to-end real estate services 
            designed to exceed your expectations and achieve your goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-card border hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6">
                <button className="text-primary hover:text-accent font-medium text-sm group-hover:underline transition-all duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="bg-gradient-bg rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our expert team help you navigate the real estate market and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-300 btn-hover font-semibold">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-all duration-300 font-semibold">
                View Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

