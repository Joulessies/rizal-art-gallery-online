
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ArtworksSection from '@/components/ArtworksSection';
import FeaturedArtwork from '@/components/FeaturedArtwork';
import Footer from '@/components/Footer';

const Artworks = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ArtworksSection />
        <FeaturedArtwork />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Artworks;
