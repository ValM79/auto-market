import React from 'react';
import Navbar from '../components/automarket/Navbar';
import Footer from '../components/automarket/Footer';

const insuranceCompanies = [
  {
    name: 'AXA Insurance',
    description: 'One of Ireland\'s leading car insurance providers with comprehensive coverage options.',
    phone: '+353 1 208 9999',
    rating: 4.5,
    reviews: 3200,
    priceFrom: '€350/year',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80',
  },
  {
    name: 'Allianz Ireland',
    description: 'Trusted global insurer offering competitive car insurance with great customer service.',
    phone: '+353 1 613 3900',
    rating: 4.4,
    reviews: 2800,
    priceFrom: '€320/year',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Aviva Ireland',
    description: 'Flexible car insurance plans tailored to your driving needs and budget.',
    phone: '+353 1 898 7950',
    rating: 4.3,
    reviews: 2100,
    priceFrom: '€310/year',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&q=80',
  },
  {
    name: 'FBD Insurance',
    description: 'Irish-owned insurer with a strong track record and nationwide support network.',
    phone: '+353 1 761 7000',
    rating: 4.2,
    reviews: 1750,
    priceFrom: '€295/year',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80',
  },
  {
    name: 'Liberty Insurance',
    description: 'Comprehensive car insurance with flexible payment options across Ireland.',
    phone: '+353 61 498 400',
    rating: 4.1,
    reviews: 1400,
    priceFrom: '€280/year',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80',
  },
  {
    name: '123.ie',
    description: 'Online-first insurance with fast quotes and great value for Irish drivers.',
    phone: '+353 1 400 3400',
    rating: 4.4,
    reviews: 1950,
    priceFrom: '€300/year',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80',
  },
];

export default function CarInsurance() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Car Insurance</h1>
        <p className="text-muted-foreground mb-8">Compare top car insurance providers across Ireland</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceCompanies.map((company) => (
            <div key={company.name} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-44 overflow-hidden">
                <img src={company.image} alt={company.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-foreground mb-1">{company.name}</h2>
                <p className="text-sm text-muted-foreground mb-3">{company.description}</p>
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${star <= Math.round(company.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">{company.rating} ({company.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">From {company.priceFrom}</span>
                  <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Get Quote
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">{company.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}