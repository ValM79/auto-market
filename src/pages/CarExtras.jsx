import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Camera, ChevronDown, Star, LayoutList, LayoutGrid, ArrowLeft } from 'lucide-react';
import Navbar from '../components/automarket/Navbar';
import Footer from '../components/automarket/Footer';
import FiltersSidebar from '../components/automarket/FiltersSidebar';

const listings = [
  {
    id: 1,
    dealer: 'CM Wheels Ltd',
    dealerLogo: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=80&q=80',
    sellerType: 'Independent Dealership',
    sellerRating: null,
    spotlight: true,
    title: '17" Alloy VW POLO SEAT IBIZA AUDI A1 FABIA…',
    description: 'Set of 4 alloy wheels, 17 inch, 5x100 PCD. Fit VW Polo, Seat Ibiza, Audi A1, Skoda Fabia. Free nationwide delivery.',
    hoursAgo: '11 days',
    location: 'Dungannon, Tyrone',
    category: 'Alloys & Wheels',
    price: '£430',
    photos: 9,
    image: 'https://images.unsplash.com/photo-1558618047-f4e90b0a0d0f?w=600&q=80',
  },
  {
    id: 2,
    dealer: null,
    dealerLogo: null,
    sellerType: 'Private Seller',
    sellerRating: null,
    spotlight: true,
    title: 'Brand New Continental ContiSportContact 5 Tyres – 225/45 R17',
    description: 'Set of 2 brand new Continental tyres, never fitted. 225/45 R17 91W. Great grip, perfect for performance cars.',
    hoursAgo: '2 days',
    location: 'Dublin',
    category: 'Tyres',
    price: '€220',
    photos: 3,
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600&q=80',
  },
  {
    id: 3,
    dealer: 'Accessories Auto Ireland',
    dealerLogo: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=80&q=80',
    sellerType: 'Independent Dealership',
    sellerRating: 4.6,
    spotlight: false,
    title: 'Universal Roof Rack Cross Bars – Silver Aluminium',
    description: 'Aluminium roof rack bars, adjustable fit. Suitable for most hatchbacks and saloons. Load rating 75kg.',
    hoursAgo: '3 days',
    location: 'Cork',
    category: 'Car Accessories',
    price: '€85',
    photos: 5,
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&q=80',
  },
  {
    id: 4,
    dealer: null,
    dealerLogo: null,
    sellerType: 'Private Seller',
    sellerRating: 4.1,
    spotlight: false,
    title: 'Thule Roof Box 430L – Black Aeroskin',
    description: 'Thule Motion XT XL roofbox, 430 litre capacity. Used twice, excellent condition. Fits most roof racks.',
    hoursAgo: '1 week',
    location: 'Galway',
    category: 'Car Accessories',
    price: '€350',
    photos: 7,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
  },
  {
    id: 5,
    dealer: 'PerfomanceParts IE',
    dealerLogo: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=80&q=80',
    sellerType: 'Independent Dealership',
    sellerRating: 4.8,
    spotlight: false,
    title: 'Universal Carbon Fibre Rear Spoiler – Hatchback',
    description: 'High quality carbon fibre rear spoiler, universal fit for hatchback. Easy fitment with included hardware.',
    hoursAgo: '5 days',
    location: 'Limerick',
    category: 'Styling & Exterior',
    price: '€149',
    photos: 6,
    image: 'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=600&q=80',
  },
  {
    id: 6,
    dealer: null,
    dealerLogo: null,
    sellerType: 'Private Seller',
    sellerRating: 3.9,
    spotlight: false,
    title: 'Dash Cam Front & Rear – Nextbase 522GW',
    description: 'Nextbase 522GW dual dashcam, front and rear. Alexa built-in, 1080p rear. Includes all mounts and cables.',
    hoursAgo: '4 days',
    location: 'Waterford',
    category: 'Electronics',
    price: '€110',
    photos: 4,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
];

const subsections = [
  { label: 'Car Extras', count: 8146 },
  { label: 'Alloys & Wheels', count: 5161 },
  { label: 'Tyres', count: 219 },
  { label: 'Car Accessories', count: 2766 },
  { label: 'Styling & Exterior', count: 312 },
  { label: 'Electronics', count: 488 },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(s => (
        <Star key={s} className={`w-3 h-3 ${s <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
      ))}
    </div>
  );
}

export default function CarExtras() {
  const [search, setSearch] = useState('');
  const [savedIds, setSavedIds] = useState([]);
  const [viewMode, setViewMode] = useState('list');
  const [activeSubsection, setActiveSubsection] = useState('Car Extras');

  const toggleSave = (id) => setSavedIds(prev =>
    prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
  );

  const filtered = listings.filter(c => {
    const matchesSearch = !search ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase());
    const matchesSection = activeSubsection === 'Car Extras' || c.category === activeSubsection;
    return matchesSearch && matchesSection;
  });

  return (
    <div className="min-h-screen bg-[#f4f5f6]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <button onClick={() => window.history.back()} className="flex items-center gap-1 hover:text-primary transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
          <span>›</span>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-medium">Car Extras</span>
        </div>

        {/* Title + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Car Extras in Ireland</h1>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search Car Extras"
              className="w-full border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        {/* Banner */}
        <div className="mb-6 rounded-xl overflow-hidden border border-border h-36 sm:h-44">
          <img
            src="https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/86d0dd29e_generated_image.png"
            alt="Car Extras Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0 self-start sticky top-4">
            {/* Section filter */}
            <div className="bg-white rounded-xl border border-border shadow-sm p-4 mb-4 text-sm">
              <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Section</p>
              <button className="flex items-center gap-1 text-primary text-sm mb-3 hover:underline">
                <ArrowLeft className="w-3.5 h-3.5" /> Cars &amp; Motor
              </button>
              <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Subsections</p>
              <div className="flex flex-col gap-1">
                {subsections.map(sub => (
                  <button
                    key={sub.label}
                    onClick={() => setActiveSubsection(sub.label)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSubsection === sub.label
                        ? 'border border-foreground bg-white font-semibold text-foreground'
                        : 'text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    <span>{sub.label}</span>
                    <span className="text-muted-foreground text-xs">{sub.count.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filters sidebar */}
            <div className="max-h-[calc(100vh-2rem)] overflow-y-auto">
              <FiltersSidebar />
            </div>
          </aside>

          {/* Listings */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-foreground font-medium">
                <span className="font-bold">8,145</span> ads for Car Extras in Ireland
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <button onClick={() => setViewMode('list')}>
                    <LayoutList className={`w-5 h-5 ${viewMode === 'list' ? 'text-primary' : 'text-muted-foreground'}`} />
                  </button>
                  <button onClick={() => setViewMode('grid')}>
                    <LayoutGrid className={`w-5 h-5 ${viewMode === 'grid' ? 'text-primary' : 'text-muted-foreground'}`} />
                  </button>
                </div>
                <div className="relative">
                  <select className="appearance-none border border-border rounded-lg px-3 py-1.5 text-sm bg-white pr-8 focus:outline-none">
                    <option>Sort by: Best match</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-4' : 'flex flex-col gap-4'}>
              {filtered.map(item => (
                <div key={item.id} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  {item.dealer && (
                    <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border bg-secondary/20">
                      <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center border border-border">
                        <span className="text-xs font-bold text-muted-foreground">{item.dealer.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">{item.dealer}</span>
                    </div>
                  )}

                  <div className={viewMode === 'grid' ? 'flex flex-col' : 'flex flex-col sm:flex-row'}>
                    <div className={`relative flex-shrink-0 ${viewMode === 'grid' ? 'h-44 w-full' : 'sm:w-56 h-44 sm:h-auto'}`}>
                      {item.spotlight && (
                        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-semibold px-2 py-0.5 rounded z-10">Spotlight</span>
                      )}
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                        <Camera className="w-3 h-3" /> {item.photos}
                      </div>
                    </div>

                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-xs text-muted-foreground">{item.sellerType}</span>
                          {item.sellerRating ? (
                            <>
                              <StarRating rating={item.sellerRating} />
                              <span className="text-xs text-muted-foreground">{item.sellerRating}</span>
                            </>
                          ) : (
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Star className="w-3 h-3 text-gray-300 fill-gray-300" /> No rating
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-bold text-foreground mb-1 hover:text-primary cursor-pointer transition-colors">{item.title}</h3>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mb-1 line-clamp-2">{item.description}</p>
                        )}
                        <p className="text-sm text-muted-foreground">
                          {item.hoursAgo} · {item.location} · <span className="text-primary">{item.category}</span>
                        </p>
                      </div>
                      <div className="flex items-end justify-between mt-4">
                        <p className="text-2xl font-bold text-foreground">{item.price}</p>
                        <button
                          onClick={() => toggleSave(item.id)}
                          className={`p-2 rounded-full border transition-colors ${savedIds.includes(item.id) ? 'border-destructive text-destructive' : 'border-border text-muted-foreground hover:text-destructive hover:border-destructive'}`}>
                          <Heart className={`w-5 h-5 ${savedIds.includes(item.id) ? 'fill-destructive' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="text-center py-16 text-muted-foreground col-span-2">
                  <p className="text-lg font-medium">No car extras found</p>
                  <p className="text-sm mt-1">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}