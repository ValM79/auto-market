import React from 'react';

export default function PromoBanner() {
  return (
    <div className="mb-6 rounded-xl overflow-hidden h-36 sm:h-44 relative flex items-center">
      {/* Dark background with car image */}
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
        alt="Promo"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between w-full px-6 sm:px-10">
        <div>
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">Members Exclusive</p>
          <p className="text-white font-extrabold text-2xl sm:text-3xl leading-tight">FLEXIBLE<br />MORTGAGE</p>
          <p className="text-white/60 text-xs mt-1">Lucan District Credit Union</p>
        </div>
        <button className="border-2 border-white text-white font-bold text-xs px-5 py-3 rounded-lg hover:bg-white hover:text-black transition-colors whitespace-nowrap">
          CLICK HERE<br />FOR MORE INFO
        </button>
      </div>
    </div>
  );
}