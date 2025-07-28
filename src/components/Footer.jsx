import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Properties', href: '#properties' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Property Search',
    'Property Valuation',
    'Buying Services',
    'Selling Services',
    'Investment Properties',
    'Market Analysis'
  ];

  const locations = [
    'Beverly Hills',
    'West Hollywood',
    'Malibu',
    'Pasadena',
    'Downtown LA',
    'Santa Monica'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold gradient-text mb-4">
                Elite Properties
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your trusted partner in luxury real estate. We've been helping clients 
                find their dream homes and investment properties for over 15 years.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">123 Luxury Avenue, Beverly Hills, CA 90210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm">info@eliteproperties.com</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4 mt-6">
                <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
                <li>
                  <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    Blog
                  </button>
                </li>
                <li>
                  <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Service Areas</h3>
              <ul className="space-y-3">
                {locations.map((location) => (
                  <li key={location}>
                    <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                      {location}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Stay Updated</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-sm border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 Elite Properties. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookie Policy
              </button>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Back to Top
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm font-medium">REALTOR®</div>
            <div className="text-sm font-medium">MLS MEMBER</div>
            <div className="text-sm font-medium">NAR CERTIFIED</div>
            <div className="text-sm font-medium">BBB A+ RATED</div>
            <div className="text-sm font-medium">LICENSED & INSURED</div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-accent transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;

