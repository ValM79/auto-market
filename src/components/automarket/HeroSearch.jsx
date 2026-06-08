import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3';

const makes = ['Abarth', 'AC', 'Acura', 'Aito', 'Aiways', 'Aixam', 'Alfa Romeo', 'Alpina', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'BYD', 'Cadillac', 'Chevrolet', 'Chrysler', 'Citroen', 'Cupra', 'Dacia', 'Daihatsu', 'Dodge', 'DS Automobiles', 'Ferrari', 'Fiat', 'Ford', 'Genesis', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Isuzu', 'Jaguar', 'Jeep', 'KGM', 'Kia', 'Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Mazda', 'Mclaren', 'Mercedes-Benz', 'MG', 'Mini', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeot', 'Polestar', 'Pontiac', 'Porsche', 'RAM', 'Renault', 'Rolls-Royce', 'Rover', 'Saab', 'Seat', 'Skoda', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Vauxhall', 'Volkswagen', 'Volvo', 'Xpeng', 'Zeekr'];

const modelsByMake = {
  'Abarth': ['124 Spider', '500', '595', '695'],
  'AC': ['Cobra'],
  'Acura': ['ILX', 'MDX', 'RDX', 'RLX', 'TL', 'TLX', 'TSX'],
  'Alfa Romeo': ['147', '156', '159', '166', 'Brera', 'Giulia', 'Giulietta', 'GT', 'GTV', 'Mito', 'Spider', 'Stelvio', 'Tonale'],
  'Aston Martin': ['DB11', 'DB9', 'DBS', 'DBX', 'Rapide', 'Vantage'],
  'Audi': ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'e-tron', 'e-tron GT', 'Q2', 'Q3', 'Q4 e-tron', 'Q5', 'Q6', 'Q7', 'Q8', 'R8', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'S3', 'S4', 'S5', 'S6', 'TT'],
  'Bentley': ['Bentayga', 'Continental', 'Flying Spur', 'Mulsanne'],
  'BMW': ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series', 'i3', 'i4', 'i5', 'i7', 'i8', 'iX', 'iX1', 'iX3', 'M2', 'M3', 'M4', 'M5', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4'],
  'BYD': ['Atto 3', 'Dolphin', 'Han', 'Seal', 'Song', 'Tang'],
  'Chevrolet': ['Aveo', 'Blazer', 'Camaro', 'Captiva', 'Colorado', 'Corvette', 'Cruze', 'Equinox', 'Impala', 'Malibu', 'Silverado', 'Spark', 'Suburban', 'Tahoe', 'Traverse', 'Trax'],
  'Citroen': ['Berlingo', 'C1', 'C2', 'C3', 'C3 Aircross', 'C4', 'C4 Cactus', 'C4 Picasso', 'C5', 'C5 Aircross', 'C5 X', 'Dispatch', 'Jumper', 'Jumpy', 'Nemo', 'SpaceTourer', 'Xsara'],
  'Cupra': ['Ateca', 'Born', 'Formentor', 'Leon', 'Terramar'],
  'Dacia': ['Dokker', 'Duster', 'Jogger', 'Lodgy', 'Logan', 'Sandero', 'Spring'],
  'Dodge': ['Caliber', 'Challenger', 'Charger', 'Dart', 'Durango', 'Journey', 'Nitro', 'Viper'],
  'DS Automobiles': ['DS 3', 'DS 3 Crossback', 'DS 4', 'DS 5', 'DS 7 Crossback', 'DS 9'],
  'Ferrari': ['296', '488', '812', 'California', 'F8', 'Portofino', 'Roma', 'SF90'],
  'Fiat': ['124 Spider', '500', '500L', '500X', 'Bravo', 'Doblo', 'Grande Punto', 'Panda', 'Punto', 'Tipo'],
  'Ford': ['B-Max', 'C-Max', 'EcoSport', 'Edge', 'Explorer', 'F-150', 'Fiesta', 'Focus', 'Galaxy', 'Ka', 'Ka+', 'Kuga', 'Mondeo', 'Mustang', 'Puma', 'Ranger', 'S-Max', 'Transit'],
  'Honda': ['Accord', 'Civic', 'CR-V', 'CR-Z', 'e', 'FR-V', 'HR-V', 'Insight', 'Jazz', 'Legend', 'NSX', 'S2000'],
  'Hyundai': ['Bayon', 'Elantra', 'Getz', 'i10', 'i20', 'i30', 'i40', 'Ioniq', 'Ioniq 5', 'Ioniq 6', 'ix20', 'ix35', 'Kona', 'Nexo', 'Santa Fe', 'Sonata', 'Tucson'],
  'Jaguar': ['E-Pace', 'E-Type', 'F-Pace', 'F-Type', 'I-Pace', 'S-Type', 'XE', 'XF', 'XJ', 'XK'],
  'Jeep': ['Cherokee', 'Commander', 'Compass', 'Grand Cherokee', 'Patriot', 'Renegade', 'Wrangler'],
  'Kia': ['Carens', 'Carnival', 'Ceed', 'EV6', 'EV9', 'Niro', 'Optima', 'Picanto', 'ProCeed', 'Rio', 'Sorento', 'Soul', 'Sportage', 'Stinger', 'Stonic', 'XCeed'],
  'Land Rover': ['Defender', 'Discovery', 'Discovery Sport', 'Freelander', 'Range Rover', 'Range Rover Evoque', 'Range Rover Sport', 'Range Rover Velar'],
  'Lexus': ['CT', 'ES', 'GS', 'GX', 'IS', 'LC', 'LS', 'LX', 'NX', 'RC', 'RX', 'UX'],
  'Mazda': ['2', '3', '5', '6', 'CX-3', 'CX-30', 'CX-5', 'CX-60', 'CX-7', 'MX-5', 'RX-8'],
  'Mercedes-Benz': ['A-Class', 'AMG GT', 'B-Class', 'C-Class', 'CLA', 'CLS', 'E-Class', 'EQA', 'EQB', 'EQC', 'EQE', 'EQS', 'G-Class', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'S-Class', 'SL', 'SLC', 'Sprinter', 'V-Class', 'Vito'],
  'MG': ['3', '4', '5', '6', 'HS', 'Marvel R', 'ZS'],
  'Mini': ['Clubman', 'Convertible', 'Cooper', 'Countryman', 'Electric', 'Hatch', 'Paceman'],
  'Mitsubishi': ['ASX', 'Colt', 'Eclipse Cross', 'Galant', 'L200', 'Lancer', 'Outlander', 'Pajero'],
  'Nissan': ['370Z', 'Ariya', 'GT-R', 'Juke', 'Leaf', 'Micra', 'Murano', 'Navara', 'Note', 'NV200', 'Qashqai', 'X-Trail'],
  'Opel': ['Adam', 'Agila', 'Ampera', 'Astra', 'Corsa', 'Crossland', 'Grandland', 'Insignia', 'Mokka', 'Zafira'],
  'Peugeot': ['107', '108', '2008', '206', '207', '208', '3008', '307', '308', '408', '5008', '508', 'Partner', 'Rifter'],
  'Porsche': ['718', '911', 'Boxster', 'Cayenne', 'Cayman', 'Macan', 'Panamera', 'Taycan'],
  'Renault': ['Arkana', 'Austral', 'Captur', 'Clio', 'Duster', 'Espace', 'Kadjar', 'Kangoo', 'Megane', 'Scenic', 'Talisman', 'Twingo', 'Zoe'],
  'Rolls-Royce': ['Cullinan', 'Dawn', 'Ghost', 'Phantom', 'Spectre', 'Wraith'],
  'Seat': ['Alhambra', 'Arona', 'Ateca', 'Ibiza', 'Leon', 'Tarraco', 'Toledo'],
  'Skoda': ['Citigo', 'Elroq', 'Enyaq', 'Fabia', 'Kamiq', 'Karoq', 'Kodiaq', 'Octavia', 'Rapid', 'Scala', 'Superb', 'Yeti'],
  'Subaru': ['BRZ', 'Crosstrek', 'Forester', 'Impreza', 'Legacy', 'Levorg', 'Outback', 'Solterra', 'WRX', 'XV'],
  'Suzuki': ['Alto', 'Baleno', 'Celerio', 'Grand Vitara', 'Ignis', 'Jimny', 'Swift', 'Vitara'],
  'Tesla': ['Model 3', 'Model S', 'Model X', 'Model Y', 'Roadster'],
  'Toyota': ['Auris', 'Avensis', 'Aygo', 'Camry', 'C-HR', 'Corolla', 'GR Yaris', 'Hilux', 'Land Cruiser', 'Prius', 'RAV4', 'Supra', 'Yaris', 'Yaris Cross'],
  'Volkswagen': ['Arteon', 'Beetle', 'Caddy', 'Golf', 'ID.3', 'ID.4', 'ID.5', 'ID.7', 'Passat', 'Polo', 'T-Cross', 'T-Roc', 'Tiguan', 'Touareg', 'Touran', 'Transporter', 'up!'],
  'Volvo': ['C30', 'C40', 'C70', 'S40', 'S60', 'S80', 'S90', 'V40', 'V60', 'V90', 'XC40', 'XC60', 'XC90'],
  'Xpeng': ['G3', 'G6', 'G9', 'P5', 'P7'],
  'Zeekr': ['001', '007', '009', 'X'],
};

