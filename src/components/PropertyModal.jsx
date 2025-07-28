import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Bed, Bath, Car, Square, MapPin, Calendar, Ruler } from 'lucide-react';

const PropertyModal = ({ property, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in ${property.name} (${property.price}). Please contact me with more information.`
  });

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.slider_images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.slider_images.length - 1 : prev - 1
    );
  };

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'bed':
        return <Bed className="w-5 h-5" />;
      case 'bath':
        return <Bath className="w-5 h-5" />;
      case 'car':
        return <Car className="w-5 h-5" />;
      case 'square-foot':
        return <Square className="w-5 h-5" />;
      default:
        return <Square className="w-5 h-5" />;
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you soon.');
    setShowEnquiryForm(false);
    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content w-full max-w-4xl m-4" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">{property.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!showEnquiryForm ? (
            <>
              {/* Image Slider */}
              <div className="relative mb-6">
                <img 
                  src={property.slider_images[currentImageIndex]} 
                  alt={property.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {property.slider_images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  {/* Price and Location */}
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">{property.price}</div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Property Features</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center p-3 bg-muted rounded-lg">
                          {getFeatureIcon(feature.icon)}
                          <span className="ml-2 font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Additional Details</h3>
                    <div className="space-y-3">
                      {property.year_built && (
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-muted-foreground mr-2" />
                          <span className="text-muted-foreground">Year Built:</span>
                          <span className="ml-2 font-medium">{property.year_built}</span>
                        </div>
                      )}
                      {property.lot_size && (
                        <div className="flex items-center">
                          <Ruler className="w-5 h-5 text-muted-foreground mr-2" />
                          <span className="text-muted-foreground">Lot Size:</span>
                          <span className="ml-2 font-medium">{property.lot_size}</span>
                        </div>
                      )}
                      {property.floor && (
                        <div className="flex items-center">
                          <Square className="w-5 h-5 text-muted-foreground mr-2" />
                          <span className="text-muted-foreground">Floor:</span>
                          <span className="ml-2 font-medium">{property.floor}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {property.long_description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button
                      onClick={() => setShowEnquiryForm(true)}
                      className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 btn-hover font-medium"
                    >
                      Make Enquiry
                    </button>
                    <button className="w-full px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-all duration-300 font-medium">
                      Schedule Viewing
                    </button>
                    <button className="w-full px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-all duration-300 font-medium">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Enquiry Form */
            <div>
              <h3 className="text-2xl font-bold mb-6">Property Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Additional message or questions"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 btn-hover font-medium"
                  >
                    Send Enquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEnquiryForm(false)}
                    className="flex-1 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-all duration-300 font-medium"
                  >
                    Back to Details
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;

