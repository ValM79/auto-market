import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ArrowLeft } from 'lucide-react';
import Navbar from '../components/automax/Navbar';
import Footer from '../components/automax/Footer';
import FiltersSidebar from '../components/automax/FiltersSidebar';
import ListingCard from '../components/automax/ListingCard';
import PromoBanner from '../components/automax/PromoBanner';

const electricHybridListings = [
  {
    id: 1,
    spotlight: true,
    sellerType: 'Trusted Independent Dealership',
    sellerRating: 4.6,
    dealer: 'EcoMotors Dublin',
    dealerLogo: 'https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=80&q=80',
    title: 'Tesla Model 3',
    year: 2021,
    fuel: 'Electric',
    mileage: '25,000 km',
    location: 'Dublin',
    price: 42000,
    monthly: 710,
    photos: 20,
    image: 'https://images.unsplash.com/photo-1560958089-b8a63019b834?w=600&q=80',
    trusted: true,
  },
  {
    id: 2,
    spotlight: true,
    sellerType: 'Dealership',
    sellerRating: 4.5,
    dealer: 'Green Motors Cork',
    dealerLogo: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=80&q=80',
    title: 'Toyota Prius',
    year: 2020,
    fuel: '1.8 Hybrid',
    mileage: '38,000 km',
    location: 'Cork',
    price: 26500,
    monthly: 450,
    photos: 17,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80',
    trusted: true,
  },
  {
    id: 3,
    spotlight: false,
    sellerType: 'Dealership',
    sellerRating: 4.7,
    dealer: 'Prestige Auto Galway',
    dealerLogo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    title: 'BMW i4',
    year: 2021,
    fuel: 'Electric',
    mileage: '22,000 km',
    location: 'Galway',
    price: 55000,
    monthly: 930,
    photos: 22,
    image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=600&q=80',
    trusted: true,
  },
  {
    id: 4,
    spotlight: false,
    sellerType: 'Dealership',
    sellerRating: 4.4,
    dealer: 'EcoVehicles Limerick',
    dealerLogo: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=80&q=80',
    title: 'Nissan Leaf',
    year: 2020,
    fuel: 'Electric',
    mileage: '31,500 km',
    location: 'Limerick',
    price: 28900,
    monthly: 490,
    photos: 15,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
    trusted: true,
  },
  {
    id: 5,
    spotlight: false,
    sellerType: 'Dealership',
    sellerRating: 4.3,
    dealer: 'Smart Motors Waterford',
    dealerLogo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
    title: 'Hyundai Ioniq Hybrid',
    year: 2019,
    fuel: '1.6 Hybrid',
    mileage: '58,200 km',
    location: 'Waterford',
    price: 21800,
    monthly: 370,
    photos: 12,
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&q=80',
    trusted: true,
  },
  {
    id: 6,
    spotlight: true,
    sellerType: 'Dealership',
    sellerRating: 4.8,
    dealer: 'FutureMotors Dublin',
    dealerLogo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=80&q=80',
    title: 'Audi e-tron',
    year: 2022,
    fuel: 'Electric',
    mileage: '18,000 km',
    location: 'Dublin',
    price: 62000,
    monthly: 1050,
    photos: 24,
    image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=600&q=80',
    trusted: true,
  },
  {
    id: 7,
    spotlight: false,
    sellerType: 'Dealership',
    sellerRating: 4.2,
    dealer: 'Eco Cars Wexford',
    dealerLogo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
    title: 'Honda Insight Hybrid',
    year: 2021,
    fuel: '1.5 Hybrid',
    mileage: '29,000 km',
    location: 'Wexford',
    price: 24500,
    monthly: 415,
    photos: 14,
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&q=80',
    trusted: true,
  },
];

export default function ElectricHybridCars() {
  const [search, setSearch] = useState('');
  const [savedIds, setSavedIds] = useState([]);
  const [activeFilters, setActiveFilters] = useState({ vehicles: [] });

  const toggleSave = (id) => setSavedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);

  const filtered = electricHybridListings.filter(c =>
    !search || c.title.toLowerCase().includes(search.toLowerCase()) || c.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
          <button onClick={() => window.history.back()} className="flex items-center gap-1 hover:text-primary transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
          <span>›</span>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-medium">Electric & Hybrid Cars</span>
        </div>

        {/* Title + Search */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-foreground mb-3">Electric & Hybrid Cars</h1>
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search Green Cars"
              className="w-full bg-secondary/60 rounded-lg pl-9 pr-4 py-3 text-sm focus:outline-none border-0 outline-none"
            />
          </div>
        </div>

        <PromoBanner image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80" />

        <div className="flex gap-6">
          <aside className="hidden lg:block w-80 flex-shrink-0 self-start sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
            <FiltersSidebar onFilterChange={setActiveFilters} />
          </aside>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{filtered.length.toLocaleString()}</span> cars in Ireland
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Sort by: <span className="font-semibold text-foreground">Best match</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {filtered.map(car => (
                <ListingCard
                  key={car.id}
                  item={{ ...car, price: `€${car.price.toLocaleString()}` }}
                  saved={savedIds.includes(car.id)}
                  onToggleSave={toggleSave}
                  viewMode="list"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}