const bodyTypes = ['Convertible', 'Coupe', 'Estate', 'Hatchback', 'MPV', 'Pickup', 'Saloon', 'SUV', 'Van'];
const years = Array.from({ length: 2026 - 1990 + 1 }, (_, i) => String(2026 - i));
const priceOptions = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 15000, 17500, 20000, 25000, 30000, 35000, 40000, 50000, 60000, 75000, 100000];

export default function HeroSearch() {
  const navigate = useNavigate();
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [activeTab, setActiveTab] = useState('cars');

  const models = selectedMake ? modelsByMake[selectedMake] || [] : [];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedMake) params.set('make', selectedMake);
    if (selectedModel) params.set('model', selectedModel);
    if (minYear) params.set('minYear', minYear);
    if (maxYear) params.set('maxYear', maxYear);
    if (minPrice) params.set('minPrice', minPrice);
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (bodyType) params.set('bodyType', bodyType);
    navigate(`/cars-for-sale?${params.toString()}`);
  };

  const tabs = ['Cars', 'Motorbikes', 'Trucks', 'Motorhomes', 'Boats'];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Hero car" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">

          {/* Left headline */}
          <div className="hidden lg:flex flex-col justify-center gap-3 flex-1 pt-8">
            <h1 className="text-white text-4xl xl:text-5xl font-extrabold leading-tight drop-shadow-lg">
              Find Your<br />Perfect Car
            </h1>
            <p className="text-white/80 text-lg">Ireland's largest car marketplace</p>
          </div>

          {/* Search card */}
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-border overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === tab.toLowerCase()
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-5">
              <div className="grid grid-cols-2 gap-3">
                {/* Make */}
                <Select onValueChange={(v) => { setSelectedMake(v); setSelectedModel(''); }}>
                  <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                    <SelectValue placeholder="Make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Make</SelectItem>
                    {makes.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                  </SelectContent>
                </Select>

                {/* Model */}
                <Select
                  disabled={!selectedMake || models.length === 0}
                  onValueChange={setSelectedModel}
                >
                  <SelectTrigger className={`h-11 bg-secondary border-0 text-sm ${!selectedMake || models.length === 0 ? 'opacity-50' : ''}`}>
                    <SelectValue placeholder="Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Model</SelectItem>
                    {models.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                  </SelectContent>
                </Select>

                {/* Min Year */}
                <Select onValueChange={setMinYear}>
                  <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                    <SelectValue placeholder="Min Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Year</SelectItem>
                    {years.map((y) => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                  </SelectContent>
                </Select>

                {/* Max Year */}
                <Select onValueChange={setMaxYear}>
                  <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                    <SelectValue placeholder="Max Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Year</SelectItem>
                    {years.map((y) => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                  </SelectContent>
                </Select>

                {/* Min Price */}
                <Select onValueChange={setMinPrice}>
                  <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                    <SelectValue placeholder="Min Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Price</SelectItem>
                    {priceOptions.map((p) => (
                      <SelectItem key={p} value={String(p)}>€{p.toLocaleString()}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Max Price */}
                <Select onValueChange={setMaxPrice}>
                  <SelectTrigger className="h-11 bg-secondary border-0 text-sm">
                    <SelectValue placeholder="Max Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Price</SelectItem>
                    {priceOptions.map((p) => (
                      <SelectItem key={p} value={String(p)}>€{p.toLocaleString()}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Body Type - full width */}
                <Select onValueChange={setBodyType}>
                  <SelectTrigger className="col-span-2 h-11 bg-secondary border-0 text-sm">
                    <SelectValue placeholder="Body Type (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Body Type</SelectItem>
                    {bodyTypes.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                  </SelectContent>
                </Select>

                {/* Search button - full width */}
                <Button
                  onClick={handleSearch}
                  className="col-span-2 h-11 bg-primary hover:bg-primary/90 text-white font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Search Cars
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}