import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { MapPin, Maximize, Phone, Mail } from 'lucide-react';
import { properties, submitPropertyInquiry } from '../mock';
import { useToast } from '../hooks/use-toast';

const PropertiesPage = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const { toast } = useToast();

  const propertyTypes = ['All', 'Residential', 'Commercial'];

  const filteredProperties = selectedType === 'All'
    ? properties
    : properties.filter(p => p.type === selectedType);

  const handleInquiry = async (propertyId) => {
    const result = await submitPropertyInquiry(propertyId, {
      name: 'Interested Buyer',
      email: 'buyer@example.com',
      phone: '+91-9876543210'
    });

    if (result.success) {
      toast({
        title: "Inquiry Submitted!",
        description: result.message,
      });
      setSelectedProperty(null);
    }
  };

  return (
    <div className="min-h-screen">
   
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-top duration-700">
            Featured Properties
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-in fade-in slide-in-from-top duration-700">
            Explore our handpicked selection of premium properties in Faridabad
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-gray-700 font-medium">Filter by:</span>
            {propertyTypes.map((type) => (
              <Button
                key={type}
                onClick={() => setSelectedType(type)}
                variant={selectedType === type ? 'default' : 'outline'}
                className={`transition-all duration-300 ${
                  selectedType === type
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

 
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredProperties.length} {selectedType === 'All' ? '' : selectedType} properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                      {property.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white hover:bg-green-700">
                      {property.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center text-sm text-gray-600">
                      <Maximize className="w-4 h-4 mr-1" />
                      <span>{property.area}</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{property.price}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => setSelectedProperty(property)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={() => window.open('tel:+919876543210', '_self')}
                      variant="outline"
                      size="icon"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedProperty(null)}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80">
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
              >
                <span className="text-2xl text-gray-600">×</span>
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Badge className="bg-blue-600 text-white">{selectedProperty.type}</Badge>
                <Badge className="bg-green-600 text-white">{selectedProperty.status}</Badge>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProperty.title}</h2>
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{selectedProperty.location}</span>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-gray-200">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Price</p>
                  <p className="text-2xl font-bold text-blue-600">{selectedProperty.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Area</p>
                  <p className="text-xl font-semibold text-gray-900">{selectedProperty.area}</p>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Details</h3>
                <p className="text-gray-600 leading-relaxed">
                  This is a premium {selectedProperty.type.toLowerCase()} property located in {selectedProperty.location}. 
                  The property offers excellent connectivity and is surrounded by all essential amenities. 
                  Perfect for those looking for a quality property in Faridabad.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button
                  onClick={() => handleInquiry(selectedProperty.id)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Submit Inquiry
                </Button>
                <Button
                  onClick={() => window.open('tel:+919876543210', '_self')}
                  variant="outline"
                  className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 py-6 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Didn't Find What You're Looking For?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us with your requirements and we'll help you find the perfect property.
          </p>
          <Button
            onClick={() => window.location.href = '/contact'}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;