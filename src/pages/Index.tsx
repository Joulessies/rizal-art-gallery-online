
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen paper-texture">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <motion.div 
          className="container mx-auto px-6 py-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="museum-heading text-3xl md:text-4xl mb-8">Welcome to the José Rizal Art Museum</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg font-serif italic text-gray-700">
              "Art is the expression of the soul."
            </p>
            <p className="mt-6 text-gray-600">
              Discover the artistic side of the Philippine national hero through this digital exhibition of his works, 
              showcasing his talent as a visual artist alongside his literary and political legacy.
            </p>
          </div>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Index;
