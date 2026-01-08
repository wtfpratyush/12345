// Mock data for Reegal Realtors website

export const contactInfo = {
  phone: '+91-9876543210',
  whatsapp: '+91-9876543210',
  email: 'info@reegalrealtors.com',
  address: 'OMAXE World Street, 20A, Royal Street, Sector 79, Faridabad, Haryana 121101',
  locationPin: '99P3+GW Faridabad, Haryana',
  mapUrl: 'https://maps.google.com/?q=28.3865,77.3046'
};

export const services = [
  {
    id: 1,
    title: 'Residential Properties',
    description: 'Expert guidance for buying, selling, and renting residential properties including apartments, villas, and independent houses.',
    icon: 'Home'
  },
  {
    id: 2,
    title: 'Commercial Properties',
    description: 'Comprehensive solutions for commercial real estate including offices, retail spaces, and business complexes.',
    icon: 'Building2'
  },
  {
    id: 3,
    title: 'Investment Consulting',
    description: 'Strategic investment advice to maximize returns on your real estate portfolio with market insights.',
    icon: 'TrendingUp'
  },
  {
    id: 4,
    title: 'Property Advisory',
    description: 'Professional advisory services for property valuation, legal verification, and documentation support.',
    icon: 'FileText'
  }
];

export const properties = [
  {
    id: 1,
    title: '3BHK Luxury Apartment',
    location: 'Sector 79, Faridabad',
    price: '₹85 Lakhs',
    type: 'Residential',
    area: '1,850 sq.ft',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'
  },
  {
    id: 2,
    title: 'Commercial Office Space',
    location: 'OMAXE World Street',
    price: '₹1.2 Cr',
    type: 'Commercial',
    area: '2,500 sq.ft',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  },
  {
    id: 3,
    title: '4BHK Premium Villa',
    location: 'Sector 86, Faridabad',
    price: '₹1.5 Cr',
    type: 'Residential',
    area: '3,200 sq.ft',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80'
  },
  {
    id: 4,
    title: 'Retail Shop Space',
    location: 'Sector 79, Faridabad',
    price: '₹65 Lakhs',
    type: 'Commercial',
    area: '800 sq.ft',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
  },
  {
    id: 5,
    title: '2BHK Modern Apartment',
    location: 'Sector 81, Faridabad',
    price: '₹55 Lakhs',
    type: 'Residential',
    area: '1,200 sq.ft',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80'
  },
  {
    id: 6,
    title: 'Industrial Warehouse',
    location: 'Sector 85, Faridabad',
    price: '₹2.8 Cr',
    type: 'Commercial',
    area: '10,000 sq.ft',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: 'Trusted Expertise',
    description: 'Years of experience in Faridabad real estate market with proven track record.',
    icon: 'Shield'
  },
  {
    id: 2,
    title: 'Market Knowledge',
    description: 'Deep understanding of local property trends, pricing, and investment opportunities.',
    icon: 'BarChart3'
  },
  {
    id: 3,
    title: 'Client-First Approach',
    description: 'Your goals and satisfaction are our top priority in every transaction.',
    icon: 'Users'
  },
  {
    id: 4,
    title: 'End-to-End Support',
    description: 'Complete assistance from property search to final documentation and handover.',
    icon: 'CheckCircle'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    feedback: 'Excellent service! They helped us find our dream home in Faridabad. Very professional and responsive team.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    feedback: 'Great experience with Reegal Realtors. Their market knowledge and guidance made our property investment smooth.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Verma',
    feedback: 'Highly recommended for commercial properties. They understood our requirements perfectly.',
    rating: 5
  }
];

// Form submission mock handler
export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form submitted (MOCK):', formData);
      resolve({ success: true, message: 'Thank you! We will contact you soon.' });
    }, 1000);
  });
};

export const submitPropertyInquiry = async (propertyId, formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Property inquiry submitted (MOCK):', { propertyId, ...formData });
      resolve({ success: true, message: 'Inquiry submitted successfully!' });
    }, 1000);
  });
};