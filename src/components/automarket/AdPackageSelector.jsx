import React, { useEffect } from 'react';

// Categories that get a single flat-fee package instead of tiered options
export const FLAT_FEE_CATEGORIES = ['Bikes & Bicycles', 'Car Parts', 'Car Extras', 'Boat Extras'];

export const flatFeePackage = {
  name: 'Standard',
  price: '€1',
  priceId: 'price_1Th5c6LQxQzBuaMV5VOoQsht',
  listingDays: 60,
  maxPhotos: 10,
  bumps: 0,
  bumpIntervalWeeks: null,
  spotlightDays: 0,
  features: [
    '60 day listing',
    'Up to 10 photos',
  ],
};

const packages = [
{
  name: "Basic",
  price: '€5',
  priceId: 'price_1TgseALQxQzBuaMVeshJckr1',
  listingDays: 60,
  maxPhotos: 12,
  bumps: 0,
  bumpIntervalWeeks: null,
  spotlightDays: 0,
  features: [
  '60 day listing',
  'Up to 12 photos']
},
{
  name: "Standard",
  price: '€7',
  priceId: 'price_1TgseALQxQzBuaMV0BaeiSxb',
  listingDays: 72,
  maxPhotos: 12,
  bumps: 2,
  bumpIntervalWeeks: 4,
  spotlightDays: 0,
  features: [
  '72 day listing',
  'Up to 12 photos',
  '2x bumps to the top',
  { text: '(1 every 4 weeks automatically)', note: true }]
},
{
  name: 'Premium',
  price: '€15',
  priceId: 'price_1Th4JaLQxQzBuaMVUlbbybA3',
  listingDays: 90,
  maxPhotos: 12,
  bumps: 3,
  bumpIntervalWeeks: 3,
  spotlightDays: 5,
  features: [
  '90 day listing',
  'Up to 12 photos',
  'Ad performance analytics',
  '3x bumps to the top',
  { text: '(1 every 3 weeks automatically)', note: true },
  'Spotlight',
  { text: '(5 days in the top spot)', note: true }]
}];





export { packages };

function PackageCard({ pkg, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(pkg)}
      className={`relative border-2 rounded-xl flex flex-col overflow-hidden cursor-pointer transition-all ${isSelected ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40'}`}>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-sm text-foreground font-medium mb-1">{pkg.name}</p>
        <p className="text-3xl font-bold text-foreground mb-4">{pkg.price}</p>
        <ul className="flex flex-col gap-1.5 flex-1 mb-6">
          {pkg.features.map((f, i) => {
            if (typeof f === 'object' && f.note) {
              return <li key={i} className="text-xs text-muted-foreground ml-5 -mt-1">{f.text}</li>;
            }
            return (
              <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0 inline-block" />
                {f}
              </li>
            );
          })}
        </ul>
        <div className={`w-full text-center font-semibold py-2.5 rounded-lg text-sm transition-colors ${isSelected ? 'bg-primary text-white' : 'border border-foreground text-foreground'}`}>
          {isSelected ? '✓ Selected' : 'Select'}
        </div>
      </div>
    </div>
  );
}

export default function AdPackageSelector({ selectedPackage, onPackageSelected, isFlatFee }) {
  // Auto-select flat fee package on mount / when flat fee mode activates
  React.useEffect(() => {
    if (isFlatFee && (!selectedPackage || selectedPackage.priceId !== flatFeePackage.priceId)) {
      onPackageSelected(flatFeePackage);
    }
  }, [isFlatFee]);

  if (isFlatFee) {
    return (
      <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-foreground mb-2">Ad listing</h2>
        <p className="text-sm text-muted-foreground mb-4">This category has a fixed listing fee.</p>
        <div className="max-w-xs">
          <PackageCard pkg={flatFeePackage} isSelected={true} onSelect={() => {}} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-foreground">Select your ad option</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.name}
            pkg={pkg}
            isSelected={selectedPackage?.name === pkg.name}
            onSelect={onPackageSelected}
          />
        ))}
      </div>
      {!selectedPackage && (
        <p className="text-xs text-muted-foreground text-center mt-3">Select a package above, then click "Sell Now" to proceed to payment.</p>
      )}
    </div>
  );
}