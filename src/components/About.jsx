import React from 'react';
import { Award, Users, Home, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as the top real estate agency in Los Angeles for 3 consecutive years."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of certified professionals brings decades of combined experience."
    },
    {
      icon: Home,
      title: "Premium Properties",
      description: "Curated selection of luxury homes and investment opportunities."
    },
    {
      icon: TrendingUp,
      title: "Market Leaders",
      description: "Deep market knowledge and proven track record of successful transactions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
              <span className="text-sm font-medium">About Elite Properties</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Partner in 
              <span className="gradient-text"> Real Estate</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over 15 years, Elite Properties has been at the forefront of luxury real estate in Los Angeles. 
              We combine cutting-edge technology with personalized service to deliver exceptional results for our clients.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're buying your first home, selling a property, or building an investment portfolio, 
              our team of experts is dedicated to making your real estate journey smooth and successful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 btn-hover font-medium">
                Learn More
              </button>
              <button className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-all duration-300 font-medium">
                Our Story
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="animate-slideInRight">
            <div className="relative">
              <img 
                src="/src/assets/EZOOU4ENphhJ.jpg" 
                alt="Modern luxury home" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
                <div className="text-2xl font-bold text-primary mb-1">$2.5B+</div>
                <div className="text-sm text-muted-foreground">Total Sales Volume</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-lg border">
                <div className="text-2xl font-bold text-primary mb-1">1,200+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card border hover:shadow-lg transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

