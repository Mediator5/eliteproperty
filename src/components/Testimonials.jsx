import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/properties';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <span className="text-sm font-medium">Client Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients
            <span className="gradient-text"> Say About Us</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience with Elite Properties.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="testimonial-card animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials Carousel */}
        <div className="mt-16 bg-gradient-bg rounded-2xl p-8 md:p-12 text-white animate-fadeInUp">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Join 1,200+ Happy Clients
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience the Elite Properties difference. Our commitment to excellence 
              has earned us the trust of over 1,200 satisfied clients.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                <div className="opacity-90">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="opacity-90">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
                <div className="opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Support Available</div>
              </div>
            </div>

            <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-300 btn-hover font-semibold">
              Start Your Journey
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fadeInUp">
          <p className="text-muted-foreground mb-8">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">REALTOR®</div>
            <div className="text-2xl font-bold">MLS</div>
            <div className="text-2xl font-bold">NAR</div>
            <div className="text-2xl font-bold">BBB A+</div>
            <div className="text-2xl font-bold">CERTIFIED</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

