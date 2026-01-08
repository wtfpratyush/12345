import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Home, Building2, TrendingUp, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../mock';

const ServicesPage = () => {
  const iconMap = {
    Home: Home,
    Building2: Building2,
    TrendingUp: TrendingUp,
    FileText: FileText
  };

  const serviceDetails = [
    {
      id: 1,
      title: 'Residential Properties',
      icon: 'Home',
      description: 'Expert guidance for all your residential property needs',
      features: [
        'Apartments and flats buying/selling',
        'Independent houses and villas',
        'Builder floors and penthouses',
        'Rental property assistance',
        'Property valuation services',
        'Home loan assistance'
      ],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'
    },
    {
      id: 2,
      title: 'Commercial Properties',
      icon: 'Building2',
      description: 'Comprehensive solutions for commercial real estate',
      features: [
        'Office space buying/leasing',
        'Retail shops and showrooms',
        'Commercial complexes',
        'Co-working space solutions',
        'Warehouse and industrial spaces',
        'Commercial property management'
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
    },
    {
      id: 3,
      title: 'Investment Consulting',
      icon: 'TrendingUp',
      description: 'Strategic investment advice for maximum returns',
      features: [
        'Market trend analysis',
        'ROI assessment and projections',
        'Portfolio diversification advice',
        'Under-construction property investments',
        'Land and plot investments',
        'Long-term investment strategies'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      id: 4,
      title: 'Property Advisory',
      icon: 'FileText',
      description: 'Professional advisory for informed decisions',
      features: [
        'Legal documentation support',
        'Property title verification',
        'Fair market valuation',
        'Property inspection services',
        'Negotiation assistance',
        'Post-sale support and guidance'
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-top duration-700">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-in fade-in slide-in-from-top duration-700">
            Comprehensive real estate solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Detailed Services */}
          <div className="space-y-20">
            {serviceDetails.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to make your real estate journey smooth and hassle-free
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your requirements and goals' },
              { step: '02', title: 'Property Search', desc: 'Finding the perfect match for your needs' },
              { step: '03', title: 'Verification', desc: 'Complete legal and documentation checks' },
              { step: '04', title: 'Closure', desc: 'Smooth transaction and handover process' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Real Estate Guidance?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experienced team help you find the perfect property or investment opportunity.
          </p>
          <Button
            onClick={() => window.location.href = '/contact'}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
          >
            Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;