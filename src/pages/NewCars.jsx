import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, ChevronDown, ChevronUp, Heart, Camera, Info } from 'lucide-react';
import Navbar from '../components/automarket/Navbar';
import Footer from '../components/automarket/Footer';

const counties = ['All Ireland', 'Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford', 'Kerry', 'Wexford', 'Wicklow', 'Meath', 'Kildare'];
const radii = ['+5km', '+10km', '+20km', '+50km', '+100km', 'Nationwide'];
const makes = ['All makes', 'Audi', 'BMW', 'Ford', 'Hyundai', 'INEOS', 'Mercedes', 'Nissan', 'Renault', 'Toyota', 'Volkswagen'];
const models = ['All models', 'Corolla', 'Golf', 'Focus', 'A4', '3 Series', 'Grenadier', 'Tucson'];
const years = ['', '2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018'];
const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid', 'LPG', 'Other'];
const transmissions = ['Manual', 'Automatic', 'Semi-Automatic'];
const bodyTypes = ['Saloon', 'Hatchback', 'SUV', 'Estate', 'Coupe', 'Convertible', 'MPV', 'Van'];
const colours = ['Any', 'Black', 'White', 'Silver', 'Grey', 'Blue', 'Red', 'Green', 'Yellow', 'Orange'];
const adTypes = ['All', 'For Sale', 'Wanted'];

