import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Home, Building2, TrendingUp, FileText, CheckCircle, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-top duration-700">
            About Reegal Realtors
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-in fade-in slide-in-from-top duration-700">
            Your Trusted Real Estate Partner in Faridabad
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Reegal Realtors (रीगल रिएल्टर्स) is a premier real estate consulting firm based in Faridabad, Haryana. With years of experience in the real estate market, we have established ourselves as a trusted name in property consulting and advisory services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Located in the heart of OMAXE World Street, Sector 79, we specialize in helping individuals and businesses find their ideal properties, whether residential or commercial. Our deep understanding of the Faridabad real estate market enables us to provide valuable insights and expert guidance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in building long-term relationships with our clients, ensuring that every transaction is smooth, transparent, and beneficial. Your property goals are our priority.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7641868/pexels-photo-7641868.jpeg"
                alt="Real Estate Consulting"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional real estate consulting services that empower our clients to make informed property decisions. We strive to simplify the real estate process while ensuring maximum value and satisfaction for every client.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the most trusted and preferred real estate consulting firm in Faridabad and surrounding regions, known for our integrity, market expertise, and commitment to client success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

   
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-Centric</h3>
              <p className="text-gray-600 leading-relaxed">
                Your needs and goals are at the center of everything we do. We listen, understand, and deliver solutions tailored to you.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We operate with complete transparency and honesty, building trust through ethical practices in every transaction.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering superior service and results, constantly improving to exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Comprehensive real estate solutions across multiple domains
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: 'Residential', desc: 'Apartments, villas, and independent houses' },
              { icon: Building2, title: 'Commercial', desc: 'Offices, retail spaces, and complexes' },
              { icon: TrendingUp, title: 'Investment', desc: 'Strategic property investment guidance' },
              { icon: FileText, title: 'Advisory', desc: 'Legal, valuation, and documentation' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                <item.icon className="w-12 h-12 text-blue-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Trust Us</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Market Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deep knowledge of Faridabad's real estate market, including sector-wise property trends, pricing dynamics, and investment hotspots.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We understand that every client has unique needs. Our personalized approach ensures solutions that perfectly match your requirements and budget.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From property search to final handover, we provide complete assistance including legal verification, documentation, and post-sale support.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Years of successful transactions and satisfied clients across residential and commercial properties in Faridabad and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;