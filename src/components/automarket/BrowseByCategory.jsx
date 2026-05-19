import React from 'react';
import { useNavigate } from 'react-router-dom';

const IMG = {
  car: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/cffa66889_generated_image.png',
  newCar: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/700a41555_generated_image.png',
  dealerCars: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/cffa66889_generated_image.png',
  vintageCar: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/77e01c47a_generated_image.png',
  modifiedCar: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/f262f4c3a_generated_image.png',
  truck: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/cd2b5117c_generated_image.png',
  commercial: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/69c5c7c03_generated_image.png',
  trailer: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/1cf4ce53a_generated_image.png',
  camper: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/11ae06ec9_generated_image.png',
  coachBus: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/b9c3a0c85_generated_image.png',
  plant: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/800664dcf_generated_image.png',
  motorbikeExtras: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/34aa93463_generated_image.png',
  caravan: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/fac88e4c9_generated_image.png',
  motorbike: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/34aa93463_generated_image.png',
  vintageBike: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/78a162d71_generated_image.png',
  scooter: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/684c702eb_generated_image.png',
  quad: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/72d1a5340_generated_image.png',
  boatExtras: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/5687cde59_generated_image.png',
  boat: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/87a17cb2c_generated_image.png',
  breaking: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/700a41555_generated_image.png',
  rallyCar: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/f262f4c3a_generated_image.png',
  carParts: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/3211f3316_generated_image.png',
  carExtras: 'https://media.base44.com/images/public/69ceb6b4f41f5a2cee0c7016/ca07bfd68_generated_image.png',
};

const categories = [
[
{ label: 'New Cars', imgKey: 'car' },
{ label: 'Cars', imgKey: 'newCar' },
{ label: 'Cars from Dealerships', imgKey: 'dealerCars' },
{ label: 'Vintage Cars', imgKey: 'vintageCar' },
{ label: 'Modified Cars', imgKey: 'modifiedCar' },
{ label: 'Car Parts', imgKey: 'carParts' },
{ label: 'Car Extras', imgKey: 'carExtras' },
{ label: 'Rally Cars', imgKey: 'rallyCar' },
{ label: 'Breaking & Repairables', imgKey: 'breaking' },
],
[
{ label: 'Trucks', imgKey: 'truck' },
{ label: 'Commercials', imgKey: 'commercial', highlight: true },
{ label: 'Trailers', imgKey: 'trailer' },
{ label: 'Campers', imgKey: 'camper' },
{ label: 'Coaches & Buses', imgKey: 'coachBus' },
{ label: 'Plant Machinery', imgKey: 'plant', highlight: true },
{ label: 'Motorbike Extras', imgKey: 'motorbikeExtras' },
{ label: 'Caravans', imgKey: 'caravan' },
],
[
{ label: 'Motorbikes', imgKey: 'motorbike', highlight: true },
{ label: 'Vintage Bikes', imgKey: 'vintageBike' },
{ label: 'Scooters', imgKey: 'scooter' },
{ label: 'Quads', imgKey: 'quad', highlight: true },
{ label: 'Boats & Jet Skis', imgKey: 'boat' },
{ label: 'Boat Extras', imgKey: 'boatExtras' },
{ label: 'Other Motor', isOther: true },
]];


function CategoryCard({ label, imgKey, isOther }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (label === 'New Cars') navigate('/new-cars');
    if (label === 'Cars') navigate('/cars-for-sale');
    if (label === 'Cars from Dealerships') navigate('/dealership-cars');
    if (label === 'Vintage Cars') navigate('/vintage-cars');
    if (label === 'Modified Cars') navigate('/modified-cars');
    if (label === 'Car Parts') navigate('/car-parts');
    if (label === 'Car Extras') navigate('/car-extras');
    if (label === 'Rally Cars') navigate('/rally-cars');
    if (label === 'Breaking & Repairables') navigate('/breaking-repairables');
    if (label === 'Trucks') navigate('/trucks');
    if (label === 'Trailers') navigate('/trailers');
    if (label === 'Campers') navigate('/campers');
    if (label === 'Coaches & Buses') navigate('/coaches-buses');
    if (label === 'Plant Machinery') navigate('/plant-machinery');
    if (label === 'Motorbike Extras') navigate('/motorbike-extras');
    if (label === 'Motorbikes') navigate('/motorbikes');
    if (label === 'Vintage Bikes') navigate('/vintage-bikes');
    if (label === 'Scooters') navigate('/scooters');
    if (label === 'Quads') navigate('/quads');
    if (label === 'Caravans') navigate('/caravans');
    if (label === 'Boats & Jet Skis') navigate('/boats');
    if (label === 'Boat Extras') navigate('/boat-extras');
    if (label === 'Other Motor') navigate('/other-motor');
    if (label === 'Commercials') navigate('/commercials');
  };

  return (
    <button
      onClick={handleClick}
      className="group flex flex-col items-center bg-white border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-primary/30 transition-all text-center"
    >
      <div className="w-full h-28 bg-secondary/40 flex items-center justify-center overflow-hidden">
        {isOther ? (
          <span className="text-3xl font-bold text-muted-foreground">?</span>
        ) : (
          <img src={IMG[imgKey]} alt={label} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="px-2 py-2.5 w-full">
        <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors leading-tight block">
          {label}
        </span>
      </div>
    </button>
  );
}

export default function BrowseByCategory() {
  const allCats = categories.flat();
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Browse by category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {allCats.map((cat) => (
          <CategoryCard key={cat.label} {...cat} />
        ))}
      </div>
    </section>
  );
}