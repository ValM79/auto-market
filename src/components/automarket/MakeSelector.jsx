import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';

const popularMakes = [
  { name: 'Volkswagen', count: 11819 },
  { name: 'Audi', count: 7815 },
  { name: 'BMW', count: 8373 },
  { name: 'Toyota', count: 6984 },
  { name: 'Mercedes-Benz', count: 5699 },
  { name: 'Ford', count: 6738 },
  { name: 'Skoda', count: 4266 },
  { name: 'Hyundai', count: 5374 },
  { name: 'Nissan', count: 4747 },
  { name: 'BYD', count: 515 },
];

const allMakes = [
  { name: 'Abarth', count: 20 }, { name: 'AC', count: 1 }, { name: 'AHORN', count: 1 },
  { name: 'Alfa Romeo', count: 144 }, { name: 'Alpine', count: 8 }, { name: 'Aston Martin', count: 15 },
  { name: 'Audi', count: 7815 }, { name: 'Austin', count: 4 }, { name: 'Bentley', count: 45 },
  { name: 'BMW', count: 8373 }, { name: 'BYD', count: 515 }, { name: 'Cadillac', count: 9 },
  { name: 'Chevrolet', count: 25 }, { name: 'Chrysler', count: 13 }, { name: 'Citroen', count: 1674 },
  { name: 'Cupra', count: 542 }, { name: 'Dacia', count: 1297 }, { name: 'Daewoo', count: 1 },
  { name: 'Daihatsu', count: 15 }, { name: 'Daimler', count: 3 }, { name: 'DFSK', count: 5 },
  { name: 'Dodge', count: 1 }, { name: 'DS Automobiles', count: 121 }, { name: 'Ferrari', count: 16 },
  { name: 'Fiat', count: 628 }, { name: 'FISKER', count: 1 }, { name: 'Ford', count: 6738 },
  { name: 'Fuso', count: 1 }, { name: 'GEELY', count: 3 }, { name: 'GWM', count: 7 },
  { name: 'HARLEY DAVIDSON', count: 1 }, { name: 'Honda', count: 1784 }, { name: 'Hummer', count: 1 },
  { name: 'Hyundai', count: 5374 }, { name: 'INEOS', count: 7 }, { name: 'Infiniti', count: 7 },
  { name: 'Isuzu', count: 68 }, { name: 'Jaguar', count: 428 }, { name: 'Jeep', count: 163 },
  { name: 'KGM', count: 82 }, { name: 'Kia', count: 4305 }, { name: 'Lamborghini', count: 2 },
  { name: 'Lancia', count: 1 }, { name: 'Land Rover', count: 1606 }, { name: 'Leapmotor', count: 86 },
  { name: 'LEVC', count: 1 }, { name: 'Lexus', count: 480 }, { name: 'LMI', count: 1 },
  { name: 'Lotus', count: 4 }, { name: 'Maserati', count: 33 }, { name: 'Maxus', count: 17 },
  { name: 'Mazda', count: 1274 }, { name: 'McLaren', count: 1 }, { name: 'Mercedes-Benz', count: 5699 },
  { name: 'MG', count: 299 }, { name: 'Mini', count: 842 }, { name: 'Mitsubishi', count: 552 },
  { name: 'Morgan', count: 1 }, { name: 'Nissan', count: 4747 }, { name: 'Opel', count: 2423 },
  { name: 'Ora', count: 1 }, { name: 'Perodua', count: 1 }, { name: 'Peugeot', count: 3888 },
  { name: 'Polestar', count: 40 }, { name: 'Porsche', count: 313 }, { name: 'Renault', count: 3375 },
  { name: 'Rolls-Royce', count: 4 }, { name: 'Rover', count: 1 }, { name: 'Saab', count: 23 },
  { name: 'SEAT', count: 1803 }, { name: 'Skoda', count: 4266 }, { name: 'Skywell', count: 5 },
  { name: 'Smart', count: 44 }, { name: 'SsangYong', count: 67 }, { name: 'Subaru', count: 105 },
  { name: 'Suzuki', count: 1131 }, { name: 'Tesla', count: 181 }, { name: 'Toyota', count: 6984 },
  { name: 'Triumph', count: 1 }, { name: 'Vauxhall', count: 665 }, { name: 'Volkswagen', count: 11819 },
  { name: 'Volvo', count: 1938 }, { name: 'XPeng', count: 43 }, { name: 'YAMAHA', count: 2 },
  { name: 'Other', count: 70 },
];

function formatCount(n) {
  return n.toLocaleString();
}

export default function MakeSelector({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = search.trim()
    ? allMakes.filter(m => m.name.toLowerCase().includes(search.toLowerCase()))
    : null;

  const displayLabel = value || 'All makes';

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between border border-border rounded-lg px-4 py-3 text-base bg-white focus:outline-none focus:ring-1 focus:ring-primary/40 text-foreground hover:bg-secondary transition-colors"
      >
        <span className={value ? 'text-foreground' : 'text-muted-foreground'}>{displayLabel}</span>
        {value ? (
          <X className="w-4 h-4 text-muted-foreground hover:text-foreground" onClick={(e) => { e.stopPropagation(); onChange(''); }} />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-border rounded-lg shadow-xl z-50 overflow-hidden">
          {/* Search bar */}
          <div className="p-2 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                autoFocus
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search any make"
                className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary/40"
              />
            </div>
          </div>

          <div className="max-h-72 overflow-y-auto">
            {filtered ? (
              /* Search results */
              filtered.length === 0 ? (
                <div className="px-4 py-3 text-sm text-muted-foreground">No makes found</div>
              ) : (
                filtered.map(m => (
                  <button key={m.name} type="button"
                    onClick={() => { onChange(m.name); setOpen(false); setSearch(''); }}
                    className={`w-full text-left px-4 py-2 text-sm flex justify-between hover:bg-secondary transition-colors ${value === m.name ? 'bg-primary/5 text-primary font-medium' : 'text-foreground'}`}>
                    <span>{m.name}</span>
                    <span className="text-muted-foreground">({formatCount(m.count)})</span>
                  </button>
                ))
              )
            ) : (
              <>
                {/* All makes option */}
                <button type="button"
                  onClick={() => { onChange(''); setOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors ${!value ? 'bg-primary/5 text-primary' : 'text-foreground'}`}>
                  All makes
                </button>

                {/* Popular section */}
                <div className="px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-secondary/50">Popular</div>
                {popularMakes.map(m => (
                  <button key={m.name} type="button"
                    onClick={() => { onChange(m.name); setOpen(false); setSearch(''); }}
                    className={`w-full text-left px-4 py-2 text-sm flex justify-between hover:bg-secondary transition-colors ${value === m.name ? 'bg-primary/5 text-primary font-medium' : 'text-foreground'}`}>
                    <span>{m.name}</span>
                    <span className="text-muted-foreground">({formatCount(m.count)})</span>
                  </button>
                ))}

                {/* All makes section */}
                <div className="px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-secondary/50">All makes</div>
                {allMakes.map(m => (
                  <button key={m.name} type="button"
                    onClick={() => { onChange(m.name); setOpen(false); setSearch(''); }}
                    className={`w-full text-left px-4 py-2 text-sm flex justify-between hover:bg-secondary transition-colors ${value === m.name ? 'bg-primary/5 text-primary font-medium' : 'text-foreground'}`}>
                    <span>{m.name}</span>
                    <span className="text-muted-foreground">({formatCount(m.count)})</span>
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}