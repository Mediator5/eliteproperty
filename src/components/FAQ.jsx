import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/properties';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <span className="text-sm font-medium">FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help 
            you with your real estate needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id}
                className="accordion-item bg-card border rounded-lg overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="accordion-trigger w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted transition-all duration-300"
                >
                  <span className="text-lg font-semibold pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`accordion-content transition-all duration-300 ease-in-out ${
                    openFAQ === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-muted/50 rounded-2xl p-8 animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Contact us for personalized assistance with your real estate needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 btn-hover font-medium">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-all duration-300 font-medium">
                Schedule Call
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeInUp">
            <div className="text-center p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">📞</span>
              </div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Speak directly with our experts
              </p>
              <p className="text-primary font-medium">(555) 123-4567</p>
            </div>

            <div className="text-center p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">✉️</span>
              </div>
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Get detailed answers via email
              </p>
              <p className="text-primary font-medium">info@eliteproperties.com</p>
            </div>

            <div className="text-center p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">💬</span>
              </div>
              <h4 className="font-semibold mb-2">Live Chat</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Chat with us in real-time
              </p>
              <p className="text-primary font-medium">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

