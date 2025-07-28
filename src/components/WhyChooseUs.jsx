import React from 'react';
import { Award, Users, TrendingUp, Shield, Clock, Heart, Star, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Industry Leaders",
      description: "15+ years of excellence in luxury real estate with numerous industry awards and recognition.",
      stats: "Top 1% Agents"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified professionals bring decades of combined experience and local market expertise.",
      stats: "50+ Experts"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of successful transactions with 98% client satisfaction and repeat business.",
      stats: "$2.5B+ Sold"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Licensed, bonded, and insured with transparent processes and ethical business practices.",
      stats: "100% Secure"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock availability for urgent matters and dedicated support throughout your journey.",
      stats: "Always Available"
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "We treat every client like family, providing personalized service tailored to your unique needs.",
      stats: "1,200+ Happy Clients"
    }
  ];

  const achievements = [
    {
      icon: Star,
      title: "Best Real Estate Agency 2023",
      organization: "LA Business Awards"
    },
    {
      icon: Award,
      title: "Top Producer Award",
      organization: "California Association of Realtors"
    },
    {
      icon: CheckCircle,
      title: "Excellence in Customer Service",
      organization: "Better Business Bureau"
    },
    {
      icon: TrendingUp,
      title: "Fastest Growing Agency",
      organization: "Real Estate Weekly"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Elite Properties is
            <span className="gradient-text"> Your Best Choice</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With over 15 years of experience and a proven track record, we're not just another 
            real estate agency. We're your trusted partners in achieving your property goals.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-card border rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon and Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Achievement</div>
                  <div className="font-bold text-primary">{reason.stats}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-bg rounded-2xl p-8 md:p-12 text-white mb-16 animate-fadeInUp">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Award-Winning Excellence
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <achievement.icon className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm opacity-80">{achievement.organization}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeInUp">
          {/* Left - Why Others Fall Short */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              Why Others Fall Short
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 dark:text-red-300">Limited Market Knowledge</h4>
                  <p className="text-sm text-red-600 dark:text-red-400">Many agents lack deep local market insights</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 dark:text-red-300">Poor Communication</h4>
                  <p className="text-sm text-red-600 dark:text-red-400">Slow response times and unclear updates</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 dark:text-red-300">Hidden Fees</h4>
                  <p className="text-sm text-red-600 dark:text-red-400">Unexpected costs and unclear pricing</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 dark:text-red-300">One-Size-Fits-All</h4>
                  <p className="text-sm text-red-600 dark:text-red-400">Generic approach without personalization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - The Elite Properties Difference */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              The Elite Properties Difference
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300">Deep Market Expertise</h4>
                  <p className="text-sm text-green-600 dark:text-green-400">15+ years of local market knowledge and insights</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300">24/7 Communication</h4>
                  <p className="text-sm text-green-600 dark:text-green-400">Always available with regular updates and transparency</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300">Transparent Pricing</h4>
                  <p className="text-sm text-green-600 dark:text-green-400">No hidden fees, clear pricing from day one</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300">Personalized Service</h4>
                  <p className="text-sm text-green-600 dark:text-green-400">Tailored approach based on your unique needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="bg-card border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Experience the Elite Properties Difference
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied clients who chose Elite Properties for their real estate needs. 
              Let us show you why we're the best choice for your next property transaction.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 btn-hover font-semibold">
              Choose Elite Properties Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

