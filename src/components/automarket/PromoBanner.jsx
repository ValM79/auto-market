import React from 'react';

export default function PromoBanner() {
  return (
    <div className="mb-6 rounded-xl overflow-hidden h-36 sm:h-44">
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
        alt="Promo"
        className="w-full h-full object-cover"
      />
    </div>
  );
}