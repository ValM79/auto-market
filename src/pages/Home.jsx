import React from 'react';
import Navbar from '../components/automax/Navbar';
import HeroSearch from '../components/automax/HeroSearch';
import BrowseByCategory from '../components/automax/BrowseByCategory';
import Footer from '../components/automax/Footer';
import CarListings from '../components/automax/CarListings';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSearch />
      <BrowseByCategory />
      <CarListings />

      <Footer />
    </div>
  );
}