const listings = [
  {
    id: 1,
    dealer: 'Orangeworks Automotive',
    dealerLogo: 'https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?w=50&q=80',
    dealerType: 'Franchise Dealership',
    dealerRating: null,
    ratingLabel: 'No rating',
    spotlight: true,
    title: 'INEOS Grenadier 2-Seat Commercial (N1)',
    year: 2026,
    engine: '3.0 Diesel',
    mileage: '0 km',
    location: 'Kildare',
    price: '€59,995',
    badge: 'Warranty',
    photos: 10,
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=120&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=80',
    ],
  },
  {
    id: 2,
    dealer: 'Dublin City Motors',
    dealerLogo: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=50&q=80',
    dealerType: 'Franchise Dealership',
    dealerRating: 4.7,
    ratingLabel: '4.7',
    spotlight: false,
    title: 'Toyota Corolla 1.8 Hybrid GR Sport',
    year: 2026,
    engine: '1.8 Hybrid',
    mileage: '0 km',
    location: 'Dublin',
    price: '€36,500',
    badge: 'New',
    photos: 8,
    images: [
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=120&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=120&q=80',
    ],
  },
  {
    id: 3,
    dealer: 'Cork Premium Cars',
    dealerLogo: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=50&q=80',
    dealerType: 'Trusted Dealer',
    dealerRating: 4.9,
    ratingLabel: '4.9',
    spotlight: false,
    title: 'Volkswagen Golf 8 R-Line 2.0 TDI',
    year: 2025,
    engine: '2.0 TDI',
    mileage: '0 km',
    location: 'Cork',
    price: '€42,200',
    badge: null,
    photos: 12,
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=120&q=80',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=120&q=80',
    ],
  },
  {
    id: 4,
    dealer: 'Galway Motor Park',
    dealerLogo: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=50&q=80',
    dealerType: 'Dealership',
    dealerRating: 4.3,
    ratingLabel: '4.3',
    spotlight: false,
    title: 'BMW 3 Series 320d M Sport Auto',
    year: 2025,
    engine: '2.0 Diesel',
    mileage: '0 km',
    location: 'Galway',
    price: '€55,750',
    badge: 'Warranty',
    photos: 15,
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=120&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=120&q=80',
    ],
  },
  {
    id: 5,
    dealer: 'Limerick Auto Centre',
    dealerLogo: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=50&q=80',
    dealerType: 'Franchise Dealership',
    dealerRating: 4.5,
    ratingLabel: '4.5',
    spotlight: false,
    title: 'Hyundai Tucson 1.6 T-GDi Hybrid Premium',
    year: 2026,
    engine: '1.6 Hybrid',
    mileage: '0 km',
    location: 'Limerick',
    price: '€44,995',
    badge: 'New',
    photos: 9,
    images: [
      'https://images.unsplash.com/photo-1617469767698-a49e33d0bc2e?w=500&q=80',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=120&q=80',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=120&q=80',
    ],
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(s => (
        <Star key={s} className={`w-3 h-3 ${s <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
      ))}
    </div>
  );
}

function FilterSection({ title, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border py-3">
      <button onClick={() => setOpen(v => !v)} className="flex items-center justify-between w-full text-sm font-semibold text-foreground">
        {title}
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

function Sel({ value, onChange, options, placeholder }) {
  return (
    <div className="relative">
      <select value={value} onChange={e => onChange(e.target.value)}
        className="w-full appearance-none border border-border rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-primary/40 pr-7 text-foreground">
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
    </div>
  );
}

export default function NewCars() {
  const [search, setSearch] = useState('');
  const [trusted, setTrusted] = useState(false);
  const [sellerTypes, setSellerTypes] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [county, setCounty] = useState('All Ireland');
  const [radius, setRadius] = useState('+5km');
  const [make, setMake] = useState('All makes');
  const [model, setModel] = useState('All models');
  const [yearFrom, setYearFrom] = useState('');
  const [yearTo, setYearTo] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const [fuelSelected, setFuelSelected] = useState([]);
  const [transSelected, setTransSelected] = useState([]);
  const [bodySelected, setBodySelected] = useState([]);
  const [colour, setColour] = useState('Any');
  const [reserveOnline, setReserveOnline] = useState(false);
  const [adType, setAdType] = useState('All');
  const [savedIds, setSavedIds] = useState([]);

  const toggleArr = (setter) => (val) => setter(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]);
  const toggleSaved = (id) => setSavedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const handleReset = () => {
    setTrusted(false); setSellerTypes([]); setRatings([]);
    setCounty('All Ireland'); setRadius('+5km');
    setMake('All makes'); setModel('All models');
    setYearFrom(''); setYearTo('');
    setPriceFrom(''); setPriceTo('');
    setMileageFrom(''); setMileageTo('');
    setFuelSelected([]); setTransSelected([]); setBodySelected([]);
    setColour('Any'); setReserveOnline(false); setAdType('All');
  };

  const filtered = listings.filter(l => {
    const matchSearch = !search || l.title.toLowerCase().includes(search.toLowerCase());
    const matchCounty = county === 'All Ireland' || l.location === county;
    const matchMake = make === 'All makes' || l.title.toLowerCase().includes(make.toLowerCase());
    return matchSearch && matchCounty && matchMake;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-medium">Cars</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <h1 className="text-2xl font-bold text-foreground">New & Used 2026 Cars For Sale</h1>
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search Cars"
              className="w-full border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>

        {/* Promo banner */}
        <div className="rounded-xl overflow-hidden mb-6 flex h-36 sm:h-44 bg-white border border-border">
          <div className="w-1/3 bg-orange-500 flex flex-col items-center justify-center p-4 text-center">
            <div className="border-4 border-white rounded-lg p-3 mb-1">
              <span className="text-white font-extrabold text-xs leading-tight">CLICK<br/>HERE<br/>FOR MORE<br/>INFO</span>
            </div>
          </div>
          <div className="w-1/3 relative">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80" alt="Promo" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/3 bg-orange-500 flex flex-col items-center justify-center p-4 text-center">
            <p className="text-white font-extrabold text-lg sm:text-2xl leading-tight">MEMBERS<br/>FLEXIBLE<br/>MORTGAGE</p>
            <p className="text-white/80 text-xs mt-2">Lucan District Credit Union</p>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0 self-start sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
            <div className="bg-white rounded-xl border border-border shadow-sm p-4 text-sm">
              <button className="flex items-center justify-center gap-2 w-full bg-primary text-white rounded-lg px-4 py-2.5 hover:bg-primary/90 transition-colors mb-4 font-semibold">
                <Star className="w-4 h-4" /> Save Search
              </button>

              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-foreground">Filters</span>
                <button onClick={handleReset} className="text-xs text-primary hover:underline">Reset All</button>
              </div>

              <button className="flex items-center gap-2 w-full border border-border rounded-lg px-4 py-2.5 hover:bg-secondary transition-colors mb-3 text-muted-foreground">
                <Search className="w-4 h-4" /> View your previous searches
              </button>

              {/* Trusted dealers */}
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                <input type="checkbox" id="trusted" checked={trusted} onChange={e => setTrusted(e.target.checked)} className="w-3.5 h-3.5 accent-primary" />
                <label htmlFor="trusted" className="flex items-center gap-1.5 text-sm text-foreground cursor-pointer">
                  <span className="text-green-600">✓</span> Trusted dealers only <span className="text-muted-foreground">(4,214)</span>
                  <Info className="w-3.5 h-3.5 text-primary" />
                </label>
              </div>

              <FilterSection title="Seller type">
                <div className="flex flex-col gap-1.5">
                  {[['Dealership', '6,537'], ['Private seller', '1']].map(([label, count]) => (
                    <label key={label} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={sellerTypes.includes(label)} onChange={() => toggleArr(setSellerTypes)(label)} className="w-3.5 h-3.5 accent-primary" />
                      <span className="text-sm text-foreground">{label} <span className="text-muted-foreground">({count})</span></span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Rating" defaultOpen={true}>
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={ratings.includes(4)} onChange={() => toggleArr(setRatings)(4)} className="w-3.5 h-3.5 accent-primary" />
                    <StarRating rating={4} />
                    <span className="text-sm text-muted-foreground">4+ rated sellers only (6,086)</span>
                  </label>
                </div>
              </FilterSection>

              <FilterSection title="Location" defaultOpen={false}>
                <div className="flex flex-col gap-2">
                  <Sel value={county} onChange={setCounty} options={counties} />
                  <Sel value={radius} onChange={setRadius} options={radii} />
                </div>
              </FilterSection>

              <FilterSection title="Make / Model" defaultOpen={false}>
                <div className="flex flex-col gap-2">
                  <Sel value={make} onChange={setMake} options={makes} />
                  <Sel value={model} onChange={setModel} options={models} />
                </div>
              </FilterSection>

              <FilterSection title="Year" defaultOpen={false}>
                <div className="grid grid-cols-2 gap-2">
                  <Sel value={yearFrom} onChange={setYearFrom} options={years} placeholder="From" />
                  <Sel value={yearTo} onChange={setYearTo} options={years} placeholder="To" />
                </div>
              </FilterSection>

              <FilterSection title="Price" defaultOpen={false}>
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" value={priceFrom} onChange={e => setPriceFrom(e.target.value)} placeholder="From €" className="border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 w-full" />
                  <input type="number" value={priceTo} onChange={e => setPriceTo(e.target.value)} placeholder="To €" className="border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 w-full" />
                </div>
              </FilterSection>

              <FilterSection title="Mileage" defaultOpen={false}>
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" value={mileageFrom} onChange={e => setMileageFrom(e.target.value)} placeholder="From km" className="border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 w-full" />
                  <input type="number" value={mileageTo} onChange={e => setMileageTo(e.target.value)} placeholder="To km" className="border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 w-full" />
                </div>
              </FilterSection>

              <FilterSection title="Fuel type" defaultOpen={false}>
                <div className="flex flex-col gap-1.5">
                  {fuelTypes.map(f => (
                    <label key={f} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={fuelSelected.includes(f)} onChange={() => toggleArr(setFuelSelected)(f)} className="w-3.5 h-3.5 accent-primary" />
                      <span className="text-sm text-foreground">{f}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Transmission" defaultOpen={false}>
                <div className="flex flex-wrap gap-2">
                  {transmissions.map(t => (
                    <button key={t} onClick={() => toggleArr(setTransSelected)(t)}
                      className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-colors ${transSelected.includes(t) ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground hover:bg-secondary'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Body type" defaultOpen={false}>
                <div className="flex flex-col gap-1.5">
                  {bodyTypes.map(b => (
                    <label key={b} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={bodySelected.includes(b)} onChange={() => toggleArr(setBodySelected)(b)} className="w-3.5 h-3.5 accent-primary" />
                      <span className="text-sm text-foreground">{b}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Colour" defaultOpen={false}>
                <div className="flex flex-wrap gap-2">
                  {colours.map(c => (
                    <button key={c} onClick={() => setColour(c)}
                      className={`px-3 py-1.5 rounded-full border text-xs transition-colors ${colour === c ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground hover:bg-secondary'}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Reserve online" defaultOpen={false}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={reserveOnline} onChange={e => setReserveOnline(e.target.checked)} className="w-3.5 h-3.5 accent-primary" />
                  <span className="text-sm text-foreground">Reserve online only</span>
                </label>
              </FilterSection>

              <FilterSection title="Ad type" defaultOpen={false}>
                <div className="flex flex-col gap-1.5">
                  {adTypes.map(t => (
                    <label key={t} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="newCarsAdType" checked={adType === t} onChange={() => setAdType(t)} className="w-3.5 h-3.5 accent-primary" />
                      <span className="text-sm text-foreground">{t}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>
            </div>
          </aside>

          {/* Listings */}
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

            <div className="flex flex-col gap-5">
              {filtered.map(listing => (
                <div key={listing.id} className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
                  {/* Dealer header */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                    <img src={listing.dealerLogo} alt={listing.dealer} className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-sm font-semibold text-primary">{listing.dealer}</span>
                    {listing.spotlight && (
                      <span className="ml-2 text-xs bg-gray-800 text-white px-2 py-0.5 rounded font-semibold">Spotlight</span>
                    )}
                  </div>

                  {/* Main image + info */}
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-64 flex-shrink-0">
                      <div className="relative h-44 sm:h-48">
                        <img src={listing.images[0]} alt={listing.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/50 text-white text-xs px-2 py-0.5 rounded">
                          <Camera className="w-3 h-3" /> {listing.photos}
                        </div>
                      </div>
                      {/* Thumbnail strip */}
                      {listing.images.length > 1 && (
                        <div className="flex gap-1 p-1 bg-gray-50">
                          {listing.images.slice(1).map((img, i) => (
                            <div key={i} className="relative flex-1 h-14 overflow-hidden rounded">
                              <img src={img} alt="" className="w-full h-full object-cover" />
                              {i === listing.images.slice(1).length - 1 && listing.photos > 3 && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">+{listing.photos - 2}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-xs text-muted-foreground">{listing.dealerType}</span>
                          {listing.dealerRating ? (
                            <>
                              <StarRating rating={listing.dealerRating} />
                              <span className="text-xs font-semibold">{listing.ratingLabel}</span>
                            </>
                          ) : (
                            <span className="text-xs text-muted-foreground">{listing.ratingLabel}</span>
                          )}
                        </div>
                        <h3 className="text-base font-bold text-foreground mb-2 hover:text-primary cursor-pointer transition-colors">{listing.title}</h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground mb-3">
                          <span>{listing.year}</span>
                          <span>·</span>
                          <span>{listing.engine}</span>
                          <span>·</span>
                          <span>{listing.mileage}</span>
                          <span>·</span>
                          <span>{listing.location}</span>
                        </div>
                        {listing.badge && (
                          <span className="inline-block text-xs border border-border rounded px-2 py-0.5 text-muted-foreground">{listing.badge}</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xl font-extrabold text-foreground">{listing.price}</span>
                        <button onClick={() => toggleSaved(listing.id)}
                          className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${savedIds.includes(listing.id) ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'}`}>
                          <Heart className={`w-4 h-4 ${savedIds.includes(listing.id) ? 'fill-primary' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}