import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Camera, ChevronDown, Star, LayoutList, LayoutGrid, ArrowLeft } from 'lucide-react';
import Navbar from '../components/automarket/Navbar';
import Footer from '../components/automarket/Footer';
import SimpleFiltersSidebar from '../components/automarket/SimpleFiltersSidebar';

const listings = [
  {
    id: 1,
    dealer: 'PW Plant Sales',
    sellerType: 'Independent Dealership',
    sellerRating: null,
    spotlight: true,
    title: 'JCB 540-180 (2025) 🟡 BIG SAVINGS 🟡',
    description: 'Latest model telehandler with advanced features. Excellent for construction.',
    year: '2025',
    location: 'Kells, Meath',
    price: 'Price on request',
    photos: 10,
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80',
  },
  {
    id: 2,
    dealer: 'Meegan Plant & Commercial Sales',
    sellerType: 'Dealership',
    sellerRating: 4.5,
    spotlight: false,
    title: 'CAT 320 Excavator – 2019',
    description: 'Full size hydraulic excavator. Well-maintained, ready for work.',
    year: '2019',
    location: 'Dublin, Dublin',
    price: 'Price on request',
    photos: 14,
    image: 'https://images.unsplash.com/photo-1581091918092-24ec42f70d08?w=600&q=80',
  },
  {
    id: 3,
    dealer: 'Premium Plant Equipment',
    sellerType: 'Dealership',
    sellerRating: 4.7,
    spotlight: false,
    title: 'Komatsu PC220 Excavator – 2020',
    description: 'Powerful mid-size excavator with reduced operating costs. Excellent condition.',
    year: '2020',
    location: 'Cork City, Cork',
    price: 'Price on request',
    photos: 12,
    image: 'https://images.unsplash.com/photo-1581107471560-7111d4b91f91?w=600&q=80',
  },
  {
    id: 4,
    dealer: null,
    sellerType: 'Private Seller',
    sellerRating: 4.1,
    spotlight: false,
    title: 'Bobcat S570 Skid Steer Loader – 2021',
    description: 'Compact and versatile. Perfect for landscaping and construction work.',
    year: '2021',
    location: 'Galway, Galway',
    price: 'Price on request',
    photos: 11,
    image: 'https://images.unsplash.com/photo-1581091918284-6e37c3f25833?w=600&q=80',
  },
  {
    id: 5,
    dealer: 'Heavy Equipment Ireland',
    sellerType: 'Dealership',
    sellerRating: 4.8,
    spotlight: false,
    title: 'JCB 3CX Backhoe Loader – 2022',
    description: 'Versatile loader with backhoe attachment. Low hours, excellent condition.',
    year: '2022',
    location: 'Limerick, Limerick',
    price: 'Price on request',
    photos: 13,
    image: 'https://images.unsplash.com/photo-1581091923910-87e8ae0e40d3?w=600&q=80',
  },
  {
    id: 6,
    dealer: null,
    sellerType: 'Private Seller',
    sellerRating: 3.8,
    spotlight: false,
    title: 'Volvo L90H Wheel Loader – 2018',
    description: 'Heavy-duty wheel loader. Well-maintained, full service history included.',
    year: '2018',
    location: 'Waterford, Waterford',
    price: 'Price on request',
    photos: 15,
    image: 'https://images.unsplash.com/photo-1581107471537-e7cf1dc48e62?w=600&q=80',
  },
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

export default function PlantMachinery() {
  const [search, setSearch] = useState('');
  const [savedIds, setSavedIds] = useState([]);
  const [viewMode, setViewMode] = useState('list');

  const toggleSave = (id) => setSavedIds(prev =>
    prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
  );

  const filtered = listings.filter(c =>
    !search ||
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.location.toLowerCase().includes(search.toLowerCase())
  );

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
          <span className="text-foreground font-medium">Plant Machinery</span>
        </div>

        {/* Title + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Plant Machinery in Ireland</h1>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search Plant Machinery"
              className="w-full border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        {/* Banner */}
        <div className="mb-6 rounded-xl overflow-hidden border border-border h-36 sm:h-44">
          <img
            src="https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/800664dcf_generated_image.png"
            alt="Plant Machinery Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0 self-start sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
            <SimpleFiltersSidebar />
          </aside>

          {/* Listings */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-foreground font-medium">
                <span className="font-bold">11,418</span> ads for Plant Machinery in Ireland
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
                        {item.year && (
                          <p className="text-xs text-muted-foreground mb-1">{item.year}</p>
                        )}
                        {item.description && (
                          <p className="text-sm text-muted-foreground mb-1 line-clamp-2">{item.description}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{item.location}</p>
                      </div>
                      <div className="flex items-end justify-between mt-4">
                        <p className="text-lg font-bold text-foreground">{item.price}</p>
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
                  <p className="text-lg font-medium">No plant machinery found</p>
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