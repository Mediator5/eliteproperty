import React from 'react';
import { Search, FileText, Key, Home } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Search & Discover",
      description: "Browse our extensive property database or tell us your requirements. Our advanced search tools help you find properties that match your criteria.",
      details: ["Custom search filters", "Neighborhood insights", "Market analysis", "Property recommendations"]
    },
    {
      id: 2,
      icon: FileText,
      title: "Consultation & Planning",
      description: "Meet with our expert agents for a personalized consultation. We'll understand your needs, budget, and timeline to create a tailored strategy.",
      details: ["Free consultation", "Budget planning", "Timeline development", "Strategy creation"]
    },
    {
      id: 3,
      icon: Key,
      title: "Negotiation & Closing",
      description: "Our experienced negotiators work to get you the best deal. We handle all paperwork and guide you through the closing process.",
      details: ["Expert negotiation", "Legal documentation", "Inspection coordination", "Closing assistance"]
    },
    {
      id: 4,
      icon: Home,
      title: "Move In & Beyond",
      description: "Congratulations! We'll help with the final steps and provide ongoing support. Your relationship with us doesn't end at closing.",
      details: ["Move-in assistance", "Ongoing support", "Property management", "Future planning"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <span className="text-sm font-medium">How It Works</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Journey to
            <span className="gradient-text"> Homeownership</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven 4-step process makes buying or selling real estate simple, transparent, 
            and stress-free. Here's how we guide you every step of the way.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div 
                    key={step.id}
                    className="relative animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Step Number & Icon */}
                    <div className="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                        {step.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Details */}
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="flex items-start space-x-6 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number & Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-xs font-bold">
                    {step.id}
                  </div>
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-accent"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="bg-gradient-bg rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Take the first step towards your real estate goals. Our team is ready to guide you 
              through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-300 btn-hover font-semibold">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-all duration-300 font-semibold">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 animate-fadeInUp">
          <div className="text-center p-6 bg-card border rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
            <div className="text-sm text-muted-foreground">Initial Response</div>
          </div>
          <div className="text-center p-6 bg-card border rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">7 days</div>
            <div className="text-sm text-muted-foreground">Property Search</div>
          </div>
          <div className="text-center p-6 bg-card border rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">30 days</div>
            <div className="text-sm text-muted-foreground">Average Closing</div>
          </div>
          <div className="text-center p-6 bg-card border rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">Lifetime</div>
            <div className="text-sm text-muted-foreground">Ongoing Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

