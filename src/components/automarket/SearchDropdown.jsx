import React, { useRef, useEffect, useState } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const makes = ['Any Make', 'Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Kia', 'Mercedes', 'Nissan', 'Opel', 'Peugeot', 'Renault', 'Skoda', 'Toyota', 'Volkswagen', 'Volvo'];
const years = ['Any Year', ...Array.from({ length: 25 }, (_, i) => String(2025 - i))];
const priceRanges = ['Any Price', 'Under €5,000', '€5,000 – €10,000', '€10,000 – €20,000', '€20,000 – €40,000', '€40,000+'];

export default function SearchDropdown({ onClose }) {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [make, setMake] = useState('Any Make');
  const [year, setYear] = useState('Any Year');
  const [price, setPrice] = useState('Any Price');

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword) params.set('q', keyword);
    if (make !== 'Any Make') params.set('make', make);
    if (year !== 'Any Year') params.set('year', year);
    if (price !== 'Any Price') params.set('price', price);
    navigate(`/cars-for-sale${params.toString() ? '?' + params.toString() : ''}`);
    onClose();
  };

  return (
    <div
      ref={ref}
      className="absolute right-0 top-full mt-2 w-80 bg-white border border-border rounded-2xl shadow-xl p-4 z-50"
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-bold text-foreground">Quick Search</p>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Keyword */}
      <div className="relative mb-3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          autoFocus
          type="text"
          placeholder="Search by keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm pl-9 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
      </div>

      {/* Filters row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: 'Make', value: make, options: makes, set: setMake },
          { label: 'Year', value: year, options: years, set: setYear },
          { label: 'Price', value: price, options: priceRanges, set: setPrice },
        ].map(({ label, value, options, set }) => (
          <div key={label} className="relative">
            <label className="block text-xs text-muted-foreground mb-1 font-medium">{label}</label>
            <div className="relative">
              <select
                value={value}
                onChange={(e) => set(e.target.value)}
                className="w-full appearance-none border border-border rounded-lg px-2 py-2 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary pr-5 truncate"
              >
                {options.map((o) => <option key={o}>{o}</option>)}
              </select>
              <ChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSearch}
        className="w-full bg-primary text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
      >
        <Search className="w-4 h-4" /> Search
      </button>
    </div>
  );
}