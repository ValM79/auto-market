import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Fuel, Gauge, ChevronRight, BadgeCheck, Zap } from 'lucide-react';

const FEATURED = [
  {
    id: 101,
    title: '2023 BMW 5 Series 530d',
    price: 48500,
    year: 2023,
    mileage: '18,000 km',
    fuel: 'Diesel',
    location: 'Dublin',
    sellerRating: 4.9,
    trusted: true,
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80',
    dealerName: 'BMW Premium Dublin',
  },
  {
    id: 102,
    title: '2022 Mercedes-Benz C-Class',
    price: 42900,
    year: 2022,
    mileage: '24,500 km',
    fuel: 'Petrol',
    location: 'Cork',
    sellerRating: 4.8,
    trusted: true,
    badge: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80',
    dealerName: 'AutoMax Cork',
  },
  {
    id: 103,
    title: '2023 Tesla Model 3',
    price: 38750,
    year: 2023,
    mileage: '9,200 km',
    fuel: 'Electric',
    location: 'Dublin',
    sellerRating: 5.0,
    trusted: true,
    badge: 'Electric',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80',
    dealerName: 'EV Direct Ireland',
  },
  {
    id: 104,
    title: '2021 Audi Q5 S-Line',
    price: 36200,
    year: 2021,
    mileage: '41,000 km',
    fuel: 'Diesel',
    location: 'Galway',
    sellerRating: 4.7,
    trusted: true,
    badge: 'Reduced',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80',
    dealerName: 'West Motors Galway',
  },
  {
    id: 105,
    title: '2022 Volkswagen Golf GTI',
    price: 29995,
    year: 2022,
    mileage: '15,800 km',
    fuel: 'Petrol',
    location: 'Limerick',
    sellerRating: 4.8,
    trusted: false,
    badge: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80',
    dealerName: 'Private Seller',
  },
  {
    id: 106,
    title: '2023 Hyundai IONIQ 6',
    price: 44100,
    year: 2023,
    mileage: '5,600 km',
    fuel: 'Electric',
    location: 'Dublin',
    sellerRating: 4.9,
    trusted: true,
    badge: 'Electric',
    image: 'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=600&q=80',
    dealerName: 'Hyundai Dublin Central',
  },
];

const badgeStyles = {
  Premium: 'bg-amber-100 text-amber-700 border border-amber-200',
  'Hot Deal': 'bg-red-100 text-red-600 border border-red-200',
  Electric: 'bg-green-100 text-green-700 border border-green-200',
  Reduced: 'bg-blue-100 text-blue-700 border border-blue-200',
};

function FeaturedCard({ car }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/vehicle/${car.id}`, { state: { car } })}
      className="group bg-white rounded-2xl border border-border shadow-sm overflow-hidden cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-gray-100">
        <img
          src={car.image}
          alt={car.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyles[car.badge] || 'bg-secondary text-foreground'}`}>
          {car.badge === 'Electric' && <Zap className="w-3 h-3 inline mr-0.5 -mt-0.5" />}
          {car.badge}
        </div>
        {car.trusted && (
          <div className="absolute top-3 right-3 bg-white/90 rounded-full p-1 shadow">
            <BadgeCheck className="w-4 h-4 text-green-600" />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-foreground text-sm leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {car.title}
        </h3>
        <p className="text-xl font-extrabold text-foreground mb-3">€{car.price.toLocaleString()}</p>

        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1"><Gauge className="w-3.5 h-3.5" />{car.mileage}</span>
          <span className="flex items-center gap-1"><Fuel className="w-3.5 h-3.5" />{car.fuel}</span>
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{car.location}</span>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold text-foreground">{car.sellerRating}</span>
            <span className="text-xs text-muted-foreground ml-1 truncate max-w-[100px]">{car.dealerName}</span>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </div>
  );
}

export default function FeaturedVehicles() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured Vehicles</h2>
          <p className="text-sm text-muted-foreground mt-1">Hand-picked top listings from trusted sellers</p>
        </div>
        <button
          onClick={() => navigate('/cars-for-sale')}
          className="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          View all <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURED.map(car => <FeaturedCard key={car.id} car={car} />)}
      </div>

      <div className="mt-6 sm:hidden text-center">
        <button
          onClick={() => navigate('/cars-for-sale')}
          className="text-sm font-semibold text-primary hover:underline"
        >
          View all listings →
        </button>
      </div>
    </section>
  );
}