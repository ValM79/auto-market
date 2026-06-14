import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';

/**
 * Fetches active user-placed ads for specified subsections,
 * sorted by newest first (to appear at the top of category pages).
 */
export function useUserAds(subsections) {
  const [userAds, setUserAds] = useState([]);

  useEffect(() => {
    base44.entities.UserAd.filter({ status: 'active' }, '-created_date', 50)
      .then(ads => {
        const filtered = ads.filter(ad => subsections.includes(ad.subsection));
        setUserAds(filtered);
      })
      .catch(() => setUserAds([]));
  }, []);

  return userAds;
}

/**
 * Converts a UserAd entity record to a ListingCard-compatible item.
 */
export function userAdToListingItem(ad) {
  return {
    id: ad.id,
    title: ad.title,
    price: `€${ad.price}`,
    mileage: ad.mileage,
    location: ad.location,
    year: ad.vehicleYear,
    engine: ad.vehicleFuel,
    image: (ad.photos && ad.photos[0]) || 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80',
    images: [],
    photos: ad.photos ? ad.photos.length : 1,
    sellerType: ad.isTrader ? 'Trader' : 'Private Seller',
    spotlight: ad.spotlight,
    status: 'Newly Listed',
    description: ad.description,
  };
}