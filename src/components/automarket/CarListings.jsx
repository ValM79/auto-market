import React from 'react';
import { useNavigate } from 'react-router-dom';

// Using car logos from a reliable public CDN (carlogos.org)
const MAKES = [
  { label: 'Abarth',        logo: 'https://www.carlogos.org/car-logos/abarth-logo.png' },
  { label: 'Alfa Romeo',    logo: 'https://www.carlogos.org/car-logos/alfa-romeo-logo.png' },
  { label: 'Aston Martin',  logo: 'https://www.carlogos.org/car-logos/aston-martin-logo.png' },
  { label: 'Audi',          logo: 'https://www.carlogos.org/car-logos/audi-logo.png' },
  { label: 'Bentley',       logo: 'https://www.carlogos.org/car-logos/bentley-logo.png' },
  { label: 'BMW',           logo: 'https://www.carlogos.org/car-logos/bmw-logo.png' },
  { label: 'BYD',           logo: 'https://www.carlogos.org/car-logos/byd-logo.png' },
  { label: 'Cadillac',      logo: 'https://www.carlogos.org/car-logos/cadillac-logo.png' },
  { label: 'Chevrolet',     logo: 'https://www.carlogos.org/car-logos/chevrolet-logo.png' },
  { label: 'Chrysler',      logo: 'https://www.carlogos.org/car-logos/chrysler-logo.png' },
  { label: 'Citroen',       logo: 'https://www.carlogos.org/car-logos/citroen-logo.png' },
  { label: 'Cupra',         logo: 'https://www.carlogos.org/car-logos/cupra-logo.png' },
  { label: 'Dacia',         logo: 'https://www.carlogos.org/car-logos/dacia-logo.png' },
  { label: 'Dodge',         logo: 'https://www.carlogos.org/car-logos/dodge-logo.png' },
  { label: 'DS Automobiles',logo: 'https://www.carlogos.org/car-logos/ds-logo.png' },
  { label: 'Ferrari',       logo: 'https://www.carlogos.org/car-logos/ferrari-logo.png' },
  { label: 'Fiat',          logo: 'https://www.carlogos.org/car-logos/fiat-logo.png' },
  { label: 'Ford',          logo: 'https://www.carlogos.org/car-logos/ford-logo.png' },
  { label: 'Genesis',       logo: 'https://www.carlogos.org/car-logos/genesis-logo.png' },
  { label: 'Honda',         logo: 'https://www.carlogos.org/car-logos/honda-logo.png' },
  { label: 'Hyundai',       logo: 'https://www.carlogos.org/car-logos/hyundai-logo.png' },
  { label: 'Infiniti',      logo: 'https://www.carlogos.org/car-logos/infiniti-logo.png' },
  { label: 'Jaguar',        logo: 'https://www.carlogos.org/car-logos/jaguar-logo.png' },
  { label: 'Jeep',          logo: 'https://www.carlogos.org/car-logos/jeep-logo.png' },
  { label: 'Kia',           logo: 'https://www.carlogos.org/car-logos/kia-logo.png' },
  { label: 'Lamborghini',   logo: 'https://www.carlogos.org/car-logos/lamborghini-logo.png' },
  { label: 'Land Rover',    logo: 'https://www.carlogos.org/car-logos/land-rover-logo.png' },
  { label: 'Lexus',         logo: 'https://www.carlogos.org/car-logos/lexus-logo.png' },
  { label: 'Lincoln',       logo: 'https://www.carlogos.org/car-logos/lincoln-logo.png' },
  { label: 'Maserati',      logo: 'https://www.carlogos.org/car-logos/maserati-logo.png' },
  { label: 'Mazda',         logo: 'https://www.carlogos.org/car-logos/mazda-logo.png' },
  { label: 'McLaren',       logo: 'https://www.carlogos.org/car-logos/mclaren-logo.png' },
  { label: 'Mercedes-Benz', logo: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png' },
  { label: 'MG',            logo: 'https://www.carlogos.org/car-logos/mg-logo.png' },
  { label: 'Mini',          logo: 'https://www.carlogos.org/car-logos/mini-logo.png' },
  { label: 'Mitsubishi',    logo: 'https://www.carlogos.org/car-logos/mitsubishi-logo.png' },
  { label: 'Nissan',        logo: 'https://www.carlogos.org/car-logos/nissan-logo.png' },
  { label: 'Opel',          logo: 'https://www.carlogos.org/car-logos/opel-logo.png' },
  { label: 'Peugeot',       logo: 'https://www.carlogos.org/car-logos/peugeot-logo.png' },
  { label: 'Polestar',      logo: 'https://www.carlogos.org/car-logos/polestar-logo.png' },
  { label: 'Porsche',       logo: 'https://www.carlogos.org/car-logos/porsche-logo.png' },
  { label: 'Renault',       logo: 'https://www.carlogos.org/car-logos/renault-logo.png' },
  { label: 'Rolls-Royce',   logo: 'https://www.carlogos.org/car-logos/rolls-royce-logo.png' },
  { label: 'Saab',          logo: 'https://www.carlogos.org/car-logos/saab-logo.png' },
  { label: 'Seat',          logo: 'https://www.carlogos.org/car-logos/seat-logo.png' },
  { label: 'Skoda',         logo: 'https://www.carlogos.org/car-logos/skoda-logo.png' },
  { label: 'Smart',         logo: 'https://www.carlogos.org/car-logos/smart-logo.png' },
  { label: 'Subaru',        logo: 'https://www.carlogos.org/car-logos/subaru-logo.png' },
  { label: 'Suzuki',        logo: 'https://www.carlogos.org/car-logos/suzuki-logo.png' },
  { label: 'Tesla',         logo: 'https://www.carlogos.org/car-logos/tesla-logo.png' },
  { label: 'Toyota',        logo: 'https://www.carlogos.org/car-logos/toyota-logo.png' },
  { label: 'Volkswagen',    logo: 'https://www.carlogos.org/car-logos/volkswagen-logo.png' },
  { label: 'Volvo',         logo: 'https://www.carlogos.org/car-logos/volvo-logo.png' },
];

// Split makes into 3 columns
function chunkIntoColumns(arr, cols) {
  const perCol = Math.ceil(arr.length / cols);
  return Array.from({ length: cols }, (_, i) => arr.slice(i * perCol, (i + 1) * perCol));
}

function MakeCard({ label, logo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const makeSlug = label.toLowerCase().replace(/\s+/g, '-');
    navigate(`/cars-by-make/${makeSlug}`);
  };

  return (
    <button
      onClick={handleClick}
      className="group flex flex-col items-center bg-white border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-primary/30 transition-all text-center"
    >
      <div className="w-full h-20 bg-secondary/30 flex items-center justify-center px-3 py-3">
        <img
          src={logo}
          alt={label}
          className="max-w-full max-h-full object-contain"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
      <div className="px-2 py-2 w-full border-t border-border/50">
        <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors leading-tight block truncate">
          {label}
        </span>
      </div>
    </button>
  );
}

export default function CarListings() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Browse by Make</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {MAKES.map((make) => (
          <MakeCard key={make.label} {...make} />
        ))}
      </div>
    </section>
  );
}