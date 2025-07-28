import React from 'react';
import { Check, Star } from 'lucide-react';
import { pricingPlans } from '../data/properties';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <span className="text-sm font-medium">Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Perfect
            <span className="gradient-text"> Service Plan</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the service level that best fits 
            your needs and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl animate-fadeInUp ${
                plan.popular 
                  ? 'bg-gradient-bg text-white border-transparent scale-105' 
                  : 'bg-card hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    /transaction
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-white/20' : 'bg-primary/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                plan.popular
                  ? 'bg-white text-primary hover:bg-gray-100'
                  : 'bg-primary text-primary-foreground hover:bg-accent'
              } btn-hover`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <h4 className="font-semibold mb-1">No Hidden Fees</h4>
                <p className="text-sm text-muted-foreground">Transparent pricing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">🛡️</span>
                </div>
                <h4 className="font-semibold mb-1">Satisfaction Guarantee</h4>
                <p className="text-sm text-muted-foreground">100% satisfaction</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">📞</span>
                </div>
                <h4 className="font-semibold mb-1">Expert Support</h4>
                <p className="text-sm text-muted-foreground">Dedicated assistance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">⚡</span>
                </div>
                <h4 className="font-semibold mb-1">Fast Processing</h4>
                <p className="text-sm text-muted-foreground">Quick turnaround</p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Solutions */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="bg-gradient-bg rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              For large portfolios or unique requirements, we offer custom pricing and services 
              tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-300 btn-hover font-semibold">
                Contact Sales
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-all duration-300 font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

