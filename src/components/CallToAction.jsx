import React from 'react';
import { ArrowRight, Phone, Calendar, MessageCircle } from 'lucide-react';

const CallToAction = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProperties = () => {
    const element = document.querySelector('#properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9)), url('/src/assets/kSG45GUzGG62.jpg')`
            }}
          />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-white/5 rounded-full animate-bounce"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
                Your Dream Home
                <span className="block">Awaits You</span>
              </h2>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto animate-fadeInUp">
                Don't wait any longer. Take the first step towards finding your perfect property 
                or selling your current one with Elite Properties.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp">
                <button
                  onClick={scrollToProperties}
                  className="group px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-300 btn-hover font-semibold text-lg flex items-center justify-center gap-2"
                >
                  Explore Properties
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button
                  onClick={scrollToContact}
                  className="group px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fadeInUp">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Call Now</h3>
                  <p className="text-sm opacity-90 mb-3">Speak with an expert immediately</p>
                  <p className="font-medium">(555) 123-4567</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <Calendar className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Book Meeting</h3>
                  <p className="text-sm opacity-90 mb-3">Schedule a personalized consultation</p>
                  <p className="font-medium">Available 24/7</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm opacity-90 mb-3">Get instant answers to your questions</p>
                  <p className="font-medium">Start Chat</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Buying CTA */}
          <div className="bg-card border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-slideInLeft">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to Buy?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Find your perfect home from our extensive collection of premium properties. 
                Our experts will guide you through every step.
              </p>
              <button 
                onClick={scrollToProperties}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 btn-hover font-medium"
              >
                Browse Properties
              </button>
            </div>
          </div>

          {/* Selling CTA */}
          <div className="bg-card border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-slideInRight">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to Sell?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get the best value for your property with our proven marketing strategies 
                and expert negotiation skills.
              </p>
              <button 
                onClick={scrollToContact}
                className="w-full px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
              >
                Get Free Valuation
              </button>
            </div>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="mt-16 text-center bg-muted/50 rounded-2xl p-8 animate-fadeInUp">
          <h3 className="text-2xl font-bold mb-4">
            Limited Time Offer
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book a consultation this month and receive a complimentary property valuation 
            and market analysis worth $500.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 btn-hover font-semibold"
            >
              Claim Your Free Consultation
            </button>
            <div className="text-sm text-muted-foreground">
              ⏰ Offer expires in 30 days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

