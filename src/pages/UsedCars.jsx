import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ArrowLeft } from 'lucide-react';
import Navbar from '../components/automax/Navbar';
import Footer from '../components/automax/Footer';
import FiltersSidebar from '../components/automax/FiltersSidebar';
import ListingCard from '../components/automax/ListingCard';
import PromoBanner from '../components/automax/PromoBanner';

const usedCarListings = [
  {
    id: 1,
    spotlight: true,
    sellerType: 'Private Seller',
    sellerRating: 5,
    title: 'Hyundai IX20',
    year: 2015,
    fuel: '1.4 Diesel',
    mileage: '157,789 km',
    location: 'Wexford',
    price: 5150,
    monthly: 106,
    photos: 14,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80',
    trusted: false,
  },
  {
    id: 2,
    spotlight: true,
    sellerType: 'Trusted Independent Dealership',
    sellerRating: 4.4,
    dealer: 'Castle Motors Swords',
    dealerLogo: 'https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=80&q=80',
    title: 'Toyota Corolla',
    year: 2020,
    fuel: '1.8 Hybrid',
    mileage: '42,000 km',
    location: 'Dublin',
    price: 22500,
    monthly: 380,
    photos: 18,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80',
    trusted: true,
  },
  {
    id: 3,
    spotlight: false,
    sellerType: 'Private Seller',
    sellerRating: 4,
    title: 'Volkswagen Golf',
    year: 2018,
    fuel: '1.6 TDI',
    mileage: '88,500 km',
    location: 'Cork',
    price: 14900,
    monthly: 250,
    photos: 9,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80',
    trusted: false,
  },
  {
    id: 4,
    spotlight: false,
    sellerType: 'Dealership',
    sellerRating: 4.7,
    dealer: 'Premier Motors Cork',
    dealerLogo: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=80&q=80',
    title: 'BMW 3 Series',
    year: 2021,
    fuel: '2.0 Petrol',
    mileage: '31,200 km',
    location: 'Cork',
    price: 34500,
    monthly: 590,
    photos: 22,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80',
    trusted: true,
  },
  {
    id: 5,
    spotlight: false,
    sellerType: 'Private Seller',
    sellerRating: 3,
    title: 'Ford Focus',
    year: 2016,
    fuel: '1.5 Diesel',
    mileage: '112,000 km',
    location: 'Galway',
    price: 8200,
    monthly: 140,
    photos: 7,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
    trusted: false,
  },
  {
    id: 6,
    spotlight: false,
    sellerType: 'Dealership',
    sellerRating: 4.5,
    dealer: 'AutoVision Limerick',
    dealerLogo: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=80&q=80',
    title: 'Audi A4',
    year: 2019,
    fuel: '2.0 TDI',
    mileage: '64,800 km',
    location: 'Limerick',
    price: 27900,
    monthly: 470,
    photos: 16,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
    trusted: true,
  },
  {
    id: 7,
    spotlight: false,
    sellerType: 'Private Seller',
    sellerRating: 4.2,
    title: 'Mazda CX-5',
    year: 2017,
    fuel: '2.0 Petrol',
    mileage: '95,400 km',
    location: 'Waterford',
    price: 16800,
    monthly: 285,
    photos: 11,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    trusted: false,
  },
  {
    id: 8,
    spotlight: false,
    sellerType: 'Dealership',
    sellerRating: 4.6,
    dealer: 'Elite Motors Dublin',
    dealerLogo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=80&q=80',
    title: 'Opel Insignia',
    year: 2019,
    fuel: '1.6 Diesel',
    mileage: '72,900 km',
    location: 'Dublin',
    price: 19500,
    monthly: 330,
    photos: 15,
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&q=80',
    trusted: true,
  },
];

export default function UsedCars() {
  const [search, setSearch] = useState('');
  const [savedIds, setSavedIds] = useState([]);
  const [activeFilters, setActiveFilters] = useState({ vehicles: [] });

  const toggleSave = (id) => setSavedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);

  const filtered = usedCarListings.filter(c =>
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
          <span className="text-foreground font-medium">Used Cars</span>
        </div>

        {/* Title + Search */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-foreground mb-3">Used Cars For Sale</h1>
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search Used Cars"
              className="w-full bg-secondary/60 rounded-lg pl-9 pr-4 py-3 text-sm focus:outline-none border-0 outline-none"
            />
          </div>
        </div>

        <PromoBanner image="https://images.unsplash.com/photo-1578915036782-aa8b4b42a06d?w=1200&q=80" />

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