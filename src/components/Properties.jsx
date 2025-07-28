import React, { useState } from 'react';
import { Bed, Bath, Car, Square, MapPin, Eye } from 'lucide-react';
import { properties, propertyCategories } from '../data/properties';

const Properties = ({ onPropertySelect }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProperties = activeCategory === 'All' 
    ? properties 
    : properties.filter(property => property.category === activeCategory);

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'bed':
        return <Bed className="w-4 h-4" />;
      case 'bath':
        return <Bath className="w-4 h-4" />;
      case 'car':
        return <Car className="w-4 h-4" />;
      case 'square-foot':
        return <Square className="w-4 h-4" />;
      default:
        return <Square className="w-4 h-4" />;
    }
  };

  return (
    <section id="properties" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <span className="text-sm font-medium">Featured Properties</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Your Perfect
            <span className="gradient-text"> Property</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of premium properties. Each listing is carefully 
            selected to meet the highest standards of luxury and comfort.
          </p>
        </div>

        {/* Category Toggle */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp">
          {propertyCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground hover:bg-muted border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <div 
              key={property.id}
              className="property-card bg-card rounded-xl overflow-hidden shadow-lg border animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {property.category}
                </div>
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {property.price}
                </div>
              </div>

              {/* Property Content */}
              <div className="p-6">
                {/* Location */}
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>

                {/* Property Name */}
                <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors duration-300">
                  {property.name}
                </h3>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-4">
                  {property.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-muted-foreground text-sm">
                      {getFeatureIcon(feature.icon)}
                      <span className="ml-1">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {property.short_description}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => onPropertySelect(property)}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 btn-hover font-medium flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 animate-fadeInUp">
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium">
            Load More Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;

