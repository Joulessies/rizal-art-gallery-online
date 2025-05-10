
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ArtworksSection from '@/components/ArtworksSection';
import TimelineSection from '@/components/TimelineSection';
import FeaturedArtwork from '@/components/FeaturedArtwork';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ArtworksSection />
        <FeaturedArtwork />
        <TimelineSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
